[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffleMix method
=================

::: {.section .multi-line-signature}
[Float32x4](../float32x4-class) shuffleMix(

1.  [Float32x4](../float32x4-class) other,
2.  [int](../../dart-core/int-class) mask

)
:::

Shuffle the lane values in [this](../float32x4-class) and `other`. The
returned Float32x4 will have XY lanes from [this](../float32x4-class)
and ZW lanes from `other`. Uses the same `mask` as [shuffle](shuffle).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float32x4 shuffleMix(Float32x4 other, int mask);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float32x4/shuffleMix.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/int32x4/shufflemix.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffleMix method
=================

::: {.section .multi-line-signature}
[Int32x4](../int32x4-class) shuffleMix(

1.  [Int32x4](../int32x4-class) other,
2.  [int](../../dart-core/int-class) mask

)
:::

Shuffle the lane values in [this](../int32x4-class) and `other`. The
returned Int32x4 will have XY lanes from [this](../int32x4-class) and ZW
lanes from `other`. Uses the same `mask` as [shuffle](shuffle).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Int32x4 shuffleMix(Int32x4 other, int mask);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Int32x4/shuffleMix.html>
:::
