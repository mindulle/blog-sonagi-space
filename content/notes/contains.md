[dart:collection](../../dart-collection/dart-collection-library){._links-link}

contains method
===============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) contains(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
inherited
:::
:::

Whether the collection contains an element equal to `element`.

This operation will check each element in order for being equal to
`element`, unless it has a more efficient way to find an element equal
to `element`.

The equality used to determine whether `element` is equal to an element
of the iterable defaults to the
[Object.==](../../dart-core/object/operator_equals) of the element.

Some types of iterable may have a different equality used for its
elements. For example, a [Set](../../dart-core/set-class) may have a
custom equality (see [Set.identity](../../dart-core/set/set.identity))
that its `contains` uses. Likewise the `Iterable` returned by a
[Map.keys](../../dart-core/map/keys) call should use the same equality
that the `Map` uses for keys.

Example:

``` {.language-dart data-language="dart"}
final gasPlanets = <int, String>{1: 'Jupiter', 2: 'Saturn'};
final containsOne = gasPlanets.keys.contains(1); // true
final containsFive = gasPlanets.keys.contains(5); // false
final containsJupiter = gasPlanets.values.contains('Jupiter'); // true
final containsMercury = gasPlanets.values.contains('Mercury'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool contains(Object? element) {
  int length = this.length;
  for (int i = 0; i < length; i++) {
    if (elementAt(i) == element) return true;
    if (length != this.length) {
      throw ConcurrentModificationError(this);
    }
  }
  return false;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/contains.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/contains.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

contains method
===============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) contains(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
override
:::
:::

Whether the collection contains an element equal to `element`.

This operation will check each element in order for being equal to
`element`, unless it has a more efficient way to find an element equal
to `element`.

The equality used to determine whether `element` is equal to an element
of the iterable defaults to the
[Object.==](../../dart-core/object/operator_equals) of the element.

Some types of iterable may have a different equality used for its
elements. For example, a [Set](../../dart-core/set-class) may have a
custom equality (see [Set.identity](../../dart-core/set/set.identity))
that its `contains` uses. Likewise the `Iterable` returned by a
[Map.keys](../../dart-core/map/keys) call should use the same equality
that the `Map` uses for keys.

Example:

``` {.language-dart data-language="dart"}
final gasPlanets = <int, String>{1: 'Jupiter', 2: 'Saturn'};
final containsOne = gasPlanets.keys.contains(1); // true
final containsFive = gasPlanets.keys.contains(5); // false
final containsJupiter = gasPlanets.values.contains('Jupiter'); // true
final containsMercury = gasPlanets.values.contains('Mercury'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool contains(Object? element) {
  int length = this.length;
  for (int i = 0; i < length; i++) {
    if (this[i] == element) return true;
    if (length != this.length) {
      throw ConcurrentModificationError(this);
    }
  }
  return false;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/contains.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/contains.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

contains method
===============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) contains(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
override
:::
:::

Whether the collection contains an element equal to `element`.

This operation will check each element in order for being equal to
`element`, unless it has a more efficient way to find an element equal
to `element`.

The equality used to determine whether `element` is equal to an element
of the iterable defaults to the
[Object.==](../../dart-core/object/operator_equals) of the element.

Some types of iterable may have a different equality used for its
elements. For example, a [Set](../../dart-core/set-class) may have a
custom equality (see [Set.identity](../../dart-core/set/set.identity))
that its `contains` uses. Likewise the `Iterable` returned by a
[Map.keys](../../dart-core/map/keys) call should use the same equality
that the `Map` uses for keys.

Example:

``` {.language-dart data-language="dart"}
final gasPlanets = <int, String>{1: 'Jupiter', 2: 'Saturn'};
final containsOne = gasPlanets.keys.contains(1); // true
final containsFive = gasPlanets.keys.contains(5); // false
final containsJupiter = gasPlanets.values.contains('Jupiter'); // true
final containsMercury = gasPlanets.values.contains('Mercury'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool contains(Object? element) {
  for (E e in this) {
    if (e == element) return true;
  }
  return false;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/contains.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreeset/contains.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

contains method
===============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) contains(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
override
:::
:::

Whether the collection contains an element equal to `element`.

This operation will check each element in order for being equal to
`element`, unless it has a more efficient way to find an element equal
to `element`.

The equality used to determine whether `element` is equal to an element
of the iterable defaults to the
[Object.==](../../dart-core/object/operator_equals) of the element.

Some types of iterable may have a different equality used for its
elements. For example, a [Set](../../dart-core/set-class) may have a
custom equality (see [Set.identity](../../dart-core/set/set.identity))
that its `contains` uses. Likewise the `Iterable` returned by a
[Map.keys](../../dart-core/map/keys) call should use the same equality
that the `Map` uses for keys.

Example:

``` {.language-dart data-language="dart"}
final gasPlanets = <int, String>{1: 'Jupiter', 2: 'Saturn'};
final containsOne = gasPlanets.keys.contains(1); // true
final containsFive = gasPlanets.keys.contains(5); // false
final containsJupiter = gasPlanets.values.contains('Jupiter'); // true
final containsMercury = gasPlanets.values.contains('Mercury'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool contains(Object? element) {
  return _validKey(element) && _splay(element as E) == 0;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeSet/contains.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/stream/contains.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

contains method
===============

::: {.section .multi-line-signature}
[Future](../future-class)\<[bool](../../dart-core/bool-class)\>
contains(

1.  [Object](../../dart-core/object-class)? needle

)
:::

Returns whether `needle` occurs in the elements provided by this stream.

Compares each element of this stream to `needle` using
[Object.==](../../dart-core/object/operator_equals). If an equal element
is found, the returned future is completed with `true`. If this stream
ends without finding a match, the future is completed with `false`.

If this stream emits an error, or the call to
[Object.==](../../dart-core/object/operator_equals) throws, the returned
future is completed with that error, and processing stops.

Example:

``` {.language-dart data-language="dart"}
final result = await Stream.fromIterable(['Year', 2021, 12, 24, 'Dart'])
    .contains('Dart');
print(result); // true
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<bool> contains(Object? needle) {
  _Future<bool> future = new _Future<bool>();
  StreamSubscription<T> subscription =
      this.listen(null, onError: future._completeError, onDone: () {
    future._complete(false);
  }, cancelOnError: true);
  subscription.onData((T element) {
    _runUserCode(() => (element == needle), (bool isMatch) {
      if (isMatch) {
        _cancelAndValue(subscription, future, true);
      }
    }, _cancelAndErrorClosure(subscription, future));
  });
  return future;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/contains.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/contains.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

contains method
===============

::: {.section .multi-line-signature}
[bool](../bool-class) contains(

1.  [Object](../object-class)? element

)
:::

Whether the collection contains an element equal to `element`.

This operation will check each element in order for being equal to
`element`, unless it has a more efficient way to find an element equal
to `element`.

The equality used to determine whether `element` is equal to an element
of the iterable defaults to the [Object.==](../object/operator_equals)
of the element.

Some types of iterable may have a different equality used for its
elements. For example, a [Set](../set-class) may have a custom equality
(see [Set.identity](../set/set.identity)) that its `contains` uses.
Likewise the `Iterable` returned by a [Map.keys](../map/keys) call
should use the same equality that the `Map` uses for keys.

Example:

``` {.language-dart data-language="dart"}
final gasPlanets = <int, String>{1: 'Jupiter', 2: 'Saturn'};
final containsOne = gasPlanets.keys.contains(1); // true
final containsFive = gasPlanets.keys.contains(5); // false
final containsJupiter = gasPlanets.values.contains('Jupiter'); // true
final containsMercury = gasPlanets.values.contains('Mercury'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool contains(Object? element) {
  for (E e in this) {
    if (e == element) return true;
  }
  return false;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/contains.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/string/contains.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

contains method
===============

::: {.section .multi-line-signature}
[bool](../bool-class) contains(

1.  [Pattern](../pattern-class) other,
2.  \[[int](../int-class) startIndex = 0\]

)
:::

Whether this string contains a match of `other`.

Example:

``` {.language-dart data-language="dart"}
const string = 'Dart strings';
final containsD = string.contains('D'); // true
final containsUpperCase = string.contains(RegExp(r'[A-Z]')); // true
```

If `startIndex` is provided, this method matches only at or after that
index:

``` {.language-dart data-language="dart"}
const string = 'Dart strings';
final containsD = string.contains(RegExp('D'), 0); // true
final caseSensitive = string.contains(RegExp(r'[A-Z]'), 1); // false
```

The `startIndex` must not be negative or greater than [length](length).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool contains(Pattern other, [int startIndex = 0]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/String/contains.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/linkedlist/contains.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

contains method
===============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) contains(

1.  [Object](../../dart-core/object-class)? entry

)

::: {.features}
override
:::
:::

Whether `entry` is a [LinkedListEntry](../linkedlistentry-class)
belonging to this list.

The `entry` is considered as belonging to this list if its
[LinkedListEntry.list](../linkedlistentry/list) is this list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool contains(Object? entry) =>
    entry is LinkedListEntry && identical(this, entry.list);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/LinkedList/contains.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablesetview/contains.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

contains method
===============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) contains(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
override
:::
:::

Whether `value` is in the set.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
final containsB = characters.contains('B'); // true
final containsD = characters.contains('D'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool contains(Object? element) => _source.contains(element);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableSetView/contains.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssclassset/contains.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

contains method
===============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) contains(

1.  [Object](../../dart-core/object-class)? value

)

::: {.features}
override
:::
:::

Determine if this element contains the class `value`.

This is the Dart equivalent of jQuery\'s
[hasClass](http://api.jquery.com/hasClass/).

`value` must be a valid \'token\' representing a single class, i.e. a
non-empty string containing no whitespace.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool contains(Object? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssClassSet/contains.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/contains.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

contains method
===============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) contains(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
override
:::
:::

Whether `value` is in the set.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
final containsB = characters.contains('B'); // true
final containsD = characters.contains('D'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool contains(Object? element);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/contains.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/contains.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

contains method
===============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) contains(

1.  [Object](../../dart-core/object-class)? value

)

::: {.features}
inherited
:::
:::

Determine if this element contains the class `value`.

This is the Dart equivalent of jQuery\'s
[hasClass](http://api.jquery.com/hasClass/).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool contains(Object? value) {
  if (value is! String) return false;
  _validateToken(value);
  return readClasses().contains(value);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/contains.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/set/contains.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

contains method
===============

::: {.section .multi-line-signature}
[bool](../bool-class) contains(

1.  [Object](../object-class)? value

)

::: {.features}
override
:::
:::

Whether `value` is in the set.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
final containsB = characters.contains('B'); // true
final containsD = characters.contains('D'); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool contains(Object? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Set/contains.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/node/contains.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

contains method
===============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) contains(

1.  [Node](../node-class)? other

)
:::

Returns true if this node contains the specified node.

Other resources
---------------

-   [Node.contains](https://developer.mozilla.org/en-US/docs/Web/API/Node.contains)
    from MDN.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool contains(Node? other) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Node/contains.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domtokenlist/contains.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

contains method
===============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) contains(

1.  [String](../../dart-core/string-class) token

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool contains(String token) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomTokenList/contains.html>
:::
