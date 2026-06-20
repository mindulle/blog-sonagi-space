---
title: Hashes
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/hashes@wY46Qj5Inw_ClBNI9PB_2.md
---

# Hashes

Hashes in Redis are a data type that allows you to store a collection of key-value pairs under a single key, similar to a dictionary or a map. Each hash can hold multiple fields, and each field has its own value, making hashes ideal for representing objects or entities with various attributes. You c
an perform operations like adding fields (`HSET`), retrieving field values (`HGET`), deleting fields (`HDEL`), and iterating over fields (`HSCAN`). Hashes are memory-efficient and provide a way to gro
up related data together, making them suitable for use cases like user profiles, configuration settings, or any structured data storage.

Learn more from the following resources:

- [@official@Redis Hashes](https://redis.io/docs/latest/develop/data-types/hashes/)

## 관련 로드맵
- [[Redis|redis]]
