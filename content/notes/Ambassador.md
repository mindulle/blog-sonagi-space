---
title: Ambassador
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/ambassador@Hja4YF3JcgM6CPwB1mxmo.md
---

# Ambassador

Create helper services that send network requests on behalf of a consumer service or application. An ambassador service can be thought of as an out-of-process proxy that is co-located with the client.

This pattern can be useful for offloading common client connectivity tasks such as monitoring, logging, routing, security (such as TLS), and resiliency patterns in a language agnostic way. It is often used with legacy applications, or other applications that are difficult to modify, in order to exte
nd their networking capabilities. It can also enable a specialized team to implement those features.

Visit the following resources to learn more:

- [@article@Ambassador pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/ambassador)

## 관련 로드맵
- [[System Design|System Design]]
