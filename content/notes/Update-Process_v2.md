---
title: Update Process
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/update-process@3Eat22rFjUl4eTtGz8u4N.md
---

# Update Process

In the reactive model, the client sends requests to the server, which then processes the request and sends back a response. This model is called 'reactive' because the server only acts or 'reacts' when it receives a request from the client. The "update process" plays a vital role in this model. It's the server's responsibility to keep the game world updated and synchronized among all players. This updating process is typically done in a loop that processes all the changes that happen in the game like players’ actions, NPC movements, in-game events or game physics. It updates the game world and informs the players about the changes. Also, if a player makes changes like moving a character or attacking an enemy, it sends this information to the server adding it to the update loop. The frequency of this updating process is often referred to as 'tick rate'.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
