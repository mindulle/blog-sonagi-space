---
title: File-over-app
tags: [concept, philosophy, llm-wiki]
created: 2026-05-12
updated: 2026-05-12
source: 10_Sources/web/LLM-Wiki - LLM을 활용하여 개인 지식저장소 구축 하기.md
---

# File-over-app

**File-over-app**은 지식 데이터가 특정 애플리케이션이나 서비스의 전용 포맷이 아닌, 마크다운(Markdown)이나 이미지 같은 **범용 포맷의 파일 모음**으로 존재해야 한다는 철학입니다.

## 핵심 가치
- **데이터 소유권(Yours)**: 데이터가 특정 AI 제공업체의 클라우드 시스템이 아닌 로컬 컴퓨터에 저장되어 사용자가 완전한 통제권을 가집니다.
- **호환성**: 범용 파일 포맷은 수많은 CLI 도구, Unix 툴킷, 그리고 다양한 [[LLM]] 에이전트와 즉시 호환됩니다.
- **지속성**: 특정 앱이 서비스를 종료하더라도 데이터는 파일 형태로 영구히 남으며, 다른 뷰어(예: [[Obsidian]])로 언제든 열어볼 수 있습니다.

## LLM-Wiki에서의 의미
[[LLM-Wiki|LLM-Wiki]] 시스템에서 이 철학은 특히 중요합니다. 에이전트가 파일 시스템을 직접 탐색하고 Unix 명령어를 사용하여 지식을 처리할 수 있게 함으로써, 폐쇄적인 API 기반의 [[RAG|RAG]] 시스템보다 훨씬 유연하고 강력한 지식 관리가 가능해집니다.

## 관련 개념
- [[Data Ownership]]
- [[Markdown|Markdown]]
- [[Unix Philosophy]]
- [[BYOAI (Bring Your Own AI)]]
