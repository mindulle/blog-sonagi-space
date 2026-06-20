[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<E\> elements

)

::: {.features}
override
:::
:::

Adds all elements of `iterable` at the end of the queue. The length of
the queue is extended by the length of `iterable`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> elements) {
  if (elements is List<E>) {
    List<E> list = elements;
    int addCount = list.length;
    int length = this.length;
    if (length + addCount >= _table.length) {
      _preGrow(length + addCount);
      // After preGrow, all elements are at the start of the list.
      _table.setRange(length, length + addCount, list, 0);
      _tail += addCount;
    } else {
      // Adding addCount elements won't reach _head.
      int endSpace = _table.length - _tail;
      if (addCount < endSpace) {
        _table.setRange(_tail, _tail + addCount, list, 0);
        _tail += addCount;
      } else {
        int preSpace = addCount - endSpace;
        _table.setRange(_tail, _tail + endSpace, list, 0);
        _table.setRange(0, preSpace, list, endSpace);
        _tail = preSpace;
      }
    }
    _modificationCount++;
  } else {
    for (E element in elements) _add(element);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/storage/addall.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Map](../../dart-core/map-class)\<[String](../../dart-core/string-class),
    [String](../../dart-core/string-class)\> other

)

::: {.features}
override
:::
:::

Adds all key/value pairs of `other` to this map.

If a key of `other` is already in this map, its value is overwritten.

The operation is equivalent to doing `this[key] = value` for each key
and associated value in other. It iterates over `other`, which must
therefore not change during the iteration.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Earth'};
planets.addAll({5: 'Jupiter', 6: 'Saturn'});
print(planets); // {1: Mercury, 2: Earth, 5: Jupiter, 6: Saturn}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Map<String, String> other) {
  other.forEach((k, v) {
    this[k] = v;
  });
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Storage/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audioparammap/addall.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Map](../../dart-core/map-class)\<[String](../../dart-core/string-class),
    dynamic\> other

)

::: {.features}
override
:::
:::

Adds all key/value pairs of `other` to this map.

If a key of `other` is already in this map, its value is overwritten.

The operation is equivalent to doing `this[key] = value` for each key
and associated value in other. It iterates over `other`, which must
therefore not change during the iteration.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Earth'};
planets.addAll({5: 'Jupiter', 6: 'Saturn'});
print(planets); // {1: Mercury, 2: Earth, 5: Jupiter, 6: Saturn}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Map<String, dynamic> other) {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioParamMap/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcstatsreport/addall.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Map](../../dart-core/map-class)\<[String](../../dart-core/string-class),
    dynamic\> other

)

::: {.features}
override
:::
:::

Adds all key/value pairs of `other` to this map.

If a key of `other` is already in this map, its value is overwritten.

The operation is equivalent to doing `this[key] = value` for each key
and associated value in other. It iterates over `other`, which must
therefore not change during the iteration.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Earth'};
planets.addAll({5: 'Jupiter', 6: 'Saturn'});
print(planets); // {1: Mercury, 2: Earth, 5: Jupiter, 6: Saturn}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Map<String, dynamic> other) {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcStatsReport/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midioutputmap/addall.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Map](../../dart-core/map-class)\<[String](../../dart-core/string-class),
    dynamic\> other

)

::: {.features}
override
:::
:::

Adds all key/value pairs of `other` to this map.

If a key of `other` is already in this map, its value is overwritten.

The operation is equivalent to doing `this[key] = value` for each key
and associated value in other. It iterates over `other`, which must
therefore not change during the iteration.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Earth'};
planets.addAll({5: 'Jupiter', 6: 'Saturn'});
print(planets); // {1: Mercury, 2: Earth, 5: Jupiter, 6: Saturn}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Map<String, dynamic> other) {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiOutputMap/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midiinputmap/addall.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Map](../../dart-core/map-class)\<[String](../../dart-core/string-class),
    dynamic\> other

)

::: {.features}
override
:::
:::

Adds all key/value pairs of `other` to this map.

