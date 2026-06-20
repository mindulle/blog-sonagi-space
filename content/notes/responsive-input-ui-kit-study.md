---
title: "Reference Study: Free Responsive Input UI Kit"
date: 2026-06-02
tags: [reference, figma, inputs, responsive-design, ui-kit]
category: design
description: "반응형 입력 필드 시스템의 구조와 상태 정의(UGPhsFmzXewBCM3irqCBYl) 분석"
---

# 📚 Study: Free Responsive Input UI Kit

이 문서는 디자인 시스템의 핵심 원자인 **입력 필드(Inputs)**의 반응형 구조와 배리언트 설계를 분석한 리포트입니다. 소나기(Sonagi) v3.0의 'Wild & Thin' 입력 폼 컴포넌트가 다양한 상태(Focus, Error 등)를 명확하게 시각화하고, 해상도에 유연하게 대응할 수 있도록 아키텍처를 연구하기 위해 작성되었습니다.

---

## 1. 🖼️ Visual Context
![Responsive Input UI Kit Cover](https://www.figma.com/api/mcp/asset/a80c8b6a-42ed-487b-b00d-ab933a869cfd)

이 킷은 입력 필드의 레이블, 본체, 그리고 도움말/에러 텍스트가 하나의 유기적인 배리언트 세트로 묶여 관리되는 **컴포넌트 기반 설계**를 특징으로 합니다.

---

## 2. 💡 Key Insights for Sonagi v3.0

### 2.1 Component-level State Management
- **분석**: `Default`, `Focus`, `Active`, `Error`, `Success`, `Disabled` 등 입력 필드가 가질 수 있는 모든 시각적 상태를 체계적으로 정의합니다.
- **소나기 v3.0 적용**: 소나기의 'Wild' 입력창은 평소에는 2px 보더를 유지하다가, **Focus 시 보더 색상이 반전되거나 굵기가 미세하게 변하는** 인터렉션을 적용합니다. 특히 'Error' 상태에서는 보더 자체가 지그재그나 거친 선으로 변하는 'Wild'한 연출을 고려할 수 있습니다.

### 2.2 Flexible Width & Constraints
- **분석**: 부모 컨테이너의 크기에 따라 입력 필드의 너비가 자동으로 조절되는 반응형 설계를 따릅니다.
- **적용**: 소나기 v3.0의 폼 레이아웃에서도 입력 필드들이 **'Fill container'** 설정을 통해 모바일과 데스크탑 해상도에 유연하게 맞물리도록 설계합니다.

### 2.3 Visual Hierarchy through Feedback
- **적용**: 에러나 성공 피드백 발생 시 아이콘과 텍스트의 정렬(Padding)을 정밀하게 관리하여, 사용자가 시각적 노이즈 없이 즉각적으로 상태를 인지하게 만듭니다.

---

## 🏁 Cleanup Status
- **추출 완료**: 2026-06-02
- **조치 사항**: 에듀케이션 팀 이동 완료. 입력 필드 아키텍처의 표준 레퍼런스로 활용하기 위해 아카이브 보존 권장.

*Analyzed by Sonagi System Architect (Gemini CLI)*
