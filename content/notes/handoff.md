# 🚀 Team 7: Social Voting Platform (Handoff Document)

본 문서는 Team 7의 텀 프로젝트를 새로운 환경으로 이전하거나 부트스트랩하기 위한 핵심 가이드라인을 담고 있습니다. 이 내용은 새로운 프로젝트의 `GEMINI.md` 또는 `README.md`의 근간이 됩니다.

---

## 🎯 프로젝트 비전 및 철학
- **Agnostic Architecture**: 기술 스택에 종속되지 않는 설계를 지향합니다.
- **Contract-First**: 구현보다 명세(API, Design)를 우선하며, 이를 팀원 간의 '계약'으로 간주합니다.
- **DDD & Event Storming**: 비즈니스 로직의 복잡성을 이벤트 중심의 도메인 설계로 해결합니다.

---

## 🏗️ 핵심 엔지니어링 전략

### 1. 기술 중립적 아키텍처 (Agnostic Stack)
- 특정 프레임워크나 언어에 의존하지 않습니다.
- 담당 개발자는 `specs/` 폴더에 정의된 명세를 준수하는 한, **자신이 가장 생산성 있게 다룰 수 있는 기술 스택을 자율적으로 선택**할 수 있습니다.
- 이는 중간 보고 이후 팀원들의 역량과 선호에 따라 최적의 도구를 도입하기 위함입니다.

### 2. 계약 중심 개발 (Contract-First)
- **Single Source of Truth**: `specs/api/` 폴더의 OpenAPI(Swagger) 명세가 모든 개발의 기준입니다.
- 백엔드와 프론트엔드는 이 '계약'을 기반으로 병렬 개발을 진행하며, 인터페이스 합의가 선행되므로 통합 시 발생할 수 있는 리스크를 사전에 차단합니다.

### 3. 공통 개발(Common Core) 집중
- 프로젝트 초반에는 각자 기능을 구현하기보다 **'공통 기반 고도화'**에 전 팀원이 집중합니다.
- **API Contract**: 명확한 통신 규약 확립.
- **Design System**: 디자인 토큰을 활용한 UI Kit 정의.
- **Common Core**: 인증, 에러 핸들링, 로깅 등 공통 관심사의 단일화.

---

## 📂 권장 프로젝트 구조

```text
root/
├── specs/                  # [핵심] 프로젝트의 유일한 진실 공급원
│   ├── api/                # API Contract (OpenAPI/YAML)
│   └── design/             # Design System (Tokens, UI Specs)
├── docs/                   # 기획 및 분석 문서 (Event Storming 결과물, 보고서)
├── implementations/        # 실제 구현체 (기술 스택 자율 선택)
│   ├── server/             # Backend Implementation
│   └── client/             # Frontend Implementation
└── handoff.md              # 본 문서
```

---

## 🤝 개발 가이드라인 (팀원 자율권)
- **Backend**: REST API 규격을 준수한다면 언어 선택은 자유입니다.
- **Frontend**: 정의된 디자인 토큰을 활용한다면 프레임워크 선택은 자유입니다.
- **협업**: 모든 변경 사항은 `specs/`의 업데이트에서 시작하며, 팀 전원의 합의를 거칩니다.

---

## 📈 현재 진행 상황 요약
- **분석 및 설계**: 이벤트 스토밍 및 유저 스토리 도출 완료 (약 45% 진행).
- **보고서**: Team 7 공식 양식을 반영한 제안서 및 중간 보고서 초안 작성 완료.
- **인프라**: GitHub Organization 기반의 협업 구조 권장.
