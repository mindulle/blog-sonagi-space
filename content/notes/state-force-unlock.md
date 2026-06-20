---
title: state force-unlock
tags: [concept, terraform]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/terraform/content/state-force-unlock@Trpi2ZlnXZVYJCibE2bQ8.md
---

# state force-unlock

The terraform `state force-unlock` command in Terraform is used to manually release a stuck state lock. State locking is a mechanism that prevents concurrent operations on the same state, but occasionally a lock may not be properly released due to crashes or network issues. This command allows admin
istrators to forcibly remove the lock, enabling further Terraform operations to proceed. It should be used with extreme caution, as it can lead to state corruption if multiple users are attempting to 
modify the state simultaneously. Before using force-unlock, it's crucial to ensure that no other Terraform operations are genuinely in progress. This command is typically a last resort for resolving locking issues and should only be employed when certain that the lock is erroneously held and no conf
licting operations are ongoing.

Learn more from the following resources:

- [@official@Command: force-unlock](https://developer.hashicorp.com/terraform/cli/commands/force-unlock)
- [@article@Terraform force-unlock command](https://spacelift.io/blog/terraform-force-unlock)
- [@video@Terraform — Force Unlock](https://www.youtube.com/watch?v=qVs9pLaXSeg)

## 관련 로드맵
- [[Terraform|terraform]]
