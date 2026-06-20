---
title: Claim Check
tags: [concept, system-design]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/system-design/content/claim-check@kl4upCnnZvJSf2uII1Pa0.md
---

# Claim Check

Split a large message into a claim check and a payload. Send the claim check to the messaging platform and store the payload to an external service. This pattern allows large messages to be processed, while protecting the message bus and the client from being overwhelmed or slowed down. This pattern
 also helps to reduce costs, as storage is usually cheaper than resource units used by the messaging platform.

Visit the following resources to learn more:

- [@article@Claim Check - Cloud Design patterns](https://learn.microsoft.com/en-us/azure/architecture/patterns/claim-check)

## 관련 로드맵
- [[System Design|System Design]]
