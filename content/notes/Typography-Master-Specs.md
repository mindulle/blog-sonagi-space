---
title: "Typography Master Specifications"
version: "v1.0.0"
status: "Active"
category: Design
tags: [typography, metrics, design-standards, fonts]
description: "소나기 브랜드의 서체 작도 및 정렬을 위한 학술적 가이드라인"
---

# 🖋️ Typography Master Specifications (`v1.0.0`)

> **[Changelog]**
> - **v1.0.0** (2026-06-16): 초기 스펙 문서 작성 및 시맨틱 버저닝 도입

본 문서는 소나기(Sonagi) 브랜드의 모든 타이포그래피 자산이 가져야 할 수학적 비례와 시각적 보정 원칙을 정의합니다.

## 1. 수평 기준선 시스템 (Vertical Alignment)
모든 서체 작도는 다음 5가지 기준선을 바탕으로 이루어집니다.

| 기준선 명칭 | 설명 | 소나기 표준 (Unit) |
| :--- | :--- | :--- |
| **Ascender Line** | 'b, d, h' 등 위로 뻗는 획의 최고점 | +8.5S |
| **Cap Height** | 대문자의 머리 높이 | +8.0S (16px) |
| **Mean Line** | 소문자 몸통의 높이 (x-height) | +4.5S (9px) |
| **Baseline** | 모든 글자가 서 있는 기준 바닥선 | **0 (Y: 28px)** |
| **Descender Line** | 'g, p, y' 등 아래로 뻗는 획의 최저점 | -3.0S |

## 2. 시각적 보정 (Optical Correction)
인간의 착시를 보정하기 위해 수학적 경계를 미세하게 벗어나는 기술입니다.

- **Overshoot (0.2px)**: 'o', 'S', 'g'와 같은 곡선 형태는 베이스라인 아래와 캡 하이트 위로 0.2px만큼 더 크게 그립니다.
- **Stroke Contrast**: 가로획(Hairline)은 세로획(Stem)보다 최소 15% 이상 가늘게 유지하여 시각적 무게를 맞춥니다.

## 3. 소나기 우아함 비례 (The Elegance Ratio)
- **x-Height Ratio**: 대문자 높이 대비 **52%~55%** 유지.
- **리듬감 (Poetic Rhythm)**: 글자 사이의 간격은 황금비(1:1.618)에 기반하여 점진적으로 확장되는 'Expanding Space' 기법을 권장합니다.

## 🔗 전문 타이포그래피 레퍼런스
- **[Optical Correction Analysis]**: [LinkedIn Reference Image](https://media.licdn.com/dms/image/v2/D4D22AQEFUjldz_dJww/feedshare-shrink_800/B4DZgC.lYDHMAk-/0/1752396617666?e=2147483647&v=beta&t=Fw0AAMitR13iePyDKuZym0nTBqaVhvhzCKFBLtjKKmY)
- **핵심 기술**: 오버슛(Overshoot), 시각적 커닝(Optical Kerning), 음의 공간 밸런싱(Negative Space Balancing).

---
**업데이트 이력**
- 2026-05-20: 타이포그래피 메트릭 표준화 및 오버슛 규정 수립.
