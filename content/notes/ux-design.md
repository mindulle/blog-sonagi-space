---
title: UX/UI Design
tags: [roadmap, ux-design, ui-design]
created: 2026-05-11
updated: 2026-06-12
source: 10_Sources/roadmaps/ux-design
---

# UX/UI Design 로드맵 및 용어 사전

## 요약
UX(User Experience, 사용자 경험)와 UI(User Interface, 사용자 인터페이스)는 제품이 사용자와 상호작용하는 방식을 설계하는 과정입니다. 이 문서는 UX/UI 디자이너 및 프론트엔드 개발자가 알아야 할 핵심 로드맵, 그리고 현업에서 자주 쓰이는 주요 용어들을 정리한 사전입니다.

---

## 🗺️ UX/UI 디자인 로드맵

### 1. 사용자 이해 (Understand the User)
- **User Personas (사용자 페르소나)**: 타겟 사용자의 행동 패턴, 목표, 니즈를 가상으로 설정한 모델
- **User Journey Map (고객 여정 지도)**: 사용자가 제품을 인지하고 목적을 달성하기까지의 과정을 시각화
- **Mental Model (멘탈 모델)**: 사용자가 시스템이 어떻게 작동할 것이라고 마음속으로 그리는 인지 구조

### 2. 구조 및 흐름 설계 (Structure & Flow)
- **Information Architecture (IA, 정보 구조도)**: 웹/앱의 메뉴, 콘텐츠, 기능의 위계 질서 및 탐색 구조
- **User Flow (유저 플로우)**: 사용자가 특정 목표를 달성하기 위해 거치는 화면 및 액션의 흐름

### 3. 와이어프레임 및 프로토타이핑 (Wireframing & Prototyping)
- **Wireframe (와이어프레임)**: UI의 뼈대와 레이아웃을 선으로 간단히 스케치한 화면 설계서
- **Prototype (프로토타입)**: 실제 제품처럼 상호작용이 가능하도록 만든 시뮬레이션 모델 (Figma, Propie 등 활용)
- **Mockup (목업)**: 색상, 타이포그래피, 이미지 등이 반영된 정적인 시각 디자인 시안

### 4. 검증 및 테스트 (Testing & Validation)
- **A/B Testing (A/B 테스트)**: 두 가지 이상의 시안을 동시에 배포하여 어떤 시안이 목표(전환율 등) 달성에 더 효과적인지 검증
- **Usability Testing (UT, 사용성 테스트)**: 실제 사용자가 프로토타입을 사용하는 과정을 관찰하여 문제점을 발견
- **Heuristic Evaluation (휴리스틱 평가)**: 전문가 그룹이 닐슨(Jakob Nielsen)의 10가지 사용성 원칙 등에 기반해 UI를 평가

---

## 📖 UI/UX 핵심 용어 사전 (Glossary)

### 📌 UI 컴포넌트 용어 (UI Terms)
> 지속적으로 학습하고 복습(Spaced Repetition)할 대상입니다.

- **CTA (Call to Action)**: 사용자의 클릭, 구매, 가입 등 특정 행동을 유도하는 주요 버튼이나 텍스트 (예: '지금 시작하기')
- **Modal / Dialog (모달 / 다이얼로그)**: 기존 화면 위에 새로운 창이 띄워지며, 창을 닫기 전까지는 기존 화면을 제어할 수 없는 UI
- **Tooltip (툴팁)**: 아이콘이나 텍스트에 마우스를 올렸을 때(Hover) 부가 설명을 말풍선 형태로 보여주는 요소
- **Breadcrumb (브레드크럼)**: 헨젤과 그레텔의 빵가루처럼, 사용자가 현재 사이트 구조 내 어디에 위치해 있는지 경로를 보여주는 내비게이션 (예: `Home > Category > Item`)
- **Snackbar / Toast (스낵바 / 토스트)**: 화면 하단이나 상단에서 잠시 나타났다가 사라지는 간단한 피드백 메시지창
- **Accordion (아코디언)**: 제목을 클릭하면 내용이 아래로 펼쳐지고, 다시 클릭하면 접히는 UI (자주 묻는 질문(FAQ)에 자주 쓰임)
- **Carousel (캐러셀)**: 여러 개의 이미지나 카드를 슬라이드 형태로 좌우로 넘겨볼 수 있는 UI
- **Hero Image (히어로 이미지)**: 웹사이트 메인 페이지 최상단에 넓게 배치되어 시각적 임팩트를 주는 대형 배너 이미지
- **FAB (Floating Action Button)**: 화면 우측 하단 등에 떠 있는 동그란 형태의 주요 액션 버튼 (예: 글쓰기 버튼)

### 📌 UX 방법론 및 개념 용어 (UX Terms)
- **Affordance (행동 유도성)**: 어떤 사물의 형태가 사용자의 특정 행동을 자연스럽게 유도하는 성질 (예: 튀어나온 버튼은 '누르고 싶게' 만듦)
- **Accessibility (a11y, 접근성)**: 장애, 나이, 환경에 상관없이 누구나 제품을 동일하게 사용할 수 있도록 설계하는 것 (고대비 색상, 스크린 리더 지원 등)
- **Dark Pattern (다크 패턴)**: 사용자를 속여서 원치 않는 행동(결제, 가입 연장 등)을 하도록 유도하는 비윤리적인 UI/UX 설계
- **Gamification (게이미피케이션)**: 게임이 아닌 분야(학습, 운동 등)에 게임의 요소(포인트, 뱃지, 리더보드)를 접목하여 참여를 유도하는 방법
- **Onboarding (온보딩)**: 신규 사용자가 서비스의 가치를 빠르게 느끼고 사용법을 익히도록 돕는 첫경험 설계 프로세스

---

## 관련 로드맵
- [[design-system|Design System Roadmap]]
- [[frontend|Frontend Roadmap]]

## Next Steps
- [x] UI 용어 정리하기 (태그 달면서 진행, Spaced Repetition 대상).
- [x] UX 용어 정리하기.
- [ ] 핀터레스트 UI 보드 아카이빙을 위한 카드 조사 및 정리.
