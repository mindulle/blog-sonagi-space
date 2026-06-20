[dart:io](../../dart-io/dart-io-library){._links-link}

absolute property
=================

::: {#getter .section .multi-line-signature}
[FileSystemEntity](../filesystementity-class) absolute
:::

A [FileSystemEntity](../filesystementity-class) whose path is the
absolute path of [path](path).

The type of the returned instance is the same as the type of this
entity.

A file system entity with an already absolute path (as reported by
[isAbsolute](isabsolute)) is returned directly. For a non-absolute path,
the returned entity is absolute ([isAbsolute](isabsolute)) *if
possible*, but still refers to the same file system object.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
FileSystemEntity get absolute;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileSystemEntity/absolute.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/directory/absolute.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

absolute property
=================

::: {#getter .section .multi-line-signature}
[Directory](../directory-class) absolute

::: {.features}
override
:::
:::

A [Directory](../directory-class) whose path is the absolute path of
[this](../directory-class).

The absolute path is computed by prefixing a relative path with the
current working directory, or by returning an absolute path unchanged.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Directory get absolute;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Directory/absolute.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/link/absolute.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

absolute property
=================

::: {#getter .section .multi-line-signature}
[Link](../link-class) absolute

::: {.features}
override
:::
:::

A [Link](../link-class) instance whose path is the absolute path to
[this](../link-class).

The absolute path is computed by prefixing a relative path with the
current working directory, or returning an absolute path unchanged.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Link get absolute;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Link/absolute.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/file/absolute.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

absolute property
=================

::: {#getter .section .multi-line-signature}
[File](../file-class) absolute

::: {.features}
override
:::
:::

A [File](../file-class) with the absolute path of [path](path).

The absolute path is computed by prefixing a relative path with the
current working directory, or returning an absolute path unchanged.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
File get absolute;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/File/absolute.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/deviceorientationevent/absolute.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

absolute property
=================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class)? absolute
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool? get absolute native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DeviceOrientationEvent/absolute.html>
:::
