---
title: Data Partitioning
tags: [concept, postgresql-dba]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/postgresql-dba/content/data-partitioning@OiGRtLsc28Tv35vIut6B6.md
---

# Data Partitioning

Data partitioning is a technique that divides a large table into smaller, more manageable pieces called partitions. Each partition is a smaller table that stores a subset of the data, usually based on specific criteria such as ranges, lists, or hashes. Partitioning can improve query performance, simplifies data maintenance tasks, and optimizes resource utilization.

Learn more from the following resources:

- [@official@Table Partitioning](https://www.postgresql.org/docs/current/ddl-partitioning.html)
- [@article@How to use Table Partitioning to Scale PostgreSQL](https://www.enterprisedb.com/postgres-tutorials/how-use-table-partitioning-scale-postgresql)

## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
