---
title: Copy on Write
tags: [concept, cpp]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/cpp/content/copy-on-write@O2Du5gHHxFxAI2u5uO8wu.md
---

# Copy on Write

The Copy-on-Write (CoW) idiom is an optimization technique used to defer or eliminate the cost of copying resources until the first write operation. Instead of creating a new copy of an object immediately, the original object and the "copy" share the same underlying resource. Only when one of the ob
jects attempts to modify the shared resource is a true copy created. This can significantly improve performance by avoiding unnecessary copying, especially for large objects.

## 관련 로드맵
- [[cpp|cpp]]
