[dart:html](../../dart-html/dart-html-library){._links-link}

closed property
===============

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class)? closed

::: {.features}
override
:::
:::

Indicates whether this window has been closed.

``` {.language-dart data-language="dart"}
print(window.closed); // 'false'
window.close();
print(window.closed); // 'true'
```

MDN does not have compatibility info on this attribute, and therefore is
marked nullable.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool? get closed native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/closed.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/windowbase/closed.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

closed property
===============

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class)? closed
:::

Indicates whether this window has been closed.

``` {.language-dart data-language="dart"}
print(window.closed); // 'false'
window.close();
print(window.closed); // 'true'
```

MDN does not have compatibility info on this attribute, and therefore is
marked nullable.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool? get closed;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WindowBase/closed.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediakeysession/closed.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

closed property
===============

::: {#getter .section .multi-line-signature}
[Future](../../dart-async/future-class)\<void\> closed
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<void> get closed => promiseToFuture<void>(JS("", "#.closed", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaKeySession/closed.html>
:::
