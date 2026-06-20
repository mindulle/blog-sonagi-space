[dart:html](../../dart-html/dart-html-library){._links-link}

bottomRight property
====================

::: {#getter .section .multi-line-signature}
[Point](../../dart-math/point-class)\<[num](../../dart-core/num-class)\>
bottomRight
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Point<num> get bottomRight =>
    new Point<num>(this.left + this.width, this.top + this.height);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssRect/bottomRight.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domrectreadonly/bottomright.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

bottomRight property
====================

::: {#getter .section .multi-line-signature}
[Point](../../dart-math/point-class)\<[num](../../dart-core/num-class)\>
bottomRight
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Point get bottomRight =>
    new Point(this.left + this.width, this.top + this.height);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomRectReadOnly/bottomRight.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/rectangle/bottomright.md)
[dart:math](../../dart-math/dart-math-library){._links-link}

bottomRight property
====================

::: {#getter .section .multi-line-signature}
[Point](../point-class)\<T\> bottomRight

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Point<T> get bottomRight =>
    Point<T>((this.left + this.width) as T, (this.top + this.height) as T);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/Rectangle/bottomRight.html>
:::
