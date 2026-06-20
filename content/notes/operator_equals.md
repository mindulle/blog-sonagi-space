[dart:core](../../dart-core/dart-core-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../bool-class) operator ==(

1.  [Object](../object-class) other

)

::: {.features}
override
:::
:::

Test whether this value is numerically equal to `other`.

If both operands are [double](../double-class)s, they are equal if they
have the same representation, except that:

-   zero and minus zero (0.0 and -0.0) are considered equal. They both
    have the numerical value zero.
-   NaN is not equal to anything, including NaN. If either operand is
    NaN, the result is always false.

If one operand is a [double](../double-class) and the other is an
[int](../int-class), they are equal if the double has an integer value
(finite with no fractional part) and the numbers have the same numerical
value.

If both operands are integers, they are equal if they have the same
value.

Returns false if `other` is not a [num](../num-class).

Notice that the behavior for NaN is non-reflexive. This means that
equality of double values is not a proper equality relation, as is
otherwise required of `operator==`. Using NaN in, e.g., a
[HashSet](../../dart-collection/hashset-class) will fail to work. The
behavior is the standard IEEE-754 equality of doubles.

If you can avoid NaN values, the remaining doubles do have a proper
equality relation, and can be used safely.

Use [compareTo](compareto) for a comparison that distinguishes zero and
minus zero, and that considers NaN values as equal.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/rectangle/operator_equals.md)
[dart:math](../../dart-math/dart-math-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator ==(

1.  [Object](../../dart-core/object-class) other

)

::: {.features}
inherited
:::
:::

The equality operator.

The default behavior for all [Object](../../dart-core/object-class)s is
to return true if and only if this object and `other` are the same
object.

Override this method to specify a different equality relation on a
class. The overriding method must still be an equivalence relation. That
is, it must be:

-   Total: It must return a boolean for all arguments. It should never
    throw.

-   Reflexive: For all objects `o`, `o == o` must be true.

-   Symmetric: For all objects `o1` and `o2`, `o1 == o2` and `o2 == o1`
    must either both be true, or both be false.

-   Transitive: For all objects `o1`, `o2`, and `o3`, if `o1 == o2` and
    `o2 == o3` are true, then `o1 == o3` must be true.

The method should also be consistent over time, so whether two objects
are equal should only change if at least one of the objects was
modified.

If a subclass overrides the equality operator, it should override the
[hashCode](hashcode) method as well to maintain consistency.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other) =>
    other is Rectangle &&
    left == other.left &&
    top == other.top &&
    right == other.right &&
    bottom == other.bottom;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/Rectangle/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssrect/operator_equals.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator ==(

1.  [Object](../../dart-core/object-class) other

)

::: {.features}
override
:::
:::

The equality operator.

The default behavior for all [Object](../../dart-core/object-class)s is
to return true if and only if this object and `other` are the same
object.

Override this method to specify a different equality relation on a
class. The overriding method must still be an equivalence relation. That
is, it must be:

-   Total: It must return a boolean for all arguments. It should never
    throw.

-   Reflexive: For all objects `o`, `o == o` must be true.

-   Symmetric: For all objects `o1` and `o2`, `o1 == o2` and `o2 == o1`
    must either both be true, or both be false.

-   Transitive: For all objects `o1`, `o2`, and `o3`, if `o1 == o2` and
    `o2 == o3` are true, then `o1 == o3` must be true.

The method should also be consistent over time, so whether two objects
are equal should only change if at least one of the objects was
modified.

If a subclass overrides the equality operator, it should override the
[hashCode](hashcode) method as well to maintain consistency.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(other) =>
    other is Rectangle &&
    left == other.left &&
    top == other.top &&
    right == other.right &&
    bottom == other.bottom;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssRect/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domrectreadonly/operator_equals.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator ==(

1.  [Object](../../dart-core/object-class) other

)
:::

The equality operator.

The default behavior for all [Object](../../dart-core/object-class)s is
to return true if and only if this object and `other` are the same
object.

Override this method to specify a different equality relation on a
class. The overriding method must still be an equivalence relation. That
is, it must be:

-   Total: It must return a boolean for all arguments. It should never
    throw.

-   Reflexive: For all objects `o`, `o == o` must be true.

-   Symmetric: For all objects `o1` and `o2`, `o1 == o2` and `o2 == o1`
    must either both be true, or both be false.

-   Transitive: For all objects `o1`, `o2`, and `o3`, if `o1 == o2` and
    `o2 == o3` are true, then `o1 == o3` must be true.

The method should also be consistent over time, so whether two objects
are equal should only change if at least one of the objects was
modified.

If a subclass overrides the equality operator, it should override the
[hashCode](hashcode) method as well to maintain consistency.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(other) =>
    other is Rectangle &&
    left == other.left &&
    top == other.top &&
    width == other.width &&
    height == other.height;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomRectReadOnly/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/function/operator_equals.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../bool-class) operator ==(

1.  [Object](../object-class) other

)

::: {.features}
override
:::
:::

Test whether another object is equal to this function.

Function objects are only equal to other function objects (an object
satisfying `object is Function`), and never to non-function objects.