If a key of `other` is already in this map, its value is overwritten.

The operation is equivalent to doing `this[key] = value` for each key
and associated value in other. It iterates over `other`, which must
therefore not change during the iteration.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Earth'};
planets.addAll({5: 'Jupiter', 6: 'Saturn'});
print(planets); // {1: Mercury, 2: Earth, 5: Jupiter, 6: Saturn}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Map<String, dynamic> other) {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiInputMap/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreemap/addall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Map](../../dart-core/map-class)\<K, V\> other

)

::: {.features}
override
:::
:::

Adds all key/value pairs of `other` to this map.

If a key of `other` is already in this map, its value is overwritten.

The operation is equivalent to doing `this[key] = value` for each key
and associated value in other. It iterates over `other`, which must
therefore not change during the iteration.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Earth'};
planets.addAll({5: 'Jupiter', 6: 'Saturn'});
print(planets); // {1: Mercury, 2: Earth, 5: Jupiter, 6: Saturn}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Map<K, V> other) {
  other.forEach((K key, V value) {
    this[key] = value;
  });
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeMap/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapmixin/addall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Map](../../dart-core/map-class)\<K, V\> other

)

::: {.features}
override
:::
:::

Adds all key/value pairs of `other` to this map.

If a key of `other` is already in this map, its value is overwritten.

The operation is equivalent to doing `this[key] = value` for each key
and associated value in other. It iterates over `other`, which must
therefore not change during the iteration.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Earth'};
planets.addAll({5: 'Jupiter', 6: 'Saturn'});
print(planets); // {1: Mercury, 2: Earth, 5: Jupiter, 6: Saturn}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Map<K, V> other) {
  other.forEach((K key, V value) {
    this[key] = value;
  });
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapMixin/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapview/addall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Map](../../dart-core/map-class)\<K, V\> other

)

::: {.features}
override
:::
:::

Adds all key/value pairs of `other` to this map.

If a key of `other` is already in this map, its value is overwritten.

The operation is equivalent to doing `this[key] = value` for each key
and associated value in other. It iterates over `other`, which must
therefore not change during the iteration.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Earth'};
planets.addAll({5: 'Jupiter', 6: 'Saturn'});
print(planets); // {1: Mercury, 2: Earth, 5: Jupiter, 6: Saturn}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Map<K, V> other) {
  _map.addAll(other);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/addall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<E\> iterable

)

::: {.features}
override
:::
:::

Appends all objects of `iterable` to the end of this list.

Extends the length of the list by the number of objects in `iterable`.
The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
numbers.addAll([4, 5, 6]);
print(numbers); // [1, 2, 3, 4, 5, 6]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  int i = this.length;
  for (E element in iterable) {
    assert(this.length == i || (throw ConcurrentModificationError(this)));
    add(element);
    i++;
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/map/addall.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Map](../map-class)\<K, V\> other

)
:::

Adds all key/value pairs of `other` to this map.

If a key of `other` is already in this map, its value is overwritten.

The operation is equivalent to doing `this[key] = value` for each key
and associated value in other. It iterates over `other`, which must
therefore not change during the iteration.

