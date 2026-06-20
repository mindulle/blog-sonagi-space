---
title: Detached HEAD
tags: [concept, git-github]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/git-github/content/detached-head@0cLf7FiI9CX--UX45sm2f.md
---

# Detached HEAD

In Git, a detached head occurs when you check out a commit directly using its hash instead of a branch name. This leaves your repository's HEAD pointer pointing directly at that commit, rather than being linked to a specific branch. To view the history and changes made in a detached head, use `git log` or `git show`. If you want to see the differences between the current detached head and another branch, use `git diff <branch>`. A detached head can be a useful temporary state for exploring specific commits or features, but it's essential to merge those changes back into a branch before sharing them with others.

Visit the following resources to learn more:

- [@article@How to resolve detached HEAD state in Git](https://graphite.dev/guides/how-to-resolve-detached-head-state-in-git)
- [@video@Head & Detached Head](https://www.youtube.com/watch?v=HvDjbAa9ZsY)

## 관련 로드맵
- [[git-github|git-github]]
