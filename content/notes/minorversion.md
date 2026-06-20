[dart:developer](../../dart-developer/dart-developer-library){._links-link}

minorVersion property
=====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) minorVersion

::: {.features}
final
:::
:::

The minor version of the protocol. If the running Dart environment does
not support the service protocol, this is 0.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final int minorVersion = _getServiceMinorVersion();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-developer/ServiceProtocolInfo/minorVersion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/nativeapi/minorversion.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

minorVersion property
=====================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) minorVersion

::: {.features}
\@Since(\'2.9\')
:::
:::

On backwards compatible changes the minor version is increased.

The versioning covers the API surface in `dart_api_dl.h`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@Since('2.9')
external static int get minorVersion;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/NativeApi/minorVersion.html>
:::
