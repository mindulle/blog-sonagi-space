---
title: "Sonagi 브랜딩 대시보드 (Branding Dashboard)"
date: 2026-05-13
tags: [branding, dashboard, design-system, index]
category: design
description: "소나기 프로젝트의 브랜드 가이드 및 디자인 시스템 마스터 인덱스"
---

# 🌦️ Sonagi Branding Dashboard

소나기(Sonagi) 브랜드의 철학부터 실제 디자인 시스템 구현 규정까지 모든 자산을 한곳에서 관리하는 마스터 대시보드입니다.

## 📖 1. 브랜드 철학 (The Story)
소나기의 근본적인 서사와 존재 이유를 다룹니다.
- **[[brand-story|Sonagi 브랜드 스토리: Wild & Thin]]**
  - 핵심 가치: Refreshing Clarity, Artistic Precision, Poetic Interaction

## 🎨 2. 시각적 정체성 (Visual Identity)
추상적인 철학을 구체적인 로고, 컬러, 타이포그래피 수치로 정의합니다. **(Figma 연동 완료)**
- **[[visual-identity|시각적 정체성 규정: Wild & Thin]]**
  - 로고 시스템 (Geometric 'S' & Wild Calligraphy)
  - 컬러 영혼 (Sonagi Blue `#1991b9`, Ink Black `#051d25`)
  - 타이포그래피 (Pretendard, JetBrains Mono)

## 📦 3. 자산 활용 가이드 (Asset Guide)
실제 SVG 파일의 목록과 매체별(SNS, GitHub, Wiki) 적용 방법을 가이드합니다.
- **[[asset-guide|브랜드 자산 관리 및 활용 가이드]]**
  - 마스터 킷: `sonagi_brand_kit_v2_wild_thin.svg`
  - 그래픽 모티프 (디지털 인크, 씬 라인)

---

## 🛠 4. 디자인 시스템 브릿지 (Design System Bridge)
Figma에서 추출한 실제 컴포넌트 데이터를 기반으로, 브랜딩이 어떻게 UI로 변환되는지 보여줍니다.

### 4.1 기초 토큰 (Foundation Tokens)
- **Spacing/Grid**: 8px 기반 (Base: 8px, Medium: 16px, Large: 24px)
- **Border Radius**: Base 8px (`var(--base, 8px)`)

### 4.2 코어 컴포넌트: 버튼 (Button Component)
Figma 분석을 통해 확립된 버튼의 변주(Variants) 및 상태(States) 정의입니다.
- **Variants (변주)**: Primary, Secondary, Tertiary, Ghost, Danger
- **Sizes (크기)**: 
  - Small (높이 32px, 패딩 8px 12px)
  - Medium (높이 40px, 패딩 10px 16px)
  - Large (높이 48px, 패딩 12px 20px)
- **States (상태)**: Default, Hover (Shadow 추가), Active (Darker), Focus (Border/Ring), Disabled (Opacity 50%), Loading (Spinner)

---

> **Note**: 본 대시보드는 `10_Sources`의 원본 데이터와 `Figma`의 실제 수치를 결합하여 작성된 단일 진실 공급원(Single Source of Truth)입니다. 디자인 시스템 개발 시 최우선으로 참조하십시오.
