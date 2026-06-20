[dart:html](../../dart-html/dart-html-library){._links-link}

borderCollapse property
=======================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) borderCollapse

::: {.features}
override
:::
:::

Gets the value of \"border-collapse\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get borderCollapse => this._borderCollapse;
```

::: {#setter .section .multi-line-signature}
void borderCollapse=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"border-collapse\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set borderCollapse(String? value) {
  _borderCollapse = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/borderCollapse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/bordercollapse.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

borderCollapse property
=======================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) borderCollapse
:::

Gets the value of \"border-collapse\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get borderCollapse => getPropertyValue('border-collapse');
```

::: {#setter .section .multi-line-signature}
void borderCollapse=([String](../../dart-core/string-class) value)
:::

Sets the value of \"border-collapse\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set borderCollapse(String value) {
  setProperty('border-collapse', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/borderCollapse.html>
:::
