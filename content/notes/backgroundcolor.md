[dart:html](../../dart-html/dart-html-library){._links-link}

backgroundColor property
========================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) backgroundColor

::: {.features}
override
:::
:::

Gets the value of \"background-color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get backgroundColor => this._backgroundColor;
```

::: {#setter .section .multi-line-signature}
void backgroundColor=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"background-color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set backgroundColor(String? value) {
  _backgroundColor = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/backgroundColor.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/backgroundcolor.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

backgroundColor property
========================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) backgroundColor
:::

Gets the value of \"background-color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get backgroundColor => getPropertyValue('background-color');
```

::: {#setter .section .multi-line-signature}
void backgroundColor=([String](../../dart-core/string-class) value)
:::

Sets the value of \"background-color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set backgroundColor(String value) {
  setProperty('background-color', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/backgroundColor.html>
:::
