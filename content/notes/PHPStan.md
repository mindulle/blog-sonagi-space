---
title: PHPStan
tags: [concept, php]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/php/content/phpstan@12k71gNfwAcT9K5aLWgbZ.md
---

# PHPStan

PHPStan is a static analysis tool for PHP that focuses on discovering bugs in your code. As opposed to dynamic analysis which works while your program is running, static analysis examines your code without executing it. PHPStan can catch an entire class of bugs even before you write tests for the co
de, thus making it a valuable tool in PHP development. For example, PHPStan can prevent issues like accessing an undefined array key or calling a method that doesn't exist.

Here's a basic example of how you can use PHPStan:

    // install PHPStan using composer
    $ composer require --dev phpstan/phpstan
    
    // analyse your code
    $ vendor/bin/phpstan analyse src

Visit the following resources to learn more:

- [@official@PHP Stan](https://phpstan.org/user-guide/getting-started)

## 관련 로드맵
- [[PHP|php]]
