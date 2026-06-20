[dart:html](../../dart-html/dart-html-library){._links-link}

listStylePosition property
==========================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) listStylePosition

::: {.features}
override
:::
:::

Gets the value of \"list-style-position\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get listStylePosition => this._listStylePosition;
```

::: {#setter .section .multi-line-signature}
void listStylePosition=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"list-style-position\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set listStylePosition(String? value) {
  _listStylePosition = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/listStylePosition.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/liststyleposition.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

listStylePosition property
==========================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) listStylePosition
:::

Gets the value of \"list-style-position\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get listStylePosition => getPropertyValue('list-style-position');
```

::: {#setter .section .multi-line-signature}
void listStylePosition=([String](../../dart-core/string-class) value)
:::

Sets the value of \"list-style-position\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set listStylePosition(String value) {
  setProperty('list-style-position', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/listStylePosition.html>
:::
