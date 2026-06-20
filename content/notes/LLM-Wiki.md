---
title: LLM-Wiki
tags: [concept, llm-wiki]
created: 2026-05-12
updated: 2026-05-12
source: 10_Sources/web/LLM-Wiki - LLM을 활용하여 개인 지식저장소 구축 하기.md
---

# LLM-Wiki

**LLM-Wiki**는 LLM(Large Language Model)이 직접 작성하고 관리하는 개인 지식 저장소 구축 아이디어입니다. Andrej Karpathy에 의해 대중화되었으며, 단순한 [[RAG|RAG]] (Retrieval-Augmented Generation) 방식과 달리 지식이 점진적으로 축적되는 [[Persistent Wiki|Persistent Wiki]]를 지향합니다.

## 역사적 배경: Memex의 구현
LLM-Wiki는 1945년 Vannevar Bush가 제안한 **Memex**의 정신적 후계자라고 볼 수 있습니다. Bush는 개인의 문서들을 능동적으로 연결하고 큐레이션하는 장치를 상상했으나, "누가 이 방대한 연결을 유지 관리할 것인가"라는 물리적 한계에 부딪혔습니다. LLM-Wiki는 이 유지 관리(Bookkeeping)를 AI가 담당함으로써 수십 년 된 아이디어를 현실로 구현합니다.

## 핵심 철학 및 특징
- **[[File-over-app|File-over-app]]**: 지식은 특정 앱이 아닌 범용 마크다운 파일로 존재해야 하며, 이는 사용자의 데이터 소유권을 보장합니다.
- **[[Explicit Knowledge (LLM-Wiki)|명시적 지식]]**: AI의 기억이 블랙박스가 아닌 눈에 보이는 위키 페이지로 존재하여 검증 가능해집니다.
- **[[Agent Proficiency|에이전트 숙련도]]**: 사용자는 설계자가 되고, AI 에이전트는 실무자가 되어 함께 지식 베이스를 키워나가는 능력이 핵심입니다.
- **복리 지식**: 시간이 지남에 따라 지식이 쌓이고 연결되어 가치가 증폭되는 [[Compounding Knowledge|Compounding Knowledge]] 구조를 가집니다.
- **북키핑 자동화**: 위키 관리의 가장 큰 장벽인 [[Bookkeeping Cost|Bookkeeping Cost]]를 LLM이 자동화하여 거의 0으로 낮춥니다.

## 아키텍처
LLM-Wiki는 보통 다음과 같은 [[3-Tier Architecture (LLM-Wiki)|3-Tier Architecture (LLM-Wiki)]]를 가집니다.
1. **Raw Sources (10_Sources)**: 가공되지 않은 원천 데이터.
2. **The Wiki (20_Wiki)**: LLM이 생성하고 소유하는 마크다운 파일.
3. **The Schema (00_System)**: 위키의 규칙과 컨벤션을 담은 설정 파일.

## 주요 작업
- [[Ingest (LLM-Wiki)|Ingest (LLM-Wiki)]]: 새 소스를 분석하고 위키에 통합.
- [[Query (LLM-Wiki)|Query (LLM-Wiki)]]: 위키 데이터를 바탕으로 답변 합성.
- [[Lint (LLM-Wiki)|Lint (LLM-Wiki)]]: 위키의 모순이나 끊긴 링크를 주기적으로 점검.
