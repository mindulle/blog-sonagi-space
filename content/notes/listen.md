[dart:io](../../dart-io/dart-io-library){._links-link}

listen method
=============

::: {.section .multi-line-signature}
[StreamSubscription](../../dart-async/streamsubscription-class)\<[SecureSocket](../securesocket-class)\>
listen(

1.  void onData(
    1.  [SecureSocket](../securesocket-class) socket

    )?,
2.  {[Function](../../dart-core/function-class)? onError,
3.  void onDone( )?,
4.  [bool](../../dart-core/bool-class)? cancelOnError}

)

::: {.features}
override
:::
:::

Adds a subscription to this stream.

Returns a
[StreamSubscription](../../dart-async/streamsubscription-class) which
handles events from this stream using the provided `onData`, `onError`
and `onDone` handlers. The handlers can be changed on the subscription,
but they start out as the provided functions.

On each data event from this stream, the subscriber\'s `onData` handler
is called. If `onData` is `null`, nothing happens.

On errors from this stream, the `onError` handler is called with the
error object and possibly a stack trace.

The `onError` callback must be of type `void Function(Object error)` or
`void Function(Object error, StackTrace)`. The function type determines
whether `onError` is invoked with a stack trace argument. The stack
trace argument may be
[StackTrace.empty](../../dart-core/stacktrace/empty-constant) if this
stream received an error without a stack trace.

Otherwise it is called with just the error object. If `onError` is
omitted, any errors on this stream are considered unhandled, and will be
passed to the current [Zone](../../dart-async/zone-class)\'s error
handler. By default unhandled async errors are treated as if they were
uncaught top-level errors.

If this stream closes and sends a done event, the `onDone` handler is
called. If `onDone` is `null`, nothing happens.

If `cancelOnError` is `true`, the subscription is automatically canceled
when the first error event is delivered. The default is `false`.

