[dart:html](../../dart-html/dart-html-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()

::: {.features}
override
:::
:::

Closes the window.

This method should only succeed if the [WindowBase](../windowbase-class)
object is **script-closeable** and the window calling [close](close) is
allowed to navigate the window.

A window is script-closeable if it is either a window that was opened by
another window, or if it is a window with only one document in its
history.

A window might not be allowed to navigate, and therefore close, another
window due to browser security features.

``` {.language-dart data-language="dart"}
var other = window.open('http://www.example.com', 'foo');
// Closes other window, as it is script-closeable.
other.close();
print(other.closed); // 'true'

var newLocation = window.location
    ..href = 'http://www.mysite.com';
window.location = newLocation;
// Does not close this window, as the history has changed.
window.close();
print(window.closed); // 'false'
```

See also:

-   [Window close
    discussion](http://www.w3.org/TR/html5/browsers.html#dom-window-close)
    from the W3C

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/windowbase/close.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Closes the window.

This method should only succeed if the [WindowBase](../windowbase-class)
object is **script-closeable** and the window calling [close](close) is
allowed to navigate the window.

A window is script-closeable if it is either a window that was opened by
another window, or if it is a window with only one document in its
history.

A window might not be allowed to navigate, and therefore close, another
window due to browser security features.

``` {.language-dart data-language="dart"}
var other = window.open('http://www.example.com', 'foo');
// Closes other window, as it is script-closeable.
other.close();
print(other.closed); // 'true'

var newLocation = window.location
    ..href = 'http://www.mysite.com';
window.location = newLocation;
// Does not close this window, as the history has changed.
window.close();
print(window.closed); // 'false'
```

See also:

-   [Window close
    discussion](http://www.w3.org/TR/html5/browsers.html#dom-window-close)
    from the W3C

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WindowBase/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/streamsink/close.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../future-class) close()

::: {.features}
override
:::
:::

Tells the stream sink that no further streams will be added.

This allows the stream sink to complete any remaining work and release
resources that are no longer needed

Returns a future which is completed when the stream sink has shut down.
If cleaning up can fail, the error may be reported in the returned
future, otherwise it completes with `null`.

Returns the same future as [done](done).

The stream sink may close before the [close](close) method is called,
either due to an error or because it is itself providing events to
someone who has stopped listening. In that case, the [done](done) future
is completed first, and the `close` method will return the `done` future
when called.

Unifies [StreamConsumer.close](../streamconsumer/close) and
[EventSink.close](../eventsink/close) which both mark their object as
not expecting any further events.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamSink/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/streamcontroller/close.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../future-class) close()

::: {.features}
override
:::
:::

Closes the stream.

No further events can be added to a closed stream.

The returned future is the same future provided by [done](done). It is
completed when the stream listeners is done sending events, This happens
either when the done event has been sent, or when the subscriber on a
single-subscription stream is canceled.

A broadcast stream controller will send the done event even if listeners
are paused, so some broadcast events may not have been received yet when
the returned future completes.

If no one listens to a non-broadcast stream, or the listener pauses and
never resumes, the done event will not be sent and this future will
never complete.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamController/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpserver/close.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) close(

1.  {[bool](../../dart-core/bool-class) force = false}

)
:::

Permanently stops this [HttpServer](../httpserver-class) from listening
for new connections. This closes the
[Stream](../../dart-async/stream-class) of
[HttpRequest](../httprequest-class)s with a done event. The returned
future completes when the server is stopped. For a server started using
[bind](bind) or [bindSecure](bindsecure) this means that the port
listened on no longer in use.

If `force` is `true`, active connections will be closed immediately.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future close({bool force = false});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpServer/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpclient/close.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close(

1.  {[bool](../../dart-core/bool-class) force = false}

)
:::

Shuts down the HTTP client.

If `force` is `false` (the default) the
[HttpClient](../httpclient-class) will be kept alive until all active
connections are done. If `force` is `true` any active connections will
be closed to immediately release all resources. These closed connections
will receive an error event to indicate that the client was shut down.
In both cases trying to establish a new connection after calling
[close](close) will throw an exception.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close({bool force = false});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpClient/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/websocket/close.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) close(

1.  \[[int](../../dart-core/int-class)? code,
2.  [String](../../dart-core/string-class)? reason\]

)

::: {.features}
override
:::
:::

Closes the WebSocket connection. Set the optional `code` and `reason`
arguments to send close information to the remote peer. If they are
omitted, the peer will see
[WebSocketStatus.noStatusReceived](../websocketstatus/nostatusreceived-constant)
code with no reason.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future close([int? code, String? reason]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/WebSocket/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/rawsocket/close.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[RawSocket](../rawsocket-class)\>
close()
:::

Closes the socket.

Returns a future that completes with this socket when the underlying
connection is completely destroyed.

Calling [close](close) will never throw an exception and calling it
several times is supported. Calling [close](close) can result in a
[RawSocketEvent.readClosed](../rawsocketevent/readclosed-constant)
event.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<RawSocket> close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawSocket/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-isolate/receiveport/close.md)
[dart:isolate](../../dart-isolate/dart-isolate-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Closes the receive port.

No further events will be received by the receive port, or emitted as
stream events.

If [listen](listen) has been called and the
[StreamSubscription](../../dart-async/streamsubscription-class) has not
been canceled yet, the subscription will be closed with a \"done\"
event.

If the stream has already been canceled this method has no effect.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-isolate/ReceivePort/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/streamconsumer/close.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../future-class) close()
:::

Tells the consumer that no further streams will be added.

This allows the consumer to complete any remaining work and release
resources that are no longer needed

