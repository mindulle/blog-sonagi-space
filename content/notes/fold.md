[dart:async](../../dart-async/dart-async-library){._links-link}

fold\<S\> method
================

::: {.section .multi-line-signature}
[Future](../future-class)\<S\> fold\<S\>(

1.  S initialValue,
2.  S combine(
    1.  S previous,
    2.  T element

    )

)
:::

Combines a sequence of values by repeatedly applying `combine`.

Similar to [Iterable.fold](../../dart-core/iterable/fold), this function
maintains a value, starting with `initialValue` and updated for each
element of this stream. For each element, the value is updated to the
result of calling `combine` with the previous value and the element.

When this stream is done, the returned future is completed with the
value at that time. For an empty stream, the future is completed with
`initialValue`.

If this stream emits an error, or the call to `combine` throws, the
returned future is completed with that error, and processing is stopped.

Example:

``` {.language-dart data-language="dart"}
final result = await Stream.fromIterable([2, 6, 10, 8, 2])
    .fold<int>(10, (previous, element) => previous + element);
print(result); // 38
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<S> fold<S>(S initialValue, S combine(S previous, T element)) {
  _Future<S> result = new _Future<S>();
  S value = initialValue;
  StreamSubscription<T> subscription =
      this.listen(null, onError: result._completeError, onDone: () {
    result._complete(value);
  }, cancelOnError: true);
  subscription.onData((T element) {
    _runUserCode(() => combine(value, element), (S newValue) {
      value = newValue;
    }, _cancelAndErrorClosure(subscription, result));
  });
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/fold.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/fold.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

fold\<T\> method
================

::: {.section .multi-line-signature}
T fold\<T\>(

1.  T initialValue,
2.  T combine(
    1.  T previousValue,
    2.  E element

    )

)

::: {.features}
inherited
:::
:::

Reduces a collection to a single value by iteratively combining each
element of the collection with an existing value

Uses `initialValue` as the initial value, then iterates through the
elements and updates the value with each element using the `combine`
function, as if by:

``` {.language-dart data-language="dart"}
var value = initialValue;
for (E element in this) {
  value = combine(value, element);
}
return value;
```

Example of calculating the sum of an iterable:

``` {.language-dart data-language="dart"}
final numbers = <double>[10, 2, 5, 0.5];
const initialValue = 100.0;
final result = numbers.fold<double>(
    initialValue, (previousValue, element) => previousValue + element);
