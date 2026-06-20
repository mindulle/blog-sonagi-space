---
title: $limit
tags: [concept, mongodb]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/mongodb/content/limit@AzUVaGnGv9uypJ31alR9r.md
---

# $limit

The `$limit` aggregation stage restricts the number of documents passed to the next stage in the pipeline. It's commonly used with $sort to get top N results, implement pagination, or reduce data processing overhead. `$limit` is efficient when combined with indexes and should be placed strategically in the pipeline to minimize document processing in subsequent stages.

Visit the following resources to learn more:

- [@official@\$limit](https://www.mongodb.com/docs/manual/reference/operator/aggregation/limit/)
- [@official@Aggregation Operators](https://www.mongodb.com/docs/manual/reference/operator/aggregation/)


## 관련 로드맵
- [[MongoDB|mongodb]]
