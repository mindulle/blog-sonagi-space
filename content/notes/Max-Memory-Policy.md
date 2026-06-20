---
title: Max Memory Policy
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/max-memory-policy@Sd1ENOXSFCz1YqccXjr2A.md
---

# Max Memory Policy

The Max Memory Policy in Redis determines how the server handles data when it reaches the configured maximum memory limit. Redis offers several eviction policies, such as `noeviction` (return an error on writes), `allkeys-lru` (evict the least recently used keys), `volatile-lru` (evict the least rec
ently used keys with an expiration set), `allkeys-random` (evict random keys), and others. These policies allow Redis to optimize memory usage based on the use case, balancing between maintaining data
 availability and minimizing the risk of data loss when memory constraints are reached.

Learn more from the following resources:

- [@official@Database Memory Limits](https://redis.io/docs/latest/operate/rs/databases/memory-performance/memory-limit/)
- [@official@Eviction Policy](https://redis.io/docs/latest/operate/rs/databases/memory-performance/eviction-policy/)

## 관련 로드맵
- [[Redis|redis]]
