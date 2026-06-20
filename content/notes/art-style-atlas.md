---
title: "Art Style Atlas: The 5 Schools of Sonagi"
category: Design
tags: [style-guide, branding, open-design, inkscape, filters]
description: "Open Design 프로젝트의 5대 핵심 스타일을 분석하여 소나기 생태계에 이식한 스타일 도감"
---

# 🎨 Art Style Atlas: The 5 Schools of Sonagi

Open Design의 "5 Schools" 방법론을 바탕으로, 소나기 프로젝트가 구사할 수 있는 시각적 스타일의 스펙트럼과 기술적 구현 파라미터를 정의합니다.

---

## 🏛️ 1. Editorial Monocle (고급 편집물 스타일)
**"프리미엄 매거진의 서사적 우아함"**

- **시각적 특징**: 높은 대비, 세리프(Serif) 중심의 타이포그래피, 넓은 여백, 정교한 그리드.
- **주요 기술 스펙**:
    - **폰트 스택**: `Playfair Display`, `Libre Baskerville` (제목) + `Inter` (본문).
    - **그리드**: 12컬럼 매거진 그리드.
    - **컬러**: Off-white 배경 (`#F9F9F9`), Deep Black (`#051D25`).
    - **필터**: `sonagi_optical_sharp` (글자의 예리함 강조).

## 🏙️ 2. Modern Minimal (현대적 미니멀리즘)
**"본질에 집중하는 극한의 단순함"**

- **시각적 특징**: 산세리프(Sans-serif) 중심, 단색 또는 제한된 컬러 포인트, 평면적(Flat) 디자인.
- **주요 기술 스펙**:
    - **폰트 스택**: `Inter`, `Manrope`, `SF Pro`.
    - **그리드**: 8px / 4px 모듈러 그리드.
    - **컬러**: `Sonagi Blue` (`#1991B9`), Pure White, Soft Gray.
    - **Inkscape**: `sonagi_grid_master_v2.svg`의 24px 안전 영역 엄격 준수.

## 🎈 3. Warm Soft (부드러운 유기적 스타일)
**"친근하고 따뜻한 인간적 감성"**

- **시각적 특징**: 둥근 모서리(Border Radius), 파스텔 톤, 부드러운 그림자, 유기적인 곡선.
- **주요 기술 스펙**:
    - **폰트 스택**: `Quicksand`, `Comfortaa`.
    - **필터**: `sonagi_ink_bleed_soft` (부드러운 번짐 효과).
    - **컬러**: Mist Gray, Pastel Blue, Warm White.
    - **기술**: **Gooey Effect** (feGaussianBlur + feColorMatrix를 통한 형태 병합).

## 💾 4. Tech Utility (기술적 실용주의)
**"데이터 밀도와 기능적 정밀함"**

- **시각적 특징**: 다크 모드, 모노스페이스(Mono) 폰트, 높은 정보 밀도, 경계선(Border) 강조.
- **주요 기술 스펙**:
    - **폰트 스택**: `JetBrains Mono`, `Roboto Mono`, `Fira Code`.
    - **그리드**: 12px 기반의 타이트한 그리드.
    - **컬러**: Dark Deep Blue (`#051D25`), Cyan Accent.
    - **필터**: `sonagi_dry_brush_wild` (거친 텍스처를 배경에 아주 미세하게 적용).

## 💥 5. Brutalist Experimental (실험적 브루탈리즘)
**"관습을 파괴하는 날 것의 강력함"**

- **시각적 특징**: 원색의 강렬한 대비, 두꺼운 외곽선, 비정형적 레이아웃, 노이즈 텍스처.
- **주요 기술 스펙**:
    - **폰트 스택**: `Impact`, `Archivo Black`.
    - **필터**: `sonagi_dry_brush_wild` (강한 질감), Displacement Map을 통한 형태 왜곡.
    - **컬러**: Neon Green, Bright Orange, Heavy Black.
    - **기술**: **Over-inking** (잉크가 넘치는 듯한 거친 외곽선 처리).

---

## 🛠️ 스타일 전환 워크플로우 (Switching Workflow)

에이전트는 작업 시작 시 다음 지시어를 사용하여 스타일을 확정합니다.

1.  **Selection**: "이번 로고는 `Tech Utility` 스타일을 기반으로 작도합니다."
2.  **Parameters**: `Inkscape-Technical-Specs.md`에서 해당 스타일의 권장 필터와 그리드를 로드합니다.
3.  **Refinement**: `sonagi_filter_library.svg`에서 관련 프리셋을 소스 파일에 삽입합니다.

---
*Created by Antigravity CLI - Art Style Atlas v1.0 (Inspired by Open Design)*
