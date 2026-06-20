[dart:core](../../dart-core/dart-core-library){._links-link}

host property
=============

::: {#getter .section .multi-line-signature}
[String](../string-class) host
:::

The host part of the authority component.

The value is the empty string if there is no authority component and
hence no host.

If the host is an IP version 6 address, the surrounding `[` and `]` is
removed.

The host string is case-insensitive. The returned host name is
canonicalized to lower-case with upper-case percent-escapes.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get host;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Uri/host.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/anchorelement/host.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

host property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? host

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get host native;
```

::: {#setter .section .multi-line-signature}
void host=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set host(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AnchorElement/host.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/areaelement/host.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

host property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? host

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get host native;
```

::: {#setter .section .multi-line-signature}
void host=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set host(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AreaElement/host.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/htmlhyperlinkelementutils/host.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

host property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? host
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get host native;
```

::: {#setter .section .multi-line-signature}
void host=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set host(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HtmlHyperlinkElementUtils/host.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/location/host.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

host property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) host
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get host native;
```

::: {#setter .section .multi-line-signature}
void host=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set host(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Location/host.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/url/host.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

host property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? host
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get host native;
```

::: {#setter .section .multi-line-signature}
void host=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set host(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Url/host.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/endian/host.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

host property
=============

::: {.section .multi-line-signature}
[Endian](../endian-class) host

::: {.features}
final
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static final Endian host =
    (new ByteData.view(new Uint16List.fromList([1]).buffer)).getInt8(0) == 1
        ? little
        : big;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Endian/host.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/internetaddress/host.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

host property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) host
:::

The host used to lookup the address.

If there is no host associated with the address this returns the
[address](address).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get host;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/InternetAddress/host.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpheaders/host.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

host property
=============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class)? host

::: {.features}
read / write
:::
:::

The value of the [hostHeader](hostheader-constant) header, if any.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? host;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpHeaders/host.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/urlutilsreadonly/host.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

host property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? host
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get host native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/UrlUtilsReadOnly/host.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/shadowroot/host.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

host property
=============

::: {#getter .section .multi-line-signature}
[Element](../element-class)? host
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Element? get host native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ShadowRoot/host.html>
:::
