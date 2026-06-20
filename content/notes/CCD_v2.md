---
title: CCD
tags: [concept, game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/game-developer/content/ccd@1yK8TH4Pn7Ag8VQoug54i.md
---

# CCD

**CCD (Continuous Collision Detection)** is a sophisticated technique used in detecting collisions within games, more advanced than the traditional discrete collision. Rather than checking for collisions at designated time frames, CCD checks for any possible collisions that may happen during the entire time period or motion path of the moving object. This can prevent instances of "tunneling", where an object moves so fast that it passes through walls or obstacles undetected by discrete collision detection due to being at different points in one frame to another. Although more computationally heavy than discrete detection, CCD offers an increased accuracy in collision detection, making it vital in games where precise movements are needed.

Visit the following resources to learn more:

- [@article@Continuous Collision Detection](https://docs.unity3d.com/Manual/ContinuousCollisionDetection.html)


## 관련 로드맵
- [[game-developer|game-developer]]
