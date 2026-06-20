---
title: 노션 데이터베이스 이관 체크리스트
tags: [checklist, migration, notion, guide]
created: 2026-05-19
updated: 2026-05-19
---

# 📋 노션 데이터베이스 이관 체크리스트

이 문서는 옵시디언의 '거지맵 역기획' 자료를 팀 협업용 노션 데이터베이스(`거지맵 사례분석`)로 옮길 때 확인해야 할 항목들을 정리한 가이드입니다.

## 1. 이관 대상 문서 리스트

### 📁 기초 분석 (Foundation)
- [ ] **거지맵 벤치마킹 리포트**
    - 소스: `Analysis/거지맵 - 고물가 시대의 생존형 가성비 식당 지도 분석.md`
    - 노션 설정: `구분: 역기획 레퍼런스`, `상태: 완료`
- [ ] **제품 정의서 (PRD)**
    - 소스: `Analysis/Beggar-Map-Product-Definition.md`
    - 노션 설정: `구분: 기능 명세서`, `상태: 완료`
- [ ] **핵심 유저 스토리**
    - 소스: `Analysis/Beggar-Map-User-Stories.md`
    - 노션 설정: `구분: 기능 명세서`, 우선순위(High/Medium) 태그 활용

### 🛠 상세 기능 명세 (Detailed Specs)
- [ ] **Epic 1: 탐색 및 필터 시스템**
    - 소스: `Analysis/거지맵 - Epic 1: 탐색 및 필터 시스템.md`
- [ ] **Epic 2: 크라우드소싱 데이터 관리**
    - 소스: `Analysis/거지맵 - Epic 2: 크라우드소싱 데이터 관리.md`
- [ ] **Epic 3: 게이미피케이션 보상 시스템**
    - 소스: `Analysis/거지맵 - Epic 3: 게이미피케이션 보상 시스템.md`
- [ ] **Epic 4: 랭킹 및 커뮤니티 연동**
    - 소스: `Analysis/거지맵 - Epic 4: 랭킹 및 커뮤니티 연동.md`

### 🎨 시각적 자산 (Visual Assets)
- [ ] **정보 구조도 (IA)**
    - 소스: `Assets/Beggar-Map-IA.excalidraw`
    - 방법: 이미지(PNG)로 변환 후 노션 페이지 최상단 삽입
- [ ] **서비스 스크린샷 갤러리**
    - 소스: `Assets/Screenshots/*.png`
    - **CDN URL 리스트 (노션 이관용)**:
        - `beggar_map_main.png`: `https://cdn.sonagi.space/llm-wiki/assets/beggar_map_main.png`
        - `beggar_map_hotdeal.png`: `https://cdn.sonagi.space/llm-wiki/assets/beggar_map_hotdeal.png`
        - `beggar_map_community.png`: `https://cdn.sonagi.space/llm-wiki/assets/beggar_map_community.png`
        - `flow_marker_detail.png`: `https://cdn.sonagi.space/llm-wiki/assets/flow_marker_detail.png`
        - `flow_ranking.png`: `https://cdn.sonagi.space/llm-wiki/assets/flow_ranking.png`
        - `flow_draw.png`: `https://cdn.sonagi.space/llm-wiki/assets/flow_draw.png`
        - `flow_store.png`: `https://cdn.sonagi.space/llm-wiki/assets/flow_store.png`
    - 방법: 노션 '갤러리 뷰'를 활용하거나 위 URL을 '이미지 링크'로 삽입

---

## 💡 노션 이관 꿀팁
1. **마크다운 활용**: 옵시디언 본문을 전체 복사(`Ctrl+A` -> `Ctrl+C`)해서 노션에 붙여넣기(`Ctrl+V`)하면 서식이 대부분 유지됩니다.
2. **콜아웃(Callout) 사용**: 문서 내의 **'의사결정 이유'**나 **'핵심 인사이트'**는 노션의 콜아웃 블록으로 강조하면 팀원들이 읽기 좋습니다.
3. **속성(Properties) 채우기**: 제가 만들어둔 `핵심 의사결정` 속성에 문서의 핵심 기획 의도를 한 줄로 요약해 적어주세요.

---
*Created by Antigravity CLI - Migration Guide*
