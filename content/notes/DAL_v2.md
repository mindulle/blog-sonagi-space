---
title: DAL
tags: [concept, server-side-game-developer]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/server-side-game-developer/content/dal@dt_SmZuwklLimhupvjxC1.md
---

# DAL

The term **DAL** stands for **Data Access Layer**. It represents a layer of an application that simplifies the interaction with the persistent storage of data. Typically, the DAL is implemented in a separate module, package, or library in your application that directly communicates with the database, thereby enabling the application services and modules to invoke a simple API for CRUD operations (Create, retrieve, update, and delete database entries) and database transactions. The DAL helps maintain the application’s database schema and manage connections to the database. Popular libraries and frameworks like SQLAlchemy for Python, Sequelize for Node.js, and Hibernate for Java among others provide a robust DAL implementation. These tools abstract the lower-level details of the data source into a higher-level programming interface.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]
