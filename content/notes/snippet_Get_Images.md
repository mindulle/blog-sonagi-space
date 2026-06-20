---
title: "Get all images in element"
category: Utilities
visibility: public
tags: ["browser"]
language: "javascript"
source: "Supabase Migration"
last_modified: "2026-05-16"
---

# Get all images in element

## 설명
Fetches all images from within an element and puts them into an array.

## 코드 (javascript)
```javascript
const getImages = (el, includeDuplicates = false) => {
  const images = [...el.getElementsByTagName('img')].map(img =>
    img.getAttribute('src')
  );
  return includeDuplicates ? images : [...new Set(images)];
};

getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
getImages(document, false); // ['image1.jpg', 'image2.png', '...']
```

---
*Spells Bot Supabase에서 마이그레이션된 스니펫입니다.*
