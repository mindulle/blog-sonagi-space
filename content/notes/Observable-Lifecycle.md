---
title: Observable Lifecycle
tags: [concept, angular]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/angular/content/observable-lifecycle@b06Y5YrqBbHhWkK6Ws_1c.md
---

# Observable lifecycle

An observable is a function that acts as a wrapper for a data stream. They support to pass messages inside your application. An observable is useless until an observer subscribes to it. An observer is an object which consumes the data emitted by the observable. An observer keeps receiving data value
s from the observable until the observable is completed, or the observer unsubscribes from the observable. Otherwise observers can receive data values from the observable continuously and asynchronous
ly. So we can perform various operations such as updating the user interface, or passing the JSON response.

There are 4 stages for a life cycle of an observable.

- Creation
- Subscription
- Execution
- Destruction

Visit the following resources to learn more:

- [@article@Understanding Observable LifeCycle](https://medium.com/analytics-vidhya/understanding-rxjs-observables-ad5b34d9607f)


## 관련 로드맵
- [[Angular|angular]]
