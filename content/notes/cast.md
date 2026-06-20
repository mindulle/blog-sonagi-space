[dart:collection](../../dart-collection/dart-collection-library){._links-link}

cast\<RK, RV\> method
=====================

::: {.section .multi-line-signature}
[Map](../../dart-core/map-class)\<RK, RV\> cast\<RK, RV\>()

::: {.features}
override
:::
:::

Provides a view of this map as having `RK` keys and `RV` instances, if
necessary.

If this map is already a `Map<RK, RV>`, it is returned unchanged.

If this set contains only keys of type `RK` and values of type `RV`, all
read operations will work correctly. If any operation exposes a non-`RK`
key or non-`RV` value, the operation will throw instead.

Entries added to the map must be valid for both a `Map<K, V>` and a
`Map<RK, RV>`.

Methods which accept `Object?` as argument, like
[containsKey](../mapview/containskey), [remove](remove) and [operator
\[\]](../mapview/operator_get), will pass the argument directly to the
this map\'s method without any checks. That means that you can do
`mapWithStringKeys.cast<int,int>().remove("a")` successfully, even if it
looks like it shouldn\'t have any effect.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Map<RK, RV> cast<RK, RV>() =>
    UnmodifiableMapView<RK, RV>(_map.cast<RK, RV>());
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableMapView/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/cast.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

cast\<R\> method
================

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<R\> cast\<R\>()

::: {.features}
override
:::
:::

Returns a view of this list as a list of `R` instances.

If this list contains only instances of `R`, all read operations will
work correctly. If any operation tries to read an element that is not an
instance of `R`, the access will throw instead.

Elements added to the list (e.g., by using [add](add) or
[addAll](addall)) must be instances of `R` to be valid arguments to the
adding function, and they must also be instances of `E` to be accepted
by this list as well.

Methods which accept `Object?` as argument, like
[contains](../listmixin/contains) and [remove](remove), will pass the
argument directly to the this list\'s method without any checks. That
means that you can do `listOfStrings.cast<int>().remove("a")`
successfully, even if it looks like it shouldn\'t have any effect.

