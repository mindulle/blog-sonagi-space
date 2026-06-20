[dart:html](../../dart-html/dart-html-library){._links-link}

subscribe method
================

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[PushSubscription](../pushsubscription-class)\>
subscribe(

1.  \[[Map](../../dart-core/map-class)? options\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<PushSubscription> subscribe([Map? options]) {
  var options_dict = null;
  if (options != null) {
    options_dict = convertDartToNative_Dictionary(options);
  }
  return promiseToFuture<PushSubscription>(
      JS("creates:PushSubscription;", "#.subscribe(#)", this, options_dict));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PushManager/subscribe.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/SUBSCRIBE.md)

# SUBSCRIBE

The SUBSCRIBE command subscribes the client to the channels specified, once subscribed the client enters a state where it is not supposed to issue any other commands, except from those in the SUBSCRIBE subset i.e. SSUBSCRIBE, PSUBSCRIBE etc.

Learn more from the following resources:

- [@official@SUBSCRIBE](https://redis.io/docs/latest/commands/subscribe/)

## 관련 로드맵
- [[Redis|redis]]
