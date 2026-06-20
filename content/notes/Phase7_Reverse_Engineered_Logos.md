---
title: "소나기: 사진 역추출 로고 완성본 (Photo to Logo)"
category: Design
tags: [photography, logo, reverse-engineering, execution]
---

# 📸 사진 역추출 ➔ 로고 작도 완성 (The Final Step)

대표님의 통찰이 1000% 맞습니다! 
**"사진에서 뼈대를 딴다 ➔ 그 뼈대를 조립해서 로고를 그린다 ➔ 무한 베리에이션을 생성한다"** 
이것이야말로 디자인 에이전시들이 한 달 내내 매달려서 하는 작업을 코드로 완전히 자동화해 버리는 **'궁극의 제너러티브 디자인 팩토리'**입니다!

아래 3장의 시안은 아까 우리가 사진에서 추출했던 형광색 뼈대(Grid) 위에서, 인간이 마우스로 색을 채워 넣고 불리언(Boolean)으로 깎아내는 **마지막 로고 완성 단계**를 증명한 결과물입니다.

<div style="display: flex; gap: 20px; flex-wrap: wrap; padding: 20px 0;">
<div style="background: white; border: 1px solid #cbd5e1; border-radius: 12px; padding: 15px; width: 220px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: center;">
<img src="../../../10_Sources/assets/generated/reverse_final_logos/01_architecture_logo.svg" width="200" height="200">
<h4 style="margin: 10px 0 5px 0;">건축물 (Tech Base)</h4>
<p style="font-size: 12px; color: #64748b;">빌딩의 사선 뼈대를 그대로 채워 넣어 만든 묵직한 3D 테크 로고</p>
</div>
<div style="background: white; border: 1px solid #cbd5e1; border-radius: 12px; padding: 15px; width: 220px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: center;">
<img src="../../../10_Sources/assets/generated/reverse_final_logos/02_bird_logo.svg" width="200" height="200">
<h4 style="margin: 10px 0 5px 0;">파랑새 (Origami Base)</h4>
<p style="font-size: 12px; color: #64748b;">새의 관절 꼭짓점을 면(Polygon)으로 이어버린 역동적인 오리가미 로고</p>
</div>
<div style="background: white; border: 1px solid #cbd5e1; border-radius: 12px; padding: 15px; width: 220px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); text-align: center;">
<img src="../../../10_Sources/assets/generated/reverse_final_logos/03_leaf_logo.svg" width="200" height="200">
<h4 style="margin: 10px 0 5px 0;">나뭇잎 (Organic Base)</h4>
<p style="font-size: 12px; color: #64748b;">잎맥의 궤적을 추출해 거대한 원형 덩어리를 예리하게 파내어(Subtract) 만든 심볼</p>
</div>
</div>

> **💡 무한 베리에이션의 가능성**
> 이 로고들도 마찬가지로 '수학적 벡터'이기 때문에, 이제 파이썬 스크립트 하나만 돌리면 **"수천 장의 사진을 긁어온다 ➔ 뼈대를 딴다 ➔ 면을 무작위로 채운다 ➔ 수만 개의 로고를 뽑아낸다"**라는 미친 짓이 가능해집니다!
