---
title: Proactor
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/proactor@Tvxe2NemcH21y-eB4bosv.md
---

# Proactor

The **Proactor** pattern is an event-driven application design pattern used in asynchronous programming, and is a variant of the Reactor Pattern, but with an important distinction in terms of control flow handling. Instead of the application explicitly triggering and managing operations, this respon
sibility is delegated to the asynchronous operation processor, also known as the proactor. The proactor initiates an asynchronous operation, and once the operation is complete, it determines the appro
priate service to dispatch the completion event to. In other words, proactors are responsible for initiating asynchronous operations, while completion handlers are responsible for dictating what happens next, after the operations complete.


## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
