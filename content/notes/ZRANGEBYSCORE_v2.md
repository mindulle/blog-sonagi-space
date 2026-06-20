---
title: ZRANGEBYSCORE
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/zrangebyscore@OlbixGa5RmdqEt7snY04j.md
---

# ZRANGEBYSCORE

This command retrieves elements from a sorted set stored at the specified key. It returns all elements with scores falling within the given min and max range, inclusive of both boundaries. Elements are ordered from lowest to highest score. For elements sharing the same score, the command returns them in lexicographical order. This ordering is an inherent property of Redis sorted sets and requires no additional computation.

Learn more from the following resources:

- [@official@ZRANGEBYSCORE](https://redis.io/docs/latest/commands/zrangebyscore/)

## 관련 로드맵
- [[Redis|redis]]
