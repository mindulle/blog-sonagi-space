---
title: Task-Based
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/task-based@LKPcEeqBOPhQOztD3cM3T.md
---

# Task-Based

Task-based multithreading refers to a model where tasks are the units of work abstracted from threads. In this model, application logic is divided into smaller tasks, each capable of running independent of the others. The tasks are then executed by a pool of threads, managed by a scheduler. Unlike t
raditional thread-centric models where each thread performs a specific task, task-based multithreading allows for greater flexibility by decoupling the tasks from the threads and letting the system dy
namically assign tasks to idle threads. With task-based multithreading, developers no longer need to manually manage threading details like creation, control, synchronization, and termination, hence enabling more focus on the development of the game logic.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
