---
title: No Caching
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/no-caching@klvHk1_e03Jarn5T46QNi.md
---

# No Caching

No caching antipattern occurs when a cloud application that handles many concurrent requests, repeatedly fetches the same data. This can reduce performance and scalability.

When data is not cached, it can cause a number of undesirable behaviors, including:

*   Repeatedly fetching the same information from a resource that is expensive to access, in terms of I/O overhead or latency.
*   Repeatedly constructing the same objects or data structures for multiple requests.
*   Making excessive calls to a remote service that has a service quota and throttles clients past a certain limit.

Visit the following resources to learn more:

- [@article@No Caching antipattern](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/no-caching/)

## 관련 로드맵
- [[System Design|System Design]]
