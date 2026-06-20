# 📄 Beggar Map (거지맵) Product Definition Document

## 1. Project Overview
*   **서비스명**: 거지맵 (거지맵.com)
*   **한줄 정의**: 저예산 유저를 위한 위치 기반 '짠테크' 푸드 위키 및 리워드 플랫폼.
*   **핵심 가치**: 실시간 저가 정보 공유, 게이미피케이션을 통한 절약 동기부여, 실질적 보상(티끌).
*   **역기획 대상**: `https://xn--v69ak0xskm.com/` (라이브 서비스)

## 2. Information Architecture (IA)
서비스의 구조는 **[탐색 -> 검증 -> 참여 -> 보상]**의 선순환 구조를 따릅니다.
*   **비주얼 가이드**: [[Beggar-Map-IA.excalidraw|Excalidraw 상세 설계도 확인]]

## 3. Core Features (Functional Specs)

### 3.1 지도 탐색 (Discovery)
*   **GPS 기반 POI 렌더링**: 사용자 위치 중심의 저가 식당/편의시설 노출.
*   **가격 중심 마커**: 지도 위에서 메뉴 가격을 즉시 확인 가능한 배지 UI.
*   **프리셋 필터**: `무료`, `3천원 이하`, `5천원 이하` 등 직관적인 가격대 필터링 제공.

### 3.2 게이미피케이션 및 리워드 (Engagement)
*   **티끌 시스템**: 정보 제보를 통해 포인트를 획득하고 드로우/상점에서 소모.
*   **지역 랭킹**: 특정 지역 내 가성비가 높은 식당을 1~3위 뱃지로 인증.
*   **왕초 페르소나**: 운영자 캐릭터를 활용한 커뮤니티 신뢰도 및 재미 확보.

### 3.3 커뮤니티 및 확장 (Extension)
*   **거지방 연결**: 카카오톡 오픈채팅방 등 외부 커뮤니티와의 유기적 연동.
*   **핫딜 큐레이션**: 제휴 마케팅(Affiliate)을 활용한 외부 할인 상품 정보 제공 및 수익화.

## 4. User Story Summary
| ID | 유저 스토리 | 우선순위 |
| :--- | :--- | :--- |
| US-101 | 내 주변 저렴한 식당 정보를 지도에서 즉시 확인 | High |
| US-102 | 마커 클릭 시 대표 메뉴와 가격 정보 오버레이 확인 | High |
| US-202 | 본인 프로필 및 누적 티끌 점수 확인 | High |
| US-401 | 티끌을 소모하여 경품 드로우(추첨) 응모 | High |
| US-301 | 핫딜 리스트를 통한 외부 할인 정보 획득 | Medium |

## 5. Technical Requirements (Data Schema)
*   **POI Data**: `name`, `category`, `latitude`, `longitude`, `min_price`, `savings_tip`.
*   **User Data**: `kakao_id`, `tikkeul_balance`, `activity_history`.
*   **Transaction**: `reward_id`, `status(pending/saved)`, `affiliate_url`.

---
*Last Updated: 2026-05-18 (LLM-Wiki Reverse Engineering Task Force)*
