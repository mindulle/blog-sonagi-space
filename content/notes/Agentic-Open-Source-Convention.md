---
tags: [agentic, open-source, architecture, llm, convention]
---

# Agentic Open Source Convention

과거의 오픈 소스 생태계가 '인간 개발자'들이 어떻게 협업할 것인가에 초점을 맞추었다면, 앞으로의 오픈 소스는 **"저장소에 접근하는 외부 AI 에이전트를 어떻게 통제하고 컨벤션을 강제할 것인가"**가 핵심이 됩니다.

`Agentic Open Source`는 누구나 포크(Fork)해서 AI 도구(Cursor, Windsurf, OpenCode 등)로 코딩할 때, 해당 저장소만의 고유한 룰(PR 강제, 아키텍처 제약)을 AI가 자동으로 인식하고 따르도록 설계하는 철학이자 방법론입니다.

---

## 🤖 1. 에이전트 통제 모듈의 내재화

기존 인간을 위한 `CONTRIBUTING.md` 외에도, AI 에이전트가 파싱하고 복종할 수 있는 시스템 프롬프트(Skill)를 저장소 내부에 내장해야 합니다.

- **구현체 예시**: `.opencode/skill/SKILL.md`, `.cursorrules`, `CLAUDE.md` 등
- **통제 내용**:
  - `main` 브랜치 직접 푸시 금지 (반드시 PR을 통할 것)
  - 특정 라이브러리 사용 금지 (예: "React 대신 Vanilla JS만 사용할 것")
  - 작업 전 테스트 코드(TDD) 강제

---

## 🧠 2. 에이전트 코딩 4대 원칙 (Andrej Karpathy)

전 OpenAI 디렉터 Andrej Karpathy가 제시한 'LLM 코딩 에이전트 통제 가이드라인'은 Agentic Open Source가 추구해야 할 에이전트의 이상적인 행동 강령입니다. 저장소의 `SKILL.md`에 베이스라인으로 탑재해야 합니다.

### Principle 1: Think Before Coding (코드 작성 전 고민하라)

- **규칙**: 임의로 가정하지 말고, 헷갈리면 숨기지 말고 질문하라. 트레이드오프(Trade-offs)를 명시하라.
- **이유**: LLM은 모르는 것도 침묵하고 임의로 선택해서 코드를 짜버리는 경향이 있습니다. 모호함이 있다면 멈추고 사용자에게 명확한 방향을 물어보도록 강제해야 합니다.

### Principle 2: Simplicity First (단순함 최우선)

- **규칙**: 문제를 해결하는 최소한의 코드만 작성하라. 요구하지 않은 추측성 기능(Speculative features)을 넣지 마라.
- **이유**: LLM은 종종 50줄로 끝날 코드를 1,000줄짜리 거창한 추상화(Over-engineering)로 부풀리는 경향이 있습니다. 시니어 엔지니어가 보기에 지나치게 복잡하다면 다시 단순화해야 합니다.

### Principle 3: Surgical Changes (수술하듯 정밀한 변경)

- **규칙**: 건드려야 할 곳만 건드려라. 자신이 어지른 것만 치워라.
- **이유**: 에이전트는 코드를 수정하다가 자신이 잘 모르는 인접한 주석이나 멀쩡한 코드까지 '개선'이랍시고 건드리는(Orthogonal edits) 부작용을 낳습니다. 철저히 사용자가 요청한 범위 내에서만 정밀 타격(Surgical)하도록 제한해야 합니다.

### Principle 4: Goal-Driven Execution (목표 주도형 실행)

- **규칙**: 명령(Imperative)을 내리지 말고, 검증 가능한 성공 기준(Success criteria)을 주어라.
- **이유**: "이 버그를 고쳐"라고 모호하게 명령하면 끝없는 수정 루프에 빠집니다. 대신 **"이 버그를 재현하는 테스트 코드를 작성하고, 그 테스트를 통과시켜라"**라고 지시해야 합니다. 명확한 목표(Goal)와 검증 수단(Test)이 주어질 때 에이전트는 독립적으로 루프를 돌며 임무를 완수합니다.

---

## 🚀 3. 실전 적용 워크플로우 (sonagi-anvil 사례)

이 철학은 `sonagi-anvil` 프로젝트에 아래와 같이 적용되었습니다.

1. **AI 훈련 파이프라인**:
   알고리즘(DSA) 문제를 풀 때, 에이전트에게 단순히 정답을 요구하지 않습니다.
2. **`SKILL.md` 룰 강제**:
   - 에이전트는 `dsa_training/` 폴더 내에 로직과 `pytest` 파일을 분리해서 작성합니다. (**Principle 4: Goal-Driven Execution**)
   - 로컬에서 `pytest`가 통과(PASS)해야만 GitHub PR을 생성할 수 있습니다.
   - `main` 브랜치에 직접 커밋하는 치명적인 실수를 방지합니다.
