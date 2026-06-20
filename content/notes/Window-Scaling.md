---
title: Window Scaling
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/window-scaling@zvBKjceXRSfEe_3MDCEL5.md
---

# Window Scaling

Window Scaling is a mechanism in the Transmission Control Protocol (TCP) that provides support for larger receiver window sizes beyond the maximum limit of 65,535 bytes. This TCP feature is essential when dealing with high latency or high bandwidth networks (common in server-side game development), 
where frames might be significantly delayed or rapidly transmitted. The window size initially specified in the TCP header is augmented via a scale factor (defined during the connection setup), allowin
g the receiver window size to be as large as 1 gigabyte. However, keep in mind that Window Scaling can only be employed at the connection setup stage; once the connection is established, the scaling factor cannot be changed.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
