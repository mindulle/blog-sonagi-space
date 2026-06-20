[dart:html](../../dart-html/dart-html-library){._links-link}

borderTopColor property
=======================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) borderTopColor

::: {.features}
override
:::
:::

Gets the value of \"border-top-color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get borderTopColor => this._borderTopColor;
```

::: {#setter .section .multi-line-signature}
void borderTopColor=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"border-top-color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set borderTopColor(String? value) {
  _borderTopColor = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/borderTopColor.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/bordertopcolor.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

borderTopColor property
=======================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) borderTopColor
:::

Gets the value of \"border-top-color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get borderTopColor => getPropertyValue('border-top-color');
```

::: {#setter .section .multi-line-signature}
void borderTopColor=([String](../../dart-core/string-class) value)
:::

Sets the value of \"border-top-color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set borderTopColor(String value) {
  setProperty('border-top-color', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/borderTopColor.html>
:::
