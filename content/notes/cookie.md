[dart:io](../../dart-io/dart-io-library){._links-link}

Cookie constructor
==================

::: {.section .multi-line-signature}
Cookie(

1.  [String](../../dart-core/string-class) name,
2.  [String](../../dart-core/string-class) value

)
:::

Creates a new cookie setting the name and value.

`name` and `value` must be composed of valid characters according to RFC
6265.

By default the value of `httpOnly` will be set to `true`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
factory Cookie(String name, String value) => _Cookie(name, value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Cookie/Cookie.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/cookie.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

cookie property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? cookie
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get cookie native;
```

::: {#setter .section .multi-line-signature}
void cookie=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set cookie(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/cookie.html>
:::
