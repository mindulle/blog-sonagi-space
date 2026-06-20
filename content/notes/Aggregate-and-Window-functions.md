---
title: Aggregate and Window functions
tags: [concept, postgresql-dba]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/postgresql-dba/content/aggregate-and-window-functions@iQqEC1CnVAoM7x455jO_S.md
---

# Aggregate and Window Functions

Aggregate functions in PostgreSQL perform calculations on a set of rows and return a single value, such as `SUM()`, `AVG()`, `COUNT()`, `MAX()`, and `MIN()`. Window functions, on the other hand, calculate values across a set of table rows related to the current row while preserving the row structure
. Common window functions include `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `NTILE()`, `LAG()`, and `LEAD()`. These functions are crucial for data analysis, enabling complex queries and insights by su
mmarizing and comparing data effectively.

Learn more from the following resources:

- [@article@Data Processing With PostgreSQL Window Functions](https://www.timescale.com/learn/postgresql-window-functions)
- [@article@Why & How to Use Window Functions to Aggregate Data in Postgres](https://coderpad.io/blog/development/window-functions-aggregate-data-postgres/)

## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
