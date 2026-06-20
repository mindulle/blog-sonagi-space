[dart:core](../../dart-core/dart-core-library){._links-link}

compareTo method
================

::: {.section .multi-line-signature}
[int](../int-class) compareTo(

1.  [num](../num-class) other

)

::: {.features}
override
:::
:::

Compares this to `other`.

Returns a negative number if `this` is less than `other`, zero if they
are equal, and a positive number if `this` is greater than `other`.

The ordering represented by this method is a total ordering of
[num](../num-class) values. All distinct doubles are non-equal, as are
all distinct integers, but integers are equal to doubles if they have
the same numerical value.

For doubles, the `compareTo` operation is different from the partial
ordering given by [operator==](operator_equals),
[operator\<](operator_less) and [operator\>](operator_greater). For
example, IEEE doubles impose that `0.0 == -0.0` and all comparison
operations on NaN return false.

This function imposes a complete ordering for doubles. When using
`compareTo`, the following properties hold:

-   All NaN values are considered equal, and greater than any numeric
    value.
-   -0.0 is less than 0.0 (and the integer 0), but greater than any
    non-zero negative value.
-   Negative infinity is less than all other values and positive
    infinity is greater than all non-NaN values.
-   All other values are compared using their numeric value.

Examples:

``` {.language-dart data-language="dart"}
print(1.compareTo(2)); // => -1
print(2.compareTo(1)); // => 1
print(1.compareTo(1)); // => 0

// The following comparisons yield different results than the
// corresponding comparison operators.
print((-0.0).compareTo(0.0));  // => -1
print(double.nan.compareTo(double.nan));  // => 0
print(double.infinity.compareTo(double.nan)); // => -1

// -0.0, and NaN comparison operators have rules imposed by the IEEE
// standard.
print(-0.0 == 0.0); // => true
print(double.nan == double.nan);  // => false
print(double.infinity < double.nan);  // => false
print(double.nan < double.infinity);  // => false
print(double.nan == double.infinity);  // => false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int compareTo(num other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/compareTo.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/string/compareto.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

compareTo method
================

::: {.section .multi-line-signature}
[int](../int-class) compareTo(

1.  [String](../string-class) other

)

::: {.features}
override
:::
:::

Compares this string to `other`.

Returns a negative value if `this` is ordered before `other`, a positive
value if `this` is ordered after `other`, or zero if `this` and `other`
are equivalent.

The ordering is the same as the ordering of the code units at the first
position where the two strings differ. If one string is a prefix of the
other, then the shorter string is ordered before the longer string. If
the strings have exactly the same content, they are equivalent with
regard to the ordering. Ordering does not check for Unicode equivalence.
The comparison is case sensitive.

``` {.language-dart data-language="dart"}
var relation = 'Dart'.compareTo('Go');
print(relation); // < 0
relation = 'Go'.compareTo('Forward');
print(relation); // > 0
relation = 'Forward'.compareTo('Forward');
print(relation); // 0
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int compareTo(String other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/String/compareTo.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/datetime/compareto.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

compareTo method
================

::: {.section .multi-line-signature}
[int](../int-class) compareTo(

1.  [DateTime](../datetime-class) other

)

::: {.features}
override
:::
:::

Compares this DateTime object to `other`, returning zero if the values
are equal.

A [compareTo](compareto) function returns:

-   a negative value if this DateTime [isBefore](isbefore) `other`.
-   `0` if this DateTime [isAtSameMomentAs](isatsamemomentas) `other`,
    and
-   a positive value otherwise (when this DateTime [isAfter](isafter)
    `other`).

``` {.language-dart data-language="dart"}
final now = DateTime.now();
final future = now.add(const Duration(days: 2));
final past = now.subtract(const Duration(days: 2));
final newDate = now.toUtc();

print(now.compareTo(future)); // -1
print(now.compareTo(past)); // 1
print(now.compareTo(newDate)); // 0
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external int compareTo(DateTime other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/DateTime/compareTo.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/duration/compareto.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

compareTo method
================

::: {.section .multi-line-signature}
[int](../int-class) compareTo(

1.  [Duration](../duration-class) other

)

::: {.features}
override
:::
:::

Compares this [Duration](../duration-class) to `other`, returning zero
if the values are equal.

Returns a negative integer if this [Duration](../duration-class) is
shorter than `other`, or a positive integer if it is longer.

A negative [Duration](../duration-class) is always considered shorter
than a positive one.

It is always the case that `duration1.compareTo(duration2) < 0` iff
`(someDate + duration1).compareTo(someDate + duration2) < 0`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int compareTo(Duration other) => _duration.compareTo(other._duration);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Duration/compareTo.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/bigint/compareto.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

compareTo method
================

::: {.section .multi-line-signature}
[int](../int-class) compareTo(

1.  [BigInt](../bigint-class) other

)

::: {.features}
override
:::
:::

Compares this to `other`.

Returns a negative number if `this` is less than `other`, zero if they
are equal, and a positive number if `this` is greater than `other`.

Example:

``` {.language-dart data-language="dart"}
print(BigInt.from(1).compareTo(BigInt.from(2))); // => -1
print(BigInt.from(2).compareTo(BigInt.from(1))); // => 1
print(BigInt.from(1).compareTo(BigInt.from(1))); // => 0
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int compareTo(BigInt other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/compareTo.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/comparable/compareto.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

compareTo method
================

::: {.section .multi-line-signature}
[int](../int-class) compareTo(

1.  T other

)
:::

Compares this object to another object.

Returns a value like a [Comparator](../comparator) when comparing `this`
to `other`. That is, it returns a negative integer if `this` is ordered
before `other`, a positive integer if `this` is ordered after `other`,
and zero if `this` and `other` are ordered together.

The `other` argument must be a value that is comparable to this object.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int compareTo(T other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Comparable/compareTo.html>
:::
