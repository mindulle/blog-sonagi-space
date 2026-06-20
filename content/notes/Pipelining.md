---
title: Pipelining
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/pipelining@LHlwjN3WHYUBUafzzwsWQ.md
---

# Pipelining

Pipelining in Redis is a technique that allows clients to send multiple commands to the server without waiting for individual responses after each command. Instead, the commands are sent in a batch, and responses are read together at the end. This reduces the network overhead and latency associated 
with multiple round trips, significantly improving throughput, especially in high-volume operations.

Learn more from the following resources:

- [@official@Redis Pipelining](https://redis.io/docs/latest/develop/use/pipelining/)

## 관련 로드맵
- [[Redis|redis]]
