[dart:math](../../dart-math/dart-math-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) hashCode

::: {.features}
inherited
:::
:::

The hash code for this object.

A hash code is a single integer which represents the state of the object
that affects [operator ==](operator_equals) comparisons.

All objects have hash codes. The default hash code implemented by
[Object](../../dart-core/object-class) represents only the identity of
the object, the same way as the default [operator ==](operator_equals)
implementation only considers objects equal if they are identical (see
[identityHashCode](../../dart-core/identityhashcode)).

If [operator ==](operator_equals) is overridden to use the object state
instead, the hash code must also be changed to represent that state,
otherwise the object cannot be used in hash based data structures like
the default [Set](../../dart-core/set-class) and
[Map](../../dart-core/map-class) implementations.

Hash codes must be the same for objects that are equal to each other
according to [operator ==](operator_equals). The hash code of an object
should only change if the object changes in a way that affects equality.
There are no further requirements for the hash codes. They need not be
consistent between executions of the same program and there are no
distribution guarantees.

Objects that are not equal are allowed to have the same hash code. It is
even technically allowed that all instances have the same hash code, but
if clashes happen too often, it may reduce the efficiency of hash-based
data structures like [HashSet](../../dart-collection/hashset-class) or
[HashMap](../../dart-collection/hashmap-class).

If a subclass overrides [hashCode](hashcode), it should override the
[operator ==](operator_equals) operator as well to maintain consistency.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get hashCode => SystemHash.hash4(
    left.hashCode, top.hashCode, right.hashCode, bottom.hashCode);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/Rectangle/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/point/hashcode.md)
[dart:math](../../dart-math/dart-math-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) hashCode

::: {.features}
override
:::
:::

The hash code for this object.

A hash code is a single integer which represents the state of the object
that affects [operator ==](operator_equals) comparisons.

All objects have hash codes. The default hash code implemented by
[Object](../../dart-core/object-class) represents only the identity of
the object, the same way as the default [operator ==](operator_equals)
implementation only considers objects equal if they are identical (see
[identityHashCode](../../dart-core/identityhashcode)).

If [operator ==](operator_equals) is overridden to use the object state
instead, the hash code must also be changed to represent that state,
otherwise the object cannot be used in hash based data structures like
the default [Set](../../dart-core/set-class) and
[Map](../../dart-core/map-class) implementations.

Hash codes must be the same for objects that are equal to each other
according to [operator ==](operator_equals). The hash code of an object
should only change if the object changes in a way that affects equality.
There are no further requirements for the hash codes. They need not be
consistent between executions of the same program and there are no
distribution guarantees.

Objects that are not equal are allowed to have the same hash code. It is
even technically allowed that all instances have the same hash code, but
if clashes happen too often, it may reduce the efficiency of hash-based
data structures like [HashSet](../../dart-collection/hashset-class) or
[HashMap](../../dart-collection/hashmap-class).

If a subclass overrides [hashCode](hashcode), it should override the
[operator ==](operator_equals) operator as well to maintain consistency.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get hashCode => SystemHash.hash2(x.hashCode, y.hashCode);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/Point/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssrect/hashcode.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) hashCode

::: {.features}
override
:::
:::

The hash code for this object.

A hash code is a single integer which represents the state of the object
that affects [operator ==](operator_equals) comparisons.

All objects have hash codes. The default hash code implemented by
[Object](../../dart-core/object-class) represents only the identity of
the object, the same way as the default [operator ==](operator_equals)
implementation only considers objects equal if they are identical (see
[identityHashCode](../../dart-core/identityhashcode)).

If [operator ==](operator_equals) is overridden to use the object state
instead, the hash code must also be changed to represent that state,
otherwise the object cannot be used in hash based data structures like
the default [Set](../../dart-core/set-class) and
[Map](../../dart-core/map-class) implementations.

Hash codes must be the same for objects that are equal to each other
according to [operator ==](operator_equals). The hash code of an object
should only change if the object changes in a way that affects equality.
There are no further requirements for the hash codes. They need not be
consistent between executions of the same program and there are no
distribution guarantees.

