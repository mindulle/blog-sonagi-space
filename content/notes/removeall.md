[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeAll method
================

::: {.section .multi-line-signature}
void removeAll(

1.  [Iterable](../../dart-core/iterable-class)\<[Object](../../dart-core/object-class)?\>
    elements

)

::: {.features}
override
:::
:::

Removes each element of `elements` from this set.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
characters.removeAll({'A', 'B', 'X'});
print(characters); // {C}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeAll(Iterable<Object?> elements) {
  for (Object? element in elements) {
    if (_validKey(element)) _remove(element as E);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeSet/removeAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssclassset/removeall.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

removeAll method
================

::: {.section .multi-line-signature}
void removeAll(

1.  [Iterable](../../dart-core/iterable-class)\<[Object](../../dart-core/object-class)?\>
    iterable

)

::: {.features}
override
:::
:::

Remove all classes specified in `iterable` from element.

[remove](remove) and [removeAll](removeall) are the Dart equivalent of
jQuery\'s [removeClass](http://api.jquery.com/removeClass/).

Each element of `iterable` must be a valid \'token\' representing a
single class, i.e. a non-empty string containing no whitespace.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeAll(Iterable<Object?> iterable);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssClassSet/removeAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/removeall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeAll method
================

::: {.section .multi-line-signature}
void removeAll(

1.  [Iterable](../../dart-core/iterable-class)\<[Object](../../dart-core/object-class)?\>
    elements

)

::: {.features}
override
:::
:::

Removes each element of `elements` from this set.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
characters.removeAll({'A', 'B', 'X'});
print(characters); // {C}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeAll(Iterable<Object?> elements) {
  for (Object? element in elements) remove(element);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/removeAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/removeall.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

removeAll method
================

::: {.section .multi-line-signature}
void removeAll(

1.  [Iterable](../../dart-core/iterable-class)\<[Object](../../dart-core/object-class)?\>
    iterable

)

::: {.features}
inherited
:::
:::

Remove all classes specified in `iterable` from element.

This is the Dart equivalent of jQuery\'s
[removeClass](http://api.jquery.com/removeClass/).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeAll(Iterable<Object?> iterable) {
  modify((s) => s.removeAll(iterable));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/removeAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpheaders/removeall.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

removeAll method
================

::: {.section .multi-line-signature}
void removeAll(

1.  [String](../../dart-core/string-class) name

)
:::

Removes all values for the specified header name.

Some headers have system supplied values which cannot be removed. All
other values for `name` are removed. If there are no remaining values
for `name`, the header is no longer considered present.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeAll(String name);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpHeaders/removeAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/set/removeall.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

removeAll method
================

::: {.section .multi-line-signature}
void removeAll(

1.  [Iterable](../iterable-class)\<[Object](../object-class)?\> elements

)
:::

Removes each element of `elements` from this set.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
characters.removeAll({'A', 'B', 'X'});
print(characters); // {C}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeAll(Iterable<Object?> elements);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Set/removeAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablesetview/removeall.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

removeAll method
================

::: {.section .multi-line-signature}
void removeAll(

1.  [Iterable](../../dart-core/iterable-class)\<[Object](../../dart-core/object-class)?\>
    elements

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable set.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void removeAll(Iterable<Object?> elements) => _throwUnmodifiable();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableSetView/removeAll.html>
:::
