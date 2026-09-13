---
title: 'UI Typography Criteria'
tags: [concept, ui, typography, design]
source: '2026-09-02_Inter-Font-Alternatives.md'
created: '2026-09-02'
series: '픽셀 퍼펙트 UI 엔지니어링 가이드'
seriesOrder: 2
published: true
---

# UI Typography Criteria

소프트웨어 제품(Product)의 UI에서 글꼴을 선택할 때는 본문의 가독성뿐만 아니라 버튼, 입력창, 아이콘 등과 함께 **별도의 수직 보정 없이 완벽하게 정렬**되는지가 핵심 기준이 된다. (예: Inter 폰트)

## 1. Cap-centered Vertical Metrics

글자 상자(Em Box) 안에서 대문자(Capital letter)가 시각적 중앙에 놓이는 구조.

- 대문자의 위쪽 여백과 Baseline 아래의 여백이 거의 동일해야 한다.
- 이 구조를 가진 글꼴은 CSS 패딩(`padding`)을 상하 동일하게 주어도 글자가 버튼의 중앙에 위치하며, 왼쪽의 아이콘과도 자연스럽게 수평 정렬된다.

## 2. 높은 x-height (70~75%)

x-height는 소문자(a, c, e 등) 본체의 높이를 의미한다.

- UI 글꼴은 대문자 높이 대비 최소 70%, 이상적으로는 **75%**의 x-height를 가져야 한다.
- 높이가 낮으면 대문자 옆의 소문자들이 아래로 쳐져 보이고, 단어 전체의 무게중심이 무너져 중앙 정렬 효과를 해친다.
- 대표적으로 Inter, San Francisco 폰트가 75%의 비율을 갖추고 있다.

## 한계와 대안

CSS `text-box-trim` 기능을 사용해 세로 여백을 잘라내는 방식이 도입되고 있으나, 브라우저 호환성 문제(Firefox 미지원 등)가 있고 글꼴 자체의 `x-height` 비율을 바꿀 수는 없다. 따라서 디자인 시스템을 구축할 때 폰트 단계에서 이 두 가지 기준을 만족하는 서체를 선택하는 것이 유지보수에 유리하다.
