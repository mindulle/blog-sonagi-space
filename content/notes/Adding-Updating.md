---
title: Adding / Updating
tags: [concept, git-github]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/git-github/content/adding--updating@x4bnsPVTiX2xOCSyrgWpF.md
---

# Adding / Updating

To add a submodule to a repository, use `git submodule add https://github.com/user/submodule-repo.git`, which is the typical format for specifying the URL of the submodule repository. This creates a new folder for the submodule and checks it out at the specified revision. To update an existing submo
dule to its latest commit, run `git submodule update`. If you want to pull in changes from upstream while keeping your submodule's history intact, use `git submodule sync` followed by `git submodule u
pdate`.

Visit the following resources to learn more:

- [@article@Git submodules](https://www.atlassian.com/git/tutorials/git-submodule)
- [@article@Working with submodules](https://github.blog/open-source/git/working-with-submodules/)

## 관련 로드맵
- [[git-github|git-github]]
