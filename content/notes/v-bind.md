---
title: v-bind
tags: [concept, vue]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/vue/content/v-bind@cuM9q9vYy8JpZPGeBffd1.md
---

# v-bind

The `v-bind` directive dynamically binds an HTML attribute to data. The shorthand for this directive is `:`

## Example

```html
<script setup>
  import { ref } from 'vue';
  const image_url = ref("path/to/image.png")
</script>

<template>
  <img :src="image_url" />
</template>
```

Visit the following resources for more information:

- [@official@v-bind Documentation](https://vuejs.org/api/built-in-directives.html#v-bind)


## 관련 로드맵
- [[vue|vue]]
