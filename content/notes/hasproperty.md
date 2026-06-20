[dart:js\_util](../dart-js_util/dart-js_util-library){._links-link}

hasProperty function
====================

::: {.section .multi-line-signature}
[bool](../dart-core/bool-class) hasProperty(

1.  [Object](../dart-core/object-class) o,
2.  [Object](../dart-core/object-class) name

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external bool hasProperty(Object o, Object name);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js_util/hasProperty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-js/jsobject/hasproperty.md)
[dart:js](../../dart-js/dart-js-library){._links-link}

hasProperty method
==================

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) hasProperty(

1.  [Object](../../dart-core/object-class) property

)
:::

Returns `true` if the JavaScript object contains the specified property
either directly or though its prototype chain.

This is the equivalent of the `in` operator in JavaScript.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external bool hasProperty(Object property);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js/JsObject/hasProperty.html>
:::
