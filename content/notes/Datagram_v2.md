---
title: Datagram
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/datagram@wD_HWc9YxPhlkilt585pg.md
---

# Datagram

A **Datagram** is the basic unit of data transfer in network communication using protocols such as User Datagram Protocol (UDP). Each datagram operates independently of each other, meaning they may be received in a different order than they were sent, or they might not be received at all. Therefore, unlike TCP (Transmission Control Protocol), UDP does not guarantee that datagrams are delivered in the same order that they were sent, or even at all - hence known as connectionless protocol. However, it is faster and more efficient for applications that do not require delivery guarantees, such as voice over IP, live video broadcasts, and other real-time applications. Each datagram contains information about the sender, the intended recipient, and the data that it is intended to communicate along with its size and other specifications.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
