---
title: "Reference Study: Interactive Cards Kit"
date: 2026-06-02
tags: [reference, figma, cards, interactive, micro-interaction]
category: design
description: "동적 인터렉션과 다양한 상태 변화를 포함한 카드 시스템(8U6uRG8wKeybYSR2K62fnn) 분석"
---

# 📚 Study: Interactive Cards Kit

이 문서는 지식 관리의 핵심 컨테이너인 **카드(Cards)**의 인터랙티브한 피드백과 동적 레이아웃을 분석한 리포트입니다. 소나기(Sonagi) v3.0의 'Wild & Thin' 아키텍처에서 카드가 사용자에게 지루하지 않은 지식 탐색 경험을 제공할 수 있도록 인터렉션 전략을 연구하기 위해 작성되었습니다.

---

## 1. 🖼️ Visual Context
![Interactive Cards Kit Overview](https://www.figma.com/api/mcp/asset/3261057d-c678-4a24-b567-e043ab093a79)
![Expanding Carousel Interaction](https://www.figma.com/api/mcp/asset/36e5f34f-ca05-4776-afb3-47ef80865e04)
![Drag to Change Status](https://www.figma.com/api/mcp/asset/3e59a556-6498-4f13-ac44-dda2319d6de0)

이 킷은 단순한 클릭을 넘어 드래그(Drag), 확장(Expansion), 탭(Tab) 등 카드 내에서 일어날 수 있는 다양한 마이크로 인터렉션을 체계적으로 보여줍니다.

---

## 2. 💡 Key Insights for Sonagi v3.0

### 2.1 Dynamic Expansion Strategy
- **분석**: `Card Expansion` 배리언트를 통해 정보의 요약본과 상세본을 카드 내에서 매끄럽게 전환합니다.
- **소나기 v3.0 적용**: 위키의 개념 노트(`_concepts`)를 카드 형태로 볼 때, 굵은 2px 보더의 레이아웃을 유지하면서 **내부 콘텐츠가 아래로 확장되며 상세 내용을 노출**하는 방식을 채택합니다.

### 2.2 Gesture-based Interactions
- **분석**: `Drag - Change Status`와 `Tinder Swipe` 같은 제스처 기반의 피드백을 제공합니다.
- **적용**: 소나기 v3.0의 'Inbox'나 'Review' 관리 시, 카드를 옆으로 밀어서(Swipe) '완료' 처리하거나 '아카이브'하는 인터렉션을 도입하여 지식 정제의 재미를 더합니다.

### 2.3 Contextual Carousel
- **적용**: 한 카드 내에서 여러 장의 이미지나 관련 링크를 탐색할 때, `Expanding Carousel` 스타일의 수평 스크롤 UI를 적용하여 정보의 밀도를 높이면서도 시각적 질서를 유지합니다.

---

## 🏁 Cleanup Status
- **추출 완료**: 2026-06-02
- **조치 사항**: 에듀케이션 팀 이동 완료. 인터렉션 설계의 레퍼런스로 활용하기 위해 아카이브 보존 권장.

*Analyzed by Sonagi System Architect (Gemini CLI)*
