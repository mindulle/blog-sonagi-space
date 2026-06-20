[dart:async](../../dart-async/dart-async-library){._links-link}

firstWhere method
=================

::: {.section .multi-line-signature}
[Future](../future-class)\<T\> firstWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  T element

    ),
2.  {T orElse( )?}

)
:::

Finds the first element of this stream matching `test`.

Returns a future that is completed with the first element of this stream
for which `test` returns `true`.

If no such element is found before this stream is done, and an `orElse`
function is provided, the result of calling `orElse` becomes the value
of the future. If `orElse` throws, the returned future is completed with
that error.

If this stream emits an error before the first matching element, the
returned future is completed with that error, and processing stops.

Stops listening to this stream after the first matching element or error
has been received.

Internally the method cancels its subscription after the first element
that matches the predicate. This means that single-subscription
(non-broadcast) streams are closed and cannot be reused after a call to
this method.

If an error occurs, or if this stream ends without finding a match and
with no `orElse` function provided, the returned future is completed
with an error.

Example:

``` {.language-dart data-language="dart"}
var result = await Stream.fromIterable([1, 3, 4, 9, 12])
    .firstWhere((element) => element % 6 == 0, orElse: () => -1);
print(result); // 12

result = await Stream.fromIterable([1, 2, 3, 4, 5])
    .firstWhere((element) => element % 6 == 0, orElse: () => -1);
print(result); // -1
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<T> firstWhere(bool test(T element), {T orElse()?}) {
  _Future<T> future = new _Future();
  StreamSubscription<T> subscription =
      this.listen(null, onError: future._completeError, onDone: () {
    if (orElse != null) {
      _runUserCode(orElse, future._complete, future._completeError);
      return;
    }
    try {
      // Sets stackTrace on error.
      throw IterableElementError.noElement();
    } catch (e, s) {
      _completeWithErrorCallback(future, e, s);
    }
  }, cancelOnError: true);

  subscription.onData((T value) {
    _runUserCode(() => test(value), (bool isMatch) {
      if (isMatch) {
        _cancelAndValue(subscription, future, value);
      }
    }, _cancelAndErrorClosure(subscription, future));
  });
  return future;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/firstWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/firstwhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

firstWhere method
=================

::: {.section .multi-line-signature}
E firstWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    ),
2.  {E orElse( )?}

)

::: {.features}
inherited
:::
:::

Returns the first element that satisfies the given predicate `test`.

Iterates through elements and returns the first to satisfy `test`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.firstWhere((element) => element < 5); // 1
result = numbers.firstWhere((element) => element > 5); // 6
result =
    numbers.firstWhere((element) => element > 10, orElse: () => -1); // -1
```

If no element satisfies `test`, the result of invoking the `orElse`
function is returned. If `orElse` is omitted, it defaults to throwing a
[StateError](../../dart-core/stateerror-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E firstWhere(bool test(E element), {E Function()? orElse}) {
  int length = this.length;
  for (int i = 0; i < length; i++) {
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
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/firstWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/firstwhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

firstWhere method
=================

::: {.section .multi-line-signature}
E firstWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    ),
2.  {E orElse( )?}

)

::: {.features}
override
:::
:::

Returns the first element that satisfies the given predicate `test`.

Iterates through elements and returns the first to satisfy `test`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.firstWhere((element) => element < 5); // 1
result = numbers.firstWhere((element) => element > 5); // 6
result =
    numbers.firstWhere((element) => element > 10, orElse: () => -1); // -1
```

If no element satisfies `test`, the result of invoking the `orElse`
function is returned. If `orElse` is omitted, it defaults to throwing a
[StateError](../../dart-core/stateerror-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E firstWhere(bool test(E element), {E Function()? orElse}) {
  int length = this.length;
  for (int i = 0; i < length; i++) {
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
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/firstWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/firstwhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

firstWhere method
=================

::: {.section .multi-line-signature}
E firstWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E value

    ),
2.  {E orElse( )?}

)

::: {.features}
override
:::
:::

Returns the first element that satisfies the given predicate `test`.

Iterates through elements and returns the first to satisfy `test`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.firstWhere((element) => element < 5); // 1
result = numbers.firstWhere((element) => element > 5); // 6
result =
    numbers.firstWhere((element) => element > 10, orElse: () => -1); // -1
```

If no element satisfies `test`, the result of invoking the `orElse`
function is returned. If `orElse` is omitted, it defaults to throwing a
[StateError](../../dart-core/stateerror-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E firstWhere(bool test(E value), {E Function()? orElse}) {
  for (E element in this) {
    if (test(element)) return element;
  }
  if (orElse != null) return orElse();
  throw IterableElementError.noElement();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/firstWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/firstwhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

firstWhere method
=================

::: {.section .multi-line-signature}
E firstWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E value

    ),
2.  {E orElse( )?}

)

::: {.features}
override
:::
:::

Returns the first element that satisfies the given predicate `test`.

Iterates through elements and returns the first to satisfy `test`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.firstWhere((element) => element < 5); // 1
result = numbers.firstWhere((element) => element > 5); // 6
result =
    numbers.firstWhere((element) => element > 10, orElse: () => -1); // -1
```

If no element satisfies `test`, the result of invoking the `orElse`
function is returned. If `orElse` is omitted, it defaults to throwing a
[StateError](../../dart-core/stateerror-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E firstWhere(bool test(E value), {E Function()? orElse}) {
  for (E element in this) {
    if (test(element)) return element;
  }
  if (orElse != null) return orElse();
  throw IterableElementError.noElement();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/firstWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/firstwhere.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

firstWhere method
=================

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) firstWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [String](../../dart-core/string-class) value

    ),
2.  {[String](../../dart-core/string-class) orElse( )?}

)

::: {.features}
inherited
:::
:::

Returns the first element that satisfies the given predicate `test`.

Iterates through elements and returns the first to satisfy `test`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.firstWhere((element) => element < 5); // 1
result = numbers.firstWhere((element) => element > 5); // 6
result =
    numbers.firstWhere((element) => element > 10, orElse: () => -1); // -1
```

If no element satisfies `test`, the result of invoking the `orElse`
function is returned. If `orElse` is omitted, it defaults to throwing a
[StateError](../../dart-core/stateerror-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String firstWhere(bool test(String value), {String orElse()?}) =>
    readClasses().firstWhere(test, orElse: orElse);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/firstWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/firstwhere.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

firstWhere method
=================

::: {.section .multi-line-signature}
E firstWhere(

1.  [bool](../bool-class) test(
    1.  E element

    ),
2.  {E orElse( )?}

)
:::

Returns the first element that satisfies the given predicate `test`.

Iterates through elements and returns the first to satisfy `test`.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
var result = numbers.firstWhere((element) => element < 5); // 1
result = numbers.firstWhere((element) => element > 5); // 6
result =
    numbers.firstWhere((element) => element > 10, orElse: () => -1); // -1
```

If no element satisfies `test`, the result of invoking the `orElse`
function is returned. If `orElse` is omitted, it defaults to throwing a
[StateError](../stateerror-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E firstWhere(bool test(E element), {E orElse()?}) {
  for (E element in this) {
    if (test(element)) return element;
  }
  if (orElse != null) return orElse();
  throw IterableElementError.noElement();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/firstWhere.html>
:::
