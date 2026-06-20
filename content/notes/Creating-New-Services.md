---
title: Creating New Services
tags: [concept, linux]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/linux/content/creating-new-services@34UUrc8Yjc_8lvTL8itc3.md
---

# Creating Services

Creating Linux services involves setting up background applications using systemd service files. Services run continuously performing essential tasks like web servers, databases, and mail servers. Create `.service` files in `/etc/systemd/system/` with Unit, Service, and Install sections. Control ser
vices using `systemctl` commands. Best practice: avoid running services as root for security.

Visit the following resources to learn more:

- [@article@How to Create a systemd Service in Linux](https://linuxhandbook.com/create-systemd-services/)
- [@article@A Beginner's Guide to Creating Linux Services](https://www.fosslinux.com/111815/a-guide-to-creating-linux-services-with-systemd.htm)

## 관련 로드맵
- [[Linux|linux]]
