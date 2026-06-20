[dart:js\_util](../dart-js_util/dart-js_util-library){._links-link}

multiply\<T\> function
======================

::: {.section .multi-line-signature}
T multiply\<T\>(

1.  [Object](../dart-core/object-class)? first,
2.  [Object](../dart-core/object-class)? second

)
:::

Perform JavaScript multiplication (`*`) on two values.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external T multiply<T>(Object? first, Object? second);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js_util/multiply.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/dommatrixreadonly/multiply.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

multiply method
===============

::: {.section .multi-line-signature}
[DomMatrix](../dommatrix-class) multiply(

1.  \[[Map](../../dart-core/map-class)? other\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
DomMatrix multiply([Map? other]) {
  if (other != null) {
    var other_1 = convertDartToNative_Dictionary(other);
    return _multiply_1(other_1);
  }
  return _multiply_2();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomMatrixReadOnly/multiply.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/matrix/multiply.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

multiply method
===============

::: {.section .multi-line-signature}
[Matrix](../matrix-class) multiply(

1.  [Matrix](../matrix-class) secondMatrix

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Matrix multiply(Matrix secondMatrix) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/Matrix/multiply.html>
:::
