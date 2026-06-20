---
title: OSINT (Open Source Intelligence)
tags: [concept, fact-checking, investigation, verification, tools]
created: 2026-06-05
updated: 2026-06-05
source: https://bellingcat.gitbook.io/toolkit
---

# OSINT (Open Source Intelligence)

**OSINT**는 공개된 출처(Open Sources)로부터 정보를 수집, 분석 및 결정하여 특정 질문에 답하는 정보 활동입니다. 현대의 팩트체크와 수사 활동에서 핵심적인 역할을 하며, 단순히 검색을 넘어 데이터의 흔적을 추적하는 기술을 포함합니다.

## 핵심 영역 및 도구 (Core Domains & Tools)

1.  **이미지 및 영상 검증 (Image/Video Verification)**:
    *   **Reverse Image Search**: Google Lens, Yandex Images(얼굴/지형 특화), TinEye를 사용하여 이미지의 최초 게시 시점과 원본 맥락을 파헤칩니다.
    *   **Metadata Analysis**: `ExifTool` 등을 활용해 촬영 일시, 위치, 기기 정보를 확인합니다.
2.  **위치 추정 (Geolocation)**:
    *   **Visual Cues**: 그림자 방향, 건축 양식, 식생, 산의 능선 등을 Google Earth Pro나 스트리트 뷰와 대조하여 실제 장소를 특정합니다.
3.  **아카이브 추적 (Archiving)**:
    *   **Wayback Machine / Archive.today**: 삭제되거나 수정된 웹페이지의 과거 기록을 확인하여 AI가 인용한 정보가 과거의 낡은 정보인지 판단합니다.
4.  **네트워크 분석 (Social Media Analysis)**:
    *   특정 계정의 활동 패턴, 봇 여부, 정보 전파 경로를 시각화하여 정보의 의도를 파악합니다.

## DataAnnotation 실전 적용 (Advanced Verification)

DA 시험에서 AI가 매우 구체적인 사례를 들며 거짓말을 할 때 OSINT 기술은 치명적인 무기가 됩니다.

### [실전 적용 시나리오]
*   **Case**: AI가 "2024년 뉴욕 광장에서 열린 X 행사의 사진입니다"라며 특정 URL이나 묘사를 제공함.
*   **OSINT Action**:
    *   **Search**: 해당 URL이 유효한지 확인하고, Wayback Machine에서 2024년 당시 페이지를 조회함.
    *   **Verify**: 묘사된 날씨(비가 옴)와 실제 2024년 뉴욕 기상 데이터를 대조함.
    *   **Identify**: 만약 AI가 묘사한 건물이 실제로는 2023년에 철거되었다면, 이는 명백한 환각(Hallucination)입니다.

## 5대 검증 기둥 (The Five Pillars of Verification)

Bellingcat에서 강조하는 전문 팩트체커의 5대 원칙입니다.
1.  **Provenance (출처)**: 이것이 원본 콘텐츠인가?
2.  **Source (제공자)**: 누가 올렸으며, 그들은 신뢰할 수 있는가?
3.  **Date (일시)**: 실제로 언제 촬영/작성되었는가?
4.  **Location (위치)**: 정확히 어디인가?
5.  **Motivation (동기)**: 왜 이 정보를 공유했는가?

---
*참조: [[SIFT Method|SIFT Method]], [[Advanced Google Search Operators|Advanced Google Search Operators]], 20_Wiki/Business/DataAnnotation/Master_Fact_Checking_Protocol*
