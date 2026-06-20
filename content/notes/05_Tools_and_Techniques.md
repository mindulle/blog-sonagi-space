---
title: "Vol 5. 그래픽 툴 실무 테크닉 (Tools & Execution)"
date: 2026-06-15
tags: [tools, figma, adobe, krita, techniques, slang, codex]
category: design
description: "실무 디자인 툴(Adobe, Figma 등) 조작에 얽힌 디자이너들의 현장 은어와 정확한 기능 매핑"
---

# 🛠️ Vol 5. 그래픽 툴 실무 테크닉 (Tools & Execution)

디자인 현장에서는 툴이 포토샵에서 피그마(Figma), 크리타(Krita) 등으로 세대교체가 이루어졌음에도 불구하고, 과거 어도비(Adobe) 시절부터 입에 밴 "손가락 테크닉 은어"들이 아직도 통용됩니다. 이 볼륨은 추상적인 액션 지시를 각 그래픽 툴의 정확한 단축키와 기능 명칭으로 번역합니다.

---

## 1. 형태 및 오브젝트 조작 (Shape & Object Control)

### 1.1 "누끼 딴다" / "마스크 씌운다"
*   **영미권 은어**: "Cutout", "Isolate the object"
*   **의미**: 복잡한 사진 배경에서 피사체(인물/상품)만 오려내는 작업. 일본어 '빼기(누키)'에서 유래한 현업 최고 빈출 은어.
*   **Figma / Krita 조작법**:
    *   *전통적 방식*: 펜 툴(Pen tool)로 피사체 외곽선을 딴 뒤, 이미지 레이어를 위에 얹고 `Mask` 기능 적용. (Figma 단축키: `Ctrl + Cmd + M`)
    *   *AI 방식*: 최신 툴의 `Remove Background` 플러그인 1-click 사용.

### 1.2 "패스파인더(Pathfinder) 돌리세요"
*   **영미권 은어**: "Use Boolean operations", "Shape builder"
*   **의미**: 두 개 이상의 벡터 도형을 겹쳐서 구멍을 뚫거나 합쳐 새로운 아이콘 형태를 만드는 것. (일러스트레이터의 '패스파인더' 패널 이름에서 고유명사화됨).
*   **Figma / Krita 조작법**:
    *   **Boolean Groups** 기능 사용.
    *   합치기: `Union Selection`
    *   구멍 뚫기: `Subtract Selection`
    *   교차 영역만 남기기: `Intersect Selection`

### 1.3 "아웃라인(Outline) 깬다 / 선 딴다"
*   **영미권 은어**: "Flatten", "Outline stroke", "Expand"
*   **의미**: 테두리 두께를 2px로 지정한 선(Stroke) 데이터를, 크기 확대를 해도 두께 비율이 변하지 않도록 면(Path/Fill) 데이터로 성질을 바꿔버리는 작업. 또는 살아있는 폰트 텍스트를 벡터 그림 데이터로 깨버리는 작업.
*   **Figma / Krita 조작법**:
    *   Figma: 선 선택 후 `Shift + Cmd + O` (Outline Stroke). 텍스트는 `Cmd + E` (Flatten).
    *   Krita: 레이어 우클릭 -> `Convert to Path`.

---

## 2. 레이아웃 및 정렬 (Layout & Alignment)

### 2.1 "오토레이아웃(Auto-layout) 묶어줘요"
*   **영미권 은어**: "Wrap it in a frame", "Make it responsive"
*   **의미**: 버튼 안에 글자 수가 길어지면 버튼 박스도 자동으로 길어지고 패딩이 유지되도록, 부모-자식 레이어에 스마트한 여백 규칙을 거는 것.
*   **Figma 조작법**: 요소들을 선택하고 `Shift + A` 입력. (CSS의 Flexbox 속성과 100% 동일한 원리).

### 2.2 "앵커(Anchor) 걸어 / 핀 박아"
*   **영미권 은어**: "Pin it to the top", "Set Constraints"
*   **의미**: 화면(프레임) 사이즈를 모바일에서 태블릿 크기로 잡아당겨 늘렸을 때, 특정 로고나 버튼이 우측 상단에 고정되어 같이 따라오게 만드는 반응형 제어 기술.
*   **Figma 조작법**: 우측 패널의 `Constraints` 옵션을 Left/Right/Top/Bottom 중 원하는 벽면에 고정 설정.

---

## 3. 효과 및 렌더링 (Effects & Rendering)

### 3.1 "멀티플라이(Multiply) 태워요"
*   **영미권 은어**: "Blend it in", "Burn it"
*   **의미**: 레이어 블렌딩 모드(혼합 모드) 중 하나. 흰색/밝은색은 투명하게 날아가고 어두운 색만 배경에 겹쳐지게 합성하는 기법. 종이에 사인펜을 덧칠할수록 어두워지는 원리와 동일.
*   **주요 Blending Mode 실무 번역**:
    *   **Multiply (곱하기)**: 그림자 합성, 어둡게 톤 다운시킬 때 "태운다"고 표현.
    *   **Screen (스크린)**: 검은색은 투명해지고 밝은 빛만 남김. 빛 번짐, 불꽃놀이, 네온 효과 합성 시 사용.
    *   **Overlay (오버레이)**: 명암 대비(Contrast)를 극대화할 때 얹어줌.

### 3.2 "뎁스(Depth) 준다 / 띄운다"
*   **영미권 은어**: "Give it some elevation", "Add a drop shadow"
*   **의미**: Z축(화면의 높낮이) 개념을 부여해 카드가 바닥에서 떠 있는 것처럼 보이게 만드는 것.
*   **Figma 조작법**: `Effects` -> `Drop Shadow` 추가. (단, 최근 소나기의 "Wild & Thin" 트렌드에서는 드롭 섀도우를 자제하고 Border 두께 차이나 배경 Dim(어둡게 누르기) 처리로 뎁스를 표현하기도 함).

### 3.3 "누른다 / 딤(Dim) 처리한다"
*   **영미권 은어**: "Dim the background", "Add a dark overlay"
*   **의미**: 팝업이나 모달이 뜰 때, 뒤쪽의 본문 화면을 반투명한 검은색 막으로 덮어 시선을 차단하고 앞쪽 팝업에 집중시키는 기술.
*   **Figma 조작법**: 모달 프레임 아래에 검은색 `#000000` 레이어를 깔고 `Opacity(투명도)`를 40~60%로 설정.

## 4. [Data Sourced] Mizko 특화 Figma 고급 은어
*   **"Auto-layout your Parent Frame"**
    *   *의미*: 자식 요소들의 간격만 맞추지 말고, 반드시 그것들을 감싸는 최상위 껍데기(Parent Frame)에 `Shift + A`를 걸어 전체 레이아웃 반응형을 통제하라는 지시.
*   **"Set Min/Max Width Breakpoints"**
    *   *의미*: 반응형 화면에서 카드가 끝없이 늘어나거나 줄어들지 않도록, Auto-layout 속성에서 `Min-width`와 `Max-width`를 강제 할당하여 레이아웃 붕괴를 막는 테크닉.
*   **"Looping Interactive Component"**
    *   *의미*: 프로그레스 바(Progress Bar)나 타이머처럼 시간에 따라 자동으로 변하는 UI를 만들 때, `After delay` 트리거를 1ms로 물려 무한 반복(Looping)시키는 피그마 프로토타이핑 고급 기술.
