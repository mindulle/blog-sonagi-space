---
title: "타이포그래피의 기본 (Typography Theory)"
category: Design
tags: [concept, typography, fonts, ui-ux, fundamentals]
source: "Graphic Design: The New Basics, 실무 타이포그래피 가이드"
---

# 타이포그래피의 기본 (Typography Theory)

디지털 화면(UI)을 구성하는 정보의 90%는 텍스트입니다. 타이포그래피(Typography)는 단순히 예쁜 폰트를 고르는 작업이 아니라, **"사용자가 정보를 얼마나 빠르고 정확하게, 그리고 의도된 감정(Mood)으로 읽어내게 할 것인가"**를 설계하는 시각적 정보 건축(Information Architecture)입니다.

---

## 1. 서체의 종류와 목적 (Typefaces)

서체는 크게 꼬리(장식)의 유무에 따라 **세리프(Serif)**와 **산세리프(Sans-Serif)**로 나뉩니다.

<div style="display: flex; gap: 20px; margin: 20px 0;">
  <div style="flex: 1; background: #f8fafc; padding: 30px; border-radius: 8px; text-align: center; border: 1px solid #e2e8f0;">
    <div style="font-family: 'Times New Roman', Georgia, serif; font-size: 48px; margin-bottom: 10px;">Serif</div>
    <div style="font-size: 14px; color: #64748b;">획 끝에 장식(삐침)이 있는 클래식한 서체</div>
  </div>
  <div style="flex: 1; background: #f8fafc; padding: 30px; border-radius: 8px; text-align: center; border: 1px solid #e2e8f0;">
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 48px; margin-bottom: 10px; font-weight: bold;">Sans-Serif</div>
    <div style="font-size: 14px; color: #64748b;">획 굵기가 일정하고 장식이 없는 모던 서체</div>
  </div>
</div>

### 1.1 세리프 (Serif / 명조체)
- **특징**: 글자 획의 끝에 삐침(장식)이 있는 클래식한 서체입니다.
- **역할**: 가로로 읽어 나갈 때 시선의 흐름을 이어주는 시각적 가이드라인 역할을 합니다.
- **용도**: 종이 인쇄물, 신문, 소설 등 **긴 호흡의 본문(Long-form text)**을 읽을 때 피로도를 줄여줍니다. 디지털에서는 '고급스러움, 클래식함, 신뢰감'을 주는 브랜딩 목적의 큰 제목(Heading)으로 자주 쓰입니다. (예: 럭셔리 브랜드 로고, 뉴욕타임스)
- **대표 폰트**: Times New Roman, Garamond, 바탕체, 명조체

### 1.2 산세리프 (Sans-Serif / 고딕체)
- **특징**: 삐침 없이 획의 굵기가 일정하고 깔끔하게 떨어지는 현대적인 서체입니다. ("Sans"는 프랑스어로 '없다'는 뜻)
- **역할**: 픽셀로 이루어진 모니터와 모바일 화면에서 작은 글씨라도 깨짐 없이 명확하게 읽히도록 합니다.
- **용도**: 웹/모바일 UI 디자인의 절대적인 표준입니다. 버튼, 메뉴, 본문, 경고창 등 디지털 환경의 **모든 정보 전달**에 쓰입니다.
- **대표 폰트**: Helvetica, Futura, Apple San Francisco, Pretendard, 맑은 고딕

---

## 2. 가독성의 3요소 (Micro-typography)

아무리 예쁜 폰트라도, 간격이 무너지면 아무도 읽지 않습니다.

### 2.1 자간 (Tracking / Letter-spacing)
- 글자와 글자 사이의 간격입니다.
- **실무 공식**: 폰트 사이즈가 **커질수록 자간은 줄이고(마이너스 자간)**, 폰트 사이즈가 **작아질수록 자간은 넓혀야(플러스 자간)** 가독성이 유지됩니다.

<div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 15px 0;">
  <div style="font-size: 32px; letter-spacing: -2px; font-weight: bold; margin-bottom: 10px;">TITLE (큰 폰트 = 좁은 자간)</div>
  <div style="font-size: 12px; letter-spacing: 1px; color: #475569;">Caption text (작은 폰트 = 넓은 자간으로 뭉개짐 방지)</div>
</div>

### 2.2 행간 (Leading / Line-height)
- 줄과 줄 사이의 간격입니다.
- **실무 공식**: 데스크탑 웹 본문(Body) 기준, 행간은 폰트 크기의 **140% ~ 160% (1.4~1.6배)**가 가장 이상적입니다.

