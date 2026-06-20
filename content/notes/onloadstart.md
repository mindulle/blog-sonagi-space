[dart:html](../../dart-html/dart-html-library){._links-link}

onLoadStart property
====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[ProgressEvent](../progressevent-class)\>
onLoadStart
:::

Stream of `loadstart` events handled by this
[HttpRequestEventTarget](../httprequesteventtarget-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<ProgressEvent> get onLoadStart => loadStartEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HttpRequestEventTarget/onLoadStart.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/filereader/onloadstart.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onLoadStart property
====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[ProgressEvent](../progressevent-class)\>
onLoadStart
:::

Stream of `loadstart` events handled by this
[FileReader](../filereader-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<ProgressEvent> get onLoadStart => loadStartEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FileReader/onLoadStart.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/onloadstart.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onLoadStart property
====================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onLoadStart
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onLoadStart => loadStartEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onLoadStart.html>
:::
