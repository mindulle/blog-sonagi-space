[dart:html](../../dart-html/dart-html-library){._links-link}

verticalAlign property
======================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) verticalAlign

::: {.features}
override
:::
:::

Gets the value of \"vertical-align\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get verticalAlign => this._verticalAlign;
```

::: {#setter .section .multi-line-signature}
void verticalAlign=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"vertical-align\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set verticalAlign(String? value) {
  _verticalAlign = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/verticalAlign.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/verticalalign.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

verticalAlign property
======================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) verticalAlign
:::

Gets the value of \"vertical-align\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get verticalAlign => getPropertyValue('vertical-align');
```

::: {#setter .section .multi-line-signature}
void verticalAlign=([String](../../dart-core/string-class) value)
:::

Sets the value of \"vertical-align\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set verticalAlign(String value) {
  setProperty('vertical-align', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/verticalAlign.html>
:::
