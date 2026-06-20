---
title: Compound
tags: [concept, mongodb]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/mongodb/content/compound@eSb4WAfWxJu6R95pPX6wm.md
---

# Compound Indexes

Compound indexes in MongoDB are built on multiple fields in a specified order, optimizing queries that filter on multiple fields. Field order matters significantly as it determines which queries can efficiently use the index. Compound indexes support prefix patterns, meaning they can optimize querie
s on any left subset of the indexed fields, making them versatile for various query patterns.

Visit the following resources to learn more:

- [@official@Compound Indexes](https://www.mongodb.com/docs/manual/core/indexes/index-types/index-compound/)
- [@article@Single vs Compound Mongodb Index](https://medium.com/@rakeebnazar/single-vs-compound-mongodb-index-in-depth-analysis-5319cfdd2ce)

## 관련 로드맵
- [[MongoDB|mongodb]]
