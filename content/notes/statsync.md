[dart:io](../../dart-io/dart-io-library){._links-link}

statSync method
===============

::: {.section .multi-line-signature}
[FileStat](../filestat-class) statSync(

1.  [String](../../dart-core/string-class) path

)
:::

Calls the operating system\'s `stat()` function (or equivalent) on
`path`.

If `path` is a symbolic link then it is resolved and results for the
resulting file are returned.

Returns a [FileStat](../filestat-class) object containing the data
returned by `stat()`. If the call fails, returns a
[FileStat](../filestat-class) object with [FileStat.type](type) set to
[FileSystemEntityType.notFound](../filesystementitytype/notfound-constant)
and the other fields invalid.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static FileStat statSync(String path) {
  final IOOverrides? overrides = IOOverrides.current;
  if (overrides == null) {
    return _statSyncInternal(path);
  }
  return overrides.statSync(path);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileStat/statSync.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/filesystementity/statsync.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

statSync method
===============

::: {.section .multi-line-signature}
[FileStat](../filestat-class) statSync()
:::

Synchronously calls the operating system\'s `stat()` function on
[path](path).

Identical to `FileStat.statSync(this.path)`.

Returns a [FileStat](../filestat-class) object containing the data
returned by `stat()`.

If [path](path) is a symbolic link then it is resolved and results for
the resulting file are returned.

If the call fails, returns a [FileStat](../filestat-class) object with
`.type` set to
[FileSystemEntityType.notFound](../filesystementitytype/notfound-constant)
and the other fields invalid.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
FileStat statSync() => FileStat.statSync(path);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileSystemEntity/statSync.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/iooverrides/statsync.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

statSync method
===============

::: {.section .multi-line-signature}
[FileStat](../filestat-class) statSync(

1.  [String](../../dart-core/string-class) path

)
:::

Returns [FileStat](../filestat-class) information for `path`.

When this override is installed, this function overrides the behavior of
`FileStat.statSync()`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
FileStat statSync(String path) {
  return FileStat._statSyncInternal(path);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/IOOverrides/statSync.html>
:::
