---
title: "Abort Fetch"
category: Utilities
visibility: public
tags: ["fundamentals","javascript","function","abort","fetch"]
language: "javascript"
source: "Supabase Migration"
last_modified: "2026-05-16"
---

# Abort Fetch

## 설명


## 코드 (javascript)
```javascript
// Create the AbortController
const controller = new AbortController();
const { signal } = controller;

// Perform the request
fetch('https://my.site.com/data', { signal }).then(res => console.log(res));

// Abort the request
controller.abort();
```

---
*Spells Bot Supabase에서 마이그레이션된 스니펫입니다.*