Objects that are not equal are allowed to have the same hash code. It is
even technically allowed that all instances have the same hash code, but
if clashes happen too often, it may reduce the efficiency of hash-based
data structures like [HashSet](../../dart-collection/hashset-class) or
[HashMap](../../dart-collection/hashmap-class).

If a subclass overrides [hashCode](hashcode), it should override the
[operator ==](operator_equals) operator as well to maintain consistency.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get hashCode => Object.hash(left, top, right, bottom);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssRect/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domrectreadonly/hashcode.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) hashCode
:::

The hash code for this object.

A hash code is a single integer which represents the state of the object
that affects [operator ==](operator_equals) comparisons.

All objects have hash codes. The default hash code implemented by
[Object](../../dart-core/object-class) represents only the identity of
the object, the same way as the default [operator ==](operator_equals)
implementation only considers objects equal if they are identical (see
[identityHashCode](../../dart-core/identityhashcode)).

If [operator ==](operator_equals) is overridden to use the object state
instead, the hash code must also be changed to represent that state,
otherwise the object cannot be used in hash based data structures like
the default [Set](../../dart-core/set-class) and
[Map](../../dart-core/map-class) implementations.

Hash codes must be the same for objects that are equal to each other
according to [operator ==](operator_equals). The hash code of an object
should only change if the object changes in a way that affects equality.
There are no further requirements for the hash codes. They need not be
consistent between executions of the same program and there are no
distribution guarantees.

Objects that are not equal are allowed to have the same hash code. It is
even technically allowed that all instances have the same hash code, but
if clashes happen too often, it may reduce the efficiency of hash-based
data structures like [HashSet](../../dart-collection/hashset-class) or
[HashMap](../../dart-collection/hashmap-class).

If a subclass overrides [hashCode](hashcode), it should override the
[operator ==](operator_equals) operator as well to maintain consistency.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get hashCode => Object.hash(left, top, width, height);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomRectReadOnly/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-js/jsobject/hashcode.md)
[dart:js](../../dart-js/dart-js-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) hashCode

::: {.features}
override
:::
:::

The hash code for this object.

A hash code is a single integer which represents the state of the object
that affects [operator ==](operator_equals) comparisons.

All objects have hash codes. The default hash code implemented by
[Object](../../dart-core/object-class) represents only the identity of
the object, the same way as the default [operator ==](operator_equals)
implementation only considers objects equal if they are identical (see
[identityHashCode](../../dart-core/identityhashcode)).

If [operator ==](operator_equals) is overridden to use the object state
instead, the hash code must also be changed to represent that state,
otherwise the object cannot be used in hash based data structures like
the default [Set](../../dart-core/set-class) and
[Map](../../dart-core/map-class) implementations.

Hash codes must be the same for objects that are equal to each other
according to [operator ==](operator_equals). The hash code of an object
should only change if the object changes in a way that affects equality.
There are no further requirements for the hash codes. They need not be
consistent between executions of the same program and there are no
distribution guarantees.

Objects that are not equal are allowed to have the same hash code. It is
even technically allowed that all instances have the same hash code, but
if clashes happen too often, it may reduce the efficiency of hash-based
data structures like [HashSet](../../dart-collection/hashset-class) or
[HashMap](../../dart-collection/hashmap-class).

If a subclass overrides [hashCode](hashcode), it should override the
[operator ==](operator_equals) operator as well to maintain consistency.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get hashCode => 0;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js/JsObject/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/bool/hashcode.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../int-class) hashCode

::: {.features}
override
:::
:::

The hash code for this object.

A hash code is a single integer which represents the state of the object
that affects [operator ==](../object/operator_equals) comparisons.

All objects have hash codes. The default hash code implemented by
[Object](../object-class) represents only the identity of the object,
the same way as the default [operator ==](../object/operator_equals)
implementation only considers objects equal if they are identical (see
[identityHashCode](../identityhashcode)).

If [operator ==](../object/operator_equals) is overridden to use the
object state instead, the hash code must also be changed to represent
that state, otherwise the object cannot be used in hash based data
structures like the default [Set](../set-class) and [Map](../map-class)
implementations.