Some function objects are considered equal by `==` because they are
recognized as representing the \"same function\":

-   It is the same object. Static and top-level functions are compile
    time constants when used as values, so referring to the same
    function twice always give the same object, as does referring to a
    local function declaration twice in the same scope where it was
    declared.
-   if they refer to the same member method extracted from the same
    object. Repeatedly extracting an instance method of an object as a
    function value gives equal, but not necessarily identical, function
    values.

Different evaluations of function literals never give rise to equal
function objects. Each time a function literal is evaluated, it creates
a new function value that is not equal to any other function value, not
even ones created by the same expression.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Function/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-js/jsobject/operator_equals.md)
[dart:js](../../dart-js/dart-js-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator ==(

1.  [Object](../../dart-core/object-class) other

)

::: {.features}
override
:::
:::

The equality operator.

The default behavior for all [Object](../../dart-core/object-class)s is
to return true if and only if this object and `other` are the same
object.

Override this method to specify a different equality relation on a
class. The overriding method must still be an equivalence relation. That
is, it must be:

-   Total: It must return a boolean for all arguments. It should never
    throw.

-   Reflexive: For all objects `o`, `o == o` must be true.

-   Symmetric: For all objects `o1` and `o2`, `o1 == o2` and `o2 == o1`
    must either both be true, or both be false.

-   Transitive: For all objects `o1`, `o2`, and `o3`, if `o1 == o2` and
    `o2 == o3` are true, then `o1 == o3` must be true.

The method should also be consistent over time, so whether two objects
are equal should only change if at least one of the objects was
modified.

If a subclass overrides the equality operator, it should override the
[hashCode](hashcode) method as well to maintain consistency.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js/JsObject/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/object/operator_equals.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../bool-class) operator ==(

1.  [Object](../object-class) other

)
:::

The equality operator.

The default behavior for all [Object](../object-class)s is to return
true if and only if this object and `other` are the same object.

Override this method to specify a different equality relation on a
class. The overriding method must still be an equivalence relation. That
is, it must be:

-   Total: It must return a boolean for all arguments. It should never
    throw.

-   Reflexive: For all objects `o`, `o == o` must be true.

-   Symmetric: For all objects `o1` and `o2`, `o1 == o2` and `o2 == o1`
    must either both be true, or both be false.

-   Transitive: For all objects `o1`, `o2`, and `o3`, if `o1 == o2` and
    `o2 == o3` are true, then `o1 == o3` must be true.

The method should also be consistent over time, so whether two objects
are equal should only change if at least one of the objects was
modified.

If a subclass overrides the equality operator, it should override the
[hashCode](hashcode) method as well to maintain consistency.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Object/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/string/operator_equals.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../bool-class) operator ==(

1.  [Object](../object-class) other

)

::: {.features}
override
:::
:::

Whether `other` is a `String` with the same sequence of code units.

This method compares each individual code unit of the strings. It does
not check for Unicode equivalence. For example, both the following
strings represent the string \'Amélie\', but due to their different
encoding, are not equal:

``` {.language-dart data-language="dart"}
'Am\xe9lie' == 'Ame\u{301}lie'; // false
```

The first string encodes \'é\' as a single unicode code unit (also a
single rune), whereas the second string encodes it as \'e\' with the
combining accent character \'◌́\'.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/String/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/datetime/operator_equals.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../bool-class) operator ==(

1.  [Object](../object-class) other

)

::: {.features}
override
:::
:::

Returns true if `other` is a [DateTime](../datetime-class) at the same
moment and in the same time zone (UTC or local).

``` {.language-dart data-language="dart"}
final dDayUtc = DateTime.utc(1944, 6, 6);
final dDayLocal = dDayUtc.toLocal();

// These two dates are at the same moment, but are in different zones.
assert(dDayUtc != dDayLocal);
print(dDayUtc != dDayLocal); // true
```

