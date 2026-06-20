---
title: "Quantization-Aware Training (QAT)"
tags: ["AI", "Optimization", "Model-Compression", "QAT"]
source: "[[AI뉴스 - 앤트로픽 재귀개선...]]"
created: 2026-06-10
---

# Quantization-Aware Training (QAT)

AI 모델 학습 과정에서 가중치(Weights)의 정밀도를 낮추는 양자화(Quantization)를 미리 고려하여 학습함으로써, 모델 크기를 줄이면서도 성능 하락을 최소화하는 기술입니다.

## 核心 (Core Insight)
- **Gemma 4 & QAT**: 최근 구글의 Gemma 등 경량화 모델에서 12B급 성능을 유지하면서도 실제 구동 부하를 줄이기 위해 적극 활용됨.
- **이점**: 온디바이스 AI(On-device AI) 환경에서 고성능 LLM을 구동 가능하게 함.

## 관련 개념
- [[Model Quantization]]
- [[On-device AI]]
- [[Gemma (Google)]]

---
*참조: [[AI뉴스 - 앤트로픽 재귀개선, 컴퓨텍스 엔비디아, RTX Spark, 젠슨황 한국, MS Build 발표, Gemma 4 12B 및 QAT, OpenAI Sites 등 - YouTube]]*
