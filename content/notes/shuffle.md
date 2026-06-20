[dart:collection](../../dart-collection/dart-collection-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
override
:::
:::

Shuffles the elements of this list randomly.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4, 5];
numbers.shuffle();
print(numbers); // [1, 3, 4, 5, 2] OR some other random result.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  random ??= Random();
  if (random == null) throw "!"; // TODO(38493): The `??=` should promote.

  int length = this.length;
  while (length > 1) {
    int pos = random.nextInt(length);
    length -= 1;
    var tmp = this[length];
    this[length] = this[pos];
    this[pos] = tmp;
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/immutablelistmixin/shuffle.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
override
:::
:::

Shuffles the elements of this list randomly.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4, 5];
numbers.shuffle();
print(numbers); // [1, 3, 4, 5, 2] OR some other random result.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  throw new UnsupportedError("Cannot shuffle immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImmutableListMixin/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/shuffle.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)
:::

Shuffles the elements of this list randomly.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 4, 5];
numbers.shuffle();
print(numbers); // [1, 3, 4, 5, 2] OR some other random result.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/shuffle.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/shuffle.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/shuffle.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/shuffle.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/shuffle.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/shuffle.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/shuffle.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/shuffle.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/shuffle.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/shuffle.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/shuffle.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/shuffle.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/shuffle.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/shuffle.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/shuffle.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
void shuffle(

1.  \[[Random](../../dart-math/random-class)? random\]

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void shuffle([Random? random]) {
  throw new UnsupportedError("Cannot modify an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float32x4/shuffle.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
[Float32x4](../float32x4-class) shuffle(

1.  [int](../../dart-core/int-class) mask

)
:::

Shuffle the lane values. `mask` must be one of the 256 shuffle
constants.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float32x4 shuffle(int mask);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float32x4/shuffle.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/int32x4/shuffle.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

shuffle method
==============

::: {.section .multi-line-signature}
[Int32x4](../int32x4-class) shuffle(

1.  [int](../../dart-core/int-class) mask

)
:::

Shuffle the lane values. `mask` must be one of the 256 shuffle
constants.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Int32x4 shuffle(int mask);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Int32x4/shuffle.html>
:::
