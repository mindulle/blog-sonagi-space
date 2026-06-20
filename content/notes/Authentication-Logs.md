---
title: Authentication Logs
tags: [concept, linux]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/linux/content/auth-logs@WwybfdKuP9ogCGpT7d3NU.md
---

# Authentication Logs

Authentication logs record system login events, password changes, and sudo commands, located in `/var/log/auth.log` (Debian) or `/var/log/secure` (Red Hat/CentOS). Essential for monitoring server security, detecting brute force attacks and unauthorized access attempts. Use `tail /var/log/auth.log` t
o view recent entries. Regular analysis ensures server security and data integrity.

Visit the following resources to learn more:

- [@article@Monitoring Linux Authentication Logs](https://betterstack.com/community/guides/logging/monitoring-linux-auth-logs/)
- [@article@How to Check Linux Login History - Linux Handbook](https://linuxhandbook.com/linux-login-history/)

## 관련 로드맵
- [[Linux|linux]]
