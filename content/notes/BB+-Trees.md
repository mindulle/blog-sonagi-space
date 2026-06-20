---
title: B/B+ Trees
tags: [concept, datastructures-and-algorithms]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/datastructures-and-algorithms/content/bb-trees@2G6vn7K11_mPQQ7_IXJ96.md
---

# B/B+ Trees

`B trees` and `B+ trees` are both types of self-balancing, sorted, tree-based data structures that maintain sorted data in a way that allows for efficient insertion, deletion, and search operations. A `B tree` is a tree data structure in which each node has multiple keys and can be in more than two 
children nodes. Each internal node in a `B tree` can contain a variable number of keys and pointers. The keys act as separation values which divide its subtrees. One important aspect of a `B tree` is 
that every key in the node also appears in the parent node. On the other hand, a `B+ tree` is an extension of a `B tree` which allows for efficient traversal of data. In a `B+ tree`, data pointers are stored only at the leaf nodes of the tree, making every leaf node of a `B+ tree` a linked list. The
 intermediary nodes only use the keys to aid with the search.

Visit the following resources to learn more:

- [@video@B Trees and B+ Trees. How they are useful in Databases](https://www.youtube.com/watch?v=aZjYr87r1b8)

## 관련 로드맵
- [[datastructures-and-algorithms|datastructures-and-algorithms]]
