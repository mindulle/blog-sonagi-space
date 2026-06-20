[dart:collection](../../dart-collection/dart-collection-library){._links-link}

updateAll method
================

::: {.section .multi-line-signature}
void updateAll(

1.  V update(
    1.  K key,
    2.  V value

    )

)

::: {.features}
override
:::
:::

Updates all values.

Iterates over all entries in the map and updates them with the result of
invoking `update`.

``` {.language-dart data-language="dart"}
final terrestrial = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
terrestrial.updateAll((key, value) => value.toUpperCase());
print(terrestrial); // {1: MERCURY, 2: VENUS, 3: EARTH}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void updateAll(V update(K key, V value)) {
  var root = _root;
  if (root == null) return;
  var iterator = _SplayTreeMapEntryIterator(this);
  while (iterator.moveNext()) {
    var node = iterator.current;
    var newValue = update(node.key, node.value);
    iterator._replaceValue(newValue);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeMap/updateAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapmixin/updateall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

updateAll method
================

::: {.section .multi-line-signature}
void updateAll(

1.  V update(
    1.  K key,
    2.  V value

    )

)

::: {.features}
override
:::
:::

Updates all values.

Iterates over all entries in the map and updates them with the result of
invoking `update`.

``` {.language-dart data-language="dart"}
final terrestrial = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
terrestrial.updateAll((key, value) => value.toUpperCase());
print(terrestrial); // {1: MERCURY, 2: VENUS, 3: EARTH}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void updateAll(V update(K key, V value)) {
  for (var key in this.keys) {
    this[key] = update(key, this[key] as V);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapMixin/updateAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapview/updateall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

updateAll method
================

::: {.section .multi-line-signature}
void updateAll(

1.  V update(
    1.  K key,
    2.  V value

    )

)

::: {.features}
override
:::
:::

Updates all values.

Iterates over all entries in the map and updates them with the result of
invoking `update`.

``` {.language-dart data-language="dart"}
final terrestrial = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
terrestrial.updateAll((key, value) => value.toUpperCase());
print(terrestrial); // {1: MERCURY, 2: VENUS, 3: EARTH}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void updateAll(V update(K key, V value)) {
  _map.updateAll(update);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapView/updateAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/map/updateall.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

updateAll method
================

::: {.section .multi-line-signature}
void updateAll(

1.  V update(
    1.  K key,
    2.  V value

    )

)
:::

Updates all values.

Iterates over all entries in the map and updates them with the result of
invoking `update`.

``` {.language-dart data-language="dart"}
final terrestrial = <int, String>{1: 'Mercury', 2: 'Venus', 3: 'Earth'};
terrestrial.updateAll((key, value) => value.toUpperCase());
print(terrestrial); // {1: MERCURY, 2: VENUS, 3: EARTH}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void updateAll(V update(K key, V value));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Map/updateAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablemapbase/updateall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

updateAll method
================

::: {.section .multi-line-signature}
void updateAll(

1.  V update(
    1.  K key,
    2.  V value

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void updateAll(V update(K key, V value)) {
  throw UnsupportedError("Cannot modify unmodifiable map");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapBase/updateAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablemapview/updateall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

updateAll method
================

::: {.section .multi-line-signature}
void updateAll(

1.  V update(
    1.  K key,
    2.  V value

    )

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void updateAll(V update(K key, V value)) {
  throw UnsupportedError("Cannot modify unmodifiable map");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapView/updateAll.html>
:::