``` {.language-dart data-language="dart"}
final planets = <int, String>{1: 'Mercury', 2: 'Earth'};
planets.addAll({5: 'Jupiter', 6: 'Saturn'});
print(planets); // {1: Mercury, 2: Earth, 5: Jupiter, 6: Saturn}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Map<K, V> other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Map/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreeset/addall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<E\> elements

)

::: {.features}
override
:::
:::

Adds all `elements` to this set.

Equivalent to adding each element in `elements` using [add](add), but
some collections may be able to optimize it.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B'};
characters.addAll({'A', 'B', 'C'});
print(characters); // {A, B, C}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> elements) {
  for (E element in elements) {
    _add(element);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeSet/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/immutablelistmixin/addall.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<E\> iterable

)

::: {.features}
override
:::
:::

Appends all objects of `iterable` to the end of this list.

Extends the length of the list by the number of objects in `iterable`.
The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
numbers.addAll([4, 5, 6]);
print(numbers); // [1, 2, 3, 4, 5, 6]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImmutableListMixin/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/addall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<E\> elements

)

::: {.features}
override
:::
:::

Adds all `elements` to this set.

Equivalent to adding each element in `elements` using [add](add), but
some collections may be able to optimize it.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B'};
characters.addAll({'A', 'B', 'C'});
print(characters); // {A, B, C}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> elements) {
  for (E element in elements) add(element);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssclassset/addall.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<[String](../../dart-core/string-class)\>
    iterable

)

::: {.features}
override
:::
:::

Add all classes specified in `iterable` to element.

[add](add) and [addAll](addall) are the Dart equivalent of jQuery\'s
[addClass](http://api.jquery.com/addClass/).

Each element of `iterable` must be a valid \'token\' representing a
single class, i.e. a non-empty string containing no whitespace.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<String> iterable);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssClassSet/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-js/jsarray/addall.md)
[dart:js](../../dart-js/dart-js-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<E\> iterable

)

::: {.features}
override
:::
:::

Appends all objects of `iterable` to the end of this list.

Extends the length of the list by the number of objects in `iterable`.
The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
numbers.addAll([4, 5, 6]);
print(numbers); // [1, 2, 3, 4, 5, 6]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void addAll(Iterable<E> iterable);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js/JsArray/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/addall.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<[String](../../dart-core/string-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

Add all classes specified in `iterable` to element.

This is the Dart equivalent of jQuery\'s
[addClass](http://api.jquery.com/addClass/).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<String> iterable) {
  // TODO - see comment above about validation.
  modify((s) => s.addAll(iterable.map(_validateToken)));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/doublelinkedqueue/addall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<E\> iterable

)

::: {.features}
override
:::
:::

Adds all elements of `iterable` at the end of the queue. The length of
the queue is extended by the length of `iterable`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  for (final E value in iterable) {
    _sentinel._prepend(value, this);
    _elementCount++;
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/DoubleLinkedQueue/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/addall.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../iterable-class)\<E\> iterable

)
:::

Appends all objects of `iterable` to the end of this list.

Extends the length of the list by the number of objects in `iterable`.
The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
numbers.addAll([4, 5, 6]);
print(numbers); // [1, 2, 3, 4, 5, 6]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/set/addall.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../iterable-class)\<E\> elements

)
:::

Adds all `elements` to this set.

Equivalent to adding each element in `elements` using [add](add), but
some collections may be able to optimize it.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B'};
characters.addAll({'A', 'B', 'C'});
print(characters); // {A, B, C}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> elements);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Set/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/addall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<[double](../../dart-core/double-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/addall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<[double](../../dart-core/double-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/addall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/addall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<[Float32x4](../float32x4-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/addall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<[Float64x2](../float64x2-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/addall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/addall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/addall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/addall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/addall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/addall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/addall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/addall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<[int](../../dart-core/int-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/addall.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<[Int32x4](../int32x4-class)\>
    iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/addall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<E\> iterable

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablemapbase/addall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Map](../../dart-core/map-class)\<K, V\> other

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Map<K, V> other) {
  throw UnsupportedError("Cannot modify unmodifiable map");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapBase/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablemapview/addall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Map](../../dart-core/map-class)\<K, V\> other

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Map<K, V> other) {
  throw UnsupportedError("Cannot modify unmodifiable map");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablesetview/addall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<E\> elements

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable set.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> elements) => _throwUnmodifiable();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableSetView/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/queue/addall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<E\> iterable

)
:::

Adds all elements of `iterable` at the end of the queue. The length of
the queue is extended by the length of `iterable`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> iterable);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/Queue/addAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/linkedlist/addall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addAll method
=============

::: {.section .multi-line-signature}
void addAll(

1.  [Iterable](../../dart-core/iterable-class)\<E\> entries

)
:::

Adds `entries` to the end of the linked list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addAll(Iterable<E> entries) {
  entries.forEach(add);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/LinkedList/addAll.html>
:::