Returns a future which is completed when the consumer has shut down. If
cleaning up can fail, the error may be reported in the returned future,
otherwise it completes with `null`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamConsumer/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/rawsecureserversocket/close.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[RawSecureServerSocket](../rawsecureserversocket-class)\>
close()
:::

Closes this socket.

The returned future completes when the socket is fully closed and is no
longer bound.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<RawSecureServerSocket> close() {
  _closed = true;
  return _socket.close().then((_) => this);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawSecureServerSocket/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/stdout/close.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) close()

::: {.features}
inherited
:::
:::

Close the target consumer.

NOTE: Writes to the [IOSink](../iosink-class) may be buffered, and may
not be flushed by a call to `close()`. To flush all buffered writes,
call `flush()` before calling `close()`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future close() => _sink.close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Stdout/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/synchronousstreamcontroller/close.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../future-class) close()

::: {.features}
override
:::
:::

Closes the controller\'s stream.

As [StreamController.close](../streamcontroller/close), but must not be
called while an event is being added by [add](add), [addError](adderror)
or [close](close).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/SynchronousStreamController/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/iosink/close.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) close()

::: {.features}
override
:::
:::

Close the target consumer.

NOTE: Writes to the [IOSink](../iosink-class) may be buffered, and may
not be flushed by a call to `close()`. To flush all buffered writes,
call `flush()` before calling `close()`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/IOSink/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/socket/close.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) close()

::: {.features}
override
:::
:::

Close the target consumer.

NOTE: Writes to the [IOSink](../iosink-class) may be buffered, and may
not be flushed by a call to `close()`. To flush all buffered writes,
call `flush()` before calling `close()`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Socket/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/secureserversocket/close.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[SecureServerSocket](../secureserversocket-class)\>
close()
:::

Closes this socket.

The returned future completes when the socket is fully closed and is no
longer bound.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<SecureServerSocket> close() => _socket.close().then((_) => this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/SecureServerSocket/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/stringconversionsinkmixin/close.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()

::: {.features}
override
:::
:::

Closes the sink.

This signals the end of the chunked conversion. This method is called
when converters are used as
[StreamTransformer](../../dart-async/streamtransformer-class)\'s.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/StringConversionSinkMixin/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/byteconversionsinkbase/close.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()

::: {.features}
override
:::
:::

Closes the sink.

This signals the end of the chunked conversion. This method is called
when converters are used as
[StreamTransformer](../../dart-async/streamtransformer-class)\'s.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/ByteConversionSinkBase/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/chunkedconversionsink/close.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()

::: {.features}
override
:::
:::

Closes the sink.

This signals the end of the chunked conversion. This method is called
when converters are used as
[StreamTransformer](../../dart-async/streamtransformer-class)\'s.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/ChunkedConversionSink/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/rawserversocket/close.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[RawServerSocket](../rawserversocket-class)\>
close()
:::

Closes the socket.

The returned future completes when the socket is fully closed and is no
longer bound.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<RawServerSocket> close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawServerSocket/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpclientrequest/close.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[HttpClientResponse](../httpclientresponse-class)\>
close()

::: {.features}
override
:::
:::

Close the request for input. Returns the value of [done](done).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<HttpClientResponse> close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpClientRequest/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/eventsink/close.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()

::: {.features}
override
:::
:::

Closes the sink.

Calling this method more than once is allowed, but does nothing.

Neither [add](add) nor [addError](adderror) must be called after this
method.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/EventSink/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/serversocket/close.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[ServerSocket](../serversocket-class)\>
close()
:::

Closes the socket.

The returned future completes when the socket is fully closed and is no
longer bound.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<ServerSocket> close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ServerSocket/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/randomaccessfile/close.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<void\> close()
:::

Closes the file.

Returns a [Future](../../dart-async/future-class) that completes when it
has been closed.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<void> close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RandomAccessFile/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-isolate/rawreceiveport/close.md)
[dart:isolate](../../dart-isolate/dart-isolate-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Closes the port.

After a call to this method, any incoming message is silently dropped.
The [handler](handler) will never be called again.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-isolate/RawReceivePort/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/sink/close.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Closes the sink.

The [add](add) method must not be called after this method.

Calling this method more than once is allowed, but does nothing.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Sink/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/websocket/close.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close(

1.  \[[int](../../dart-core/int-class)? code,
2.  [String](../../dart-core/string-class)? reason\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close([int? code, String? reason]) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WebSocket/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audiocontext/close.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) close()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future close() => promiseToFuture(JS("", "#.close()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioContext/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/dialogelement/close.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close(

1.  \[[String](../../dart-core/string-class)? returnValue\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close([String? returnValue]) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DialogElement/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediakeysession/close.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) close()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future close() => promiseToFuture(JS("", "#.close()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaKeySession/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midiport/close.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

close method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) close()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future close() => promiseToFuture(JS("", "#.close()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiPort/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/closablestringsink/close.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Closes `this` and flushes any outstanding data.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/ClosableStringSink/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-indexed_db/database/close.md)
[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/Database/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/rawdatagramsocket/close.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Closes the datagram socket.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawDatagramSocket/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/dedicatedworkerglobalscope/close.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DedicatedWorkerGlobalScope/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/sharedworkerglobalscope/close.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SharedWorkerGlobalScope/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/presentationconnection/close.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PresentationConnection/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcpeerconnection/close.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcPeerConnection/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/broadcastchannel/close.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/BroadcastChannel/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcdatachannel/close.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcDataChannel/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/notification/close.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Notification/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/eventsource/close.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/EventSource/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/imagebitmap/close.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImageBitmap/close.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/messageport/close.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

close method
============

::: {.section .multi-line-signature}
void close()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void close() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MessagePort/close.html>
:::
