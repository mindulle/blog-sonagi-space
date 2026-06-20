---
title: Repository Pattern
tags: [concept, android]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/android/content/repository-pattern@ZF5XgO7I_J9928bD3CVXo.md
---

# Repository Pattern

The `Repository Pattern` separates the data sources from the rest of the application. It acts as a mediator between different data sources, such as persistent models, web services, or caches. Instead of having the network and database calls spread out throughout your ViewModel, they are encapsulated
 within a Repository class. This separation will make the code clean, easy to read and testable. It provides a simple API for data access, the rest of the app doesn't need to know where the data is co
ming from it just asks the repository.

Visit the following resources to learn more:

- [@article@Repository Pattern](https://en.wikipedia.org/wiki/Repository_pattern)

## 관련 로드맵
- [[android|android]]
