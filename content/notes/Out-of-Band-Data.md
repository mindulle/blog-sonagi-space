---
title: Out-of-Band Data
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/out-of-band-data@3OMu3RM-6pMjqY1jAmC2-.md
---

# Out-of-Band Data

"Out of band" data, in the context of server-side game development, refers to data that is transmitted separately from the main data stream. This data is used for managing control information rather than actual game data, for instance, data regarding the status of the server, notifications about iss
ues, or urgent commands. Given its importance, it's often designed to bypass any queueing or buffering systems to be delivered straight to the application, hence its name — it is "out of band" compare
d to the normal data transmissions in the game. Please note, out of band data needs proper handling to prevent potential vulnerabilities including security issues.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
