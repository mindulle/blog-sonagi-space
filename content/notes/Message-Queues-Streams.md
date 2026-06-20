---
title: Message Queues / Streams
tags: [concept, software-design-architecture]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/software-design-architecture/content/message-queues--streams@GAs6NHBkUgxan3hyPvVs7.md
---

# Message Queues Streams

Message queues and streams are architectural patterns that are used to decouple different components of a system and enable asynchronous communication between them.

Message Queues: A message queue is a software component that allows multiple systems or applications to communicate with each other by passing messages between them. Messages are stored in a queue, and each message is processed by a single consumer. This pattern is useful for systems where there is 
a high degree of variability in the rate of message production and consumption, and where the sender and receiver do not need to be active at the same time. Examples of message queue systems are Apach
e Kafka, RabbitMQ, and Amazon SQS.

Visit the following resources to learn more:

- [@article@System Design — Message Queues](https://medium.com/must-know-computer-science/system-design-message-queues-245612428a22)
- [@article@Overview of Message Queue pattern](https://badia-kharroubi.gitbooks.io/microservices-architecture/content/patterns/communication-patterns/message-queue-pattern.html)

## 관련 로드맵
- [[software-design-architecture|software-design-architecture]]
