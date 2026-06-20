[dart:html](../../dart-html/dart-html-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>
first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Rectangle get first {
  if (this.length > 0) {
    return JS('Rectangle', '#[0]', this);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void
first=([Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>
value)

::: {.features}
inherited
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomRectList/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechgrammarlist/first.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[SpeechGrammar](../speechgrammar-class) first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
SpeechGrammar get first {
  if (this.length > 0) {
    return JS('SpeechGrammar', '#[0]', this);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void first=([SpeechGrammar](../speechgrammar-class) value)

::: {.features}
inherited
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechGrammarList/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/sourcebufferlist/first.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[SourceBuffer](../sourcebuffer-class) first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
SourceBuffer get first {
  if (this.length > 0) {
    return JS('SourceBuffer', '#[0]', this);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void first=([SourceBuffer](../sourcebuffer-class) value)

::: {.features}
inherited
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SourceBufferList/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/texttrackcuelist/first.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[TextTrackCue](../texttrackcue-class) first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
TextTrackCue get first {
  if (this.length > 0) {
    return JS('TextTrackCue', '#[0]', this);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void first=([TextTrackCue](../texttrackcue-class) value)

::: {.features}
inherited
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextTrackCueList/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domstringlist/first.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get first {
  if (this.length > 0) {
    return JS('String', '#[0]', this);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void first=([String](../../dart-core/string-class) value)

::: {.features}
inherited
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomStringList/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/stringlist/first.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get first {
  if (this.length > 0) {
    return JS('String', '#[0]', this);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void first=([String](../../dart-core/string-class) value)

::: {.features}
inherited
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/StringList/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/texttracklist/first.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[TextTrack](../texttrack-class) first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
TextTrack get first {
  if (this.length > 0) {
    return JS('TextTrack', '#[0]', this);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void first=([TextTrack](../texttrack-class) value)

::: {.features}
inherited
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextTrackList/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/transformlist/first.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[Transform](../transform-class) first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Transform get first {
  if (this.length > 0) {
    return JS('Transform', '#[0]', this);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void first=([Transform](../transform-class) value)

::: {.features}
inherited
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/TransformList/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mimetypearray/first.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[MimeType](../mimetype-class) first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
MimeType get first {
  if (this.length > 0) {
    return JS('MimeType', '#[0]', this);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void first=([MimeType](../mimetype-class) value)

::: {.features}
inherited
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MimeTypeArray/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/pluginarray/first.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[Plugin](../plugin-class) first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Plugin get first {
  if (this.length > 0) {
    return JS('Plugin', '#[0]', this);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void first=([Plugin](../plugin-class) value)

::: {.features}
inherited
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PluginArray/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/lengthlist/first.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[Length](../length-class) first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Length get first {
  if (this.length > 0) {
    return JS('Length', '#[0]', this);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void first=([Length](../length-class) value)

::: {.features}
inherited
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/LengthList/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/numberlist/first.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[Number](../number-class) first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Number get first {
  if (this.length > 0) {
    return JS('Number', '#[0]', this);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void first=([Number](../number-class) value)

::: {.features}
inherited
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/NumberList/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/touchlist/first.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[Touch](../touch-class) first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Touch get first {
  if (this.length > 0) {
    return JS('Touch', '#[0]', this);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void first=([Touch](../touch-class) value)

::: {.features}
inherited
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TouchList/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/htmlcollection/first.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[Node](../node-class) first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Node get first {
  if (this.length > 0) {
    return JS('Node', '#[0]', this);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void first=([Node](../node-class) value)

::: {.features}
inherited
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HtmlCollection/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/filelist/first.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[File](../file-class) first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
File get first {
  if (this.length > 0) {
    return JS('File', '#[0]', this);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void first=([File](../file-class) value)

::: {.features}
inherited
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FileList/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/nodelist/first.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[Node](../node-class) first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Node get first {
  if (this.length > 0) {
    return JS('Node', '#[0]', this);
  }
  throw new StateError("No elements");
}
```

::: {#setter .section .multi-line-signature}
void first=([Node](../node-class) value)

::: {.features}
inherited
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/NodeList/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/first.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
E first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get first {
  if (length == 0) throw IterableElementError.noElement();
  return this[0];
}
```

::: {#setter .section .multi-line-signature}
void first=(E value)

::: {.features}
override
:::
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../../dart-core/iterable-class). A `list.first` is equivalent
to `list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value) {
  if (length == 0) throw IterableElementError.noElement();
  this[0] = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/stream/first.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[Future](../future-class)\<T\> first
:::

The first element of this stream.

Stops listening to this stream after the first element has been
received.

Internally the method cancels its subscription after the first element.
This means that single-subscription (non-broadcast) streams are closed
and cannot be reused after a call to this getter.

If an error event occurs before the first data event, the returned
future is completed with that error.

If this stream is empty (a done event occurs before the first data
event), the returned future completes with an error.

Except for the type of the error, this method is equivalent to
`this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<T> get first {
  _Future<T> future = new _Future<T>();
  StreamSubscription<T> subscription =
      this.listen(null, onError: future._completeError, onDone: () {
    try {
      throw IterableElementError.noElement();
    } catch (e, s) {
      _completeWithErrorCallback(future, e, s);
    }
  }, cancelOnError: true);
  subscription.onData((T value) {
    _cancelAndValue(subscription, future, value);
  });
  return future;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/first.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
E first

::: {.features}
inherited
:::
:::

Returns the first element.

Throws a [StateError](../stateerror-class) if `this` is empty. Otherwise
returns the first element in the iteration order, equivalent to
`this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get first {
  Iterator<E> it = iterator;
  if (!it.moveNext()) {
    throw IterableElementError.noElement();
  }
  return it.current;
}
```

::: {#setter .section .multi-line-signature}
void first=(E value)
:::

The first element of the list.

The list must be non-empty when accessing its first element.

The first element of a list can be modified, unlike an
[Iterable](../iterable-class). A `list.first` is equivalent to
`list[0]`, both for getting and setting the value.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
print(numbers.first); // 1
numbers.first = 10;
print(numbers.first); // 10
numbers.clear();
numbers.first; // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void set first(E value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/first.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
E first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get first {
  Iterator<E> it = iterator;
  if (!it.moveNext()) {
    throw IterableElementError.noElement();
  }
  return it.current;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/first.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
E first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get first {
  Iterator<E> it = iterator;
  if (!it.moveNext()) {
    throw IterableElementError.noElement();
  }
  return it.current;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreeset/first.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
E first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get first {
  if (_count == 0) throw IterableElementError.noElement();
  return _first!.key;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeSet/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/linkedlist/first.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
E first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get first {
  if (isEmpty) {
    throw StateError('No such element');
  }
  return _first!;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/LinkedList/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/first.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
E first
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get first {
  if (_head == _tail) throw IterableElementError.noElement();
  return _table[_head] as E;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/first.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
E first
:::

Returns the first element.

Throws a [StateError](../stateerror-class) if `this` is empty. Otherwise
returns the first element in the iteration order, equivalent to
`this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get first {
  Iterator<E> it = iterator;
  if (!it.moveNext()) {
    throw IterableElementError.noElement();
  }
  return it.current;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/first.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) first

::: {.features}
inherited
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get first => readClasses().first;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/first.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/doublelinkedqueue/first.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

first property
==============

::: {#getter .section .multi-line-signature}
E first

::: {.features}
override
:::
:::

Returns the first element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty. Otherwise returns the first element in the iteration order,
equivalent to `this.elementAt(0)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get first => _sentinel._nextLink!.element;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/DoubleLinkedQueue/first.html>
:::
