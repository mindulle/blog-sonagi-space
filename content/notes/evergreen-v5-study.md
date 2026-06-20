---
title: "Reference Study: Evergreen v5 (by Segment)"
date: 2026-06-02
tags: [reference, figma, design-system, evergreen, utility-first]
category: design
description: "Segment의 오픈 소스 디자인 시스템 Evergreen v5(gCMUXwgfrGIC2nyLkJBVhE)의 실무적 아키텍처 분석"
---

# 📚 Study: Evergreen v5 Design System

이 문서는 엔터프라이즈급 React UI 프레임워크인 Segment의 **Evergreen v5** 디자인 시스템을 분석하고, 소나기(Sonagi) v3.0의 실무적 컴포넌트 아키텍처를 보완하기 위한 레퍼런스로 작성되었습니다.

---

## 1. 🖼️ Visual Context
![Evergreen v5 Thumbnail](https://www.figma.com/api/mcp/asset/57d9e44a-1606-4c11-8dc2-8a07c25d07ad)

Evergreen은 "구축보다는 조립(Assembly over Building)"에 집중하는 실용적인 시스템입니다.

---

## 2. 💡 Key Insights for Sonagi v3.0

### 2.1 Utility-first Layouts
- **분석**: Evergreen은 개별 컴포넌트의 미학보다 컴포넌트들이 모여 데이터 집약적인 화면을 구성할 때의 **효율성**을 강조합니다.
- **소나기 v3.0 적용**: 'Wild & Thin' 스타일이 자칫 화려함에 치우치지 않도록, 실제 관리자 대시보드나 복잡한 설정 화면에서는 Evergreen 스타일의 **밀도 높은 그리드와 정렬 규칙**을 벤치마킹하겠습니다.

### 2.2 Clear Component Hierarchy
- **Hierarchy**: Evergreen은 버튼 하나에도 `Primary`, `Default`, `Minimal` 등 목적에 따른 위계를 매우 엄격하게 구분합니다.
- **적용**: 소나기 v3.0에서도 굵은 보더(2px)를 사용하는 `Wild` 등급과, 보더 없이 여백만 사용하는 `Thin` 등급의 컴포넌트 사용처를 Evergreen처럼 명확히 정의하겠습니다.

### 2.3 Semantic Color Palettes
- Evergreen은 단순히 색상을 나열하지 않고 `Success`, `Danger`, `Warning`과 같은 **기능적 컬러**를 시스템의 핵심으로 삼습니다. 
- 소나기 위키 코덱스에서도 이러한 기능적 명명 규칙을 100% 준수하여 개발 효율을 높입니다.

---

## 🏁 Cleanup Status
- **추출 완료**: 2026-06-02
- **조치 사항**: 에듀케이션 팀으로 안전하게 이동 완료. 정보 추출이 끝났으므로 원본은 아카이브 권장.

*Analyzed by Sonagi System Architect (Gemini CLI)*
