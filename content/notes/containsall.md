[dart:collection](../../dart-collection/dart-collection-library){._links-link}

containsAll method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsAll(

1.  [Iterable](../../dart-core/iterable-class)\<[Object](../../dart-core/object-class)?\>
    other

)

::: {.features}
override
:::
:::

Whether this set contains all the elements of `other`.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
final containsAB = characters.containsAll({'A', 'B'});
print(containsAB); // true
final containsAD = characters.containsAll({'A', 'D'});
print(containsAD); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsAll(Iterable<Object?> other) {
  for (var o in other) {
    if (!contains(o)) return false;
  }
  return true;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/containsAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/containsall.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

containsAll method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) containsAll(

1.  [Iterable](../../dart-core/iterable-class)\<[Object](../../dart-core/object-class)?\>
    collection

)

::: {.features}
inherited
:::
:::

Whether this set contains all the elements of `other`.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
final containsAB = characters.containsAll({'A', 'B'});
print(containsAB); // true
final containsAD = characters.containsAll({'A', 'D'});
print(containsAD); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsAll(Iterable<Object?> collection) =>
    readClasses().containsAll(collection);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/containsAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/set/containsall.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

containsAll method
==================

::: {.section .multi-line-signature}
[bool](../bool-class) containsAll(

1.  [Iterable](../iterable-class)\<[Object](../object-class)?\> other

)
:::

Whether this set contains all the elements of `other`.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
final containsAB = characters.containsAll({'A', 'B'});
print(containsAB); // true
final containsAD = characters.containsAll({'A', 'D'});
print(containsAD); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool containsAll(Iterable<Object?> other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Set/containsAll.html>
:::
