[dart:isolate](../../dart-isolate/dart-isolate-library){._links-link}

send method
===========

::: {.section .multi-line-signature}
void send(

1.  [Object](../../dart-core/object-class)? message

)
:::

Sends an asynchronous `message` through this send port, to its
corresponding [ReceivePort](../receiveport-class).

The transitive object graph of `message` can contain the following
objects:

-   [Null](../../dart-core/null-class)
-   [bool](../../dart-core/bool-class)
-   [int](../../dart-core/int-class)
-   [double](../../dart-core/double-class)
-   [String](../../dart-core/string-class)
-   [List](../../dart-core/list-class) or
    [Map](../../dart-core/map-class) (whose elements are any of these)
-   [TransferableTypedData](../transferabletypeddata-class)
-   [SendPort](../sendport-class)
-   [Capability](../capability-class)

If the sender and receiver isolate share the same code (e.g. isolates
created via [Isolate.spawn](../isolate/spawn)), the transitive object
graph of `message` can contain any object, with the following
exceptions:

-   Objects with native resources (subclasses of e.g.
    `NativeFieldWrapperClass1`). A [Socket](../../dart-io/socket-class)
    object for example referrs internally to objects that have native
    resources attached and can therefore not be sent.
-   [ReceivePort](../receiveport-class)
-   [DynamicLibrary](../../dart-ffi/dynamiclibrary-class)
-   [Finalizable](../../dart-ffi/finalizable-class)
-   [Finalizer](../../dart-core/finalizer-class)
-   [NativeFinalizer](../../dart-ffi/nativefinalizer-class)
-   [Pointer](../../dart-ffi/pointer-class)
-   [UserTag](../../dart-developer/usertag-class)
-   `MirrorReference`

Apart from those exceptions any object can be sent. Objects that are
identified as immutable (e.g. strings) will be shared whereas all other
objects will be copied.

The send happens immediately and may have a linear time cost to copy the
transitive object graph. The send itself doesn\'t block (i.e. doesn\'t
wait until the receiver has received the message). The corresponding
receive port can receive the message as soon as its isolate\'s event
loop is ready to deliver it, independently of what the sending isolate
is doing.

Note: Due to an implementation choice the Dart VM made for how closures
represent captured state, closures can currently capture more state than
they need, which can cause the transitive closure to be larger than
needed. Open bug to address this: <http://dartbug.com/36983>

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void send(Object? message);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-isolate/SendPort/send.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/httprequest/send.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

send method
===========

::: {.section .multi-line-signature}
void send(

1.  \[dynamic body\_OR\_data\]

)
:::

Send the request with any given `data`.

Note: Most simple HTTP requests can be accomplished using the
[getString](getstring), [request](request),
[requestCrossOrigin](requestcrossorigin), or
[postFormData](postformdata) methods. Use of this `send` method is
intended only for more complex HTTP requests where finer-grained control
is needed.

Other resources
---------------

-   [XMLHttpRequest.send](https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#send%28%29)
    from MDN.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void send([body_OR_data]) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HttpRequest/send.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/websocket/send.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

send method
===========

::: {.section .multi-line-signature}
void send(

1.  dynamic data

)
:::

Transmit data to the server over this connection.

This method accepts data of type [Blob](../blob-class),
[ByteBuffer](../../dart-typed_data/bytebuffer-class),
[String](../../dart-core/string-class), or
[TypedData](../../dart-typed_data/typeddata-class). Named variants
[sendBlob](sendblob), [sendByteBuffer](sendbytebuffer),
[sendString](sendstring), or [sendTypedData](sendtypeddata), in
contrast, only accept data of the specified type.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void send(data) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WebSocket/send.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/rawdatagramsocket/send.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

send method
===========

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) send(

1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
    buffer,
2.  [InternetAddress](../internetaddress-class) address,
3.  [int](../../dart-core/int-class) port

)
:::

Sends a datagram.

Returns the number of bytes written. This will always be either the size
of `buffer` or `0`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int send(List<int> buffer, InternetAddress address, int port);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawDatagramSocket/send.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midioutput/send.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

send method
===========

::: {.section .multi-line-signature}
void send(

1.  [Uint8List](../../dart-typed_data/uint8list-class) data,
2.  \[[num](../../dart-core/num-class)? timestamp\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void send(Uint8List data, [num? timestamp]) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiOutput/send.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/presentationconnection/send.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

send method
===========

::: {.section .multi-line-signature}
void send(

1.  dynamic data\_OR\_message

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void send(data_OR_message) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PresentationConnection/send.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcdatachannel/send.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

send method
===========

::: {.section .multi-line-signature}
void send(

1.  dynamic data

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void send(data) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcDataChannel/send.html>
:::
