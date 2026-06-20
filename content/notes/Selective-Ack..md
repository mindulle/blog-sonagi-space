---
title: Selective Ack.
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/selective-ack@SPpOO25b7wpajWDIrKi1u.md
---

# Selective Acknowledgement

Selective Acknowledgement (SACK) is a mechanism introduced in TCP to improve its efficiency in handling packet loss in the network. When TCP detects packet loss, it normally retransmits all packets sent after the lost packet, regardless of whether they were received successfully or not. SACK, howeve
r, allows the receiver to acknowledge non-consecutive packets, effectively informing the sender exactly which packets were received successfully and which weren't. By using this mechanism, TCP can sel
ectively retransmit only those packets that were lost, saving bandwidth and improving overall performance.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
