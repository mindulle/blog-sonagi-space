---
title: HTAP
tags: [concept, postgresql-dba]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/postgresql-dba/content/htap@rHDlm78yroRrrAAcabEAl.md
---

# HTAP

Hybrid Transactional/Analytical Processing (HTAP) in PostgreSQL refers to a database system's ability to efficiently handle both Online Transaction Processing (OLTP) and Online Analytical Processing (OLAP) workloads simultaneously. PostgreSQL achieves this through its robust architecture, which supp
orts ACID transactions for OLTP and advanced analytical capabilities for OLAP. Key features include Multi-Version Concurrency Control (MVCC) for high concurrency, partitioning and parallel query execu
tion for performance optimization, and extensions like PL/pgSQL for complex analytics. PostgreSQL's ability to manage transactional and analytical tasks in a unified system reduces data latency and improves real-time decision-making, making it an effective platform for HTAP applications.

Learn more from the following resources:

- [@article@HTAP: Hybrid Transactional and Analytical Processing](https://www.snowflake.com/guides/htap-hybrid-transactional-and-analytical-processing/)
- [@article@What is HTAP?](https://planetscale.com/blog/what-is-htap)

## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
