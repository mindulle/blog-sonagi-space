[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

returnType property
===================

::: {#getter .section .multi-line-signature}
[TypeMirror](../typemirror-class) returnType
:::

Returns the return type of the reflectee.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
TypeMirror get returnType;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/FunctionTypeMirror/returnType.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-mirrors/methodmirror/returntype.md)
[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

returnType property
===================

::: {#getter .section .multi-line-signature}
[TypeMirror](../typemirror-class) returnType
:::

A mirror on the return type for the reflectee.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
TypeMirror get returnType;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/MethodMirror/returnType.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/ReturnType.md)

# ReturnType

`ReturnType` is a utility type that extracts the return type of a function. Given a function type, `ReturnType<Type>` produces a new type that represents the type of value that the function returns. This is useful when you need to work with the output of a function without knowing its exact return t
ype beforehand.

## 관련 로드맵
- [[TypeScript|typescript]]
