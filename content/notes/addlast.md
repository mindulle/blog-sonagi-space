[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addLast method
==============

::: {.section .multi-line-signature}
void addLast(

1.  E value

)

::: {.features}
override
:::
:::

Adds `value` at the end of the queue.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addLast(E value) {
  _sentinel._prepend(value, this);
  _elementCount++;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/DoubleLinkedQueue/addLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/addlast.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addLast method
==============

::: {.section .multi-line-signature}
void addLast(

1.  E value

)

::: {.features}
override
:::
:::

Adds `value` at the end of the queue.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addLast(E value) {
  _add(value);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/addLast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/queue/addlast.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

addLast method
==============

::: {.section .multi-line-signature}
void addLast(

1.  E value

)
:::

Adds `value` at the end of the queue.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addLast(E value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/Queue/addLast.html>
:::
