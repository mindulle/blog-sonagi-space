---
title: Retry Storm
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/retry-storm@LNmAJmh2ndFtOQIpvX_ga.md
---

# Retry Storm

Retry Storm refers to a situation in which a large number of retries are triggered in a short period of time, leading to a significant increase in traffic and resource usage. This can occur when a system is not properly designed to handle failures or when a component is behaving unexpectedly. This c
an lead to Performance degradation, Increased resource utilization, Increased network traffic, and Poor user experience. To address retry storms, a number of approaches can be taken such as Exponentia
l backoff, Circuit breaking, and Monitoring and alerting.

Visit the following resources to learn more:

- [@article@Retry Storm antipattern](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/retry-storm/)
- [@article@How To Avoid Retry Storms In Distributed Systems](https://faun.pub/how-to-avoid-retry-storms-in-distributed-systems-91bf34f43c7f)

## 관련 로드맵
- [[System Design|System Design]]
