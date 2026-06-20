[dart:async](../../dart-async/dart-async-library){._links-link}

singleWhere method
==================

::: {.section .multi-line-signature}
[Future](../future-class)\<T\> singleWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  T element

    ),
2.  {T orElse( )?}

)
:::

Finds the single element in this stream matching `test`.

Like [lastWhere](lastwhere), except that it is an error if more than one
matching element occurs in this stream.

Example:

``` {.language-dart data-language="dart"}
var result = await Stream.fromIterable([1, 2, 3, 6, 9, 12])
    .singleWhere((element) => element % 4 == 0, orElse: () => -1);
print(result); // 12

result = await Stream.fromIterable([2, 6, 8, 12, 24, 32])
    .singleWhere((element) => element % 9 == 0, orElse: () => -1);
print(result); // -1

result = await Stream.fromIterable([2, 6, 8, 12, 24, 32])
    .singleWhere((element) => element % 6 == 0, orElse: () => -1);
// Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<T> singleWhere(bool test(T element), {T orElse()?}) {
  _Future<T> future = new _Future<T>();
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
        if (foundResult) {
          try {
            throw IterableElementError.tooMany();
          } catch (e, s) {
            _cancelAndErrorWithReplacement(subscription, future, e, s);
          }
          return;
        }
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
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/singleWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/singlewhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

singleWhere method
==================

::: {.section .multi-line-signature}
E singleWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    ),
2.  {E orElse( )?}

)

::: {.features}
inherited
:::
:::

Returns the single element that satisfies `test`.

Checks elements to see if `test(element)` returns true. If exactly one
element satisfies `test`, that element is returned. If more than one
matching element is found, throws
[StateError](../../dart-core/stateerror-class). If no matching element
is found, returns the result of `orElse`. If `orElse` is omitted, it
defaults to throwing a [StateError](../../dart-core/stateerror-class).

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[2, 2, 10];
var result = numbers.singleWhere((element) => element > 5); // 10
```

When no matching element is found, the result of calling `orElse` is
returned instead.

``` {.language-dart data-language="dart"}
result = numbers.singleWhere((element) => element == 1,
    orElse: () => -1); // -1
```

There must not be more than one matching element.

``` {.language-dart data-language="dart"}
result = numbers.singleWhere((element) => element == 2); // Throws Error.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E singleWhere(bool test(E element), {E Function()? orElse}) {
  int length = this.length;
  late E match;
  bool matchFound = false;
  for (int i = 0; i < length; i++) {
    E element = elementAt(i);
    if (test(element)) {
      if (matchFound) {
        throw IterableElementError.tooMany();
      }
      matchFound = true;
      match = element;
    }
    if (length != this.length) {
      throw ConcurrentModificationError(this);
    }
  }
  if (matchFound) return match;
  if (orElse != null) return orElse();
  throw IterableElementError.noElement();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/singleWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/singlewhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

singleWhere method
==================

::: {.section .multi-line-signature}
E singleWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    ),
2.  {E orElse( )?}

)

::: {.features}
override
:::
:::

Returns the single element that satisfies `test`.

Checks elements to see if `test(element)` returns true. If exactly one
element satisfies `test`, that element is returned. If more than one
matching element is found, throws
[StateError](../../dart-core/stateerror-class). If no matching element
is found, returns the result of `orElse`. If `orElse` is omitted, it
defaults to throwing a [StateError](../../dart-core/stateerror-class).

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[2, 2, 10];
var result = numbers.singleWhere((element) => element > 5); // 10
```

When no matching element is found, the result of calling `orElse` is
returned instead.

``` {.language-dart data-language="dart"}
result = numbers.singleWhere((element) => element == 1,
    orElse: () => -1); // -1
```

There must not be more than one matching element.

``` {.language-dart data-language="dart"}
result = numbers.singleWhere((element) => element == 2); // Throws Error.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E singleWhere(bool test(E element), {E Function()? orElse}) {
  int length = this.length;
  late E match;
  bool matchFound = false;
  for (int i = 0; i < length; i++) {
    E element = this[i];
    if (test(element)) {
      if (matchFound) {
        throw IterableElementError.tooMany();
      }
      matchFound = true;
      match = element;
    }
    if (length != this.length) {
      throw ConcurrentModificationError(this);
    }
  }
  if (matchFound) return match;
  if (orElse != null) return orElse();
  throw IterableElementError.noElement();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/singleWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/singlewhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

singleWhere method
==================

::: {.section .multi-line-signature}
E singleWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E element

    ),
2.  {E orElse( )?}

)

::: {.features}
override
:::
:::

Returns the single element that satisfies `test`.

Checks elements to see if `test(element)` returns true. If exactly one
element satisfies `test`, that element is returned. If more than one
matching element is found, throws
[StateError](../../dart-core/stateerror-class). If no matching element
is found, returns the result of `orElse`. If `orElse` is omitted, it
defaults to throwing a [StateError](../../dart-core/stateerror-class).

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[2, 2, 10];
var result = numbers.singleWhere((element) => element > 5); // 10
```

