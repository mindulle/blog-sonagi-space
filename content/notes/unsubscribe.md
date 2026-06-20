[dart:html](../../dart-html/dart-html-library){._links-link}

unsubscribe method
==================

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[bool](../../dart-core/bool-class)\>
unsubscribe()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<bool> unsubscribe() =>
    promiseToFuture<bool>(JS("", "#.unsubscribe()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PushSubscription/unsubscribe.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/UNSUBSCRIBE.md)

# UNSUBSCRIBE

The UNSUBSCRIBE command unsubscribes the client for the given channels, or all channels if none are specifically stated.

Learn more from the following resources:

- [@official@UNSUBSCRIBE](https://redis.io/docs/latest/commands/unsubscribe/)

## 관련 로드맵
- [[Redis|redis]]
