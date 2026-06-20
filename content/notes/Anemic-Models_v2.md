---
title: Anemic Models
tags: [concept, software-design-architecture]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/software-design-architecture/content/anemic-models@nVaoI4IDPVEsdtFcjGNRw.md
---

# Anemic Models

An Anemic model, also known as an anemic domain model, is a type of domain model in which the domain objects only contain data (attributes) and lack behavior. An anemic model often results in the use of data-transfer objects (DTOs) and service layer to handle the behavior.

An anemic model is considered an anti-pattern in object-oriented programming (OOP) because it violates the principles of encapsulation and separation of concerns. In an anemic model, the behavior is separated from the data, and is typically implemented in a separate service layer, which can lead to a complex, tightly coupled, and hard-to-maintain codebase.

Visit the following resources to learn more:

- [@article@Overview of Anemic Domain Model](https://en.wikipedia.org/wiki/Anemic_domain_model)

## 관련 로드맵
- [[software-design-architecture|software-design-architecture]]
