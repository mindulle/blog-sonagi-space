[dart:collection](../../dart-collection/dart-collection-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
override
:::
:::

Removes the first occurrence of `value` from this list.

Returns true if `value` was in the list, false otherwise. The list must
be growable.

``` {.language-dart data-language="dart"}
final parts = <String>['head', 'shoulders', 'knees', 'toes'];
final retVal = parts.remove('head'); // true
print(parts); // [shoulders, knees, toes]
```

The method has no effect if `value` was not in the list.

``` {.language-dart data-language="dart"}
final parts = <String>['shoulders', 'knees', 'toes'];
// Note: 'head' has already been removed.
final retVal = parts.remove('head'); // false
print(parts); // [shoulders, knees, toes]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? element) {
  for (int i = 0; i < this.length; i++) {
    if (this[i] == element) {
      this._closeGap(i, i + 1);
      return true;
    }
  }
  return false;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/immutablelistmixin/remove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? object

)

::: {.features}
override
:::
:::

Removes the first occurrence of `value` from this list.

Returns true if `value` was in the list, false otherwise. The list must
be growable.

``` {.language-dart data-language="dart"}
final parts = <String>['head', 'shoulders', 'knees', 'toes'];
final retVal = parts.remove('head'); // true
print(parts); // [shoulders, knees, toes]
```

The method has no effect if `value` was not in the list.

``` {.language-dart data-language="dart"}
final parts = <String>['shoulders', 'knees', 'toes'];
// Note: 'head' has already been removed.
final retVal = parts.remove('head'); // false
print(parts); // [shoulders, knees, toes]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? object) {
  throw new UnsupportedError("Cannot remove from immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImmutableListMixin/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/doublelinkedqueue/remove.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? o

)

::: {.features}
override
:::
:::

Removes a single instance of `value` from the queue.

Returns `true` if a value was removed, or `false` if the queue contained
no element equal to `value`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? o) {
  _DoubleLinkedQueueEntry<E> entry = _sentinel._nextLink!;
  while (true) {
    var elementEntry = entry._asNonSentinelEntry();
    if (elementEntry == null) return false;
    bool equals = (elementEntry.element == o);
    if (!identical(this, elementEntry._queue)) {
      // Entry must still be in the queue.
      throw ConcurrentModificationError(this);
    }
    if (equals) {
      entry._remove();
      _elementCount--;
      return true;
    }
    entry = entry._nextLink!;
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/DoubleLinkedQueue/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreemap/remove.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
V? remove(

1.  [Object](../../dart-core/object-class)? key

)

::: {.features}
override
:::
:::

Removes `key` and its associated value, if present, from the map.

Returns the value associated with `key` before it was removed. Returns
`null` if `key` was not in the map.

Note that some maps allow `null` as a value, so a returned `null` value
doesn\'t always mean that the key was absent.

``` {.language-dart data-language="dart"}
final terrestrial = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
final removedValue = terrestrial.remove(2); // Venus
print(terrestrial); // {1: Mercury, 3: Earth}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V? remove(Object? key) {
  if (!_validKey(key)) return null;
  _SplayTreeMapNode<K, V>? mapRoot = _remove(key as dynamic);
  if (mapRoot != null) return mapRoot.value;
  return null;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeMap/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/storage/remove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class)? remove(

1.  [Object](../../dart-core/object-class)? key

)

::: {.features}
override
:::
:::

Removes `key` and its associated value, if present, from the map.

Returns the value associated with `key` before it was removed. Returns
`null` if `key` was not in the map.

Note that some maps allow `null` as a value, so a returned `null` value
doesn\'t always mean that the key was absent.

``` {.language-dart data-language="dart"}
final terrestrial = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
final removedValue = terrestrial.remove(2); // Venus
print(terrestrial); // {1: Mercury, 3: Earth}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? remove(Object? key) {
  final value = this[key];
  _removeItem(key as String);
  return value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Storage/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/remove.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../bool-class) remove(

1.  [Object](../object-class)? value

)
:::

Removes the first occurrence of `value` from this list.

Returns true if `value` was in the list, false otherwise. The list must
be growable.

``` {.language-dart data-language="dart"}
final parts = <String>['head', 'shoulders', 'knees', 'toes'];
final retVal = parts.remove('head'); // true
print(parts); // [shoulders, knees, toes]
```

The method has no effect if `value` was not in the list.

``` {.language-dart data-language="dart"}
final parts = <String>['shoulders', 'knees', 'toes'];
// Note: 'head' has already been removed.
final retVal = parts.remove('head'); // false
print(parts); // [shoulders, knees, toes]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audioparammap/remove.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) remove(

1.  dynamic key

)

::: {.features}
override
:::
:::

Removes `key` and its associated value, if present, from the map.

Returns the value associated with `key` before it was removed. Returns
`null` if `key` was not in the map.

Note that some maps allow `null` as a value, so a returned `null` value
doesn\'t always mean that the key was absent.

``` {.language-dart data-language="dart"}
final terrestrial = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
final removedValue = terrestrial.remove(2); // Venus
print(terrestrial); // {1: Mercury, 3: Earth}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String remove(dynamic key) {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioParamMap/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcstatsreport/remove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) remove(

1.  dynamic key

)

