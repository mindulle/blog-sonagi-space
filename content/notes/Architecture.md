---
title: Architecture
tags: [concept, spring-boot]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/spring-boot/content/architecture@yuXN-rD4AyyPYUYOR50L_.md
---

# Architecture

Spring Boot follows a layered architecture in which each layer communicates with the layer directly below or above (hierarchical structure) it. The four layers in Spring Boot are as follows:

*   **Presentation Layer**: handles the HTTP requests, translates the JSON parameter to object, and authenticates the request and transfer it to the business layer.
*   **Business Layer**: The business layer handles all the business logic. It consists of service classes and uses services provided by data access layers. It also performs authorization and validation.
*   **Persistence Layer**: The persistence layer contains all the storage logic and translates business objects from and to database rows.
*   **Database Layer**: In the database layer, CRUD (create, retrieve, update, delete) operations are performed.

Visit the following resources to learn more:

- [@article@Spring Boot Architecture – Detailed Explanation](https://www.interviewbit.com/blog/spring-boot-architecture)
- [@feed@Explore top posts about Architecture](https://app.daily.dev/tags/architecture?ref=roadmapsh)


## 관련 로드맵
- [[spring-boot|spring-boot]]


---
## 상세 내용 (Merged from /home/mindulle/projects/llm-wiki/20_Wiki/Computing/Concepts/Architecture.md)
# dApp Architecture

Traditional web applications typically rely on a centralized server to handle data storage, logic, and user authentication. In contrast, decentralized applications (dApps) shift these responsibilities to a decentralized network, often a blockchain. Instead of a single server, dApps use smart contracts deployed on the blockchain to manage data and logic. The frontend of a dApp, which users interact with, can still be hosted on traditional servers or decentralized storage solutions, but the core functionality is executed and verified on the blockchain, making it more transparent and resistant to censorship.

Visit the following resources to learn more:

- [@article@The Architecture of a Web 3.0 application](https://www.preethikasireddy.com/post/the-architecture-of-a-web-3-0-application)
- [@video@Blockchain Development: Dapp Architecture](https://youtu.be/KBSq8-LnUDI?t=286)
- [@feed@Explore top posts about Architecture](https://app.daily.dev/tags/architecture?ref=roadmapsh)

## 관련 로드맵
- [[blockchain|blockchain]]