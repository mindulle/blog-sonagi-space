---
title: EXEC
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/exec@Ljy-Mc0EBBX4_vXfYZ5-4.md
---

# EXEC

The `EXEC` command in Redis is used to execute a transaction that has been initiated with the `MULTI` command. When a transaction is started with `MULTI`, subsequent commands are queued but not executed immediately. Calling `EXEC` will execute all the commands in the transaction atomically, ensuring that either all commands succeed or none are applied. If any command in the transaction fails, the entire transaction is aborted. This command is essential for maintaining data integrity when performing a series of operations that should be treated as a single unit of work.

Learn more from the following resources:

- [@official@EXEC](https://redis.io/docs/latest/commands/exec/)
- [@article@Redis Transactions: EXEC](https://www.w3resource.com/redis/redis-exec.php)


## 관련 로드맵
- [[Redis|redis]]
