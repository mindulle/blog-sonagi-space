---
title: Scoped
tags: [concept, aspnet-core]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/aspnet-core/content/scoped@M3BW_63MFQyD8NE68dazD.md
---

# Scoped

Scoped lifetime is a type of dependency injection that creates a new instance of an object for each unique request, but reuses the same instance for the same request. This means that if multiple components within the same request depend on the same service, they will all receive the same instance. H
owever, if another request is made, a new instance of the service will be created for that request.

Scoped lifetime is useful when you have services that are specific to a given request, such as a request-scoped database context. This allows you to have a separate and isolated instance of a service for each unique request, which can help to prevent cross-request contamination of data and improve p
erformance.

Visit the following resources to learn more:

- [@article@Dependency Injection - What is Scope?](https://javaranch.com/journal/2008/10/dependency-injection-what-is-scope.html)
- [@article@Effective Dependency Injection Scoping](https://medium.com/android-news/effective-dependency-injection-scoping-4bac813d4491)

## 관련 로드맵
- [[aspnet-core|aspnet-core]]
