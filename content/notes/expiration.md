[dart:html](../../dart-html/dart-html-library){._links-link}

expiration property
===================

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? expiration
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get expiration native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaKeySession/expiration.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Expiration.md)

# Expiration

Redis key expiration allows you to set a time-to-live (TTL) for keys, automatically deleting them after a specified duration. This can be achieved using commands like `EXPIRE`, which sets the expiration time in seconds, or `PEXPIRE`, which uses milliseconds for finer granularity. You can also use `S
ET` with the EX argument to set a key with a value and expiration in a single command. Expired keys are removed during normal operations, such as when accessed or during periodic cleanup. This feature
 is useful for managing memory efficiently and for scenarios like session management or caching where temporary data storage is needed.

Learn more from the following resources:

- [@official@PEXPIRE](https://redis.io/docs/latest/commands/pexpire/)
- [@official@EXPIRE](https://redis.io/docs/latest/commands/expire/)

## 관련 로드맵
- [[Redis|redis]]
