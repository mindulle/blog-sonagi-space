[dart:developer](../../dart-developer/dart-developer-library){._links-link}

majorVersion property
=====================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) majorVersion

::: {.features}
final
:::
:::

The major version of the protocol. If the running Dart environment does
not support the service protocol, this is 0.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final int majorVersion = _getServiceMajorVersion();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-developer/ServiceProtocolInfo/majorVersion.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/nativeapi/majorversion.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

majorVersion property
=====================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) majorVersion

::: {.features}
\@Since(\'2.9\')
:::
:::

On breaking changes the major version is increased.

The versioning covers the API surface in `dart_api_dl.h`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@Since('2.9')
external static int get majorVersion;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/NativeApi/majorVersion.html>
:::
