// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

use std::collections::HashMap;
use std::io::Read;
use std::io::Write;
use std::mem::size_of;
use std::sync::Mutex;
use std::time::Duration;

use log::debug;
use opendal::ErrorKind;
use opendal::Operator;
use sharded_slab::Slab;
use tokio::runtime::Builder;
use tokio::runtime::Runtime;
use vm_memory::ByteValued;

use crate::error::*;
use crate::filesystem_message::*;
use crate::virtiofs_util::Reader;
use crate::virtiofs_util::Writer;

/// Version number of this interface.
const KERNEL_VERSION: u32 = 7;
/// Minor version number of this interface.
const KERNEL_MINOR_VERSION: u32 = 38;
/// Minimum Minor version number supported.
const MIN_KERNEL_MINOR_VERSION: u32 = 27;
/// The length of the header part of the message.
const BUFFER_HEADER_SIZE: u32 = 4096;
/// The maximum length of the data part of the message, used for read/write data.
const MAX_BUFFER_SIZE: u32 = 1 << 20;
/// The default time to live of the attributes.
const DEFAULT_TTL: Duration = Duration::from_secs(1);
/// The default mode of the opened file.
const DEFAULT_OPENED_FILE_MODE: u32 = 0o755;

enum FileType {
    Dir,
    File,
}

#[derive(Clone)]
struct OpenedFile {
    path: String,
    metadata: Attr,
}

struct InnerWriter {
    // #[allow(dead_code)] here will be removed after write is implemented.
    #[allow(dead_code)]
    writer: opendal::Writer,
    // #[allow(dead_code)] here will be removed after write is implemented.
    #[allow(dead_code)]
    written: u64,
}

impl OpenedFile {
    fn new(file_type: FileType, path: &str, uid: u32, gid: u32) -> OpenedFile {
        let mut attr: Attr = unsafe { std::mem::zeroed() };
        attr.uid = uid;
        attr.gid = gid;
        match file_type {
            FileType::Dir => {
                attr.nlink = 2;
                attr.mode = libc::S_IFDIR | DEFAULT_OPENED_FILE_MODE;
            }
            FileType::File => {
                attr.nlink = 1;
                attr.mode = libc::S_IFREG | DEFAULT_OPENED_FILE_MODE;
            }
        }
        OpenedFile {
            path: path.to_string(),
            metadata: attr,
        }
    }
}

fn opendal_error2error(error: opendal::Error) -> Error {
    match error.kind() {
        ErrorKind::Unsupported => Error::from(libc::EOPNOTSUPP),
        ErrorKind::IsADirectory => Error::from(libc::EISDIR),
        ErrorKind::NotFound => Error::from(libc::ENOENT),
        ErrorKind::PermissionDenied => Error::from(libc::EACCES),
        ErrorKind::AlreadyExists => Error::from(libc::EEXIST),
        ErrorKind::NotADirectory => Error::from(libc::ENOTDIR),
        ErrorKind::RangeNotSatisfied => Error::from(libc::EINVAL),
        ErrorKind::RateLimited => Error::from(libc::EBUSY),
        _ => Error::from(libc::ENOENT),
    }
}

fn opendal_metadata2opened_file(
    path: &str,
    metadata: &opendal::Metadata,
    uid: u32,
    gid: u32,
) -> OpenedFile {
    let file_type = match metadata.mode() {
        opendal::EntryMode::DIR => FileType::Dir,
        _ => FileType::File,
    };
    OpenedFile::new(file_type, path, uid, gid)
}

/// Filesystem is a filesystem implementation with opendal backend,
/// and will decode and process messages from VMs.
pub struct Filesystem {
    rt: Runtime,
    core: Operator,
    uid: u32,
    gid: u32,
    opened_files: Slab<OpenedFile>,
    // Since we need to manually manage the allocation of inodes,
    // we record the inode of each opened file here.
    opened_files_map: Mutex<HashMap<String, u64>>,
    opened_files_writer: Mutex<HashMap<String, InnerWriter>>,
}

impl Filesystem {
    pub fn new(core: Operator) -> Filesystem {
        let rt = Builder::new_multi_thread()
            .worker_threads(4)
            .enable_all()
            .build()
            .unwrap();

        // Here we set the uid and gid to 1000, which is the default value.
        Filesystem {
            rt,
            core,
            uid: 1000,
            gid: 1000,
            opened_files: Slab::new(),
            opened_files_map: Mutex::new(HashMap::new()),
            opened_files_writer: Mutex::new(HashMap::new()),
        }
    }

