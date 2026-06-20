---
title: 🌦️ Sonagi Design System v3.0 Roadmap
status: active
priority: high
tags: [project, design-system, roadmap, v3.0]
created: 2026-06-01
updated: 2026-06-01
---

# 🌦️ Sonagi Design System v3.0: Wild & Thin Migration

이 문서는 소나기 디자인 시스템의 v3.0 마이그레이션을 위한 마스터 로드맵입니다. **인간(Trello)**과 **에이전트(Paperclip)**의 협업을 통해 시스템을 완성합니다.

---

## 1. 역할 분담 (The Collaboration Model)

### 👤 Human (Trello: Tactical Execution)
- **Figma Canvas Editing**: 레이어 수정, 폰트 적용, 그림자 제거 등 직접적인 디자인 작업.
- **Strategic Decisions**: 컴포넌트의 시각적 완성도 승인 및 아키텍처 방향 결정.

### 🤖 Agent (Paperclip: Automation & Knowledge)
- **Design Auditing (Figma MCP)**: 피그마 파일을 스캔하여 v3.0 규격(No-Shadow, 2px Border) 위반 사례 탐지.
- **Documentation (Wiki/NotebookLM)**: 컴포넌트 명세 작성 및 지식 합성.
- **Sync & Alert (n8n)**: 위키-트렐로 간 태스크 동기화 및 인프라 알림.
- **Prototyping (React)**: 디자인 토큰을 기반으로 한 리액트 컴포넌트 라이브러리 초안 생성.

---

## 2. 핵심 태스크 리스트

### Phase 1: Foundation & Specs (Completed ✅)
- [x] **[Agent]** `Sonagi-Header`, `ToC`, `Card`, `Input`, `Badge` 문서화 완료.
- [x] **[Agent]** `packages/react` 아키텍처 설계 및 핵심 컴포넌트(`Button`, `Input`, `Badge`) 초안 작성 완료.
- [ ] **[Human]** Figma Foundation 페이지 v3.0 마이그레이션 (작업 대기 중 - Trello 연동됨).
- [x] **[Agent]** `Design MOC` 및 v3.0 인덱스 재구성 완료.

### Phase 2: Auditing & Refinement (To Do 📥)
- [ ] **[Agent]** **Figma Audit Workflow** 가동: `Foundation` 페이지 검수 및 리포트 생성.
- [x] **[Human+Agent]** 핵심 자산(Logo, Primary Icons) v3.0 규격 적용 (SCAD - [ ] **[Human]** 핵심 자산(Logo, Primary Icons) v3.0 규격 적용. Purifier 파이프라인으로 완벽 구축 완료).
- [ ] **[Agent]** NotebookLM을 활용한 'Sonagi Design Guide' 오디오 개요 생성.

### Phase 3: Implementation (Pending ⏳)
- [ ] **[Agent]** `packages/react` 내 v3.0 호환 컴포넌트 코드 구현.
- [ ] **[Human]** 라이브 프로토타입 검수 및 최종 승인.

---

## 3. Paperclip 연동 (Automation Hooks)
- **Trello Sync**: `00_System/scripts/sync_infra_to_trello.py`를 활용한 태스크 승격.
- **Figma Scan**: `mcp_figma_get_metadata`를 통한 실시간 규격 검수.
- **Knowledge Synthesis**: `ask_question` (NotebookLM)을 통한 디자인 의사결정 지원.

---
*Created and Maintained by Sonagi System Architect (Gemini CLI via Paperclip).*
