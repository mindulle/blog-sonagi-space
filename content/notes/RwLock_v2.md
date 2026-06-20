---
title: RwLock
tags: [concept, rust]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/rust/content/rwlock@WzGl4DkANjUu7VC1AIWI-.md
---

# RwLock

`RwLock<T>` (Read-Write Lock) allows multiple concurrent readers OR one exclusive writer, unlike Mutex which allows only one accessor. Use `read()` for shared access and `write()` for exclusive access. Ideal for read-heavy workloads where data is frequently read but rarely modified.

Visit the following resources to learn more:

- [@official@RwLock](https://doc.rust-lang.org/std/sync/struct.RwLock.html)
- [@article@Rust Read-Write Locks: Managing Concurrent Read and Write Access](https://medium.com/@TechSavvyScribe/rust-read-write-locks-managing-concurrent-read-and-write-access-a6ab689bbed3)

## 관련 로드맵
- [[Rust|rust]]
