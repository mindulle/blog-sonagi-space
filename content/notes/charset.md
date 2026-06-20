[dart:core](../../dart-core/dart-core-library){._links-link}

charset property
================

::: {#getter .section .multi-line-signature}
[String](../string-class) charset
:::

The charset parameter of the media type.

If the parameters of the media type contains a `charset` parameter then
this returns its value, otherwise it returns `US-ASCII`, which is the
default charset for data URIs. If the values contain non-ASCII percent
escapes, they are decoded as UTF-8.

If the MIME type representation in the URI text contains URI escapes,
they are unescaped in the returned string.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get charset {
  var charsetIndex = _findCharsetIndex();
  if (charsetIndex >= 0) {
    var valueStart = _separatorIndices[charsetIndex + 1] + 1;
    var valueEnd = _separatorIndices[charsetIndex + 2];
    return _Uri._uriDecode(_text, valueStart, valueEnd, utf8, false);
  }
  return "US-ASCII";
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/UriData/charset.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/scriptelement/charset.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

charset property
================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) charset
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get charset native;
```

::: {#setter .section .multi-line-signature}
void charset=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set charset(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ScriptElement/charset.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/contenttype/charset.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

charset property
================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? charset
:::

Gets the character set, if any.

For the full content type `text/html;charset=utf-8`, the
[charset](charset) value is the string `utf-8`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get charset;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ContentType/charset.html>
:::
