[dart:collection](../../dart-collection/dart-collection-library){._links-link}

reversed property
=================

::: {#getter .section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<E\> reversed

::: {.features}
override
:::
:::

An [Iterable](../../dart-core/iterable-class) of the objects in this
list in reverse order.

``` {.language-dart data-language="dart"}
final numbers = <String>['two', 'three', 'four'];
final reverseOrder = numbers.reversed;
print(reverseOrder.toList()); // [four, three, two]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> get reversed => ReversedListIterable<E>(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/reversed.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/reversed.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

reversed property
=================

::: {#getter .section .multi-line-signature}
[Iterable](../iterable-class)\<E\> reversed
:::

An [Iterable](../iterable-class) of the objects in this list in reverse
order.

``` {.language-dart data-language="dart"}
final numbers = <String>['two', 'three', 'four'];
final reverseOrder = numbers.reversed;
print(reverseOrder.toList()); // [four, three, two]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<E> get reversed;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/reversed.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/olistelement/reversed.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

reversed property
=================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class)? reversed
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool? get reversed native;
```

::: {#setter .section .multi-line-signature}
void reversed=([bool](../../dart-core/bool-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set reversed(bool? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OListElement/reversed.html>
:::
