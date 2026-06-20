---
title: "소나기 디자인 코덱스 (Master Design Slang & Technique Codex)"
date: 2026-06-15
tags: [design-system, glossary, slang, workflow, ui-ux, tools, master-dictionary]
category: design
description: "국내외 실무 디자이너들의 피드백 데이터를 총망라한 방대한 디자인 실무 은어, 테크닉, UX 컴포넌트 종합 대사전"
---

# 📖 소나기 디자인 마스터 코덱스 (Grand Codex)

본 코덱스는 수백 시간 분량의 유튜브 라이브 피드백 자막 데이터와 실무 커뮤니케이션 데이터를 총망라하여 구축한 **'방대한 실무 디자인 대사전'**입니다. 단순히 원칙을 나열한 것을 넘어, 현장에서 디자이너들이 날것으로 사용하는 감정적 은어와 테크닉을 시스템 언어로 1:1 완벽 번역합니다.

---

## 👁️ Vol 1. 시각 및 감각적 은어 (Visuals & Aesthetics)
디자이너가 눈으로 보고 느끼는 시각적 불편함이나 요구사항을 표현하는 날것의 용어들입니다.

### 1.1 밀도와 여백 (Density & Spacing)
*   **숨 막힌다 / 답답하다 (Claustrophobic / Needs room to breathe)**
    *   *의미*: 요소 간의 여백(Margin)이나 내부 여백(Padding)이 너무 좁을 때.
    *   *해결*: 네거티브 스페이스(Negative Space) 확보. 패딩을 1.5~2배 확장.
*   **휑하다 / 비어 보인다 (Too empty / Floating)**
    *   *의미*: 텍스트나 컨텐츠에 비해 컨테이너 박스가 너무 크거나 묶어주는 요소가 없을 때.
    *   *해결*: Max-width 조정, 옅은 Border나 Background Color를 주어 덩어리를 묶음(Grouping).
*   **날린다 / 가볍다 (Floating / Lacks Anchor)**
    *   *의미*: 타이틀이나 버튼이 배경에 정착하지 못하고 시각적 무게 중심이 없을 때.
    *   *해결*: 텍스트 웨이트(Weight)를 Bold로 올리거나, 베이스라인(Baseline) 하단에 앵커 요소 배치.

### 1.2 두께와 형태 (Weight & Shape)
*   **뚱뚱하다 / 둔탁하다 (Chunky / Heavy)**
    *   *의미*: 선 두께(Stroke)나 아이콘의 면적이 캔버스(24px)에 비해 너무 커서 무식해 보일 때.
    *   *해결*: 시각적 무게감(Optical Weight) 보정. 2px 선을 1.5px~1.8px로 축소.
*   **빈약하다 / 약하다 (Thin / Weak)**
    *   *의미*: 아이콘의 획이 너무 얇아서 배경색에 먹히거나 클릭하기 어려워 보일 때.
    *   *해결*: 획 두께 확장 및 아이콘 내부의 카운터(Counter, 빈 공간) 비율 조정.
*   **찌그러져 보인다 / 떠 보인다 (Off-center / Unbalanced)**
    *   *의미*: 기하학적 중앙(Geometric Center)에 배치했으나 착시로 인해 비뚤어져 보일 때.
    *   *해결*: 광학적 중앙(Optical Center) 보정. (예: 삼각형을 오른쪽으로 1px 이동).
*   **짝짝이 같다 / 크기가 다르다 (Lacks Overshoot)**
    *   *의미*: 원형 아이콘과 사각 아이콘이 같은 크기로 보이지 않을 때.
    *   *해결*: 둥근 요소를 가이드라인 밖으로 1~2px 튀어나가게(Overshoot) 보정.

### 1.3 색상과 선명도 (Color & Clarity)
*   **떡진다 / 뭉개진다 (Muddy / Blurry / Off-pixel)**
    *   *의미*: 소수점 픽셀 사용으로 안티앨리어싱이 발생하거나, 선 간격이 1px 이하로 좁아 모니터에서 까맣게 뭉칠 때.
    *   *해결*: 정수 단위 픽셀 스냅(Snap to pixel) 강제, 획 사이의 여백 강제 파내기.
*   **탁하다 / 묻힌다 (Washed out / Low Contrast)**
    *   *의미*: 배경과 전경(글자) 색상의 명도 차이가 적어 경계가 불분명할 때.
    *   *해결*: WCAG 기준 명도 대비(Contrast Ratio) 4.5:1 이상 확보.
