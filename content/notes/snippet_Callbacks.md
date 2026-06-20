---
title: "Callbacks"
category: Utilities
visibility: public
tags: ["fundamentals","javascript","function","callbacks"]
language: "javascript"
source: "Supabase Migration"
last_modified: "2026-05-16"
---

# Callbacks

## 설명


## 코드 (javascript)
```javascript
const nums = [1, 2, 3];
const printDoublePlusOne = n => console.log(2 * n + 1);

nums.map(printDoublePlusOne); // LOGS: 3, 5, 7

const nums = fetch('https://api.nums.org'); // Suppose the response is [1, 2, 3]
const printDoublePlusOne = n => console.log(2 * n + 1);

nums.then(printDoublePlusOne); // LOGS: 3, 5, 7
```

---
*Spells Bot Supabase에서 마이그레이션된 스니펫입니다.*
