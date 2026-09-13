---
title: 'Figma 오토레이아웃과 CSS Flexbox의 완벽한 1:1 매칭 가이드'
tags: ['concept', 'ui', 'engineering', 'figma', 'css', 'flexbox']
created: '2026-09-13'
series: '픽셀 퍼펙트 UI 엔지니어링 가이드'
seriesOrder: 3
published: true
---

# Figma 오토레이아웃과 CSS Flexbox 완벽 대응 가이드

디자이너와 프론트엔드 개발자 간의 소통에서 가장 많은 병목이 발생하는 곳은 바로 '레이아웃'입니다. 하지만 Figma의 오토레이아웃(Auto Layout)은 사실상 웹 표준인 **CSS Flexbox를 완벽하게 모사**하고 있습니다.

오토레이아웃의 속성들이 실제 코드로 어떻게 1:1 대응되는지 그 결정론적인 규칙을 이해하면, "개발했더니 디자인이랑 달라요"라는 문제를 원천 차단할 수 있습니다.

## 1. 방향 (Direction)과 줄바꿈 (Wrap)

Figma에서 레이아웃의 방향을 설정하는 것은 Flexbox의 메인 축(Main Axis)을 결정하는 것과 정확히 같습니다.

- **수평 (Horizontal)** ➡️ `flex-direction: row;` (Tailwind: `flex-row`)
- **수직 (Vertical)** ➡️ `flex-direction: column;` (Tailwind: `flex-col`)
- **줄바꿈 (Wrap)** ➡️ `flex-wrap: wrap;` (Tailwind: `flex-wrap`)

## 2. 간격과 여백 (Spacing)

- **항목 간격 (Item spacing)** ➡️ `gap: 16px;` (Tailwind: `gap-4`)
- **내부 여백 (Padding)** ➡️ `padding: 16px 24px;` (Tailwind: `px-6 py-4`)

## 3. 정렬 (Alignment)

- **가운데 정렬 (Center)** ➡️ `justify-content: center; align-items: center;` (Tailwind: `justify-center items-center`)
- **Space between (Auto)** ➡️ `justify-content: space-between;` (Tailwind: `justify-between`)

## 4. 크기 조절 (Resizing) - 가장 중요한 핵심 ⭐️

가장 많은 UI 버그가 발생하는 지점입니다.

- **고정 (Fixed)** ➡️ 💻 `width: 200px;` (Tailwind: `w-[200px]`)
- **콘텐츠에 맞춤 (Hug contents)** ➡️ 💻 `width: max-content;` (Tailwind: `w-max`)
- **컨테이너 채우기 (Fill container)** ➡️ 💻 `flex: 1 1 0%;` (Tailwind: `flex-1`)

## 5. 실전 반응형: Min/Max Width의 마법

Figma에 최근 추가된 Min/Max 제약 조건은 브라우저의 반응형 동작을 완벽히 재현합니다. 화면이 줄어들 때 카드가 무한정 찌그러지는 것을 방지하죠.

```tsx
// Figma: Width = Fill, Min-width = 300px
// 이를 React + Tailwind 코드로 변환하면 아래와 같이 1:1 매칭됩니다.
<div className="flex-1 min-w-[300px]">
  <h2>반응형 카드 뷰</h2>
</div>
```

이 결정론적 매칭 규칙을 인지하고 있다면, 화면 설계서(GUI Guide) 없이도 코드레벨의 픽셀 퍼펙트를 단번에 달성할 수 있습니다.
