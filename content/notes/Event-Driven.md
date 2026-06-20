---
title: Event-Driven
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/event-driven@NEsPjQifNDlZJE-2YLVl1.md
---

# Event Driven

Event-driven invocation uses a trigger to start the background task. Examples of using event-driven triggers include:

*   The UI or another job places a message in a queue. The message contains data about an action that has taken place, such as the user placing an order. The background task listens on this queue and detects the arrival of a new message. It reads the message and uses the data in it as the input to t
he background job. This pattern is known as asynchronous message-based communication.
*   The UI or another job saves or updates a value in storage. The background task monitors the storage and detects changes. It reads the data and uses it as the input to the background job.
*   The UI or another job makes a request to an endpoint, such as an HTTPS URI, or an API that is exposed as a web service. It passes the data that is required to complete the background task as part of the request. The endpoint or web service invokes the background task, which uses the data as its 
input.

Visit the following resources to learn more:

- [@article@Background Jobs - Event Driven Triggers](https://learn.microsoft.com/en-us/azure/architecture/best-practices/background-jobs#event-driven-triggers)

## 관련 로드맵
- [[System Design|System Design]]
