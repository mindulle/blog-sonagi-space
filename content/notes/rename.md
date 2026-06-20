[dart:io](../../dart-io/dart-io-library){._links-link}

rename method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[File](../file-class)\> rename(

1.  [String](../../dart-core/string-class) newPath

)

::: {.features}
override
:::
:::

Renames this file.

Returns a `Future<File>` that completes with a `File` for the renamed
file.

If `newPath` is a relative path, it is resolved against the current
working directory ([Directory.current](../directory/current)). This
means that simply changing the name of a file, but keeping it the
original directory, requires creating a new complete path with the new
name at the end. Example:

``` {.language-dart data-language="dart"}
Future<File> changeFileNameOnly(File file, String newFileName) {
  var path = file.path;
  var lastSeparator = path.lastIndexOf(Platform.pathSeparator);
  var newPath = path.substring(0, lastSeparator + 1) + newFileName;
  return file.rename(newPath);
}
```

On some platforms, a rename operation cannot move a file between
different file systems. If that is the case, instead [copy](copy) the
file to the new location and then remove the original.

If `newPath` identifies an existing file, that file is removed first. If
`newPath` identifies an existing directory, the operation fails and the
future completes with an exception.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<File> rename(String newPath);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/File/rename.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/directory/rename.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

rename method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[Directory](../directory-class)\>
rename(

1.  [String](../../dart-core/string-class) newPath

)

::: {.features}
override
:::
:::

Renames this directory.

Returns a `Future<Directory>` that completes with a `Directory` for the
renamed directory.

If `newPath` identifies an existing directory, then the behavior is
platform-specific. On all platforms, the future completes with a
[FileSystemException](../filesystemexception-class) if the existing
directory is not empty. On POSIX systems, if `newPath` identifies an
existing empty directory then that directory is deleted before this
directory is renamed.

If `newPath` identifies an existing file, the operation fails and the
future completes with a
[FileSystemException](../filesystemexception-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<Directory> rename(String newPath);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Directory/rename.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/filesystementity/rename.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

rename method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[FileSystemEntity](../filesystementity-class)\>
rename(

1.  [String](../../dart-core/string-class) newPath

)
:::

Renames this file system entity.

Returns a `Future<FileSystemEntity>` that completes with a
`FileSystemEntity` instance for the renamed file system entity.

If `newPath` identifies an existing entity of the same type, that entity
is removed first. If `newPath` identifies an existing entity of a
different type, the operation fails and the future completes with an
exception.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<FileSystemEntity> rename(String newPath);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/FileSystemEntity/rename.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/link/rename.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

rename method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[Link](../link-class)\> rename(

1.  [String](../../dart-core/string-class) newPath

)

::: {.features}
override
:::
:::

Renames this link.

Returns a `Future<Link>` that completes with a `Link` for the renamed
link.

If `newPath` identifies an existing link, that link is removed first. If
`newPath` identifies an existing file or directory, the operation fails
and the future completes with an exception.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<Link> rename(String newPath);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Link/rename.html>
:::
