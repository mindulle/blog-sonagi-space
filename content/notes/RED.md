---
title: RED
tags: [concept, postgresql-dba]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/postgresql-dba/content/red@qBkpTmfbyCv2L-OJW9pPI.md
---

# Troubleshooting Methods: Analyzing 'red' Situations

The acronym stands for Rate, Errors, and Duration. These are request-scoped, not resource-scoped as the USE method is. Duration is explicitly taken to mean distributions, not averages.

The Rate is the number of requests per second. The Errors is the number of requests that failed. The Duration is the distribution of request durations.

The Red Method is a methodology for analyzing the performance of any system. It directs the construction of a checklist, which for server analysis can be used for quickly identifying resource bottlenecks or errors. It begins by posing questions, and then seeks answers, instead of beginning with give
n metrics (partial answers) and trying to work backwards.

Learn more from the following resources:

- [@article@The RED Method: A New Approach to Monitoring Microservices](https://thenewstack.io/monitoring-microservices-red-method)
- [@article@PostgreSQL, RED, Golden Signals](https://dataegret.com/2020/10/postgresql-red-golden-signals-getting-started/)

## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
