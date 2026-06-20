---
title: Constants
tags: [concept, php]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/php/content/constants@VLRLymQmLfscrBfzXKvHi.md
---

# Constants

Constants in PHP are fixed values that do not change during the execution of the script. They can be handy for values that need to be reused often like a website's URL, a company's name, or even a hardcoded database connection string. Unlike variables, once a constant is defined, it cannot be undefi
ned or reassigned. Constants are case-sensitive by default but this can be overridden. They are defined using the define() function or the const keyword. For instance, you can create a constant to hol
d the value of Pi and call it in your script like this:

    define("PI", 3.14);
    echo PI; // Outputs: 3.14

Visit the following resources to learn more:

- [@official@Constants](https://www.php.net/manual/en/language.constants.php)

## 관련 로드맵
- [[PHP|php]]
