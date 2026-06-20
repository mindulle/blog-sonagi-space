[dart:html](../../dart-html/dart-html-library){._links-link}

onProgress property
===================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[ProgressEvent](../progressevent-class)\>
onProgress

::: {.features}
\@SupportedBrowser(SupportedBrowser.CHROME),
\@SupportedBrowser(SupportedBrowser.FIREFOX),
\@SupportedBrowser(SupportedBrowser.IE, \'10\'),
\@SupportedBrowser(SupportedBrowser.SAFARI)
:::
:::

Stream of `progress` events handled by this
[HttpRequestEventTarget](../httprequesteventtarget-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@SupportedBrowser(SupportedBrowser.CHROME)
@SupportedBrowser(SupportedBrowser.FIREFOX)
@SupportedBrowser(SupportedBrowser.IE, '10')
@SupportedBrowser(SupportedBrowser.SAFARI)
Stream<ProgressEvent> get onProgress => progressEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HttpRequestEventTarget/onProgress.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/applicationcache/onprogress.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onProgress property
===================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[ProgressEvent](../progressevent-class)\>
onProgress
:::

Stream of `progress` events handled by this
[ApplicationCache](../applicationcache-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<ProgressEvent> get onProgress => progressEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ApplicationCache/onProgress.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/filereader/onprogress.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onProgress property
===================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[ProgressEvent](../progressevent-class)\>
onProgress
:::

Stream of `progress` events handled by this
[FileReader](../filereader-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<ProgressEvent> get onProgress => progressEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FileReader/onProgress.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/filewriter/onprogress.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onProgress property
===================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[ProgressEvent](../progressevent-class)\>
onProgress
:::

Stream of `progress` events handled by this
[FileWriter](../filewriter-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<ProgressEvent> get onProgress => progressEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FileWriter/onProgress.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/onprogress.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onProgress property
===================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onProgress
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onProgress => progressEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onProgress.html>
:::
