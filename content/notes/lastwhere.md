[dart:async](../../dart-async/dart-async-library){._links-link}

lastWhere method
================

::: {.section .multi-line-signature}
[Future](../future-class)\<T\> lastWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  T element

    ),
2.  {T orElse( )?}

)
:::

Finds the last element in this stream matching `test`.

If this stream emits an error, the returned future is completed with
that error, and processing stops.

Otherwise as [firstWhere](firstwhere), except that the last matching
element is found instead of the first. That means that a non-error
result cannot be provided before this stream is done.

Example:

``` {.language-dart data-language="dart"}
var result = await Stream.fromIterable([1, 3, 4, 7, 12, 24, 32])
    .lastWhere((element) => element % 6 == 0, orElse: () => -1);
print(result); // 24

result = await Stream.fromIterable([1, 3, 4, 7, 12, 24, 32])
    .lastWhere((element) => element % 10 == 0, orElse: () => -1);
print(result); // -1
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<T> lastWhere(bool test(T element), {T orElse()?}) {
  _Future<T> future = new _Future();
  late T result;
  bool foundResult = false;
  StreamSubscription<T> subscription =
      this.listen(null, onError: future._completeError, onDone: () {
    if (foundResult) {
      future._complete(result);
      return;
    }
    if (orElse != null) {
      _runUserCode(orElse, future._complete, future._completeError);
      return;
    }
    try {
      throw IterableElementError.noElement();
    } catch (e, s) {
      _completeWithErrorCallback(future, e, s);
    }
  }, cancelOnError: true);

  subscription.onData((T value) {
    _runUserCode(() => test(value), (bool isMatch) {
      if (isMatch) {
        foundResult = true;
        result = value;
      }
    }, _cancelAndErrorClosure(subscription, future));
  });
  return future;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/lastWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/lastwhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

lastWhere method
================

::: {.section .multi-line-signature}
E lastWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    ),
2.  {E orElse( )?}

)

::: {.features}
inherited
:::
:::

Returns the last element that satisfies the given predicate `test`.

An iterable that can access its elements directly may check its elements
in any order (for example a list starts by checking the last element and
then moves towards the start of the list). The default implementation
iterates elements in iteration order, checks `test(element)` for each,
and finally returns that last one that matched.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.lastWhere((element) => element < 5); // 3
result = numbers.lastWhere((element) => element > 5); // 7
result = numbers.lastWhere((element) => element > 10,
    orElse: () => -1); // -1
```

If no element satisfies `test`, the result of invoking the `orElse`
function is returned. If `orElse` is omitted, it defaults to throwing a
[StateError](../../dart-core/stateerror-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E lastWhere(bool test(E element), {E Function()? orElse}) {
  int length = this.length;
  for (int i = length - 1; i >= 0; i--) {
    E element = elementAt(i);
    if (test(element)) return element;
    if (length != this.length) {
      throw ConcurrentModificationError(this);
    }
  }
  if (orElse != null) return orElse();
  throw IterableElementError.noElement();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/lastWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/lastwhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

lastWhere method
================

::: {.section .multi-line-signature}
E lastWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    ),
2.  {E orElse( )?}

)

::: {.features}
override
:::
:::

Returns the last element that satisfies the given predicate `test`.

An iterable that can access its elements directly may check its elements
in any order (for example a list starts by checking the last element and
then moves towards the start of the list). The default implementation
iterates elements in iteration order, checks `test(element)` for each,
and finally returns that last one that matched.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.lastWhere((element) => element < 5); // 3
result = numbers.lastWhere((element) => element > 5); // 7
result = numbers.lastWhere((element) => element > 10,
    orElse: () => -1); // -1
```

If no element satisfies `test`, the result of invoking the `orElse`
function is returned. If `orElse` is omitted, it defaults to throwing a
[StateError](../../dart-core/stateerror-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E lastWhere(bool test(E element), {E Function()? orElse}) {
  int length = this.length;
  for (int i = length - 1; i >= 0; i--) {
    E element = this[i];
    if (test(element)) return element;
    if (length != this.length) {
      throw ConcurrentModificationError(this);
    }
  }
  if (orElse != null) return orElse();
  throw IterableElementError.noElement();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/lastWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/lastwhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

lastWhere method
================

::: {.section .multi-line-signature}
E lastWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E value

    ),
2.  {E orElse( )?}

)

::: {.features}
override
:::
:::

Returns the last element that satisfies the given predicate `test`.

An iterable that can access its elements directly may check its elements
in any order (for example a list starts by checking the last element and
then moves towards the start of the list). The default implementation
iterates elements in iteration order, checks `test(element)` for each,
and finally returns that last one that matched.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.lastWhere((element) => element < 5); // 3
result = numbers.lastWhere((element) => element > 5); // 7
result = numbers.lastWhere((element) => element > 10,
    orElse: () => -1); // -1
```

