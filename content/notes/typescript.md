---
title: TypeScript
tags: [roadmap, typescript]
created: 2026-05-11
updated: 2026-06-12
source: 10_Sources/roadmaps/typescript
---

# TypeScript 로드맵

## 요약
TypeScript는 Microsoft에서 개발한 JavaScript의 상위 집합(Superset) 언어로, 정적 타이핑을 지원하여 대규모 애플리케이션 개발 시 코드 품질과 생산성을 크게 향상시킵니다. 이 로드맵은 타입스크립트의 기초부터 고급 기능, 그리고 생태계까지 체계적으로 학습하기 위한 가이드입니다.

---

## 🗺️ 학습 단계 (Learning Path)

### 1. 기초 (Basics)
- **Introduction**: TypeScript란 무엇인가? JavaScript와의 차이점
- **환경 설정 (Setup)**: `tsc` 설치, `tsconfig.json` 구성 및 컴파일 옵션 이해
- **기본 타입 (Primitive Types)**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`
- **특수 타입 (Special Types)**: `any`, `unknown`, `never`, `void`
- **배열과 튜플 (Arrays & Tuples)**

### 2. 객체와 인터페이스 (Objects & Interfaces)
- **Object Types**: 객체의 형태 정의
- **인터페이스 (Interfaces)**: 클래스나 객체의 스펙 선언, 상속(`extends`)
- **타입 별칭 (Type Aliases)**: `type` 키워드를 활용한 사용자 정의 타입
- **Interfaces vs Types**: 두 개념의 차이점과 언제 무엇을 사용할지에 대한 가이드

### 3. 함수와 클래스 (Functions & Classes)
- **함수 타이핑 (Typing Functions)**: 매개변수와 반환 타입, 선택적 매개변수(`?`)
- **함수 오버로딩 (Function Overloading)**: 다양한 매개변수 조합 처리
- **클래스 (Classes)**: 접근 제어자(`public`, `private`, `protected`), `readonly`, 추상 클래스(`abstract`)

### 4. 고급 타입 (Advanced Types)
- **유니언과 교차 타입 (Union & Intersection Types)**: `|` (OR), `&` (AND)
- **타입 단언과 가드 (Type Assertions & Guards)**: `as`, `instanceof`, `typeof`, 사용자 정의 타입 가드(`is`)
- **리터럴 타입 (Literal Types)**: 특정 문자열이나 숫자만 허용하는 타입
- **제네릭 (Generics)**: 재사용 가능한 컴포넌트 만들기, 제약 조건(`extends`)
- **유틸리티 타입 (Utility Types)**: `Partial`, `Pick`, `Omit`, `Record`, `ReturnType`, `Awaited` 등

### 5. 마스터 코스 (Mastery)
- **조건부 타입 (Conditional Types)**: `T extends U ? X : Y` 구조 이해
- **매핑된 타입 (Mapped Types)**: 기존 타입을 기반으로 새로운 타입 생성 (`[K in keyof T]`)
- **템플릿 리터럴 타입 (Template Literal Types)**
- **데코레이터 (Decorators)**: 클래스, 메서드, 프로퍼티 등에 메타데이터 추가
- **모듈 및 네임스페이스 (Modules & Namespaces)**: 앰비언트 모듈(`declare module`), 전역 보강(Global Augmentation)

### 6. 생태계 및 도구 (Ecosystem & Tooling)
- **빌드 도구**: Webpack, Vite, esbuild 등과의 통합
- **Linting & Formatting**: ESLint, Prettier 설정
- **런타임 및 실행**: `ts-node`, `tsx`, Node.js 및 Deno/Bun에서의 TypeScript 활용

---

## 주요 개념 (Atomic Notes)
*학습하며 생성된 개별 원자적 노트들입니다.*
- [[tsconfig.json|tsconfig.json]]
- [[Type Guards  Narrowing|Type Guards & Narrowing]]
- [[Types vs Interfaces|Types vs Interfaces]]
- [[Generics|Generics]]
- [[Utility Types|Utility Types]]
- [[Mapped Types|Mapped Types]]
- [[Conditional Types|Conditional Types]]

---

## 🔗 참고 리소스 (Resources)
- [@official@Official Website](https://www.typescriptlang.org/)
- [@article@The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [@video@TypeScript for Beginners](https://www.youtube.com/watch?v=BwuLxPH8IDs)

## 관련 로드맵
- [[JavaScript|JavaScript Roadmap]]
- [[react|React Roadmap]]
- [[frontend|Frontend Roadmap]]
- [[backend|Backend Roadmap]]

## Next Steps
- [x] 타입스크립트 로드맵 정리.
