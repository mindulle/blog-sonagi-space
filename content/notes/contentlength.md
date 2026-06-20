[dart:io](../../dart-io/dart-io-library){._links-link}

contentLength property
======================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) contentLength
:::

Returns the content length of the response body. Returns -1 if the size
of the response body is not known in advance.

If the content length needs to be set, it must be set before the body is
written to. Setting the content length after writing to the body will
throw a `StateError`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get contentLength;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpClientResponse/contentLength.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpresponse/contentlength.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

contentLength property
======================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) contentLength

::: {.features}
read / write
:::
:::

Gets and sets the content length of the response. If the size of the
response is not known in advance set the content length to -1, which is
also the default if not set.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int contentLength = -1;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpResponse/contentLength.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpclientrequest/contentlength.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

contentLength property
======================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) contentLength

::: {.features}
read / write
:::
:::

Gets and sets the content length of the request.

If the size of the request is not known in advance set content length to
-1, which is also the default.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int contentLength = -1;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpClientRequest/contentLength.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpheaders/contentlength.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

contentLength property
======================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) contentLength

::: {.features}
read / write
:::
:::

The value of the [contentLengthHeader](contentlengthheader-constant)
header, if any.

The value is negative if there is no content length set.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int contentLength = -1;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpHeaders/contentLength.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httprequest/contentlength.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

contentLength property
======================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) contentLength
:::

The content length of the request body.

If the size of the request body is not known in advance, this value is
-1.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get contentLength;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpRequest/contentLength.html>
:::
