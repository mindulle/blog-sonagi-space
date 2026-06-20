[dart:js\_util](../dart-js_util/dart-js_util-library){._links-link}

callMethod\<T\> function
========================

::: {.section .multi-line-signature}
T callMethod\<T\>(

1.  [Object](../dart-core/object-class) o,
2.  [String](../dart-core/string-class) method,
3.  [List](../dart-core/list-class)\<[Object](../dart-core/object-class)?\>
    args

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external T callMethod<T>(Object o, String method, List<Object?> args);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js_util/callMethod.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-js/jsobject/callmethod.md)
[dart:js](../../dart-js/dart-js-library){._links-link}

callMethod method
=================

::: {.section .multi-line-signature}
dynamic callMethod(

1.  [Object](../../dart-core/object-class) method,
2.  \[[List](../../dart-core/list-class)? args\]

)
:::

Calls `method` on the JavaScript object with the arguments `args` and
returns the result.

The type of `method` must be either
[String](../../dart-core/string-class) or
[num](../../dart-core/num-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external dynamic callMethod(Object method, [List? args]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js/JsObject/callMethod.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-mirrors/functiontypemirror/callmethod.md)
[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

callMethod property
===================

::: {#getter .section .multi-line-signature}
[MethodMirror](../methodmirror-class) callMethod
:::

A mirror on the `call` method for the reflectee.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
// This is only here because in the past the VM did not implement a call
// method on closures.
MethodMirror get callMethod;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/FunctionTypeMirror/callMethod.html>
:::
