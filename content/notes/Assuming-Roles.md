---
title: Assuming Roles
tags: [concept, aws]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/aws/content/assuming-roles@0IMdO7g_5El1elvDXJJ_0.md
---

# Assuming Roles

Assuming roles in AWS allows one AWS identity to perform actions and access resources in another AWS account, without having to share security credentials. This is achieved using temporary security credentials. You assume a role by calling the `AWS Security Token Service (STS)` AssumeRole APIs, pass
ing the ARN of the role to assume. After successfully assuming a role, STS returns temporary security credentials that you can use to make requests to any AWS service. The assumed role provides specif
ic permissions that determine what the role user can and cannot do. Thus, users can switch between roles using AWS Management Console, AWS CLI, or AWS API.

Visit the following resources to learn more:

- [@official@Assuming Roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_manage-assume.html)


## 관련 로드맵
- [[AWS|aws]]
