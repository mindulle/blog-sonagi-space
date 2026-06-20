[dart:async](../../dart-async/dart-async-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[Future](../future-class)\<T\> elementAt(

1.  [int](../../dart-core/int-class) index

)
:::

Returns the value of the `index`th data event of this stream.

Stops listening to this stream after the `index`th data event has been
received.

Internally the method cancels its subscription after these elements.
This means that single-subscription (non-broadcast) streams are closed
and cannot be reused after a call to this method.

If an error event occurs before the value is found, the future completes
with this error.

If a done event occurs before the value is found, the future completes
with a [RangeError](../../dart-core/rangeerror-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<T> elementAt(int index) {
  RangeError.checkNotNegative(index, "index");
  _Future<T> result = new _Future<T>();
  int elementIndex = 0;
  StreamSubscription<T> subscription;
  subscription =
      this.listen(null, onError: result._completeError, onDone: () {
    result._completeError(
        new RangeError.index(index, this, "index", null, elementIndex),
        StackTrace.empty);
  }, cancelOnError: true);
  subscription.onData((T value) {
    if (index == elementIndex) {
      _cancelAndValue(subscription, result, value);
      return;
    }
    elementIndex += 1;
  });

  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/elementat.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
E elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E elementAt(int index) {
  checkNotNullable(index, "index");
  RangeError.checkNotNegative(index, "index");
  int elementIndex = 0;
  for (E element in this) {
    if (index == elementIndex) return element;
    elementIndex++;
  }
  throw RangeError.index(index, this, "index", null, elementIndex);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/elementat.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
E elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E elementAt(int index) {
  checkNotNullable(index, "index");
  RangeError.checkNotNegative(index, "index");
  int elementIndex = 0;
  for (E element in this) {
    if (index == elementIndex) return element;
    elementIndex++;
  }
  throw RangeError.index(index, this, "index", null, elementIndex);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/elementat.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
E elementAt(

1.  [int](../int-class) index

)
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E elementAt(int index) {
  RangeError.checkNotNegative(index, "index");
  int elementIndex = 0;
  for (E element in this) {
    if (index == elementIndex) return element;
    elementIndex++;
  }
  throw RangeError.index(index, this, "index", null, elementIndex);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domrectlist/elementat.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>
elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Rectangle elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomRectList/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/elementat.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
E elementAt(

1.  [int](../../dart-core/int-class) index

)
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E elementAt(int index) {
  RangeError.checkValidIndex(index, this);
  return _table[(_head + index) & (_table.length - 1)] as E;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/elementat.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
inherited
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String elementAt(int index) => readClasses().elementAt(index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechgrammarlist/elementat.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[SpeechGrammar](../speechgrammar-class) elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
SpeechGrammar elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechGrammarList/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/sourcebufferlist/elementat.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[SourceBuffer](../sourcebuffer-class) elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
SourceBuffer elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SourceBufferList/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/texttrackcuelist/elementat.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[TextTrackCue](../texttrackcue-class) elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
TextTrackCue elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextTrackCueList/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domstringlist/elementat.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomStringList/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/elementat.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
E elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than
[length](../../dart-core/list/length). Index zero represents the first
element (so `iterable.elementAt(0)` is equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/texttracklist/elementat.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[TextTrack](../texttrack-class) elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
TextTrack elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextTrackList/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mimetypearray/elementat.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[MimeType](../mimetype-class) elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
MimeType elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MimeTypeArray/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/stringlist/elementat.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/StringList/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/transformlist/elementat.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[Transform](../transform-class) elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Transform elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/TransformList/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/pluginarray/elementat.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[Plugin](../plugin-class) elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Plugin elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PluginArray/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/htmlcollection/elementat.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[Node](../node-class) elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Node elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HtmlCollection/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/touchlist/elementat.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[Touch](../touch-class) elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Touch elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TouchList/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/lengthlist/elementat.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[Length](../length-class) elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Length elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/LengthList/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/numberlist/elementat.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[Number](../number-class) elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Number elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/NumberList/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/filelist/elementat.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[File](../file-class) elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
File elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FileList/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/nodelist/elementat.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[Node](../node-class) elementAt(

1.  [int](../../dart-core/int-class) index

)

::: {.features}
override
:::
:::

Returns the `index`th element.

The `index` must be non-negative and less than [length](length). Index
zero represents the first element (so `iterable.elementAt(0)` is
equivalent to `iterable.first`).

May iterate through the elements in iteration order, ignoring the first
`index` elements and then returning the next. Some iterables may have a
more efficient way to find the element.

Example:

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3, 5, 6, 7];
final elementAt = numbers.elementAt(4); // 6
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Node elementAt(int index) => this[index];
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/NodeList/elementAt.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/pointer/elementat.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

elementAt method
================

::: {.section .multi-line-signature}
[Pointer](../pointer-class)\<T\> elementAt(

1.  [int](../../dart-core/int-class) index

)
:::

Pointer arithmetic (takes element size into account).

This method must be invoked with a compile-time constant `T`.

Does not accept dynamic invocations \-- where the type of the receiver
is `dynamic`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external Pointer<T> elementAt(int index);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Pointer/elementAt.html>
:::
