---
title: Query (LLM-Wiki)
tags: [concept, llm-wiki]
created: 2026-05-12
updated: 2026-05-12
source: 10_Sources/web/LLM-Wiki - LLM을 활용하여 개인 지식저장소 구축 하기.md
---

# Query (LLM-Wiki)

**Query**(쿼리)는 [[LLM-Wiki|LLM-Wiki]] 내에 구축된 지식을 대상으로 질문하고 답변을 얻는 과정입니다.

## 특징
- **인덱스 활용**: LLM은 답변을 생성하기 전 `index.md`나 관련 페이지들을 먼저 탐색하여 맥락을 파악합니다.
- **다양한 출력**: 단순 텍스트 답변뿐만 아니라 마크다운 페이지, 비교 표, 슬라이드(Marp), 차트(Mermaid 등)의 형태로 결과를 제공할 수 있습니다.
- **재귀적 저장**: 좋은 쿼리 결과나 새롭게 합성된 통찰은 다시 위키의 새 페이지로 저장될 수 있습니다. 이를 통해 탐색 행위 자체가 다시 지식으로 쌓입니다.

## 이점
이미 잘 정리된 [[Persistent Wiki|Persistent Wiki]]를 기반으로 쿼리하므로, 원문에서 매번 정보를 찾아야 하는 일반적인 [[RAG|RAG]] 시스템보다 답변의 정확도와 깊이가 뛰어납니다.

관련 개념: [[LLM-Wiki|LLM-Wiki]], [[Ingest (LLM-Wiki)|Ingest (LLM-Wiki)]], [[Lint (LLM-Wiki)|Lint (LLM-Wiki)]]
