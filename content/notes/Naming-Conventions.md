---
title: "Sonagi Naming Conventions (명명 규칙)"
description: "소나기 디자인 시스템의 모든 파일, 자산, 코드 변수에 적용되는 단일 진실 명명 규칙"
---

# 🏷️ Sonagi Naming Conventions

본 문서는 소나기(Sonagi) 디자인 시스템 생태계 내에서 인간(Human)과 에이전트(AI)가 자산을 생성, 저장, 배포할 때 반드시 지켜야 하는 **절대적인 명명 규칙(Nomenclature)**을 정의합니다.

## 1. 기본 원칙 (General Rules)
*   **Kebab-Case 강제**: 모든 배포용 에셋(SVG, PNG, HTML)의 파일명은 소문자와 하이픈(`-`)만을 사용합니다. (예: `icon-cloud.svg`)
*   **Snake_Case 강제**: 모든 소스 코드(.scad, .py) 및 내부 변수명은 소문자와 언더스코어(`_`)만을 사용합니다. (예: `sonagi_purifier.py`, `inner_radius`)
*   **영단어 명사 기준**: 직관적이고 보편적인 영단어 명사를 사용하며, 약어(Abbreviation) 사용은 최대한 지양합니다. (예: `btn` ❌ -> `button` ✅)

## 2. 파일명 접두사 규칙 (Prefixes)
어떤 종류의 자산인지 파악하기 위해 배포용 파일 앞에는 반드시 카테고리 접두사를 붙입니다.

| 카테고리 | 접두사 (Prefix) | 예시 (Example) | 설명 |
| :--- | :--- | :--- | :--- |
| **아이콘** | `icon-` | `icon-search.svg` | UI 내비게이션, 버튼 등에 쓰이는 24px 기반 뼈대 |
| **컴포넌트** | `comp-` | `comp-button.svg` | 버튼, 인풋, 카드 등 조립된 UI 요소 |
| **브랜드/로고** | `brand-` | `brand-logo-main.svg` | 소나기 공식 심볼, 워드마크, 파트너 로고 |
| **일러스트** | `illust-` | `illust-error-404.svg` | 빈 화면, 에러 페이지 등에 쓰이는 큰 그래픽 |
| **해부도** | `blueprint-` | `blueprint-gear.html` | SCAD 기하학 작도선을 보여주는 검수용 뷰어 |

## 3. 원본 설계도 규칙 (Source of Truth)
기하학 엔진을 구동하는 `.scad` 원본 파일은 복잡한 접두사 없이 **'순수한 명사'**만을 사용하여 본질을 표현합니다.
*   ✅ `cloud.scad`, `gear.scad`, `home.scad`
*   ❌ `icon_cloud_v2.scad`, `make_gear.scad`

## 4. 상태 및 변형 접미사 (Suffixes & Variants)
기본 규격(Standard 24px, 기본 상태)이 아닌 경우, 파일명 끝에 하이픈을 붙여 상태나 사이즈를 명시합니다.

*   **사이즈 티어 (Tiers)**
    *   기본(24px)은 생략: `icon-cloud.svg`
    *   특수 사이즈 명시: `icon-cloud-16px.svg`, `icon-cloud-48px.svg`
*   **상태 (States)**
    *   `-[state]`: `comp-button-hover.svg`, `icon-heart-active.svg`
*   **스타일 (Styles)**
    *   `-[style]`: `icon-cloud-solid.svg` (채워진 면), `brand-logo-mono.svg` (흑백)

## 5. 디자인 토큰 규칙 (CSS Variables)
CSS나 프론트엔드 코드에 주입되는 소나기 시스템 변수는 무조건 `--s-` 접두사로 시작하여 외부 라이브러리와의 충돌을 막습니다.
*   `--s-action-primary` (소나기 블루)
*   `--s-border-width-standard` (2px)
*   `--s-radius-md` (8px)

---
> **⚠️ 에이전트 주의사항**: 새로운 자산을 생성하거나 기존 파일을 다룰 때, 이 문서의 규칙에 위배되는 파일명이 발견되면 즉시 `mv` 명령어를 통해 규격에 맞게 정돈(Sanitize)할 것.
