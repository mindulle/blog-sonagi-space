---
title: Erase-Remove
tags: [concept, cpp]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/cpp/content/erase-remove@YvmjrZSAOmjhVPo05MJqN.md
---

# Erase-Remove

The Erase-Remove idiom is a common C++ technique used to efficiently remove elements from a container (like `std::vector`, `std::list`, etc.). It involves using `std::remove` (or `std::remove_if`) to move the elements to be removed to the end of the container, followed by using the container's `eras
e()` method to actually remove those elements, effectively shrinking the container.

Visit the following resources to learn more:

- [@article@std::remove, std::remove_if](https://en.cppreference.com/w/cpp/algorithm/remove.html)
- [@video@C++ STL algorithm - erase-remove idiom -- std::remove(_if, _copy_if) | Modern Cpp Series Ep. 154](https://www.youtube.com/watch?v=btyuTSb_238)

## 관련 로드맵
- [[cpp|cpp]]
