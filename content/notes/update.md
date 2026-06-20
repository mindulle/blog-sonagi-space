update
======

The `update` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[media feature](@media.md#media_features) can be used to test how
frequently (if at all) the output device is able to modify the
appearance of content once rendered.

[css]

```css
@media (update: < none | slow | fast >) {
  /* styles to apply if the update frequency of the output device is a match */
}
```

Syntax
------

The `update` feature is specified as a single keyword value chosen from
the list below.

[`none`](#none)

:   Once it has been rendered, the layout can no longer be updated.
    Example: documents printed on paper.

[`slow`](#slow)

:   The layout may change dynamically according to the usual rules of
    CSS, but the output device is not able to render or display changes
    quickly enough for them to be perceived as a smooth animation.
    Examples: e-book readers or severely underpowered devices.

[`fast`](#fast)

:   The layout may change dynamically according to the usual rules of
    CSS, and the output device is not unusually constrained in speed, so
    regularly-updating things like [CSS Animations](css_animations.md)
    can be used. Example: computer screens.

Examples
--------

### HTML

[html]

```html
<p>
  If this text animates for you, your browser supports `update` and you are
  using a fast-updating device.
</p>
```

### CSS

[css]

```css
@keyframes jiggle {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(25px);
  }
}

@media (update: fast) {
  p {
    animation: 1s jiggle linear alternate infinite;
  }
}
```

### Result

Specifications
--------------

  -----------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------

  [Media Queries Level 4\
  [\# update]](https://drafts.csswg.org/mediaqueries/#update)

  -----------------------------------------------------------------------

Browser compatibility
---------------------

Desktop

Mobile

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

WebView Android

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

`update`

113

113

102

No

99

17

113

113

102

No

17

No

See also
--------

- [Using Media Queries](using_media_queries.md)
- [\@media](@media.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/@media/update>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreemap/update.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

update method
=============

::: {.section .multi-line-signature}
V update(

1.  K key,
2.  V update(
    1.  V value

    ),
3.  {V ifAbsent( )?}

)

::: {.features}
override
:::
:::

Updates the value for the provided `key`.

Returns the new value associated with the key.

If the key is present, invokes [update](update) with the current value
and stores the new value in the map.

If the key is not present and `ifAbsent` is provided, calls `ifAbsent`
and adds the key with the returned value to the map.

If the key is not present, `ifAbsent` must be provided.

``` {.language-dart data-language="dart"}
final planetsFromSun = <int, String>{1: 'Mercury', 2: 'unknown',
  3: 'Earth'};
// Update value for known key value 2.
planetsFromSun.update(2, (value) => 'Venus');
print(planetsFromSun); // {1: Mercury, 2: Venus, 3: Earth}

final largestPlanets = <int, String>{1: 'Jupiter', 2: 'Saturn',
  3: 'Neptune'};
// Key value 8 is missing from list, add it using [ifAbsent].
largestPlanets.update(8, (value) => 'New', ifAbsent: () => 'Mercury');
print(largestPlanets); // {1: Jupiter, 2: Saturn, 3: Neptune, 8: Mercury}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V update(K key, V update(V value), {V Function()? ifAbsent}) {
  var comp = _splay(key);
  if (comp == 0) {
    var modificationCount = _modificationCount;
    var splayCount = _splayCount;
    var newValue = update(_root!.value);
    if (modificationCount != _modificationCount) {
      throw ConcurrentModificationError(this);
    }
    if (splayCount != _splayCount) {
      _splay(key);
    }
    _root = _root!._replaceValue(newValue);
    _splayCount += 1;
    return newValue;
  }
  if (ifAbsent != null) {
    var modificationCount = _modificationCount;
    var splayCount = _splayCount;
    var newValue = ifAbsent();
    if (modificationCount != _modificationCount) {
      throw ConcurrentModificationError(this);
    }
    if (splayCount != _splayCount) {
      comp = _splay(key);
    }
    _addNewRoot(_SplayTreeMapNode(key, newValue), comp);
    return newValue;
  }
  throw ArgumentError.value(key, "key", "Key not in map.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeMap/update.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapmixin/update.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

update method
=============

::: {.section .multi-line-signature}
V update(

1.  K key,
2.  V update(
    1.  V value

    ),
3.  {V ifAbsent( )?}

)

::: {.features}
override
:::
:::

Updates the value for the provided `key`.

Returns the new value associated with the key.

If the key is present, invokes [update](update) with the current value
and stores the new value in the map.

If the key is not present and `ifAbsent` is provided, calls `ifAbsent`
and adds the key with the returned value to the map.

If the key is not present, `ifAbsent` must be provided.

``` {.language-dart data-language="dart"}
final planetsFromSun = <int, String>{1: 'Mercury', 2: 'unknown',
  3: 'Earth'};
// Update value for known key value 2.
planetsFromSun.update(2, (value) => 'Venus');
print(planetsFromSun); // {1: Mercury, 2: Venus, 3: Earth}

final largestPlanets = <int, String>{1: 'Jupiter', 2: 'Saturn',
  3: 'Neptune'};
// Key value 8 is missing from list, add it using [ifAbsent].
largestPlanets.update(8, (value) => 'New', ifAbsent: () => 'Mercury');
print(largestPlanets); // {1: Jupiter, 2: Saturn, 3: Neptune, 8: Mercury}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V update(K key, V update(V value), {V Function()? ifAbsent}) {
  if (this.containsKey(key)) {
    return this[key] = update(this[key] as V);
  }
  if (ifAbsent != null) {
    return this[key] = ifAbsent();
  }
  throw ArgumentError.value(key, "key", "Key not in map.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapMixin/update.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapview/update.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

update method
=============

::: {.section .multi-line-signature}
V update(

1.  K key,
2.  V update(
    1.  V value

    ),
3.  {V ifAbsent( )?}

)

::: {.features}
override
:::
:::

Updates the value for the provided `key`.

Returns the new value associated with the key.

If the key is present, invokes [update](update) with the current value
and stores the new value in the map.

If the key is not present and `ifAbsent` is provided, calls `ifAbsent`
and adds the key with the returned value to the map.

If the key is not present, `ifAbsent` must be provided.

``` {.language-dart data-language="dart"}
final planetsFromSun = <int, String>{1: 'Mercury', 2: 'unknown',
  3: 'Earth'};
// Update value for known key value 2.
planetsFromSun.update(2, (value) => 'Venus');
print(planetsFromSun); // {1: Mercury, 2: Venus, 3: Earth}

final largestPlanets = <int, String>{1: 'Jupiter', 2: 'Saturn',
  3: 'Neptune'};
// Key value 8 is missing from list, add it using [ifAbsent].
largestPlanets.update(8, (value) => 'New', ifAbsent: () => 'Mercury');
print(largestPlanets); // {1: Jupiter, 2: Saturn, 3: Neptune, 8: Mercury}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V update(K key, V update(V value), {V Function()? ifAbsent}) =>
    _map.update(key, update, ifAbsent: ifAbsent);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapView/update.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/map/update.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

update method
=============

::: {.section .multi-line-signature}
V update(

1.  K key,
2.  V update(
    1.  V value

    ),
3.  {V ifAbsent( )?}

)
:::

Updates the value for the provided `key`.

Returns the new value associated with the key.

If the key is present, invokes [update](update) with the current value
and stores the new value in the map.

If the key is not present and `ifAbsent` is provided, calls `ifAbsent`
and adds the key with the returned value to the map.

If the key is not present, `ifAbsent` must be provided.

``` {.language-dart data-language="dart"}
final planetsFromSun = <int, String>{1: 'Mercury', 2: 'unknown',
  3: 'Earth'};
// Update value for known key value 2.
planetsFromSun.update(2, (value) => 'Venus');
print(planetsFromSun); // {1: Mercury, 2: Venus, 3: Earth}

final largestPlanets = <int, String>{1: 'Jupiter', 2: 'Saturn',
  3: 'Neptune'};
// Key value 8 is missing from list, add it using [ifAbsent].
largestPlanets.update(8, (value) => 'New', ifAbsent: () => 'Mercury');
print(largestPlanets); // {1: Jupiter, 2: Saturn, 3: Neptune, 8: Mercury}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V update(K key, V update(V value), {V ifAbsent()?});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Map/update.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/link/update.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

update method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[Link](../link-class)\> update(

1.  [String](../../dart-core/string-class) target

)
:::

Updates the link.

Returns a `Future<Link>` that completes with the link when it has been
updated. Calling [update](update) on a non-existing link will complete
its returned future with an exception.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<Link> update(String target);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Link/update.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablemapbase/update.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

update method
=============

::: {.section .multi-line-signature}
V update(

1.  K key,
2.  V update(
    1.  V value

    ),
3.  {V ifAbsent( )?}

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V update(K key, V update(V value), {V Function()? ifAbsent}) {
  throw UnsupportedError("Cannot modify unmodifiable map");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapBase/update.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablemapview/update.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

update method
=============

::: {.section .multi-line-signature}
V update(

1.  K key,
2.  V update(
    1.  V value

    ),
3.  {V ifAbsent( )?}

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable map.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
V update(K key, V update(V value), {V Function()? ifAbsent}) {
  throw UnsupportedError("Cannot modify unmodifiable map");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapView/update.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-indexed_db/cursor/update.md)
[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

update method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) update(

1.  dynamic value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future update(value) {
  try {
    return _completeRequest(_update(value));
  } catch (e, stacktrace) {
    return new Future.error(e, stacktrace);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/Cursor/update.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/serviceworkerregistration/update.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

update method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) update()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future update() => promiseToFuture(JS("", "#.update()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ServiceWorkerRegistration/update.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/applicationcache/update.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

update method
=============

::: {.section .multi-line-signature}
void update()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void update() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ApplicationCache/update.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/UPDATE.md)

# UPDATE Statement

The UPDATE statement modifies existing data within a table. It allows you to change the values of one or more columns for specific rows based on a specified condition. You use the `UPDATE` statement to correct errors, reflect changes in data, or apply new information to your database.

Visit the following resources to learn more:

- [@article@Efficient column updates in SQL](https://www.atlassian.com/data/sql/how-to-update-a-column-based-on-a-filter-of-another-column)

## 관련 로드맵
- [[sql|sql]]
