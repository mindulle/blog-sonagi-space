---
title: PgBouncer Alternatives
tags: [concept, postgresql-dba]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/postgresql-dba/content/pgbouncer-alternatives@3V1PPIeB0i9qNUsT8-4O-.md
---

# Connection Pooling: Alternatives to PgBouncer

Pgpool-II, HAProxy, and Odyssey are prominent tools for enhancing PostgreSQL performance and availability. **Pgpool-II** is a versatile connection pooler offering load balancing, replication, and connection limits to optimize performance. **HAProxy** excels as a load balancer for distributing connec
tions across PostgreSQL servers, featuring health checks and SSL/TLS support for secure, high-availability setups. **Odyssey**, developed by Yandex, is a multithreaded connection pooler designed for h
igh-performance deployments, providing advanced routing, transparent SSL, and load balancing capabilities tailored for large-scale systems.

Learn more from the following resources:

- [@opensource@yandex/odyssey](https://github.com/yandex/odyssey)
- [@official@HAProxy Website](http://www.haproxy.org/)
- [@official@PGPool Website](https://www.pgpool.net/mediawiki/index.php/Main_Page)

## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
