---
title: shared_ptr
tags: [concept, cpp]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/cpp/content/shared_ptr@b5jZIZD_U_CPg-_bdndjz.md
---

# shared_ptr

`shared_ptr` is a smart pointer in C++ that manages dynamically allocated memory. It enables multiple pointers to safely own and share the same object. When the last `shared_ptr` pointing to an object goes out of scope, the managed object is automatically deleted, preventing memory leaks. It achieve
s this by maintaining a reference count that tracks the number of `shared_ptr` instances pointing to the same memory location.

## 관련 로드맵
- [[cpp|cpp]]
