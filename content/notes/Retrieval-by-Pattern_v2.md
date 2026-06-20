---
title: Retrieval by Pattern
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/retrieval-by-pattern@UlQHqw1dbxZnAKbsWsOgU.md
---

# Retrieval by Pattern

The SCAN command in Redis is a cursor-based iterator that does not guarantee to return all matching keys in one call, even if COUNT is specified. Instead, SCAN returns a small subset of keys that match the pattern, requiring subsequent calls to complete the iteration. Redis offers powerful pattern-based key retrieval, allowing users to query multiple keys using wildcard patterns. This functionality primarily relies on the KEYS command, which supports glob-style patterns such as *, ?, and [] for flexible matching.

Learn more from the following resources:

- [@official@SCAN](https://redis.io/docs/latest/commands/scan/)

## 관련 로드맵
- [[Redis|redis]]
