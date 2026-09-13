---
title: '디자인 토큰: Figma Variables와 CSS의 완벽한 동기화'
tags: ['concept', 'ui', 'engineering', 'design-token']
created: '2026-09-13'
series: '픽셀 퍼펙트 UI 엔지니어링 가이드'
seriesOrder: 4
published: true
---

# 디자인 토큰: Figma Variables와 CSS의 완벽한 동기화

오토레이아웃으로 뼈대를 짰다면 이제 그 안에 색을 칠하고 여백의 크기를 정할 차례입니다. 여기서 핵심은 절대 **하드코딩된 값(Hex, Px)을 사용하지 않는 것**입니다.

## 하드코딩의 저주와 의미론적 변수(Semantic Token)

디자이너가 `#3B82F6`을 칠하고 개발자가 코드로 옮겨 적는 순간, 다크모드 대응이나 브랜드 리뉴얼 시 수백 개의 파일을 뒤져야 하는 '유지보수 지옥'이 펼쳐집니다.

이를 해결하기 위해 Figma의 **Variables**를 CSS로 1:1 매칭합니다.

### 코드 스니펫: Figma Variables가 CSS로 변환되는 모습

```css
/* 1. Primitive Tokens (기초 색상 칩 - 절대 직접 쓰지 않음) */
:root {
  --blue-400: #60a5fa;
  --blue-500: #3b82f6;
}

/* 2. Semantic Tokens (의미론적 역할 부여 - 라이트/다크모드 스위칭) */
:root {
  --color-primary: var(--blue-500);
}
[data-theme='dark'] {
  --color-primary: var(--blue-400); /* 다크모드일 땐 더 밝은 파랑으로! */
}

/* 3. Component Tokens (실제 적용) */
.btn-primary {
  background-color: var(--color-primary);
}
```

이 구조를 사용하면 프론트엔드 개발자는 Figma에서 넘어온 색상이 무슨 Hex 코드인지 알 필요가 없습니다. 그저 `var(--color-primary)` (또는 Tailwind의 `bg-primary`)만 입력하면 다크모드까지 자동으로 완벽하게 렌더링되는 시스템이 구축됩니다.
