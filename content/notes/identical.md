[dart:core](../dart-core/dart-core-library){._links-link}

identical function
==================

::: {.section .multi-line-signature}
[bool](bool-class) identical(

1.  [Object](object-class)? a,
2.  [Object](object-class)? b

)
:::

Check whether two references are to the same object.

Example:

``` {.language-dart data-language="dart"}
var o = new Object();
var isIdentical = identical(o, new Object()); // false, different objects.
isIdentical = identical(o, o); // true, same object
isIdentical = identical(const Object(), const Object()); // true, const canonicalizes
isIdentical = identical([1], [1]); // false
isIdentical = identical(const [1], const [1]); // true
isIdentical = identical(const [1], const [2]); // false
isIdentical = identical(2, 1 + 1); // true, integers canonicalizes
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external bool identical(Object? a, Object? b);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/identical.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/filesystementity/identical.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

identical method
================

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[bool](../../dart-core/bool-class)\>
identical(

1.  [String](../../dart-core/string-class) path1,
2.  [String](../../dart-core/string-class) path2

)
:::

Checks whether two paths refer to the same object in the file system.

Returns a `Future<bool>` that completes with the result.

Comparing a link to its target returns `false`, as does comparing two
links that point to the same target. To check the target of a link, use
Link.target explicitly to fetch it. Directory links appearing inside a
path are followed, though, to find the file system object.

Completes the returned Future with an error if one of the paths points
to an object that does not exist.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Future<bool> identical(String path1, String path2) {
  IOOverrides? overrides = IOOverrides.current;
  if (overrides == null) {
    return _identical(path1, path2);
  }
  return overrides.fseIdentical(path1, path2);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileSystemEntity/identical.html>
:::
