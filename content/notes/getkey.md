[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

getKey method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) getKey(

1.  dynamic key

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future getKey(key) {
  try {
    var request = _getKey(key);

    return _completeRequest(request);
  } catch (e, stacktrace) {
    return new Future.error(e, stacktrace);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/Index/getKey.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/pushsubscription/getkey.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

getKey method
=============

::: {.section .multi-line-signature}
[ByteBuffer](../../dart-typed_data/bytebuffer-class)? getKey(

1.  [String](../../dart-core/string-class) name

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ByteBuffer? getKey(String name) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PushSubscription/getKey.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-indexed_db/objectstore/getkey.md)
[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

getKey method
=============

::: {.section .multi-line-signature}
[Request](../request-class) getKey(

1.  [Object](../../dart-core/object-class) key

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Request getKey(Object key) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/ObjectStore/getKey.html>
:::
