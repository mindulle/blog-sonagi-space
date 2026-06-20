[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addFirst method
===============

::: {.section .multi-line-signature}
void addFirst(

1.  E value

)

::: {.features}
override
:::
:::

Adds `value` at the beginning of the queue.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addFirst(E value) {
  _head = (_head - 1) & (_table.length - 1);
  _table[_head] = value;
  if (_head == _tail) _grow();
  _modificationCount++;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/addFirst.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/doublelinkedqueue/addfirst.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addFirst method
===============

::: {.section .multi-line-signature}
void addFirst(

1.  E value

)

::: {.features}
override
:::
:::

Adds `value` at the beginning of the queue.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addFirst(E value) {
  _sentinel._append(value, this);
  _elementCount++;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/DoubleLinkedQueue/addFirst.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/linkedlist/addfirst.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addFirst method
===============

::: {.section .multi-line-signature}
void addFirst(

1.  E entry

)
:::

Adds `entry` to the beginning of the linked list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addFirst(E entry) {
  _insertBefore(_first, entry, updateFirst: true);
  _first = entry;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/LinkedList/addFirst.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/queue/addfirst.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addFirst method
===============

::: {.section .multi-line-signature}
void addFirst(

1.  E value

)
:::

Adds `value` at the beginning of the queue.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addFirst(E value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/Queue/addFirst.html>
:::
