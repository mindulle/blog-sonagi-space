---
title: Segment Structure
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/segment-structure@zTCmPUp9j5P1wpGgiboMa.md
---

# Segment Structure

TCP (Transmission Control Protocol) uses a method called "segmentation" to manage data transmission. In this approach, TCP divides a stream of data into smaller parts, known as "segments". Each of these segments is then independently sent over the internet. A basic TCP segment consists of a header and the data section. The header contains various fields such as source port, destination port, sequence number, acknowledgment number, data offset, reserved section, control bit, window, checksum, urgent pointer, and options. The rest of the segment is occupied by the data transferred by TCP. Understanding the structure of these segments is crucial for understanding how TCP, and thereby much of the Internet, operates.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
