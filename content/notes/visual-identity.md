---
title: "Sonagi 시각적 정체성 가이드라인 (Visual Identity) v2.0"
date: 2026-05-15
tags: [branding, logo, guidelines, design, pixel-art, calligraphy, modern]
category: design
description: "Tri-Style (Pixel, Calligraphy, Modern) 통합 브랜딩 규정"
---

# 시각적 정체성 규정 v2.0: The Tri-Style Spectrum

소나기(Sonagi) 브랜드는 **"Wild & Thin"**이라는 하나의 코어 철학을 바탕으로, 공간의 목적에 따라 세 가지 시각적 페르소나를 선택적으로 적용합니다.

---

## 🎨 1. 핵심 스타일 매트릭스 (Style Matrix)

| 구분 | **Persona 1: Pixel Garden** | **Persona 2: Ink Organization** | **Persona 3: Modern Architect** |
| :--- | :--- | :--- | :--- |
| **적용 공간** | 개인 위키, 개인 블로그, 에이전트 팀 | 깃허브 Org, 기술 철학, 메인 위키 | 포트폴리오, 외주 작업, 비즈니스 |
| **핵심 키워드** | Digital Craft, Playful, Agentic | Traditional, Humanistic, Deep | Sharp, Professional, Minimal |
| **주요 요소** | 8-bit 아이콘, 도트 캐릭터 | 캘리그래피 워드마크, 먹 번짐 | 기하학적 심볼, 정밀한 선 |
| **디자인 톤** | 거친 입자감 (Digital Wild) | 서정적인 곡선 (Human Wild) | 완벽한 정밀함 (Core Thin) |

---

## 👾 [Theme A] Pixel Garden (개인 공간)
디지털 세상 속 나만의 '작은 공방'이자 에이전트들과 소통하는 활기찬 공간입니다.

- **로고**: 픽셀로 재해석된 'S' 심볼 (8-bit 버전).
- **아이콘**: 모든 UI 아이콘은 32x32 혹은 64x64 픽셀 아트로 제작.
- **에이전트 시각화**: 각 AI 에이전트는 고유의 픽셀 스프라이트(Sprite) 캐릭터를 가짐.
- **색상**: 기본 팔레트에 채도가 약간 높은 포인트 컬러(Neon Blue 등) 병용 가능.

---

## 🖋️ [Theme B] Ink Organization (조직/철학)
소나기의 뿌리이자, 기술이 인간을 향하는 '서사'가 담긴 공식적인 공간입니다.

- **로고**: **Wild Calligraphy** 워드마크 (`sonagi_lettering_refined_rabbit.svg`).
- **텍스처**: 은은한 수묵화 배경(Ink Splash)과 여백의 미 강조.
- **타이포그래피**: 국문 서체 사용 시 붓글씨 느낌이 가미된 세리프 서체를 제목으로 사용.
- **색상**: **Ink Black**(`#051d25`)과 **Paper White**(`#ffffff`)의 대비 중심.

---

## 📐 [Theme C] Modern Architect (상업용)
기술적 신뢰와 현대적인 세련미를 전달하는 프로페셔널한 공간입니다.

- **로고**: **Geometric Symbol 'S'** (`sonagi_symbol_geometric_final.svg`).
- **레이아웃**: 8px 그리드 시스템 엄수, 극도로 얇은 선(Thin Line)으로 정보 구획.
- **타이포그래피**: `Pretendard`와 `JetBrains Mono`의 완벽한 조합.
- **색상**: **Sonagi Blue**(`#1991b9`)를 액션 컬러로 사용하여 청량감과 신뢰도 강조.

---

## 🛠️ 2. 디자인 시스템 브릿지 (Tokens)

모든 테마는 다음의 공통 토큰을 공유하며, 테마별 속성(Theme Props)만 변경하여 구현합니다.

1.  **Shared Foundation**:
    *   `primary-500`: `#1991b9` (Core Blue)
    *   `ink-900`: `#051d25` (Core Black)
    *   `spacing-base`: `8px`
2.  **Theme Switcher Logic**:
    *   `PERSONAL_SPACE` ➡️ `ui.radius = 0px`, `ui.icons = pixel_set`
    *   `ORG_SPACE` ➡️ `ui.radius = 8px`, `ui.texture = ink_wash`
    *   `BIZ_SPACE` ➡️ `ui.radius = 4px`, `ui.border = thin_1px`

---

## 📁 3. 리소스 확보 로드맵
- [x] **Pixel Set**: 에이전트별 픽셀 캐릭터 및 핵심 카테고리 아이콘 8종 제작. (상세: [[agent-visual-specs|agent-visual-specs]])
- [ ] **Brush Set**: 배경용 고해상도 수묵 텍스처(SVG/PNG) 5종 확보.
- [ ] **Modern Kit**: Figma 마스터 컴포넌트(버튼, 입력창 등) 최종 검수.

---

## 🧭 4. 아이콘 시스템 (Iconography) : The Hybrid Approach
소나기의 아이콘은 머티리얼(Material) 수준의 구조적 정밀함과 AI(ComfyUI)의 창조성을 결합한 **'사이버네틱 작도법'**을 사용합니다.

### 4.1. 구조적 정밀함 (The Material Grid)
- **규격**: 32px 캔버스, 2px Stroke (심볼과 동일).
- **작도 가이드**: Keyline(원형, 사각형, 대각선)을 활용하여 구형의 찌그러짐이나 선의 불균형 방지.
- **의도**: 모든 기능 아이콘이 **수학적으로 일치하는 무게감**을 갖도록 통제.

### 4.2. 창조적 파생 (The ComfyUI Integration)
단순한 UI 아이콘을 넘어, 복잡한 일러스트나 'Wild'한 감성이 필요한 픽토그램 제작 시 AI를 활용합니다.
- **절차**: `Grid Master`에서 기초 뼈대(Thin)를 작도 → ComfyUI(`comfy_manager.py`)에 ControlNet/Canny로 입력 → 브랜드 스타일에 맞는 텍스처와 디테일(Wild) 자동 생성.

---
> **Action**: 본 문서는 소나기 브랜드의 다중 페르소나 전략을 정의하는 단일 진실 공급원(SSOT)입니다. 모든 에이전트는 콘텐츠 생성 시 해당 레포지토리의 테마 설정을 확인 후 시각 요소를 배치하십시오.
