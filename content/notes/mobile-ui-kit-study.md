---
title: "Reference Study: Mobile UI Kit"
date: 2026-06-02
tags: [reference, figma, mobile, ui-kit, touch-optimization]
category: design
description: "모바일 환경에 최적화된 컴포넌트와 레이아웃(vLywd1KZ2LtczQ50XTUsRo) 분석"
---

# 📚 Study: Mobile UI Kit

이 문서는 스마트폰 환경에서 최상의 사용성을 제공하는 **Mobile UI Kit**을 분석한 리포트입니다. 소나기(Sonagi) v3.0의 **'Thin'** 레이어(모바일 최적화, 간결한 정보 전달)를 정교화하고, 터치 인터페이스에 맞는 컴포넌트 규격을 수립하기 위해 작성되었습니다.

---

## 1. 🖼️ Visual Context
![Mobile UI Kit Cover](https://www.figma.com/api/mcp/asset/a02f4b61-02be-4783-9e72-1b42e983bf03)

이 킷은 캘린더, 드로어(Drawer), 마켓 플레이스, 인사이트 대시보드 등 모바일 앱에서 흔히 사용되는 핵심 화면들을 망라하고 있습니다.

---

## 2. 💡 Key Insights for Sonagi v3.0

### 2.1 Touch-friendly Targets
- **분석**: 버튼, 라디오 버튼, 리스트 아이템 등의 클릭 영역(Hit Area)이 충분히 확보되어 오동작을 방지합니다.
- **소나기 v3.0 적용**: 소나기의 'Wild'한 2px 보더 컴포넌트들도 모바일 뷰에서는 최소 44x44px 이상의 터치 영역을 보장하도록 설계합니다. 특히 리스트 형태의 지식 탐색 UI에서 이 규칙을 엄격히 적용합니다.

### 2.2 Bottom-sheet & Drawer Navigation
- **분석**: 화면 하단에서 올라오는 드로어(Drawer)를 통해 부가 정보나 필터 기능을 제공하여 한 손 조작성을 높입니다.
- **적용**: 위키의 카테고리 필터나 설정 메뉴를 모바일에서 호출할 때, 상단 메뉴 대신 이 킷의 **바텀 시트(Bottom Sheet) 패턴**을 적극 도입합니다.

### 2.3 Data Visualization on Small Screens
- **분석**: 'Insights' 화면에서 복잡한 그래프와 수치를 모바일 폭에 맞춰 요약해서 보여주는 방식이 효율적입니다.
- **적용**: 소나기 대시보드의 통계 위젯을 모바일로 전환할 때, 이 킷의 **간결한 카드형 데이터 배치**를 벤치마킹합니다.

---

## 🏁 Cleanup Status
- **추출 완료**: 2026-06-02
- **조치 사항**: 에듀케이션 팀 이동 완료. 모바일 UX의 기본 컴포넌트 구성을 참고하기 위해 아카이브 보존 권장.

*Analyzed by Sonagi System Architect (Gemini CLI)*
