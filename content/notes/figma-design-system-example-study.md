---
title: "Reference Study: Figma Design System Example"
date: 2026-06-02
tags: [reference, figma, design-system, tokens]
category: design
description: "커뮤니티 예제 파일(nLtVihIfDjsvCdayFTHZse)에서 추출한 토큰 및 구조 분석 리포트"
---

# 📚 Study: Figma Design System Example (Copy)

이 문서는 소나기(Sonagi) 디자인 시스템 v3.0 구축 전, 참고용으로 복제되었던 예제 파일의 핵심 정보를 보존하기 위해 작성되었습니다.

---

## 1. 🎨 Color Tokens (Purple & Blue Palette)
이 파일은 퍼플 계열의 메인 컬러와 블루 계열의 서브 컬러를 사용하고 있으며, 10단계의 명도 스케일을 가집니다.

### 1.1 Primary (Purple)
![Color Tokens](https://www.figma.com/api/mcp/asset/46b111d2-7483-4517-b3a5-da28d3daad73)
- **Main**: `#8f55e0` (Primary-5)
- **Darkest**: `#26005c` (Primary-1)
- **Lightest**: `#e1ccff` (Primary-9)

### 1.2 Secondary (Blue)
- **Main**: `#1b7bbf` (Secondary-5)
- **Darkest**: `#00365c` (Secondary-1)
- **Lightest**: `#cceaff` (Secondary-9)

### 1.3 Grey Scale
- `Grey-0` (#000000) ~ `Grey-10` (#ffffff)

---

## 2. 📏 Spacing System (2.5px Precision)
![Spacing System](https://www.figma.com/api/mcp/asset/40267d49-feaa-49b1-82f5-2d9aab5d51ce)
8px 그리드 기반인 소나기와 달리, 이 예제는 **2.5px 단위**의 매우 정밀한 간격 스케일을 사용합니다.

| Token | Value | Note |
| :--- | :--- | :--- |
| `spacing-0` | 0px | - |
| `spacing-0-3` | 2.5px | 매우 미세한 정렬용 |
| `spacing-0-6` | 5px | - |
| `spacing-0-9` | 7.5px | - |
| `spacing-1` | 10px | 10단위 베이스 |
| `spacing-2` | 20px | - |
| `spacing-3` | 30px | - |
| `spacing-4` | 40px | - |

---

## 3. ✍️ Typography (Open Sans Scale)
![Typography Scale](https://www.figma.com/api/mcp/asset/4ae3e733-cd91-433e-b194-8449f93aab6f)
웹 가독성이 좋은 `Open Sans` 서체를 기반으로 시스템이 설계되었습니다.

- **Scale**: 29, 24, 21, 19, 17, 16, 15, 14, 12, 11 (px)
- **Structure**: `text-1`부터 `text-10`까지의 시맨틱 네이밍을 시도함.

---

## 4. 💡 Structural Insights
- **Widget-based Documentation**: `Figma Design System Widget`을 사용하여 피그마 캔버스 내에서 직접 토큰을 시각화하고 설명하는 방식이 인상적입니다.
- **Presentation Deck**: 디자인 시스템 자체가 하나의 프레젠테이션 데크(`Presentation Deck` 위젯)로 구성되어 있어, 비디자이너와의 소통에 유리한 구조입니다.

---
## 🏁 Cleanup Status
- **추출 완료**: 2026-06-02
- **권장 조치**: 소나기 v3.0(Wild & Thin) 철학과는 맞지 않으므로, 정보 기록 후 파일 삭제 또는 아카이브 권장.

*Analyzed by Sonagi System Architect (Gemini CLI)*
