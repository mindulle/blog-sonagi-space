---
title: Message Broker
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/message-broker@mgGJTBU8ofvOzl9gYWhnG.md
---

# Message Broker

A message broker is a middleware system that enables communication between different services or applications by routing, storing, and delivering messages. Redis can serve as a lightweight message broker using its `PUBLISH` and `SUBSCRIBE` commands for a pub/sub messaging pattern, or through lists a
nd sorted sets for more advanced messaging scenarios like task queues. Redis Streams provide additional features like message persistence, acknowledgment, and consumer groups, making it suitable for b
oth real-time communication and more complex message processing pipelines. Its high throughput and low latency make Redis an efficient solution for building scalable messaging systems.

Learn more from the following resources:

- [@official@PUBLISH Command](https://redis.io/docs/latest/commands/publish/)
- [@official@SUBSCRIBE Command](https://redis.io/docs/latest/commands/subscribe/)
- [@article@Redis As a Message Broker](https://medium.com/shoutloudz/redis-as-a-message-broker-d1a1aeac23c3)

## 관련 로드맵
- [[Redis|redis]]
