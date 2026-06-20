---
title: "Sonagi Icons: System Evolution & Architecture"
description: "소나기 아이콘 시스템이 수동 트레이싱에서 완벽한 자동화 스티커 시트로 진화한 아키텍처 히스토리"
---

# 🧬 Sonagi Icons: System Evolution

본 문서는 소나기(Sonagi) 프로젝트의 아이콘 시스템이 단일 `test_icon.svg`라는 오류투성이 레거시에서 출발하여, 글로벌 대기업 수준의 **엔터프라이즈 자동화 파이프라인**으로 진화하기까지의 과정을 기록한 아키텍처 히스토리입니다.

## 1. The Legacy: 수동 트레이싱의 한계
초기 `test_icon.svg`는 외부 디자인 툴에서 자동 트레이싱(Trace Bitmap)된 결과물이었습니다.
*   **문제점:** 선(Stroke)이 면(Fill) 데이터로 깨져서 1.8px~2.2px 등 시각적 굵기가 일정하지 않음.
*   **문제점:** 수많은 아이콘이 단일 330x330 캔버스에 묶여 있어 개별 컴포넌트로 활용 불가능.
*   **문제점:** 소수점이 난무하는 좌표계로 인해 모니터에서 서브픽셀 뭉개짐(Sub-pixel Blur) 발생.

## 2. The Engine: 기하학적 뼈대 분리 (SCAD & Raw SVG)
이 문제를 해결하기 위해, 모든 아이콘을 수학적 함수 기반의 뼈대로 재작도했습니다.
*   **Solid Geometry (A 그룹):** `cloud`, `gear`, `home` 등 면의 결합이 필요한 아이콘은 **OpenSCAD**를 통해 순수 수학적 `union()`, `hull()` 연산으로 구축.
*   **Pure Line (B/C 그룹):** `menu`, `close`, `folder-open` 등 열린 선(Open Path)이 필요한 아이콘은 **Raw SVG 좌표**를 수동 코딩하여 오차율 0% 달성.

## 3. The Purifier: 반응형 룰 강제 세탁기
아무리 뼈대가 훌륭해도 실무 규격에 맞지 않으면 무용지물입니다. 이를 강제하기 위해 파이썬 린터(`sonagi_purifier.py`)를 개발했습니다.
*   **뷰박스 강제:** 모든 에셋을 `viewBox="0 0 24 24"` 캔버스로 고정.
*   **Y축 보정:** CAD 툴의 좌표계를 SVG 표준(Top-Left)에 맞게 `scale(1, -1)` 및 `translate` 처리.
*   **두께 룰 강제:** `fill="none" stroke="currentColor" stroke-width="2"` 주입 완료.

## 4. The Optical Magic: 시각적 질량과 키라인
수학적으로 크기가 같아도 인간의 눈에는 원형이 사각형보다 작아 보입니다.
*   **해결:** 머티리얼 디자인의 **Keyline 마법진**을 도입.
*   `search`(원형)는 지름 20px로, `user`(사각형)는 18px로, `link`(직사각형)는 폭 20px로 각각 다른 키라인 타겟에 맞춰 광학적 보정(Optical Sizing) 완료.

## 5. The Sticker Sheet: 현업 스탠다드 "한 판" (V2)
단순한 갤러리를 넘어, 실무 연동을 위한 궁극의 스티커 시트(`sonagi_sticker_sheet_v2.html`)를 자동화하여 구축했습니다.
*   **3-Tier 렌더링:** 16px(Micro), 24px(Base), 48px(Hero) 사이즈별로 달라지는 반응형 선 두께(Responsive Stroke) 검증.
*   **Semantic Roles:** `icon-gear` ➔ `Usage: Settings, Options` 등 개발팀이 즉각 매핑 가능한 의미론적 태그 삽입.
*   **Do & Don't 가이드:** 그림자 금지, 내부 채우기 금지 등 소나기의 'Wild & Thin' 룰을 하단에 명문화.

---
> **Architect's Note:** 이 모든 과정은 단 한 번의 수동 마우스 조작 없이, 오직 코드와 수식, 쉘 스크립트 파이프라인으로만 이루어졌습니다. 이는 소나기 디자인 시스템이 영구적으로 늙지 않고(Non-destructive) 확장 가능함을 증명합니다.
