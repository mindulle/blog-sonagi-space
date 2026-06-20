---
title: Strict Mode
tags: [concept, javascript]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/javascript/content/strict-mode@Xw8lb0xCWKmNs4KZfhBUy.md
---

# Strict Mode

JavaScript's strict mode is a way to opt-in to a restricted variant of JavaScript, thereby implicitly opting out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics from regular code. Browsers not supporting strict mode will run strict mode code with different
 behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict mode code and non-strict mode code can coexist so that
 scripts can opt into strict mode incrementally.

Strict mode makes several changes to normal JavaScript semantics:

- Eliminates some JavaScript silent errors by changing them to throw errors.
- Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes run faster than identical code that's not strict mode.
- Prohibits some syntax likely to be defined in future versions of ECMAScript.

Visit the following resources to learn more:

- [@article@Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- [@article@Strict mode in JavaScript](https://javascript.info/strict-mode)
- [@feed@Explore top posts about JavaScript](https://app.daily.dev/tags/javascript?ref=roadmapsh)


## 관련 로드맵
- [[JavaScript|javascript]]


---
## 상세 내용 (Merged from 20_Wiki/Develop/_commons/seed/Syntax/React/Strict Mode.md)
Strict Mode is a tool in React for highlighting potential problems in an application. By wrapping a component tree with `StrictMode`, React will activate additional checks and warnings for its descendants. This doesn't affect the production build but provides insights during development.

```js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

In Strict Mode, React does a few extra things during development:

1. It renders components twice to catch bugs caused by impure rendering.
2. It runs side-effects (like data fetching) twice to find mistakes in them caused by missing effect cleanup.
3. It checks if deprecated APIs are used, and logs a warning message to the console if so.