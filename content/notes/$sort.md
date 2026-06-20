---
title: $sort
tags: [concept, mongodb]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/mongodb/content/sort@BCWS8uV2pSWe7CX-VlnTg.md
---

# $sort

The `$sort` aggregation stage orders documents by specified field values in ascending (1) or descending (-1) order. It can sort by multiple fields with different directions and supports sorting by computed values from previous pipeline stages. Placing `$sort` early in the pipeline can leverage index
es for better performance, while late sorting applies to aggregated results.

Visit the following resources to learn more:

- [@official@\$sort](https://www.mongodb.com/docs/manual/reference/operator/aggregation/sort/)
- [@article@Sort Records: How to Sort by Date, Name, and More](https://www.prisma.io/dataguide/mongodb/mongodb-sorting)


## 관련 로드맵
- [[MongoDB|mongodb]]
