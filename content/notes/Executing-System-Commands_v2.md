---
title: Executing System Commands
tags: [concept, php]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/php/content/executing-system-commands@VhyYNGhOdKKrz_-uTkrjD.md
---

# Executing System Commands

PHP provides developers with the flexibility to invoke system commands directly from PHP scripts. This can be achieved with functions like `exec()`, `system()`, or `passthru()`, which allow your PHP script to execute system-level instructions and interact with the underlying server. This can be useful in several scenarios - for automating tasks, orchestrating system activities, or even for pulling out system information. However, it's important to use these functions with caution due to the security risks of executing system commands. Here's a simple example of using the exec() function:

    <?php
    // Outputs all lines
    exec('ls', $output);
    foreach($output as $out){
        echo $out, PHP_EOL;
    }
    ?>

Visit the following resources to learn more:

- [@official@Exec Function](https://www.php.net/manual/en/ref.exec.php)

## 관련 로드맵
- [[PHP|php]]