::: {.features}
override
:::
:::

Removes `key` and its associated value, if present, from the map.

Returns the value associated with `key` before it was removed. Returns
`null` if `key` was not in the map.

Note that some maps allow `null` as a value, so a returned `null` value
doesn\'t always mean that the key was absent.

``` {.language-dart data-language="dart"}
final terrestrial = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
final removedValue = terrestrial.remove(2); // Venus
print(terrestrial); // {1: Mercury, 3: Earth}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String remove(dynamic key) {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcStatsReport/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midioutputmap/remove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) remove(

1.  dynamic key

)

::: {.features}
override
:::
:::

Removes `key` and its associated value, if present, from the map.

Returns the value associated with `key` before it was removed. Returns
`null` if `key` was not in the map.

Note that some maps allow `null` as a value, so a returned `null` value
doesn\'t always mean that the key was absent.

``` {.language-dart data-language="dart"}
final terrestrial = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
final removedValue = terrestrial.remove(2); // Venus
print(terrestrial); // {1: Mercury, 3: Earth}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String remove(dynamic key) {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiOutputMap/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midiinputmap/remove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) remove(

1.  dynamic key

)

::: {.features}
override
:::
:::

Removes `key` and its associated value, if present, from the map.

Returns the value associated with `key` before it was removed. Returns
`null` if `key` was not in the map.

Note that some maps allow `null` as a value, so a returned `null` value
doesn\'t always mean that the key was absent.

``` {.language-dart data-language="dart"}
final terrestrial = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
final removedValue = terrestrial.remove(2); // Venus
print(terrestrial); // {1: Mercury, 3: Earth}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String remove(dynamic key) {
  throw new UnsupportedError("Not supported");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiInputMap/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapview/remove.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
V? remove(

1.  [Object](../../dart-core/object-class)? key

)

::: {.features}
override
:::
:::

Removes `key` and its associated value, if present, from the map.

Returns the value associated with `key` before it was removed. Returns
`null` if `key` was not in the map.

Note that some maps allow `null` as a value, so a returned `null` value
doesn\'t always mean that the key was absent.

``` {.language-dart data-language="dart"}
final terrestrial = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
final removedValue = terrestrial.remove(2); // Venus
print(terrestrial); // {1: Mercury, 3: Earth}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V? remove(Object? key) => _map.remove(key);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapmixin/remove.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
V? remove(

1.  [Object](../../dart-core/object-class)? key

)

::: {.features}
override
:::
:::

Removes `key` and its associated value, if present, from the map.

Returns the value associated with `key` before it was removed. Returns
`null` if `key` was not in the map.

Note that some maps allow `null` as a value, so a returned `null` value
doesn\'t always mean that the key was absent.

``` {.language-dart data-language="dart"}
final terrestrial = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
final removedValue = terrestrial.remove(2); // Venus
print(terrestrial); // {1: Mercury, 3: Earth}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V? remove(Object? key);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapMixin/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreeset/remove.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? object

)

::: {.features}
override
:::
:::

Removes `value` from the set.

Returns `true` if `value` was in the set, and `false` if not. The method
has no effect if `value` was not in the set.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
final didRemoveB = characters.remove('B'); // true
final didRemoveD = characters.remove('D'); // false
print(characters); // {A, C}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? object) {
  if (!_validKey(object)) return false;
  return _remove(object as E) != null;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeSet/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/map/remove.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
V? remove(

1.  [Object](../object-class)? key

)
:::

Removes `key` and its associated value, if present, from the map.

Returns the value associated with `key` before it was removed. Returns
`null` if `key` was not in the map.

Note that some maps allow `null` as a value, so a returned `null` value
doesn\'t always mean that the key was absent.

``` {.language-dart data-language="dart"}
final terrestrial = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
final removedValue = terrestrial.remove(2); // Venus
print(terrestrial); // {1: Mercury, 3: Earth}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V? remove(Object? key);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Map/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/remove.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? value

)

::: {.features}
override
:::
:::

Removes a single instance of `value` from the queue.

Returns `true` if a value was removed, or `false` if the queue contained
no element equal to `value`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? value) {
  for (int i = _head; i != _tail; i = (i + 1) & (_table.length - 1)) {
    E? element = _table[i];
    if (element == value) {
      _remove(i);
      _modificationCount++;
      return true;
    }
  }
  return false;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/remove.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? value

)

::: {.features}
override
:::
:::

Removes `value` from the set.

Returns `true` if `value` was in the set, and `false` if not. The method
has no effect if `value` was not in the set.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
final didRemoveB = characters.remove('B'); // true
final didRemoveD = characters.remove('D'); // false
print(characters); // {A, C}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssclassset/remove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? value

)

::: {.features}
override
:::
:::

