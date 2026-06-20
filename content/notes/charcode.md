[dart:html](../../dart-html/dart-html-library){._links-link}

charCode property
=================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) charCode

::: {.features}
override
:::
:::

Calculated value of what the estimated charCode is for this event.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get charCode => this.type == 'keypress' ? _shadowCharCode : 0;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/KeyEvent/charCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/keyboardevent/charcode.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

charCode property
=================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) charCode
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get charCode native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/KeyboardEvent/charCode.html>
:::
