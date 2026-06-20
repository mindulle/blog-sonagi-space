---
title: Veto
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/veto@ZLTfpRZ0rF-mtd7Z0R2WF.md
---

# Veto

`Veto` is often used in multiplayer games to prevent or allow certain actions during the game. For instance, players can issue commands to block specific actions from their opponents. As a server-side game developer, you must ensure security measures are in place to validate the authenticity of thes
e commands to safeguard against potential vulnerability. A veto vulnerability can occur when malicious players manipulate veto commands to their advantage or disrupt the game, which can lead to an unf
air gaming environment or even crash the server. Therefore, your code should always verify who is sending veto commands and check the validity of these commands.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
