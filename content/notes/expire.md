---
title: expire
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/expire@nS0DHhfy4wxHItgOFhulA.md
---

# EXPIRE

The EXPIRE command is used to set a time-to-live (TTL) for a key in seconds, after which the key will be automatically deleted. If you need to specify the expiration time in milliseconds, you can use the PEXPIRE command. Both commands help manage memory by allowing you to automatically remove keys t
hat are no longer needed, which is especially useful in caching and session management scenarios.

Learn more from the following resources:

- [@official@Expiring Keys](https://redis.io/ebook/part-2-core-concepts/chapter-3-commands-in-redis/3-7-other-commands/3-7-3-expiring-keys/)
- [@official@EXPIRE](https://redis.io/docs/latest/commands/expire/)

## 관련 로드맵
- [[Redis|redis]]
