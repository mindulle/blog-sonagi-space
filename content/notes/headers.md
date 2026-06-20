[dart:html](../../dart-html/dart-html-library){._links-link}

headers property
================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) headers
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get headers native;
```

::: {#setter .section .multi-line-signature}
void headers=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set headers(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TableCellElement/headers.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpclientrequest/headers.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

headers property
================

::: {#getter .section .multi-line-signature}
[HttpHeaders](../httpheaders-class) headers
:::

Returns the client request headers.

The client request headers can be modified until the client request body
is written to or closed. After that they become immutable.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
HttpHeaders get headers;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpClientRequest/headers.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpresponse/headers.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

headers property
================

::: {#getter .section .multi-line-signature}
[HttpHeaders](../httpheaders-class) headers
:::

Returns the response headers.

The response headers can be modified until the response body is written
to or closed. After that they become immutable.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
HttpHeaders get headers;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpResponse/headers.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/headers/headers.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

Headers constructor
===================

::: {.section .multi-line-signature}
Headers(

1.  \[[Object](../../dart-core/object-class)? init\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
factory Headers([Object? init]) {
  if (init != null) {
    return Headers._create_1(init);
  }
  return Headers._create_2();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Headers/Headers.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpclientresponse/headers.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

headers property
================

::: {#getter .section .multi-line-signature}
[HttpHeaders](../httpheaders-class) headers
:::

Returns the client response headers.

The client response headers are immutable.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
HttpHeaders get headers;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpClientResponse/headers.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httprequest/headers.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

headers property
================

::: {#getter .section .multi-line-signature}
[HttpHeaders](../httpheaders-class) headers
:::

The request headers.

The returned [HttpHeaders](../httpheaders-class) are immutable.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
HttpHeaders get headers;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpRequest/headers.html>
:::
