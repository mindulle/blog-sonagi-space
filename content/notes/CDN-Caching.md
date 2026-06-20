---
title: CDN Caching
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/cdn-caching@Kisvxlrjb7XnKFCOdxRtb.md
---

# CDN Caching

A Content Delivery Network (CDN) is a distributed network of servers that are strategically placed in various locations around the world. The main purpose of a CDN is to serve content to end-users with high availability and high performance by caching frequently accessed content on servers that are 
closer to the end-users.

When a user requests content from a website that is using a CDN, the CDN will first check if the requested content is available in the cache of a nearby server. If the content is found in the cache, it is served to the user from the nearby server. If the content is not found in the cache, it is requ
ested from the origin server (the original source of the content) and then cached on the nearby server for future requests.

CDN caching can significantly improve the performance and availability of a website by reducing the distance that data needs to travel, reducing the load on the origin server, and allowing for faster delivery of content to end-users.

## 관련 로드맵
- [[System Design|System Design]]
