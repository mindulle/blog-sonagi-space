[dart:io](../../dart-io/dart-io-library){._links-link}

ContentType constructor
=======================

::: {.section .multi-line-signature}
ContentType(

1.  [String](../../dart-core/string-class) primaryType,
2.  [String](../../dart-core/string-class) subType,
3.  {[String](../../dart-core/string-class)? charset,
4.  [Map](../../dart-core/map-class)\<[String](../../dart-core/string-class),
    [String](../../dart-core/string-class)?\> parameters = const {}}

)
:::

Creates a new content type object setting the primary type and sub type.
The charset and additional parameters can also be set using `charset`
and `parameters`. If charset is passed and `parameters` contains charset
as well the passed `charset` will override the value in parameters. Keys
passed in parameters will be converted to lower case. The `charset`
entry, whether passed as `charset` or in `parameters`, will have its
value converted to lower-case.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
factory ContentType(String primaryType, String subType,
    {String? charset, Map<String, String?> parameters = const {}}) {
  return _ContentType(primaryType, subType, charset, parameters);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ContentType/ContentType.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpheaders/contenttype.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

contentType property
====================

::: {.section .multi-line-signature}
[ContentType](../contenttype-class)? contentType

::: {.features}
read / write
:::
:::

The [ContentType](../contenttype-class) of the
[contentTypeHeader](contenttypeheader-constant) header, if any.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ContentType? contentType;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpHeaders/contentType.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/contenttype.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

contentType property
====================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? contentType
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get contentType native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/contentType.html>
:::
