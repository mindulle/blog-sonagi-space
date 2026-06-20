---
title: SFINAE
tags: [concept, cpp]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/cpp/content/sfinae@3C5UfejDX-1Z8ZF6C53xD.md
---

# SFINAE (Substitution Failure Is Not An Error)

SFINAE is a core principle in C++ template metaprogramming that enables the compiler to choose the most suitable function or class template specialization during compilation. It leverages the idea that when the compiler attempts to substitute template arguments into a template and the substitution r
esults in an invalid type or expression, this failure is not immediately treated as a compilation error. Instead, the compiler silently discards that specialization and continues searching for other v
iable options, thus allowing for conditional compilation based on type traits and other compile-time properties.

## 관련 로드맵
- [[cpp|cpp]]