Hash codes must be the same for objects that are equal to each other
according to [operator ==](../object/operator_equals). The hash code of
an object should only change if the object changes in a way that affects
equality. There are no further requirements for the hash codes. They
need not be consistent between executions of the same program and there
are no distribution guarantees.

Objects that are not equal are allowed to have the same hash code. It is
even technically allowed that all instances have the same hash code, but
if clashes happen too often, it may reduce the efficiency of hash-based
data structures like [HashSet](../../dart-collection/hashset-class) or
[HashMap](../../dart-collection/hashmap-class).

If a subclass overrides [hashCode](hashcode), it should override the
[operator ==](../object/operator_equals) operator as well to maintain
consistency.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int get hashCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/bool/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/null/hashcode.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../int-class) hashCode

::: {.features}
override
:::
:::

The hash code for this object.

A hash code is a single integer which represents the state of the object
that affects [operator ==](../object/operator_equals) comparisons.

All objects have hash codes. The default hash code implemented by
[Object](../object-class) represents only the identity of the object,
the same way as the default [operator ==](../object/operator_equals)
implementation only considers objects equal if they are identical (see
[identityHashCode](../identityhashcode)).

If [operator ==](../object/operator_equals) is overridden to use the
object state instead, the hash code must also be changed to represent
that state, otherwise the object cannot be used in hash based data
structures like the default [Set](../set-class) and [Map](../map-class)
implementations.

Hash codes must be the same for objects that are equal to each other
according to [operator ==](../object/operator_equals). The hash code of
an object should only change if the object changes in a way that affects
equality. There are no further requirements for the hash codes. They
need not be consistent between executions of the same program and there
are no distribution guarantees.

Objects that are not equal are allowed to have the same hash code. It is
even technically allowed that all instances have the same hash code, but
if clashes happen too often, it may reduce the efficiency of hash-based
data structures like [HashSet](../../dart-collection/hashset-class) or
[HashMap](../../dart-collection/hashmap-class).

If a subclass overrides [hashCode](hashcode), it should override the
[operator ==](../object/operator_equals) operator as well to maintain
consistency.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int get hashCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Null/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/datetime/hashcode.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../int-class) hashCode

::: {.features}
override
:::
:::

The hash code for this object.

A hash code is a single integer which represents the state of the object
that affects [operator ==](operator_equals) comparisons.

All objects have hash codes. The default hash code implemented by
[Object](../object-class) represents only the identity of the object,
the same way as the default [operator ==](operator_equals)
implementation only considers objects equal if they are identical (see
[identityHashCode](../identityhashcode)).

If [operator ==](operator_equals) is overridden to use the object state
instead, the hash code must also be changed to represent that state,
otherwise the object cannot be used in hash based data structures like
the default [Set](../set-class) and [Map](../map-class) implementations.

Hash codes must be the same for objects that are equal to each other
according to [operator ==](operator_equals). The hash code of an object
should only change if the object changes in a way that affects equality.
There are no further requirements for the hash codes. They need not be
consistent between executions of the same program and there are no
distribution guarantees.

Objects that are not equal are allowed to have the same hash code. It is
even technically allowed that all instances have the same hash code, but
if clashes happen too often, it may reduce the efficiency of hash-based
data structures like [HashSet](../../dart-collection/hashset-class) or
[HashMap](../../dart-collection/hashmap-class).

If a subclass overrides [hashCode](hashcode), it should override the
[operator ==](operator_equals) operator as well to maintain consistency.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get hashCode => (_value ^ (_value >> 30)) & 0x3FFFFFFF;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/DateTime/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/duration/hashcode.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../int-class) hashCode

::: {.features}
override
:::
:::

The hash code for this object.

A hash code is a single integer which represents the state of the object
that affects [operator ==](operator_equals) comparisons.

All objects have hash codes. The default hash code implemented by
[Object](../object-class) represents only the identity of the object,
the same way as the default [operator ==](operator_equals)
implementation only considers objects equal if they are identical (see
[identityHashCode](../identityhashcode)).

If [operator ==](operator_equals) is overridden to use the object state
instead, the hash code must also be changed to represent that state,
otherwise the object cannot be used in hash based data structures like
the default [Set](../set-class) and [Map](../map-class) implementations.

