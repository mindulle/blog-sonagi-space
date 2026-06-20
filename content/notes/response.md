[dart:html](../../dart-html/dart-html-library){._links-link}

response property
=================

::: {#getter .section .multi-line-signature}
dynamic response

::: {.features}
\@SupportedBrowser(SupportedBrowser.CHROME),
\@SupportedBrowser(SupportedBrowser.FIREFOX),
\@SupportedBrowser(SupportedBrowser.IE, \'10\'),
\@SupportedBrowser(SupportedBrowser.SAFARI)
:::
:::

The data received as a reponse from the request.

The data could be in the form of a
[String](../../dart-core/string-class),
[ByteBuffer](../../dart-typed_data/bytebuffer-class),
[Document](../document-class), [Blob](../blob-class), or json (also a
[String](../../dart-core/string-class)). `null` indicates request
failure.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@SupportedBrowser(SupportedBrowser.CHROME)
@SupportedBrowser(SupportedBrowser.FIREFOX)
@SupportedBrowser(SupportedBrowser.IE, '10')
@SupportedBrowser(SupportedBrowser.SAFARI)
dynamic get response => _convertNativeToDart_XHR_Response(this._get_response);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HttpRequest/response.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httprequest/response.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

response property
=================

::: {#getter .section .multi-line-signature}
[HttpResponse](../httpresponse-class) response
:::

The [HttpResponse](../httpresponse-class) object, used for sending back
the response to the client.

If the [contentLength](contentlength) of the body isn\'t 0, and the body
isn\'t being read, any write calls on the
[HttpResponse](../httpresponse-class) automatically drain the request
body.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
HttpResponse get response;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpRequest/response.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/publickeycredential/response.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

response property
=================

::: {#getter .section .multi-line-signature}
[AuthenticatorResponse](../authenticatorresponse-class)? response
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
AuthenticatorResponse? get response native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PublicKeyCredential/response.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/backgroundfetchsettledfetch/response.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

response property
=================

::: {#getter .section .multi-line-signature}
\_Response? response
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
_Response? get response native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/BackgroundFetchSettledFetch/response.html>
:::
