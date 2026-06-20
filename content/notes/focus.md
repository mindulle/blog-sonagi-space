[dart:html](../../dart-html/dart-html-library){._links-link}

focus method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[WindowClient](../windowclient-class)\>
focus()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<WindowClient> focus() => promiseToFuture<WindowClient>(
    JS("creates:WindowClient;", "#.focus()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WindowClient/focus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/svgelement/focus.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

focus method
============

::: {.section .multi-line-signature}
void focus()

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void focus() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/focus.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/focus.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

focus method
============

::: {.section .multi-line-signature}
void focus()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void focus() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/focus.html>
:::
