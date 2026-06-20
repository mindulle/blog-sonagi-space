---
title: Truncation / Corruption
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/truncation--corruption@9ToKTUqbi-NV5Wcwb21PT.md
---

# Truncation / Corruption

Truncation and corruption typically refer to scenarios where data is unexpectedly cut off or altered, compromising its integrity. This can occur due to various reasons, such as sudden power failures, system crashes, or disk errors. Redis mitigates these risks through its persistence mechanisms like 
RDB snapshots and AOF (Append-Only File) logs.

Learn more from the following resources:

- [@official@AOF Advantages](https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/#aof-advantages)
- [@official@What should I do if my AOF gets truncated?](https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/#what-should-i-do-if-my-aof-gets-truncated)
- [@official@What should I do if my AOF gets corrupted?](https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/#what-should-i-do-if-my-aof-gets-corrupted)

## 관련 로드맵
- [[Redis|redis]]