If no element satisfies `test`, the result of invoking the `orElse`
function is returned. If `orElse` is omitted, it defaults to throwing a
[StateError](../../dart-core/stateerror-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E lastWhere(bool test(E value), {E Function()? orElse}) {
  late E result;
  bool foundMatching = false;
  for (E element in this) {
    if (test(element)) {
      result = element;
      foundMatching = true;
    }
  }
  if (foundMatching) return result;
  if (orElse != null) return orElse();
  throw IterableElementError.noElement();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/lastWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/lastwhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

lastWhere method
================

::: {.section .multi-line-signature}
E lastWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E value

    ),
2.  {E orElse( )?}

)

::: {.features}
override
:::
:::

Returns the last element that satisfies the given predicate `test`.

An iterable that can access its elements directly may check its elements
in any order (for example a list starts by checking the last element and
then moves towards the start of the list). The default implementation
iterates elements in iteration order, checks `test(element)` for each,
and finally returns that last one that matched.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.lastWhere((element) => element < 5); // 3
result = numbers.lastWhere((element) => element > 5); // 7
result = numbers.lastWhere((element) => element > 10,
    orElse: () => -1); // -1
```

If no element satisfies `test`, the result of invoking the `orElse`
function is returned. If `orElse` is omitted, it defaults to throwing a
[StateError](../../dart-core/stateerror-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E lastWhere(bool test(E value), {E Function()? orElse}) {
  late E result;
  bool foundMatching = false;
  for (E element in this) {
    if (test(element)) {
      result = element;
      foundMatching = true;
    }
  }
  if (foundMatching) return result;
  if (orElse != null) return orElse();
  throw IterableElementError.noElement();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/lastWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/lastwhere.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

lastWhere method
================

::: {.section .multi-line-signature}
E lastWhere(

1.  [bool](../bool-class) test(
    1.  E element

    ),
2.  {E orElse( )?}

)
:::

Returns the last element that satisfies the given predicate `test`.

An iterable that can access its elements directly may check its elements
in any order (for example a list starts by checking the last element and
then moves towards the start of the list). The default implementation
iterates elements in iteration order, checks `test(element)` for each,
and finally returns that last one that matched.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.lastWhere((element) => element < 5); // 3
result = numbers.lastWhere((element) => element > 5); // 7
result = numbers.lastWhere((element) => element > 10,
    orElse: () => -1); // -1
```

If no element satisfies `test`, the result of invoking the `orElse`
function is returned. If `orElse` is omitted, it defaults to throwing a
[StateError](../stateerror-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E lastWhere(bool test(E element), {E orElse()?}) {
  late E result;
  bool foundMatching = false;
  for (E element in this) {
    if (test(element)) {
      result = element;
      foundMatching = true;
    }
  }
  if (foundMatching) return result;
  if (orElse != null) return orElse();
  throw IterableElementError.noElement();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/lastWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/lastwhere.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

lastWhere method
================

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) lastWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [String](../../dart-core/string-class) value

    ),
2.  {[String](../../dart-core/string-class) orElse( )?}

)

::: {.features}
inherited
:::
:::

Returns the last element that satisfies the given predicate `test`.

An iterable that can access its elements directly may check its elements
in any order (for example a list starts by checking the last element and
then moves towards the start of the list). The default implementation
iterates elements in iteration order, checks `test(element)` for each,
and finally returns that last one that matched.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.lastWhere((element) => element < 5); // 3
result = numbers.lastWhere((element) => element > 5); // 7
result = numbers.lastWhere((element) => element > 10,
    orElse: () => -1); // -1
```

If no element satisfies `test`, the result of invoking the `orElse`
function is returned. If `orElse` is omitted, it defaults to throwing a
[StateError](../../dart-core/stateerror-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String lastWhere(bool test(String value), {String orElse()?}) =>
    readClasses().lastWhere(test, orElse: orElse);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/lastWhere.html>
:::
