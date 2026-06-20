[dart:html](../../dart-html/dart-html-library){._links-link}

borderBottomStyle property
==========================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) borderBottomStyle

::: {.features}
override
:::
:::

Gets the value of \"border-bottom-style\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get borderBottomStyle => this._borderBottomStyle;
```

::: {#setter .section .multi-line-signature}
void borderBottomStyle=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"border-bottom-style\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set borderBottomStyle(String? value) {
  _borderBottomStyle = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/borderBottomStyle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/borderbottomstyle.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

borderBottomStyle property
==========================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) borderBottomStyle
:::

Gets the value of \"border-bottom-style\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get borderBottomStyle => getPropertyValue('border-bottom-style');
```

::: {#setter .section .multi-line-signature}
void borderBottomStyle=([String](../../dart-core/string-class) value)
:::

Sets the value of \"border-bottom-style\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set borderBottomStyle(String value) {
  setProperty('border-bottom-style', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/borderBottomStyle.html>
:::
