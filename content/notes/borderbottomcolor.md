[dart:html](../../dart-html/dart-html-library){._links-link}

borderBottomColor property
==========================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) borderBottomColor

::: {.features}
override
:::
:::

Gets the value of \"border-bottom-color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get borderBottomColor => this._borderBottomColor;
```

::: {#setter .section .multi-line-signature}
void borderBottomColor=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"border-bottom-color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set borderBottomColor(String? value) {
  _borderBottomColor = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/borderBottomColor.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/borderbottomcolor.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

borderBottomColor property
==========================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) borderBottomColor
:::

Gets the value of \"border-bottom-color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get borderBottomColor => getPropertyValue('border-bottom-color');
```

::: {#setter .section .multi-line-signature}
void borderBottomColor=([String](../../dart-core/string-class) value)
:::

Sets the value of \"border-bottom-color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set borderBottomColor(String value) {
  setProperty('border-bottom-color', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/borderBottomColor.html>
:::
