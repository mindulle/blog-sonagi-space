# 🎨 Beggar Map (거지맵) UI/UX Asset Inventory

이 문서는 IA와 제품 정의서를 바탕으로, 실제 앱 개발에 필요한 UI 컴포넌트와 디자인 에셋 리스트를 정리합니다. 모든 에셋은 `Sonagi Design Tokens`의 **Commercial(Modern)** 테마를 기준으로 설계됩니다.

---

### 1. Global Navigation & Layout
*   **Bottom Navigation Bar**: 5개 탭 (Map, Ranking, Hot Deal, Community, Events)
    *   *Token Mapping*: Background `base.white`, Border `commercial.borderStyle(thin_1px)`
*   **Top Bar (Header)**: 페이지 제목 및 환경설정 아이콘
*   **Safe Area Overlay**: 시스템 노치 대응 영역

### 2. Map Elements (Epic 1)
*   **Custom Map Marker**: 가격 정보 배지가 포함된 마커
    *   *Variant*: `Normal`, `Clustered(Group)`, `Selected(Focused)`
*   **Price Badge**: 마커 상단에 붙는 텍스트 박스
    *   *Color*: `primary.500(Sonagi Blue)` 배경 + `base.white` 텍스트
*   **Floating Action Button (FAB)**: 현위치 이동 버튼, 정보 제보(+) 버튼
*   **Price Filter Buttons**: 수평 스크롤 가능한 필터 칩(Chip) 세트

### 3. Information Display (Epic 2)
*   **Shop Detail Bottom Sheet**: 슬라이드 업 형태의 정보창
    *   *UI Components*: 썸네일 이미지, 가격 텍스트, '절약 팁' 강조 박스, 공유 버튼
*   **Ranking List Card**: 유저/장소 순위 표시 카드
    *   *Visuals*: 1/2/3위 메달 아이콘 에셋, 프로필 이미지 서클
*   **Hot Deal Card**: 썸네일, 상품명, 할인율(Red Accent), 구매 버튼

### 4. Reward & System (Epic 3, 4)
*   **Tikkeul Balance Badge**: 상단 상시 노출되는 포인트 잔액 표시기
*   **Tiggle Draw Machine**: 추첨(Draw) 애니메이션용 인터렉션 에셋
*   **Shop Item Card**: 기프티콘 이미지 및 구매 가격(티끌) 정보

---

### 🖼️ Required Icon Assets (Proposed)
| 아이콘명 | 용도 | 권장 스타일 |
| :--- | :--- | :--- |
| `Map_Pin` | 지도 기본 마커 | 핀 형태 (Linear) |
| `Ranking_Star` | 랭킹 탭 아이콘 | 별 혹은 트로피 |
| `Hot_Fire` | 핫딜 탭 아이콘 | 불꽃 모양 |
| `Chat_Bubble` | 거지방 탭 아이콘 | 말풍선 |
| `Gift_Box` | 이벤트 탭 아이콘 | 선물 상자 |
| `Report_Add` | 장소 제보 버튼 | 플러스(+) 기호 |

### 🛠️ 디자인 시스템(Token) 적용 가이드
*   **Radius**: `commercial.borderRadius(4px)` 적용으로 정갈하고 전문적인 느낌 유지.
*   **Font**: Heading은 `sans_pretendard`, 본문은 `Pretendard Variable` 고정.
*   **Primary Color**: 핵심 포인트 정보(최저가, 버튼)는 `Sonagi Blue (#1991b9)` 사용.

---
### 💡 다음 단계 제안
디자인 에셋 리스트가 확보되었습니다. 이제 이 리스트를 바탕으로 실제 **OpenDesign**이나 **Figma**에서 화면을 그리는 작업을 시작하거나, 혹은 이 리스트를 기술적으로 뒷받침할 **[백엔드 API 엔드포인트 설계]**로 넘어가실 수 있습니다. 

어떤 작업이 더 흥미로우신가요?
