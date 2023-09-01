# Behavior Test for OpenDAL

Behavior tests are used to make sure every service works correctly.

To support different testing backends simultaneously, we use `environment value` to carry the backend config.

## Setup

To run the behavior tests, please copy the `.env.example`, which is at project root, to `.env` and change the values on need.

Take `fs` for example, we need to change to enable behavior test on `fs` on `/tmp`.

```dotenv
OPENDAL_FS_TEST=false
OPENDAL_FS_ROOT=/path/to/dir
```

into

```dotenv
OPENDAL_FS_TEST=on
OPENDAL_FS_ROOT=/tmp
```

Notice: If the env variables are not set, all behavior tests will be skipped by default.

## Run

Test all available backends.

```shell
cargo test
```

Test specific backend(such as `fs`).

```shell
cargo test services_fs
```

As `cargo test` only run tests containing the following string in their names, we use `services_fs` to run all tests under `services::fs`.

To run certain types of tests(such as `write`) for `fs`, we use `services_fs::test_write`.

```shell
cargo test services_fs::test_write
```

You can also run specific test(such as `test_stat_dir`) for specific backend.

```shell
cargo test services_fs::test_stat_dir
```

## Debug

To debug a behavior test, you can use `RUST_LOG=debug RUST_BACKTRACE=full cargo test -- --show-output` to print the log with backtrace.

For more details, please visit [cargo test](https://doc.rust-lang.org/cargo/commands/cargo-test.html) or run the command `cargo test --help`.