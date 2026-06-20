---
title: Instance Profiles
tags: [concept, aws]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/aws/content/instance-profiles@i7X1GfOx5AZYFskepW4Zr.md
---

# Instance Profiles

Instance profiles are AWS IAM entities that you can use to grant permissions to applications running on your EC2 instances. They effectively allow your instances to make secure API requests. An instance profile is essentially a container for an AWS Identity and Access Management (IAM) role that you can use to pass roles to EC2 instances at launch time. Once an IAM role is associated with an instance at launch time, we can't change the role. However, you can modify the permissions policies attached to the role, and the updated permissions do take effect immediately.

Visit the following resources to learn more:

- [@official@Instance Profiles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html)


## 관련 로드맵
- [[AWS|aws]]
