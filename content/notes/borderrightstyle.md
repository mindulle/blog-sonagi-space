[dart:html](../../dart-html/dart-html-library){._links-link}

borderRightStyle property
=========================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) borderRightStyle

::: {.features}
override
:::
:::

Gets the value of \"border-right-style\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get borderRightStyle => this._borderRightStyle;
```

::: {#setter .section .multi-line-signature}
void borderRightStyle=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"border-right-style\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set borderRightStyle(String? value) {
  _borderRightStyle = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/borderRightStyle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/borderrightstyle.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

borderRightStyle property
=========================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) borderRightStyle
:::

Gets the value of \"border-right-style\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get borderRightStyle => getPropertyValue('border-right-style');
```

::: {#setter .section .multi-line-signature}
void borderRightStyle=([String](../../dart-core/string-class) value)
:::

Sets the value of \"border-right-style\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set borderRightStyle(String value) {
  setProperty('border-right-style', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/borderRightStyle.html>
:::
