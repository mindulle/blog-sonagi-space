---
title: Explicit Knowledge (LLM-Wiki)
tags: [concept, knowledge-management, llm-wiki]
created: 2026-05-12
updated: 2026-05-12
source: 10_Sources/web/LLM-Wiki - LLM을 활용하여 개인 지식저장소 구축 하기.md
---

# Explicit Knowledge (명시적 지식)

[[LLM-Wiki|LLM-Wiki]] 맥락에서 **Explicit Knowledge (명시적 지식)**는 AI가 학습하거나 기억하고 있는 정보가 불투명한 모델 내부(Weights)나 벡터 DB에만 머물지 않고, 사람이 읽을 수 있는 **마크다운 파일 형태로 외부에 존재**하는 상태를 말합니다.

## 명시적 지식의 장점
- **가시성(Visible)**: AI가 무엇을 알고 있는지, 어떤 정보가 누락되었거나 모순되는지 사용자가 직접 확인하고 교정할 수 있습니다.
- **통제권**: AI가 잘못된 정보를 생성했을 때, 단순히 프롬프트를 수정하는 것이 아니라 해당 위키 페이지를 직접 편집하여 지식을 바로잡을 수 있습니다.
- **자산화**: AI 모델이 바뀌거나 업그레이드되더라도, 정제된 지식 베이스는 파일 형태로 남아 영구적인 개인 자산이 됩니다.

## RAG와의 차이점
일반적인 [[RAG|RAG]] 시스템은 지식을 "검색(Retrieval)"하는 데 집중하지만, LLM-Wiki는 지식을 명시적인 위키 페이지로 "합성(Synthesis)"하고 "기록(Record)"하는 데 더 큰 가치를 둡니다. 이는 지식이 블랙박스에서 나와 사용자와 AI 사이의 공용 작업 공간(Workspace)에 안착함을 의미합니다.

## 관련 개념
- [[File-over-app|File-over-app]]
- [[Persistent Wiki|Persistent Wiki]]
- [[Knowledge Synthesis]]
- [[Compounding Knowledge|Compounding Knowledge]]
