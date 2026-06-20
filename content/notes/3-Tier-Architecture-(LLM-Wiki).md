---
title: 3-Tier Architecture (LLM-Wiki)
tags: [concept, llm-wiki]
created: 2026-05-12
updated: 2026-05-12
source: 10_Sources/web/LLM-Wiki - LLM을 활용하여 개인 지식저장소 구축 하기.md
---

# 3-Tier Architecture (LLM-Wiki)

[[LLM-Wiki|LLM-Wiki]]를 구축할 때 권장되는 세 가지 계층 구조입니다. 지식의 불변성, 생성된 지식의 유연성, 그리고 관리 규칙을 분리하여 효율적인 시스템을 만듭니다.

## 1. 원문 소스 (Raw Sources - 10_Sources)
- **역할**: 큐레이션된 소스 문서 컬렉션 (기사, 논문, 이미지 등).
- **특징**: **변경 불가(Immutable)**. LLM은 이 데이터를 읽기만 하며 절대 수정하지 않습니다.
- **의의**: 이 레이어가 시스템의 **진실의 원천(Source of Truth)**이 됩니다.

## 2. 위키 (The Wiki - 20_Wiki)
- **역할**: LLM이 생성하고 소유하는 마크다운 파일 디렉터리.
- **내용**: 요약, 엔티티 페이지, 개념 페이지, 비교 표, 개요 등.
- **특징**: LLM이 완전히 제어하며, 페이지 생성, 업데이트, 교차 참조 유지를 담당합니다. 사용자는 주로 읽기 전용으로 활용합니다.

## 3. 스키마 (The Schema - 00_System)
- **역할**: LLM에게 위키의 구조, 컨벤션, 워크플로를 알려주는 설정 및 가이드라인.
- **내용**: 템플릿, 에이전트 가이드(`AGENTS.md`), 인덱스 규칙 등.
- **의의**: 일반 챗봇인 LLM을 체계적인 **위키 관리자**로 변모시키는 핵심 레이어입니다.

관련 개념: [[LLM-Wiki|LLM-Wiki]], [[Persistent Wiki|Persistent Wiki]]
