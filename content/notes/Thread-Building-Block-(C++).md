---
title: Thread Building Block (C++)
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/thread-building-block-c@tiG0mZpLJ2zUr2IPYyhnv.md
---

# Thread Building Block (C++)

The **Thread Building Blocks** (TBB) is an open-source C++ library developed by Intel. It is designed to take advantage of multi-core processors by simplifying the process of deploying parallel tasks. Using TBB, you can easily break down your tasks into smaller sub-tasks that can be processed in par
allel, improving the speed and efficiency of your game server. TBB encompasses generic parallel algorithms, concurrent containers, a scalable memory allocator, work-stealing task scheduler, and low-le
vel synchronization primitives. However, it's not a library for threading as POSIX or Win32 threads, rather, it's a higher-level, task-based parallelism that abstracts platform details and threading mechanism for performance and scalability.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
