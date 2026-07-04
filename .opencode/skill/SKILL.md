# Blog Sonagi Space - Agentic Workflow & Development Skill

이 스킬(SKILL)은 `blog-sonagi-space` 프로젝트에서 개발을 진행하는 모든 AI 에이전트가 반드시 준수해야 하는 행동 지침 및 배포 워크플로우를 정의합니다.

## 1. Git & GitHub 워크플로우 (엄수)

- **절대 `main` 브랜치에 직접 커밋하거나 푸시하지 마세요.**
- 이슈나 요구사항을 할당받으면 반드시 새로운 브랜치를 생성하여 작업하세요.
  - 예시: `feature/이름`, `fix/이름`, `chore/이름`
- 코딩이 완료되면 변경사항을 커밋하고 Remote 저장소에 푸시한 뒤, 반드시 **Pull Request (PR)** 를 생성하여 유저(코드 리뷰어)에게 보고하세요.

## 2. 코드 컨벤션 및 품질 보증 (QA)

- 코드를 수정하거나 추가한 뒤에는 반드시 `package.json`에 정의된 린터(`lint`)와 포매터(Prettier)를 실행하여 문제를 사전에 해결하세요. (예: `npm run lint`)
- 타입스크립트를 엄격하게 준수하며, 불가피한 경우가 아니면 `any` 타입을 지양하세요.

## 3. 아키텍처 및 디자인 시스템 규칙 (엄수)

- **Next.js App Router**: 본 프로젝트는 Next.js App Router (`app/`) 구조를 따릅니다.
- **Sonagi Tokens Only**: 모든 스타일링은 `@sonagi/tokens` 패키지(또는 `sonagi-tokens.tgz`)의 CSS 변수(`var(--color-...)`)만을 사용해야 합니다.
- **Tailwind 금지**: `bg-blue-500` 등 하드코딩된 유틸리티 클래스 사용을 엄격히 금지합니다. 토큰 기반의 시맨틱 컬러(다크/라이트 자동 지원)를 사용하십시오.
- **Client/Server Component 분리**: 상호작용(Hover, Click)이 필요한 컴포넌트 최상단에는 반드시 `"use client";`를 선언하십시오.

## 4. 디지털 정원 (Digital Garden) 아키텍처 연동 원칙

- 위키(`llm-wiki`) 관련 컴포넌트를 작업할 때는, 데이터가 존재하지 않거나 로딩에 실패할 경우를 대비하여 항상 **Fallback(방어 로직)**을 구현하세요.
- `public/note-summaries.json` 및 `public/wiki-graph.json`은 빌드 타임 혹은 외부 시스템에서 주입되는 정적 데이터이므로, 클라이언트 렌더링(CSR) 시 타이밍 이슈나 데이터 부재를 고려하여 설계해야 합니다.

## 5. 위키 호버 팝오버(Hover Popover) 컴포넌트 개발 원칙

- **하이브리드 UX 대응**: 이벤트 위임(Event Delegation)을 사용하여 터치 환경과 마우스 환경을 완벽히 분리하고, 터치 기기에서는 스마트 클릭(첫 터치 팝업, 두 번 터치 이동)을 보장합니다.
- **포털(Portal) 사용**: `framer-motion`과 React `createPortal`을 사용하여 툴팁이 부모 DOM의 `overflow: hidden` 등에 의해 잘리지 않고 `document.body` 최상단에 렌더링되도록 구현합니다.
- **잔상 및 버그 방지**: 마우스 호버 등 DOM 이벤트는 `dangerouslySetInnerHTML` 내부에 직접 리스너를 달지 말고, 렌더 트리 재구성 시 이벤트가 유실되지 않도록 최상단 컨테이너에서 이벤트 위임(mouseover, mouseout)으로 관리하세요.

## 6. 위키 ↔ Metabase 파이프라인 연동 원칙

- 위키 메타데이터는 `llm-wiki` 저장소의 `00_System/scripts/sync_wiki_to_db.py` ETL 파이프라인을 통해 K3s 인프라 내부의 PostgreSQL DB로 인서트 됩니다.
- 블로그 클라이언트 단에서 직접 DB에 연결하지 않으며, 위키 건강도 지표(Health Metrics)를 블로그에 임베딩할 경우 Metabase의 JWT 서명된 Public Iframe 방식을 우선 고려합니다.

## 7. 테스트(Testing) 도입 기준 및 가이드라인

- **Unit Test (단위 테스트) - `Vitest`**
  - **도입 시기**: 순수 함수, 유틸리티 로직, 상태를 가지지 않는 단순 UI 컴포넌트를 개발할 때.
  - **규칙**: 예외 케이스(Edge case) 방어가 필요하다면, 파일명과 동일하게 `*.test.ts` 또는 `*.test.tsx`를 생성해 즉시 검증할 것.
- **Integration Test (통합 테스트) - `Vitest` + `React Testing Library`**
  - **도입 시기**: Context API, 커스텀 훅(Hook), 여러 컴포넌트 간의 상태(State) 공유가 발생하는 모듈을 작성할 때.
  - **규칙**: 실제 브라우저 환경까진 필요 없지만, React 렌더 사이클 내에서 데이터가 올바르게 전달되는지 확인해야 할 때 작성할 것.
- **E2E Test (종단간 테스트) - `Playwright`**
  - **도입 시기**: 사용자 상호작용(UX)이 매우 복잡하거나, 모바일/데스크톱 등 기기 환경에 따라 DOM 이벤트 동작이 달라지는 하이브리드 기능을 개발할 때. (예: 호버 팝오버, 지식 그래프 상호작용 등)
  - **규칙**: 기기별 동작(Desktop Chrome vs Mobile Safari) 검증이 필수적이거나 DOM 노드 조작 리스크가 있는 경우 `tests/e2e/` 하위에 Playwright 시나리오를 작성하여 실제 렌더링 결과를 검증할 것.
