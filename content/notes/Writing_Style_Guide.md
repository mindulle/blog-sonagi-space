---
title: DataAnnotation Writing Style Guide
tags: [data-annotation, technical-writing, google-style]
created: 2026-06-05
updated: 2026-06-05
---

# DataAnnotation Writing Style Guide (Google Style)

이 가이드는 DataAnnotation.tech(DA) 어세스먼트의 **Rationale(평가 근거)** 작성 시 채점관에게 높은 점수를 받기 위한 테크니컬 라이팅 원칙을 정리합니다. Google의 기술 문서 작성 원칙을 기반으로 합니다.

## 1. 핵심 원칙: 객관성과 명확성 (Clarity & Objectivity)

DA 리뷰어는 "왜(Why)" 이 답변이 우수한지 데이터에 기반한 증거를 원합니다. 주관적인 감정('I liked', 'It felt')은 배제합니다. 상세한 방법론은 [[Writing/Guides/Hybrid_Writing_Strategy|Hybrid Writing Strategy]]를 참조하십시오.

### 1.1 능동태(Active Voice) 사용
주어를 명확히 하고 동작을 직접적으로 서술하세요. ([[Purdue OWL|Purdue OWL 표준]] 준수)
- **Bad:** "A mistake was made by Response B in the date."
- **Good:** "**Response B incorrectly states** the launch date as 2022 instead of 2023."

### 1.2 모호한 형용사 배제
'Good', 'Better', 'Natural'과 같은 단어는 가치가 낮습니다. 대신 기술적 상태를 나타내는 단어를 쓰세요.
- **Instead of 'Better'**: Superior, Accurate, Compliant, Precise
- **Instead of 'Natural'**: Idiomatic, Coherent, Fluid, Context-aware

## 2. Rationale 구조: PEEL + List

긴 문단보다 구조화된 목록을 선호합니다. [[00_System/_templates/Rationale_PEEL_Structure|Rationale PEEL 템플릿]]을 활용하십시오.

### 2.1 PEEL 구조 적용
[[PEEL Method|PEEL 방식]]을 통해 논리적 완결성을 확보하십시오.
1. **Point (요점):** 어떤 모델이 왜 우수한지 한 문장으로 정의.
2. **Evidence (증거):** 틀린 부분의 위치나 구체적인 제약 조건 위반 사례 인용.
3. **Explanation (설명):** 이 오류가 사용자에게 어떤 부정적 영향을 주는지 설명. ([[Harvard Writing Center|Harvard 분석 전략]] 적용)
4. **Link (결론):** 따라서 이 선택이 유용성(Helpfulness) 면에서 최선임을 강조.

### 2.2 리스트 활용 예시
> "Response A is the superior choice for the following reasons:"
> - **Constraint Adherence:** Strictly followed the 3-sentence limit.
> - **Fact-Checking:** Corrected the hallucination regarding the 1969 Moon landing date found in Response B.
> - **Formatting:** Utilized a bulleted list as explicitly requested in the prompt.

## 3. 팩트체크용 전문 용어 (Fact-Checking Verbs)

AI의 환각(Hallucination)을 지적할 때 유용한 동사들입니다.
- **Contradicts:** 이전 문장이나 외부 사실과 모순됨.
- **Fabricates:** 존재하지 않는 사실을 지어냄.
- **Misattributes:** 업적이나 발언을 엉뚱한 사람에게 귀속시킴.
- **Omits:** 필수 지시사항이나 중요한 정보를 누락함.

## 4. 최종 검토 체크리스트 (The Final Linting)

1. [ ] **AI-like phrases 제거:** "In conclusion," "It is important to note," 같은 상투적인 문구가 있는가?
2. [ ] **제약 조건 확인:** 프롬프트의 모든 제약 조건을 언급했는가?
3. [ ] **맞춤법 및 문장부호:** Oxford Comma를 사용했는가? 모든 문장이 마침표로 끝나는가?

---
*참조: [[Writing/Tech/Technical Writing One/1. Introduction|Google Technical Writing Course]]*
