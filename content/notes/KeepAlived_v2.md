---
title: KeepAlived
tags: [concept, postgresql-dba]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/postgresql-dba/content/keepalived@xk2G-HUS-dviNW3BAMmJv.md
---

# Keepalived

Keepalived is a robust and widely-used open-source solution for load balancing and high availability. It helps to maintain a stable and perfect working environment even in the presence of failures such as server crashes or connectivity issues.

Keepalived achieves this by utilizing the Linux Virtual Server (LVS) module and the Virtual Router Redundancy Protocol (VRRP). For PostgreSQL database systems, Keepalived can be an advantageous addition to your infrastructure by offering fault tolerance and load balancing. With minimal configuration, it distributes read-only queries among multiple replicated PostgreSQL servers or divides transaction processing across various nodes – ensuring an efficient and resilient system.

Learn more from the following resources:

- [@official@Keepalived](https://www.keepalived.org/)
- [@opensource@acassen/keepalived](https://github.com/acassen/keepalived)
- [@article@Keepalived: High Availability for Self-hosted Services](https://www.virtualizationhowto.com/2023/09/keepalived-high-availability-for-self-hosted-services/)


## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
