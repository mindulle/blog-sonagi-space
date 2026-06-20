---
title: PHP-FPM
tags: [concept, php]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/php/content/php-fpm@AoGS-5MSkp8gtJFQVPSBE.md
---

# PHP-FPM

PHP-FPM, or PHP FastCGI Process Manager, is a robust and efficient way to serve PHP applications. It dramatically improves the speed and processing efficiency of PHP apps by isolating each request, thus preventing jobs from interfering with each other. With PHP-FPM, your server can handle more simul
taneous visitors without a slowdown. For example, to start using PHP-FPM with NGINX, you may include this configuration in your NGINX server block:

    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
    

Here `$uri` is the incoming request and `fastcgi_pass` should be the location where PHP-FPM listens.

Visit the following resources to learn more:

- [@official@PHP FPM](https://www.php.net/manual/en/install.fpm.php)

## 관련 로드맵
- [[PHP|php]]
