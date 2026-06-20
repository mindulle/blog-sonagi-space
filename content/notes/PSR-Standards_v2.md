---
title: PSR Standards
tags: [concept, php]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/php/content/psr-standards@3tONibbRgK7HCwGTE2Gqw.md
---

# PSR Standards

The PHP Framework Interop Group (PHP-FIG) introduced PHP Standard Recommendation (PSR) standards to provide a uniform and interoperable set of coding practices for PHP developers. PSR standards cover a variety of coding aspects such as code style (PSR-1, PSR-2), autoloading (PSR-4), and more. The PHP community widely accepts these standards contributing towards writing clean and easy-to-follow code.

Here's a snippet to illustrate the PSR-4 autoloading standards in PHP:

    // Register the autoloader
    spl_autoload_register(function ($class) {
        // Convert namespace to directory structure
        $class = str_replace('\\', DIRECTORY_SEPARATOR, $class) . '.php';
    
        // Get file if it exists
        if (file_exists($class)) {
            require $class;
        }
    });

Visit the following resources to learn more:

- [@official@PSR Standards](https://www.php-fig.org/psr/)

## 관련 로드맵
- [[PHP|php]]
