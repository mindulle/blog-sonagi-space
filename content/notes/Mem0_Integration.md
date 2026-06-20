---
title: Mem0 Integration & Access Control
tags: [mem0, architecture, security, memory, agent-system]
---

# Mem0 Integration & Access Control Guide

llm-wiki 시스템은 에이전트들의 집단 지성과 장기 기억을 관리하기 위해 **Mem0 (중앙 집중형 벡터/기억 저장소)**를 활용합니다. 여러 에이전트가 단일 DB를 공유하므로, 지식의 오염을 막기 위한 엄격한 권한(Namespace) 관리가 필수적입니다.

## 1. Namespace (`user_id`) 분류 규칙

Mem0 API 호출 시 데이터를 읽고 쓰는 권한은 `user_id` 메타데이터를 통해 격리됩니다. 모든 에이전트는 다음 규칙을 준수하여 메모리를 생성하고 검색해야 합니다.

### 🌐 System Global (`user_id: system_global`)
- **용도**: 프로젝트 인프라, 코딩 컨벤션, Paperclip 규정 등 **모든 에이전트가 공통으로 알아야 하는 절대적인 진리(Ground Truth)**.
- **권한**: 
  - **Read**: 모든 에이전트가 RAG 검색 시 항상 포함해야 하는 전역 컨텍스트.
  - **Write**: CTO(누리) 또는 시스템 관리 스크립트(`ingest_core_knowledge.py` 등)만 업데이트 권한을 가짐. (일반 에이전트는 쓰기 금지)

### 🤖 Agent Persona (`user_id: {agent_name}`)
- **예시**: `nuri`, `jenny`, `money`, `maru`
- **용도**: 각 에이전트의 페르소나, 역할 정의, 특화된 기술 지식, 과거 작업(Paperclip Issue) 기록 및 개인적인 경험(Episodic Memory).
- **권한**:
  - **Read/Write**: 해당 에이전트 본인만 자유롭게 접근 가능.
  - 타 에이전트의 메모리 공간은 명시적인 협업이 필요한 경우를 제외하고 침범하지 않음.

### 📁 Project / Goal Context (`user_id: project_{project_id}`)
- **용도**: 특정 Paperclip Project나 Goal에 종속된 임시 지식 또는 문서.
- **권한**: 해당 프로젝트에 할당된 에이전트 그룹만 공유. 프로젝트 종료 후 아카이브 처리.

## 2. 권장 검색(Retrieval) 전략
에이전트가 특정 작업을 수행할 때 컨텍스트를 구성하는 올바른 순서는 다음과 같습니다:

1. **Self-Awareness**: 자신의 `user_id`를 조회하여 역할과 최신 기억을 불러옵니다.
2. **System Rules**: `system_global`을 함께 조회하여 위반하면 안 되는 시스템 룰을 가져옵니다.
3. **Task Context**: Paperclip 이슈의 설명 및 댓글 내역을 결합합니다.

## 3. 유지보수 및 백업
Mem0의 실제 데이터는 `llmops-instance (100.91.9.83)`의 Postgres 데이터베이스(`mem0-dev-postgres-1`, 포트 8432)에 저장됩니다. 
- 이 데이터베이스의 백업은 시스템 정기 백업 파이프라인에 포함되어야 하며, 장애 시 마크다운 원본(`20_Wiki`)을 바탕으로 재인덱싱할 수 있도록 인덱싱 스크립트(`sync_personas_to_mem0.py` 등)를 유지보수해야 합니다.
