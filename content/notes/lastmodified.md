[dart:io](../../dart-io/dart-io-library){._links-link}

lastModified method
===================

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[DateTime](../../dart-core/datetime-class)\>
lastModified()
:::

Get the last-modified time of the file.

Returns a `Future<DateTime>` that completes with the date and time when
the file was last modified, if the information is available.

Throws a [FileSystemException](../filesystemexception-class) if the
operation fails.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<DateTime> lastModified();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/File/lastModified.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/htmldocument/lastmodified.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

lastModified property
=====================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? lastModified
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get lastModified => _lastModified;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HtmlDocument/lastModified.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/file/lastmodified.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

lastModified property
=====================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? lastModified
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get lastModified native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/File/lastModified.html>
:::
