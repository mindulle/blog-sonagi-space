---
title: Cache Aside
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/cache-aside@bffJlvoLHFldS0CluWifP.md
---

# Cache-aside

The application is responsible for reading and writing from storage. The cache does not interact with storage directly. The application does the following:

*   Look for entry in cache, resulting in a cache miss
    
*   Load entry from the database
    
*   Add entry to cache
    
*   Return entry
    
      def get_user(self, user_id):
        user = cache.get("user.{0}", user_id)
        if user is None:
            user = db.query("SELECT * FROM users WHERE user_id = {0}", user_id)
        if user is not None:
            key = "user.{0}".format(user_id)
            cache.set(key, json.dumps(user))
        return user
    
[Memcached](https://memcached.org/) is generally used in this manner. Subsequent reads of data added to cache are fast. Cache-aside is also referred to as lazy loading. Only the requested data is cached, which avoids filling up the cache with data that isn't requested.

![Cache Aside](https://i.imgur.com/Ujf0awN.png)

Visit the following resources to learn more:

- [@article@From cache to in-memory data grid](https://www.slideshare.net/tmatyashovsky/from-cache-to-in-memory-data-grid-introduction-to-hazelcast)

## 관련 로드맵
- [[System Design|system-design]]


---
## 상세 내용 (Merged from /home/mindulle/projects/llm-wiki/20_Wiki/Computing/Concepts/Cache-Aside_v2.md)
# Cache Aside

Load data on demand into a cache from a data store. This can improve performance and also helps to maintain consistency between data held in the cache and data in the underlying data store.

Visit the following resources to learn more:

- [@article@Cache-Aside pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside)

## 관련 로드맵
- [[System Design|system-design]]