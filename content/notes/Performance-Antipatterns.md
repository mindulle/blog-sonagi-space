---
title: Performance Antipatterns
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/performance-antipatterns@p--uEm6klLx_hKxKJiXE5.md
---

# Performance Antipatterns

Performance antipatterns in system design refer to common mistakes or suboptimal practices that can lead to poor performance in a system. These patterns can occur at different levels of the system and can be caused by a variety of factors such as poor design, lack of optimization, or lack of underst
anding of the workload.

Some of the examples of performance antipatterns include:

*   **N+1 queries:** This occurs when a system makes multiple queries to a database to retrieve related data, instead of using a single query to retrieve all the necessary data.
*   **Chatty interfaces:** This occurs when a system makes too many small and frequent requests to an external service or API, instead of making fewer, larger requests.
*   **Unbounded data:** This occurs when a system retrieves or processes more data than is necessary for the task at hand, leading to increased resource usage and reduced performance.
*   **Inefficient algorithms:** This occurs when a system uses an algorithm that is not well suited to the task at hand, leading to increased resource usage and reduced performance.

Visit the following resources to learn more:

- [@article@Performance antipatterns for cloud applications](https://learn.microsoft.com/en-us/azure/architecture/antipatterns/)
- [@feed@Explore top posts about Performance](https://app.daily.dev/tags/performance?ref=roadmapsh)

## 관련 로드맵
- [[System Design|System Design]]
