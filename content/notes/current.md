[dart:io](../../dart-io/dart-io-library){._links-link}

current property
================

::: {#getter .section .multi-line-signature}
[Directory](../directory-class) current
:::

Creates a directory object pointing to the current working directory.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Directory get current {
  final IOOverrides? overrides = IOOverrides.current;
  if (overrides == null) {
    return _Directory.current;
  }
  return overrides.getCurrentDirectory();
}
```

::: {#setter .section .multi-line-signature}
void current=(dynamic path)
:::

Sets the current working directory of the Dart process.

This affects all running isolates. The new value set can be either a
[Directory](../directory-class) or a
[String](../../dart-core/string-class).

The new value is passed to the OS\'s system call unchanged, so a
relative path passed as the new working directory will be resolved by
the OS.

Note that setting the current working directory is a synchronous
operation and that it changes the working directory of *all* isolates.

Use this with care --- especially when working with asynchronous
operations and multiple isolates. Changing the working directory, while
asynchronous operations are pending or when other isolates are working
with the file system, can lead to unexpected results.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static void set current(path) {
  final IOOverrides? overrides = IOOverrides.current;
  if (overrides == null) {
    _Directory.current = path;
    return;
  }
  overrides.setCurrentDirectory(path);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Directory/current.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/fixedsizelistiterator/current.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

current property
================

::: {#getter .section .multi-line-signature}
T current

::: {.features}
override
:::
:::

The current element.

If the iterator has not yet been moved to the first element
([moveNext](movenext) has not been called yet), or if the iterator has
been moved past the last element of the
[Iterable](../../dart-core/iterable-class) ([moveNext](movenext) has
returned false), then [current](current) is unspecified. An
[Iterator](../../dart-core/iterator-class) may either throw or return an
iterator specific default value in that case.

The `current` getter should keep its value until the next call to
[moveNext](movenext), even if an underlying collection changes. After a
successful call to `moveNext`, the user doesn\'t need to cache the
current value, but can keep reading it from the iterator.

``` {.language-dart data-language="dart"}
final colors = ['blue', 'yellow', 'red'];
var colorsIterator = colors.iterator;
while (colorsIterator.moveNext()) {
  print(colorsIterator.current);
}
```

The output of the example is:

``` {.language-dart data-language="dart"}
blue
yellow
red
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
T get current => _current as T;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FixedSizeListIterator/current.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterator/current.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

current property
================

::: {#getter .section .multi-line-signature}
E current
:::

The current element.

If the iterator has not yet been moved to the first element
([moveNext](movenext) has not been called yet), or if the iterator has
been moved past the last element of the [Iterable](../iterable-class)
([moveNext](movenext) has returned false), then [current](current) is
unspecified. An [Iterator](../iterator-class) may either throw or return
an iterator specific default value in that case.

The `current` getter should keep its value until the next call to
[moveNext](movenext), even if an underlying collection changes. After a
successful call to `moveNext`, the user doesn\'t need to cache the
current value, but can keep reading it from the iterator.

``` {.language-dart data-language="dart"}
final colors = ['blue', 'yellow', 'red'];
var colorsIterator = colors.iterator;
while (colorsIterator.moveNext()) {
  print(colorsIterator.current);
}
```

The output of the example is:

``` {.language-dart data-language="dart"}
blue
yellow
red
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get current;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterator/current.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/streamiterator/current.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

current property
================

::: {#getter .section .multi-line-signature}
T current
:::

The current value of the stream.

When a [moveNext](movenext) call completes with `true`, the
[current](current) field holds the most recent event of the stream, and
it stays like that until the next call to [moveNext](movenext). This
value must only be read after a call to [moveNext](movenext) has
completed with `true`, and only until the [moveNext](movenext) is called
again.

If the StreamIterator has not yet been moved to the first element
([moveNext](movenext) has not been called and completed yet), or if the
StreamIterator has been moved past the last element
([moveNext](movenext) has returned `false`), then [current](current) is
unspecified. A [StreamIterator](../streamiterator-class) may either
throw or return an iterator-specific default value in that case.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
T get current;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamIterator/current.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-isolate/isolate/current.md)
[dart:isolate](../../dart-isolate/dart-isolate-library){._links-link}

current property
================

::: {#getter .section .multi-line-signature}
[Isolate](../isolate-class) current
:::

An [Isolate](../isolate-class) object representing the current isolate.

The current isolate for code using [current](current) is the isolate
running the code.

The isolate object provides the capabilities required to inspect, pause
or kill the isolate, and allows granting these capabilities to others.

It is possible to pause the current isolate, but doing so *without*
first passing the ability to resume it again to another isolate, is a
sure way to hang your program.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external static Isolate get current;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-isolate/Isolate/current.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/stacktrace/current.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

current property
================

::: {#getter .section .multi-line-signature}
[StackTrace](../stacktrace-class) current
:::

Returns a representation of the current stack trace.

This is similar to what can be achieved by doing:

``` {.language-dart data-language="dart"}
try { throw 0; } catch (_, stack) { return stack; }
```

The getter achieves this without throwing if possible.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external static StackTrace get current;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/StackTrace/current.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/accessiblenode/current.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

current property
================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? current
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get current native;
```

::: {#setter .section .multi-line-signature}
void current=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set current(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AccessibleNode/current.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/runeiterator/current.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

current property
================

::: {#getter .section .multi-line-signature}
[int](../int-class) current

::: {.features}
override
:::
:::

The rune (integer Unicode code point) starting at the current position
in the string.

The value is -1 if there is no current code point.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get current => _currentCodePoint;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/RuneIterator/current.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpoverrides/current.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

current property
================

::: {#getter .section .multi-line-signature}
[HttpOverrides](../httpoverrides-class)? current
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static HttpOverrides? get current {
  return Zone.current[_httpOverridesToken] ?? _global;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpOverrides/current.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/iooverrides/current.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

current property
================

::: {#getter .section .multi-line-signature}
[IOOverrides](../iooverrides-class)? current
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static IOOverrides? get current {
  return Zone.current[_ioOverridesToken] ?? _global;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/IOOverrides/current.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zone/current.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

current property
================

::: {#getter .section .multi-line-signature}
[Zone](../zone-class) current
:::

The zone that is currently active.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Zone get current => _current;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Zone/current.html>
:::
