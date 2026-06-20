---
title: Procedures and Functions
tags: [concept, postgresql-dba]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/postgresql-dba/content/procedures-and-functions@LiF2Yh818D-zEF58v5Fgr.md
---

# Procedures and Functions in PostgreSQL

In PostgreSQL, functions and procedures encapsulate reusable logic within the database to enhance performance and maintain organization. Functions return a value or a table, take input parameters, and are used in SQL queries, defined with `CREATE FUNCTION`. Procedures, introduced in PostgreSQL 11, d
o not return values but can perform actions and include transaction control commands like `COMMIT` and `ROLLBACK`, defined with `CREATE PROCEDURE` and called using the `CALL` statement. Key difference
s include functions' mandatory return value and integration in SQL queries, while procedures focus on performing operations and managing transactions.

Learn more from the following resources:

- [@official@CREATE PROCEDURE](https://www.postgresql.org/docs/current/sql-createprocedure.html)
- [@official@CREATE FUNCTION](https://www.postgresql.org/docs/current/sql-createfunction.html)
- [@article@PostgreSQL CREATE PROCEDURE](https://www.postgresqltutorial.com/postgresql-plpgsql/postgresql-create-procedure/)

## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
