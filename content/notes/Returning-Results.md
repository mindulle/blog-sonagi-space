---
title: Returning Results
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/returning-results@2gRIstNT-fTkv5GZ692gx.md
---

# Returning Results

Background jobs execute asynchronously in a separate process, or even in a separate location, from the UI or the process that invoked the background task. Ideally, background tasks are "fire and forget" operations, and their execution progress has no impact on the UI or the calling process. This mea
ns that the calling process does not wait for completion of the tasks. Therefore, it cannot automatically detect when the task ends.

Visit the following resources to learn more:

- [@article@Returning Results - Background Jobs](https://learn.microsoft.com/en-us/azure/architecture/best-practices/background-jobs#returning-results)

## 관련 로드맵
- [[System Design|System Design]]