    pub fn handle_message(&self, mut r: Reader, w: Writer) -> Result<usize> {
        let in_header: InHeader = r.read_obj().map_err(|e| {
            new_vhost_user_fs_error("failed to decode protocol messages", Some(e.into()))
        })?;
        if in_header.len > (MAX_BUFFER_SIZE + BUFFER_HEADER_SIZE) {
            // The message is too long here.
            return Filesystem::reply_error(in_header.unique, w);
        }
        if let Ok(opcode) = Opcode::try_from(in_header.opcode) {
            match opcode {
                Opcode::Init => self.init(in_header, r, w),
                Opcode::Destroy => self.destroy(in_header, r, w),
                Opcode::Lookup => self.lookup(in_header, r, w),
                Opcode::Getattr => self.getattr(in_header, r, w),
                Opcode::Setattr => self.setattr(in_header, r, w),
                Opcode::Create => self.create(in_header, r, w),
                Opcode::Unlink => self.unlink(in_header, r, w),
                Opcode::Open => self.open(in_header, r, w),
                Opcode::Release => self.release(in_header, r, w),
            }
        } else {
            Filesystem::reply_error(in_header.unique, w)
        }
    }
}

impl Filesystem {
    fn reply_ok<T: ByteValued>(
        out: Option<T>,
        data: Option<&[u8]>,
        unique: u64,
        mut w: Writer,
    ) -> Result<usize> {
        let mut len = size_of::<OutHeader>();
        if out.is_some() {
            len += size_of::<T>();
        }
        if let Some(data) = data {
            len += data.len();
        }
        let header = OutHeader {
            unique,
            error: 0, // Return no error.
            len: len as u32,
        };
        w.write_all(header.as_slice()).map_err(|e| {
            new_vhost_user_fs_error("failed to encode protocol messages", Some(e.into()))
        })?;
        if let Some(out) = out {
            w.write_all(out.as_slice()).map_err(|e| {
                new_vhost_user_fs_error("failed to encode protocol messages", Some(e.into()))
            })?;
        }
        if let Some(data) = data {
            w.write_all(data).map_err(|e| {
                new_vhost_user_fs_error("failed to encode protocol messages", Some(e.into()))
            })?;
        }
        Ok(w.bytes_written())
    }

    fn reply_error(unique: u64, mut w: Writer) -> Result<usize> {
        let header = OutHeader {
            unique,
            error: libc::EIO, // Here we simply return I/O error.
            len: size_of::<OutHeader>() as u32,
        };
        w.write_all(header.as_slice()).map_err(|e| {
            new_vhost_user_fs_error("failed to encode protocol messages", Some(e.into()))
        })?;
        Ok(w.bytes_written())
    }

    fn check_write_flags(&self, flags: u32) -> Result<(bool, bool)> {
        let is_trunc = flags & libc::O_TRUNC as u32 != 0 || flags & libc::O_CREAT as u32 != 0;
        let is_append = flags & libc::O_APPEND as u32 != 0;

        let mode = flags & libc::O_ACCMODE as u32;
        let is_write = mode == libc::O_WRONLY as u32 || mode == libc::O_RDWR as u32 || is_append;
        if !is_write {
            Err(Error::from(libc::EINVAL))?;
        }

        // OpenDAL only supports truncate write and append write,
        // so O_TRUNC or O_APPEND needs to be specified explicitly
        if (is_write && !is_trunc && !is_append) || is_trunc && !is_write {
            Err(Error::from(libc::EINVAL))?;
        }

        let capability = self.core.info().full_capability();
        if is_trunc && !capability.write {
            Err(Error::from(libc::EACCES))?;
        }
        if is_append && !capability.write_can_append {
            Err(Error::from(libc::EACCES))?;
        }

        Ok((is_trunc, is_append))
    }
}

impl Filesystem {
    fn init(&self, in_header: InHeader, mut r: Reader, w: Writer) -> Result<usize> {
        let InitIn { major, minor, .. } = r.read_obj().map_err(|e| {
            new_vhost_user_fs_error("failed to decode protocol messages", Some(e.into()))
        })?;

        if major != KERNEL_VERSION || minor < MIN_KERNEL_MINOR_VERSION {
            return Filesystem::reply_error(in_header.unique, w);
        }

        // We will directly return ok and do nothing for now.
        let out = InitOut {
            major: KERNEL_VERSION,
            minor: KERNEL_MINOR_VERSION,
            max_write: MAX_BUFFER_SIZE,
            ..Default::default()
        };
        Filesystem::reply_ok(Some(out), None, in_header.unique, w)
    }

    fn destroy(&self, _in_header: InHeader, _r: Reader, _w: Writer) -> Result<usize> {
        // do nothing for destroy.
        Ok(0)
    }

