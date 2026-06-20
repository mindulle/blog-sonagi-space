---
title: Thread Local Storage
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/thread-local-storage@IeD-oQ1bkwlKNC-R0lJjZ.md
---

# Thread Local Storage

`Thread Local Storage (TLS)` is a mechanism by which variables are allocated such that each thread gets its own individually allocated variable, but the name of the variable is the same in each thread. In other words, the same variable can simultaneously hold different values for different threads. 
TLS is required when you need to use a global or static variable in a thread-safe manner but the data must be unique to each thread. TLS can be used in many applications, but it is particularly useful
 for storing per-thread state in server applications.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
