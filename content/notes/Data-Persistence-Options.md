---
title: Data Persistence Options
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/data-persistence-options@8uRpPJ0iD4XnQPKruQc8P.md
---

# Data Persistence Options

Redis offers two main data persistence options: **RDB (Redis Database)** snapshots and **AOF (Append-Only File)**. RDB creates point-in-time snapshots of the dataset at specified intervals, making it suitable for infrequent backups but with potential data loss between snapshots. AOF logs every write
 operation and replays them on restart, providing more durable persistence with finer control over data recovery. You can also configure Redis to use both methods for a balance between fast recovery a
nd minimal data loss. Additionally, Redis supports running in memory-only mode without persistence.

## 관련 로드맵
- [[Redis|redis]]
