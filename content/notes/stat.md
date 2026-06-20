[dart:io](../../dart-io/dart-io-library){._links-link}

stat method
===========

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[FileStat](../filestat-class)\>
stat(

1.  [String](../../dart-core/string-class) path

)
:::

Asynchronously calls the operating system\'s `stat()` function (or
equivalent) on `path`.

If `path` is a symbolic link then it is resolved and results for the
resulting file are returned.

Returns a [Future](../../dart-async/future-class) which completes with
the same results as [statSync](statsync).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Future<FileStat> stat(String path) {
  final IOOverrides? overrides = IOOverrides.current;
  if (overrides == null) {
    return _stat(path);
  }
  return overrides.stat(path);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileStat/stat.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/filesystementity/stat.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

stat method
===========

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[FileStat](../filestat-class)\>
stat()
:::

Calls the operating system\'s `stat()` function on [path](path).

Identical to `FileStat.stat(this.path)`.

Returns a `Future<FileStat>` object containing the data returned by
`stat()`.

If [path](path) is a symbolic link then it is resolved and results for
the resulting file are returned.

If the call fails, completes the future with a `FileStat` object with
`.type` set to
[FileSystemEntityType.notFound](../filesystementitytype/notfound-constant)
and the other fields invalid.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<FileStat> stat() => FileStat.stat(path);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileSystemEntity/stat.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/iooverrides/stat.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

stat method
===========

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[FileStat](../filestat-class)\>
stat(

1.  [String](../../dart-core/string-class) path

)
:::

Asynchronously returns `FileStat` information for `path`.

When this override is installed, this function overrides the behavior of
`FileStat.stat()`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<FileStat> stat(String path) {
  return FileStat._stat(path);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/IOOverrides/stat.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtclegacystatsreport/stat.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

stat method
===========

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) stat(

1.  [String](../../dart-core/string-class) name

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String stat(String name) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcLegacyStatsReport/stat.html>
:::
