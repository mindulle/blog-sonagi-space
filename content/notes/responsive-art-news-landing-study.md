---
title: "Reference Study: Responsive Design Art News Landing Page"
date: 2026-06-02
tags: [reference, figma, responsive-design, landing-page, art-news]
category: design
description: "아트 뉴스 웹사이트의 반응형 레이아웃 전환 전략(Z7GgNal3hMTQmX9RGPVear) 분석"
---

# 📚 Study: Responsive Design Art News Landing Page

이 문서는 다양한 해상도(Desktop, Tablet, Mobile)에 대응하는 **반응형 디자인(Responsive Design)** 사례를 분석한 리포트입니다. 소나기(Sonagi) v3.0의 웹 인터페이스가 기기 환경에 관계없이 일관된 'Wild & Thin' 경험을 제공할 수 있도록 레이아웃 전환 전략을 연구하기 위해 작성되었습니다.

---

## 1. 🖼️ Visual Context
![Responsive Design Overview Thumbnail](https://www.figma.com/api/mcp/asset/782479b0-46e0-4260-ac23-4344cf07fa94)
![Desktop Landing Page Overview](https://www.figma.com/api/mcp/asset/c4d2a8af-d767-40d5-8e5e-98961131431e)

이 예제는 1440px(데스크탑) 기준의 그리드 시스템을 기반으로, 뉴스 카드(News Cards)와 타이포그래피가 해상도에 따라 어떻게 재배치되는지를 보여줍니다.

---

## 2. 💡 Key Insights for Sonagi v3.0

### 2.1 Grid-to-Stack Transition
- **분석**: 데스크탑에서는 3컬럼 그리드로 배치되던 뉴스 카드들이 모바일 해상도로 내려가면 1컬럼 스택(Stack) 구조로 자연스럽게 전환됩니다.
- **소나기 v3.0 적용**: 소나기의 'Wild'한 카드 UI들도 화면 폭이 좁아질 때 보더(2px)의 굵기는 유지하되, 내부 콘텐츠의 정렬(Padding)을 유동적으로 조절하여 가독성을 확보하는 전략을 취합니다.

### 2.2 Navigation Simplification
- **Desktop Navbar**: `Home`, `About`, `Artists` 등 모든 메뉴가 노출되는 구조.
- **Mobile Navbar**: 햄버거 메뉴(Drawer) 뒤로 숨기는 대신, 핵심 액션 버튼(Get Started)만 강조하는 단순화 전략을 참고합니다.

### 2.3 Visual Hierarchy in Art Content
- 아트 뉴스 사이트의 특성상 이미지의 비중이 매우 큽니다. 소나기 v3.0에서도 기술 문서의 **다이어그램이나 캡처 이미지**가 텍스트와 겹칠 때, 굵은 선의 'Wild' 레이어가 이미지를 효과적으로 프레이밍(Framing)할 수 있도록 설계합니다.

---

## 🏁 Cleanup Status
- **추출 완료**: 2026-06-02
- **조치 사항**: 에듀케이션 팀 이동 완료. 반응형 레이아웃의 기본 교과서로 활용하기 위해 아카이브 보존.

*Analyzed by Sonagi System Architect (Gemini CLI)*
