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

use std::fmt::Display;
use std::fmt::Formatter;

use async_trait::async_trait;

use crate::raw::*;
use crate::*;

/// WriteOperation is the name for APIs of Writer.
#[derive(Debug, Copy, Clone, Hash, Eq, PartialEq)]
#[non_exhaustive]
pub enum WriteOperation {
    /// Operation for [`Write::write`]
    Write,
    /// Operation for [`Write::abort`]
    Abort,
    /// Operation for [`Write::close`]
    Close,
    /// Operation for [`BlockingWrite::write`]
    BlockingWrite,
    /// Operation for [`BlockingWrite::close`]
    BlockingClose,
}

impl WriteOperation {
    /// Convert self into static str.
    pub fn into_static(self) -> &'static str {
        self.into()
    }
}

impl Display for WriteOperation {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.into_static())
    }
}

impl From<WriteOperation> for &'static str {
    fn from(v: WriteOperation) -> &'static str {
        use WriteOperation::*;

        match v {
            Write => "Writer::write",
            Abort => "Writer::abort",
            Close => "Writer::close",
            BlockingWrite => "BlockingWriter::write",
            BlockingClose => "BlockingWriter::close",
        }
    }
}

/// Writer is a type erased [`Write`]
pub type Writer = Box<dyn Write>;

/// Write is the trait that OpenDAL returns to callers.
#[async_trait]
pub trait Write: Unpin + Send + Sync {
    /// Write given bytes into writer.
    ///
    /// # Behavior
    ///
    /// - `Ok(n)` means `n` bytes has been written successfully.
    /// - `Err(err)` means error happens and no bytes has been written.
    ///
    /// It's possible that `n < bs.len()`, caller should pass the remaining bytes
    /// repeatedly until all bytes has been written.
    async fn write(&mut self, bs: &dyn oio::WriteBuf) -> Result<usize>;

    /// Abort the pending writer.
    async fn abort(&mut self) -> Result<()>;

    /// Close the writer and make sure all data has been flushed.
    async fn close(&mut self) -> Result<()>;
}

#[async_trait]
impl Write for () {
    async fn write(&mut self, bs: &dyn oio::WriteBuf) -> Result<usize> {
        let _ = bs;

        unimplemented!("write is required to be implemented for oio::Write")
    }

    async fn abort(&mut self) -> Result<()> {
        Err(Error::new(
            ErrorKind::Unsupported,
            "output writer doesn't support abort",
        ))
    }

    async fn close(&mut self) -> Result<()> {
        Err(Error::new(
            ErrorKind::Unsupported,
            "output writer doesn't support close",
        ))
    }
}

/// `Box<dyn Write>` won't implement `Write` automatically.
///
/// To make Writer work as expected, we must add this impl.
#[async_trait]
impl<T: Write + ?Sized> Write for Box<T> {
    async fn write(&mut self, bs: &dyn oio::WriteBuf) -> Result<usize> {
        (**self).write(bs).await
    }

    async fn abort(&mut self) -> Result<()> {
        (**self).abort().await
    }

    async fn close(&mut self) -> Result<()> {
        (**self).close().await
    }
}

/// BlockingWriter is a type erased [`BlockingWrite`]
pub type BlockingWriter = Box<dyn BlockingWrite>;

/// BlockingWrite is the trait that OpenDAL returns to callers.
pub trait BlockingWrite: Send + Sync + 'static {
    /// Write whole content at once.
    fn write(&mut self, bs: &dyn oio::WriteBuf) -> Result<usize>;

    /// Close the writer and make sure all data has been flushed.
    fn close(&mut self) -> Result<()>;
}

impl BlockingWrite for () {
    fn write(&mut self, bs: &dyn oio::WriteBuf) -> Result<usize> {
        let _ = bs;

        unimplemented!("write is required to be implemented for oio::BlockingWrite")
    }

    fn close(&mut self) -> Result<()> {
        Err(Error::new(
            ErrorKind::Unsupported,
            "output writer doesn't support close",
        ))
    }
}

/// `Box<dyn BlockingWrite>` won't implement `BlockingWrite` automatically.
///
/// To make BlockingWriter work as expected, we must add this impl.
impl<T: BlockingWrite + ?Sized> BlockingWrite for Box<T> {
    fn write(&mut self, bs: &dyn oio::WriteBuf) -> Result<usize> {
        (**self).write(bs)
    }

    fn close(&mut self) -> Result<()> {
        (**self).close()
    }
}