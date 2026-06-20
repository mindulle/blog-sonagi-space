---
title: Identity Maps
tags: [concept, software-design-architecture]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/software-design-architecture/content/identity-maps@tb0X1HtuiGwz7YhQ5xPsV.md
---

# Identity Maps

Identity Maps is a pattern used in enterprise application development to maintain a map of objects that have been loaded from the database, keyed by their unique identifier. It is used to ensure that multiple copies of the same object are not created in memory when the same data is accessed multiple
 times.

The identity map pattern is typically used in conjunction with an ORM (Object-Relational Mapping) tool. When an object is loaded from the database, it is first checked against the identity map to see if it has already been loaded. If it has, the existing object is returned, instead of creating a new
 copy.

Visit the following resources to learn more:

- [@article@Overview of Identity map pattern](https://en.wikipedia.org/wiki/Identity_map_pattern)
- [@video@Tutorial - Identity Map Design Pattern](https://youtube.com/watch?v=erDxkIyNudY)

## 관련 로드맵
- [[software-design-architecture|software-design-architecture]]
