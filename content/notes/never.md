---
title: never
tags: [concept, typescript]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/typescript/content/never@0pi9VTbngcAIswuu5LIYg.md
---

# Never Type

The `never` type in TypeScript represents the type of values that will never occur. This means a function that always throws an error or runs forever (infinite loop) implicitly returns `never`. It is also useful for exhaustive checking in discriminated unions, ensuring that all possible cases are ha
ndled. Essentially, you cannot assign any type to a variable of type `never` (except `never` itself), making it the bottom type in TypeScript's type system.

Visit the following resources to learn more:

- [@official@Never Type](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type)

## 관련 로드맵
- [[TypeScript|typescript]]
