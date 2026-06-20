---
title: Using Logical Replication
tags: [concept, postgresql-dba]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/postgresql-dba/content/using-logical-replication@MVVWAf9Hk3Fom-wBhO64R.md
---

# 4.2 Using Logical Replication

Logical replication is an asynchronous feature that allows data modification to be transferred from a source (publisher) to a target system (subscriber) across different PostgreSQL database versions. It provides more granular control over the data copied and is useful during an upgrade.

**Advantages of Logical Replication**

- It allows you to replicate only specific tables, rather than the entire database.
- You can create replicas with different database schemas by using a transformation layer between publisher and subscriber.
- It allows you to perform a live upgrade, avoiding the downtime of your database.

Learn more from the following resources:

- [@official@Logical Replication](https://www.postgresql.org/docs/current/logical-replication.html)
- [@youtube@PostgreSQL Logical Replication Guide](https://www.youtube.com/watch?v=OvSzLjkMmQo)

## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
