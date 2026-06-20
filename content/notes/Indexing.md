---
title: Indexing
tags: [concept, data-engineer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/data-engineer/content/indexing@ilbFKqhfYyykjJ7cOngwx.md
---

# Indexing

Indexing is a data structure technique to efficiently retrieve data from a database. It essentially creates a lookup that can be used to quickly find the location of data records on a disk. Indexes are created using a few database columns and are capable of rapidly locating data without scanning eve
ry row in a database table each time the database table is accessed. Indexes can be created using any combination of columns in a database table, reducing the amount of time it takes to find data.

Indexes can be structured in several ways: Binary Tree, B-Tree, Hash Map, etc., each having its own particular strengths and weaknesses. When creating an index, it's crucial to understand which type of index to apply in order to achieve maximum efficiency. Indexes, like any other database feature, m
ust be used wisely because they require disk space and need to be maintained, which can slow down insert and update operations.

## 관련 로드맵
- [[data-engineer|data-engineer]]
