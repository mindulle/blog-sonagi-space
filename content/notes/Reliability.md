---
title: Reliability
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/reliability@Vh81GnOUOZvDOlOyI5PwT.md
---

# Reliability

Reliability refers to how consistently a data packet can be transferred from one system to another over a network. In terms of the User Datagram Protocol (UDP), it has a lack of reliability built into it. This means UDP does not guarantee that your data will reach its destination, it merely sends th
e packets without any acknowledgement of receipt. Unlike its counterpart, Transmission Control Protocol (TCP), which implements error-checking mechanisms to ensure data integrity and delivery. In summ
ary, if you require high reliability in your server side game development, protocols other than UDP might need to be considered.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