Remove the class `value` from element, and return true on successful
removal.

[remove](remove) and [removeAll](removeall) are the Dart equivalent of
jQuery\'s [removeClass](http://api.jquery.com/removeClass/).

`value` must be a valid \'token\' representing a single class, i.e. a
non-empty string containing no whitespace. To remove multiple classes,
use [removeAll](removeall).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssClassSet/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpheaders/remove.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
void remove(

1.  [String](../../dart-core/string-class) name,
2.  [Object](../../dart-core/object-class) value

)
:::

Removes a specific value for a header name.

Some headers have system supplied values which cannot be removed. For
all other headers and values, the `value` is converted to a string in
the same way as for [add](add), then that string value is removed from
the current values of `name`. If there are no remaining values for
`name`, the header is no longer considered present.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void remove(String name, Object value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpHeaders/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/remove.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? value

)

::: {.features}
inherited
:::
:::

Remove the class `value` from element, and return true on successful
removal.

This is the Dart equivalent of jQuery\'s
[removeClass](http://api.jquery.com/removeClass/).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? value) {
  if (value is! String) return false;
  _validateToken(value);
  Set<String> s = readClasses();
  bool result = s.remove(value);
  writeClasses(s);
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/set/remove.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../bool-class) remove(

1.  [Object](../object-class)? value

)
:::

Removes `value` from the set.

Returns `true` if `value` was in the set, and `false` if not. The method
has no effect if `value` was not in the set.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
final didRemoveB = characters.remove('B'); // true
final didRemoveD = characters.remove('D'); // false
print(characters); // {A, C}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Set/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/linkedlist/remove.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  E entry

)
:::

Removes `entry` from the linked list.

Returns false and does nothing if `entry` is not in this linked list.

This is equivalent to calling `entry.unlink()` if the entry is in this
list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(E entry) {
  if (entry._list != this) return false;
  _unlink(entry); // Unlink will decrement length.
  return true;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/LinkedList/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/remove.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? element) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/remove.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? element) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/remove.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? element) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/remove.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? element) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/remove.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? element) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/remove.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? element) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/remove.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? element) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/remove.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? element) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/remove.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? element) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/remove.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? element) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/remove.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? element) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/remove.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? element) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/remove.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? element) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/remove.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? element) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/remove.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? element) {
  throw new UnsupportedError("Cannot remove from an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/entry/remove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
<div>

1.  \@JSName(\'remove\')

</div>

[Future](../../dart-async/future-class) remove()

::: {.features}
\@JSName(\'remove\')
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@JSName('remove')
Future remove() {
  var completer = new Completer();
  _remove(() {
    completer.complete();
  }, (error) {
    completer.completeError(error);
  });
  return completer.future;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Entry/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/queue/remove.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? value

)
:::

Removes a single instance of `value` from the queue.

Returns `true` if a value was removed, or `false` if the queue contained
no element equal to `value`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/Queue/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/node/remove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
void remove()
:::

Removes this node from the DOM.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void remove() {
  // TODO(jacobr): should we throw an exception if parent is already null?
  // TODO(vsm): Use the native remove when available.
  if (this.parentNode != null) {
    final Node parent = this.parentNode!;
    parent._removeChild(this);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Node/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/doublelinkedqueueentry/remove.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
E remove()
:::

Removes this entry from any chain of entries it is part of.

Returns its element value.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E remove() {
  _previousLink?._nextLink = _nextLink;
  _nextLink?._previousLink = _previousLink;
  _nextLink = null;
  _previousLink = null;
  return element;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/DoubleLinkedQueueEntry/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablemapbase/remove.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
V? remove(

1.  [Object](../../dart-core/object-class)? key

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V? remove(Object? key) {
  throw UnsupportedError("Cannot modify unmodifiable map");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapBase/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablemapview/remove.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
V? remove(

1.  [Object](../../dart-core/object-class)? key

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V? remove(Object? key) {
  throw UnsupportedError("Cannot modify unmodifiable map");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablesetview/remove.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) remove(

1.  [Object](../../dart-core/object-class)? value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable set.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool remove(Object? value) => _throwUnmodifiable();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableSetView/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/sourcebuffer/remove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
void remove(

1.  [num](../../dart-core/num-class) start,
2.  [num](../../dart-core/num-class) end

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void remove(num start, num end) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SourceBuffer/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediakeysession/remove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) remove()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future remove() => promiseToFuture(JS("", "#.remove()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaKeySession/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domtokenlist/remove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
void remove(

1.  [String](../../dart-core/string-class) tokens

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void remove(String tokens) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomTokenList/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/datatransferitemlist/remove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
void remove(

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void remove(int index) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DataTransferItemList/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/accessiblenodelist/remove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
void remove(

1.  [int](../../dart-core/int-class) index

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void remove(int index) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AccessibleNodeList/remove.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/childnode/remove.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

remove method
=============

::: {.section .multi-line-signature}
void remove()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void remove();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ChildNode/remove.html>
:::
