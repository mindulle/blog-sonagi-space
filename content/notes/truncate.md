[dart:core](../../dart-core/dart-core-library){._links-link}

truncate method
===============

::: {.section .multi-line-signature}
[int](../int-class) truncate()

::: {.features}
override
:::
:::

Returns the integer obtained by discarding any fractional part of this
number.

Rounds the number towards zero.

Throws an [UnsupportedError](../unsupportederror-class) if this number
is not finite (NaN or an infinity).

``` {.language-dart data-language="dart"}
print(2.00001.truncate()); // 2
print(1.99999.truncate()); // 1
print(0.5.truncate()); // 0
print((-0.5).truncate()); // 0
print((-1.5).truncate()); // -1
print((-2.5).truncate()); // -2
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int truncate();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/double/truncate.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/num/truncate.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

truncate method
===============

::: {.section .multi-line-signature}
[int](../int-class) truncate()
:::

The integer obtained by discarding any fractional digits from `this`.

Rounds fractional values towards zero.

The number must be finite (see [isFinite](isfinite)).

If the value is greater than the highest representable positive integer,
the result is that highest positive integer. If the value is smaller
than the highest representable negative integer, the result is that
highest negative integer.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int truncate();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/truncate.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/randomaccessfile/truncate.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

truncate method
===============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[RandomAccessFile](../randomaccessfile-class)\>
truncate(

1.  [int](../../dart-core/int-class) length

)
:::

Truncates (or extends) the file to `length` bytes.

Returns a `Future<RandomAccessFile>` that completes with this random
access file when the truncation has been performed.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<RandomAccessFile> truncate(int length);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RandomAccessFile/truncate.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/filewriter/truncate.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

truncate method
===============

::: {.section .multi-line-signature}
void truncate(

1.  [int](../../dart-core/int-class) size

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void truncate(int size) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FileWriter/truncate.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/int/truncate.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

truncate method
===============

::: {.section .multi-line-signature}
[int](../int-class) truncate()

::: {.features}
override
:::
:::

Returns `this`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int truncate();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/int/truncate.html>
:::