See [isAtSameMomentAs](isatsamemomentas) for a comparison that compares
moments in time independently of their zones.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/DateTime/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/point/operator_equals.md)
[dart:math](../../dart-math/dart-math-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator ==(

1.  [Object](../../dart-core/object-class) other

)

::: {.features}
override
:::
:::

Whether `other` is a point with the same coordinates as this point.

Returns `true` if `other` is a [Point](../point-class) with [x](x) and
[y](y) coordinates equal to the corresponding coordinates of this point,
and `false` otherwise.

Example:

``` {.language-dart data-language="dart"}
var result = const Point(0, 0) == const Point(0, 0); // true
result = const Point(1.0, 0) == const Point(-1.0, 0); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other) =>
    other is Point && x == other.x && y == other.y;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/Point/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/type/operator_equals.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../bool-class) operator ==(

1.  [Object](../object-class) other

)

::: {.features}
override
:::
:::

Whether `other` is a [Type](../type-class) instance representing an
equivalent type.

The language specification dictates which types are considered to be the
equivalent. If two types are equivalent, it\'s guaranteed that they are
subtypes of each other, but there are also types which are subtypes of
each other, and which are not equivalent (for example `dynamic` and
`void`, or `FutureOr<Object>` and `Object`).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Type/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-mirrors/instancemirror/operator_equals.md)
[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator ==(

1.  [Object](../../dart-core/object-class) other

)

::: {.features}
override
:::
:::

Whether this mirror is equal to `other`.

The equality holds if and only if

1.  `other` is a mirror of the same kind, and

2.  either

    a\. [hasReflectee](hasreflectee) is true and so is
    `identical(reflectee, other.reflectee)`, or

    b\. the remote objects reflected by this mirror and by `other` are
    identical.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/InstanceMirror/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-mirrors/classmirror/operator_equals.md)
[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator ==(

1.  [Object](../../dart-core/object-class) other

)

::: {.features}
override
:::
:::

Whether this mirror is equal to `other`.

The equality holds if and only if

1.  `other` is a mirror of the same kind, and
2.  This mirror and `other` reflect the same class.

Note that if the reflected class is an invocation of a generic class, 2.
implies that the reflected class and `other` have equal type arguments.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/ClassMirror/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-mirrors/isolatemirror/operator_equals.md)
[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator ==(

1.  [Object](../../dart-core/object-class) other

)

::: {.features}
override
:::
:::

Whether `other` is an [IsolateMirror](../isolatemirror-class) on the
same isolate as this mirror.

The equality holds if and only if

1.  `other` is a mirror of the same kind, and
2.  the isolate being reflected by this mirror is the same isolate being
    reflected by `other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/IsolateMirror/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-mirrors/typevariablemirror/operator_equals.md)
[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator ==(

1.  [Object](../../dart-core/object-class) other

)

::: {.features}
override
:::
:::

Whether `other` is a [TypeVariableMirror](../typevariablemirror-class)
on the same type variable as this mirror.

The equality holds if and only if

1.  `other` is a mirror of the same kind, and
2.  `simpleName == other.simpleName` and `owner == other.owner`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/TypeVariableMirror/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-mirrors/librarymirror/operator_equals.md)
[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator ==(

1.  [Object](../../dart-core/object-class) other

)

::: {.features}
override
:::
:::

Whether this mirror is equal to `other`.

The equality holds if and only if

1.  `other` is a mirror of the same kind, and
2.  The library being reflected by this mirror and the library being
    reflected by `other` are the same library in the same isolate.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/LibraryMirror/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/duration/operator_equals.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../bool-class) operator ==(

1.  [Object](../object-class) other

)

::: {.features}
override
:::
:::

Whether this [Duration](../duration-class) has the same length as
`other`.

Durations have the same length if they have the same number of
microseconds, as reported by [inMicroseconds](inmicroseconds).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other) =>
    other is Duration && _duration == other.inMicroseconds;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Duration/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-mirrors/variablemirror/operator_equals.md)
[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator ==(

1.  [Object](../../dart-core/object-class) other

)

::: {.features}
override
:::
:::

Whether this mirror is equal to `other`.

The equality holds if and only if

1.  `other` is a mirror of the same kind, and
2.  `simpleName == other.simpleName` and `owner == other.owner`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/VariableMirror/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-mirrors/methodmirror/operator_equals.md)
[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator ==(

1.  [Object](../../dart-core/object-class) other

)

::: {.features}
override
:::
:::

Whether this mirror is equal to `other`.

The equality holds if and only if

1.  `other` is a mirror of the same kind, and
2.  `simpleName == other.simpleName` and `owner == other.owner`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/MethodMirror/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/pointer/operator_equals.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator ==(

1.  [Object](../../dart-core/object-class) other

)

::: {.features}
override
:::
:::

Equality for Pointers only depends on their address.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other) {
  if (other is! Pointer) return false;
  Pointer otherPointer = other;
  return address == otherPointer.address;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Pointer/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/operator_equals.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../bool-class) operator ==(

1.  [Object](../object-class) other

)

::: {.features}
override
:::
:::

Whether this list is equal to `other`.

Lists are, by default, only equal to themselves. Even if `other` is also
a list, the equality comparison does not compare the elements of the two
lists.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/symbol/operator_equals.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../bool-class) operator ==(

1.  [Object](../object-class) other

)

::: {.features}
override
:::
:::

Symbols are equal to other symbols with an equal (`==`) name string.

Symbols representing library private names also need to represent names
from the same library.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Symbol/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-isolate/sendport/operator_equals.md)
[dart:isolate](../../dart-isolate/dart-isolate-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator ==(

1.  [Object](../../dart-core/object-class) other

)

::: {.features}
override
:::
:::

Tests whether `other` is a [SendPort](../sendport-class) pointing to the
same [ReceivePort](../receiveport-class) as this one.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(var other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-isolate/SendPort/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/dynamiclibrary/operator_equals.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) operator ==(

1.  [Object](../../dart-core/object-class) other

)

::: {.features}
override
:::
:::

Dynamic libraries are equal if they load the same library.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/DynamicLibrary/operator_equals.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/uri/operator_equals.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

operator == method
==================

::: {.section .multi-line-signature}
[bool](../bool-class) operator ==(

1.  [Object](../object-class) other

)

::: {.features}
override
:::
:::

A URI is equal to another URI with the same normalized representation.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool operator ==(Object other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Uri/operator_equals.html>
:::
