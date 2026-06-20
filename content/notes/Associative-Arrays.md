---
title: Associative Arrays
tags: [concept, php]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/php/content/associative-arrays@i_NRsOJNNp7AOqMgu5Jg8.md
---

# Associative Arrays

Associative arrays in PHP are a type of array that uses named keys instead of numeric ones. This provides a more human-readable way to store data where each value can be accessed by its corresponding string key. An example of an associative array could be storing names as keys and their correspondin
g ages as values. Here's a brief example:

    $ages = [
       "Peter" => 35,
       "John" => 42,
       "Mary" => 27
    ];
    

In this case, to find out John's age, you would simply use `echo $ages['John']` where 'John' is the key. Associative arrays are also easy to loop through using the `foreach` construct.

Visit the following resources to learn more:

- [@official@PHP Documentation - Associative Arrays](https://www.php.net/manual/en/language.types.array.php)

## 관련 로드맵
- [[PHP|php]]
