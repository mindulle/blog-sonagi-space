---
title: reinterpret_cast
tags: [concept, cpp]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/cpp/content/reinterpret_cast@ZMyFDJrpCauGrY5NZkOwg.md
---

# reinterpret_cast

`reinterpret_cast` is a powerful but potentially dangerous type of casting operator in C++. It allows you to convert between unrelated pointer types, integer types, or between pointers and integers. Unlike other casts, it doesn't perform any type checking or data conversion. Its primary function is to reinterpret the bit pattern of an expression as a different type, making it useful for low-level operations, but also requiring extreme caution to avoid undefined behavior. Use it only when absolutely necessary and understand the underlying memory layout involved.

## 관련 로드맵
- [[cpp|cpp]]
