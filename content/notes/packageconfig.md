[dart:isolate](../../dart-isolate/dart-isolate-library){._links-link}

packageConfig property
======================

::: {#getter .section .multi-line-signature}
[Future](../../dart-async/future-class)\<[Uri](../../dart-core/uri-class)?\>
packageConfig
:::

The location of the package configuration of the current isolate, if
any.

If the isolate has not been setup for package resolution, this location
is `null`, otherwise it is a URI referencing the package config file.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external static Future<Uri?> get packageConfig;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-isolate/Isolate/packageConfig.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/platform/packageconfig.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

packageConfig property
======================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? packageConfig
:::

The `--packages` flag passed to the executable used to run the script in
this isolate.

If present, it specifies a file describing how Dart packages are looked
up.

Is `null` if there is no `--packages` flag.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static String? get packageConfig => _Platform.packageConfig;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Platform/packageConfig.html>
:::
