---
title: Intent Filters
tags: [concept, android]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/android/content/intent-filters@b-sfh6NoS-APqaNKm5L5S.md
---

# Intent Filters

`Intent Filters` in Android are essential components of the Android system where you can declare the capabilities of your activities, services, and broadcast receivers. An intent filter is an expression found in your app's manifest file, defined in the `<intent-filter>` XML element. Android uses the
se filters to determine the appropriate components for incoming intents, which can be either explicit or implicit. Your app's ability to respond to intents depends on the filters you define. The filte
rs are set of conditions comprised of `action`, `category`, and `data` which your activity or service is able to perform. If the incoming `Intent` matches with defined `Intent Filters`, Android system will permit that `Intent` to your Component (Activity, Service, or Broadcast Receiver).

Visit the following resources to learn more:

- [@official@Intent Filters](https://developer.android.com/guide/components/intents-filters)

## 관련 로드맵
- [[android|android]]
