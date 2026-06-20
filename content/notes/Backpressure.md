---
title: Backpressure
tags: [concept, backend]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/backend/content/backpressure@JansCqGDyXecQkD1K7E7e.md
---

# Backpressure

Backpressure is a flow control mechanism where receivers signal their capacity to senders, preventing system overload. It manages resource allocation, prevents memory overflows, and maintains responsiveness in reactive programming, message queues, and streaming systems.

Visit the following resources to learn more:

- [@article@Awesome Architecture: Backpressure](https://awesome-architecture.com/back-pressure/)
- [@article@Backpressure explained — the flow of data through software](https://medium.com/@jayphelps/backpressure-explained-the-flow-of-data-through-software-2350b3e77ce7)
- [@article@Handling Backpressure in Node.js Streams](https://nodejs.org/en/docs/guides/backpressuring-in-streams)
- [@video@What is Back Pressure](https://www.youtube.com/watch?v=viTGm_cV7lE)
- [@video@Backpressure in Reactive Systems Explained](https://www.youtube.com/watch?v=Yb5OzHv-E6s)

## 관련 로드맵
- [[backend|backend]]


---
## 상세 내용 (Merged from /home/mindulle/projects/llm-wiki/20_Wiki/Computing/Concepts/Back Pressure.md)
# Back Pressure

If queues start to grow significantly, the queue size can become larger than memory, resulting in cache misses, disk reads, and even slower performance. [Back pressure](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html) can help by limiting the queue size, ther
eby maintaining a high throughput rate and good response times for jobs already in the queue. Once the queue fills up, clients get a server busy or HTTP 503 status code to try again later. Clients can
 retry the request at a later time, perhaps with [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff).

## 관련 로드맵
- [[System Design|System Design]]