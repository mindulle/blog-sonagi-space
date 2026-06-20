[dart:html](../../dart-html/dart-html-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>
last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Rectangle get last {
  int len = this.length;
  if (len > 0) {
    return JS('Rectangle', '#[#]', this, len - 1);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void
last=([Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>
value)

::: {.features}
inherited
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomRectList/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechgrammarlist/last.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[SpeechGrammar](../speechgrammar-class) last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
SpeechGrammar get last {
  int len = this.length;
  if (len > 0) {
    return JS('SpeechGrammar', '#[#]', this, len - 1);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void last=([SpeechGrammar](../speechgrammar-class) value)

::: {.features}
inherited
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechGrammarList/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/sourcebufferlist/last.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[SourceBuffer](../sourcebuffer-class) last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
SourceBuffer get last {
  int len = this.length;
  if (len > 0) {
    return JS('SourceBuffer', '#[#]', this, len - 1);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void last=([SourceBuffer](../sourcebuffer-class) value)

::: {.features}
inherited
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SourceBufferList/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/texttrackcuelist/last.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[TextTrackCue](../texttrackcue-class) last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
TextTrackCue get last {
  int len = this.length;
  if (len > 0) {
    return JS('TextTrackCue', '#[#]', this, len - 1);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void last=([TextTrackCue](../texttrackcue-class) value)

::: {.features}
inherited
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextTrackCueList/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domstringlist/last.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get last {
  int len = this.length;
  if (len > 0) {
    return JS('String', '#[#]', this, len - 1);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void last=([String](../../dart-core/string-class) value)

::: {.features}
inherited
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomStringList/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/stringlist/last.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get last {
  int len = this.length;
  if (len > 0) {
    return JS('String', '#[#]', this, len - 1);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void last=([String](../../dart-core/string-class) value)

::: {.features}
inherited
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/StringList/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/texttracklist/last.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[TextTrack](../texttrack-class) last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
TextTrack get last {
  int len = this.length;
  if (len > 0) {
    return JS('TextTrack', '#[#]', this, len - 1);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void last=([TextTrack](../texttrack-class) value)

::: {.features}
inherited
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextTrackList/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/transformlist/last.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[Transform](../transform-class) last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Transform get last {
  int len = this.length;
  if (len > 0) {
    return JS('Transform', '#[#]', this, len - 1);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void last=([Transform](../transform-class) value)

::: {.features}
inherited
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/TransformList/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mimetypearray/last.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[MimeType](../mimetype-class) last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
MimeType get last {
  int len = this.length;
  if (len > 0) {
    return JS('MimeType', '#[#]', this, len - 1);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void last=([MimeType](../mimetype-class) value)

::: {.features}
inherited
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MimeTypeArray/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/pluginarray/last.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[Plugin](../plugin-class) last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Plugin get last {
  int len = this.length;
  if (len > 0) {
    return JS('Plugin', '#[#]', this, len - 1);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void last=([Plugin](../plugin-class) value)

::: {.features}
inherited
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PluginArray/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/lengthlist/last.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[Length](../length-class) last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Length get last {
  int len = this.length;
  if (len > 0) {
    return JS('Length', '#[#]', this, len - 1);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void last=([Length](../length-class) value)

::: {.features}
inherited
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/LengthList/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/numberlist/last.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[Number](../number-class) last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Number get last {
  int len = this.length;
  if (len > 0) {
    return JS('Number', '#[#]', this, len - 1);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void last=([Number](../number-class) value)

::: {.features}
inherited
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/NumberList/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/touchlist/last.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[Touch](../touch-class) last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Touch get last {
  int len = this.length;
  if (len > 0) {
    return JS('Touch', '#[#]', this, len - 1);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void last=([Touch](../touch-class) value)

::: {.features}
inherited
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TouchList/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/htmlcollection/last.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[Node](../node-class) last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Node get last {
  int len = this.length;
  if (len > 0) {
    return JS('Node', '#[#]', this, len - 1);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void last=([Node](../node-class) value)

::: {.features}
inherited
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HtmlCollection/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/filelist/last.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[File](../file-class) last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
File get last {
  int len = this.length;
  if (len > 0) {
    return JS('File', '#[#]', this, len - 1);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void last=([File](../file-class) value)

::: {.features}
inherited
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FileList/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/nodelist/last.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[Node](../node-class) last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Node get last {
  int len = this.length;
  if (len > 0) {
    return JS('Node', '#[#]', this, len - 1);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void last=([Node](../node-class) value)

::: {.features}
inherited
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/NodeList/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/last.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
E last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get last {
  if (length == 0) throw IterableElementError.noElement();
  return this[length - 1];
}
```

::: {#setter .section .multi-line-signature}
void last=(E value)

::: {.features}
override
:::
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.last` is equivalent
to `theList[theList.length - 1]`, both for getting and setting the
value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[length - 1] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/last.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
E last

::: {.features}
inherited
:::
:::

Returns the last element.

Throws a [StateError](../stateerror-class) if `this` is empty. Otherwise
may iterate through the elements and returns the last one seen. Some
iterables may have more efficient ways to find the last element (for
example a list can directly access the last element, without iterating
through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get last {
  Iterator<E> it = iterator;
  if (!it.moveNext()) {
    throw IterableElementError.noElement();
  }
  E result;
  do {
    result = it.current;
  } while (it.moveNext());
  return result;
}
```

::: {#setter .section .multi-line-signature}
void last=(E value)
:::

The last element of the list.

The list must be non-empty when accessing its last element.

The last element of a list can be modified, unlike an
[Iterable](../iterable-class). A `list.last` is equivalent to
`theList[theList.length - 1]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.last); // 3
numbers.last = 10;
print(numbers.last); // 10
numbers.clear();
numbers.last; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set last(E value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/stream/last.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[Future](../future-class)\<T\> last
:::

The last element of this stream.

If this stream emits an error event, the returned future is completed
with that error and processing stops.

If this stream is empty (the done event is the first event), the
returned future completes with an error.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<T> get last {
  _Future<T> future = new _Future<T>();
  late T result;
  bool foundResult = false;
  listen(
      (T value) {
        foundResult = true;
        result = value;
      },
      onError: future._completeError,
      onDone: () {
        if (foundResult) {
          future._complete(result);
          return;
        }
        try {
          throw IterableElementError.noElement();
        } catch (e, s) {
          _completeWithErrorCallback(future, e, s);
        }
      },
      cancelOnError: true);
  return future;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/runes/last.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[int](../int-class) last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../stateerror-class) if `this` is empty. Otherwise
may iterate through the elements and returns the last one seen. Some
iterables may have more efficient ways to find the last element (for
example a list can directly access the last element, without iterating
through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get last {
  if (string.length == 0) {
    throw StateError('No elements.');
  }
  int length = string.length;
  int code = string.codeUnitAt(length - 1);
  if (_isTrailSurrogate(code) && string.length > 1) {
    int previousCode = string.codeUnitAt(length - 2);
    if (_isLeadSurrogate(previousCode)) {
      return _combineSurrogatePair(previousCode, code);
    }
  }
  return code;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Runes/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/last.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
E last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get last {
  Iterator<E> it = iterator;
  if (!it.moveNext()) {
    throw IterableElementError.noElement();
  }
  E result;
  do {
    result = it.current;
  } while (it.moveNext());
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/last.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
E last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get last {
  Iterator<E> it = iterator;
  if (!it.moveNext()) {
    throw IterableElementError.noElement();
  }
  E result;
  do {
    result = it.current;
  } while (it.moveNext());
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/last.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
E last
:::

Returns the last element.

Throws a [StateError](../stateerror-class) if `this` is empty. Otherwise
may iterate through the elements and returns the last one seen. Some
iterables may have more efficient ways to find the last element (for
example a list can directly access the last element, without iterating
through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get last {
  Iterator<E> it = iterator;
  if (!it.moveNext()) {
    throw IterableElementError.noElement();
  }
  E result;
  do {
    result = it.current;
  } while (it.moveNext());
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/linkedlist/last.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
E last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get last {
  if (isEmpty) {
    throw StateError('No such element');
  }
  return _first!._previous!;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/LinkedList/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/last.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
E last
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get last {
  if (_head == _tail) throw IterableElementError.noElement();
  return _table[(_tail - 1) & (_table.length - 1)] as E;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreeset/last.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
E last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get last {
  if (_count == 0) throw IterableElementError.noElement();
  return _last!.key;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeSet/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/last.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) last

::: {.features}
inherited
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get last => readClasses().last;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/last.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/doublelinkedqueue/last.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

last property
=============

::: {#getter .section .multi-line-signature}
E last

::: {.features}
override
:::
:::

Returns the last element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise may iterate through the elements and returns the last
one seen. Some iterables may have more efficient ways to find the last
element (for example a list can directly access the last element,
without iterating through the previous ones).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get last => _sentinel._previousLink!.element;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/DoubleLinkedQueue/last.html>
:::
