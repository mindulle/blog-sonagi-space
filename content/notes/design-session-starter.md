---
title: "디자인 작업 세션 시작 템플릿"
date: 2026-06-19
tags: [template, workflow, design, session-start]
usage: "새 디자인 작업 세션을 시작할 때 AI에게 이 내용을 그대로 던진다"
---

# 디자인 작업 세션 시작 템플릿

새 세션에서 디자인 작업을 시작할 때 아래 섹션 중 해당하는 것을 복사해서 AI에게 전달한다.

---

## A. 기존 프로젝트 이어서 작업할 때

```
[프로젝트명] 작업 이어서 할게.

먼저 아래 문서들 읽어줘:
- 20_Wiki/Design/01_Projects/[프로젝트명]_Brand_Decision_Log.md
- 20_Wiki/Design/03_Resources/Workflows/design-grid-logo-inkscape-mcp.md

읽고 나서:
1. 현재까지 결정된 것 요약
2. 미결 사항 중 오늘 할 것 제안
3. 내가 OK하면 바로 Inkscape MCP 작업 시작
```

---

## B. 새 디자인 프로젝트를 처음 시작할 때

```
새 디자인 프로젝트 시작할게. [프로젝트명]이야.

아래 순서로 진행해줘:

1. 브랜드 정의 질문 (AI가 순서대로 물어본다)
   - 이 브랜드/서비스가 가리키는 감성이나 순간은?
   - 누가 사용하고, 그들이 자신을 어떻게 느끼길 바라나?
   - 조직/서비스의 성격 (B2C / B2B / 내부 도구 등)

2. 로고 방향 결정
   - 심볼 중심 / 워드마크 중심 / 조합
   - 한글 / 영문 / 병행

3. 조형 기법 선택
   - logo-form-generation-methodology.md 의 매트릭스 기준으로 기법 필터링
   - 브랜드 감성과 Inkscape MCP 구현 가능성 양쪽 고려

4. 결정 사항 문서화
   - 20_Wiki/Design/01_Projects/[프로젝트명]_Brand_Decision_Log.md 생성

5. 작업 시작
   - Inkscape MCP로 그리드 생성
   - GUI에서 내가 Boolean / 노드 편집
```

---

## C. 그리드 생성만 빠르게 할 때

```
Inkscape MCP로 그리드 로고 작업 시작해줘.

- 기법: [기하학적 구조화 / 게슈탈트 생략 / 기타]
- 대상: [SONAGI 영문 워드마크 / 소나기 한글 워드마크 / 기타]
- 베이스 폰트: [폰트명 또는 "아직 미결"]
- 캔버스: [크기, 예: 800x400]
- 참고 문서: 20_Wiki/Design/01_Projects/Sonagi_Brand_Decision_Log.md

그리드 생성 후 Inkscape GUI에서 바로 열어줘.
```

---

## AI-Human 역할 분담 (항상 유효)

| AI (나) | 인간 (너) |
|---------|----------|
| 브랜드 질문 및 방향 제안 | 최종 방향 결정 |
| 기법 선택 근거 제시 | 기법 승인 |
| SVG 그리드 생성 (수치 계산) | Boolean 연산 (GUI) |
| 변형 지점 설계 및 설명 | 노드 편집 및 형태 판단 |
| 결정 사항 문서화 | 검토 및 수정 |
| 색상 일괄 적용 (요청 시) | 최종 저장 및 내보내기 |

---

## 체크리스트 — 작업 전 반드시 확인

- [ ] Decision Log 읽었는가?
- [ ] Inkscape 실행 중인가? (`inkscape_inkscape_status`)
- [ ] 저장 경로 정했는가? (`10_Sources/assets/` 하위 권장)
- [ ] 이번 세션의 목표 한 줄로 정했는가?

---

## 관련 문서

- [[logo-form-generation-methodology]] — 10개 기법 매트릭스
- [[design-grid-logo-inkscape-mcp]] — Inkscape MCP 워크플로우 레시피
- [[Sonagi_Brand_Decision_Log]] — 소나기 프로젝트 결정 로그
