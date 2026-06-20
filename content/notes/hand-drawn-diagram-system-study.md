---
title: "Reference Study: Hand-drawn Diagram System (FigJam)"
date: 2026-06-02
tags: [reference, figjam, diagram, hand-drawn, workflow]
category: design
description: "핸드드로잉 스케치를 디지털 다이어그램으로 변환하는 워크플로우(c4VKMaWMFbFYLkZ7OSh4W8) 분석"
---

# 📚 Study: Hand-drawn Diagram System (FigJam)

이 문서는 FigJam 보드에서 관리되던 **핸드드로잉 다이어그램 시스템**의 워크플로우와 스타일을 분석하고, 소나기(Sonagi) v3.0의 아이디어 가시화 도구 설계를 위한 레퍼런스로 작성되었습니다.

---

## 1. 🖼️ Visual Context
![Hand-drawn Diagram Overview](https://www.figma.com/api/mcp/asset/ae33f236-a4b1-4142-aae8-957be8fc3cb0)

이 보드는 아날로그 스케치를 디지털 환경(Figma)으로 가져와 시스템화하는 4단계 프로세스를 상세히 가이드하고 있습니다.

---

## 2. 💡 Key Insights for Sonagi v3.0

### 2.1 The "Digitalize" Workflow (Step 1 ~ 2)
- **분석**: 종이에 그린 스케치를 촬영(Scannable 앱 등 활용)하고, 피그마의 `Select all with same stroke` 기능을 통해 디지털 컴포넌트의 보더 두께를 스케치 스타일에 맞추는 워크플로우를 제안합니다.
- **소나기 v3.0 적용**: 소나기의 디자인 원칙 가이드에 **"스케치에서 시스템으로(From Sketch to System)"** 섹션을 추가하여, 핸드드로잉의 자유로운 에너지를 정교한 2px 보더 시스템으로 치환하는 가이드를 제공할 수 있습니다.

### 2.2 Paper Cut-out Style (Style 3)
- **분석**: 종이를 오려 붙인 듯한 레이어링(`Style 3 - Paper cut outs`)과 `Elevation/Depression` 효과를 통해 그림자 없이도 깊이감을 표현합니다.
- **소나기 v3.0 적용**: 그림자를 금지하는 우리 규칙에서, **레이어의 겹침(Overlap)과 보더의 끊김(Interruption)**만으로 계층을 표현하는 네오-브루탈리즘 기법의 훌륭한 레퍼런스가 됩니다.

### 2.3 Expressive Components
- **Icons & Symbols**: 연필, 별, 경고창 등 다이어그램 전용 아이콘들이 매우 'Wild'하게 그려져 있습니다.
- **적용**: 소나기 전용 아이콘 세트 제작 시, 완벽한 기하학적 형태 외에도 이러한 **'Sketchy' 버전의 세트**를 함께 제공하여 문서의 목적에 따라 선택할 수 있게 합니다.

---

## 🗺️ Board Structure
- **Step 0**: Print templates (A4 Android/iPhone) 기반 스케치.
- **Step 1**: Phone photography & perspective adjustment.
- **Step 2**: Adjusting stroke widths & component styles.
- **Step 3**: Making it interactive with variants.

---

## 🏁 Cleanup Status
- **추출 완료**: 2026-06-02
- **조치 사항**: 에듀케이션 팀 이동 완료. 워크플로우 가이드로서 가치가 높으므로 아카이브 보존.

*Analyzed by Sonagi System Architect (Gemini CLI)*
