---
title: Application Layer
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/application-layer@XXuzTrP5UNVwSpAk-tAGr.md
---

# Application Layer

Separating out the web layer from the application layer (also known as platform layer) allows you to scale and configure both layers independently. Adding a new API results in adding application servers without necessarily adding additional web servers. The single responsibility principle advocates 
for small and autonomous services that work together. Small teams with small services can plan more aggressively for rapid growth.

![](https://i.imgur.com/F0cjurv.png)

Disadvantages
-------------

*   Adding an application layer with loosely coupled services requires a different approach from an architectural, operations, and process viewpoint (vs a monolithic system).
*   Microservices can add complexity in terms of deployments and operations.

Visit the following resources to learn more:

- [@article@Intro to architecting systems for scale](http://lethain.com/introduction-to-architecting-systems-for-scale/#platform_layer)

## 관련 로드맵
- [[System Design|System Design]]
