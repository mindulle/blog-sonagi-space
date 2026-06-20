---
title: LMOVE
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/lmove@9KvHcS5F4Jj5ZXgIAdOQY.md
---

# LMOVE

`LMOVE` is a Redis command used to atomically move an element from one list to another. It pops an element from the source list (either from the left or right end) and pushes it to the destination list (either to the left or right end), based on the specified parameters (`LEFT` or `RIGHT`). This com
mand is useful for implementing queue-like patterns or managing work distribution between different lists without race conditions, as it ensures that the element is safely transferred in a single atom
ic operation.

Learn more from the following resources:

- [@official@LMOVE](https://redis.io/docs/latest/commands/lmove/)

## 관련 로드맵
- [[Redis|redis]]
