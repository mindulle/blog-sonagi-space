[dart:io](../../dart-io/dart-io-library){._links-link}

OSError constructor
===================

::: {.section .multi-line-signature}
const OSError(

1.  \[[String](../../dart-core/string-class) message = \"\",
2.  [int](../../dart-core/int-class) errorCode = noErrorCode\]

)
:::

Creates an OSError object from a message and an errorCode.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@pragma("vm:entry-point")
const OSError([this.message = "", this.errorCode = noErrorCode]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/OSError/OSError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/socketexception/oserror.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

osError property
================

::: {.section .multi-line-signature}
[OSError](../oserror-class)? osError

::: {.features}
final
:::
:::

The underlying OS error.

If this exception is not thrown due to an OS error, the value is `null`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final OSError? osError;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/SocketException/osError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/filesystemexception/oserror.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

osError property
================

::: {.section .multi-line-signature}
[OSError](../oserror-class)? osError

::: {.features}
final
:::
:::

The underlying OS error.

Can be `null` if the exception is not raised due to an OS error.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final OSError? osError;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileSystemException/osError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/stdoutexception/oserror.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

osError property
================

::: {.section .multi-line-signature}
[OSError](../oserror-class)? osError

::: {.features}
final
:::
:::

The underlying OS error, if available.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final OSError? osError;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/StdoutException/osError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/stdinexception/oserror.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

osError property
================

::: {.section .multi-line-signature}
[OSError](../oserror-class)? osError

::: {.features}
final
:::
:::

The underlying OS error, if available.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final OSError? osError;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/StdinException/osError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/tlsexception/oserror.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

osError property
================

::: {.section .multi-line-signature}
[OSError](../oserror-class)? osError

::: {.features}
final
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final OSError? osError;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/TlsException/osError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/signalexception/oserror.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

osError property
================

::: {.section .multi-line-signature}
dynamic osError

::: {.features}
final
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final osError;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/SignalException/osError.html>
:::
