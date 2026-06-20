[dart:math](../../dart-math/dart-math-library){._links-link}

intersects method
=================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) intersects(

1.  [Rectangle](../rectangle-class)\<[num](../../dart-core/num-class)\>
    other

)

::: {.features}
inherited
:::
:::

Returns true if `this` intersects `other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool intersects(Rectangle<num> other) {
  return (left <= other.left + other.width &&
      other.left <= left + width &&
      top <= other.top + other.height &&
      other.top <= top + height);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/Rectangle/intersects.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domrectreadonly/intersects.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

intersects method
=================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) intersects(

1.  [Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>
    other

)
:::

Returns true if `this` intersects `other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool intersects(Rectangle<num> other) {
  return (left <= other.left + other.width &&
      other.left <= left + width &&
      top <= other.top + other.height &&
      other.top <= top + height);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomRectReadOnly/intersects.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssrect/intersects.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

intersects method
=================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) intersects(

1.  [Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>
    other

)
:::

Returns true if `this` intersects `other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool intersects(Rectangle<num> other) {
  return (left <= other.left + other.width &&
      other.left <= left + width &&
      top <= other.top + other.height &&
      other.top <= top + height);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssRect/intersects.html>
:::
