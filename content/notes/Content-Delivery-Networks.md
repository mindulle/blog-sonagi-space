---
title: Content Delivery Networks
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/content-delivery-networks@O730v5Ww3ByAiBSs6fwyM.md
---

# Content Delivery Networks

A content delivery network (CDN) is a globally distributed network of proxy servers, serving content from locations closer to the user. Generally, static files such as HTML/CSS/JS, photos, and videos are served from CDN, although some CDNs such as Amazon's CloudFront support dynamic content. The sit
e's DNS resolution will tell clients which server to contact.

Serving content from CDNs can significantly improve performance in two ways:

*   Users receive content from data centers close to them
*   Your servers do not have to serve requests that the CDN fulfills

Visit the following resources to learn more:

- [@opensource@Introduction to CDNs](https://github.com/donnemartin/system-design-primer#content-delivery-network)
- [@article@The Differences Between Push And Pull CDNs](http://www.travelblogadvice.com/technical/the-differences-between-push-and-pull-cdns/)
- [@article@Brief about Content delivery network](https://en.wikipedia.org/wiki/Content_delivery_network)

## 관련 로드맵
- [[System Design|System Design]]
