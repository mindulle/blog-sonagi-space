---
title: Patroni
tags: [concept, postgresql-dba]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/postgresql-dba/content/patroni@mm0K_8TFicrYdZQvWFkH4.md
---

# Patroni

Patroni is an open-source tool that automates the setup, management, and failover of PostgreSQL clusters, ensuring high availability. It leverages distributed configuration stores like Etcd, Consul, or ZooKeeper to maintain cluster state and manage leader election. Patroni continuously monitors the 
health of PostgreSQL instances, automatically promoting a replica to primary if the primary fails, minimizing downtime. It simplifies the complexity of managing PostgreSQL high availability by providi
ng built-in mechanisms for replication, failover, and recovery, making it a robust solution for maintaining PostgreSQL clusters in production environments.

Learn more from the following resources:

- [@opensource@zalando/patroni](https://github.com/zalando/patroni)

## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
