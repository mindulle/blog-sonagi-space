---
title: Bitmaps
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/bitmaps@0Q3AkE8leWAyYsww3-BHX.md
---

# Bitmaps

In Redis, Bitmaps are a data structure that allows you to manipulate individual bits within a string value. While Redis doesn't have a native "bitmap" data type, it uses strings to represent bitmaps. The power of bitmaps comes from their ability to perform operations on binary data at the bit level,
 making them extremely memory-efficient for certain types of applications, like tracking the presence/absence of elements (such as daily active users, features, etc.).

Learn more from the following resources:

- [@official@Bitmap](https://redis.io/docs/latest/develop/data-types/bitmaps/)
- [@video@Redis Bitmap Explained](https://youtu.be/oj8LdJQjhJo?si=jem54LfPbZtrpnEP)


## 관련 로드맵
- [[Redis|redis]]
