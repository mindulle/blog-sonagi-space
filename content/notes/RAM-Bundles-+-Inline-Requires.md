---
title: RAM Bundles + Inline Requires
tags: [concept, react-native]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/react-native/content/ram-bundles--inline-requires@u5I-EOnA_yt6AQsRX-qr0.md
---

# RAM Bundles + Inline Requires

If you have a large app you may want to consider the Random Access Modules (RAM) bundle format, and using inline requires. This is useful for apps that have a large number of screens which may not ever be opened during a typical usage of the app. Generally it is useful to apps that have large amount
s of code that are not needed for a while after startup. For instance the app includes complicated profile screens or lesser used features, but most sessions only involve visiting the main screen of t
he app for updates. We can optimize the loading of the bundle by using the RAM format and requiring those features and screens inline (when they are actually used).

Visit the following resources to learn more:

- [@official@RAM Bundles and Inline Requires](https://reactnative.dev/docs/ram-bundles-inline-requires)

## 관련 로드맵
- [[React Native|react-native]]
