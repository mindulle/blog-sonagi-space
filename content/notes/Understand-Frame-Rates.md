---
title: Understand Frame Rates
tags: [concept, react-native]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/react-native/content/understand-frame-rates@1U3AiCDWEVEKsofWtqavi.md
---

# Understand Frame Rates

Frame rates represent the number of frames (or images) displayed per second in an animation or video. The performance of a React Native application can be highly impacted by the frame rate, so it is important to optimize your application for the best possible user experience. Higher frame rates prov
ide smoother animations, but may require more system resources. To achieve the desired frame rate, the application should ensure that each frame is computed and rendered within the time budget.

To achieve high frame rates and smooth animations, developers can utilize the `Animated` library, which offers methods and components for efficient animation management. For instance, the library allows for declarative animation definitions, minimizes unnecessary render cycles, and enables the use o
f the native driver to offload animations from the JavaScript thread. By adhering to best practices and leveraging the `Animated` library, developers can enhance their React Native applications' perfo
rmance and deliver high-quality animations.

## 관련 로드맵
- [[React Native|react-native]]
