# Blog Sonagi Space Development Skill

이 스킬은 `blog-sonagi-space` (Next.js 블로그) 프로젝트에서 작업하는 AI 에이전트를 위한 절대 지침입니다.

## 🤖 1. Agentic Coding Principles (Karpathy Rules)

1. **Think Before Coding**: 혼자서 불확실한 가정을 하지 마십시오. 모호한 부분이 있다면 작업을 멈추고 사용자에게 명확한 방향을 질문하십시오.
2. **Simplicity First**: 최소한의 코드만 작성하십시오. 미래를 대비한답시고 불필요한 유연성이나 과도한 추상화(Over-engineering)를 도입하지 마십시오.
3. **Surgical Changes**: 요청받은 기능만 정밀하게 수정하십시오. 주변의 멀쩡한 코드나 주석을 '개선'하려는 시도(Orthogonal edits)를 엄격히 금지합니다.
4. **Goal-Driven Execution**: 버그 수정이나 기능 추가 시, 반드시 검증 가능한 목표(예: "미리보기 컴포넌트 렌더링 확인")를 설정하고 이를 달성했는지 테스트하십시오.

## 🎨 2. Architecture & Design System Rules

1. **Next.js App Router**: 본 프로젝트는 Next.js App Router (`app/`) 구조를 따릅니다.
2. **Sonagi Tokens Only**: 모든 스타일링은 `@sonagi/tokens` 패키지(또는 `sonagi-tokens.tgz`)의 CSS 변수(`var(--color-...)`)만을 사용해야 합니다.
3. **Tailwind 금지**: `bg-blue-500` 등 하드코딩된 유틸리티 클래스 사용을 엄격히 금지합니다. 토큰 기반의 시맨틱 컬러(다크/라이트 자동 지원)를 사용하십시오.
4. **Client/Server Component 분리**: 상호작용(Hover, Click)이 필요한 컴포넌트 최상단에는 반드시 `"use client";`를 선언하십시오.

## 📝 3. Markdown & Popover Integration (Wiki 연동)

1. 블로그 콘텐츠는 `content/` 디렉토리 하위의 마크다운 파일로 관리됩니다.
2. 위키에서 넘어온 데이터(`[[개념]]` 형식의 옵시디언 링크)를 처리할 때, 마크다운 파일 전체를 클라이언트에서 파싱하지 마십시오.
3. **Hover Popover 구현 시**:
   - `[[개념]]` 링크에 마우스를 올릴 때 띄워줄 요약본(Tooltip/Popover)은 가벼운 JSON 데이터(또는 API)를 비동기로 불러와 렌더링하는 것을 원칙으로 합니다.
