---
title: const_cast
tags: [concept, cpp]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/cpp/content/const_cast@5g22glc97siQOcTkHbwan.md
---

# const_cast

`const_cast` is a C++ casting operator that allows you to explicitly add or remove the `const` or `volatile` qualifier from a variable's type. This essentially enables you to modify an object that was initially declared as `const` or pass a `const` object to a function that expects a non-`const` arg
ument. It's a powerful tool but should be used with caution, as modifying a truly `const` object directly can lead to undefined behavior.

## 관련 로드맵
- [[cpp|cpp]]
