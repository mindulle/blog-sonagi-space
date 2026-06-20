---
title: Message Queues
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/message-queues@cw7WdFfL5HpeZ_n8wYk2t.md
---

# Message Queues

Message queues are a fundamental element of server-side game development, primarily used for communication and data exchange between different processes, threads, or microservices. A message queue operates on the principle of first-in, first-out (FIFO). In the typical process, a sender submits messa
ges to the queue, and receivers extract messages from the queue. This mechanism ensures seamless coordination between different parts of a system performing at different speeds and allows asynchronous
 information exchange. Features such as persistence, delivery acknowledgement, prioritization, and scheduling are commonly associated with message queues. Different technologies support message queues including RabbitMQ, Apache Kafka, and AWS SQS among others. The choice of the appropriate message q
ueue technology can depend on specific requirements, such as the relevant programming language and the expected size and rate of message traffic.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
