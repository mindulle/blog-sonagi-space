---
title: Paperclip Approvals
tags: [paperclip, security, human-in-the-loop]
---

# Paperclip Approvals

**Approvals**는 에이전트가 민감한 작업을 수행하기 전 인간(Board)의 허가를 받는 프로세스입니다.

- **트리거**: 비용이 많이 발생하는 API 호출, 파일 시스템 대량 수정, 아키텍처 변경 시 발생합니다.
- **상태**: `pending` -> `approved` / `rejected` / `revision_requested`.
