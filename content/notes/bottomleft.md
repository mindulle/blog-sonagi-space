[dart:html](../../dart-html/dart-html-library){._links-link}

bottomLeft property
===================

::: {#getter .section .multi-line-signature}
[Point](../../dart-math/point-class)\<[num](../../dart-core/num-class)\>
bottomLeft
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Point<num> get bottomLeft =>
    new Point<num>(this.left, this.top + this.height);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssRect/bottomLeft.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domrectreadonly/bottomleft.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

bottomLeft property
===================

::: {#getter .section .multi-line-signature}
[Point](../../dart-math/point-class)\<[num](../../dart-core/num-class)\>
bottomLeft
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Point get bottomLeft => new Point(this.left, this.top + this.height);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomRectReadOnly/bottomLeft.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/rectangle/bottomleft.md)
[dart:math](../../dart-math/dart-math-library){._links-link}

bottomLeft property
===================

::: {#getter .section .multi-line-signature}
[Point](../point-class)\<T\> bottomLeft

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Point<T> get bottomLeft => Point<T>(this.left, (this.top + this.height) as T);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/Rectangle/bottomLeft.html>
:::
