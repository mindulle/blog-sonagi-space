---
title: "What are promises in JavaScript?"
category: Utilities
visibility: public
tags: ["function","promise"]
language: "javascript"
source: "Supabase Migration"
last_modified: "2026-05-16"
---

# What are promises in JavaScript?

## 설명
The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

## 코드 (javascript)
```javascript
fetch('https://my.api.com/items/1')
  .catch(err => console.log(`Failed with error: ${err}`))
  .then(response => response.json())
  .then(json => console.log(json));
```

---
*Spells Bot Supabase에서 마이그레이션된 스니펫입니다.*
