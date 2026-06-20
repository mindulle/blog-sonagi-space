---
title: $_REQUEST
tags: [concept, php]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/php/content/_request@A6rfW4uJhyfAX2b18_EEC.md
---

# $_REQUEST

$\_REQUEST is a PHP superglobal variable that contains the contents of both $\_GET, $\_POST, and $\_COOKIE. It is used to collect data sent via both the GET and POST methods, as well as cookies. $\_REQUEST is useful if you do not care about the method used to send data, but its usage is generally di
scouraged as it could lead to security vulnerabilities. Here's a simple example:

    $name = $_REQUEST['name'];
    

This statement will store the value of the 'name' field sent through either a GET or POST method. Always remember to sanitize user input to avoid security problems.

Visit the following resources to learn more:

- [@official@$_REQUEST](https://www.php.net/manual/en/reserved.variables.request.php)

## 관련 로드맵
- [[PHP|php]]
