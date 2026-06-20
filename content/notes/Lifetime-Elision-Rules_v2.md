---
title: Lifetime Elision Rules
tags: [concept, rust]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/rust/content/lifetime-elision-rules@qJI8GObmsxyc_tTtUEOAd.md
---

# Lifetime Elision Rules

Lifetime elision allows the compiler to infer lifetimes in common patterns, reducing explicit annotations. Rules: each reference parameter gets its own lifetime, single input lifetime applies to all outputs, methods with `&self` propagate its lifetime to outputs. Simplifies code while maintaining safety.

Visit the following resources to learn more:

- [@official@Lifetime Elision](https://doc.rust-lang.org/reference/lifetime-elision.html)
- [@article@Understanding Lifetime Elision in Rust](https://masteringbackend.com/posts/understanding-lifetime-elision-in-rust)

## 관련 로드맵
- [[Rust|rust]]
