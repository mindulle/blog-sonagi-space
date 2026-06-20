---
title: "소나기 코드 레퍼런스 가이드 (hotssi/sandbox)"
date: 2026-05-16
tags: [code-reference, sandbox, react, vanilla-js, patterns]
category: reference
description: "GitHub 저장소 기반의 실시간 실행 및 수정 가능한 코드 예제 리스트"
---

# 💻 Code Reference Hub

이 문서는 [hotssi/sandbox](https://github.com/hotssi/sandbox) 저장소에 축적된 기술 자산들을 **CodeSandbox**와 연동하여 실시간으로 실행하고 수정할 수 있는 허브입니다.

---

## 🛠️ 표준 URL 및 사용 규칙

CodeSandbox가 각 폴더를 독립된 프로젝트로 인식하여 에러 없이 실행하기 위한 규격입니다.

### 🔗 표준 URL 구조
`https://codesandbox.io/s/github/hotssi/sandbox/tree/master/[PATH]`

### ⚠️ 링크 생성 및 실행 조건 (무결성 유지)
1.  **`index.html` 필수**: Vanilla JS 예제는 반드시 `index.html`이 해당 폴더 내에 존재해야 합니다.
2.  **`package.json` 포함**: 번들러(Parcel/CRA) 가동 및 외부 라이브러리 처리를 위해 권장됩니다.
3.  **대소문자 엄수**: URL의 PATH는 실제 파일 시스템의 대소문자와 100% 일치해야 합니다.
4.  **브랜치 명시**: 기본 브랜치인 `master`를 경로에 명확히 포함하십시오.

---

## 🍦 1. Vanilla JavaScript (Verified)
프레임워크 없이 순수 자바스크립트로 구현된 기초 기술 예제입니다.

| 예제명 | 설명 | 실시간 실행 |
| :--- | :--- | :--- |
| **Bouncing Loader** | CSS와 JS를 결합한 로딩 애니메이션 | [Run in Sandbox](https://codesandbox.io/s/github/hotssi/sandbox/tree/master/Vanilla/Prsnt/Animation/bouncing-loader) |
| **Donut Spinner** | SVG 기반의 세련된 스피너 | [Run in Sandbox](https://codesandbox.io/s/github/hotssi/sandbox/tree/master/Vanilla/Prsnt/Animation/donut-spinner) |
| **DOM Manipulation** | Web API를 활용한 직접적인 요소 제어 | [Run in Sandbox](https://codesandbox.io/s/github/hotssi/sandbox/tree/master/Vanilla/Logic/DOM/manipulation) |

## ⚛️ 2. React Components (Verified)
소나기 디자인 시스템의 기반이 될 수 있는 리액트 컴포넌트 라이브러리입니다.

| 예제명 | 설명 | 실시간 실행 |
| :--- | :--- | :--- |
| **Limited Word Textarea** | 글자수 제한 기능이 포함된 입력창 | [Run in Sandbox](https://codesandbox.io/s/github/hotssi/sandbox/tree/master/component/react/input/LimitedWordTextarea) |
| **Spinning Loader** | 리액트 환경의 로딩 컴포넌트 | [Run in Sandbox](https://codesandbox.io/s/github/hotssi/sandbox/tree/master/component/react/feedback/SpinningLoader) |
| **useLocalStorage** | 로컬 스토리지를 제어하는 커스텀 훅 | [Run in Sandbox](https://codesandbox.io/s/github/hotssi/sandbox/tree/master/component/react/hooks/useLocalStorage) |

## 🏗️ 3. Design Patterns (Verified)
아키텍처 설계 역량을 높여주는 핵심 패턴 예제입니다.

| 예제명 | 설명 | 실시간 실행 |
| :--- | :--- | :--- |
| **Theming** | 다크모드/라이트모드 테마 제어 패턴 | [Run in Sandbox](https://codesandbox.io/s/github/hotssi/sandbox/tree/master/patterns/theming) |
| **Clipboard** | 클립보드 복사/붙여넣기 유틸리티 패턴 | [Run in Sandbox](https://codesandbox.io/s/github/hotssi/sandbox/tree/master/patterns/clipboard) |
| **Web Apps** | 웹 앱 아키텍처 구성 기본 패턴 | [Run in Sandbox](https://codesandbox.io/s/github/hotssi/sandbox/tree/master/patterns/web-apps) |

---

## 📂 Next Steps
- [ ] 신규 브랜딩 프로젝트용 **Atomic Design** 폴더 구조를 `hotssi/sandbox`에 추가.
- [ ] Trello의 `Reference Hub` 보드에 위 주요 예제들을 카드로 생성하여 시각화.
- [ ] 위키의 개별 개념 문서(`[[개념]]`)들 하단에 위 표준 URL 규칙을 적용하여 추가.

---
> **연결 문서**: [[visual-identity|visual-identity]], [[TRELLO_GUIDE]], [[agent-visual-specs|agent-visual-specs]]