    fn lookup(&self, in_header: InHeader, mut r: Reader, w: Writer) -> Result<usize> {
        let name_len = in_header.len as usize - size_of::<InHeader>();
        let mut buf = vec![0; name_len];
        r.read_exact(&mut buf).map_err(|e| {
            new_unexpected_error("failed to decode protocol messages", Some(e.into()))
        })?;
        let name = String::from_utf8(buf).map_err(|e| {
            new_unexpected_error("failed to decode protocol messages", Some(e.into()))
        })?;

        debug!("lookup: parent inode={} name={}", in_header.nodeid, name);

        let parent_path = match self
            .opened_files
            .get(in_header.nodeid as usize)
            .map(|f| f.path.clone())
        {
            Some(path) => path,
            None => return Filesystem::reply_error(in_header.unique, w),
        };

        let path = format!("{}/{}", parent_path, name);
        let metadata = match self.rt.block_on(self.do_get_metadata(&path)) {
            Ok(metadata) => metadata,
            Err(_) => return Filesystem::reply_error(in_header.unique, w),
        };

        let out = EntryOut {
            nodeid: metadata.metadata.ino,
            entry_valid: DEFAULT_TTL.as_secs(),
            attr_valid: DEFAULT_TTL.as_secs(),
            entry_valid_nsec: DEFAULT_TTL.subsec_nanos(),
            attr_valid_nsec: DEFAULT_TTL.subsec_nanos(),
            attr: metadata.metadata,
            ..Default::default()
        };
        Filesystem::reply_ok(Some(out), None, in_header.unique, w)
    }

    fn getattr(&self, in_header: InHeader, _r: Reader, w: Writer) -> Result<usize> {
        debug!("getattr: inode={}", in_header.nodeid);

        let path = match self
            .opened_files
            .get(in_header.nodeid as usize)
            .map(|f| f.path.clone())
        {
            Some(path) => path,
            None => return Filesystem::reply_error(in_header.unique, w),
        };

        let metadata = match self.rt.block_on(self.do_get_metadata(&path)) {
            Ok(metadata) => metadata,
            Err(_) => return Filesystem::reply_error(in_header.unique, w),
        };

        let out = AttrOut {
            attr_valid: DEFAULT_TTL.as_secs(),
            attr_valid_nsec: DEFAULT_TTL.subsec_nanos(),
            attr: metadata.metadata,
            ..Default::default()
        };
        Filesystem::reply_ok(Some(out), None, in_header.unique, w)
    }

    fn setattr(&self, in_header: InHeader, _r: Reader, w: Writer) -> Result<usize> {
        debug!("setattr: inode={}", in_header.nodeid);

        // do nothing for setattr.
        self.getattr(in_header, _r, w)
    }

    fn create(&self, in_header: InHeader, mut r: Reader, w: Writer) -> Result<usize> {
        let CreateIn { flags, .. } = r.read_obj().map_err(|e| {
            new_vhost_user_fs_error("failed to decode protocol messages", Some(e.into()))
        })?;

        let name_len = in_header.len as usize - size_of::<InHeader>() - size_of::<CreateIn>();
        let mut buf = vec![0; name_len];
        r.read_exact(&mut buf).map_err(|e| {
            new_unexpected_error("failed to decode protocol messages", Some(e.into()))
        })?;
        let name = String::from_utf8(buf).map_err(|e| {
            new_unexpected_error("failed to decode protocol messages", Some(e.into()))
        })?;

        debug!("create: parent inode={} name={}", in_header.nodeid, name);

        let parent_path = match self
            .opened_files
            .get(in_header.nodeid as usize)
            .map(|f| f.path.clone())
        {
            Some(path) => path,
            None => return Filesystem::reply_error(in_header.unique, w),
        };

        let path = format!("{}/{}", parent_path, name);
        let mut attr = OpenedFile::new(FileType::File, &path, self.uid, self.gid);
        let inode = self
            .opened_files
            .insert(attr.clone())
            .expect("failed to allocate inode");
        attr.metadata.ino = inode as u64;
        let mut opened_files_map = self.opened_files_map.lock().unwrap();
        opened_files_map.insert(path.to_string(), inode as u64);

        let writer = match self.rt.block_on(self.do_get_writer(&path, flags)) {
            Ok(writer) => writer,
            Err(_) => return Filesystem::reply_error(in_header.unique, w),
        };

        let mut opened_file_writer = self.opened_files_writer.lock().unwrap();
        opened_file_writer.insert(path, writer);

        let entry_out = EntryOut {
            nodeid: attr.metadata.ino,
            entry_valid: DEFAULT_TTL.as_secs(),
            attr_valid: DEFAULT_TTL.as_secs(),
            entry_valid_nsec: DEFAULT_TTL.subsec_nanos(),
            attr_valid_nsec: DEFAULT_TTL.subsec_nanos(),
            attr: attr.metadata,
            ..Default::default()
        };
        let open_out = OpenOut {
            ..Default::default()
        };
        Filesystem::reply_ok(
            Some(entry_out),
            Some(open_out.as_slice()),
            in_header.unique,
            w,
        )
    }

