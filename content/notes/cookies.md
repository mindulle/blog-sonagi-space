[dart:io](../../dart-io/dart-io-library){._links-link}

cookies property
================

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[Cookie](../cookie-class)\> cookies
:::

Cookies to present to the server (in the \'cookie\' header).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<Cookie> get cookies;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpClientRequest/cookies.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpclientresponse/cookies.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

cookies property
================

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[Cookie](../cookie-class)\> cookies
:::

Cookies set by the server (from the \'set-cookie\' header).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<Cookie> get cookies;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpClientResponse/cookies.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpresponse/cookies.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

cookies property
================

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[Cookie](../cookie-class)\> cookies
:::

Cookies to set in the client (in the \'set-cookie\' header).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<Cookie> get cookies;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpResponse/cookies.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httprequest/cookies.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

cookies property
================

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[Cookie](../cookie-class)\> cookies
:::

The cookies in the request, from the \"Cookie\" headers.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<Cookie> get cookies;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpRequest/cookies.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Cookies.md)

# Cookies

Cookies are a crucial part of state management in PHP. They enable storage of data on the user's browser, which can then be sent back to the server with each subsequent request. This permits persistent data between different pages or visits. To set a cookie in PHP, you can use the `setcookie()` func
tion. For example, `setcookie("user", "John Doe", time() + (86400 * 30), "/");` will set a cookie named "user" with the value "John Doe", that will expire after 30 days. The cookie will be available a
cross the entire website due to the path parameter set as `/`. To retrieve the value of the cookie, you can use the global `$_COOKIE` array: `echo $_COOKIE["user"];`.

Visit the following resources to learn more:

- [@official@Cookies](https://www.php.net/manual/en/features.cookies.php)

## 관련 로드맵
- [[PHP|php]]
