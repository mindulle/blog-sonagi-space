---
title: Physical Storage and File Layout
tags: [concept, postgresql-dba]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/postgresql-dba/content/physical-storage-and-file-layout@gweDHAB58gKswdwfpnRQT.md
---

# Physical Storage and File Layout

PostgreSQL's physical storage and file layout optimize data management and performance through a structured organization within the data directory, which includes subdirectories like `base` for individual databases, `global` for cluster-wide tables, `pg_wal` for Write-Ahead Logs ensuring durability, and `pg_tblspc` for tablespaces allowing flexible storage management. Key configuration files like `postgresql.conf`, `pg_hba.conf`, and `pg_ident.conf` are also located here. This layout facilitates efficient data handling, recovery, and maintenance, ensuring robust database operations.

Learn more from the following resources:

- [@article@What is $PGDATA in PostgreSQL?](https://stackoverflow.com/questions/26851709/what-is-pgdata-in-postgresql)
- [@official@TOAST](https://www.postgresql.org/docs/current/storage-toast.html)

## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
