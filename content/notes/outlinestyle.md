[dart:html](../../dart-html/dart-html-library){._links-link}

outlineStyle property
=====================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) outlineStyle

::: {.features}
override
:::
:::

Gets the value of \"outline-style\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get outlineStyle => this._outlineStyle;
```

::: {#setter .section .multi-line-signature}
void outlineStyle=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"outline-style\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set outlineStyle(String? value) {
  _outlineStyle = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/outlineStyle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/outlinestyle.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

outlineStyle property
=====================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) outlineStyle
:::

Gets the value of \"outline-style\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get outlineStyle => getPropertyValue('outline-style');
```

::: {#setter .section .multi-line-signature}
void outlineStyle=([String](../../dart-core/string-class) value)
:::

Sets the value of \"outline-style\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set outlineStyle(String value) {
  setProperty('outline-style', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/outlineStyle.html>
:::