    fn unlink(&self, in_header: InHeader, mut r: Reader, w: Writer) -> Result<usize> {
        let name_len = in_header.len as usize - size_of::<InHeader>();
        let mut buf = vec![0; name_len];
        r.read_exact(&mut buf).map_err(|e| {
            new_unexpected_error("failed to decode protocol messages", Some(e.into()))
        })?;
        let name = String::from_utf8(buf).map_err(|e| {
            new_unexpected_error("failed to decode protocol messages", Some(e.into()))
        })?;

        debug!("unlink: parent inode={} name={}", in_header.nodeid, name);

        let parent_path = match self
            .opened_files
            .get(in_header.nodeid as usize)
            .map(|f| f.path.clone())
        {
            Some(path) => path,
            None => return Filesystem::reply_error(in_header.unique, w),
        };

        let path = format!("{}/{}", parent_path, name);
        if self.rt.block_on(self.do_delete(&path)).is_err() {
            return Filesystem::reply_error(in_header.unique, w);
        }

        self.opened_files.remove(in_header.nodeid as usize);
        let mut opened_files_map = self.opened_files_map.lock().unwrap();
        opened_files_map.remove(&path);

        Filesystem::reply_ok(None::<u8>, None, in_header.unique, w)
    }

    fn open(&self, in_header: InHeader, mut r: Reader, w: Writer) -> Result<usize> {
        debug!("open: inode={}", in_header.nodeid);

        let OpenIn { flags, .. } = r.read_obj().map_err(|e| {
            new_vhost_user_fs_error("failed to decode protocol messages", Some(e.into()))
        })?;

        let path = match self
            .opened_files
            .get(in_header.nodeid as usize)
            .map(|f| f.path.clone())
        {
            Some(path) => path,
            None => return Filesystem::reply_error(in_header.unique, w),
        };

        let writer = match self.rt.block_on(self.do_get_writer(&path, flags)) {
            Ok(writer) => writer,
            Err(_) => return Filesystem::reply_error(in_header.unique, w),
        };

        let mut opened_file_writer = self.opened_files_writer.lock().unwrap();
        opened_file_writer.insert(path, writer);

        let out = OpenOut {
            ..Default::default()
        };
        Filesystem::reply_ok(Some(out), None, in_header.unique, w)
    }

    fn release(&self, in_header: InHeader, _r: Reader, w: Writer) -> Result<usize> {
        debug!("release: inode={}", in_header.nodeid);

        let path = match self
            .opened_files
            .get(in_header.nodeid as usize)
            .map(|f| f.path.clone())
        {
            Some(path) => path,
            None => return Filesystem::reply_error(in_header.unique, w),
        };

        let mut opened_file_writer = self.opened_files_writer.lock().unwrap();
        opened_file_writer.remove(&path);

        Filesystem::reply_ok(None::<u8>, None, in_header.unique, w)
    }
}

impl Filesystem {
    async fn do_get_metadata(&self, path: &str) -> Result<OpenedFile> {
        let metadata = self.core.stat(path).await.map_err(opendal_error2error)?;
        let mut attr = opendal_metadata2opened_file(path, &metadata, self.uid, self.gid);

        let mut opened_files_map = self.opened_files_map.lock().unwrap();
        if let Some(inode) = opened_files_map.get(path) {
            attr.metadata.ino = *inode;
        } else {
            let inode = self
                .opened_files
                .insert(attr.clone())
                .expect("failed to allocate inode");
            attr.metadata.ino = inode as u64;
            opened_files_map.insert(path.to_string(), inode as u64);
        }

        Ok(attr)
    }

    async fn do_get_writer(&self, path: &str, flags: u32) -> Result<InnerWriter> {
        let (_, is_append) = self.check_write_flags(flags)?;
        let writer = self
            .core
            .writer_with(path)
            .append(is_append)
            .await
            .map_err(opendal_error2error)?;
        let written = if is_append {
            self.core
                .stat(path)
                .await
                .map_err(opendal_error2error)?
                .content_length()
        } else {
            0
        };

        Ok(InnerWriter { writer, written })
    }

    async fn do_delete(&self, path: &str) -> Result<()> {
        self.core.delete(path).await.map_err(opendal_error2error)
    }
}