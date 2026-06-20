[dart:async](../../dart-async/dart-async-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[Future](../future-class)\<T\> single
:::

The single element of this stream.

If this stream emits an error event, the returned future is completed
with that error and processing stops.

If [this](../stream-class) is empty or has more than one element, the
returned future completes with an error.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<T> get single {
  _Future<T> future = new _Future<T>();
  late T result;
  bool foundResult = false;
  StreamSubscription<T> subscription =
      this.listen(null, onError: future._completeError, onDone: () {
    if (foundResult) {
      future._complete(result);
      return;
    }
    try {
      throw IterableElementError.noElement();
    } catch (e, s) {
      _completeWithErrorCallback(future, e, s);
    }
  }, cancelOnError: true);
  subscription.onData((T value) {
    if (foundResult) {
      // This is the second element we get.
      try {
        throw IterableElementError.tooMany();
      } catch (e, s) {
        _cancelAndErrorWithReplacement(subscription, future, e, s);
      }
      return;
    }
    foundResult = true;
    result = value;
  });
  return future;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/doublelinkedqueue/single.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
E single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get single {
  // Note that this throws correctly if the queue is empty
  // because reading the element of the sentinel throws.
  if (identical(_sentinel._nextLink, _sentinel._previousLink)) {
    return _sentinel._nextLink!.element;
  }
  throw IterableElementError.tooMany();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/DoubleLinkedQueue/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domrectlist/single.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[Rectangle](../../dart-math/rectangle-class)\<[num](../../dart-core/num-class)\>
single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Rectangle get single {
  int len = this.length;
  if (len == 1) {
    return JS('Rectangle', '#[0]', this);
  }
  if (len == 0) throw new StateError("No elements");
  throw new StateError("More than one element");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomRectList/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechgrammarlist/single.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[SpeechGrammar](../speechgrammar-class) single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
SpeechGrammar get single {
  int len = this.length;
  if (len == 1) {
    return JS('SpeechGrammar', '#[0]', this);
  }
  if (len == 0) throw new StateError("No elements");
  throw new StateError("More than one element");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechGrammarList/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/sourcebufferlist/single.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[SourceBuffer](../sourcebuffer-class) single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
SourceBuffer get single {
  int len = this.length;
  if (len == 1) {
    return JS('SourceBuffer', '#[0]', this);
  }
  if (len == 0) throw new StateError("No elements");
  throw new StateError("More than one element");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SourceBufferList/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/texttrackcuelist/single.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[TextTrackCue](../texttrackcue-class) single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
TextTrackCue get single {
  int len = this.length;
  if (len == 1) {
    return JS('TextTrackCue', '#[0]', this);
  }
  if (len == 0) throw new StateError("No elements");
  throw new StateError("More than one element");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextTrackCueList/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domstringlist/single.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get single {
  int len = this.length;
  if (len == 1) {
    return JS('String', '#[0]', this);
  }
  if (len == 0) throw new StateError("No elements");
  throw new StateError("More than one element");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomStringList/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/texttracklist/single.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[TextTrack](../texttrack-class) single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
TextTrack get single {
  int len = this.length;
  if (len == 1) {
    return JS('TextTrack', '#[0]', this);
  }
  if (len == 0) throw new StateError("No elements");
  throw new StateError("More than one element");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextTrackList/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mimetypearray/single.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[MimeType](../mimetype-class) single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
MimeType get single {
  int len = this.length;
  if (len == 1) {
    return JS('MimeType', '#[0]', this);
  }
  if (len == 0) throw new StateError("No elements");
  throw new StateError("More than one element");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MimeTypeArray/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/transformlist/single.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[Transform](../transform-class) single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Transform get single {
  int len = this.length;
  if (len == 1) {
    return JS('Transform', '#[0]', this);
  }
  if (len == 0) throw new StateError("No elements");
  throw new StateError("More than one element");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/TransformList/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/stringlist/single.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get single {
  int len = this.length;
  if (len == 1) {
    return JS('String', '#[0]', this);
  }
  if (len == 0) throw new StateError("No elements");
  throw new StateError("More than one element");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/StringList/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/single.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
E single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get single {
  Iterator<E> it = iterator;
  if (!it.moveNext()) throw IterableElementError.noElement();
  E result = it.current;
  if (it.moveNext()) throw IterableElementError.tooMany();
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/pluginarray/single.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[Plugin](../plugin-class) single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Plugin get single {
  int len = this.length;
  if (len == 1) {
    return JS('Plugin', '#[0]', this);
  }
  if (len == 0) throw new StateError("No elements");
  throw new StateError("More than one element");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PluginArray/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/htmlcollection/single.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[Node](../node-class) single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Node get single {
  int len = this.length;
  if (len == 1) {
    return JS('Node', '#[0]', this);
  }
  if (len == 0) throw new StateError("No elements");
  throw new StateError("More than one element");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HtmlCollection/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/lengthlist/single.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[Length](../length-class) single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Length get single {
  int len = this.length;
  if (len == 1) {
    return JS('Length', '#[0]', this);
  }
  if (len == 0) throw new StateError("No elements");
  throw new StateError("More than one element");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/LengthList/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/numberlist/single.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[Number](../number-class) single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Number get single {
  int len = this.length;
  if (len == 1) {
    return JS('Number', '#[0]', this);
  }
  if (len == 0) throw new StateError("No elements");
  throw new StateError("More than one element");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/NumberList/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/touchlist/single.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[Touch](../touch-class) single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Touch get single {
  int len = this.length;
  if (len == 1) {
    return JS('Touch', '#[0]', this);
  }
  if (len == 0) throw new StateError("No elements");
  throw new StateError("More than one element");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TouchList/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/single.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
E single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get single {
  if (length > 1) throw IterableElementError.tooMany();
  Iterator<E> it = iterator;
  if (!it.moveNext()) throw IterableElementError.noElement();
  E result = it.current;
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/filelist/single.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[File](../file-class) single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
File get single {
  int len = this.length;
  if (len == 1) {
    return JS('File', '#[0]', this);
  }
  if (len == 0) throw new StateError("No elements");
  throw new StateError("More than one element");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FileList/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/nodelist/single.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[Node](../node-class) single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Node get single {
  int len = this.length;
  if (len == 1) {
    return JS('Node', '#[0]', this);
  }
  if (len == 0) throw new StateError("No elements");
  throw new StateError("More than one element");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/NodeList/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/linkedlist/single.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
E single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get single {
  if (isEmpty) {
    throw StateError('No such element');
  }
  if (_length > 1) {
    throw StateError('Too many elements');
  }
  return _first!;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/LinkedList/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreeset/single.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
E single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get single {
  if (_count == 0) throw IterableElementError.noElement();
  if (_count > 1) throw IterableElementError.tooMany();
  return _root!.key;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeSet/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/single.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
E single

::: {.features}
override
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get single {
  if (length == 0) throw IterableElementError.noElement();
  if (length > 1) throw IterableElementError.tooMany();
  return this[0];
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/single.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
E single
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../stateerror-class) if `this` is empty or has
more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get single {
  Iterator<E> it = iterator;
  if (!it.moveNext()) throw IterableElementError.noElement();
  E result = it.current;
  if (it.moveNext()) throw IterableElementError.tooMany();
  return result;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/single.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
E single
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E get single {
  if (_head == _tail) throw IterableElementError.noElement();
  if (length > 1) throw IterableElementError.tooMany();
  return _table[_head] as E;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/single.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/single.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

single property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) single

::: {.features}
inherited
:::
:::

Checks that this iterable has only one element, and returns that
element.

Throws a [StateError](../../dart-core/stateerror-class) if `this` is
empty or has more than one element.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get single => readClasses().single;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/single.html>
:::
