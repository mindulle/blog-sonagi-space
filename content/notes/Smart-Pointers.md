---
title: Smart Pointers
tags: [concept, cpp]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/cpp/content/smart-pointers@ulvwm4rRPgkpgaqGgyH5a.md
---

# Smart Pointers

Smart pointers are classes that behave like regular pointers but provide automatic memory management. They help prevent memory leaks by automatically deallocating the memory they point to when they are no longer needed. This is achieved through techniques like reference counting and RAII (Resource A
cquisition Is Initialization). Essentially, they encapsulate a raw pointer and ensure that the memory it points to is freed when the smart pointer goes out of scope or is reset.

Visit the following resources to learn more:

- [@article@Smart Pointers](https://en.cppreference.com/book/intro/smart_pointers)
- [@video@SMART POINTERS in C++ (std::unique_ptr, std::shared_ptr, std::weak_ptr)](https://www.youtube.com/watch?v=UOB7-B2MfwA)

## 관련 로드맵
- [[cpp|cpp]]
