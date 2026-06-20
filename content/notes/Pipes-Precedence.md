---
title: Pipes Precedence
tags: [concept, angular]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/angular/content/pipes-precedence@nZxZnzbQg9dz-SI65UHq9.md
---

# Pipes Precedence

The pipe operator has a higher precedence than the JavaScript ternary operator.

You should always use parentheses to be sure Angular evaluates the expression as you intend.

```
(condition ? a : b) | pipe
```

Visit the following resources to learn more:

- [@official@Precedence](https://angular.dev/guide/pipes/precedence)
- [@article@What is the precedence between pipe and ternary operators?](https://iq.js.org/questions/angular/what-is-the-precedence-between-pipe-and-ternary-operators)


## 관련 로드맵
- [[Angular|angular]]
