[dart:html](../../dart-html/dart-html-library){._links-link}

onTimeout property
==================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[ProgressEvent](../progressevent-class)\>
onTimeout
:::

Stream of `timeout` events handled by this
[HttpRequestEventTarget](../httprequesteventtarget-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<ProgressEvent> get onTimeout => timeoutEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HttpRequestEventTarget/onTimeout.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpsession/ontimeout.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

onTimeout property
==================

::: {#setter .section .multi-line-signature}
void onTimeout=(void callback())
:::

Sets a callback that will be called when the session is timed out.

Calling this again will overwrite the previous value.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set onTimeout(void Function() callback);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpSession/onTimeout.html>
:::
