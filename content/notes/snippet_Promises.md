---
title: "Promises"
category: Utilities
visibility: public
tags: ["fundamentals","javascript","function","promises"]
language: "javascript"
source: "Supabase Migration"
last_modified: "2026-05-16"
---

# Promises

## 설명


## 코드 (javascript)
```javascript
fetch('https://my.api.com/items/1')
  .catch(err => console.log(`Failed with error: ${err}`))
  .then(response => response.json())
  .then(json => console.log(json));
```

---
*Spells Bot Supabase에서 마이그레이션된 스니펫입니다.*