While a subscription is paused, or when it has been canceled, the
subscription doesn\'t receive events and none of the event handler
functions are called.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
StreamSubscription<SecureSocket> listen(void onData(SecureSocket socket)?,
    {Function? onError, void onDone()?, bool? cancelOnError}) {
  return _socket.map((rawSocket) => new SecureSocket._(rawSocket)).listen(
      onData,
      onError: onError,
      onDone: onDone,
      cancelOnError: cancelOnError);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/SecureServerSocket/listen.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/stdin/listen.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

listen method
=============

::: {.section .multi-line-signature}
[StreamSubscription](../../dart-async/streamsubscription-class)\<[List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>\>
listen(

1.  void onData(
    1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
        event

    )?,
2.  {[Function](../../dart-core/function-class)? onError,
3.  void onDone( )?,
4.  [bool](../../dart-core/bool-class)? cancelOnError}

)

::: {.features}
inherited
:::
:::

Adds a subscription to this stream.

Returns a
[StreamSubscription](../../dart-async/streamsubscription-class) which
handles events from this stream using the provided `onData`, `onError`
and `onDone` handlers. The handlers can be changed on the subscription,
but they start out as the provided functions.

On each data event from this stream, the subscriber\'s `onData` handler
is called. If `onData` is `null`, nothing happens.

On errors from this stream, the `onError` handler is called with the
error object and possibly a stack trace.

The `onError` callback must be of type `void Function(Object error)` or
`void Function(Object error, StackTrace)`. The function type determines
whether `onError` is invoked with a stack trace argument. The stack
trace argument may be
[StackTrace.empty](../../dart-core/stacktrace/empty-constant) if this
stream received an error without a stack trace.

Otherwise it is called with just the error object. If `onError` is
omitted, any errors on this stream are considered unhandled, and will be
passed to the current [Zone](../../dart-async/zone-class)\'s error
handler. By default unhandled async errors are treated as if they were
uncaught top-level errors.

If this stream closes and sends a done event, the `onDone` handler is
called. If `onDone` is `null`, nothing happens.

If `cancelOnError` is `true`, the subscription is automatically canceled
when the first error event is delivered. The default is `false`.

While a subscription is paused, or when it has been canceled, the
subscription doesn\'t receive events and none of the event handler
functions are called.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
StreamSubscription<List<int>> listen(void onData(List<int> event)?,
    {Function? onError, void onDone()?, bool? cancelOnError}) {
  return _stream.listen(onData,
      onError: onError, onDone: onDone, cancelOnError: cancelOnError);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Stdin/listen.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/rawsecureserversocket/listen.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

listen method
=============

::: {.section .multi-line-signature}
[StreamSubscription](../../dart-async/streamsubscription-class)\<[RawSecureSocket](../rawsecuresocket-class)\>
listen(

1.  void onData(
    1.  [RawSecureSocket](../rawsecuresocket-class) s

    )?,
2.  {[Function](../../dart-core/function-class)? onError,
3.  void onDone( )?,
4.  [bool](../../dart-core/bool-class)? cancelOnError}

)

::: {.features}
override
:::
:::

Adds a subscription to this stream.

Returns a
[StreamSubscription](../../dart-async/streamsubscription-class) which
handles events from this stream using the provided `onData`, `onError`
and `onDone` handlers. The handlers can be changed on the subscription,
but they start out as the provided functions.

On each data event from this stream, the subscriber\'s `onData` handler
is called. If `onData` is `null`, nothing happens.

On errors from this stream, the `onError` handler is called with the
error object and possibly a stack trace.

The `onError` callback must be of type `void Function(Object error)` or
`void Function(Object error, StackTrace)`. The function type determines
whether `onError` is invoked with a stack trace argument. The stack
trace argument may be
[StackTrace.empty](../../dart-core/stacktrace/empty-constant) if this
stream received an error without a stack trace.

Otherwise it is called with just the error object. If `onError` is
omitted, any errors on this stream are considered unhandled, and will be
passed to the current [Zone](../../dart-async/zone-class)\'s error
handler. By default unhandled async errors are treated as if they were
uncaught top-level errors.

If this stream closes and sends a done event, the `onDone` handler is
called. If `onDone` is `null`, nothing happens.

If `cancelOnError` is `true`, the subscription is automatically canceled
when the first error event is delivered. The default is `false`.

While a subscription is paused, or when it has been canceled, the
subscription doesn\'t receive events and none of the event handler
functions are called.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
StreamSubscription<RawSecureSocket> listen(void onData(RawSecureSocket s)?,
    {Function? onError, void onDone()?, bool? cancelOnError}) {
  return _controller.stream.listen(onData,
      onError: onError, onDone: onDone, cancelOnError: cancelOnError);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawSecureServerSocket/listen.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/streamview/listen.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

listen method
=============

::: {.section .multi-line-signature}
[StreamSubscription](../streamsubscription-class)\<T\> listen(

1.  void onData(
    1.  T value

    )?,
2.  {[Function](../../dart-core/function-class)? onError,
3.  void onDone( )?,
4.  [bool](../../dart-core/bool-class)? cancelOnError}

)

::: {.features}
override
:::
:::

Adds a subscription to this stream.

Returns a [StreamSubscription](../streamsubscription-class) which
handles events from this stream using the provided `onData`, `onError`
and `onDone` handlers. The handlers can be changed on the subscription,
but they start out as the provided functions.

On each data event from this stream, the subscriber\'s `onData` handler
is called. If `onData` is `null`, nothing happens.

On errors from this stream, the `onError` handler is called with the
error object and possibly a stack trace.

The `onError` callback must be of type `void Function(Object error)` or
`void Function(Object error, StackTrace)`. The function type determines
whether `onError` is invoked with a stack trace argument. The stack
trace argument may be
[StackTrace.empty](../../dart-core/stacktrace/empty-constant) if this
stream received an error without a stack trace.

Otherwise it is called with just the error object. If `onError` is
omitted, any errors on this stream are considered unhandled, and will be
passed to the current [Zone](../zone-class)\'s error handler. By default
unhandled async errors are treated as if they were uncaught top-level
errors.

If this stream closes and sends a done event, the `onDone` handler is
called. If `onDone` is `null`, nothing happens.

If `cancelOnError` is `true`, the subscription is automatically canceled
when the first error event is delivered. The default is `false`.

While a subscription is paused, or when it has been canceled, the
subscription doesn\'t receive events and none of the event handler
functions are called.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
StreamSubscription<T> listen(void onData(T value)?,
    {Function? onError, void onDone()?, bool? cancelOnError}) {
  return _stream.listen(onData,
      onError: onError, onDone: onDone, cancelOnError: cancelOnError);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamView/listen.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/stream/listen.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

listen method
=============

::: {.section .multi-line-signature}
[StreamSubscription](../streamsubscription-class)\<T\> listen(

1.  void onData(
    1.  T event

    )?,
2.  {[Function](../../dart-core/function-class)? onError,
3.  void onDone( )?,
4.  [bool](../../dart-core/bool-class)? cancelOnError}

)
:::

Adds a subscription to this stream.

Returns a [StreamSubscription](../streamsubscription-class) which
handles events from this stream using the provided `onData`, `onError`
and `onDone` handlers. The handlers can be changed on the subscription,
but they start out as the provided functions.

On each data event from this stream, the subscriber\'s `onData` handler
is called. If `onData` is `null`, nothing happens.

On errors from this stream, the `onError` handler is called with the
error object and possibly a stack trace.

The `onError` callback must be of type `void Function(Object error)` or
`void Function(Object error, StackTrace)`. The function type determines
whether `onError` is invoked with a stack trace argument. The stack
trace argument may be
[StackTrace.empty](../../dart-core/stacktrace/empty-constant) if this
stream received an error without a stack trace.

Otherwise it is called with just the error object. If `onError` is
omitted, any errors on this stream are considered unhandled, and will be
passed to the current [Zone](../zone-class)\'s error handler. By default
unhandled async errors are treated as if they were uncaught top-level
errors.

If this stream closes and sends a done event, the `onDone` handler is
called. If `onDone` is `null`, nothing happens.

If `cancelOnError` is `true`, the subscription is automatically canceled
when the first error event is delivered. The default is `false`.

While a subscription is paused, or when it has been canceled, the
subscription doesn\'t receive events and none of the event handler
functions are called.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
StreamSubscription<T> listen(void onData(T event)?,
    {Function? onError, void onDone()?, bool? cancelOnError});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Stream/listen.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-isolate/receiveport/listen.md)
[dart:isolate](../../dart-isolate/dart-isolate-library){._links-link}

listen method
=============

::: {.section .multi-line-signature}
[StreamSubscription](../../dart-async/streamsubscription-class) listen(

1.  void onData(
    1.  dynamic message

    )?,
2.  {[Function](../../dart-core/function-class)? onError,
3.  void onDone( )?,
4.  [bool](../../dart-core/bool-class)? cancelOnError}

)

::: {.features}
override
:::
:::

Listen for events from [Stream](../../dart-async/stream-class).

See [Stream.listen](../../dart-async/stream/listen).

Note that `onError` and `cancelOnError` are ignored since a
[ReceivePort](../receiveport-class) will never receive an error.

The `onDone` handler will be called when the stream closes. The stream
closes when [close](close) is called.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
StreamSubscription<dynamic> listen(void onData(var message)?,
    {Function? onError, void onDone()?, bool? cancelOnError});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-isolate/ReceivePort/listen.html>
:::
