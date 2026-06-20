---
title: Using Indexes
tags: [concept, sql]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/sql/content/using-indexes@9wOgP0i9G4HSeZGn2Gm7r.md
---

# Using Indexes

Indexes in SQL are database objects that improve the speed of data retrieval operations on database tables. They work similarly to an index in a book, allowing the database engine to quickly locate data without scanning the entire table. Proper use of indexes can significantly enhance query performa
nce, especially for large tables. However, they come with trade-offs: while they speed up reads, they can slow down write operations (INSERT, UPDATE, DELETE) as the index also needs to be updated. Com
mon types include B-tree indexes (default in most systems), bitmap indexes, and full-text indexes. Understanding when and how to create indexes is crucial for database optimization. This involves analyzing query patterns, understanding the data distribution, and balancing the needs of different type
s of operations on the database.

Visit the following resources to learn more:

- [@article@What is an index in SQL?](https://stackoverflow.com/questions/2955459/what-is-an-index-in-sql)
- [@video@SQL Indexes - Definition, Examples, and Tips](https://www.youtube.com/watch?v=NZgfYbAmge8)

## 관련 로드맵
- [[sql|sql]]
