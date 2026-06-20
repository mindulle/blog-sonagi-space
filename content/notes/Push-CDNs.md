---
title: Push CDNs
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/push-cdns@uIerrf_oziiLg-KEyz8WM.md
---

# Push CDNs

Push CDNs receive new content whenever changes occur on your server. You take full responsibility for providing content, uploading directly to the CDN and rewriting URLs to point to the CDN. You can configure when content expires and when it is updated. Content is uploaded only when it is new or cha
nged, minimizing traffic, but maximizing storage.

Sites with a small amount of traffic or sites with content that isn't often updated work well with push CDNs. Content is placed on the CDNs once, instead of being re-pulled at regular intervals.

Visit the following resources to learn more:

- [@opensource@Introduction to CDNs](https://github.com/donnemartin/system-design-primer#content-delivery-network)

## 관련 로드맵
- [[System Design|System Design]]