Typically implemented as `List.castFrom<E, R>(this)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<R> cast<R>() => UnmodifiableListView(_source.cast<R>());
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/cast.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

cast\<R\> method
================

::: {.section .multi-line-signature}
[List](../../dart-core/list-class)\<R\> cast\<R\>()

::: {.features}
override
:::
:::

Returns a view of this list as a list of `R` instances.

If this list contains only instances of `R`, all read operations will
work correctly. If any operation tries to read an element that is not an
instance of `R`, the access will throw instead.

Elements added to the list (e.g., by using [add](add) or
[addAll](addall)) must be instances of `R` to be valid arguments to the
adding function, and they must also be instances of `E` to be accepted
by this list as well.

Methods which accept `Object?` as argument, like [contains](contains)
and [remove](remove), will pass the argument directly to the this
list\'s method without any checks. That means that you can do
`listOfStrings.cast<int>().remove("a")` successfully, even if it looks
like it shouldn\'t have any effect.

Typically implemented as `List.castFrom<E, R>(this)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<R> cast<R>() => List.castFrom<E, R>(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapmixin/cast.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

cast\<RK, RV\> method
=====================

::: {.section .multi-line-signature}
[Map](../../dart-core/map-class)\<RK, RV\> cast\<RK, RV\>()

::: {.features}
override
:::
:::

Provides a view of this map as having `RK` keys and `RV` instances, if
necessary.

If this map is already a `Map<RK, RV>`, it is returned unchanged.

If this set contains only keys of type `RK` and values of type `RV`, all
read operations will work correctly. If any operation exposes a non-`RK`
key or non-`RV` value, the operation will throw instead.

Entries added to the map must be valid for both a `Map<K, V>` and a
`Map<RK, RV>`.

Methods which accept `Object?` as argument, like
[containsKey](containskey), [remove](remove) and [operator
\[\]](operator_get), will pass the argument directly to the this map\'s
method without any checks. That means that you can do
`mapWithStringKeys.cast<int,int>().remove("a")` successfully, even if it
looks like it shouldn\'t have any effect.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Map<RK, RV> cast<RK, RV>() => Map.castFrom<K, V, RK, RV>(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapMixin/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/cast.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

cast\<R\> method
================

::: {.section .multi-line-signature}
[Set](../../dart-core/set-class)\<R\> cast\<R\>()

::: {.features}
override
:::
:::

Provides a view of this set as a set of `R` instances.

If this set contains only instances of `R`, all read operations will
work correctly. If any operation tries to access an element that is not
an instance of `R`, the access will throw instead.

Elements added to the set (e.g., by using [add](add) or
[addAll](addall)) must be instances of `R` to be valid arguments to the
adding function, and they must be instances of `E` as well to be
accepted by this set as well.

Methods which accept one or more `Object?` as argument, like
[contains](contains), [remove](remove) and [removeAll](removeall), will
pass the argument directly to the this set\'s method without any checks.
That means that you can do `setOfStrings.cast<int>().remove("a")`
successfully, even if it looks like it shouldn\'t have any effect.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Set<R> cast<R>() => Set.castFrom<E, R>(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/mapview/cast.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

cast\<RK, RV\> method
=====================

::: {.section .multi-line-signature}
[Map](../../dart-core/map-class)\<RK, RV\> cast\<RK, RV\>()

::: {.features}
override
:::
:::

Provides a view of this map as having `RK` keys and `RV` instances, if
necessary.

If this map is already a `Map<RK, RV>`, it is returned unchanged.

If this set contains only keys of type `RK` and values of type `RV`, all
read operations will work correctly. If any operation exposes a non-`RK`
key or non-`RV` value, the operation will throw instead.

Entries added to the map must be valid for both a `Map<K, V>` and a
`Map<RK, RV>`.

Methods which accept `Object?` as argument, like
[containsKey](containskey), [remove](remove) and [operator
\[\]](operator_get), will pass the argument directly to the this map\'s
method without any checks. That means that you can do
`mapWithStringKeys.cast<int,int>().remove("a")` successfully, even if it
looks like it shouldn\'t have any effect.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Map<RK, RV> cast<RK, RV>() => _map.cast<RK, RV>();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/MapView/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/queue/cast.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

cast\<R\> method
================

::: {.section .multi-line-signature}
[Queue](../queue-class)\<R\> cast\<R\>()

::: {.features}
override
:::
:::

Provides a view of this queue as a queue of `R` instances, if necessary.

If this queue contains only instances of `R`, all read operations will
work correctly. If any operation tries to access an element that is not
an instance of `R`, the access will throw instead.

Elements added to the queue (e.g., by using [addFirst](addfirst) or
[addAll](addall)) must be instances of `R` to be valid arguments to the
adding function, and they must also be instances of `E` to be accepted
by this queue as well.

Methods which accept `Object?` as argument, like
[contains](../../dart-core/iterable/contains) and [remove](remove), will
pass the argument directly to the this queue\'s method without any
checks. That means that you can do
`queueOfStrings.cast<int>().remove("a")` successfully, even if it looks
like it shouldn\'t have any effect.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Queue<R> cast<R>();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/Queue/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/cast.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

cast\<R\> method
================

::: {.section .multi-line-signature}
[List](../list-class)\<R\> cast\<R\>()

::: {.features}
override
:::
:::

Returns a view of this list as a list of `R` instances.

If this list contains only instances of `R`, all read operations will
work correctly. If any operation tries to read an element that is not an
instance of `R`, the access will throw instead.

Elements added to the list (e.g., by using [add](add) or
[addAll](addall)) must be instances of `R` to be valid arguments to the
adding function, and they must also be instances of `E` to be accepted
by this list as well.

Methods which accept `Object?` as argument, like
[contains](../iterable/contains) and [remove](remove), will pass the
argument directly to the this list\'s method without any checks. That
means that you can do `listOfStrings.cast<int>().remove("a")`
successfully, even if it looks like it shouldn\'t have any effect.

Typically implemented as `List.castFrom<E, R>(this)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<R> cast<R>();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/set/cast.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

cast\<R\> method
================

::: {.section .multi-line-signature}
[Set](../set-class)\<R\> cast\<R\>()

::: {.features}
override
:::
:::

Provides a view of this set as a set of `R` instances.

If this set contains only instances of `R`, all read operations will
work correctly. If any operation tries to access an element that is not
an instance of `R`, the access will throw instead.

Elements added to the set (e.g., by using [add](add) or
[addAll](addall)) must be instances of `R` to be valid arguments to the
adding function, and they must be instances of `E` as well to be
accepted by this set as well.

Methods which accept one or more `Object?` as argument, like
[contains](contains), [remove](remove) and [removeAll](removeall), will
pass the argument directly to the this set\'s method without any checks.
That means that you can do `setOfStrings.cast<int>().remove("a")`
successfully, even if it looks like it shouldn\'t have any effect.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Set<R> cast<R>();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Set/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/map/cast.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

cast\<RK, RV\> method
=====================

::: {.section .multi-line-signature}
[Map](../map-class)\<RK, RV\> cast\<RK, RV\>()
:::

Provides a view of this map as having `RK` keys and `RV` instances, if
necessary.

If this map is already a `Map<RK, RV>`, it is returned unchanged.

If this set contains only keys of type `RK` and values of type `RV`, all
read operations will work correctly. If any operation exposes a non-`RK`
key or non-`RV` value, the operation will throw instead.

Entries added to the map must be valid for both a `Map<K, V>` and a
`Map<RK, RV>`.

Methods which accept `Object?` as argument, like
[containsKey](containskey), [remove](remove) and [operator
\[\]](operator_get), will pass the argument directly to the this map\'s
method without any checks. That means that you can do
`mapWithStringKeys.cast<int,int>().remove("a")` successfully, even if it
looks like it shouldn\'t have any effect.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Map<RK, RV> cast<RK, RV>();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Map/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreeset/cast.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

cast\<R\> method
================

::: {.section .multi-line-signature}
[Set](../../dart-core/set-class)\<R\> cast\<R\>()

::: {.features}
override
:::
:::

Provides a view of this iterable as an iterable of `R` instances.

If this iterable only contains instances of `R`, all operations will
work correctly. If any operation tries to access an element that is not
an instance of `R`, the access will throw instead.

When the returned iterable creates a new object that depends on the type
`R`, e.g., from [toList](../setmixin/tolist), it will have exactly the
type `R`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Set<R> cast<R>() => Set.castFrom<E, R>(this, newSet: _newSet);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeSet/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/doublelinkedqueue/cast.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

cast\<R\> method
================

::: {.section .multi-line-signature}
[Queue](../queue-class)\<R\> cast\<R\>()

::: {.features}
override
:::
:::

Provides a view of this iterable as an iterable of `R` instances.

If this iterable only contains instances of `R`, all operations will
work correctly. If any operation tries to access an element that is not
an instance of `R`, the access will throw instead.

When the returned iterable creates a new object that depends on the type
`R`, e.g., from [toList](../../dart-core/iterable/tolist), it will have
exactly the type `R`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Queue<R> cast<R>() => Queue.castFrom<E, R>(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/DoubleLinkedQueue/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/iterablemixin/cast.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

cast\<R\> method
================

::: {.section .multi-line-signature}
[Iterable](../../dart-core/iterable-class)\<R\> cast\<R\>()

::: {.features}
override
:::
:::

Provides a view of this iterable as an iterable of `R` instances.

If this iterable only contains instances of `R`, all operations will
work correctly. If any operation tries to access an element that is not
an instance of `R`, the access will throw instead.

When the returned iterable creates a new object that depends on the type
`R`, e.g., from [toList](tolist), it will have exactly the type `R`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<R> cast<R>() => Iterable.castFrom<E, R>(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/IterableMixin/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/cast.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

cast\<R\> method
================

::: {.section .multi-line-signature}
[Queue](../queue-class)\<R\> cast\<R\>()

::: {.features}
override
:::
:::

Provides a view of this iterable as an iterable of `R` instances.

If this iterable only contains instances of `R`, all operations will
work correctly. If any operation tries to access an element that is not
an instance of `R`, the access will throw instead.

When the returned iterable creates a new object that depends on the type
`R`, e.g., from [toList](tolist), it will have exactly the type `R`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Queue<R> cast<R>() => Queue.castFrom<E, R>(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/streamtransformerbase/cast.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

cast\<RS, RT\> method
=====================

::: {.section .multi-line-signature}
[StreamTransformer](../streamtransformer-class)\<RS, RT\> cast\<RS,
RT\>()

::: {.features}
override
:::
:::

Provides a `StreamTransformer<RS, RT>` view of this stream transformer.

The resulting transformer will check at run-time that all data events of
the stream it transforms are actually instances of `S`, and it will
check that all data events produced by this transformer are actually
instances of `RT`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
StreamTransformer<RS, RT> cast<RS, RT>() =>
    StreamTransformer.castFrom<S, T, RS, RT>(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamTransformerBase/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/iterable/cast.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

cast\<R\> method
================

::: {.section .multi-line-signature}
[Iterable](../iterable-class)\<R\> cast\<R\>()
:::

Provides a view of this iterable as an iterable of `R` instances.

If this iterable only contains instances of `R`, all operations will
work correctly. If any operation tries to access an element that is not
an instance of `R`, the access will throw instead.

When the returned iterable creates a new object that depends on the type
`R`, e.g., from [toList](tolist), it will have exactly the type `R`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Iterable<R> cast<R>() => Iterable.castFrom<E, R>(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Iterable/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/converter/cast.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

cast\<RS, RT\> method
=====================

::: {.section .multi-line-signature}
[Converter](../converter-class)\<RS, RT\> cast\<RS, RT\>()

::: {.features}
override
:::
:::

Provides a `Converter<RS, RT>` view of this stream transformer.

The resulting transformer will check at run-time that all conversion
inputs are actually instances of `S`, and it will check that all
conversion output produced by this converter are actually instances of
`RT`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Converter<RS, RT> cast<RS, RT>() => Converter.castFrom<S, T, RS, RT>(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/Converter/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/streamtransformer/cast.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

cast\<RS, RT\> method
=====================

::: {.section .multi-line-signature}
[StreamTransformer](../streamtransformer-class)\<RS, RT\> cast\<RS,
RT\>()
:::

Provides a `StreamTransformer<RS, RT>` view of this stream transformer.

The resulting transformer will check at run-time that all data events of
the stream it transforms are actually instances of `S`, and it will
check that all data events produced by this transformer are actually
instances of `RT`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
StreamTransformer<RS, RT> cast<RS, RT>();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamTransformer/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/stream/cast.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

cast\<R\> method
================

::: {.section .multi-line-signature}
[Stream](../stream-class)\<R\> cast\<R\>()
:::

Adapt this stream to be a `Stream<R>`.

This stream is wrapped as a `Stream<R>` which checks at run-time that
each data event emitted by this stream is also an instance of `R`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<R> cast<R>() => Stream.castFrom<T, R>(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/cast.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/pointer/cast.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

cast\<U extends NativeType\> method
===================================

::: {.section .multi-line-signature}
[Pointer](../pointer-class)\<U\> cast\<U extends NativeType\>()
:::

Cast Pointer to a Pointer.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external Pointer<U> cast<U extends NativeType>();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Pointer/cast.html>
:::
