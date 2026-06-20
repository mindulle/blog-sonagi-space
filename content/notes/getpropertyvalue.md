[dart:html](../../dart-html/dart-html-library){._links-link}

getPropertyValue method
=======================

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) getPropertyValue(

1.  [String](../../dart-core/string-class) propertyName

)

::: {.features}
override
:::
:::

Returns the value of the property if the provided *CSS* property name is
supported on this element and if the value is set. Otherwise returns an
empty string.

Please note the property name uses camelCase, not-hyphens.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String getPropertyValue(String propertyName) {
  return _getPropertyValueHelper(propertyName);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/getPropertyValue.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/getpropertyvalue.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

getPropertyValue method
=======================

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) getPropertyValue(

1.  [String](../../dart-core/string-class) propertyName

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String getPropertyValue(String propertyName);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/getPropertyValue.html>
:::
