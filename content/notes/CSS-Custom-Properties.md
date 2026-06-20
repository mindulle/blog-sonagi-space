---
title: 'CSS Custom Properties'
tags: ['css', 'variables']
created: '2026-06-20'
---

CSS에서 `--` 접두사로 정의하는 사용자 정의 변수. 계단식 상속(cascade)을 따른다.

```css
:root {
  --color-primary: #1991b9;
}

.button {
  background: var(--color-primary);
}
```

## 특징

- JavaScript에서 `getComputedStyle`로 읽고 쓸 수 있음
- 미디어 쿼리, `@supports` 안에서도 변경 가능
- IE11 미지원

## 관련 개념

- [[디자인 토큰]]
