---
title: Pub/Sub
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/pubsub@9W_jaK1DSEZHRKdPcUM7h.md
---

# Pub/Sub

Pub/Sub in Redis is a powerful messaging paradigm that allows for real-time communication between clients through a publish/subscribe model. In this system, publishers send messages to specific channels without knowing who, if anyone, will receive them. Subscribers, on the other hand, express intere
st in particular channels and receive messages published to those channels instantly. This decouples the message producers from the consumers, facilitating flexible and scalable communication. Key com
mands in this model include `PUBLISH` for sending messages, `SUBSCRIBE` for listening to channels, and `UNSUBSCRIBE` for stopping the reception of messages.

Visit the following resources to learn more:

- [@official@Pub/Sub in Redis](https://redis.io/docs/latest/develop/interact/pubsub/)


## 관련 로드맵
- [[Redis|redis]]
