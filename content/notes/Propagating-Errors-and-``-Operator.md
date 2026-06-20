---
title: Propagating Errors and `?` Operator
tags: [concept, rust]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/rust/content/propagating-errors-and--operator@pTC1ucmErVnMbNFnYLJK7.md
---

# Propagating Errors and ? Operator

The `?` operator provides concise error propagation in functions returning `Result` or `Option`. It automatically unwraps `Ok`/`Some` values or early-returns `Err`/`None` to the caller. This eliminates verbose `match` expressions and enables clean, readable error handling patterns.

Visit the following resources to learn more:

- [@official@Recoverable Errors with Result](https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html)
- [@article@Understanding Result, Option, and '?' Operators in Rust](https://howtorust.com/understanding-result-option-and-operators-in-rust/)

## 관련 로드맵
- [[Rust|rust]]
