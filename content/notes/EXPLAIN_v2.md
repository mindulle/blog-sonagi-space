---
title: EXPLAIN
tags: [concept, postgresql-dba]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/postgresql-dba/content/explain@n2OjwxzIHnATraRWi5Ddl.md
---

# Query Analysis: EXPLAIN in PostgreSQL

Understanding the performance and efficiency of your queries is crucial when working with databases. In PostgreSQL, the `EXPLAIN` command helps to analyze and optimize your queries by providing insights into the query execution plan. This command allows you to discover bottlenecks, inefficient table scans, improper indexing, and other issues that may impact your query performance.

`EXPLAIN` generates a query execution plan without actually executing the query. It shows the nodes in the plan tree, the order in which they will be executed, and the estimated cost of each operation.

Learn more from the following resources:

- [@official@Using EXPLAIN](https://www.postgresql.org/docs/current/using-explain.html)
- [@article@PostgreSQL EXPLAIN](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-explain/)

## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
