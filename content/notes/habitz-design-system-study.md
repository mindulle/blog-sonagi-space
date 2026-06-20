---
title: "Reference Study: Habitz Design System (with Variables)"
date: 2026-06-02
tags: [reference, figma, design-system, variables, mobile-app]
category: design
description: "변수(Variables) 기능을 적극 활용한 Habitz 디자인 시스템(v6qyD51lss7czvegDR45fH) 분석"
---

# 📚 Study: Habitz Design System (with Variables)

이 문서는 피그마의 최신 기능인 **변수(Variables)**를 활용하여 다크/라이트 모드 및 테마를 관리하는 Habitz 시스템을 분석하고, 소나기(Sonagi) v3.0의 토큰 구조 설계를 위한 레퍼런스로 작성되었습니다.

---

## 1. 🖼️ Visual Context
![Habitz Design System Cover](https://www.figma.com/api/mcp/asset/b7ba6e14-a0b7-476d-b015-e6e956ada9e6)
![Habitz UI Components Showcase](https://www.figma.com/api/mcp/asset/31bc2edd-fd89-4042-935e-b7fc68c7e7f7)

Habitz는 부드러운 라운딩과 파스텔 톤을 사용하여 친근한 사용자 경험을 제공하는 모바일 앱 중심의 디자인 시스템입니다.

---

## 2. 💡 Key Insights for Sonagi v3.0

### 2.1 Component Micro-interactions
- **Progressive Icons**: `habitIcon` 내부에 `progressTrack`과 `progress` 엘립스를 배치하여 진행률을 시각화하는 방식이 매우 직관적입니다.
- **Contextual Toasts**: `habit complete!`와 같은 피드백 토스트의 구조가 단순하면서도 명확한 액션(`add note`)을 포함하고 있어 참고할 가치가 있습니다.

### 2.2 Functional Content Grouping
- `trendAlert`, `emptyReminders`, `habitAssociation` 등 단순한 리스트를 넘어 사용자의 행동을 유도하는 **상태별 카드 UI**가 잘 설계되어 있습니다.
- 소나기 v3.0의 대시보드 위젯 설계 시 이러한 '행동 유도형(Action-oriented)' 컴포넌트 구조를 반영할 예정입니다.

### 2.3 Variable-first Architecture
- 파일명에 명시된 대로 **Variables**를 통해 라이트/다크 모드 간의 색상 전환을 유연하게 처리합니다.
- 소나기 v3.0에서도 `2px Border`의 색상을 변수로 관리하여, 테마에 따라 선의 느낌이 달라지도록 설계하겠습니다.

---

## 🏁 Cleanup Status
- **추출 완료**: 2026-06-02
- **조치 사항**: 에듀케이션 팀으로 안전하게 이동 완료. 기록 완료 후 드래프트 내 중복 파일 삭제 권장.

*Analyzed by Sonagi System Architect (Gemini CLI)*
