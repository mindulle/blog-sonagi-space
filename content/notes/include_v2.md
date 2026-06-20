---
title: include
tags: [concept, php]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/php/content/include@hKfv7V6bl2LXssq9Ffi7C.md
---

# include

The 'include' statement in PHP is a useful method for inserting code written in one file into another. It's mainly used when the same code needs to be used in multiple files, avoiding redundancy and making code maintenance easier. If it cannot find the file, PHP will emit a warning but continue to execute the rest of the script. Here's a simple example:

    <?php
        include 'filename.php';
    ?>
    

In this code snippet, 'filename.php' is the file containing the code that you want to insert. Just replace 'filename.php' with the actual file path you want to include.

Visit the following resources to learn more:

- [@official@include](https://www.php.net/manual/en/function.include.php)

## 관련 로드맵
- [[PHP|php]]
