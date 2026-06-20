[dart:html](../../dart-html/dart-html-library){._links-link}

outlineColor property
=====================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) outlineColor

::: {.features}
override
:::
:::

Gets the value of \"outline-color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get outlineColor => this._outlineColor;
```

::: {#setter .section .multi-line-signature}
void outlineColor=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"outline-color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set outlineColor(String? value) {
  _outlineColor = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/outlineColor.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/outlinecolor.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

outlineColor property
=====================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) outlineColor
:::

Gets the value of \"outline-color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get outlineColor => getPropertyValue('outline-color');
```

::: {#setter .section .multi-line-signature}
void outlineColor=([String](../../dart-core/string-class) value)
:::

Sets the value of \"outline-color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set outlineColor(String value) {
  setProperty('outline-color', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/outlineColor.html>
:::
