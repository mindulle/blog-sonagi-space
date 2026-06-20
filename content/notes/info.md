[dart:html](../../dart-html/dart-html-library){._links-link}

info method
===========

::: {.section .multi-line-signature}
void info(

1.  [Object](../../dart-core/object-class)? arg

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void info(Object? arg) =>
    _isConsoleDefined ? JS('void', 'window.console.info(#)', arg) : null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Console/info.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/INFO.md)

# INFO

`INFO` command that provides detailed information and statistics about the server, including memory usage, CPU load, connected clients, replication status, and more. It can be called without arguments to get a full overview or with specific sections (e.g., `INFO memory`) to retrieve targeted data. T
his command is useful for monitoring and debugging Redis instances, helping administrators understand the server's current state and performance metrics.

Learn more from the following resources:

- [@official@INFO](https://redis.io/docs/latest/commands/info/)

## 관련 로드맵
- [[Redis|redis]]
