---
title: Application Caching
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/application-caching@5Ux_JBDOkflCaIm4tVBgO.md
---

# Application Caching

In-memory caches such as Memcached and Redis are key-value stores between your application and your data storage. Since the data is held in RAM, it is much faster than typical databases where data is stored on disk. RAM is more limited than disk, so [cache invalidation](https://en.wikipedia.org/wiki
/Cache_algorithms) algorithms such as [least recently used (LRU)](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_\(LRU\)) can help invalidate 'cold' entries and keep 'hot
' data in RAM.

Redis has the following additional features:

*   Persistence option
*   Built-in data structures such as sorted sets and lists

Generally, you should try to avoid file-based caching, as it makes cloning and auto-scaling more difficult.

Visit the following resources to learn more:

- [@opensource@Intro to Application Caching](https://github.com/donnemartin/system-design-primer#application-caching)

## 관련 로드맵
- [[System Design|System Design]]
