[dart:io](../../dart-io/dart-io-library){._links-link}

readSync method
===============

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>?
readSync(

1.  [int](../../dart-core/int-class) bytes

)
:::

Reads up to `bytes` bytes from the socket.

Blocks and waits for a response of up to a specified number of bytes
sent by the socket. `bytes` specifies the maximum number of bytes to be
read. Returns the list of bytes read, which could be less than the value
specified by `bytes`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<int>? readSync(int bytes);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawSynchronousSocket/readSync.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/randomaccessfile/readsync.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

readSync method
===============

::: {.section .multi-line-signature}
[Uint8List](../../dart-typed_data/uint8list-class) readSync(

1.  [int](../../dart-core/int-class) count

)
:::

Synchronously reads up to `count` bytes from a file

Throws a [FileSystemException](../filesystemexception-class) if the
operation fails.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Uint8List readSync(int count);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RandomAccessFile/readSync.html>
:::