When no matching element is found, the result of calling `orElse` is
returned instead.

``` {.language-dart data-language="dart"}
result = numbers.singleWhere((element) => element == 1,
    orElse: () => -1); // -1
```

There must not be more than one matching element.

``` {.language-dart data-language="dart"}
result = numbers.singleWhere((element) => element == 2); // Throws Error.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E singleWhere(bool test(E element), {E Function()? orElse}) {
  late E result;
  bool foundMatching = false;
  for (E element in this) {
    if (test(element)) {
      if (foundMatching) {
        throw IterableElementError.tooMany();
      }
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
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/singleWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/singlewhere.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

singleWhere method
==================

::: {.section .multi-line-signature}
E singleWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  E value

    ),
2.  {E orElse( )?}

)

::: {.features}
override
:::
:::

Returns the single element that satisfies `test`.

Checks elements to see if `test(element)` returns true. If exactly one
element satisfies `test`, that element is returned. If more than one
matching element is found, throws
[StateError](../../dart-core/stateerror-class). If no matching element
is found, returns the result of `orElse`. If `orElse` is omitted, it
defaults to throwing a [StateError](../../dart-core/stateerror-class).

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[2, 2, 10];
var result = numbers.singleWhere((element) => element > 5); // 10
```

When no matching element is found, the result of calling `orElse` is
returned instead.

``` {.language-dart data-language="dart"}
result = numbers.singleWhere((element) => element == 1,
    orElse: () => -1); // -1
```

There must not be more than one matching element.

``` {.language-dart data-language="dart"}
result = numbers.singleWhere((element) => element == 2); // Throws Error.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E singleWhere(bool test(E value), {E Function()? orElse}) {
  late E result;
  bool foundMatching = false;
  for (E element in this) {
    if (test(element)) {
      if (foundMatching) {
        throw IterableElementError.tooMany();
      }
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
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/singleWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/singlewhere.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

singleWhere method
==================

::: {.section .multi-line-signature}
E singleWhere(

1.  [bool](../bool-class) test(
    1.  E element

    ),
2.  {E orElse( )?}

)
:::

Returns the single element that satisfies `test`.

Checks elements to see if `test(element)` returns true. If exactly one
element satisfies `test`, that element is returned. If more than one
matching element is found, throws [StateError](../stateerror-class). If
no matching element is found, returns the result of `orElse`. If
`orElse` is omitted, it defaults to throwing a
[StateError](../stateerror-class).

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[2, 2, 10];
var result = numbers.singleWhere((element) => element > 5); // 10
```

When no matching element is found, the result of calling `orElse` is
returned instead.

``` {.language-dart data-language="dart"}
result = numbers.singleWhere((element) => element == 1,
    orElse: () => -1); // -1
```

There must not be more than one matching element.

``` {.language-dart data-language="dart"}
result = numbers.singleWhere((element) => element == 2); // Throws Error.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E singleWhere(bool test(E element), {E orElse()?}) {
  late E result;
  bool foundMatching = false;
  for (E element in this) {
    if (test(element)) {
      if (foundMatching) {
        throw IterableElementError.tooMany();
      }
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
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/singleWhere.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/singlewhere.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

singleWhere method
==================

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) singleWhere(

1.  [bool](../../dart-core/bool-class) test(
    1.  [String](../../dart-core/string-class) value

    ),
2.  {[String](../../dart-core/string-class) orElse( )?}

)

::: {.features}
inherited
:::
:::

Returns the single element that satisfies `test`.

Checks elements to see if `test(element)` returns true. If exactly one
element satisfies `test`, that element is returned. If more than one
matching element is found, throws
[StateError](../../dart-core/stateerror-class). If no matching element
is found, returns the result of `orElse`. If `orElse` is omitted, it
defaults to throwing a [StateError](../../dart-core/stateerror-class).

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[2, 2, 10];
var result = numbers.singleWhere((element) => element > 5); // 10
```

When no matching element is found, the result of calling `orElse` is
returned instead.

``` {.language-dart data-language="dart"}
result = numbers.singleWhere((element) => element == 1,
    orElse: () => -1); // -1
```

There must not be more than one matching element.

``` {.language-dart data-language="dart"}
result = numbers.singleWhere((element) => element == 2); // Throws Error.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String singleWhere(bool test(String value), {String orElse()?}) =>
    readClasses().singleWhere(test, orElse: orElse);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/singleWhere.html>
:::
