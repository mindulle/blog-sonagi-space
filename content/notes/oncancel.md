[dart:async](../../dart-async/dart-async-library){._links-link}

onCancel property
=================

::: {.section .multi-line-signature}
([FutureOr](../futureor-class)\<void\> Function?()?) onCancel

::: {.features}
read / write
:::
:::

The callback which is called when the stream is canceled.

May be set to `null`, in which case no callback will happen.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
abstract FutureOr<void> Function()? onCancel;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamController/onCancel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/animation/oncancel.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onCancel property
=================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onCancel
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onCancel => cancelEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Animation/onCancel.html>
:::
