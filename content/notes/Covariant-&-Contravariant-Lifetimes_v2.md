---
title: Covariant & Contravariant Lifetimes
tags: [concept, rust]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/rust/content/covariant--contravariant-lifetimes@7yVvMnvCvLbFa51pESx0j.md
---

# Covariant and Contravariant Lifetimes

Variance describes how subtyping relationships change when types are nested. Covariant types preserve ordering (`&'long T` is subtype of `&'short T`), contravariant reverses it, invariant requires exact matches. Affects how lifetimes work with references, boxes, and function parameters.

Visit the following resources to learn more:

- [@official@Subtyping and Variance](https://doc.rust-lang.org/nomicon/subtyping.html)
- [@article@Demystifying Covariant and Contravariant Lifetimes in Rust](https://medium.com/@murataslan1/demystifying-covariant-and-contravariant-lifetimes-in-rust-76051484fe1c)

## 관련 로드맵
- [[Rust|rust]]
