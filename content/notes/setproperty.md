[dart:js\_util](../dart-js_util/dart-js_util-library){._links-link}

setProperty\<T\> function
=========================

::: {.section .multi-line-signature}
T setProperty\<T\>(

1.  [Object](../dart-core/object-class) o,
2.  [Object](../dart-core/object-class) name,
3.  T? value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external T setProperty<T>(Object o, Object name, T? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js_util/setProperty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclaration/setproperty.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

setProperty method
==================

::: {.section .multi-line-signature}
void setProperty(

1.  [String](../../dart-core/string-class) propertyName,
2.  [String](../../dart-core/string-class)? value,
3.  \[[String](../../dart-core/string-class)? priority\]

)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setProperty(String propertyName, String? value, [String? priority]) {
  return _setPropertyHelper(
      _browserPropertyName(propertyName), value, priority);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/setProperty.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/setproperty.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

setProperty method
==================

::: {.section .multi-line-signature}
void setProperty(

1.  [String](../../dart-core/string-class) propertyName,
2.  [String](../../dart-core/string-class)? value,
3.  \[[String](../../dart-core/string-class)? priority\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setProperty(String propertyName, String? value, [String? priority]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/setProperty.html>
:::
