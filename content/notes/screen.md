[dart:html](../../dart-html/dart-html-library){._links-link}

screen property
===============

::: {#getter .section .multi-line-signature}
[Screen](../screen-class)? screen
:::

Information about the screen displaying this window.

Other resources
---------------

-   [The Screen interface
    specification](http://www.w3.org/TR/cssom-view/#screen) from W3C.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Screen? get screen native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/screen.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mouseevent/screen.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

screen property
===============

::: {#getter .section .multi-line-signature}
[Point](../../dart-math/point-class)\<[num](../../dart-core/num-class)\>
screen
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Point get screen => new Point(_screenX, _screenY);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MouseEvent/screen.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/touch/screen.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

screen property
===============

::: {#getter .section .multi-line-signature}
[Point](../../dart-math/point-class)\<[num](../../dart-core/num-class)\>
screen
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Point get screen => new Point(__screenX, __screenY);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Touch/screen.html>
:::
