---
title: LRANGE
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/lrange@8JTtBy6oD2wFYDizVkcVa.md
---

# LRANGE

`LRANGE` is a Redis command that retrieves a specified range of elements from a list, defined by a start and stop index. The indices can be positive (starting from 0) or negative (e.g., -1 for the last element). This command is commonly used to fetch subsets of a list without loading the entire list into memory, making it useful for paginating data, viewing portions of a queue, or analyzing a segment of ordered data in an efficient manner.

Learn more from the following resources:

- [@official@LRANGE](https://redis.io/docs/latest/commands/lrange/)

## 관련 로드맵
- [[Redis|redis]]
