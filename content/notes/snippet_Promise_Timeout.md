---
title: "How can I add a timeout to a promise?"
category: Utilities
visibility: public
tags: ["promise","timeout","class"]
language: "javascript"
source: "Supabase Migration"
last_modified: "2026-05-16"
---

# How can I add a timeout to a promise?

## 설명
Many times in the past I've found myself needing to add a timeout to a promise in JavaScript.

## 코드 (javascript)
```javascript
class Timeout {
  constructor() {
    this.ids = [];
  }

  set = (delay, reason) =>
    new Promise((resolve, reject) => {
      const id = setTimeout(() => {
        if (reason === undefined) resolve();
        else reject(reason);
        this.clear(id);
      }, delay);
      this.ids.push(id);
    });

  wrap = (promise, delay, reason) =>
    Promise.race([promise, this.set(delay, reason)]);

  clear = (...ids) => {
    this.ids = this.ids.filter(id => {
      if (ids.includes(id)) {
        clearTimeout(id);
        return false;
      }
      return true;
    });
  };
}
```

---
*Spells Bot Supabase에서 마이그레이션된 스니펫입니다.*
