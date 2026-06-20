---
title: Explicit Lifetime Annotations
tags: [concept, rust]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/rust/content/explicit-lifetime-annotations@R5HIVS-lyCp9b46aXqx2m.md
---

# Explicit Lifetime Annotations

Explicit lifetime annotations use syntax like `'a` to specify relationships between reference lifetimes in function signatures. Required when the compiler can't infer lifetimes automatically. Example: `fn longest<'a>(x: &'a str, y: &'a str) -> &'a str` ensures all references live equally long.

Visit the following resources to learn more:

- [@official@Explicit Annotation](https://doc.rust-lang.org/rust-by-example/scope/lifetime/explicit.html)
- [@article@What are Lifetimes in Rust? Explained with Code Examples](https://www.freecodecamp.org/news/what-are-lifetimes-in-rust-explained-with-code-examples/)

## 관련 로드맵
- [[Rust|rust]]
