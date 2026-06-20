---
title: "AI 에이전트 팀 시각화 가이드라인 (Flat Vector)"
date: 2026-06-13
tags: [branding, agents, flat-vector, prompt-engineering, visual-identity, svg]
category: design
description: "Flat Vector 테마 기반 에이전트 4인의 시각적 명세 및 생성 가이드"
---

# 📐 AI 에이전트 팀 시각화 명세 (Flat Vector)

이 문서는 소나기 생태계의 핵심 에이전트 4인의 시각적 정체성을 정의합니다. 모든 이미지는 유지보수와 CI/CD 자동화에 최적화된 **플랫 벡터(Flat Vector) 스타일** 원칙을 준수합니다.

---

## 🎨 1. 에이전트별 시각적 페르소나 매트릭스

| 에이전트 | 계열 | 핵심 컬러 | 상징 아이템 (Key Props) | 성격 키워드 |
| :--- | :--- | :--- | :--- | :--- |
| **누리 (Nuri)** | Paperclip (OpenCode) | **Neon Blue** (`#1991b9`) | 후드티, 오버이어 헤드셋, 플로피 디스크 | 논리적, 해커, 신속함 |
| **제니 (Jenny)** | Paperclip (OpenCode) | **Vibrant Pink/Yellow** | 베레모, 무지개 팔레트, 붓 | 창의적, 영감, 자유로움 |
| **머니 (Money)** | Paperclip (OpenCode) | **Golden Amber** (`#FFBF00`) | 단정한 수트, 황금 코인, 데이터 차트 | 분석적, 신뢰, 목표지향 |
| **마루 (Maru)** | Paperclip (OpenCode) | **Forest Green/Brown** | 책가방, 안경, 김이 모락모락 나는 커피 | 친근함, 학구적, 서포트 |

---

## 📐 2. 플랫 벡터 기술 규격 (Technical Spec)

1.  **포맷 및 해상도**: 최종 출력물은 벡터 포맷(SVG)을 사용하며, 무한 확장이 가능하도록 설계.
2.  **색상 정책 (Solid Color Fill)**:
    *   그라데이션(Gradients) 및 드롭 섀도우(Drop Shadows) 사용 절대 금지.
    *   소나기 공식 디자인 토큰에 정의된 색상(Hex) 블록만 사용.
3.  **외곽선 시스템 (Dual-Stroke Policy)**:
    *   일반적인 캐릭터 일러스트 외곽선은 `2px` 두께 고정.
    *   세밀한 내부 요소 또는 UI 아이콘은 `1px` 두께 사용.
4.  **단순화 (Minimal Geometry)**:
    *   복잡한 질감 묘사를 배제하고 기하학적 도형(원, 다각형)의 결합으로 형상화.

---

## ⚡ 3. 이미지 생성 프롬프트 전략 (Krita + ComfyUI 용)

Krita 내의 AI Diffusion 백엔드에 입력할 일관성 유지 프롬프트 구조입니다.

> **Positive Prompt Template**:
> `Flat vector illustration of [AGENT_NAME], [GENDER] [ROLE], wearing [KEY_PROPS], [MAIN_COLOR] solid color theme, minimalist, clean SVG style, uniform 2px stroke, solid background, geometric shapes, high contrast, ui graphic design.`

> **Negative Prompt Template**:
> `3d, realistic, gradients, drop shadow, shading, pixel art, messy lines, detailed textures, watercolor.`

### 예시 (누리 - Nuri):
> `Flat vector illustration of Nuri, a young tech wizard, wearing a neon blue oversized hoodie and large headphones, holding a glowing floppy disk, neon blue and deep purple solid color theme, minimalist, clean SVG style, uniform 2px stroke, solid background, ui graphic design.`

---

## 📂 4. Next Steps (Action Items)
- [ ] Krita에서 위 프롬프트를 사용하여 에이전트 캐릭터들의 초안 이미지 렌더링.
- [ ] 렌더링된 이미지를 Inkscape로 넘겨 `Trace Bitmap` 적용 후 완벽한 SVG 벡터 코드로 변환.
- [ ] 생성된 SVG 파일을 저장소 내 `assets/` 디렉토리에 커밋하여 CI/CD SVGR 변환 테스트.

---
> **연결 문서**: [[AGENTS]], [[visual-identity|visual-identity]], [[Design-Toolchain]]
