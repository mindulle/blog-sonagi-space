---
title: Channels
tags: [concept, rust]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/rust/content/channels@3nXJg5Y4SUug_dEAj0eQm.md
---

# Channels

Channels enable thread communication via message passing from `std::sync::mpsc` (Multiple Producer, Single Consumer). They have `Sender` for sending data and `Receiver` for receiving. This avoids shared state concurrency issues and enables safe communication between threads without data races.

Visit the following resources to learn more:

- [@official@Channels](https://doc.rust-lang.org/rust-by-example/std_misc/channels.html)
- [@article@Using Channels in Rust: Why and When?](https://howtorust.com/using-channels-in-rust-why-and-when/)

## 관련 로드맵
- [[Rust|rust]]
