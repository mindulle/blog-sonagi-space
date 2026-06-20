[dart:html](../../dart-html/dart-html-library){._links-link}

matrixTransform method
======================

::: {.section .multi-line-signature}
[DomPoint](../dompoint-class) matrixTransform(

1.  \[[Map](../../dart-core/map-class)? matrix\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
DomPoint matrixTransform([Map? matrix]) {
  if (matrix != null) {
    var matrix_1 = convertDartToNative_Dictionary(matrix);
    return _matrixTransform_1(matrix_1);
  }
  return _matrixTransform_2();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomPointReadOnly/matrixTransform.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/point/matrixtransform.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

matrixTransform method
======================

::: {.section .multi-line-signature}
[Point](../point-class) matrixTransform(

1.  [Matrix](../matrix-class) matrix

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Point matrixTransform(Matrix matrix) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/Point/matrixTransform.html>
:::
