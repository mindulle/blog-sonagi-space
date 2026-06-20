---
title: "Reference Study: Free Responsive Button UI Kit"
date: 2026-06-02
tags: [reference, figma, buttons, responsive-design, ui-kit]
category: design
description: "반응형 버튼 시스템의 구조와 배리언트 설계 전략(JzOsKeEQ2QzVNADWUaGZrz) 분석"
---

# 📚 Study: Free Responsive Button UI Kit

이 문서는 디자인 시스템의 가장 기초적인 원자인 **버튼(Buttons)**의 반응형 구조와 배리언트 설계를 분석한 리포트입니다. 소나기(Sonagi) v3.0의 'Wild & Thin' 버튼 컴포넌트가 다양한 화면 크기와 맥락에서 유연하게 대응할 수 있도록 아키텍처를 연구하기 위해 작성되었습니다.

---

## 1. 🖼️ Visual Context
![Responsive Button UI Kit Cover](https://www.figma.com/api/mcp/asset/124c2f1f-7118-4a5b-998d-43d1f6414dc5)

이 킷은 버튼의 텍스트 양이나 컨테이너 크기에 따라 자동으로 확장/축소되는 **오토 레이아웃(Auto Layout)** 기반의 반응형 설계를 특징으로 합니다.

---

## 2. 💡 Key Insights for Sonagi v3.0

### 2.1 Content-driven Resizing
- **분석**: 버튼 내의 텍스트나 아이콘 유무에 관계없이 일관된 패딩(Padding) 값을 유지하며 유동적으로 크기가 변하는 구조입니다.
- **소나기 v3.0 적용**: 소나기의 2px 보더 'Wild' 버튼은 내부 콘텐츠가 늘어나더라도 시각적 무게 중심이 흐트러지지 않도록 **'Hug contents'** 설정을 기본으로 하되, 모바일 전용 'Full-width' 모드를 배리언트로 추가합니다.

### 2.2 Semantic States & Consistency
- **States**: `Default`, `Hover`, `Pressed`, `Disabled` 상태를 컬러 변수(Variables)뿐만 아니라 **보더 두께나 스타일의 변화**로 표현합니다.
- **적용**: 소나기 v3.0의 'Wild' 버튼은 클릭 시 보더가 2px에서 3px로 미세하게 두꺼워지거나, 내부 텍스트가 1px 아래로 이동하는 '눌림' 효과를 통해 직관적인 피드백을 제공합니다.

### 2.3 Visual Hierarchy through Variants
- **Hierarchy**: `Primary`, `Secondary`, `Tertiary`, `Ghost` 스타일의 구분.
- **적용**: 'Wild' 등급은 `Primary`에, 'Thin' 등급은 `Tertiary/Ghost`에 매칭하여 소나기 시스템 전반의 '강-약' 조절을 버튼 단위에서부터 실천합니다.

---

## 🏁 Cleanup Status
- **추출 완료**: 2026-06-02
- **조치 사항**: 에듀케이션 팀 이동 완료. 버튼 아키텍처의 정석을 참고하기 위해 아카이브 보존 권장.

*Analyzed by Sonagi System Architect (Gemini CLI)*
