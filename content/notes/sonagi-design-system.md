---
title: "Sonagi 디자인 시스템 소개"
date: 2025-01-27
tags: [design-system, ui, tokens]
category: design
draft: false
description: "청량한 느낌을 전달하는 Sonagi 디자인 시스템의 핵심 개념"
---

# Sonagi 디자인 시스템 소개

Sonagi는 **비 온 뒤의 맑고 깨끗한 느낌**을 디자인 언어로 표현한 디자인 시스템입니다.

## 디자인 철학

### 1. 청량함 (Refreshing)
물방울처럼 투명하고 깨끗한 느낌을 시각적으로 전달합니다.

### 2. 일관성 (Consistency)
디자인 토큰을 통해 모든 컴포넌트가 일관된 스타일을 유지합니다.

### 3. 접근성 (Accessibility)
모든 사용자가 편하게 사용할 수 있도록 WCAG 2.1 기준을 준수합니다.

## 핵심 요소

### 컬러 시스템
```css
/* Primary - 청량한 블루 */
--sonagi-color-primary: #4A90E2;

/* Surface - 부드러운 백그라운드 */
--sonagi-color-surface: #F8F9FA;
```

### 타이포그래피
- 명확한 계층 구조
- 높은 가독성
- 한글 최적화

### 애니메이션
물방울처럼 부드럽고 유기적인 전환 효과

## 컴포넌트

현재 구현된 컴포넌트:
- Button
- Input
- Card
- Badge
- Tab
- Breadcrumb

계획 중인 컴포넌트:
- Modal
- Tooltip
- Toast
- Drawer

## v2.0 Wild & Thin Update (2026.05.12)

브랜드의 감성적 깊이와 기술적 정밀함을 결합한 **Wild & Thin** 정체성이 도입되었습니다.

### 주요 변경 사항
1.  **Wild Script Wordmark**: '토끼네활자공장' 기법을 적용하여 붓의 필압과 속도감을 살린 캘리그라피 로고.
2.  **Geometric Monogram**: 수학적 작도와 시각적 보정이 결합된 'S' 심볼.
3.  **Thin Line Aesthetic**: 섬세하고 날카로운 선을 통해 세련된 인상 전달.
4.  **Digital Ink Filter**: 먹 번짐과 갈필 효과를 구현하는 전용 SVG 필터 도입.

### 관련 자산 (dev/ 폴더)
- `sonagi_brand_kit_v2_wild_thin.svg`: 통합 브랜드 키트
- `sonagi_symbol_geometric_final.svg`: 최종 지오메트릭 심볼 및 작도 가이드
- `sonagi_combination_wild_thin.svg`: 씬(Thin) 버전 컴비네이션 마크

---

자세한 내용은 [Sonagi 저장소](https://github.com/mindulle/sonagi-design-system)에서 확인하세요.
