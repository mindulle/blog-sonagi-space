---
title: "Sonagi Design System Codex (v3.0)"
date: 2026-05-28
tags: [design-system, codex, specification, wild-thin]
category: design
description: "소나기 디자인 시스템의 최종 진실 공급원 (Single Source of Truth)"
---

# 🌦️ Sonagi Design System Codex: Wild & Thin

이 문서는 소나기(Sonagi) 디자인 시스템의 시각적 언어와 기술적 구현 규격을 정의합니다. 모든 에이전트는 코드 생성 및 디자인 검수 시 이 코덱스를 최우선으로 참조해야 합니다.

---

## 1. Core Philosophy: Wild & Thin
"거친 선의 생명력과 섬세한 서체의 정밀함이 공존하는 아름다움"

- **Wild (Honest Construction)**: 
  - **No Shadows**: 부드러운 그림자를 완전히 배제합니다. 대신 굵은 선으로 구조를 정의합니다.
  - **2px Strokes**: 주요 상호작용 요소(버튼, 활성 인풋)와 강조 카드의 테두리는 반드시 **2px**를 사용합니다.
- **Thin (Elegant Precision)**:
  - **Serif Contrast**: 제목(H1~H3)에는 날카로운 **Classic Serif** 계열 서체를 사용하여 지적인 긴장감을 줍니다.
  - **Spacious Void**: 8px 그리드를 기반으로 대담한 여백을 사용하여 'Thin'한 정교함을 강조합니다.

---

## 2. Visual Tokens (Source of Truth)

### 2.1 Colors (Deep Rain Palette)
- **Primary (Accent)**: `Hue 234` (#1c2c4d 계열) - 깊은 밤의 빗줄기 색상.
- **Background**: `#ffffff` (Base), `#f4f4f2` (Paper).
- **Text**: `#051d25` (Ink Black) - 모든 선과 텍스트의 기본색.

### 2.2 Borders & Radii
- **Wild Border**: `2px solid var(--s-text-main)` (Buttons, Active states, Featured Cards).
- **Thin Border**: `1px solid rgba(5, 29, 37, 0.1)` (Dividers, Secondary containers).
- **Radius**: `4px` (Sharp yet controlled).

## 3. Responsive Strategy: Elastic Tokens
시스템의 복잡도를 낮추기 위해, 컴포넌트 코드를 수정하지 않고 루트의 토큰 값만 화면 크기에 따라 변경하는 'Elastic' 방식을 채택합니다.

### 3.1 Spacing Scale (Non-linear)
| Token | Desktop (1200+) | Tablet (768+) | Mobile (375+) |
| :--- | :--- | :--- | :--- |
| `--s-space-md` | 32px (unit * 4) | 24px (unit * 3) | 16px (unit * 2) |
| `--s-space-lg` | 64px (unit * 8) | 40px (unit * 5) | 24px (unit * 3) |
| `--s-space-xl` | 128px (unit * 16) | 80px (unit * 10) | 48px (unit * 6) |

### 3.2 Fluid Typography
- **Heading 1**: `clamp(2.5rem, 8vw, 4rem)`
- **Heading 2**: `clamp(2rem, 6vw, 3rem)`
- **Body**: `1rem` (16px) 고정, 가독성을 위해 자간/행간만 조절.

---

## 3. Component Specifications

### 3.1 Buttons
- **Layout**: Height 40px (Medium), Padding 10px 16px.
- **Style**: 
  - **Primary**: Background: Primary Color / Text: White / Border: 2px solid Primary.
  - **Ghost**: Background: Transparent / Text: Ink Black / Border: 2px solid Ink Black.

### 3.2 Navigation Header
- **Layout**: 
  - **Height**: 80px (Desktop), 64px (Mobile).
  - **Padding**: Horizontal `var(--s-space-lg)`.
  - **Border**: `2px solid var(--s-text-main)` (Bottom only).
- **Elements**:
  - **Logo**: `Classic Serif` / Bold / 24px.
  - **Menu Items**: `Pretendard` / Medium / 14px / Spacing between: `var(--s-space-md)`.
- **Responsive**: 모바일에서는 메뉴 항목을 숨기거나 햄버거 메뉴로 전환하되, 2px 하단 보더와 엘라스틱 패딩은 유지함.

### 3.3 Typography Hierarchy (The Sonagi Scale)
독자의 시선을 사로잡는 'Thin'한 대비와 장시간 읽기에도 편안한 본문 설계를 목표로 합니다.

- **Display (H1)**: `Classic Serif` / Bold / Size: `var(--s-font-size-h1)` / Line-height 1.1 / Tracking -0.03em.
- **Sub-heading (H2, H3)**: `Classic Serif` / SemiBold / Size: `var(--s-font-size-h2, h3)` / Line-height 1.3 / Tracking -0.01em.
- **Body Text**: `Pretendard Variable` / Regular / Size: `1rem` (16px) / Line-height 1.75 / Color: `#333` (Ink Black보다 약간 연한 톤으로 피로도 감소).
- **Caption/Small**: `Pretendard Variable` / Medium / Size: `0.875rem` / Tracking 0.05em (약간의 자간 확장).

### 3.4 Table of Contents (ToC)
- **Position**: Sticky Sidebar (Desktop), Top Accordion (Mobile).
- **Visuals**:
  - **Structure**: 보더가 없는 투명 배경 지향.
  - **Active Indicator**: 현재 읽고 있는 섹션은 좌측에 **2px solid var(--s-action-primary)** 보더(Wild)를 표시하여 강조.
  - **Font**: `Pretendard` / Regular / 13px / Line-height 1.5.
- **Interaction**: 마우스 호버 시 텍스트 컬러가 `Primary`로 부드럽게 전환.

### 3.5 Article Post Card (The "Wild" Showcase)
- **Layout**: 
  - **Padding**: `var(--s-space-md)`.
  - **Gap**: `var(--s-space-sm)` between content elements.
- **Visuals**:
  - **Border**: `2px solid var(--s-text-main)` (Wild).
  - **Background**: `var(--s-surface-base)`.
  - **Thumbnail**: Aspect ratio 16:9 / Object-fit: cover / Bottom border: 1px.
- **Typography**:
  - **Title**: `Classic Serif` / Bold / 20px / Line-height 1.3.
  - **Excerpt**: `Pretendard` / Regular / 14px / Color: `#666` (Max 2 lines).
  - **Metadata (Date, Tags)**: `Pretendard` / Medium / 12px / Uppercase.
- **Interaction**: 호버 시 카드 전체가 **Translate (-4px, -4px)** 이동하며, `Primary` 색상의 굵은 그림자(Hard Shadow)가 나타나는 브루탈리즘 효과 권장.

---

## 4. Implementation Guidelines for Agents
1. **GitHub README Sync**: "Freshness & Fluidity" 문구를 발견하면 즉시 "Wild & Thin"으로 교체하십시오.
2. **CSS Validation**: `box-shadow` 속성 사용을 금지하고, `border-width: 2px` 사용 여부를 검수하십시오.
3. **Figma Alignment**: 피그마의 `Foundation` 페이지가 그림자 시스템을 설명하고 있다면, 이는 구형(v2.0) 자료이므로 무시하고 본 코덱스를 따르십시오.

---
*Created by Sonagi System Architect (Gemini CLI)*
