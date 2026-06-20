---
title: System Catalog
tags: [concept, postgresql-dba]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/postgresql-dba/content/system-catalog@lDuBFA7cEMnd7Cl9MDgnf.md
---

# System Catalog

The PostgreSQL system catalog is a set of tables and views that store metadata about the database objects, providing critical information for database management and querying. Key system catalog tables include `pg_database` (information about databases), `pg_tables` (details of tables), `pg_indexes`
 (index information), `pg_class` (general information about tables, indexes, and sequences), `pg_attribute` (column details for each table), and `pg_roles` (user and role information). These catalogs 
enable the database engine and users to efficiently manage schema, security, and query optimization, ensuring effective database operations and maintenance.

Learn more from the following resources:

- [@official@System Catalogs](https://www.postgresql.org/docs/current/catalogs.html)
- [@article@Exploring the PostgreSQL System Catalogs](https://www.openlogic.com/blog/postgresql-system-catalog-overview)

## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
