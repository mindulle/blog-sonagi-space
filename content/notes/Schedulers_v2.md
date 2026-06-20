---
title: Schedulers
tags: [concept, ios]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/ios/content/schedulers@UqA01PT86_w_JzN6KZBku.md
---

# Schedulers

RxSwift Schedulers manage the execution context of observable sequences and observers. They determine when and on which thread observables emit items and observers receive them. Key schedulers include MainScheduler (for UI operations), SerialDispatchQueueScheduler (for background serial work), and ConcurrentDispatchQueueScheduler (for concurrent background tasks). Schedulers enable fine-grained control over concurrency, allowing developers to optimize performance and maintain thread safety. They're crucial for operations like offloading heavy computations from the main thread or ensuring UI updates occur on the main thread.

Learn more from the following resources:

- [@official@ReactiveX Scheduler Documentation](https://reactivex.io/documentation/scheduler.html)
- [@opensource@RxSwift Scheduler Documentation](https://github.com/ReactiveX/RxSwift/blob/main/Documentation/Schedulers.md)
- [@article@RxSwift Schedulers](https://docs.rxswift.org/rxswift/schedulers)

## 관련 로드맵
- [[ios|ios]]
