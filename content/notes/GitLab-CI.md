---
title: GitLab CI
tags: [concept, terraform]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/terraform/content/gitlab-ci@fH27mGrdnkDQCrGGDFU6p.md
---

# GitLab CI

Using Terraform with GitLab CI enables automated infrastructure management within GitLab's CI/CD pipeline. A typical GitLab CI pipeline for Terraform includes stages for validation, planning, and applying changes. The pipeline can be configured to run Terraform commands automatically on code pushes 
or merge requests. GitLab CI variables are used to store sensitive information like cloud credentials securely. GitLab's native features like environments and approvals can be leveraged to manage diff
erent deployment stages and control when changes are applied.

Learn more from the following resources:

- [@official@Infrastructure as Code with Terraform and GitLab](https://docs.gitlab.com/ee/user/infrastructure/iac/)
- [@article@How to Implement GitLab CI/CD Pipeline with Terraform](https://spacelift.io/blog/gitlab-terraform)
- [@video@Automate deploying to AWS using Terraform with GitLab CICD pipeline](https://www.youtube.com/watch?v=oqOzM_WBqZc)

## 관련 로드맵
- [[Terraform|terraform]]
