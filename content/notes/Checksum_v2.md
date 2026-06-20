---
title: Checksum
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/checksum@XxBl-zO7CF6DpOZ2bMDxJ.md
---

# Checksum

A **checksum** in TCP (Transmission Control Protocol) is a 16-bit field in the TCP header used to perform error checks on the segments. TCP stack computes the checksum value for the data transmitted and sends it along with the data to the receiving system. The receiving system re-computes the checksum and compares it with the value sent along with the data. If both the computed values match, the data is assumed to be free from transmission errors. However, if the computed values don't match, TCP will detect a possible change in received data, and the receiver will request for the re-transmission of the lost or corrupted data packets. Please note that while the checksum operation helps to ensure data integrity, it is not entirely foolproof as it might not detect all possible errors, particularly those that involve multiple bit changes.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
