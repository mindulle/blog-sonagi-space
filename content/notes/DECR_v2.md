---
title: DECR
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/decr@t4BXPofF8OCqH5KHwdYVh.md
---

# DECR

The `DECR` command in Redis decreases the integer value of a key by 1. If the key does not exist, it is initialized to 0 before performing the decrement. If the key contains a value that is not an integer, Redis returns an error. This command is useful in counters and for tracking state changes in a simple, atomic way.

Learn more from the following resources:

- [@official@DECR Documentation](https://redis.io/docs/latest/commands/decr/)
- [@article@Redis String DECR](https://www.w3resource.com/redis/redis-decr-key.php)

## 관련 로드맵
- [[Redis|redis]]
