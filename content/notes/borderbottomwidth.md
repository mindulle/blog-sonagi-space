[dart:html](../../dart-html/dart-html-library){._links-link}

borderBottomWidth property
==========================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) borderBottomWidth

::: {.features}
override
:::
:::

Gets the value of \"border-bottom-width\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get borderBottomWidth => this._borderBottomWidth;
```

::: {#setter .section .multi-line-signature}
void borderBottomWidth=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"border-bottom-width\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set borderBottomWidth(String? value) {
  _borderBottomWidth = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/borderBottomWidth.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/borderbottomwidth.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

borderBottomWidth property
==========================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) borderBottomWidth
:::

Gets the value of \"border-bottom-width\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get borderBottomWidth => getPropertyValue('border-bottom-width');
```

::: {#setter .section .multi-line-signature}
void borderBottomWidth=([String](../../dart-core/string-class) value)
:::

Sets the value of \"border-bottom-width\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set borderBottomWidth(String value) {
  setProperty('border-bottom-width', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/borderBottomWidth.html>
:::
