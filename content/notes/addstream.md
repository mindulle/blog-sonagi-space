[dart:async](../../dart-async/dart-async-library){._links-link}

addStream method
================

::: {.section .multi-line-signature}
[Future](../future-class) addStream(

1.  [Stream](../stream-class)\<T\> source,
2.  {[bool](../../dart-core/bool-class)? cancelOnError}

)

::: {.features}
override
:::
:::

Receives events from `source` and puts them into this controller\'s
stream.

Returns a future which completes when the source stream is done.

Events must not be added directly to this controller using [add](add),
[addError](adderror), [close](close) or [addStream](addstream), until
the returned future is complete.

Data and error events are forwarded to this controller\'s stream. A done
event on the source will end the `addStream` operation and complete the
returned future.

If `cancelOnError` is `true`, only the first error on `source` is
forwarded to the controller\'s stream, and the `addStream` ends after
this. If `cancelOnError` is false, all errors are forwarded and only a
done event will end the `addStream`. If `cancelOnError` is omitted or
`null`, it defaults to `false`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future addStream(Stream<T> source, {bool? cancelOnError});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamController/addStream.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/streamconsumer/addstream.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

addStream method
================

::: {.section .multi-line-signature}
[Future](../future-class) addStream(

1.  [Stream](../stream-class)\<S\> stream

)
:::

Consumes the elements of `stream`.

Listens on `stream` and does something for each event.

Returns a future which is completed when the stream is done being added,
and the consumer is ready to accept a new stream. No further calls to
[addStream](addstream) or [close](close) should happen before the
returned future has completed.

The consumer may stop listening to the stream after an error, it may
consume all the errors and only stop at a done event, or it may be
canceled early if the receiver don\'t want any further events.

If the consumer stops listening because of some error preventing it from
continuing, it may report this error in the returned future, otherwise
it will just complete the future with `null`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future addStream(Stream<S> stream);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamConsumer/addStream.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/stdout/addstream.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

addStream method
================

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) addStream(

1.  [Stream](../../dart-async/stream-class)\<[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>\>
    stream

)

::: {.features}
inherited
:::
:::

Adds all elements of the given `stream`.

Returns a [Future](../../dart-async/future-class) that completes when
all elements of the given `stream` have been added.

If the stream contains an error, the `addStream` ends at the error, and
the returned future completes with that error.

This function must not be called when a stream is currently being added
using this function.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future addStream(Stream<List<int>> stream) => _sink.addStream(stream);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Stdout/addStream.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/iosink/addstream.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

addStream method
================

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) addStream(

1.  [Stream](../../dart-async/stream-class)\<[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>\>
    stream

)

::: {.features}
override
:::
:::

Adds all elements of the given `stream`.

Returns a [Future](../../dart-async/future-class) that completes when
all elements of the given `stream` have been added.

If the stream contains an error, the `addStream` ends at the error, and
the returned future completes with that error.

This function must not be called when a stream is currently being added
using this function.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future addStream(Stream<List<int>> stream);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/IOSink/addStream.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcpeerconnection/addstream.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

addStream method
================

::: {.section .multi-line-signature}
void addStream(

1.  [MediaStream](../mediastream-class)? stream,
2.  \[[Map](../../dart-core/map-class)? mediaConstraints\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void addStream(MediaStream? stream, [Map? mediaConstraints]) {
  if (mediaConstraints != null) {
    var mediaConstraints_1 = convertDartToNative_Dictionary(mediaConstraints);
    _addStream_1(stream, mediaConstraints_1);
    return;
  }
  _addStream_2(stream);
  return;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcPeerConnection/addStream.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/websocket/addstream.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

addStream method
================

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) addStream(

1.  [Stream](../../dart-async/stream-class) stream

)

::: {.features}
override
:::
:::

Sends data from a stream on WebSocket connection. Each data event from
`stream` will be send as a single WebSocket frame. The data from
`stream` must be either `String`s, or `List<int>`s holding bytes.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future addStream(Stream stream);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/WebSocket/addStream.html>
:::
