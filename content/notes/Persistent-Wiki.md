---
title: Persistent Wiki
tags: [concept, llm-wiki]
created: 2026-05-12
updated: 2026-05-12
source: 10_Sources/web/LLM-Wiki - LLM을 활용하여 개인 지식저장소 구축 하기.md
---

# Persistent Wiki

**Persistent Wiki**(영속적 위키)는 쿼리 시마다 원문에서 정보를 새로 추출하는 [[RAG|RAG]] 방식과 대조되는 개념으로, LLM이 정보를 읽고 기존 지식 체계에 점진적으로 통합하여 축적하는 방식의 지식 베이스입니다.

## 특징
- **지식의 누적**: 매번 소스를 새로 읽는 대신, 기존 위키 페이지를 업데이트하거나 새 페이지를 생성하며 지식을 쌓아갑니다.
- **교차 참조**: 정보 간의 연결([[Wikilinks]])이 이미 구성되어 있어, 탐색과 발견이 용이합니다.
- **모순 관리**: 새로운 정보가 기존 정보와 충돌할 경우 이를 표시하고 합성을 강화합니다.
- **합성 반영**: 단순 요약을 넘어, 여러 소스에서 얻은 지식을 종합(Synthesis)한 결과물이 유지됩니다.

## 대조: Persistent Wiki vs. Standard RAG
- **Standard RAG**: 파일 컬렉션에서 관련 청크를 검색하여 답변을 생성. 지식의 누적이 없으며 매번 새로 추출함.
- **Persistent Wiki**: LLM이 소유하고 관리하는 마크다운 디렉터리. 지식이 [[Compounding Knowledge|복리]]로 축적됨.

관련 개념: [[LLM-Wiki|LLM-Wiki]], [[Compounding Knowledge|Compounding Knowledge]]
