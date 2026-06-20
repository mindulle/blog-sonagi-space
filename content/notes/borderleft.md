[dart:html](../../dart-html/dart-html-library){._links-link}

borderLeft property
===================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) borderLeft

::: {.features}
override
:::
:::

Gets the value of \"border-left\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get borderLeft => this._borderLeft;
```

::: {#setter .section .multi-line-signature}
void borderLeft=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"border-left\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set borderLeft(String? value) {
  _borderLeft = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/borderLeft.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/borderleft.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

borderLeft property
===================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) borderLeft
:::

Gets the value of \"border-left\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get borderLeft => getPropertyValue('border-left');
```

::: {#setter .section .multi-line-signature}
void borderLeft=([String](../../dart-core/string-class) value)
:::

Sets the value of \"border-left\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set borderLeft(String value) {
  setProperty('border-left', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/borderLeft.html>
:::
