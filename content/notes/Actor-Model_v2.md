---
title: Actor Model
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/actor-model@KUQEgHldZPOLwFoXqQ2vM.md
---

# Actor Model

The **Actor Model** is a conceptual model to deal with concurrent computation. It defines some general rules for how the system's components should behave and interact with each other. In the Actor Model, each object (actor) has its own private state and communication with other actors is done by exchanging messages. Actors read messages from a personal mailbox and may change their own inner state, create more actors, or send messages to other actors. The Actor Model makes it easier for developers to write concurrent and distributed systems by providing high-level abstractions over low-level threading details.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
