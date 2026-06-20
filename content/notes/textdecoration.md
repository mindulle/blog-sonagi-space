[dart:html](../../dart-html/dart-html-library){._links-link}

textDecoration property
=======================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) textDecoration

::: {.features}
override
:::
:::

Gets the value of \"text-decoration\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get textDecoration => this._textDecoration;
```

::: {#setter .section .multi-line-signature}
void textDecoration=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"text-decoration\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set textDecoration(String? value) {
  _textDecoration = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/textDecoration.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/textdecoration.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

textDecoration property
=======================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) textDecoration
:::

Gets the value of \"text-decoration\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get textDecoration => getPropertyValue('text-decoration');
```

::: {#setter .section .multi-line-signature}
void textDecoration=([String](../../dart-core/string-class) value)
:::

Sets the value of \"text-decoration\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set textDecoration(String value) {
  setProperty('text-decoration', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/textDecoration.html>
:::
