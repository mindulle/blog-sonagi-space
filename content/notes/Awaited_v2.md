---
title: Awaited
tags: [concept, typescript]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/typescript/content/awaited@aEhI_9mFWXRIZh1ZxTuzu.md
---

# Awaited

`Awaited` is a utility type in TypeScript that is used to recursively unwrap the `Promise` type. It simulates the `await` operator's behavior in JavaScript. If you have a type that represents a `Promise`, `Awaited` can extract the underlying type that the `Promise` resolves to. It handles nested `Promise` types and other thenables, continually unwrapping until it reaches a non-promise type.

Visit the following resources to learn more:

- [@official@Awaited<Type>](https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype)

## 관련 로드맵
- [[TypeScript|typescript]]
