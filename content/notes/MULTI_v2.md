---
title: MULTI
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/multi@U6hST1MkS16T2CHV3-Ise.md
---

# MULTI

`MULTI` is a Redis command used to start a transaction, allowing a group of commands to be executed sequentially and atomically. After initiating a `MULTI` block, commands are queued instead of being executed immediately. Once all desired commands are added, the `EXEC` command is called to run them as a single atomic operation. If an error occurs in any command during queuing, it can be discarded using `DISCARD`. `MULTI` ensures that no other clients can interfere with the transaction, making it ideal for complex operations that require consistent state updates.

Learn more from the following resources:

- [@official@MULTI](https://redis.io/docs/latest/commands/multi/)

## 관련 로드맵
- [[Redis|redis]]
