---
title: "Reference Study: Neo Brutalism UI Kit"
date: 2026-06-02
tags: [reference, figma, design-system, neo-brutalism, wild-thin]
category: design
description: "소나기 v3.0의 직접적인 모태가 되는 네오-브루탈리즘 스타일(AHc90vTPEU0WMpwVecLnms) 분석"
---

# 📚 Study: Neo Brutalism UI Kit (Community)

이 문서는 소나기(Sonagi) v3.0의 **'Wild & Thin'** 철학(No Shadow, 굵은 보더)의 시각적 완성도를 높이기 위해, 네오-브루탈리즘 스타일의 정수를 담고 있는 커뮤니티 UI 키트를 분석한 리포트입니다.

---

## 1. 🖼️ Visual Context
![Buttons Showcase](https://www.figma.com/api/mcp/asset/1c5d106b-481c-44e3-85e3-0c52adba4028)
![Inputs Showcase](https://www.figma.com/api/mcp/asset/7aa0fcce-02b3-4112-82f9-da6b1eeaa78e)

이 시스템은 강렬한 원색과 대비, 그리고 **그림자 대신 굵은 검은색 외곽선**을 사용하여 구조를 강조합니다.

---

## 2. 💡 Key Insights for Sonagi v3.0

### 2.1 "Shadows are for Styling, not Structure"
- **분석**: 가이드(`node-id 206:1370`) 섹션에서 "Strokes and shadows are for styling, you can remove them"이라고 명시되어 있습니다. 
- **소나기 v3.0 적용**: 우리는 이 원칙을 한 단계 더 나아가 **"Shadows are forbidden, Strokes are Structure"**로 정의합니다. 그림자 없이 오직 2px의 정교한 선만으로 컴포넌트의 위계를 세웁니다.

### 2.2 Button State Variations
- **Desktop vs Mobile**: 호버(Hover) 효과 유무에 따른 데스크탑/모바일 변주가 매우 정밀하게 정의되어 있습니다.
- **Active State**: 버튼을 눌렀을 때 내부 컬러가 반전되거나 보더가 두꺼워지는 방식 대신, **내용물의 미세한 위치 이동(Offset)**으로 '눌림'을 표현하는 방식이 인상적입니다.

### 2.3 Input Border Precision
- 입력창(Inputs)에서 포커스가 갔을 때 보더 색상만 변하는 것이 아니라, **보더 두께의 시각적 무게감**을 조절하여 사용자의 시선을 유도하는 기법을 참고합니다.

---

## 3. 🗺️ Component Coverage
- **Buttons**: Box, Rounded-edge, Rounded 스타일 지원.
- **Lists**: Checkbox, Radio, Switch가 결합된 복합 리스트 아이템 구조.
- **FABs**: 다양한 사이즈(Small, Default, Large)의 플로팅 버튼.

---

## 🏁 Cleanup Status
- **추출 완료**: 2026-06-02
- **조치 사항**: 에듀케이션 팀으로 안전하게 이동 완료. 소나기 v3.0의 직접적인 벤치마킹 대상이므로 위키 기록 후 원본은 보존 권장.

*Analyzed by Sonagi System Architect (Gemini CLI)*
