[dart:io](../dart-io/dart-io-library){._links-link}

stderr top-level property
=========================

::: {#getter .section .multi-line-signature}
[Stdout](stdout-class) stderr
:::

The standard output stream of errors written by this program.

The `addError` API is inherited from `StreamSink` and calling it will
result in an unhandled asynchronous error unless there is an error
handler on `done`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stdout get stderr {
  return IOOverrides.current?.stderr ?? _stderr;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/stderr.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/processresult/stderr.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

stderr property
===============

::: {.section .multi-line-signature}
dynamic stderr

::: {.features}
final
:::
:::

Standard error from the process. The value used for the `stderrEncoding`
argument to `Process.run` determines the type. If `null` was used, this
value is of type `List<int>` otherwise it is of type `String`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final stderr;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ProcessResult/stderr.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/iooverrides/stderr.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

stderr property
===============

::: {#getter .section .multi-line-signature}
[Stdout](../stdout-class) stderr
:::

The standard output stream of errors written by this program.

When this override is installed, this getter overrides the behavior of
the top-level `stderr` getter.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stdout get stderr {
  return _stderr;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/IOOverrides/stderr.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/process/stderr.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

stderr property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>\>
stderr
:::

The standard error stream of the process as a `Stream`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<List<int>> get stderr;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Process/stderr.html>
:::
