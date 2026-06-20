---
title: "Reference Study: Tasker – Task Management Apps UI Kits"
date: 2026-06-02
tags: [reference, figma, task-management, mobile-app, ui-kit]
category: design
description: "방대한 화면 구성을 가진 태스크 관리 앱 전용 UI 킷(YC3cmmAk1LZDeWFpwG7v5n) 분석"
---

# 📚 Study: Tasker – Task Management Apps UI Kits

이 문서는 할 일 관리 및 프로젝트 트래킹에 최적화된 **Tasker UI Kit**을 분석한 리포트입니다. 소나기(Sonagi) 프로젝트의 Trello 연동 기능 및 내장 태스크 매니저의 사용자 경험을 고도화하기 위한 레퍼런스로 작성되었습니다.

---

## 1. 🖼️ Visual Context
![Tasker UI Kit Overview](https://www.figma.com/api/mcp/asset/2eff9d98-c48b-46a1-89aa-456b76624d53)

이 킷은 110개 이상의 화면을 통해 태스크의 생성부터 완료, 리뷰까지의 전체 라이프사이클을 시각화합니다.

---

## 2. 💡 Key Insights for Sonagi v3.0

### 2.1 Structured Task Backlog
- **분석**: `Task - Backlog` 화면에서 우선순위, 담당자, 마감 기한 등을 좁은 모바일 화면에서도 효율적으로 배치하는 그리드 전략을 보여줍니다.
- **소나기 v3.0 적용**: 소나기의 'Wild'한 2px 보더 카드 내부에 이러한 **다차원적 정보(Metadata)**를 질서 있게 배치하는 'Thin'한 레이아웃 규칙을 적용합니다.

### 2.2 Visualizing Progress & Schedules
- **Schedule UI**: 캘린더 뷰와 타임라인 뷰를 오가는 인터렉션 모델이 매우 직관적입니다.
- **적용**: 위키 문서의 '마지막 수정일'이나 '복리적 지식 축적 그래프'를 시각화할 때, Tasker의 **타임라인 인디케이터** 디자인을 참고합니다.

### 2.3 Onboarding & Project Creation
- **분석**: 복잡한 설정을 단계별로 나누어 사용자 피로도를 낮추는 `Project - Create` 워크플로우가 돋보입니다.
- **적용**: 새로운 위키 테마를 설정하거나 외부 소스(Notion, Trello)를 처음 연동할 때, 이 킷의 **단계별 마법사(Step Wizard) UI**를 소나기 스타일에 맞춰 도입합니다.

---

## 🏁 Cleanup Status
- **추출 완료**: 2026-06-02
- **조치 사항**: 에듀케이션 팀 이동 완료. 태스크 관리 UI의 방대한 사례를 담고 있으므로 아카이브 보존 권장.

*Analyzed by Sonagi System Architect (Gemini CLI)*
