---
title: stdout / stdin / stderr
tags: [concept, linux]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/linux/content/stdout--stdin--stderr@t3fxSgCgtxuMtHjclPHA6.md
---

# Stdout, Stdin, and Stderr

Linux processes use three standard data streams: STDIN (input), STDOUT (output), and STDERR (error messages). STDOUT handles normal command output while STDERR specifically handles error messages. You can redirect these streams using operators like `>` for stdout and `2>` for stderr, allowing separa
te handling of normal output and errors for better scripting and debugging.

Visit the following resources to learn more:

- [@article@Linux Fundamentals - I/O, Standard Streams, and Redirection](https://www.putorius.net/linux-io-file-descriptors-and-redirection.html)
- [@article@Understanding 'stdin', 'stdout' and 'stderr' in Linux](https://www.slingacademy.com/article/understanding-stdin-stdout-and-stderr-in-linux/)
- [@article@Working with data streams on the Linux command line](https://opensource.com/article/18/10/linux-data-streams)

## 관련 로드맵
- [[Linux|linux]]
