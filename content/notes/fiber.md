---
title: React Fiber
date: 2024-01-15
category: dev
tags: [react, internals, fiber, reconciliation, scheduling]
description: Understanding React Fiber reconciliation engine
---

# React Fiber

React fiber is the reconciliation engine that replaced the core algorithm in React v16. It is a rewrite of the core algorithm, responsible for scheduling what gets rendered on screen. It is a set of algorithms for efficiently updating the UI. Here is a [bit-outdated but quite good article about Reac
t Fiber](https://github.com/acdlite/react-fiber-architecture).

---
## 상세 내용 (Merged from 20_Wiki/_concepts/Fiber.md)

# Fiber

`Fiber` is a way to manage concurrency at a more granular level than threads. While threads represent a sequence of instructions that can run concurrently with other threads, a fiber is a unit of execution which only runs on its initiating thread. Fibers are scheduled by the application, not the ope
rating system. They are great tools for implementing co-operative multitasking where you have many tasks that you want to have run concurrently, but you want to have explicit control on when they are 
switched in and out. For server-side game development, fibres can be particularly useful in dealing with multiple user requests, where each request might have its own fiber.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
