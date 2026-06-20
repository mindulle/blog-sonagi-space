[dart:io](../../dart-io/dart-io-library){._links-link}

isDirectory method
==================

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[bool](../../dart-core/bool-class)\>
isDirectory(

1.  [String](../../dart-core/string-class) path

)
:::

Whether `path` refers to a directory.

Checks whether `type(path)` returns
[FileSystemEntityType.directory](../filesystementitytype/directory-constant).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Future<bool> isDirectory(String path) =>
    _getType(_toUtf8Array(path), true)
        .then((type) => (type == FileSystemEntityType.directory));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileSystemEntity/isDirectory.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/filesystemevent/isdirectory.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

isDirectory property
====================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) isDirectory

::: {.features}
final
:::
:::

Is `true` if the event target was a directory.

Note that if the file has been deleted by the time the event has
arrived, this will always be `false` on Windows. In particular, it will
always be `false` for `delete` events.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final bool isDirectory;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileSystemEvent/isDirectory.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/entry/isdirectory.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

isDirectory property
====================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class)? isDirectory
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool? get isDirectory native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Entry/isDirectory.html>
:::
