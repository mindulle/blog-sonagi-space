---
title: git log options
tags: [concept, git-github]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/git-github/content/git-log-options@qFEonbCMLri8iA0yONwuf.md
---

# git log options

`git log` is a command in Git that shows the commit history of your repository. It provides a detailed view of all commits, including their hashes, authors, dates, and messages.

Here are some common git log options:

- `-2`: Only show the last two commits.
- `-- <file-name>`: Show the commits that modified a specific file.
- `--all`: Show all branches in the repository.
- `--graph`: Display the commit history as a graph.
- `--pretty`: Enable clean colorized output.
- `--no-color`: Disable colorized output.
- `--stat`: Show a statistical summary of changes.
- `**-S`: Only show commits with modified files.

You can combine these options to tailor your log output to suit your needs.

For example, `git log -2 --graph` will display the last two commits in graph form.

Visit the following resources to learn more:

- [@official@Git Log](https://git-scm.com/docs/git-log)
- [@article@Git Log Cheatsheet](https://elijahmanor.com/blog/git-log)


## 관련 로드맵
- [[git-github|git-github]]
