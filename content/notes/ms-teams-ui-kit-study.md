---
title: "Reference Study: Microsoft Teams UI Kit"
date: 2026-06-02
tags: [reference, figma, design-system, teams, fluent-design]
category: design
description: "마이크로소프트 팀즈 공식 UI 키트(NDSxmwhlYM9RWdT4WpU5Rx) 분석 및 소나기 v3.0 적용 포인트"
---

# 📚 Study: Microsoft Teams UI Kit (Community)

이 문서는 대규모 협업 플랫폼인 Microsoft Teams의 디자인 시스템 구조를 분석하고, 소나기(Sonagi) v3.0의 'Wild & Thin' 철학을 정교화하기 위한 레퍼런스로 작성되었습니다.

---

## 1. 🖼️ Visual Context
![Microsoft Teams UI Kit Cover](https://www.figma.com/api/mcp/asset/356bce39-eed9-4cae-ad44-10b57307b0e1)

Teams UI Kit은 협업 환경에서의 **가독성**과 **상태 표시(Presence)**를 최우선으로 설계되었습니다.

---

## 2. 💡 Key Insights for Sonagi v3.0

### 2.1 Presence & Collaboration UI
- **Pill-shaped Indicators**: 사용자의 상태(온라인, 부재중 등)를 나타내는 Presence Pill의 디자인이 매우 간결하면서도 명확합니다.
- **Collaboration Cursors**: 멀티 플레이어 편집 환경에서의 커서 가독성 규칙을 참고할 수 있습니다.

### 2.2 Semantic Naming Convention
Microsoft Fluent Design의 핵심은 색상 이름(Blue)이 아닌 **역할 이름(Brand, Action, Surface)**을 사용하는 것입니다.
- 소나기 v3.0에서도 `--s-color-indigo` 대신 `--s-action-primary`와 같은 시맨틱 토큰 사용을 100% 의무화합니다.

### 2.3 Layered Information Architecture
- Teams는 정보의 밀도가 매우 높음에도 불구하고, **그림자(Elevation)**와 **섬세한 보더**를 통해 계층을 구분합니다.
- 소나기 v3.0은 그림자를 배제하므로, Teams가 그림자로 처리한 부분을 **2px 보더(Wild)**와 **여백(Thin)**으로 어떻게 치환할지가 핵심 디자인 도전 과제입니다.

---

## 🏁 Cleanup Status
- **추출 완료**: 2026-06-02
- **조치 사항**: 에듀케이션 팀으로 안전하게 이동 완료. 정보 기록이 끝났으므로 원본 파일은 아카이브 권장.

*Analyzed by Sonagi System Architect (Gemini CLI)*
