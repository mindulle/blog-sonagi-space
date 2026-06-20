[dart:io](../../dart-io/dart-io-library){._links-link}

hasTerminal property
====================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) hasTerminal
:::

Whether there is a terminal attached to stdin.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get hasTerminal {
  try {
    return stdioType(this) == StdioType.terminal;
  } on FileSystemException catch (_) {
    // If stdioType throws a FileSystemException, then it is not hooked up to
    // a terminal, probably because it is closed, but let other exception
    // types bubble up.
    return false;
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Stdin/hasTerminal.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/stdout/hasterminal.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

hasTerminal property
====================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) hasTerminal
:::

Whether there is a terminal attached to stdout.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get hasTerminal => _hasTerminal(_fd);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Stdout/hasTerminal.html>
:::
