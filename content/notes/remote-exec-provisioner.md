---
title: remote-exec provisioner
tags: [concept, terraform]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/terraform/content/remote-exec-provisioner@JQE3_KakBXZdMVP_pPFNS.md
---

# remote-exec provisioner

The remote-exec provisioner in Terraform is used to invoke scripts directly on a remote resource after it has been created. This provisioner is commonly used for tasks like software installation, configuration, or any other setup required on the newly created resource. It can run either a list of co
mmands or a script file on the remote system. The remote-exec provisioner requires a connection block to specify how to access the remote system, typically using SSH for Linux or WinRM for Windows. Wh
ile useful for initial setup tasks, it's generally recommended to use this provisioner sparingly and prefer more robust configuration management tools for complex or ongoing management tasks. Care should be taken to ensure that scripts run by remote-exec are idempotent and handle potential network i
ssues or other failures gracefully.

Learn more from the following resources:

- [@official@Remote-exec provisioner](https://developer.hashicorp.com/terraform/language/resources/provisioners/remote-exec)
- [@article@Terraform remote-exec provisioner](https://learning-ocean.com/tutorials/terraform/terraform-remote-exec-provisioner/)
- [@video@Terraform - remote-exec](https://www.youtube.com/watch?v=kjDXbGeLvRw)

## 관련 로드맵
- [[Terraform|terraform]]
