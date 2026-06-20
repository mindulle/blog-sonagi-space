---
title: Bellman-Ford Algoritm
tags: [concept, datastructures-and-algorithms]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/datastructures-and-algorithms/content/bellman-ford-algoritm@7CgGwdwHnOmISmEPtJegN.md
---

# Bellman-Ford

The **Bellman Ford algorithm** is a method used in graph theory for finding the shortest path between a single source vertex and all other vertices in a weighted graph. This algorithm is significant because it is capable of handling graphs with negative weight edges, unlike Dijkstra's algorithm. It follows a bottom-up approach, filling up the distance table gradually while relaxing edges. The algorithm gets its name from its developers, Richard Bellman and Lester Ford. However, it can lead to an infinite loop if there are negative weight cycles in the graph, which should be addressed separately using another check.

## 관련 로드맵
- [[datastructures-and-algorithms|datastructures-and-algorithms]]
