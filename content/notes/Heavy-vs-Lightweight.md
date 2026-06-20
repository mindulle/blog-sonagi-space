---
title: Heavy vs Lightweight
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/heavy-vs-lightweight@OYXKtl4A-vaK6yGO6hS6n.md
---

# Heavyweight vs Lightweight

TCP (Transmission Control Protocol) is often described as a "heavyweight" protocol because it provides numerous features such as error-checking, guaranteed delivery, and order-of-arrival of data packets, which makes it more complex to implement in the server. This complexity results in additional se
rver load, making it heavier in terms of processing resources and system requirements. 

On the other hand, UDP (User Datagram Protocol) is known as a "lightweight" protocol. It is simpler and faster because it does not offer the same extensive features as TCP. UDP does not guarantee delivery, does not require initial handshake establishment between communicating systems, and does not p
ut data packets in order, thereby reducing the computation and rendering it lightweight.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
