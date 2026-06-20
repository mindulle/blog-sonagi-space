---
title: "Sonagi Design System: CI/CD & Observability Architecture"
date: 2026-06-13
tags: [design-system, cicd, devops, argocd, sentry, gitops, monitoring]
category: design
description: "소나기 디자인 시스템의 자동화 배포 파이프라인(GitOps) 및 Sentry 기반 에러 모니터링 아키텍처 명세"
---

# 🏗️ 디자인 시스템 CI/CD 및 모니터링 아키텍처

본 문서는 Krita와 Inkscape에서 생성된 **플랫 벡터(Flat Vector)** 에셋과 디자인 토큰(JSON)이, 실무 개발 환경으로 매끄럽게 전달되고 안전하게 구동되도록 보장하는 **DevOps 및 관측성(Observability) 파이프라인**을 정의합니다.

---

## 🚀 1. 전체 아키텍처 흐름 (The Pipeline)

디자이너/개발자가 원본 에셋(SVG)이나 토큰(JSON)을 Git 저장소에 Push하는 순간부터, 최종 배포까지 4단계의 무인 자동화(Zero-touch) 프로세스가 진행됩니다.

### Phase 1: 검증 및 코드 변환 (Continuous Integration)
*   **Linting**: SVG 파일 내부에 금지된 속성(그라데이션, 그림자 등)이 포함되어 있는지, JSON 토큰의 문법이 정확한지 자동 검사합니다.
*   **Token Transformation**: `Style Dictionary`를 사용하여 단일 `design-tokens.json` 파일을 다음 세 가지 코드로 자동 변환합니다.
    *   `variables.css` (CSS Custom Properties)
    *   `tailwind.config.js` (Tailwind 프리셋)
    *   `theme.d.ts` (TypeScript 인터페이스)
*   **Asset Transformation**: `SVGO`로 벡터 패스의 찌꺼기를 최적화하고 압축한 뒤, `SVGR`을 통해 즉시 import 가능한 React 컴포넌트(`ex: <IconNuri />`)로 트랜스파일링합니다.

### Phase 2: 패키지 배포 (NPM Publishing)
*   변환된 컴포넌트와 스타일시트를 묶어 `@sonagi/design-system` 패키지로 빌드합니다.
*   Semantic Release를 통해 버전(예: `v1.2.0`)을 자동 채번하고 사내/공개 NPM Registry에 퍼블리싱합니다.

---

## 🐙 2. GitOps 기반 문서 배포 (ArgoCD)

디자인 시스템의 컴포넌트들을 눈으로 직접 확인하고 테스트할 수 있는 **Storybook (문서화 갤러리)** 환경은 ArgoCD를 통한 Kubernetes 배포 전략을 따릅니다.

1.  **Containerize**: CI 파이프라인 마지막 단계에서 Storybook을 정적 빌드(Static Build)한 후, 가벼운 Nginx 기반의 Docker 이미지로 빌드하여 컨테이너 레지스트리에 Push합니다.
2.  **Manifest Update**: CI가 쿠버네티스 배포용 Manifest 저장소(Git)의 이미지 태그 버전을 새로 빌드된 버전으로 업데이트합니다.
3.  **ArgoCD Sync**: Kubernetes 클러스터 내부의 ArgoCD가 Manifest 저장소의 변경 사항(Drift)을 감지하고, **즉각적으로 Storybook Pod를 무중단 롤링 업데이트(Sync)** 합니다.
4.  **효과**: 보안성이 높고, 에러 발생 시 ArgoCD 대시보드에서 이전 버전의 문서로 1초 만에 롤백이 가능합니다.

---

## 👁️ 3. 장애 방지 및 관측성 (Sentry)

디자인 시스템은 수많은 하위 어플리케이션(Consuming Apps)의 뼈대가 되므로, 컴포넌트 오류가 전체 서비스 장애로 번지지 않도록 방어막과 모니터링 체계를 구축합니다.

### 3.1 컴포넌트 내장형 Error Boundary (Graceful Degradation)
*   복잡한 UI 컴포넌트(모달, 데이터 테이블, 데이트 피커 등)의 최상단에는 자체 Error Boundary 처리를 강제합니다.
*   예상치 못한 데이터 프롭스(Props)가 주입되어 컴포넌트 내부 렌더링이 터지더라도 화면 전체가 "White Screen of Death"가 되는 것을 막고, 안전한 Fallback UI(예: 렌더링 실패 안내 컴포넌트)를 표출합니다.

### 3.2 Sentry 컨텍스트 표준화 (Contextual Logging)
*   단순히 에러 텍스트만 던지는 것이 아니라, 문제를 즉각 재현할 수 있는 풍부한 메타데이터를 포함시킵니다.
*   컴포넌트에서 에러 발생 시, Sentry의 `tags`와 `extra` 영역에 아래 정보를 강제로 담아 상위 앱의 Sentry 로거로 전달합니다.
    *   **Component Name**: 에러가 발생한 컴포넌트 이름 (예: `Button`)
    *   **Passed Props**: 주입되었던 프롭스 상태 (예: `variant="primary", size="large"`)
    *   **Token Version**: 현재 사용 중인 디자인 시스템 패키지 버전

### 3.3 Storybook 자체 모니터링
*   ArgoCD로 배포된 Storybook 앱 환경 내부에도 Sentry SDK를 초기화합니다.
*   디자이너나 기획자가 가이드를 열람하던 중 UI가 깨지거나 인터랙션 버그가 발생하면, 즉각적으로 이슈 트래킹 채널(Slack/Trello)로 에러가 수집되어 개발팀에 보고됩니다.

---
> **연결 문서**: [[Design-Toolchain]], [[Foundation-Tokens]], [[Computing/Concepts/CICD_v2]], [[Computing/kubernetes]]
