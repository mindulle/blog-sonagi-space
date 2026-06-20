---
title: IOCP
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/iocp@7pgdOZomhGilBTwfJLMbm.md
---

# IOCP (I/O Completion Ports)  

**I/O Completion Ports (IOCP)** is a high-performance asynchronous I/O mechanism in Windows, 
designed to efficiently handle large numbers of concurrent network connections. It is widely 
used in server-side game development to optimize networking performance, making it ideal for 
MMORPGs and real-time multiplayer games. Unlike `select` or `WSA-Poll`, IOCP uses a thread 
pool and a queue-based event system to process completed I/O operations asynchronously, 
minimizing CPU overhead and improving scalability. By leveraging IOCP, game servers can 
efficiently handle thousands of connections with minimal latency, making it the preferred 
choice for high-performance Windows-based game networking.  

Visit the following resources to learn more:

- [@documentation@Microsoft IOCP Documentation](https://learn.microsoft.com/en-us/windows/win32/fileio/i-o-completion-ports)  

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
