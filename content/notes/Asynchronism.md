---
title: Asynchronism
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/asynchronism@84N4XY31PwXRntXX1sdCU.md
---

# Asynchronism

Asynchronous workflows help reduce request times for expensive operations that would otherwise be performed in-line. They can also help by doing time-consuming work in advance, such as periodic aggregation of data.

Visit the following resources to learn more:

- [@article@Patterns for microservices - Sync vs Async](https://medium.com/inspiredbrilliance/patterns-for-microservices-e57a2d71ff9e)
- [@article@Applying back pressure when overloaded](http://mechanical-sympathy.blogspot.com/2012/05/apply-back-pressure-when-overloaded.html)
- [@article@Little's law](https://en.wikipedia.org/wiki/Little%27s_law)
- [@article@What is the difference between a message queue and a task queue?](https://www.quora.com/What-is-the-difference-between-a-message-queue-and-a-task-queue-Why-would-a-task-queue-require-a-message-broker-like-RabbitMQ-Redis-Celery-or-IronMQ-to-function)
- [@video@It's all a numbers game](https://www.youtube.com/watch?v=1KRYH75wgy4)

## 관련 로드맵
- [[System Design|System Design]]


---
## 상세 내용 (Merged from /home/mindulle/projects/llm-wiki/20_Wiki/Develop/Concepts/Asynchronism.md)
# Asynchronism

Asynchronism in Android is a practice that defines operations, which can run independently from the main operation without following the program's linear flow. The Android system uses threads to handle asynchronous processes. These threads function independently, ensuring that complex or time-consuming operations do not interfere with the user interface or other essential parts of the application. Android provides various tools for carrying out asynchronous tasks, such as `Handler`, `ThreadPoolExecutor`, `IntentService`, `AsyncTask`, and `Loader` etc. These tools provide ways to execute tasks on different threads and communicate the results back to the main thread.

Visit the following resources to learn more:

- [@official@Asynchronous Tasks](https://developer.android.com/guide/background)
- [@article@Asynchronous Task Execution](https://medium.com/@cpvasani48/asynchronous-task-execution-in-android-a-guide-with-example-44732744f3b8)

## 관련 로드맵
- [[android|android]]