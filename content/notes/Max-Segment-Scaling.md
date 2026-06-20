---
title: Max Segment Scaling
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/max-segment-scaling@1l5dhQWYPhUSg-cy5pSlK.md
---

# Max Segment Scaling

`Max Segment Scaling (MSS)` is a TCP feature that defines the maximum amount of data that can be received in a single TCP segment. It is specified during the TCP connection establishment phase. The MSS is calculated as the data link layer Maximum Transmission Unit (MTU) minus the size of the TCP and
 IP headers. The mechanism helps to avoid fragmentation at the IP layer, ensuring the data packets sent are optimal for the network path taken, preventing potential transmission inefficiencies or pack
et loss issues.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
