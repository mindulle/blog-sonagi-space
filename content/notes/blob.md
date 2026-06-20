[dart:html](../../dart-html/dart-html-library){._links-link}

Blob constructor
================

::: {.section .multi-line-signature}
Blob(

1.  [List](../../dart-core/list-class) blobParts,
2.  \[[String](../../dart-core/string-class)? type,
3.  [String](../../dart-core/string-class)? endings\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
factory Blob(List blobParts, [String? type, String? endings]) {
  // TODO: validate that blobParts is a JS Array and convert if not.
  // TODO: any coercions on the elements of blobParts, e.g. coerce a typed
  // array to ArrayBuffer if it is a total view.
  if (type == null && endings == null) {
    return _create_1(blobParts);
  }
  var bag = _create_bag();
  if (type != null) _bag_set(bag, 'type', type);
  if (endings != null) _bag_set(bag, 'endings', endings);
  return _create_2(blobParts, bag);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Blob/Blob.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/body/blob.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

blob method
===========

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[Blob](../blob-class)\> blob()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<Blob> blob() =>
    promiseToFuture<Blob>(JS("creates:Blob;", "#.blob()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Body/blob.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/pushmessagedata/blob.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

blob method
===========

::: {.section .multi-line-signature}
[Blob](../blob-class) blob()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Blob blob() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PushMessageData/blob.html>
:::
