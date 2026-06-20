---
title: iOS & iPadOS Layout Guides (Safe Area & Margins)
tags: [reference, ios, layout, safe-area, general-knowledge]
source: figma-CflBrHVbynFWfIAMUaCZ9m
created: 2026-06-02
---

# iOS & iPadOS Layout Guides

Apple의 공식 휴먼 인터페이스 가이드라인(HIG)에 기반한 iOS 기기의 화면 레이아웃 및 여백(Margin) 설계 표준입니다. 이 문서는 특정 프로젝트(소나기 등)에 국한되지 않는 **모바일 UI/UX 설계의 보편적 지식**으로 활용됩니다.

## 📱 시각적 기준 (iPhone Portrait)
![[general-ref-ios-layout.png]]

## 📏 핵심 레이아웃 개념

### 1. Safe Area (안전 영역)
*   **정의**: 기기의 물리적 센서(노치, 다이내믹 아일랜드)나 시스템 UI(상태 표시줄, 홈 인디케이터)에 의해 가려지지 않는 순수한 콘텐츠 영역입니다.
*   **적용 원칙**: 텍스트, 버튼 등 사용자가 조작하거나 읽어야 하는 중요한 콘텐츠는 반드시 Safe Area 내부에 배치해야 합니다. 반면, 배경 색상이나 장식성 이미지는 화면 끝까지 확장(Bleed)해도 무방합니다.

### 2. Layout Margins (기본 여백)
*   **정의**: 화면 좌우 가장자리와 콘텐츠 사이의 기본 간격입니다.
*   **수치 (Compact 기준)**: iPhone과 같은 세로 모드(Compact Width)에서는 보통 좌우 **16px**의 Layout Margin을 기본으로 사용합니다. (iPad 등 Regular Width에서는 20px 이상을 사용하기도 합니다.)

### 3. Navigation Bar & Home Indicator
*   **Navigation Bar**: 상단에 위치하며, 현재 화면의 제목과 뒤로가기 버튼 등을 제공합니다. (큰 제목을 쓸 경우 Safe Area의 상단 여백이 150px 이상으로 넓어집니다.)
*   **Home Indicator**: 하단에 위치하는 제스처 영역입니다. 이 주변에는 클릭 가능한 하단 탭바(Tab Bar)나 CTA 버튼을 배치할 때 오작동을 피하기 위해 충분한 여백(약 21~34px)을 확보해야 합니다.

---
*Archived from iOS 17 and iPadOS 17 Community UI Kit*
