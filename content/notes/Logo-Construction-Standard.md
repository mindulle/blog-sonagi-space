---
title: "로고 작도 표준 워크플로우 (Logo Construction Standard)"
version: "v1.0.0"
category: Design
tags: [workflow, logo, geometry, boolean, standardization]
description: "소나기 프로젝트의 공식 로고 및 심볼 작도 프로세스 정의서"
---

# 📐 로고 작도 표준 워크플로우 (v1.0.0)

본 문서는 소나기(Sonagi) 브랜드 및 향후 모든 프로젝트의 로고/심볼을 디자인할 때 반드시 준수해야 하는 **공식 작도 방법론**을 정의합니다. 

이 방법론은 생성형 AI(ComfyUI)의 확률적 생성(Gacha)에 의존하는 것을 배제하고, 인간 디자이너의 통제력과 기하학적 완벽성을 보장하기 위해 제정되었습니다.

---

## 1. 핵심 철학 (Core Philosophy)
*   **No Blackbox Generation**: 뼈대 없이 AI에게 텍스트 프롬프트만으로 로고 생성을 지시하는 것을 엄격히 금지합니다.
*   **Vector First**: 모든 로고의 원본은 수학적으로 계산된 SVG(Vector) 코드 또는 일러스트레이터 패스로 100% 통제되어야 합니다.
*   **AI for Texture, Not Structure**: AI(ComfyUI)는 오직 완성된 벡터 뼈대 위에 질감(3D, 수채화, 클레이 등)을 입히는 '렌더러(Renderer)' 역할로만 사용합니다.

## 2. 표준 작도 4단계 (The 4-Step Process)

### Step 1. 그리드 선정 (Grid Selection)
*   [[LOGO_00_Master_Grid_Arsenal]] 도감에서 브랜드가 추구하는 무드(Mood)에 맞는 절대 뼈대를 하나 선택합니다.
    *   *예: 테크 기업 = 아이소메트릭 / 유기농 = 피보나치 원형*

### Step 2. 원시 도형 배치 (Primitive Arrangement)
*   선택한 그리드의 교차점(Snap)에 원(Circle), 사각형(Square), 정삼각형(Triangle) 등 가장 단순한 기하학적 도형(Primitives)만을 겹쳐서 배치합니다. 프리핸드 곡선은 금지됩니다.

### Step 3. 불리언 깎아내기 (Boolean Operations)
*   도형을 합치고(Union), 교차시키고(Intersect), 특정 각도의 사선으로 깎아냅니다(Subtract/Mask). 이 과정에서 로고의 형태(Silhouette)와 여백(Negative Space)이 확정됩니다.

### Step 4. 수학적 변이 (Programmatic Variations)
*   완성된 불리언 코드를 바탕으로 **선 굵기(Stroke Width), 원의 반지름(Radius), 색상(Color)** 파라미터를 수치상으로 조절하여 수십 가지의 완벽한 베리에이션 시안을 즉각적으로 도출해 냅니다.

---

## 3. 베리에이션 실증 사례 (Case Study: Concept C)
SVG 코드로 작성된 뼈대는 코드의 숫자 하나만 바꾸어도 완벽하게 통제된 시안들을 쏟아냅니다. (아래는 `03_Resources/Interactive_Labs/` 또는 `10_Sources/assets/generated/` 폴더에 코드로 자동 생성되어 저장된 결과물입니다.)

1. **Thin (Wild & Thin 컨셉)**: 선 굵기를 `5px`로 줄여 극도의 우아함과 얇음을 강조한 버전.
2. **Bold (Heavy Impact)**: 선 굵기를 `40px`로 늘리고 중앙에 붉은 점을 추가해 강렬한 신뢰감을 주는 버전.
3. **Interlock (확장 버전)**: 원의 반지름을 `60px`로 키워 두 원이 서로 강하게 교차(Intersect)하는 올림픽 링 형태의 버전.

---
**관련 문서**
- [[Sonagi_Logo_Process]] (실제 소나기 로고 작도 실험실)
- [[LOGO_00_Master_Grid_Arsenal]] (마스터 그리드 도감)