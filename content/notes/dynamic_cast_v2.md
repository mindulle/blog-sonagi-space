---
title: dynamic_cast
tags: [concept, cpp]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/cpp/content/dynamic_cast@4BdFcuQ5KNW94cu2jz-vE.md
---

# Dynamic Cast

`dynamic_cast` is a C++ casting operator primarily used within polymorphic class hierarchies to safely convert pointers or references from a base class to a derived class. Unlike static casts, it performs a runtime check to ensure the validity of the conversion. If the object being cast is not actually an instance of the target derived class, `dynamic_cast` returns a null pointer (for pointer casts) or throws a `std::bad_cast` exception (for reference casts), preventing undefined behavior and enabling safer downcasting.

## 관련 로드맵
- [[cpp|cpp]]
