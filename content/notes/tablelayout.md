[dart:html](../../dart-html/dart-html-library){._links-link}

tableLayout property
====================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) tableLayout

::: {.features}
override
:::
:::

Gets the value of \"table-layout\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get tableLayout => this._tableLayout;
```

::: {#setter .section .multi-line-signature}
void tableLayout=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"table-layout\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set tableLayout(String? value) {
  _tableLayout = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/tableLayout.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/tablelayout.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

tableLayout property
====================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) tableLayout
:::

Gets the value of \"table-layout\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get tableLayout => getPropertyValue('table-layout');
```

::: {#setter .section .multi-line-signature}
void tableLayout=([String](../../dart-core/string-class) value)
:::

Sets the value of \"table-layout\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set tableLayout(String value) {
  setProperty('table-layout', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/tableLayout.html>
:::
