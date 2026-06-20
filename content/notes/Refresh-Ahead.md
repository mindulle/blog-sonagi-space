---
title: Refresh Ahead
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/refresh-ahead@Bgqgl67FK56ioLNFivIsc.md
---

# Refresh-ahead

You can configure the cache to automatically refresh any recently accessed cache entry prior to its expiration.

Refresh-ahead can result in reduced latency vs read-through if the cache can accurately predict which items are likely to be needed in the future.

Disadvantage of refresh-ahead:
------------------------------

*   Not accurately predicting which items are likely to be needed in the future can result in reduced performance than without refresh-ahead.

![](https://i.imgur.com/sBXb7lb.png)

Visit the following resources to learn more:

- [@article@From cache to in-memory data grid](http://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast)
- [@article@Caching Strategy: Refresh Ahead Pattern](https://www.enjoyalgorithms.com/blog/refresh-ahead-caching-pattern)

## 관련 로드맵
- [[System Design|System Design]]
