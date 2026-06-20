[dart:html](../../dart-html/dart-html-library){._links-link}

listStyle property
==================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) listStyle

::: {.features}
override
:::
:::

Gets the value of \"list-style\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get listStyle => this._listStyle;
```

::: {#setter .section .multi-line-signature}
void listStyle=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"list-style\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set listStyle(String? value) {
  _listStyle = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/listStyle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/liststyle.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

listStyle property
==================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) listStyle
:::

Gets the value of \"list-style\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get listStyle => getPropertyValue('list-style');
```

::: {#setter .section .multi-line-signature}
void listStyle=([String](../../dart-core/string-class) value)
:::

Sets the value of \"list-style\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set listStyle(String value) {
  setProperty('list-style', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/listStyle.html>
:::
