[dart:io](../../dart-io/dart-io-library){._links-link}

statusCode property
===================

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) statusCode

::: {.features}
read / write
:::
:::

The status code of the response.

Any integer value is accepted. For the official HTTP status codes use
the fields from [HttpStatus](../../dart-html/httpstatus-class). If no
status code is explicitly set the default value
[HttpStatus.ok](../../dart-html/httpstatus/ok-constant) is used.

The status code must be set before the body is written to. Setting the
status code after writing to the response body or closing the response
will throw a `StateError`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int statusCode = HttpStatus.ok;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpResponse/statusCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpclientresponse/statuscode.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

statusCode property
===================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) statusCode
:::

Returns the status code.

The status code must be set before the body is written to. Setting the
status code after writing to the body will throw a `StateError`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get statusCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpClientResponse/statusCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/redirectinfo/statuscode.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

statusCode property
===================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) statusCode
:::

Returns the status code used for the redirect.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get statusCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RedirectInfo/statusCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/securitypolicyviolationevent/statuscode.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

statusCode property
===================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? statusCode
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get statusCode native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SecurityPolicyViolationEvent/statusCode.html>
:::
