---
title: v-show
tags: [concept, vue]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/vue/content/v-show@_TlbGTKFCMO0wdLbC6xHX.md
---

# v-show

`v-show` is similar to `v-if` in that it allows you to conditionally render components. However, it does not remove the component from the DOM and merely toggles its `display` CSS property to be `hidden`. It also does not work with `v-else-if` oe `v-else`. Prefer `v-show` over `v-if` if the componen
t's visibility needs to change often, and `v-if` if not.

Visit the following resources to learn more:

- [@official@Vue Conditional Rendering](https://vuejs.org/guide/essentials/conditional.html#v-show)


## 관련 로드맵
- [[vue|vue]]
