---
title: cURL
tags: [concept, php]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/php/content/curl@KC6D81-T-FwQc7Osw1rlY.md
---

# cURL

cURL is a flexible way to make requests to external servers from within a PHP script. cURL, which stands for Client URL, is a library that facilitates various types of network communication methods based on different types of URLs. You can, for example, use cURL functions in PHP to access REST APIs,
 download files, or post form data, among other things. Here's a basic PHP cURL example where we fetch data from an API:

    $ch = curl_init();
    
    curl_setopt($ch, CURLOPT_URL, "http://example.com/api/data");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    
    $result = curl_exec($ch);
    
    if(curl_errno($ch)){
       echo 'Error:' . curl_error($ch);
    }
    
    curl_close($ch);

Visit the following resources to learn more:

- [@official@cURL](https://curl.se/)
- [@official@cURL in PHP](https://www.php.net/manual/en/book.curl.php)
- [@opensource@curl/curl](https://github.com/curl/curl)

## 관련 로드맵
- [[PHP|php]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/curl.md)

# curl

cURL is a versatile command-line tool primarily used for transferring data using various network protocols. It is widely used in cybersecurity and development for the purpose of testing and interacting with web services, APIs, and scrutinizing web application security. Curl supports various protocol
s such as HTTP, HTTPS, FTP, SCP, SFTP, and many more.

Visit the following resources to learn more:

- [@article@What is the cURL command?](https://blog.hubspot.com/website/curl-command)
- [@video@You need to know how to use cURL](https://www.youtube.com/watch?v=q2sqkvXzsw8)

## 관련 로드맵
- [[cyber-security|cyber-security]]
