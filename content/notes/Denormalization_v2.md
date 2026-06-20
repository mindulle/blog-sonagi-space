---
title: Denormalization
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/denormalization@Zp9D4--DgtlAjE2nIfaO_.md
---

# Denormalization

Denormalization attempts to improve read performance at the expense of some write performance. Redundant copies of the data are written in multiple tables to avoid expensive joins. Some RDBMS such as PostgreSQL and Oracle support materialized views which handle the work of storing redundant information and keeping redundant copies consistent.

Once data becomes distributed with techniques such as federation and sharding, managing joins across data centers further increases complexity. Denormalization might circumvent the need for such complex joins.

Visit the following resources to learn more:

- [@article@Denormalization](https://en.wikipedia.org/wiki/Denormalization)

## 관련 로드맵
- [[System Design|system-design]]
