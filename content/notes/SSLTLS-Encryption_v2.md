---
title: SSL/TLS Encryption
tags: [concept, redis]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/redis/content/ssltls-encryption@gdiWwTQg6A-BFHdQBmgmH.md
---

# SSL/TLS Encryption

SSL/TLS is supported by Redis starting with version 6 as an optional feature that needs to be enabled at compile time. TLS will add a layer to the communication stack with overheads due to the read and writes from an SSL connection and integrity checks, this will lead to a decrease of achieveable throughput.

Learn more from the following resources:

- [@official@Redis TLS Support](https://redis.io/docs/latest/operate/oss_and_stack/management/security/encryption/#getting-started)
- [@official@Transport Layer Security Documentation](https://redis.io/docs/latest/operate/rc/security/database-security/tls-ssl/)

## 관련 로드맵
- [[Redis|redis]]
