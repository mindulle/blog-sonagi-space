---
title: OLTP vs OLAP
tags: [concept, data-engineer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/data-engineer/content/oltp-vs-olap@-VQQmIUGesnrT1N6kH5et.md
---

# OLTP vs OLAP

Online Transaction Processing (OLTP) refers to a class of systems designed to manage transaction-oriented applications, typically for data entry and retrieval transactions in database systems. OLTP systems are characterized by a large number of short online transactions (INSERT, UPDATE, DELETE), whe
re the emphasis is on speed, efficiency, and maintaining data integrity in multi-access environments. PostgreSQL supports OLTP workloads through features like ACID compliance (Atomicity, Consistency, 
Isolation, Durability), MVCC (Multi-Version Concurrency Control) for high concurrency, efficient indexing, and robust transaction management. These features ensure reliable, fast, and consistent processing of high-volume, high-frequency transactions critical to OLTP applications.

Online Analytical Processing (OLAP) refers to a class of systems designed for query-intensive tasks, typically used for data analysis and business intelligence. OLAP systems handle complex queries that aggregate large volumes of data, often from multiple sources, to support decision-making processes
.

Visit the following resources to learn more:

- [@article@What is OLTP?](https://www.oracle.com/uk/database/what-is-oltp/)
- [@article@What is OLAP? - Online Analytical Processing Explained](https://aws.amazon.com/what-is/olap/)
- [@video@OLTP vs OLAP](https://www.youtube.com/watch?v=iw-5kFzIdgY)

## 관련 로드맵
- [[data-engineer|data-engineer]]
