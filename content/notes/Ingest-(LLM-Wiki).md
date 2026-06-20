---
title: Ingest (LLM-Wiki)
tags: [concept, llm-wiki]
created: 2026-05-12
updated: 2026-05-12
source: 10_Sources/web/LLM-Wiki - LLM을 활용하여 개인 지식저장소 구축 하기.md
---

# Ingest (LLM-Wiki)

**Ingest**(인제스트)는 [[LLM-Wiki|LLM-Wiki]] 시스템에 새로운 소스 문서를 추가하고, 이를 분석하여 기존 위키 체계에 통합하는 작업입니다.

## 프로세스
1. **소스 추가**: 새로운 기사, 논문 등을 [[3-Tier Architecture (LLM-Wiki)|Raw Sources]] 레이어에 저장합니다.
2. **분석**: LLM이 소스 내용을 읽고 핵심 정보를 추출합니다.
3. **위키 업데이트**:
    - 해당 소스 전용 요약 페이지 작성.
    - 관련 엔티티(인물, 조직 등) 및 개념 페이지 업데이트.
    - 기존 정보와의 모순 여부 확인 및 표시.
4. **연결**: 위키 내 다른 페이지들과의 [[Wikilinks|교차 참조]] 구성.
5. **기록**: 인제스트 내역을 [[Log.md]]와 같은 로그 파일에 기록하고 [[Index.md|인덱스]]를 업데이트합니다.

## 영향 범위
단일 소스 인제스트 작업이 위키 내 **10~15개 이상의 페이지**에 영향을 줄 수 있으며, 이를 통해 지식의 파편화를 방지합니다.

관련 개념: [[LLM-Wiki|LLM-Wiki]], [[Query (LLM-Wiki)|Query (LLM-Wiki)]], [[Lint (LLM-Wiki)|Lint (LLM-Wiki)]]
