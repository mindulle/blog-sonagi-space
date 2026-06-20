---
title: INCR
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/incr@5K9qyC4mrhXYWOC8WSq8C.md
---

# INCR

`INCR` command used to increment the value of a string key by 1. If the key does not exist, it initializes the key with a value of 0 before performing the increment operation, resulting in a value of 1. If the key contains a non-integer value, the command will return an error. `INCR` is atomic, meaning it is safe to use in concurrent environments without race conditions, making it ideal for use cases like counters or tracking metrics.

Learn more from the following resources:

- [@official@INCR](https://redis.io/docs/latest/commands/incr/)

## 관련 로드맵
- [[Redis|redis]]
