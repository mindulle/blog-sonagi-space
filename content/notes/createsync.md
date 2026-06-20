[dart:io](../../dart-io/dart-io-library){._links-link}

createSync method
=================

::: {.section .multi-line-signature}
void createSync(

1.  [String](../../dart-core/string-class) target,
2.  {[bool](../../dart-core/bool-class) recursive = false}

)
:::

Synchronously create the link. Calling [createSync](createsync) on an
existing link will throw an exception.

If `recursive` is `false`, the default, the link is created only if all
directories in its path exist. If `recursive` is `true`, all
non-existing parent paths are created first. The directories in the path
of `target` are not affected, unless they are also in
[path](../filesystementity/path).

On the Windows platform, this call will create a true symbolic link
instead of a Junction. In order to create a symbolic link on Windows,
Dart must be run in Administrator mode or the system must have Developer
Mode enabled, otherwise a
[FileSystemException](../filesystemexception-class) will be raised with
`ERROR_PRIVILEGE_NOT_HELD` set as the errno when this call is made.

On other platforms, the POSIX `symlink()` call is used to make a
symbolic link containing the string `target`. If `target` is a relative
path, it will be interpreted relative to the directory containing the
link.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void createSync(String target, {bool recursive = false});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Link/createSync.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/file/createsync.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

createSync method
=================

::: {.section .multi-line-signature}
void createSync(

1.  {[bool](../../dart-core/bool-class) recursive = false}

)
:::

Synchronously creates the file.

Existing files are left untouched by [createSync](createsync). Calling
[createSync](createsync) on an existing file might fail if there are
restrictive permissions on the file.

If `recursive` is `false`, the default, the file is created only if all
directories in its path already exist. If `recursive` is `true`, all
non-existing parent paths are created first.

Throws a [FileSystemException](../filesystemexception-class) if the
operation fails.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void createSync({bool recursive = false});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/File/createSync.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/directory/createsync.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

createSync method
=================

::: {.section .multi-line-signature}
void createSync(

1.  {[bool](../../dart-core/bool-class) recursive = false}

)
:::

Synchronously creates the directory if it doesn\'t exist.

If `recursive` is false, only the last directory in the path is created.
If `recursive` is true, all non-existing path components are created. If
the directory already exists nothing is done.

If the directory cannot be created an exception is thrown.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void createSync({bool recursive = false});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Directory/createSync.html>
:::
