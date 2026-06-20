---
title: "Sonagi 브랜드 자산 관리 및 활용 가이드 (Asset Guide)"
date: 2026-05-13
tags: [branding, assets, catalog, usage]
category: design
description: "실제 프로젝트에서 Sonagi 브랜드 자산을 활용하는 방법"
---

# 브랜드 자산 관리 및 활용 가이드

Step 2의 시각적 규정을 실제 디지털 환경에 적용하기 위한 실무 가이드입니다.

---

## 1. 브랜드 자산 카탈로그 (Asset Inventory)

`10_Sources/assets/branding/` 내의 주요 파일들의 용도와 우선순위를 정의합니다.

### 1.1 마스터 킷 (Master Kits)
- **`sonagi_brand_kit_v2_wild_thin.svg`**: [우선순위: 최상] 브랜드의 모든 요소(심볼, 워드마크, 조합)가 포함된 마스터 파일입니다. 새로운 자산 제작 시 반드시 이 파일을 기준으로 합니다.

### 1.2 단독형 로고 (Standalone)
- **`sonagi_symbol_geometric_final.svg`**: 파비콘, 앱 아이콘, 프로필 사진 등 좁은 영역에서 브랜드를 상징할 때 사용합니다. (The Thin)
- **`sonagi_lettering_refined_rabbit.svg`**: 영상 엔딩, 포스터 제목 등 감성적인 임팩트가 필요할 때 사용합니다. (The Wild)

### 1.3 조합형 로고 (Combination Marks)
- **`sonagi_wild_thin_horizontal.svg`**: 웹사이트 헤더, 문서 상단 등 가로로 긴 영역에 사용합니다.
- **`sonagi_wild_thin_vertical.svg`**: 패키지, 랜딩 페이지 중앙 등 수직적 안정감이 필요한 곳에 사용합니다.

---

## 2. 그래픽 모티프 활용 (Graphic Motifs)

브랜드의 인상을 강화하기 위해 로고 외에 사용하는 보조 그래픽 요소입니다.

### 2.1 디지털 인크 테스처 (Digital Ink Texture)
- **용도**: 배경 패턴, 카드 섹션의 구분선.
- **활용법**: `sonagi_brush_simulations.svg` 내의 텍스처를 사용하여, 배경의 일부에 아주 연하게(Opacity 5~10%) 배치하여 종이 위에 먹이 번진 듯한 느낌을 줍니다.

### 2.2 씬 라인 시스템 (Thin Line System)
- **용도**: UI 레이아웃 구분, 아이콘 디자인.
- **활용법**: 0.5pt~1pt 두께의 직선을 사용하여 기하학적 그리드를 시각화합니다. 이는 'Wild'한 텍스처와 대비되어 브랜드의 정밀함을 강조합니다.

---

## 3. 채널별 적용 가이드 (Channel Application)

### 3.1 SNS 및 외부 플랫폼 (`sns/_공통/`)
- **프로필 사진**: `sonagi_symbol_geometric_final.svg`를 배경색(Mist Gray)과 조합하여 원형 또는 사각형으로 크롭하여 사용합니다.
- **커버 이미지**: 배경에는 'Wild'한 텍스처(먹 번짐)를 깔고, 우측 하단에 'Thin'한 로고 조합형을 배치하여 브랜드의 전체 서사를 보여줍니다.

### 3.2 문서 및 개발 문서 (Wiki/Github)
- **GitHub Readme**: 수평 조합형 로고를 상단 중앙에 배치합니다.
- **Wiki Index**: `Mist Gray` 배경색을 기반으로 `Ink Black` 텍스트를 사용하여 눈의 피로도를 낮추고 고급스러운 인상을 유지합니다.

---

## 4. 디자인 시스템 토큰으로의 전환 (Bridge to Design System)

브랜딩 자산에서 정의된 요소들은 다음과 같이 디자인 시스템의 토큰으로 이식됩니다.

1. **Brand Colors** → `primitive-colors.json` (Sonagi Blue, Ink Black 등)
2. **Logo Spacing** → `layout-tokens.json` (로고 주변 보호 구역 정의)
3. **Brand Fonts** → `typography-tokens.json` (Pretendard 기반 타이포그래피 계층 구조)

---

## 5. 관리 및 배포 규칙
- 모든 브랜드 자산은 `svg` 형식을 원칙으로 하며, 부득이한 경우에만 `png`(고해상도)를 사용합니다.
- 자산의 수정이 필요한 경우 `00_System/scripts/` 내의 관련 도구를 활용하거나, 디자이너의 검토를 거쳐야 합니다.
