---
title: Windows
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/windows@mW2L_9NckgPRH7g5W9NHq.md
---

# Windows

In the context of server-side game development, Windows operating system offers an API for Thread Local Storage (TLS). This refers to a mechanism by which variables are allocated that are unique for each thread in a program. When a thread reads from or writes to a TLS index, it is actually referenci
ng a thread-specific memory block. This memory block is dynamically allocated from the system heap when the thread is created and subsequently freed up when the thread is terminated. This management o
f memory is done implicitly by the system which can reduce complexity for developers.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