*   **쨍하다 / 팝하다 (Punchy / Pop / Vibrant)**
    *   *의미*: 높은 채도와 명료한 대비로 시선을 확 잡아끄는 긍정적 상태.
    *   *해결*: 하이라이트/포인트 영역에 고채도(High Chroma) 솔리드 컬러 적용.
*   **눈 아프다 (Screaming / Vibrating)**
    *   *의미*: 보색 대비가 너무 강하거나 야광색(Neon)이 넓은 면적에 발라져 시각적 피로를 유발할 때.
    *   *해결*: 채도를 살짝 낮추거나(Desaturate), 포인트 컬러의 사용 면적을 10% 미만으로 제한.

---

## 🛠️ Vol 2. 툴 및 테크닉 은어 (Tools & Execution)
그래픽 툴(Figma, Krita, Photoshop, Illustrator) 실무 조작과 관련된 테크닉 용어들입니다.

### 2.1 형태 조작 테크닉
*   **누끼 딴다 (Cutout / Vector Masking)**
    *   *의미*: 배경을 지우고 피사체만 남기는 작업. (일본어 '빼기'에서 유래)
    *   *해결*: 펜 툴(Pen Tool)로 벡터 외곽선을 따서 마스크(Mask)를 씌우는 정밀 작업 수행.
*   **패스파인더 돌린다 (Boolean Operation / Shape Builder)**
    *   *의미*: 두 개 이상의 도형을 합치거나 빼서 새로운 형태를 만드는 것.
    *   *해결*: Union(합치기), Subtract(빼기), Intersect(교차), Exclude(제외) 연산 적용.
*   **아웃라인 깬다 / 아웃라인 딴다 (Outline Stroke / Expand / Flatten)**
    *   *의미*: 텍스트나 선(Stroke)의 크기가 변해도 두께/비율이 망가지지 않도록 면(Fill/Path) 데이터로 변환하는 것.
    *   *해결*: `Shift + Cmd + O` (Figma), 폰트를 패스로 변환.

### 2.2 레이아웃 및 렌더링 테크닉
*   **오토레이아웃 건다 (Auto-layout / Flexbox)**
    *   *의미*: 콘텐츠 내용(글자 수 등)이 바뀌어도 패딩과 간격이 자동으로 유지되는 반응형 프레임을 씌우는 것.
    *   *해결*: `Shift + A` (Figma), CSS Flexbox 속성(Gap, Padding, Align) 적용.
*   **멀티플라이 태운다 / 스크린 먹인다 (Layer Blending Mode)**
    *   *의미*: 레이어 혼합 모드를 사용하여 이미지를 합성하는 것.
    *   *해결*: 어두운 합성=`Multiply`, 밝은 합성=`Screen`, 대비 증가=`Overlay`.
*   **뎁스(Depth)를 준다 (Elevation / Z-index)**
    *   *의미*: 화면이 너무 평면적일 때 층위(계층)를 나누어 입체감을 부여하는 것.
    *   *해결*: Drop Shadow(그림자 효과) 추가 또는 배경 명도를 어둡게 낮춰 전경을 띄움.

---

## 🧩 Vol 3. UX/UI 컴포넌트 명칭 (Components & Elements)
기획, 디자인, 개발 간 헷갈리기 쉬운 UI 요소들의 명확한 명칭과 뉘앙스 차이입니다.

### 3.1 알림 및 오버레이 (Overlays & Alerts)
*   **모달 (Modal) vs 팝업 (Popup) vs 얼럿 (Alert)**
    *   *모달/팝업*: 화면 중앙에 뜨며, 닫기 전까지 뒤쪽 배경(Dim) 조작이 **차단(Blocking)**되는 창.
    *   *얼럿*: 모달 중에서도 치명적 경고나 삭제 확인 등 시스템 알림 창.
*   **스낵바 (Snackbar) vs 토스트 (Toast)**
    *   *의미*: 화면 하단(또는 상단)에 작게 떠서 "저장되었습니다" 등을 알리고 수 초 뒤 **자동으로 사라지는(Non-blocking)** 메시지.
*   **바텀시트 (Bottom Sheet) vs 드로어 (Drawer)**
    *   *바텀시트*: 모바일에서 화면 아래에서 위로 스와이프업 되어 올라오는 패널.
    *   *드로어*: 햄버거 버튼을 누를 때 화면 좌/우측에서 밀려 나오는(Slide-in) 메뉴 창.
*   **툴팁 (Tooltip) vs 팝오버 (Popover)**
    *   *툴팁*: 아이콘에 마우스를 올렸을 때(Hover) 짧은 설명(텍스트)만 나타나는 작은 말풍선.
    *   *팝오버*: 클릭했을 때 나타나며, 내부에 버튼이나 입력창 등 복잡한 상호작용이 포함된 말풍선.