Hash codes must be the same for objects that are equal to each other
according to [operator ==](operator_equals). The hash code of an object
should only change if the object changes in a way that affects equality.
There are no further requirements for the hash codes. They need not be
consistent between executions of the same program and there are no
distribution guarantees.

Objects that are not equal are allowed to have the same hash code. It is
even technically allowed that all instances have the same hash code, but
if clashes happen too often, it may reduce the efficiency of hash-based
data structures like [HashSet](../../dart-collection/hashset-class) or
[HashMap](../../dart-collection/hashmap-class).

If a subclass overrides [hashCode](hashcode), it should override the
[operator ==](operator_equals) operator as well to maintain consistency.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get hashCode => _duration.hashCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Duration/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/object/hashcode.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../int-class) hashCode
:::

The hash code for this object.

A hash code is a single integer which represents the state of the object
that affects [operator ==](operator_equals) comparisons.

All objects have hash codes. The default hash code implemented by
[Object](../object-class) represents only the identity of the object,
the same way as the default [operator ==](operator_equals)
implementation only considers objects equal if they are identical (see
[identityHashCode](../identityhashcode)).

If [operator ==](operator_equals) is overridden to use the object state
instead, the hash code must also be changed to represent that state,
otherwise the object cannot be used in hash based data structures like
the default [Set](../set-class) and [Map](../map-class) implementations.

Hash codes must be the same for objects that are equal to each other
according to [operator ==](operator_equals). The hash code of an object
should only change if the object changes in a way that affects equality.
There are no further requirements for the hash codes. They need not be
consistent between executions of the same program and there are no
distribution guarantees.

Objects that are not equal are allowed to have the same hash code. It is
even technically allowed that all instances have the same hash code, but
if clashes happen too often, it may reduce the efficiency of hash-based
data structures like [HashSet](../../dart-collection/hashset-class) or
[HashMap](../../dart-collection/hashmap-class).

If a subclass overrides [hashCode](hashcode), it should override the
[operator ==](operator_equals) operator as well to maintain consistency.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int get hashCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Object/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/num/hashcode.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../int-class) hashCode

::: {.features}
override
:::
:::

Returns a hash code for a numerical value.

The hash code is compatible with equality. It returns the same value for
an [int](../int-class) and a [double](../double-class) with the same
numerical value, and therefore the same value for the doubles zero and
minus zero.

No guarantees are made about the hash code of NaN values.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get hashCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/string/hashcode.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../int-class) hashCode

::: {.features}
override
:::
:::

A hash code derived from the code units of the string.

This is compatible with [operator ==](operator_equals). Strings with the
same sequence of code units have the same hash code.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get hashCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/String/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/uri/hashcode.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../int-class) hashCode

::: {.features}
override
:::
:::

Returns a hash code computed as `toString().hashCode`.

This guarantees that URIs with the same normalized string representation
have the same hash code.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get hashCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Uri/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/dynamiclibrary/hashcode.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) hashCode

::: {.features}
override
:::
:::

The hash code for a [DynamicLibrary](../dynamiclibrary-class) only
depends on the loaded library.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int get hashCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/DynamicLibrary/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/symbol/hashcode.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../int-class) hashCode

::: {.features}
override
:::
:::

Returns a hash code compatible with [operator==](operator_equals).

Equal symbols have the same hash code.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get hashCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Symbol/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-isolate/sendport/hashcode.md)
[dart:isolate](../../dart-isolate/dart-isolate-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) hashCode

::: {.features}
override
:::
:::

A hash code for this send port that is consistent with the == operator.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get hashCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-isolate/SendPort/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/pointer/hashcode.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) hashCode

::: {.features}
override
:::
:::

The hash code for a Pointer only depends on its address.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get hashCode {
  return address.hashCode;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Pointer/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/type/hashcode.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../int-class) hashCode

::: {.features}
override
:::
:::

A hash code for the type which is compatible with
[operator==](operator_equals).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get hashCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Type/hashCode.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/function/hashcode.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

hashCode property
=================

::: {#getter .section .multi-line-signature}
[int](../int-class) hashCode

::: {.features}
override
:::
:::

A hash code value that is compatible with `operator==`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get hashCode;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Function/hashCode.html>
:::
