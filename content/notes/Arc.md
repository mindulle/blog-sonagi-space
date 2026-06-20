---
title: Arc
tags: [concept, rust]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/rust/content/arc@yYmV5qkldu0FkDhOhWOXs.md
---

# Arc

`Arc<T>` (Atomic Reference Counting) is a thread-safe smart pointer for sharing immutable data across multiple threads. It uses atomic operations to track reference counts, allowing multiple ownership of heap-allocated data. When the reference count reaches zero, the data is automatically cleaned up.

Visit the following resources to learn more:

- [@official@Arc in std::sync](https://doc.rust-lang.org/std/sync/struct.Arc.html)
- [@official@Arc in Rust Lang](https://doc.rust-lang.org/rust-by-example/std/arc.html)

## 관련 로드맵
- [[Rust|rust]]
