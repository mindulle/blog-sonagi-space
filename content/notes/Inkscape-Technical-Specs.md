---
title: "Inkscape Technical Specifications"
category: Design
tags: [inkscape, svg, filters, standards]
description: "핵심 디자인 학습 자료로부터 추출된 잉크스케이프 정밀 설정 및 필터 파라미터 가이드"
---

# 🛠️ Inkscape Technical Specifications

본 문서는 *The Icon Handbook*, *Vector Basic Training*, *Layout Essentials*, *Elemental Magic* 등 검증된 디자인 원칙들을 잉크스케이프(Inkscape) 환경에 맞게 수치화한 기술 명세입니다.

## 🛠️ 활용 자산 (Templates & Presets)
- **10_Sources/assets/branding/Templates/sonagi_grid_master_v2.svg**: 작도 가이드 레이어가 포함된 마스터 템플릿.
- **10_Sources/assets/branding/Templates/sonagi_filter_library.svg**: 검증된 SVG 필터 코드가 담긴 프리셋 파일.

## 1. 그리드 및 선 굵기 표준 (Grid & Stroke)
*참조: Jon Hicks, The Icon Handbook*

아이콘 및 소형 심볼 작도 시 시각적 명확성을 보장하기 위한 설정입니다.

| 항목 | 권장 수치 | 비고 |
| :--- | :--- | :--- |
| **기본 캔버스 (Canvas)** | 32px x 32px | 웹/앱 아이콘 표준 |
| **그리드 가이드 (Square Guide)** | 24px | 캔버스의 약 75-80% 점유 |
| **안전 영역 (Safe Zone)** | 4px (사방 여백) | 시각적 답답함 해소 |
| **표준 선 굵기 (Stroke)** | 2px | 32px 캔버스에서 가독성 최적 |
| **시각적 보정 (Optical)** | 0.9px | 45도 기울어진 1px 선의 앤티앨리어싱 보정 |

## 2. 노드 매니지먼트: 클락워크 메소드 (TCM)
*참조: Von Glitschka, Vector Basic Training*

잉크스케이프의 **노드 도구(N)**를 사용하여 가볍고 정밀한 벡터를 생성하는 규칙입니다.

- **12, 3, 6, 9 법칙**: 모든 곡선의 노드(Anchor Point)는 반드시 시계 방향의 12시, 3시, 6시, 9시 방향(정점, Extrema)에만 배치합니다.
- **최소 노드 원칙 (Prime Point Placement)**: 형태의 본질을 훼손하지 않는 선에서 가장 적은 수의 노드만을 사용합니다.
- **핸들 정렬**: 곡률을 조절하는 핸들은 가급적 수직/수평을 유지하여 렌더링 엔진의 계산 부하를 줄입니다.

## 3. 레이아웃 및 비례 (Layout & Proportions)
*참조: Beth Tondreau, Layout Essentials*

그리드 시스템 구축 시 적용하는 수학적 비례입니다.

- **황금비 (Golden Ratio)**: `1:1.618`. 주요 요소의 크기 대비 및 여백 산출의 기본값입니다.
- **2단 그리드 (Column Ratio)**: 불균형 2단 구성 시 `1:2` 비례를 권장합니다.
- **여백 계층 (Margin Hierarchy)**: **하단(Foot) 여백**은 항상 **상단(Head) 여백**보다 커야 시각적 안정감을 줍니다.

## 4. Digital Ink Filter (SVG 필터 조합)
*참조: Joseph Gilland, Elemental Magic & Sonagi V2 Baseline*

먹 번짐(Ink Bleed)과 갈필(Dry Brush) 효과를 구현하기 위한 파라미터 조합입니다.

### Recipe A: Soft Ink Bleed (먹 번짐)
유기적인 액체의 확산을 표현합니다.

```xml
<filter id="ink_bleed_soft">
  <!-- 1. 미세한 번짐 입자 생성 -->
  <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" result="noise"/>
  <!-- 2. 입자에 따른 형태 왜곡 (필압 표현) -->
  <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" result="distorted"/>
  <!-- 3. 액체 고임 효과 (Ink Pooling) -->
  <feGaussianBlur in="distorted" stdDeviation="0.8" result="blur"/>
  <feComponentTransfer in="blur">
    <feFuncA type="discrete" tableValues="0 1"/> <!-- 외곽선을 선명하게 잡아줌 -->
  </feComponentTransfer>
</filter>
```

### Recipe B: Dry Brush / Tapering (갈필 및 테이퍼링)
*Elemental Magic*의 에너지 흐름 원칙을 적용한 속도감 있는 필치입니다.

- **Tapering Logic**: 시작점은 굵게, 끝점은 `0.1px` 미만으로 가늘어지는 패스 사용.
- **Rough Edge**: `feTurbulence`의 `baseFrequency`를 `0.15` 이상으로 높여 거친 질감을 강조.

### 📝 향후 과제: High-End Glassmorphism (글래스모피즘 고도화)
현재 SVG 단일 필터만으로는 배경 투과 및 정교한 굴절 표현에 한계가 있음이 확인되었습니다. 향후 고품질 작업 파일 분석을 통해 다음 공정을 추가할 예정입니다.

1.  **Multi-Layer Clipping**: 배경 에셋을 심볼 형태로 클리핑한 뒤 개별 블러(`feGaussianBlur`) 적용.
2.  **Specular Mapping**: 단순 필터 광원이 아닌, 실제 벡터 패스로 하이라이트와 림 라이트(Rim Light)를 별도 작도.
3.  **Refraction Distortion**: `feDisplacementMap`의 `scale` 수치를 배경 이미지의 복잡도에 따라 유동적으로 조절하는 매커니즘 확보.

---
**업데이트 이력**
- 2026-05-20: 핵심 도서 4권의 수치 반영 및 글래스모피즘 공정 개선 메모 추가.
