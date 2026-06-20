---
title: SIFT Method (Four Moves for Fact-Checking)
tags: [concept, fact-checking, information-literacy, verification]
created: 2026-06-05
updated: 2026-06-05
source: https://hapgood.us/2019/06/19/sift-the-four-moves/
---

# SIFT Method

**SIFT Method**는 Mike Caulfield가 개발한 디지털 정보 검증 프레임워크입니다. 정보의 홍수 속에서 빠르고 정확하게 진위를 파악하기 위한 4가지 핵심 동작(Moves)을 정의합니다.

## 4가지 핵심 동작 (The Four Moves)

1.  **S (Stop)**: 정보를 처음 접했을 때 바로 믿거나 공유하지 말고 멈추십시오. 해당 출처나 웹사이트가 신뢰할 수 있는지 스스로에게 물어보는 단계입니다.
2.  **I (Investigate the source)**: 출처를 조사하십시오. 단순히 해당 사이트의 'About Us' 페이지를 보는 것이 아니라, **[[Lateral Reading]]**(옆으로 읽기, 다른 탭에서 해당 출처를 검색함)을 통해 외부의 평가를 확인하십시오.
3.  **F (Find better coverage)**: 더 나은 보도를 찾으십시오. 해당 주장이 다른 신뢰할 수 있는 매체에서도 다루어지고 있는지, 혹은 이미 팩트체크가 완료된 사안인지 확인하십시오. (합의된 사실 확인)
4.  **T (Trace claims, quotes, and media back to the original context)**: 주장, 인용구, 미디어를 **원본 맥락**까지 추적하십시오. 편집되거나 왜곡된 정보가 아닌지, 최초 출처의 의도가 무엇인지 파악하는 것이 핵심입니다.

## DataAnnotation 실전 적용 (Fact-Checking Strategy)

DA 시험의 팩트체크 문항은 AI가 '자신감 있게' 내뱉는 가짜 정보를 잡아내는 것이 목표입니다. SIFT를 다음과 같이 적용하십시오.

### [실전 적용 워크플로우]
*   **Move 1 (Stop)**: AI의 답변 중 숫자, 날짜, 고유 명사, URL이 나오면 즉시 의심하십시오.
*   **Move 2 (Investigate)**: AI가 제시한 링크가 실제로 존재하는지, 그 사이트가 권위 있는 기관인지 구글링하십시오.
*   **Move 3 (Find)**: `"주장 키워드" site:reuters.com` 또는 `Google Fact Check Explorer`를 활용해 교차 검증하십시오.
*   **Move 4 (Trace)**: 통계 수치가 언급되었다면, 2차 가공 기사가 아닌 **원본 보고서(PDF 등)**를 찾아 수치가 일치하는지 대조하십시오.

## 성공을 위한 검색 연산자 활용
*   `"[exact phrase]"`: 인용구 진위 확인.
*   `filetype:pdf`: 공식 보고서 및 논문 추적.
*   `after:YYYY-MM-DD`: 특정 시점 이후의 최신 정보 확인.

---
*참조: [[Advanced Google Search Operators|Advanced Google Search Operators]], 20_Wiki/Business/DataAnnotation/Master_Fact_Checking_Protocol*
