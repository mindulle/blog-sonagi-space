---
title: Master Fact-Checking Protocol (DataAnnotation)
tags: [data-annotation, fact-checking, manual, investigation]
created: 2026-06-05
updated: 2026-06-05
---

# 🛡️ Master Fact-Checking Protocol (DataAnnotation Edition)

이 매뉴얼은 DataAnnotation.tech(DA) 어세스먼트 중 발생하는 모든 사실 관계 확인(Fact-Checking) 작업에 대한 실전 행동 강령입니다. AI의 교묘한 환각(Hallucination)을 0%의 오차로 잡아내는 것을 목표로 합니다.

## 1. 실전 팩트체크 4단계 (DA-SIFT)

### 단계 1: 의심의 단계 (Move: Stop)
*   **Trigger**: 답변에 숫자, 날짜, 고유 명사, 인용구, URL이 포함되면 무조건 멈춥니다.
*   **Rule**: "내 상식으로 맞는 것 같다"는 생각은 가장 위험한 함정입니다. 무조건 외부 검색을 수행하십시오.

### 단계 2: 출처의 권위 확인 (Move: Investigate)
*   **Lateral Reading**: AI가 인용한 웹사이트 이름을 새 탭에 검색하여 신뢰도를 확인합니다. (예: `[사이트 이름] reliability` 또는 `[사이트 이름] wikipedia`)
*   **Avoid Echo Chambers**: AI가 지어낸 가짜 사실이 이미 다른 저질 웹사이트들에 퍼져 있을 수 있습니다. 반드시 Reuters, AP, BBC, 또는 공식 정부/학술 사이트를 우선하십시오.

### 단계 3: 정밀 타격 검색 (Move: Find)
*   **Search Operators 활용**:
    *   인용구 확인: `"[인용구 전체]"`
    *   공식 문서 추적: `site:*.gov OR site:*.edu "주제 키워드" filetype:pdf`
    *   최신성 확인: `[키워드] after:2024-01-01`
*   **Google Fact Check Explorer**: 복잡한 정치/사회적 이슈는 [이곳](https://toolbox.google.com/factcheck/explorer)에서 먼저 검색하십시오.

### 단계 4: 원본 맥락 대조 (Move: Trace)
*   **Primary Source 대조**: AI가 제시한 통계 수치가 원본 보고서(Primary Source)의 몇 페이지에 있는지, 그리고 그 수치가 해당 맥락에서 올바르게 쓰였는지 확인하십시오.
*   **Anachronism 적발**: 2025년에 일어난 일을 2024년이라고 하거나, 존재하지 않는 과거의 사건을 언급하는지 타임라인을 대조하십시오.

## 2. DA 시험의 주요 환각(Hallucination) 패턴

1.  **가짜 URL**: 제목은 그럴듯하지만 클릭하면 404 에러가 나거나 전혀 다른 페이지로 연결됨.
2.  **미세한 수치 조작**: 15.4%를 15.6%로 표기하거나, 단위를 교묘하게 바꿈 (예: 백만 -> 십억).
3.  **허구의 인물/사건**: 실존하는 단체의 '가짜 대변인'이나 '가짜 보도자료'를 지어냄.
4.  **확증 편향**: 사용자의 질문에 맞추기 위해 존재하지 않는 근거를 창조함.

## 3. Rationale(근거) 작성 시 필수 포함 문구

검증에 성공했다면, Rationale에 다음과 같이 기술하여 신뢰도를 높이십시오.
*   "I verified this claim by accessing the primary source at [URL]..."
*   "A Google search using the operator `site:reuters.com` confirmed that..."
*   "Response B contains a hallucination regarding the date; the actual event occurred on..."

---
*참조: [[SIFT Method|SIFT Method]], [[Advanced Google Search Operators|Advanced Google Search Operators]], [[OSINT (Open Source Intelligence)|OSINT (Open Source Intelligence)]], 20_Wiki/Business/DataAnnotation/Writing_Style_Guide*
