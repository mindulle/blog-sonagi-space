---
title: Type Declarations
tags: [concept, php]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/php/content/type-declarations@sPW-Ti2VyNYzxq6EYkbn7.md
---

# Type Declarations

Type declarations, also known as type hints, are a feature in PHP that provides you options to specify the type of variable that a function is expected to receive or the type of value that it should return. Not only does it help to debug code quickly, it also makes the code more readable. In PHP, type declarations can be for both parameters in a function (parameter type declarations) and return values from a function (return type declarations). They can apply to classes, interfaces, callable, and scalar types (int, float, string, bool).

Here's an example:

    function add(int $a, int $b): int {
        return $a + $b;
    }
    
    echo add(1, 2);  // prints: 3
    

In this example, the function 'add' only accepts integers and also returns an integer.

Visit the following resources to learn more:

- [@official@Type Declarations](https://www.php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration)

## 관련 로드맵
- [[PHP|php]]
