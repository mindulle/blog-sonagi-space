---
title: "디자이너 실무 은어 ↔ 글로벌 시스템 용어 교차 검증 사전"
date: 2026-06-15
tags: [design-slang, optical-adjustment, UIUX, glossary, vocabulary]
category: design
description: "Gary Simon(영미권)과 마디아(한국)의 실제 UI 피드백 라이브 발언을 바탕으로 구축한 실무 디자인 용어 번역기"
---

# 🗣️ 디자이너 실무 은어 ↔ 시스템 용어 번역기 (UI/UX 편)

본 사전은 영미권 1티어 UI 리뷰어 **Gary Simon (DesignCourse)**과 한국 웹디자인 피드백의 일인자 **마디아 (Madia Design)**의 실제 라이브 피드백 자막 데이터를 교차 검증하여 작성되었습니다. 

디자이너들이 시각적 불편함을 느낄 때 쏟아내는 '감정적 은어'를 글로벌 디자인 시스템의 **공식 규격 용어**와 매핑하여, 개발자 및 AI 에이전트(Jenny, Nuri)와의 소통 오류를 없애는 것이 목적입니다.

---

## 1. 여백과 밀도 (Spacing & Density)
UI에서 가장 많은 지적을 받는 '카드 UI 및 컴포넌트 간격'에 대한 표현입니다.

| 🇰🇷 마디아 (한국 실무 은어) | 🇺🇸 Gary Simon (영미권 은어) | 📐 공식 시스템 용어 (Material/HIG) | 🛠️ 시스템 해결책 (Action) |
| :--- | :--- | :--- | :--- |
| "아이고, **숨이 턱턱 막혀요**." | "It needs **room to breathe**." | **Negative Space (네거티브 스페이스)** | 카드 내부의 Padding을 16px -> 24px로 증가. |
| "요소들이 다 **들러붙어 있잖아요**." | "Things are too **cluttered / claustrophobic**." | **Proximity (근접성 / 게슈탈트 법칙)** | 연관 없는 그룹 간의 Margin을 2배수로 벌려 시각적 분리. |
| "화면이 너무 **휑해요** / **날리네요**." | "It feels too **empty / floating**." | **Information Density (정보 밀도 부족)** | 최대 컨테이너 너비(Max-width)를 제한하거나, 그리드 단을 줄여 밀도 향상. |

## 2. 덩어리감과 시각적 위계 (Visual Hierarchy & Grouping)
텍스트와 버튼의 우선순위가 엉켜 시선이 분산될 때 쓰는 표현입니다.

| 🇰🇷 마디아 (한국 실무 은어)         | 🇺🇸 Gary Simon (영미권 은어)                  | 📐 공식 시스템 용어 (Material/HIG)       | 🛠️ 시스템 해결책 (Action)                                         |
| :-------------------------- | :---------------------------------------- | :-------------------------------- | :----------------------------------------------------------- |
| "**덩어리감**이 하나도 안 잡혀요."      | "Establish a clear **visual hierarchy**." | **Visual Hierarchy (시각적 위계)**     | 타이틀 폰트 웨이트(Bold)를 키우고 본문(Regular)과 대비 강화.                    |
| "시선이 자꾸 엉뚱한 데로 **분산되잖아요**." | "You're **competing for attention**."     | **Primary / Secondary Action 구분** | 핵심 버튼(CTA) 1개만 Solid Color로 채우고, 나머지는 Outline/Ghost 버튼으로 강등. |
| "버튼이 혼자 너무 **뚱뚱해요**."       | "The button is too **chunky / heavy**."   | **Optical Weight (시각적 무게감 불균형)**  | 버튼 높이(Height)를 주변 Input 필드와 맞추고(예: 48px), 폰트 크기를 비례에 맞게 축소.  |

## 3. 색상과 선명도 (Color, Contrast & Crispness)
색상의 대비나 픽셀 안티앨리어싱 문제가 발생했을 때의 표현입니다.

| 🇰🇷 마디아 (한국 실무 은어) | 🇺🇸 Gary Simon (영미권 은어) | 📐 공식 시스템 용어 (Material/HIG) | 🛠️ 시스템 해결책 (Action) |
| :--- | :--- | :--- | :--- |
| "색이 **탁해서 떡져 보여요**." | "It looks **muddy / washed out**." | **Contrast Ratio (명도 대비 실패)** | WCAG 2.1 기준에 맞춰 배경과 텍스트의 명도 대비를 4.5:1 이상으로 조정. |
| "색 좀 **쨍하게** 뺍시다!" | "Make it **punchy / pop**." | **High Chroma / Saturation (고채도)** | 소나기 공식 테마(Deep Blue)처럼 원색에 가까운 높은 채도의 Solid Color 적용. |
| "선이 **흐리멍텅하고 안 맞아요**." | "It's **off-pixel / blurry**." | **Sub-pixel Blur (서브픽셀 블러)** | X,Y 좌표와 W,H 치수를 소수점이 없는 정수(예: 24.0)로 강제 스냅(Snap to pixel). |

---

### 💡 (Tip) 에이전트 제니(Jenny) 활용법
이제 Figma에서 작업물을 저장하시고 제니(Jenny)에게 이렇게 요청해 보세요.
> *"제니, 카드 UI 쪽이 약간 **숨 막히고 덩어리감이 안 잡히는 것** 같은데, 이 위키 사전(Design-Optical-Slang-Glossary)을 바탕으로 Padding과 Hierarchy를 분석해 줄래?"*

제니가 인간 디자이너의 언어를 찰떡같이 알아듣고, 정확한 픽셀 수치를 짚어줄 것입니다!
