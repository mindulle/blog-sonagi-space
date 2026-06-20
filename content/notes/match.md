---
title: match
tags: [concept, php]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/php/content/match@3gNzX-bw2iqur7U7-_W38.md
---

# match

Match expressions are an integral feature of PHP, introduced in PHP 8.0 as an alternative to the switch statement. Compared to the switch statement, match expressions are safer since they don't require break statements and are more concise. The match expression can be an excellent tool for pattern matching. Here's an example:

    $message = match ($statusCode) {
      200, 300 => 'OK',
      400 => 'error',
      default => 'unknown status code',
    };
    

In this code, based on the value of `$statusCode`, the `match` expression assigns a specific text to the `$message`. If `$statusCode` is not 200, 300, or 400, the `default` case applies. After running the code, the `$message` variable contains the result of the `match` expression.

Visit the following resources to learn more:

- [@official@match](https://www.php.net/manual/en/control-structures.match.php)

## 관련 로드맵
- [[PHP|php]]
