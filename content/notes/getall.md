[dart:html](../../dart-html/dart-html-library){._links-link}

getAll method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) getAll(

1.  \[[Map](../../dart-core/map-class)? options\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future getAll([Map? options]) {
  var options_dict = null;
  if (options != null) {
    options_dict = convertDartToNative_Dictionary(options);
  }
  return promiseToFuture(JS("", "#.getAll(#)", this, options_dict));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CookieStore/getAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-indexed_db/objectstore/getall.md)
[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

getAll method
=============

::: {.section .multi-line-signature}
[Request](../request-class) getAll(

1.  [Object](../../dart-core/object-class)? query,
2.  \[[int](../../dart-core/int-class)? count\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Request getAll(Object? query, [int? count]) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/ObjectStore/getAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-indexed_db/index/getall.md)
[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

getAll method
=============

::: {.section .multi-line-signature}
[Request](../request-class) getAll(

1.  [Object](../../dart-core/object-class)? query,
2.  \[[int](../../dart-core/int-class)? count\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Request getAll(Object? query, [int? count]) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/Index/getAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/stylepropertymapreadonly/getall.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

getAll method
=============

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[CssStyleValue](../cssstylevalue-class)\>
getAll(

1.  [String](../../dart-core/string-class) property

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<CssStyleValue> getAll(String property) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/StylePropertyMapReadonly/getAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/urlsearchparams/getall.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

getAll method
=============

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[String](../../dart-core/string-class)\>
getAll(

1.  [String](../../dart-core/string-class) name

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<String> getAll(String name) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/UrlSearchParams/getAll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/formdata/getall.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

getAll method
=============

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[Object](../../dart-core/object-class)\>
getAll(

1.  [String](../../dart-core/string-class) name

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<Object> getAll(String name) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FormData/getAll.html>
:::