### 3.2 내비게이션 및 컨트롤 (Navigation & Controls)
*   **캐러셀 (Carousel) vs 슬라이더 (Slider)**
    *   *의미*: 여러 장의 이미지나 카드를 가로(Horizontal)로 스와이프해서 넘겨볼 수 있는 컴포넌트.
*   **스켈레톤 (Skeleton) vs 스피너 (Spinner)**
    *   *스켈레톤*: 데이터가 로딩되기 전에, 화면의 레이아웃 형태를 미리 회색 박스들로 보여주는 로딩 UI.
    *   *스피너*: 뱅글뱅글 도는 원형 로딩 아이콘.
*   **아코디언 (Accordion)**
    *   *의미*: FAQ 제목을 클릭하면 본문이 아래로 펼쳐지고(Expand), 다른 걸 누르면 닫히는(Collapse) 목록 UI.
*   **FAB (Floating Action Button)**
    *   *의미*: 화면 스크롤과 무관하게 우측 하단에 동동 떠 있는 핵심 원형 버튼 (예: 글쓰기).
*   **브레드크럼 (Breadcrumb)**
    *   *의미*: 헨젤과 그레텔의 빵부스러기처럼, 현재 사용자가 어느 메뉴 뎁스(Depth)에 있는지 보여주는 경로 (예: `Home > Design > Components`).

---

## 🗣️ Vol 4. 실무 커뮤니케이션 은어 (Workflow & Communication)
클라이언트나 기획자의 추상적인 지시를 명확한 에이전트 시스템 액션으로 치환합니다.

### 4.1 작업 요청 및 수정 (Request & Revisions)
*   **디벨롭 해주세요 (Develop / Polish / Refine)**
    *   *의미*: 스케치나 초안의 형태는 유지하되, 완성도(Fidelity), 디테일, 퀄리티를 전문가 수준으로 끌어올려 달라는 뜻.
    *   *해결*: 그림자 정교화, 2px 그리드 정밀 스냅, 색상 명도/채도 최적화, 마진/패딩 배수(8px scale) 캘리브레이션 적용.
*   **베리에이션 쳐주세요 (Explore Variations / Make Variants)**
    *   *의미*: 확정된 하나의 시안을 바탕으로 색상, 크기, 상태(Hover, Active) 등을 다양하게 파생시켜(벌려) 달라는 뜻.
    *   *해결*: 피그마 컴포넌트 Variants 생성. (예: Primary 버튼의 Hover, Disabled 상태 제작).
*   **엣지(Edge) 있게 가시죠 (Make it edgy / sharp)**
    *   *의미*: 둥글둥글하고 귀여운 느낌(Friendly)을 배제하고, 트렌디하고 세련되며 날카로운 느낌을 원할 때.
    *   *해결*: Border-radius(모서리 둥글기)를 0~4px로 최소화하고, 대비(Contrast)가 강한 무채색(Dark/Light) 레이아웃 적용.

### 4.2 프로젝트 상태 및 산출물 (Status & Deliverables)
*   **톤앤매너 맞춰주세요 (Tone & Manner / Vibe)**
    *   *의미*: 프로젝트의 핵심 분위기나 색상, 폰트 스타일의 일관성을 유지해 달라는 뜻.
    *   *해결*: `Core-Color-Palette.md` 와 `Foundation-Tokens.md`에 명시된 토큰 변수만 100% 사용하여 일관성 확보.
*   **얼라인(Align) 합시다**
    *   *의미*: 기획/디자인/개발자 간에 목표나 이해도를 하나로 일치시키자는 회의 용어.
*   **픽스(Fix) 났어요**
    *   *의미*: 디자인 시안이 최종 승인되어 변경 불가능한 상태가 됨. (다음 단계인 마크업/개발로 핸드오프).
*   **에셋 / 리소스 뽑아주세요 (Export Assets)**
    *   *의미*: 디자인 파일에서 개발자가 쓸 수 있도록 SVG, PNG, WebP 등으로 컴포넌트를 잘라내는(Slice) 작업.
*   **마크업 (Markup) / 하드코딩 (Hard-coding)**
    *   *마크업*: 디자인된 화면을 HTML/CSS 코드로 그대로 옮겨 짜는 프론트엔드 기초 작업.

---
*Generated by Agent Orchestrator: This Grand Codex is continuously updated via cross-validation of UI/UX live reviews, tech blogs, and global design guidelines.*
