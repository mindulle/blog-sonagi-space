---
title: Ordered vs Unordered
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/ordered-vs-unordered@WMdCDmFsytsF2AWQXfzC8.md
---

# Ordered vs Not Ordered

In the context of TCP vs UDP, "ordered" and "not ordered" refers to the order in which packets are received. In TCP (Transmission Control Protocol), packets are ordered. This means that the packets of data are sent and received in the same order. For example, if packet 1, packet 2, and packet 3 are sent in that order, they will be delivered and read in that exact order whether, packet 2 takes longer to send or not. On the other hand, UDP (User Datagram Protocol) is not ordered. The packets of data are independent of each other. So, if packet 1, packet 2, and packet 3 are sent in that order, they could be received in a different order such as packet 2, packet 1, then packet 3. This happens because UDP doesn't re-order packets as TCP does.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
