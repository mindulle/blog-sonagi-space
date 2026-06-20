---
title: Expiring
tags: [concept, mongodb]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/mongodb/content/expiring@butGgZXGPTZI-sWx24bOr.md
---

# Expiring

Expiring indexes (TTL - Time To Live) in MongoDB automatically delete documents from a collection after a specified period, making them ideal for managing time-sensitive data like session information, log entries, temporary caches, or any data that becomes obsolete after a certain duration. These in
dexes are created on date fields and use a background process that runs every 60 seconds to remove expired documents, helping maintain optimal collection size and performance by preventing the accumul
ation of outdated data. TTL indexes are particularly useful for applications that generate large volumes of transient data, as they provide an automated cleanup mechanism that reduces storage costs and improves query performance without requiring manual intervention or complex application logic to h
andle data expiration.

Visit the following resources to learn more:

- [@official@Expire Data from Collections by Setting TTL](https://www.mongodb.com/docs/manual/tutorial/expire-data/)
- [@article@Understanding TTL in MongoDB](https://medium.com/@darshitanjaria/understanding-ttl-in-mongodb-automatically-expiring-documents-e8b1defc1158)
- [@article@Understanding MongoDB Indexes and Expiry](https://stenzr.medium.com/understanding-mongodb-indexes-and-expiry-019831790542)

## 관련 로드맵
- [[MongoDB|mongodb]]
