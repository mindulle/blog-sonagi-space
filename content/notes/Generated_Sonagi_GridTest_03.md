---
title: "Generated Sonagi Grid Test 03 (Advanced ControlNet)"
tags: [design, generated, controlnet, early-stopping]
---

# 3차 제어 렌더링 (Early-Stopping 기법 적용)

ControlNet이 그리드를 '색칠공부 밑그림'으로 오해하는 현상을 막기 위해, **초반 35%의 과정에서만 뼈대(Mass)를 강제하고 나머지 65%의 과정에서는 그리드를 지워버리는 고급 기법(Early Stopping)**을 적용한 결과물입니다.

(현재 P40 서버에서 렌더링 중입니다. 이미지가 완료되면 아래에 동기화됩니다.)

![[sonagi_grid_test_v3_00001_.png]]

---
* **사용한 그리드**: `apple_bite_blueprint.svg`
* **제어 기법**: ControlNet Lineart (Start: 0.0, **End: 0.35**)
* **프롬프트**: `solid forms, no outlines, modern corporate branding, flat design, soft gradient...`
