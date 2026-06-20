---
title: Automation Routine & Schedule
category: Computing
visibility: private
tags: [automation, ansible, semaphore, cron, schedule, troubleshooting]
last_modified: 2026-06-09
---

# Infrastructure Automation Routine

이 문서는 에이전트의 개입 없이 시스템이 스스로 건강을 유지하기 위해 수행하는 자동화 일정과 트러블슈팅 가이드를 기록합니다.

## ⏰ Daily Automation Schedule (Ansible Semaphore)

모든 작업은 `iac-hub` 노드에서 구동되는 **Ansible Semaphore**에 의해 제어됩니다.

| 시간 (KST) | 작업명 | 설명 | 비고 |
| :--- | :--- | :--- | :--- |
| **02:00** | **Security Patch** | `apt update & upgrade`를 통해 보안 취약점 패치 | Template ID 5 |
| **03:00** | **Backup Services** | 서비스 설정 및 DB, 지식 저장소 스냅샷 생성 | Template ID 3 |
| **03:00** | **Full Maintenance** | 디스크 정리, 로그 로테이션, 시스템 최적화 | Template ID 12 |
| **04:00** | **Log Rotation** | 오래된 Docker 및 시스템 로그 아카이빙 | Template ID 4 |
| **매 시간** | **Health Check** | 전체 서버 서비스 가용성 점검 및 Discord 보고 | n8n 연동 |

## 🛠️ Infrastructure Troubleshooting

### 1. Git Clone Error (Exit Status 128/129)
**현상**: Semaphore에서 리포지토리를 가져올 때 `fatal: bad boolean environment value '0\n'` 혹은 인증 에러 발생.
**원인**: 내부 환경 변수 오염 또는 비대화형 환경에서의 GitHub 인증 프롬프트 차단.
**해결책**:
- **래퍼 스크립트**: `/usr/local/bin/git`에 환경 변수를 강제 주입하는 래퍼 설치.
- **Git Config**: Semaphore 홈 디렉토리(`~semaphore/.gitconfig`)에 `credential.helper` 설정.
  ```bash
  [credential "https://github.com"]
      helper = !f() { echo username=mindulle; echo password=$GITHUB_TOKEN; }; f
  ```

### 2. Node Exporter Not Found (Prometheus DOWN)
**현상**: 그라파나/프로메테우스에서 특정 노드가 `DOWN`으로 표시됨.
**해결책**:
- **상시 서버**: `Deploy Node Exporters` 템플릿(ID 13) 재실행.
- **gp66 (WSL)**: 윈도우 호스트에서 포트 포워딩 상태 확인 (상세 내용은 [[Infrastructure#mindulle-gp66 (100.81.26.66)|Infrastructure Map]] 참조).

## 🚨 Notification Hub
- **장애 알림**: Discord `#🚨┆system-alerts`
- **작업 리포트**: Discord `#🏠┆internal-notifications`
- **오류 처리기**: n8n Global Error Handler (`i2JKJpVqYYXbnlkd`)
