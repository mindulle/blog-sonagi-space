[dart:io](../dart-io/dart-io-library){._links-link}

stdout top-level property
=========================

::: {#getter .section .multi-line-signature}
[Stdout](stdout-class) stdout
:::

The standard output stream of data written by this program.

The `addError` API is inherited from `StreamSink` and calling it will
result in an unhandled asynchronous error unless there is an error
handler on `done`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stdout get stdout {
  return IOOverrides.current?.stdout ?? _stdout;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/stdout.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/processresult/stdout.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

stdout property
===============

::: {.section .multi-line-signature}
dynamic stdout

::: {.features}
final
:::
:::

Standard output from the process. The value used for the
`stdoutEncoding` argument to `Process.run` determines the type. If
`null` was used, this value is of type `List<int>` otherwise it is of
type `String`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final stdout;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ProcessResult/stdout.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/iooverrides/stdout.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

stdout property
===============

::: {#getter .section .multi-line-signature}
[Stdout](../stdout-class) stdout
:::

The standard output stream of data written by this program.

When this override is installed, this getter overrides the behavior of
the top-level `stdout` getter.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stdout get stdout {
  return _stdout;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/IOOverrides/stdout.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/process/stdout.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

stdout property
===============

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>\>
stdout
:::

The standard output stream of the process as a `Stream`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<List<int>> get stdout;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Process/stdout.html>
:::
