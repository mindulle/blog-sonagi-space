---
title: weak_ptr
tags: [concept, cpp]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/cpp/content/weak_ptr@vUwSS-uX36OWZouO0wOcy.md
---

# weak_ptr

`weak_ptr` is a smart pointer in C++ that holds a non-owning reference to an object managed by a `shared_ptr`. It doesn't participate in the object's ownership count, meaning that it doesn't prevent the object from being destroyed if the `shared_ptr`s owning the object go out of scope. Its primary u
se is to detect if the object managed by the `shared_ptr` still exists. You can obtain a `shared_ptr` from a `weak_ptr` using `lock()`, but this might return an empty `shared_ptr` if the object has al
ready been destroyed.

## 관련 로드맵
- [[cpp|cpp]]
