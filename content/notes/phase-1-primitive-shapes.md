---
title: "Phase 1: Structural Prototyping (Primitive Shapes)"
category: Journal
visibility: private
tags: [pixel-art, workflow, primitive-shapes]
---

# 🎨 Phase 1: Structural Prototyping (Primitive Shapes)

Slynyrd의 픽셀 아트 파이프라인 중 **1단계: 기초 형태(Primitive Shapes)**를 구현하기 위한 가이드입니다. 

## 1. 목적 (Purpose)
- 캐릭터의 세부 묘사(눈, 옷 주름)를 배제하고 **전체적인 볼륨(Volume)과 비례(Proportion)**에만 집중합니다.
- 복잡한 픽셀 드로잉 전, AI가 인체 구조를 올바르게 인식하도록 유도하는 '설계도' 역할을 합니다.

## 2. 참조 실무 (Reference: Slynyrd)
> "Start with basic shapes (circles, rectangles) to establish the character's weight and pose before any linework begins."

## 3. ComfyUI 설정 (Phase 1 전용)

### A. 핵심 노드 구성
- **Checkpoint**: `v1-5-pruned-emaonly.safetensors` (구조적 형태를 잡기에는 기본 모델이 더 유리할 수 있음)
- **Positive Prompt**: `(primitive shapes:1.4), (3d blocks and spheres:1.3), basic human character structure, chibi proportion, simple wooden mannequin style, white background, no detail, minimalist`
- **Resolution**: 512x512

### B. 생성 전략
1. **Low Steps**: 15~20 Steps (너무 디테일해지는 것을 방지)
2. **High CFG**: 8.0 (형태의 명확성 확보)

## 4. 실행 기록 (Jenny Iteration 1.1)
- [ ] 제니의 '베레모' 볼륨을 위한 머리 위 구체(Sphere) 확인.
- [ ] 팔레트를 든 팔의 위치가 원기둥(Cylinder) 형태로 잘 배치되었는가?

---
*Next Step: 이 구조가 확정되면 Phase 2(Refining Lines)로 넘어갑니다.*
