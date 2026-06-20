---
title: Asynchronous
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/asynchronous@ThBxS9xIMt9OrXfnto3rW.md
---

# Asynchronous

**Asynchronous programming** is a programming paradigm where the execution of functions or routines does not wait for the activities within them to complete before moving on to subsequent ones. This allows for tasks to be processed independently, making the most of system resources. When a function 
contains an operation such as I/O, database access, or network communication, which may take a long time to complete, this function is wrapped into a future or promise and sent for execution. Meanwhil
e, the core program continues to run. When the wrapped function gets executed, a callback function is used to notify that the computation or I/O is complete. This forms the core of non-blocking or asynchronous execution. It is widely used in server-side programming, game development, and any scenari
o where I/O latency or user experience is a concern. Notably, it is at the core of Node.js and many modern web frameworks.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
