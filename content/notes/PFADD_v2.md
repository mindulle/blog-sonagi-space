---
title: PFADD
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/pfadd@8a4DmPZrX2xGZ7zdWxS63.md
---

# PFADD

`PFADD` command used to add elements to a HyperLogLog data structure, which is designed for estimating the cardinality (number of unique elements) of a dataset. When elements are added using `PFADD`, Redis updates the internal structure without storing the actual elements, ensuring low memory consumption. This command returns `1` if the HyperLogLog was modified (i.e., a new unique element was added) and `0` otherwise. `PFADD` is ideal for use cases like counting unique visits or tracking unique events in a highly memory-efficient manner.

Learn more from the following resources:

- [@official@PFADD](https://redis.io/docs/latest/commands/pfadd/)

## 관련 로드맵
- [[Redis|redis]]
