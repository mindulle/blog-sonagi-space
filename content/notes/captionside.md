[dart:html](../../dart-html/dart-html-library){._links-link}

captionSide property
====================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) captionSide

::: {.features}
override
:::
:::

Gets the value of \"caption-side\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get captionSide => this._captionSide;
```

::: {#setter .section .multi-line-signature}
void captionSide=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"caption-side\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set captionSide(String? value) {
  _captionSide = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/captionSide.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/captionside.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

captionSide property
====================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) captionSide
:::

Gets the value of \"caption-side\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get captionSide => getPropertyValue('caption-side');
```

::: {#setter .section .multi-line-signature}
void captionSide=([String](../../dart-core/string-class) value)
:::

Sets the value of \"caption-side\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set captionSide(String value) {
  setProperty('caption-side', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/captionSide.html>
:::
