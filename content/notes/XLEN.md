---
title: XLEN
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/xlen@DQJCMEw13lELcw_AwLfrT.md
---

# XLEN

The XLEN command used to get the length of a stream, returning the number of entries it contains. This simple yet powerful command provides a quick way to assess the size of a stream without retrieving its contents. Unlike other Redis types, zero-length streams are possible so XLEN should be used in
 tandem with TYPE or EXISTS.

Learn more from the following resources:

- [@official@XLEN](https://redis.io/docs/latest/commands/xlen/)

## 관련 로드맵
- [[Redis|redis]]
