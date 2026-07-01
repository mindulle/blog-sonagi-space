# Blog Sonagi Space - Agentic Workflow

이 스킬(SKILL)은 `blog-sonagi-space` 프로젝트에서 개발을 진행하는 모든 AI 에이전트가 반드시 준수해야 하는 행동 지침 및 배포 워크플로우를 정의합니다.

## 1. Git & GitHub 워크플로우 (엄수)

- **절대 `main` 브랜치에 직접 커밋하거나 푸시하지 마세요.**
- 이슈나 요구사항을 할당받으면 반드시 새로운 브랜치를 생성하여 작업하세요.
  - 예시: `feature/이름`, `fix/이름`, `chore/이름`
- 코딩이 완료되면 변경사항을 커밋하고 Remote 저장소에 푸시한 뒤, 반드시 **Pull Request (PR)** 를 생성하여 유저(코드 리뷰어)에게 보고하세요.

## 2. 코드 컨벤션 및 품질 보증 (QA)

- 코드를 수정하거나 추가한 뒤에는 반드시 `package.json`에 정의된 린터(`lint`)와 포매터(Prettier)를 실행하여 문제를 사전에 해결하세요. (예: `npm run lint`)
- 타입스크립트를 엄격하게 준수하며, 불가피한 경우가 아니면 `any` 타입을 지양하세요.

## 3. 디지털 정원 (Digital Garden) 아키텍처 연동 원칙

- 위키(`llm-wiki`) 관련 컴포넌트를 작업할 때는, 데이터가 존재하지 않거나 로딩에 실패할 경우를 대비하여 항상 **Fallback(방어 로직)**을 구현하세요.
- `public/note-summaries.json` 및 `public/wiki-graph.json`은 빌드 타임 혹은 외부 시스템에서 주입되는 정적 데이터이므로, 클라이언트 렌더링(CSR) 시 타이밍 이슈나 데이터 부재를 고려하여 설계해야 합니다.
