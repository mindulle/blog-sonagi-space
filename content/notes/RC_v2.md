---
title: RC
tags: [concept, rust]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/rust/content/rc@U9Bd-GO0QwYVLvESR4PTb.md
---

# Rc

`Rc<T>` (Reference Counting) enables multiple owners of the same heap-allocated data in single-threaded contexts. It tracks the number of references and automatically deallocates data when the count reaches zero. Use `Rc::clone()` to create additional references without deep copying data.

Visit the following resources to learn more:

- [@official@rct - The Reference Counted Smart Pointer](https://doc.rust-lang.org/book/ch15-04-rc.html#rct-the-reference-counted-smart-pointer)

## 관련 로드맵
- [[Rust|rust]]
