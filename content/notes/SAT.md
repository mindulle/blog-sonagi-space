---
title: SAT
tags: [concept, game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/game-developer/content/sat@kSMz7mZ243qMKtT_YD3AD.md
---

# SAT

`Sat`, or separating axis theorem, is frequently used in collision detection in game development. Its primary benefit is for simple and fast detection of whether two convex polygons intersect. The theorem is somewhat complex—it works by projecting all points of both polygons onto numerous axes aroun
d the shapes, then checking for overlaps. However, it can be relatively time-consuming when dealing with more complex models or numerous objects as it has to calculate the projections, so often it is 
used in a broad-phase detection system. A deep explanation of how `sat` works might involve some mathematical concepts or visual aids, but this is the foundation of its use in game development.

Visit the following resources to learn more:

- [@article@Separating Axis Theorem](https://dyn4j.org/2010/01/sat/)
- [@article@Collision Detection Using the Separating Axis Theorem](https://code.tutsplus.com/collision-detection-using-the-separating-axis-theorem--gamedev-169t)


## 관련 로드맵
- [[game-developer|game-developer]]