print(result); // 117.5
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
T fold<T>(T initialValue, T combine(T previousValue, E element)) {
  var value = initialValue;
  int length = this.length;
  for (int i = 0; i < length; i++) {
    value = combine(value, elementAt(i));
    if (length != this.length) {
      throw ConcurrentModificationError(this);
    }
  }
  return value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/fold.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/fold.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

fold\<T\> method
================

::: {.section .multi-line-signature}
T fold\<T\>(

1.  T initialValue,
2.  T combine(
    1.  T previousValue,
    2.  E element

    )

)

::: {.features}
override
:::
:::

Reduces a collection to a single value by iteratively combining each
element of the collection with an existing value

Uses `initialValue` as the initial value, then iterates through the
elements and updates the value with each element using the `combine`
function, as if by:

``` {.language-dart data-language="dart"}
var value = initialValue;
for (E element in this) {
  value = combine(value, element);
}
return value;
```

Example of calculating the sum of an iterable:

``` {.language-dart data-language="dart"}
final numbers = <double>[10, 2, 5, 0.5];
const initialValue = 100.0;
final result = numbers.fold<double>(
    initialValue, (previousValue, element) => previousValue + element);
print(result); // 117.5
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
T fold<T>(T initialValue, T combine(T previousValue, E element)) {
  var value = initialValue;
  int length = this.length;
  for (int i = 0; i < length; i++) {
    value = combine(value, this[i]);
    if (length != this.length) {
      throw ConcurrentModificationError(this);
    }
  }
  return value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/fold.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/fold.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

fold\<T\> method
================

::: {.section .multi-line-signature}
T fold\<T\>(

1.  T initialValue,
2.  T combine(
    1.  T previousValue,
    2.  E element

    )

)

::: {.features}
override
:::
:::

Reduces a collection to a single value by iteratively combining each
element of the collection with an existing value

Uses `initialValue` as the initial value, then iterates through the
elements and updates the value with each element using the `combine`
function, as if by:

``` {.language-dart data-language="dart"}
var value = initialValue;
for (E element in this) {
  value = combine(value, element);
}
return value;
```

Example of calculating the sum of an iterable:

``` {.language-dart data-language="dart"}
final numbers = <double>[10, 2, 5, 0.5];
const initialValue = 100.0;
final result = numbers.fold<double>(
    initialValue, (previousValue, element) => previousValue + element);
print(result); // 117.5
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
T fold<T>(T initialValue, T combine(T previousValue, E element)) {
  var value = initialValue;
  for (E element in this) value = combine(value, element);
  return value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/fold.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/fold.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

fold\<T\> method
================

::: {.section .multi-line-signature}
T fold\<T\>(

1.  T initialValue,
2.  T combine(
    1.  T previousValue,
    2.  E element

    )

)

::: {.features}
override
:::
:::

Reduces a collection to a single value by iteratively combining each
element of the collection with an existing value

Uses `initialValue` as the initial value, then iterates through the
elements and updates the value with each element using the `combine`
function, as if by:

``` {.language-dart data-language="dart"}
var value = initialValue;
for (E element in this) {
  value = combine(value, element);
}
return value;
```

Example of calculating the sum of an iterable:

``` {.language-dart data-language="dart"}
final numbers = <double>[10, 2, 5, 0.5];
const initialValue = 100.0;
final result = numbers.fold<double>(
    initialValue, (previousValue, element) => previousValue + element);
print(result); // 117.5
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
T fold<T>(T initialValue, T combine(T previousValue, E element)) {
  var value = initialValue;
  for (E element in this) value = combine(value, element);
  return value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/fold.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/fold.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

fold\<T\> method
================

::: {.section .multi-line-signature}
T fold\<T\>(

1.  T initialValue,
2.  T combine(
    1.  T previousValue,
    2.  [String](../../dart-core/string-class) element

    )

)

::: {.features}
inherited
:::
:::

Reduces a collection to a single value by iteratively combining each
element of the collection with an existing value

Uses `initialValue` as the initial value, then iterates through the
elements and updates the value with each element using the `combine`
function, as if by:

``` {.language-dart data-language="dart"}
var value = initialValue;
for (E element in this) {
  value = combine(value, element);
}
return value;
```

Example of calculating the sum of an iterable:

``` {.language-dart data-language="dart"}
final numbers = <double>[10, 2, 5, 0.5];
const initialValue = 100.0;
final result = numbers.fold<double>(
    initialValue, (previousValue, element) => previousValue + element);
print(result); // 117.5
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
T fold<T>(T initialValue, T combine(T previousValue, String element)) {
  return readClasses().fold<T>(initialValue, combine);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/fold.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/fold.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

fold\<T\> method
================

::: {.section .multi-line-signature}
T fold\<T\>(

1.  T initialValue,
2.  T combine(
    1.  T previousValue,
    2.  E element

    )

)
:::

Reduces a collection to a single value by iteratively combining each
element of the collection with an existing value

Uses `initialValue` as the initial value, then iterates through the
elements and updates the value with each element using the `combine`
function, as if by:

``` {.language-dart data-language="dart"}
var value = initialValue;
for (E element in this) {
  value = combine(value, element);
}
return value;
```

Example of calculating the sum of an iterable:

``` {.language-dart data-language="dart"}
final numbers = <double>[10, 2, 5, 0.5];
const initialValue = 100.0;
final result = numbers.fold<double>(
    initialValue, (previousValue, element) => previousValue + element);
print(result); // 117.5
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
T fold<T>(T initialValue, T combine(T previousValue, E element)) {
  var value = initialValue;
  for (E element in this) value = combine(value, element);
  return value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/fold.html>
:::
