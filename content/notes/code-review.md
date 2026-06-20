---
title: Code Review
tags: [roadmap, code-review]
created: 2026-05-11
updated: 2026-06-12
source: 10_Sources/roadmaps/code-review
---

# Code Review (코드 리뷰)

## 요약
코드 리뷰(Code Review)는 소프트웨어 개발 과정에서 다른 개발자가 작성한 코드를 점검하고 피드백을 주고받는 활동입니다. 코드 품질 향상, 버그 조기 발견, 그리고 팀원 간의 지식 공유를 목적으로 합니다. 이 로드맵은 효과적인 코드 리뷰를 위한 단계, 베스트 프랙티스, 그리고 주요 도구들에 대해 설명합니다.

---

## 🎯 코드 리뷰의 목적 (Why do we review code?)
1. **품질 보증 (Quality Assurance)**: 코딩 표준 준수, 아키텍처 일관성 유지.
2. **버그 예방 (Bug Prevention)**: 엣지 케이스 및 논리적 오류를 배포 전에 발견.
3. **지식 공유 (Knowledge Sharing)**: 도메인 지식 전파 및 주니어 개발자의 멘토링.
4. **팀 문화 구축 (Team Culture)**: 협력적인 문제 해결 및 열린 소통 장려.

---

## 🗺️ 코드 리뷰 로드맵 단계

### 1. 코드 리뷰 준비 (Preparation)
- **리뷰 요청자 (Author)**
  - 리뷰하기 쉬운 크기로 PR(Pull Request) 나누기 (보통 200~400줄 이하 권장)
  - 명확한 PR 제목과 설명(Description) 작성
  - CI/CD 파이프라인 (Lint, Test) 통과 확인
  - 셀프 리뷰(Self-Review) 진행 후 리뷰어 지정
- **리뷰어 (Reviewer)**
  - PR의 목적과 비즈니스 요구사항 이해
  - 컨텍스트 파악을 위한 관련 이슈 확인

### 2. 리뷰 진행 (During the Review)
- **코드 이해 (Understanding)**
  - 큰 그림(아키텍처, 설계 방향)부터 세부 구현으로 좁혀가며 리뷰
- **주요 체크리스트 (What to look for)**
  - **설계 (Design)**: 기존 아키텍처와 잘 어울리는가? 재사용 가능한가?
  - **기능 (Functionality)**: 요구사항을 충족하는가? 버그가 발생할 여지는 없는가?
  - **복잡도 (Complexity)**: 코드가 너무 복잡하지 않은가? (Over-engineering 방지)
  - **테스트 (Tests)**: 적절한 단위/통합 테스트가 작성되었는가?
  - **명명 규칙 (Naming)**: 변수, 함수, 클래스 이름이 직관적이고 일관된가?
  - **주석 및 문서 (Comments & Docs)**: 코드만으로 이해하기 어려운 부분에 주석이 있는가?
- **피드백 작성 (Leaving Feedback)**
  - 비판이 아닌 개선에 초점을 맞춘 건설적인 피드백 작성
  - "이건 틀렸습니다" 대신 "이 부분을 이렇게 바꾸면 어떨까요?"와 같이 제안형으로 작성

### 3. 피드백 반영 및 마무리 (Resolution)
- 리뷰 요청자는 피드백을 반영하거나 합당한 이유를 들어 토론
- 리뷰어는 수정된 코드를 재확인(Re-review)
- 최종 승인(Approve) 및 병합(Merge)

---

## 🌟 베스트 프랙티스 (Best Practices)

### 리뷰어(Reviewer)를 위한 팁
- **Nitpick(사소한 지적)은 분리하기**: 로직 오류와 단순 컨벤션 지적(nit)을 명확히 구분 (`nit: 줄바꿈이 빠졌네요`)
- **자동화 도구 활용하기**: 포매팅이나 린트(Lint) 같은 기계적인 부분은 CI 도구에 맡기고 사람의 논리가 필요한 부분에 집중
- **신속한 리뷰**: PR이 너무 오래 방치되지 않도록 팀 내 리뷰 SLA(Service Level Agreement) 설정 (예: 24시간 내 첫 리뷰)
- **칭찬하기**: 좋은 코드나 훌륭한 해결책을 발견하면 아낌없이 칭찬하기

### 리뷰 요청자(Author)를 위한 팁
- **작은 PR 유지**: PR이 커질수록 리뷰어의 피로도가 높아지고 피드백의 질이 떨어짐
- **방어적 태도 지양**: 코드는 나의 가치가 아님. 코드에 대한 피드백을 개인에 대한 비판으로 받아들이지 않기

---

## 🛠️ 주요 도구 (Tools)
- **버전 관리 플랫폼**: GitHub (Pull Requests), GitLab (Merge Requests), Bitbucket
- **코드 리뷰 전용 도구**: Gerrit, Crucible
- **정적 분석 및 자동화**: SonarQube, ESLint, Prettier, Code Climate, GitHub Actions

---

## 주요 개념 (Atomic Notes)
*작성 예정이거나 연관된 원자적 개념들입니다.*
- [[Pull Request (PR)]]
- [[CI/CD]]
- [[Linting & Formatting]]
- [[Unit Testing]]
- [[Nitpick (nit)]]

## 관련 로드맵
- [[AI Agents|AI Agents]]
- [[ai-engineer|ai-engineer]]
- [[Python|python]]
- [[JavaScript|javascript]]

## Next Steps
- [x] 코드 리뷰 로드맵 정리.
