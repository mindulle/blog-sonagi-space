---
title: RDB vs AOF Tradeoffs
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/rdb-vs-aof-tradeoffs@3S-qqOlfr60HR4VvDr4He.md
---

# RDB vs AOF Tradeoffs

When comparing RDB (Redis Database Backup) and AOF (Append-Only File) for data persistence in Redis, several trade-offs must be considered.

**RDB** is optimized for performance and efficient storage, creating point-in-time snapshots of the dataset at specified intervals. It is faster for startup since it loads a single file and consumes less disk I/O during normal operations. However, it may lead to data loss between snapshots if the se
rver crashes, as changes made during that interval are not saved.

**AOF**, on the other hand, logs every write operation in real-time, allowing for more granular recovery with minimal data loss, as you can replay commands to reconstruct the dataset. This comes at the cost of increased disk I/O and potential performance overhead, especially with frequent write oper
ations. The AOF file can also grow significantly, requiring periodic rewriting to optimize size.

Learn more from the following resources:

- [@official@RDB Advantages](https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/#rdb-advantages)
- [@official@AOF Advantages](https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/#aof-advantages)
- [@article@AOF vs RDB, Which One to Choose?](https://codedamn.com/news/backend/redis-data-persistence-aof-vs-rdb)

## 관련 로드맵
- [[Redis|redis]]
