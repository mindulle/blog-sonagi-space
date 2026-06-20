---
title: any
tags: [concept, typescript]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/typescript/content/any@yXiLegSlL7SveU8rBGj8U.md
---

# Any

TypeScript has a special type, `any`, that you can use whenever you don’t want a particular value to cause typechecking errors.

When a value is of type `any`, you can access any properties of it (which will in turn be of type `any`), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:

    let obj: any = { x: 0 };
    // None of the following lines of code will throw compiler errors.
    // Using `any` disables all further type checking, and it is assumed
    // you know the environment better than TypeScript.
    obj.foo();
    obj();
    obj.bar = 100;
    obj = 'hello';
    const n: number = obj;

Visit the following resources to learn more:

- [@official@any type in TypeScript](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any)

## 관련 로드맵
- [[TypeScript|typescript]]
