[dart:html](../../dart-html/dart-html-library){._links-link}

maxWidth property
=================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) maxWidth

::: {.features}
override
:::
:::

Gets the value of \"max-width\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get maxWidth => this._maxWidth;
```

::: {#setter .section .multi-line-signature}
void maxWidth=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"max-width\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set maxWidth(String? value) {
  _maxWidth = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/maxWidth.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/maxwidth.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

maxWidth property
=================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) maxWidth
:::

Gets the value of \"max-width\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get maxWidth => getPropertyValue('max-width');
```

::: {#setter .section .multi-line-signature}
void maxWidth=([String](../../dart-core/string-class) value)
:::

Sets the value of \"max-width\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set maxWidth(String value) {
  setProperty('max-width', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/maxWidth.html>
:::
