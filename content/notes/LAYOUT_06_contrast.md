---
title: "대비 (Contrast)"
category: Design
tags: [layout, contrast, hierarchy, ui-ux, fundamentals]
---

# 대비 (Contrast)

대비(Contrast)는 화면에서 **"어디를 가장 먼저 봐야 하는가?"**를 결정하는 시각적 위계(Visual Hierarchy)의 핵심입니다. 차이가 뚜렷할수록 사용자의 뇌는 중요한 정보와 덜 중요한 정보를 본능적으로 구분하게 됩니다.

> **💡 핵심 원칙**: 대비를 줄 때는 소심하게 주지 마세요. 애매한 차이는 실수처럼 보입니다. **확실하고 과감하게(Dramatic)** 차이를 두어야 합니다.

## 1. 크기 대비 (Size Contrast)
가장 직관적인 방법입니다. 중요한 것은 압도적으로 크게, 덜 중요한 것은 확실히 작게 만듭니다.

<div style="display: flex; gap: 40px; margin: 20px 0; padding: 30px; background: #f8fafc; border-radius: 8px;">
  <div style="flex: 1; text-align: center;">
    <strong>❌ 나쁜 예 (애매한 크기)</strong><br><br>
    <div style="font-size: 24px; font-weight: bold; color: #334155;">결제 완료</div>
    <div style="font-size: 18px; color: #64748b; margin-top: 10px;">주문이 정상적으로 처리되었습니다.</div>
    <p style="font-size:12px; color:#94a3b8; margin-top: 15px;">제목과 본문의 크기 차이가 적어 무엇이 중요한지 확 와닿지 않습니다.</p>
  </div>
  <div style="flex: 1; text-align: center;">
    <strong>✅ 좋은 예 (과감한 크기 대비)</strong><br><br>
    <div style="font-size: 36px; font-weight: 900; color: #0f172a;">결제 완료</div>
    <div style="font-size: 14px; color: #64748b; margin-top: 10px;">주문이 정상적으로 처리되었습니다.</div>
    <p style="font-size:12px; color:#94a3b8; margin-top: 15px;">제목이 본문보다 2.5배 이상 커서 한눈에 '결제 완료'라는 핵심 상태가 파악됩니다.</p>
  </div>
</div>

## 2. 굵기와 색상 대비 (Weight & Color Contrast)
크기를 키울 수 없는 상황(예: 버튼이나 좁은 목록)에서는 폰트의 굵기(Weight)나 색상(Color)으로 강렬한 대비를 줍니다.

<div style="display: flex; gap: 40px; margin: 20px 0; padding: 30px; background: #f8fafc; border-radius: 8px;">
  <div style="flex: 1;">
    <strong>❌ 나쁜 예 (대비 부족)</strong><br><br>
    <div style="padding: 15px; border: 1px solid #cbd5e1; border-radius: 8px; background: white;">
      <div style="font-size: 16px; color: #475569; margin-bottom: 5px;">프리미엄 요금제</div>
      <div style="font-size: 20px; color: #475569;">₩ 29,000 / 월</div>
    </div>
  </div>
  <div style="flex: 1;">
    <strong>✅ 좋은 예 (굵기와 색상 대비)</strong><br><br>
    <div style="padding: 15px; border: 1px solid #cbd5e1; border-radius: 8px; background: white;">
      <div style="font-size: 14px; font-weight: bold; color: #3b82f6; margin-bottom: 5px; text-transform: uppercase;">프리미엄 요금제</div>
      <div style="font-size: 24px; font-weight: 900; color: #0f172a;">₩ 29,000 <span style="font-size: 14px; font-weight: normal; color: #94a3b8;">/ 월</span></div>
    </div>
  </div>
</div>

## 3. 형태 대비 (Shape Contrast / 폰 레스토프 효과)
비슷한 형태들 사이에 완전히 이질적인 형태가 하나 섞여 있을 때, 사람의 뇌는 그것을 가장 먼저, 그리고 가장 오래 기억합니다. 이를 인지 심리학에서는 **폰 레스토프 효과(Von Restorff Effect)**라고 부릅니다.

<div style="background: #f8fafc; padding: 30px; border-radius: 8px; margin: 20px 0; text-align: center;">
  <svg width="300" height="80" viewBox="0 0 300 80">
    <!-- 비슷한 요소들 -->
    <rect x="10" y="20" width="40" height="40" rx="4" fill="#cbd5e1"/>
    <rect x="70" y="20" width="40" height="40" rx="4" fill="#cbd5e1"/>
    <rect x="130" y="20" width="40" height="40" rx="4" fill="#cbd5e1"/>
    <!-- 이질적인 요소 (형태와 색상 대비) -->
    <circle cx="210" cy="40" r="24" fill="#ef4444"/>
    <!-- 비슷한 요소 -->
    <rect x="250" y="20" width="40" height="40" rx="4" fill="#cbd5e1"/>
  </svg>
  <p style="font-size:12px; color:#64748b; margin-top: 15px;">회색 사각형들(일반 버튼들) 사이에 있는 유일한 <b>붉은색 원형(알림 뱃지나 플로팅 액션 버튼)</b>은 시각적 주의력을 독점합니다.</p>
</div>

---
**관련 문서**
- [[LAYOUT_04_grouping]] (그룹화)
- [[LAYOUT_05_sorting]] (정렬)
- [[Von_Restorff_Effect]] (폰 레스토프 효과)
- [[COLOR_01_basics]] (배색 대비의 기본)