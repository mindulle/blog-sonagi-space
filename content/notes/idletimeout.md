[dart:io](../../dart-io/dart-io-library){._links-link}

idleTimeout property
====================

::: {.section .multi-line-signature}
[Duration](../../dart-core/duration-class)? idleTimeout

::: {.features}
read / write
:::
:::

Gets or sets the timeout used for idle keep-alive connections. If no
further request is seen within [idleTimeout](idletimeout) after the
previous request was completed, the connection is dropped.

Default is 120 seconds.

Note that it may take up to `2 * idleTimeout` before a idle connection
is aborted.

To disable, set [idleTimeout](idletimeout) to `null`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Duration? idleTimeout = const Duration(seconds: 120);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpServer/idleTimeout.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpclient/idletimeout.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

idleTimeout property
====================

::: {.section .multi-line-signature}
[Duration](../../dart-core/duration-class) idleTimeout

::: {.features}
read / write
:::
:::

Gets and sets the idle timeout of non-active persistent (keep-alive)
connections.

The default value is 15 seconds.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Duration idleTimeout = const Duration(seconds: 15);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpClient/idleTimeout.html>
:::
