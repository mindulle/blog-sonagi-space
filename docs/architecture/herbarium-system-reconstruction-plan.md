# 🌿 돌 틈의 표본실 (The Herbarium in the Crevice) 조형 시스템 전면 재구축 계획서

- **문서 번호**: HERBARIUM-RECON-20261112
- **프로젝트**: `blog-sonagi-space` (소나기 디지털 정원 & 기술 블로그)
- **추진 배경**: 전형적인 B2B SaaS 랜딩 페이지 템플릿(히어로 ➔ 3대 기둥 카드 ➔ 4대 생태계 링크 카드 ➔ 기능 쇼케이스)의 클리셰를 완전히 탈피하고, 독보적인 **"돌 틈의 식물 표본실 (The Herbarium in the Crevice)"** 세계관을 시각적 공예(Craftsmanship)와 엔지니어링 아키텍처 수준에서 실체화함.

---

## 1. 핵심 결함 진단 (Brutal Quality Diagnosis)

1. **에칭 선화의 픽토그램화**:
   - 기존 글리프는 기하학적 도형 선 몇 개를 그어놓은 단순 픽토그램에 불과하여, 18~19세기 식물도감(Pierre-Joseph Redouté, Ernst Haeckel 스타일)의 극세선 동판화 에칭이 지닌 식물학적 아우라와 비대칭 유기적 긴장감이 결여됨.
2. **가짜 물질성 (False Materiality)**:
   - `<SpecimenLabel>` 상단에 주황색 CSS 직사각형(`div`)을 얹어놓고 "한지 마운트"라 부르는 기만. 실제 한지(Mulberry Paper)의 섬유 결(Fiber texture), 반투명성, 아카이벌 코너 탭이 부재함.
3. **About 페이지의 정체성 혼란과 중복**:
   - 상단 네비게이션에 이미 존재하는 Projects, Notes, Blog를 About 페이지에서 카드로 또다시 나열하는 포털식 구조로 인해, 정원사의 개인 서사와 표본실의 철학이 전달되지 못하고 흔한 스타트업 소개서처럼 변질됨.
4. **표본실 시스템의 주객전도**:
   - 4단계 생장 글리프와 표본 라벨이 About 페이지의 '기능 소개용 데모 박스'에 갇혀 있고, 정작 본체인 `/notes`(지식 정원)는 여전히 알록달록한 이모지(🌐 💾)와 평범한 카드로 방치됨.

---

## 2. 5대 마일스톤 및 이슈 분리 체계

```
┌────────────────────────────────────────────────────────────────────────────┐
│                    HERBARIUM RECONSTRUCTION PIPELINE                       │
├───────────────┬──────────────────────────────────────────┬─────────────────┤
│ 마일스톤      │ 목표 산출물                              │ 담당 영역       │
├───────────────┼──────────────────────────────────────────┼─────────────────┤
│ Milestone 1   │ 4단계 극세선 선화 에칭 재작화 (SVG 16종)  │ Botanical Art   │
│ Milestone 2   │ 한지 섬유 SVG 필터 및 표본실 물리적 씰    │ Materiality     │
│ Milestone 3   │ /about 정원사 현판 & 모노그래프 전면 개편 │ The Register    │
│ Milestone 4   │ /notes 표본 서랍 및 4단계 생장 필터 이식  │ Living Garden   │
│ Milestone 5   │ Figma Local Components SSOT 최종 갱신    │ Design Systems  │
└───────────────┴──────────────────────────────────────────┴─────────────────┘
```

---

### Milestone 1: Botanical Etching Artistry (선화 에칭 재작화)

- **목표**: 아이콘 팩 수준의 단순 픽토그램을 폐기하고, 고전 식물학 동판화 수준의 유기적 선화로 4단계 에칭을 완전 재작화.
- **세부 규격**:
  - `Seed`: 수과(Achene)의 미세 가시 돌기와 팽팽한 부리(Beak), 방사형 관모 기초 털.
  - `Sprout`: 암반의 비대칭 단면 균열선과 이를 뚫고 솟구치는 유기적 떡잎 곡선.
  - `Rosette`: 실제 민들레(Dent-de-lion)의 하향 경사 runcinate 톱니와 정밀 엽맥 구조.
  - `Pappus`: 3차원 반구형 낙하산 관모 살과 상공으로 유려하게 비상하는 독립 홀씨.
- **산출물**: `public/botanical/*.svg` (24, 48, 96px) & `<GrowthGlyph>` 컴포넌트 리마스터링.

### Milestone 2: Tactile Herbarium Paper & Stamp Materiality (물질감 구현)

- **목표**: 플랫한 CSS 박스를 탈피하여 손에 잡힐 듯한 아카이벌 식물 표본지의 촉각성 부여.
- **세부 사양**:
  - 순수 웹 표준 SVG 필터(`<feTurbulence>`, `<feColorMatrix>`)를 활용한 실시간 한지 섬유 결(Mulberry Paper Grain) 텍스처 구현.
  - 모서리 린넨 마운트 코너 탭과 반투명 한지 테이프(Washi Strip with subtle edge feathering).
  - 표본실 공식 압인 음각 씰 (Embossed Curatorial Stamp) 적용.
- **산출물**: `<SpecimenLabel>` 전면 리팩토링 및 한지 텍스처 엔진 구축.

### Milestone 3: The Herbarium Register (`/about` 에디토리얼 모노그래프)

- **목표**: SaaS 랜딩 페이지 템플릿(3기둥, 4생태계 카드) 전면 철거.
- **세부 사양**:
  - 단 하나의 장중한 아카이벌 식물도감 대장(The Herbarium Monograph) 포맷으로 전면 교체.
  - 표본실 공식 등록 현판: `Taraxacum platycarpum Dahlst.`
  - 정원사의 선서(The Gardener's Manifesto): 완벽주의 거부와 열린 사유의 헌법.
  - 4단계 생장 에칭 인라인 플레이트(Botanical Plates I~IV).
  - 정원사와의 접견(Contact & Signal): 이메일 및 RSS 1줄 시그널.

### Milestone 4: The Living Herbarium (`/notes` 지식 정원의 진짜 심장 이식)

- **목표**: `/notes`를 실제 식물 표본실의 아카이브 서랍으로 전환.
- **세부 사양**:
  - 알록달록한 이모지 카테고리 카드(🌐 💾) 철거.
  - 상단 4단계 생장 에칭 필터 탭 바(Seed ➔ Sprout ➔ Rosette ➔ Pappus) 신설.
  - 모든 노트 카드를 표본 라벨(Specimen Tag/Card) 양식으로 렌더링.
  - 배경에 미세한 암반 균열선(Rock Crevice Fissure) 배치.

### Milestone 5: Figma SSOT & Launchpack Verification

- **목표**: Figma `Local Components`에 최종 리마스터된 컴포넌트 세트 등록 및 2x 고해상도 검증.
