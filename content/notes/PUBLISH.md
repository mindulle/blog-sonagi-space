---
title: PUBLISH
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/publish@gIPo-2CNqE1BsOaDzmkCU.md
---

# PUBLISH

`PUBLISH` is a Redis command used to send messages to a specified channel in the pub/sub messaging system. When a message is published, all clients that are subscribed to that channel receive the message immediately. This command is useful for implementing real-time communication features, such as c
hat applications, notifications, or event broadcasting. The `PUBLISH` command does not return any acknowledgment to the sender, as it operates on a fire-and-forget basis, allowing for efficient messag
e distribution without requiring the sender to wait for subscribers to process the message.

Learn more from the following resources:

- [@official@PUBLISH](https://redis.io/docs/latest/commands/publish/)

## 관련 로드맵
- [[Redis|redis]]
