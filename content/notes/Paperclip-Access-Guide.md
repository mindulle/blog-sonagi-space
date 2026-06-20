---
title: "Paperclip Access & Troubleshooting Guide"
date: 2026-05-28
tags: [paperclip, infrastructure, auth, troubleshooting, guide]
category: computing
description: "Paperclip 시스템 복구 및 인증 권한 획득에 대한 기술 표준 가이드"
---

# 🛠️ Paperclip Access & Troubleshooting Guide

이 문서는 Paperclip 시스템의 인증 장벽을 해결하고, 인스턴스 전체 관리 권한을 획득하는 표준 절차를 기록합니다. 향후 인증 만료나 시스템 재구축 시 이 가이드를 최우선으로 참조하십시오.

---

## 1. 인프라 접속 정보 (SSH)

- **호스트**: `llmops-instance.tailb95307.ts.net` (Tailscale 환경)
- **사용자**: `ubuntu`
- **인증 키**: `/home/mindulle/.ssh/oracle_sonagi`
- **DB (Embedded Postgres)**:
  - Port: `54329`
  - User/Pass/DB: `paperclip` / `paperclip` / `paperclip`
  - 프로젝트 경로: `/home/ubuntu/paperclip`

---

## 2. 인증 규격 (Critical)

가장 빈번한 `401 Unauthorized` 및 `403 Forbidden` 에러의 원인은 **해싱 방식의 불일치**와 **헤더 형식**에 있습니다.

### 2.1 해싱 알고리즘 이원화
Paperclip은 용도에 따라 서로 다른 두 가지 해싱 규격을 사용합니다.

| 구분 | 대상 테이블 | 해싱 알고리즘 | 인코딩 방식 |
| :--- | :--- | :--- | :--- |
| **이사회 키 (Board)** | `board_api_keys` | `SHA-256` | **Hex (16진수)** |
| **에이전트 키 (Agent)** | `agent_api_keys` | `SHA-256` | **Base64Url (No Padding)** |

> ⚠️ **주의**: `X-API-KEY` 헤더는 작동하지 않을 수 있습니다. 반드시 **`Authorization: Bearer <TOKEN>`** 형식을 사용하십시오.

### 2.2 필수 권한 레이어
API 키를 생성하는 것만으로는 부족하며, 다음 두 가지 테이블의 레코드가 유저 ID와 연결되어야 합니다.
1.  **`instance_user_roles`**: 유저에게 `instance_admin` 역할이 부여되어야 모든 컴퍼니 정보를 조회할 수 있습니다.
2.  **`company_memberships`**: 특정 컴퍼니를 조작하려면 `principal_type='user'` 및 `principal_id`가 정확히 매핑된 `admin` 또는 `owner` 권한이 필요합니다.

---

## 3. 비밀번호 관리 (Bitwarden)

에이전트는 로컬 `.env`에 비밀번호를 노출하지 않고 Bitwarden CLI(`bw`)를 통해 시크릿을 호출합니다.

- **금고 아이템**: `Sonagi Infrastructure (Paperclip)`
- **저장 내용**: 마스터 API 키, Company ID, 권장 헤더 형식.
- **잠금 해제**: `bw unlock` 명령 실행 후 `Tab` 키로 포커스하여 마스터 비밀번호 입력 -> 세션 키 확보.

---

## 4. 긴급 복구용 코드 (Node.js)

시스템 라이브러리 경로 이슈 발생 시, 프로젝트의 npm 캐시 경로를 직접 참조하여 실행하십시오.
```javascript
// /home/ubuntu/paperclip/inject-key.cjs
const postgres = require('/home/ubuntu/.npm/_npx/43414d9b790239bb/node_modules/postgres');
const sql = postgres('postgres://paperclip:paperclip@localhost:54329/paperclip');
// ... 쿼리 실행 ...
```

---
*Last Updated: 2026-05-28 by Gemini CLI (Orchestrator)*