<div style="display: flex; gap: 20px; margin: 15px 0;">
  <div style="flex: 1; background: #fee2e2; padding: 20px; border-radius: 8px;">
    <strong style="color: #991b1b;">❌ 나쁜 행간 (1.0배)</strong>
    <p style="line-height: 1.0; font-size: 14px; margin-top: 10px; color: #7f1d1d;">행간이 너무 좁으면 윗줄과 아랫줄의 글자가 서로 맞닿아 읽기 매우 불편합니다. 사용자는 금방 피로감을 느끼고 이탈하게 됩니다.</p>
  </div>
  <div style="flex: 1; background: #dcfce7; padding: 20px; border-radius: 8px;">
    <strong style="color: #166534;">✅ 좋은 행간 (1.6배)</strong>
    <p style="line-height: 1.6; font-size: 14px; margin-top: 10px; color: #14532d;">행간을 160%로 설정하면 글줄 사이에 적절한 여백(숨통)이 생겨, 긴 글을 읽더라도 시선이 편안하게 다음 줄로 이동할 수 있습니다.</p>
  </div>
</div>

### 2.3 줄 길이 (Line Length / Measure)
- 한 줄에 들어가는 글자의 수입니다.
- **실무 공식**: 한 줄이 너무 길면 다음 줄로 눈이 넘어갈 때 길을 잃고, 너무 짧으면 눈알을 너무 자주 굴려 피곤합니다. 한글 기준 **한 줄당 35~45자**, 영문 기준 **50~75자**가 가장 이상적입니다. (그래서 뉴스 사이트는 긴 텍스트를 여러 '단(Column)'으로 쪼개서 보여줍니다.)

---

## 3. 타입 스케일과 시각적 위계 (Type Scale & Hierarchy)

화면을 보자마자 "어디가 제일 중요하고, 그다음은 어디를 봐야 하는지" 시선의 순서를 폰트 크기로 설계하는 작업입니다. 크기를 감으로 정하지 않고 **수학적 비율(Scale)**을 곱해서 만듭니다.

<div style="background: #f8fafc; padding: 30px; border-radius: 8px; margin: 20px 0; font-family: sans-serif;">
  <div style="font-size: 31px; font-weight: bold; margin-bottom: 8px; color: #0f172a;">H1: 31px (가장 중요한 대제목)</div>
  <div style="font-size: 25px; font-weight: 600; margin-bottom: 8px; color: #334155;">H2: 25px (섹션 중간 제목)</div>
  <div style="font-size: 20px; font-weight: 500; margin-bottom: 12px; color: #475569;">H3: 20px (소제목)</div>
  <div style="font-size: 16px; color: #64748b; line-height: 1.6;">Body: 16px. 본문 텍스트입니다. 기준이 되는 16px에 1.25(Major Third)를 계속해서 곱해 올라가면, 감으로 찍지 않아도 완벽하게 수학적인 시각적 위계가 완성됩니다.</div>
</div>

- **Major Third (1.250배 스케일)**: 데스크탑 UI에서 가장 흔히 쓰는 안정적인 비율.
- **Golden Ratio (1.618배 스케일)**: 제목과 본문의 크기 차이를 극단적으로 주어 매거진처럼 드라마틱하고 예술적인 느낌을 줄 때 사용합니다.

---

## 4. ✒️ 타이포그래피 퍼블릭 도메인 마스터피스

현대 폰트 디자인의 기틀을 마련한 수백 년 전의 역사적인 활자 매뉴얼입니다. (저작권 만료, 인터넷 아카이브 무료 열람 가능)

### 👑 지암바티스타 보도니의 《타이포그래피 매뉴얼 (Manuale Tipografico)》 (1818)
- 활자의 왕(King of Typographers)이라 불린 보도니가 남긴 타이포그래피 역사상 가장 위대한 유산입니다. 
- 굵은 세로획과 아주 가는 가로획의 극단적인 대비를 가진 '모던 세리프(Modern Serif)' 폰트의 정수를 보여줍니다. 오늘날 보그(Vogue), 디올(Dior) 등 명품 브랜드들이 환장하는 고급스러운 폰트 스타일의 완벽한 조상님입니다.
- 👉 [인터넷 아카이브 고화질 PDF 열람 (약 280MB)](https://archive.org/details/5873-1/5873-1_PDFa.pdf)

### 📏 조프루아 토리의 《샹플뢰리 (Champ Fleury)》 (1529)
- 로마자 알파벳의 형태를 **인체의 비율(Human Proportion)과 기하학적 그리드**에 완벽하게 대응시켜 작도한 책입니다. 
- 폰트가 단순한 글씨가 아니라 수학과 인문학의 결정체임을 증명한 책으로, 현재 기하학적 폰트(Geometric Sans)를 그릴 때 참조하는 완벽한 레퍼런스입니다.
- 👉 [인터넷 아카이브 고화질 PDF 열람](https://archive.org/details/champfleury00tory)

---
**관련 문서**
- [[TYPO_02_monogram_design]] (모노그램 디자인 5대 실무 기법)
- [[Typography-Master-Specs]] (프로젝트 타이포그래피 기준)
- [[Font-Inventory]] (사용 폰트 목록)
- [[COLOR_01_basics]] (디자인 기본: 배색)
- [[LAYOUT_02_grid_BASIS_]] (디자인 기본: 레이아웃)