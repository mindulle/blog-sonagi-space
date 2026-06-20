---
title: "그리드 로고 작업 (Inkscape MCP)"
date: 2026-06-19
domain: Design
pattern: "Pattern A"
tools:
  ai:
    - Inkscape MCP (svg_create, svg_add_circle, svg_add_rect, svg_add_path)
    - inkscape CLI (--actions)
  human:
    - Inkscape GUI
tags: [workflow, recipe, logo, inkscape, mcp, grid-method]
methodology: "[[AI-Human-Role-Division]]"
reference: "https://www.youtube.com/watch?v=9nCTq5euTzI"
---

# 그리드 로고 작업 (Inkscape MCP)

Grid Method 방식의 로고 디자인에서 AI가 도형 배치를 담당하고,
사람이 GUI에서 Boolean 연산으로 형태를 완성하는 협업 레시피.

---

## 역할 분담

| AI가 하는 것 | 사람이 하는 것 |
|---|---|
| SVG 캔버스 생성 | Boolean 연산 (Union / Difference / Intersection) |
| 도형 배치 (정확한 수치) | 형태 판단 및 방향 결정 |
| 그리드 구성 (황금비, 대칭 등) | 세부 노드 편집 |
| Inkscape GUI에서 파일 열기 | 색상, 타이포그래피 적용 |
| 색상 일괄 적용 (요청 시) | 최종 저장 및 내보내기 |

---

## 트리거 프롬프트

> 작업을 시작할 때 아래 문장을 그대로 AI에게 던진다.

```
"Inkscape MCP로 그리드 로고 작업 시작해줘.
[도형 종류]를 [개수]개, 반지름 [R], 구도는 [삼각형/원형/격자 등].
캔버스 크기는 [W]x[H]. 파일 열어서 바로 확인할 수 있게 해줘."
```

---

## 절차

### Step 1. 캔버스 생성 — AI

```python
inkscape_svg_create(width=600, height=600, output_path="경로/logo.svg")
```

### Step 2. 도형 배치 — AI

```python
# 예: 삼각형 구도로 원 3개
inkscape_svg_add_circle(cx=260, cy=220, r=120, fill="#aaaaaa", element_id="circle_top")
inkscape_svg_add_circle(cx=180, cy=370, r=120, fill="#aaaaaa", element_id="circle_bl")
inkscape_svg_add_circle(cx=340, cy=370, r=120, fill="#aaaaaa", element_id="circle_br")
```

### Step 3. Inkscape GUI에서 열기 — AI

```python
inkscape_inkscape_open(filepath="경로/logo.svg")
```

### Step 4. Boolean 연산 — 사람

GUI에서 직접 수행:
- 원하는 도형들을 선택 (`Shift+클릭` 또는 `Ctrl+A`)
- **Path > Union** (`Ctrl+Plus`) — 합치기
- **Path > Difference** (`Ctrl+Minus`) — 빼기
- **Path > Intersection** (`Ctrl+Asterisk`) — 교집합

### Step 5. 마무리 — 사람 또는 AI

- 색상 적용, 타이포그래피 추가는 사람이 직접 하거나 AI에게 요청
- 저장: `Ctrl+S`
- 내보내기: `Ctrl+Shift+E` (PNG) 또는 그냥 SVG로 저장

---

## 제약 및 주의사항

- Boolean 연산 결과는 GUI 메모리에만 있음 — **반드시 수동으로 저장**
- `inkscape_inkscape_action`의 `select-all`은 `param=" "`(공백) 필요
- `path-union` 등 Boolean 액션은 `param` 없이 호출
- CLI 방식(`inkscape --actions`)을 쓰면 저장까지 자동화 가능하나 GUI 확인 불가

---

## CLI 자동화 변형 (GUI 확인 불필요한 경우)

Boolean 연산까지 포함해 파일로 저장하고 싶을 때:

```bash
inkscape input.svg \
  --actions="select-all;object-to-path;path-union;\
  export-filename:output.svg;export-plain-svg;export-do"
```

---

## 변형 및 응용

- **황금비 그리드**: 도형 크기와 간격을 황금비(1:1.618)로 계산해서 배치
- **원형 배열**: 원 N개를 360/N 간격으로 원형 배치
- **에셋 역산**: 기존 로고 SVG를 열어 레이어/패스 구조를 분석해 그리드 역산 → [[Pattern C]]

---

## 관련 문서

- 방법론: [[AI-Human-Role-Division]]
- 관련 개념: [[AI-Hybrid-Design-Strategy]]
- 레퍼런스: [How To Design A Logo Using The Grid Method](https://www.youtube.com/watch?v=9nCTq5euTzI)
