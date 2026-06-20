---
title: Disjoint Set (Union-Find)
tags: [concept, datastructures-and-algorithms]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/datastructures-and-algorithms/content/disjoint-set-union-find@La8XAT0BWvqRCrvQxtZIp.md
---

# Disjoint Set (Union-Find)

A **disjoint-set** data structure, also called a union-find data structure or merge-find set, is a data structure that tracks a partition of a set into numerous non-overlapping subsets. It provides near-constant-time operations to add new sets, to merge existing sets, and to determine whether elemen
ts are in the same set. The underlying algorithm uses two main techniques, `Union by Rank` and `Path Compression`, to achieve the efficient time complexity. Each element is represented as a node, and 
each group of disjoint sets forms a tree structure. Disjoint sets are useful in multitude of graph algorithms like Kruskal’s algorithm and many more.

## 관련 로드맵
- [[datastructures-and-algorithms|datastructures-and-algorithms]]
