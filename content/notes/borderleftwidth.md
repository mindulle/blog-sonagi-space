[dart:html](../../dart-html/dart-html-library){._links-link}

borderLeftWidth property
========================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) borderLeftWidth

::: {.features}
override
:::
:::

Gets the value of \"border-left-width\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get borderLeftWidth => this._borderLeftWidth;
```

::: {#setter .section .multi-line-signature}
void borderLeftWidth=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"border-left-width\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set borderLeftWidth(String? value) {
  _borderLeftWidth = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/borderLeftWidth.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/borderleftwidth.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

borderLeftWidth property
========================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) borderLeftWidth
:::

Gets the value of \"border-left-width\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get borderLeftWidth => getPropertyValue('border-left-width');
```

::: {#setter .section .multi-line-signature}
void borderLeftWidth=([String](../../dart-core/string-class) value)
:::

Sets the value of \"border-left-width\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set borderLeftWidth(String value) {
  setProperty('border-left-width', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/borderLeftWidth.html>
:::
