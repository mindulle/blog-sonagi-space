---
title: var_dump
tags: [concept, php]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/php/content/var_dump@JCCeVC0hOrvIeyfg1ScKA.md
---

# var_dump

Var\_dump is a built-in PHP function that's incredibly handy for debugging as it outputs the data type and value of a given variable. This includes array elements and object properties, if given such types. If you're wrangling with your PHP code and finding your variables aren't behaving as you expe
ct, using var\_dump can quickly show you what you're working with. Check out a simple usage example below:

    $myVar = array( "Hello", "World!");
    var_dump($myVar);
    

This will output the size of array and details of each element in the array.

Visit the following resources to learn more:

- [@official@var_dump](https://www.php.net/manual/en/function.var-dump.php)

## 관련 로드맵
- [[PHP|php]]
