[dart:core](../../dart-core/dart-core-library){._links-link}

castFrom\<S, T\> method
=======================

::: {.section .multi-line-signature}
[Set](../set-class)\<T\> castFrom\<S, T\>(

1.  [Set](../set-class)\<S\> source,
2.  {[Set](../set-class)\<R\> newSet( )?}

)

::: {.features}
override
:::
:::

Adapts `source` to be a `Set<T>`.

If `newSet` is provided, it is used to create the new sets returned by
[toSet](toset), [union](union), and is also used for
[intersection](intersection) and [difference](difference). If `newSet`
is omitted, it defaults to creating a new set using the default
[Set](../set-class) constructor, and [intersection](intersection) and
[difference](difference) returns an adapted version of calling the same
method on the source.

Any time the set would produce an element that is not a `T`, the element
access will throw.

Any time a `T` value is attempted added into the adapted set, the store
will throw unless the value is also an instance of `S`.

If all accessed elements of `source` are actually instances of `T`, and
if all elements added to the returned set are actually instances of `S`,
then the returned set can be used as a `Set<T>`.

Methods which accept one or more `Object?` as argument, like
[contains](contains), [remove](remove) and [removeAll](removeall), will
pass the argument directly to the this set\'s method without any checks.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Set<T> castFrom<S, T>(Set<S> source, {Set<R> Function<R>()? newSet}) =>
    CastSet<S, T>(source, newSet);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Set/castFrom.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/map/castfrom.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

castFrom\<K, V, K2, V2\> method
===============================

::: {.section .multi-line-signature}
[Map](../map-class)\<K2, V2\> castFrom\<K, V, K2, V2\>(

1.  [Map](../map-class)\<K, V\> source

)
:::

Adapts `source` to be a `Map<K2, V2>`.

Any time the set would produce a key or value that is not a `K2` or
`V2`, the access will throw.

Any time `K2` key or `V2` value is attempted added into the adapted map,
the store will throw unless the key is also an instance of `K` and the
value is also an instance of `V`.

If all accessed entries of `source` are have `K2` keys and `V2` values
and if all entries added to the returned map have `K` keys and `V`\]
values, then the returned map can be used as a `Map<K2, V2>`.

Methods which accept `Object?` as argument, like
[containsKey](containskey), [remove](remove) and [operator
\[\]](operator_get), will pass the argument directly to the this map\'s
method without any checks.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Map<K2, V2> castFrom<K, V, K2, V2>(Map<K, V> source) =>
    CastMap<K, V, K2, V2>(source);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Map/castFrom.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/queue/castfrom.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

castFrom\<S, T\> method
=======================

::: {.section .multi-line-signature}
[Queue](../queue-class)\<T\> castFrom\<S, T\>(

1.  [Queue](../queue-class)\<S\> source

)

::: {.features}
override
:::
:::

Adapts `source` to be a `Queue<T>`.

Any time the queue would produce an element that is not a `T`, the
element access will throw.

When a `T` value is stored into the adapted queue, the operation will
throw unless the value is also an instance of `S`.

If all accessed elements of `source` are actually instances of `T`, and
if all elements stored into the returned queue are actually instances of
`S`, then the returned queue can be used as a `Queue<T>`.

Methods which accept `Object?` as argument, like
[contains](../../dart-core/iterable/contains) and [remove](remove), will
pass the argument directly to this queue\'s method without any checks.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Queue<T> castFrom<S, T>(Queue<S> source) => CastQueue<S, T>(source);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/Queue/castFrom.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/castfrom.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

castFrom\<S, T\> method
=======================

::: {.section .multi-line-signature}
[List](../list-class)\<T\> castFrom\<S, T\>(

1.  [List](../list-class)\<S\> source

)

::: {.features}
override
:::
:::

Adapts `source` to be a `List<T>`.

Any time the list would produce an element that is not a `T`, the
element access will throw.

Any time a `T` value is attempted stored into the adapted list, the
store will throw unless the value is also an instance of `S`.

If all accessed elements of `source` are actually instances of `T`, and
if all elements stored into the returned list are actually instance of
`S`, then the returned list can be used as a `List<T>`.

Methods which accept `Object?` as argument, like
[contains](../iterable/contains) and [remove](remove), will pass the
argument directly to the this list\'s method without any checks.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static List<T> castFrom<S, T>(List<S> source) => CastList<S, T>(source);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/castFrom.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/streamtransformer/castfrom.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

castFrom\<SS, ST, TS, TT\> method
=================================

::: {.section .multi-line-signature}
[StreamTransformer](../streamtransformer-class)\<TS, TT\> castFrom\<SS,
ST, TS, TT\>(

1.  [StreamTransformer](../streamtransformer-class)\<SS, ST\> source

)
:::

Adapts `source` to be a `StreamTransformer<TS, TT>`.

This allows `source` to be used at the new type, but at run-time it must
satisfy the requirements of both the new type and its original type.

Data events passed into the returned transformer must also be instances
of `SS`, and data events produced by `source` for those events must also
be instances of `TT`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static StreamTransformer<TS, TT> castFrom<SS, ST, TS, TT>(
    StreamTransformer<SS, ST> source) {
  return new CastStreamTransformer<SS, ST, TS, TT>(source);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamTransformer/castFrom.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/converter/castfrom.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

castFrom\<SS, ST, TS, TT\> method
=================================

::: {.section .multi-line-signature}
[Converter](../converter-class)\<TS, TT\> castFrom\<SS, ST, TS, TT\>(

1.  [Converter](../converter-class)\<SS, ST\> source

)

::: {.features}
override
:::
:::

Adapts `source` to be a `Converter<TS, TT>`.

This allows `source` to be used at the new type, but at run-time it must
satisfy the requirements of both the new type and its original type.

Conversion input must be both `SS` and `TS` and the output created by
`source` for those input must be both `ST` and `TT`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Converter<TS, TT> castFrom<SS, ST, TS, TT>(Converter<SS, ST> source) =>
    CastConverter<SS, ST, TS, TT>(source);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Converter/castFrom.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/castfrom.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

castFrom\<S, T\> method
=======================

::: {.section .multi-line-signature}
[Iterable](../iterable-class)\<T\> castFrom\<S, T\>(

1.  [Iterable](../iterable-class)\<S\> source

)
:::

Adapts `source` to be an `Iterable<T>`.

Any time the iterable would produce an element that is not a `T`, the
element access will throw. If all elements of `source` are actually
instances of `T`, or if only elements that are actually instances of `T`
are accessed, then the resulting iterable can be used as an
`Iterable<T>`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Iterable<T> castFrom<S, T>(Iterable<S> source) =>
    CastIterable<S, T>(source);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/castFrom.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/stream/castfrom.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

castFrom\<S, T\> method
=======================

::: {.section .multi-line-signature}
[Stream](../stream-class)\<T\> castFrom\<S, T\>(

1.  [Stream](../stream-class)\<S\> source

)
:::

Adapts `source` to be a `Stream<T>`.

This allows `source` to be used at the new type, but at run-time it must
satisfy the requirements of both the new type and its original type.

Data events created by the source stream must also be instances of `T`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Stream<T> castFrom<S, T>(Stream<S> source) =>
    new CastStream<S, T>(source);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/castFrom.html>
:::
