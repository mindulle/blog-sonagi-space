---
title: n8n Webhook Integration Guide
tags: [automation, n8n, webhook, api]
---

# n8n Webhook Integration Guide

이 문서는 에이전트(주로 CTO 누리)가 n8n 기반의 자동화 워크플로우를 유발(Trigger)하기 위해 호출할 수 있는 Webhook 엔드포인트 명세입니다.

## 1. 개요
n8n은 `n8n-instance (100.113.113.72)` 노드에서 실행되며, 이메일 알림, Discord 메시지 전송, Supabase 검색 등의 반복 작업을 처리합니다.

## 2. 사용 가능한 Webhooks

### 2.1 Snippet Search Webhook
- **Workflow**: `[Bot] Spells Snippet Webhook` (ID: XpeYlYfcmSDAboCe)
- **Method**: `POST`
- **URL Path**: `https://n8n.sonagi.space/webhook/discord-snippet`
- **Payload**:
  ```json
  {
    "query": "검색어",
    "language": "python" // Optional
  }
  ```
- **Description**: Supabase 데이터베이스에서 특정 언어나 키워드로 코드 스니펫을 검색하여 결과를 반환합니다.

### 2.2 Unified Gmail Connector
- **Workflow**: `[Admin] Unified Gmail Multi-Account Connector` (ID: qS4vibBbz2nJsJnK)
- **Method**: `GET`
- **URL Path**: `https://n8n.sonagi.space/webhook/gmail-connector`
- **Params**:
  - `account`: `sonagi` | `mindulle` | `hoofoo`
  - `action`: `messages` | `labels`
  - `q`: 검색 쿼리 (Optional)
- **Description**: 지정된 계정의 최근 이메일 메시지나 라벨 목록을 반환합니다.

## 3. 에이전트 연동 (누리의 역할)
누리(Nuri)는 배포 파이프라인에서 문제가 발생하거나 코드 스니펫 검색이 필요할 때 위 Webhook들을 비동기 코딩 에이전트를 통해 호출할 수 있습니다. 
예를 들어, 빌드 실패 로그를 분석하기 위해 스니펫 데이터베이스를 조회(`discord-snippet`)하여 유사한 에러 처리 방식을 가져올 수 있습니다.
