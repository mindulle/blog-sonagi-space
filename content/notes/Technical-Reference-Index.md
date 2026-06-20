---
title: 클라우드 기술 참조 (Azure-Only)
tags: [cloud, infrastructure, azure, paas, database, project-reference]
created: 2026-05-19
updated: 2026-05-30
---

# 📚 클라우드 기술 참조 (Azure Edition)

이 문서는 **Azure 기반** 텀프로젝트 구현을 위한 핵심 기술 인덱스입니다.

## 1. 컴퓨팅 (Computing)
- **Azure App Service**: 백엔드 REST API 배포를 위한 관리형 PaaS.
- **Azure Static Web Apps**: 프론트엔드(React/Vue) 정적 호스팅 및 API 연동.
- **Azure Functions**: 이벤트 기반 서버리스 로직 처리 (필요시).

## 2. 데이터베이스 (Database)
- **Azure SQL Database**: 핵심 투표 및 사용자 데이터 저장.
- **Azure Cosmos DB**: 유연한 데이터 구조가 필요한 경우 고려.

## 3. 인증 및 통합 (Identity & Integration)
- **Kakao Login SDK**: 사용자 식별 및 OAuth 연동.
- **Azure Key Vault**: API 키 및 연결 문자열 보안 관리.

## 4. DevOps
- **GitHub Actions**: Azure App Service로의 자동 배포 워크플로우.
- **Application Insights**: 서비스 모니터링 및 로그 분석.
- **가용성**: 다중 리전/가용 영역 배치를 통한 무중단 서비스 설계.

*Last Updated: 2026-05-19 (Antigravity CLI)*
