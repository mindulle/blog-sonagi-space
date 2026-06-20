[dart:core](../../dart-core/dart-core-library){._links-link}

moveNext method
===============

::: {.section .multi-line-signature}
[bool](../bool-class) moveNext()

::: {.features}
override
:::
:::

Advances the iterator to the next element of the iteration.

Should be called before reading [current](current). If the call to
`moveNext` returns `true`, then [current](current) will contain the next
element of the iteration until `moveNext` is called again. If the call
returns `false`, there are no further elements and [current](current)
should not be used any more.

It is safe to call [moveNext](movenext) after it has already returned
`false`, but it must keep returning `false` and not have any other
effect.

A call to `moveNext` may throw for various reasons, including a
concurrent change to an underlying collection. If that happens, the
iterator may be in an inconsistent state, and any further behavior of
the iterator is unspecified, including the effect of reading
[current](current).

``` {.language-dart data-language="dart"}
final colors = ['blue', 'yellow', 'red'];
final colorsIterator = colors.iterator;
print(colorsIterator.moveNext()); // true
print(colorsIterator.moveNext()); // true
print(colorsIterator.moveNext()); // true
print(colorsIterator.moveNext()); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool moveNext() {
  _position = _nextPosition;
  if (_position == string.length) {
    _currentCodePoint = -1;
    return false;
  }
  int codeUnit = string.codeUnitAt(_position);
  int nextPosition = _position + 1;
  if (_isLeadSurrogate(codeUnit) && nextPosition < string.length) {
    int nextCodeUnit = string.codeUnitAt(nextPosition);
    if (_isTrailSurrogate(nextCodeUnit)) {
      _nextPosition = nextPosition + 1;
      _currentCodePoint = _combineSurrogatePair(codeUnit, nextCodeUnit);
      return true;
    }
  }
  _nextPosition = nextPosition;
  _currentCodePoint = codeUnit;
  return true;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/RuneIterator/moveNext.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/fixedsizelistiterator/movenext.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

moveNext method
===============

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) moveNext()

::: {.features}
override
:::
:::

Advances the iterator to the next element of the iteration.

Should be called before reading [current](current). If the call to
`moveNext` returns `true`, then [current](current) will contain the next
element of the iteration until `moveNext` is called again. If the call
returns `false`, there are no further elements and [current](current)
should not be used any more.

It is safe to call [moveNext](movenext) after it has already returned
`false`, but it must keep returning `false` and not have any other
effect.

A call to `moveNext` may throw for various reasons, including a
concurrent change to an underlying collection. If that happens, the
iterator may be in an inconsistent state, and any further behavior of
the iterator is unspecified, including the effect of reading
[current](current).

``` {.language-dart data-language="dart"}
final colors = ['blue', 'yellow', 'red'];
final colorsIterator = colors.iterator;
print(colorsIterator.moveNext()); // true
print(colorsIterator.moveNext()); // true
print(colorsIterator.moveNext()); // true
print(colorsIterator.moveNext()); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool moveNext() {
  int nextPosition = _position + 1;
  if (nextPosition < _length) {
    _current = _array[nextPosition];
    _position = nextPosition;
    return true;
  }
  _current = null;
  _position = _length;
  return false;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FixedSizeListIterator/moveNext.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterator/movenext.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

moveNext method
===============

::: {.section .multi-line-signature}
[bool](../bool-class) moveNext()
:::

Advances the iterator to the next element of the iteration.

Should be called before reading [current](current). If the call to
`moveNext` returns `true`, then [current](current) will contain the next
element of the iteration until `moveNext` is called again. If the call
returns `false`, there are no further elements and [current](current)
should not be used any more.

It is safe to call [moveNext](movenext) after it has already returned
`false`, but it must keep returning `false` and not have any other
effect.

A call to `moveNext` may throw for various reasons, including a
concurrent change to an underlying collection. If that happens, the
iterator may be in an inconsistent state, and any further behavior of
the iterator is unspecified, including the effect of reading
[current](current).

``` {.language-dart data-language="dart"}
final colors = ['blue', 'yellow', 'red'];
final colorsIterator = colors.iterator;
print(colorsIterator.moveNext()); // true
print(colorsIterator.moveNext()); // true
print(colorsIterator.moveNext()); // true
print(colorsIterator.moveNext()); // false
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool moveNext();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterator/moveNext.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/streamiterator/movenext.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

moveNext method
===============

::: {.section .multi-line-signature}
[Future](../future-class)\<[bool](../../dart-core/bool-class)\>
moveNext()
:::

Wait for the next stream value to be available.

Returns a future which will complete with either `true` or `false`.
Completing with `true` means that another event has been received and
can be read as [current](current). Completing with `false` means that
the stream iteration is done and no further events will ever be
available. The future may complete with an error, if the stream produces
an error, which also ends iteration.

The function must not be called again until the future returned by a
previous call is completed.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<bool> moveNext();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamIterator/moveNext.html>
:::
