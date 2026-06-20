[dart:html](../../dart-html/dart-html-library){._links-link}

boundingBox method
==================

::: {.section .multi-line-signature}
[Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>
boundingBox(

1.  [Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>
    other

)
:::

Returns a new rectangle which completely contains `this` and `other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Rectangle<num> boundingBox(Rectangle<num> other) {
  var right = max(this.left + this.width, other.left + other.width);
  var bottom = max(this.top + this.height, other.top + other.height);

  var left = min(this.left, other.left);
  var top = min(this.top, other.top);

  return new Rectangle<num>(left, top, right - left, bottom - top);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssRect/boundingBox.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domrectreadonly/boundingbox.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

boundingBox method
==================

::: {.section .multi-line-signature}
[Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>
boundingBox(

1.  [Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>
    other

)
:::

Returns a new rectangle which completely contains `this` and `other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Rectangle boundingBox(Rectangle other) {
  var right = max(this.left + this.width, other.left + other.width);
  var bottom = max(this.top + this.height, other.top + other.height);

  var left = min(this.left, other.left);
  var top = min(this.top, other.top);

  return new Rectangle(left, top, right - left, bottom - top);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomRectReadOnly/boundingBox.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/rectangle/boundingbox.md)
[dart:math](../../dart-math/dart-math-library){._links-link}

boundingBox method
==================

::: {.section .multi-line-signature}
[Rectangle](../rectangle-class)\<T\> boundingBox(

1.  [Rectangle](../rectangle-class)\<T\> other

)

::: {.features}
inherited
:::
:::

Returns a new rectangle which completely contains `this` and `other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Rectangle<T> boundingBox(Rectangle<T> other) {
  var right = max(this.left + this.width, other.left + other.width);
  var bottom = max(this.top + this.height, other.top + other.height);

  var left = min(this.left, other.left);
  var top = min(this.top, other.top);

  return Rectangle<T>(left, top, (right - left) as T, (bottom - top) as T);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/Rectangle/boundingBox.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/detectedbarcode/boundingbox.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

boundingBox property
====================

::: {#getter .section .multi-line-signature}
[Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>?
boundingBox
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Rectangle? get boundingBox native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DetectedBarcode/boundingBox.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/detectedface/boundingbox.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

boundingBox property
====================

::: {#getter .section .multi-line-signature}
[Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>?
boundingBox
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Rectangle? get boundingBox native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DetectedFace/boundingBox.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/detectedtext/boundingbox.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

boundingBox property
====================

::: {#getter .section .multi-line-signature}
[Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>?
boundingBox
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Rectangle? get boundingBox native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DetectedText/boundingBox.html>
:::
