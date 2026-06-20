[dart:html](../../dart-html/dart-html-library){._links-link}

textAlign property
==================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) textAlign

::: {.features}
override
:::
:::

Gets the value of \"text-align\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get textAlign => this._textAlign;
```

::: {#setter .section .multi-line-signature}
void textAlign=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"text-align\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set textAlign(String? value) {
  _textAlign = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/textAlign.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/textalign.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

textAlign property
==================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) textAlign
:::

Gets the value of \"text-align\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get textAlign => getPropertyValue('text-align');
```

::: {#setter .section .multi-line-signature}
void textAlign=([String](../../dart-core/string-class) value)
:::

Sets the value of \"text-align\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set textAlign(String value) {
  setProperty('text-align', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/textAlign.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/offscreencanvasrenderingcontext2d/textalign.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

textAlign property
==================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? textAlign
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get textAlign native;
```

::: {#setter .section .multi-line-signature}
void textAlign=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set textAlign(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OffscreenCanvasRenderingContext2D/textAlign.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/canvasrenderingcontext2d/textalign.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

textAlign property
==================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) textAlign
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get textAlign native;
```

::: {#setter .section .multi-line-signature}
void textAlign=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set textAlign(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CanvasRenderingContext2D/textAlign.html>
:::
