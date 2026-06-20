[dart:io](../../dart-io/dart-io-library){._links-link}

errorCode property
==================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) errorCode

::: {.features}
final
:::
:::

Error code supplied by the operating system.

Will have the value [OSError.noErrorCode](noerrorcode-constant) if there
is no error code associated with the error.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final int errorCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/OSError/errorCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-developer/serviceextensionresponse/errorcode.md)
[dart:developer](../../dart-developer/dart-developer-library){._links-link}

errorCode property
==================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class)? errorCode

::: {.features}
final
:::
:::

The error code associated with a failed service protocol extension RPC.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final int? errorCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-developer/ServiceExtensionResponse/errorCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/processexception/errorcode.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

errorCode property
==================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) errorCode

::: {.features}
final
:::
:::

The OS error code for the process exception, if any.

The value is zero if no OS error code was available.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final int errorCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ProcessException/errorCode.html>
:::
