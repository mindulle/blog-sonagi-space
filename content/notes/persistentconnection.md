[dart:io](../../dart-io/dart-io-library){._links-link}

persistentConnection property
=============================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) persistentConnection
:::

Gets the persistent connection state returned by the server.

If the persistent connection state needs to be set, it must be set
before the body is written to. Setting the persistent connection state
after writing to the body will throw a `StateError`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get persistentConnection;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpClientResponse/persistentConnection.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpresponse/persistentconnection.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

persistentConnection property
=============================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) persistentConnection

::: {.features}
read / write
:::
:::

Gets and sets the persistent connection state. The initial value of this
property is the persistent connection state from the request.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
late bool persistentConnection;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpResponse/persistentConnection.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpclientrequest/persistentconnection.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

persistentConnection property
=============================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) persistentConnection

::: {.features}
read / write
:::
:::

The requested persistent connection state.

The default value is `true`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool persistentConnection = true;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpClientRequest/persistentConnection.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpheaders/persistentconnection.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

persistentConnection property
=============================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) persistentConnection

::: {.features}
read / write
:::
:::

Whether the connection is persistent (keep-alive).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
late bool persistentConnection;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpHeaders/persistentConnection.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httprequest/persistentconnection.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

persistentConnection property
=============================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class) persistentConnection
:::

The persistent connection state signaled by the client.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool get persistentConnection;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpRequest/persistentConnection.html>
:::
