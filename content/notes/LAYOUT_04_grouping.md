---
title: "그룹화 (Gestalt Grouping)"
category: Design
tags: [layout, gestalt, grouping, ui-ux, fundamentals]
---

# 그룹화와 게슈탈트 법칙 (Grouping & Gestalt)

화면에 흩어진 무수히 많은 정보들을 사용자가 '의미 있는 덩어리'로 쉽게 소화할 수 있도록 묶어주는 작업입니다. 인간의 뇌가 시각 정보를 무의식적으로 묶어서 인지하려는 본능을 **게슈탈트 심리학(Gestalt Psychology)**이라고 부르며, 현대 UI/UX 레이아웃의 가장 중요한 근간입니다.

## 1. 근접성의 원리 (Law of Proximity)
서로 가까이 있는 요소들은 하나의 그룹으로, 멀리 떨어져 있는 요소들은 다른 그룹으로 인식됩니다. **UI 디자인에서 여백(White Space)이 가장 중요한 이유입니다.**

<div style="display: flex; gap: 40px; margin: 20px 0; padding: 30px; background: #f8fafc; border-radius: 8px;">
  <div style="flex: 1; text-align: center;">
    <strong>❌ 나쁜 예 (균일한 간격)</strong><br><br>
    <svg width="150" height="150" viewBox="0 0 150 150">
      <circle cx="30" cy="30" r="10" fill="#cbd5e1"/><circle cx="75" cy="30" r="10" fill="#cbd5e1"/><circle cx="120" cy="30" r="10" fill="#cbd5e1"/>
      <circle cx="30" cy="75" r="10" fill="#cbd5e1"/><circle cx="75" cy="75" r="10" fill="#cbd5e1"/><circle cx="120" cy="75" r="10" fill="#cbd5e1"/>
      <circle cx="30" cy="120" r="10" fill="#cbd5e1"/><circle cx="75" cy="120" r="10" fill="#cbd5e1"/><circle cx="120" cy="120" r="10" fill="#cbd5e1"/>
    </svg>
    <p style="font-size:12px; color:#64748b;">모든 간격이 같아 단순한 패턴으로만 보임.</p>
  </div>
  <div style="flex: 1; text-align: center;">
    <strong>✅ 좋은 예 (근접성을 통한 2개의 열 형성)</strong><br><br>
    <svg width="150" height="150" viewBox="0 0 150 150">
      <circle cx="30" cy="30" r="10" fill="#3b82f6"/><circle cx="60" cy="30" r="10" fill="#3b82f6"/><circle cx="120" cy="30" r="10" fill="#94a3b8"/>
      <circle cx="30" cy="75" r="10" fill="#3b82f6"/><circle cx="60" cy="75" r="10" fill="#3b82f6"/><circle cx="120" cy="75" r="10" fill="#94a3b8"/>
      <circle cx="30" cy="120" r="10" fill="#3b82f6"/><circle cx="60" cy="120" r="10" fill="#3b82f6"/><circle cx="120" cy="120" r="10" fill="#94a3b8"/>
    </svg>
    <p style="font-size:12px; color:#64748b;">거리를 조절하여 2개의 그룹(좌측 덩어리와 우측 덩어리)을 명확히 구분.</p>
  </div>
</div>

## 2. 유사성의 원리 (Law of Similarity)
크기, 모양, 색상 등이 비슷한 요소들은 서로 같은 기능을 하거나 연관된 것으로 인식됩니다.

<div style="background: #f8fafc; padding: 30px; border-radius: 8px; margin: 20px 0; text-align: center;">
  <strong>모양과 색상에 의한 기능 그룹화</strong><br><br>
  <svg width="200" height="80" viewBox="0 0 200 80">
    <rect x="20" y="20" width="40" height="40" rx="4" fill="#3b82f6"/>
    <rect x="80" y="20" width="40" height="40" rx="4" fill="#3b82f6"/>
    <circle cx="160" cy="40" r="20" fill="#ef4444"/>
  </svg>
  <p style="font-size:12px; color:#64748b;">파란색 사각형끼리 한 그룹(예: 메뉴 버튼)으로 묶이고, 빨간색 원형은 전혀 다른 별개의 기능(예: 알림 버튼)으로 즉시 인지됩니다.</p>
</div>

## 3. 공통 영역의 원리 (Law of Common Region)
근접성이나 유사성이 없더라도, 뚜렷한 경계선(Border)이나 배경색(Background)으로 요소들을 감싸면 강력한 하나의 그룹으로 인식됩니다. 현대 모바일 UI의 **카드(Card) 레이아웃**이 이 원리에 기반합니다.

<div style="background: #f8fafc; padding: 30px; border-radius: 8px; margin: 20px 0; text-align: center;">
  <div style="display: flex; gap: 20px; justify-content: center;">
    <div style="background: white; border: 1px solid #cbd5e1; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
      <div style="width: 100px; height: 100px; background: #e2e8f0; border-radius: 4px; margin-bottom: 10px;"></div>
      <div style="width: 80px; height: 12px; background: #94a3b8; margin-bottom: 5px;"></div>
      <div style="width: 50px; height: 12px; background: #cbd5e1;"></div>
    </div>
    <div style="background: white; border: 1px solid #cbd5e1; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
      <div style="width: 100px; height: 100px; background: #e2e8f0; border-radius: 4px; margin-bottom: 10px;"></div>
      <div style="width: 80px; height: 12px; background: #94a3b8; margin-bottom: 5px;"></div>
      <div style="width: 50px; height: 12px; background: #cbd5e1;"></div>
    </div>
  </div>
  <p style="font-size:12px; color:#64748b; margin-top:15px;">이미지, 제목, 내용이 서로 다르더라도 <b>하나의 공통된 하얀 박스</b> 안에 갇혀있기 때문에 완벽한 한 덩어리(카드)로 묶입니다.</p>
</div>

---
**관련 문서**
- [[BASIS_01_laws]] (디자인의 법칙)
- [[LAYOUT_01_artboard_and_margin]] (여백의 기술)
- [[LAYOUT_05_sorting]] (정렬과 맞춤)