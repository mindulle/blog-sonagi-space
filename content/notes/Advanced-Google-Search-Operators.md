---
title: Advanced Google Search Operators
tags: [concept, search, fact-checking, tools, google]
created: 2026-06-05
updated: 2026-06-05
source: https://support.google.com/websearch/answer/2466433
---

# Advanced Google Search Operators (2026 Edition)

**Advanced Google Search Operators**는 일반적인 검색어만으로는 찾기 힘든 특정 정보, 문서, 또는 출처를 정밀하게 타격하기 위한 명령문의 집합입니다. 팩트체크 시 2차 가공 정보를 배제하고 **원본 데이터(Primary Source)**를 찾는 데 필수적입니다.

## 2026년 필수 연산자 리스트

1.  **출처 고정 (`site:`)**: 특정 도메인이나 기관 내에서만 검색합니다.
    *   *예시:* `site:nasa.gov "Mars water"` (NASA 공식 자료만 확인)
    *   *응용:* `site:.edu` (대학), `site:.gov` (정부) 등을 활용해 공신력 있는 출처 필터링.
2.  **파일 형식 지정 (`filetype:` / `ext:`)**: 보고서, 논문, 통계 원본을 찾을 때 사용합니다.
    *   *예시:* `"Global warming report" filetype:pdf` (가공된 기사가 아닌 원본 PDF 보고서 추적)
3.  **정확한 문구 (`" "`)**: 인용구의 진위나 특정 고유 명사의 정확한 언급을 확인합니다.
    *   *예시:* `"The only thing we have to fear is fear itself"`
4.  **근접 검색 (`AROUND(n)`)**: 두 단어가 서로 n단어 이내에 인접한 결과만 보여줍니다. 주법과 근거가 연결된 문서를 찾을 때 탁월합니다.
    *   *예시:* `"Apple Vision Pro" AROUND(3) "battery life"`
5.  **제외 검색 (`-`)**: 불필요한 노이즈나 특정 사이트를 결과에서 뺍니다.
    *   *예시:* `Tesla -site:twitter.com` (SNS 루머를 배제하고 검색)
6.  **기간 설정 (`after:`, `before:`)**: 특정 시점의 정보를 확인합니다.
    *   *예시:* `Covid-19 after:2025-01-01 before:2025-12-31` (2025년 당시의 데이터 확인)

## 2026년형 팩트체크 Pro-Tips

*   **최초 출처 추적 (The Origin Hunter)**: 
    `"특정 통계 수치" -site:[이미 확인한 기사 사이트]`
    이미 확인한 사이트들을 하나씩 `-`로 지워나가며 최초로 해당 수치를 발표한 원문을 찾아낼 수 있습니다.
*   **AI 검색 모드와의 결합**: 
    Google 검색창의 **'AI Mode'**를 켜고, "위의 연산자들을 활용해 이 주장에 대한 반박 논문 3개를 찾아줘"와 같이 복잡한 검색 전략을 지시할 수 있습니다.
*   **Google Fact Check Explorer**: 
    [toolbox.google.com/factcheck/explorer](https://toolbox.google.com/factcheck/explorer)를 직접 방문하여 전 세계 검증 기관의 DB를 우선 조회하십시오.

## DataAnnotation 실전 적용 가이드

DA 시험에서 AI가 제시한 사실이 의심될 때 즉시 다음 조합을 사용하십시오.
1.  **URL 검증**: AI가 준 링크 제목을 `" "`로 감싸고 검색하여 실제 존재하는 페이지인지 확인.
2.  **수치 검증**: AI가 말한 통계치를 `AROUND(5)`와 기관명(`site:who.int`)으로 검색하여 원본 대조.
3.  **날짜 검증**: 사건의 발생일을 `before:` 연산자로 조회하여 타임라인 모순(Anachronism) 적발.

---
*참조: [[SIFT Method|SIFT Method]], [[OSINT (Open Source Intelligence)|OSINT]], 20_Wiki/Business/DataAnnotation/Master_Fact_Checking_Protocol*
