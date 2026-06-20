[dart:html](../../dart-html/dart-html-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? port

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get port native;
```

::: {#setter .section .multi-line-signature}
void port=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set port(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AnchorElement/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/areaelement/port.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? port

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get port native;
```

::: {#setter .section .multi-line-signature}
void port=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set port(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AreaElement/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/htmlhyperlinkelementutils/port.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? port
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get port native;
```

::: {#setter .section .multi-line-signature}
void port=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set port(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HtmlHyperlinkElementUtils/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/location/port.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) port
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get port native;
```

::: {#setter .section .multi-line-signature}
void port=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set port(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Location/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/url/port.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? port
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get port native;
```

::: {#setter .section .multi-line-signature}
void port=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set port(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Url/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/socketexception/port.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

port property
=============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class)? port

::: {.features}
final
:::
:::

The port of the socket giving rise to the exception.

This is either the source or destination address of a socket, or it can
be `null` if no socket end-point was involved in the cause of the
exception.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final int? port;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/SocketException/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/uri/port.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[int](../int-class) port
:::

The port part of the authority component.

The value is the default port if there is no port number in the
authority component. That\'s 80 for http, 443 for https, and 0 for
everything else.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get port;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Uri/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpserver/port.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) port
:::

The port that the server is listening on.

This is the actual port used when a port of zero is specified in the
[bind](bind) or [bindSecure](bindsecure) call.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get port;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpServer/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/socket/port.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) port
:::

The port used by this socket.

Throws a [SocketException](../socketexception-class) if the socket is
closed. The port is 0 if the socket is a Unix domain socket.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get port;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Socket/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpheaders/port.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

port property
=============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class)? port

::: {.features}
read / write
:::
:::

The value of the port part of the [hostHeader](hostheader-constant)
header, if any.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? port;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpHeaders/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/rawsocket/port.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) port
:::

The port used by this socket.

Throws a [SocketException](../socketexception-class) if the socket is
closed.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get port;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawSocket/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/datagram/port.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

port property
=============

::: {.section .multi-line-signature}
[int](../../dart-core/int-class) port

::: {.features}
read / write
:::
:::

The port of the socket which sends the data.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int port;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Datagram/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/rawsecureserversocket/port.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) port
:::

The port used by this socket.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get port => _socket.port;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawSecureServerSocket/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/secureserversocket/port.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) port
:::

The port used by this socket.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get port => _socket.port;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/SecureServerSocket/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/rawsynchronoussocket/port.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) port
:::

The port used by this socket.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get port;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawSynchronousSocket/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/rawdatagramsocket/port.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) port
:::

The port used by this socket.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get port;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawDatagramSocket/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/rawserversocket/port.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) port
:::

The port used by this socket.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get port;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawServerSocket/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/serversocket/port.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) port
:::

The port used by this socket.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get port;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ServerSocket/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/urlutilsreadonly/port.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? port
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get port native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/UrlUtilsReadOnly/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/sharedworker/port.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[MessagePort](../messageport-class)? port
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
MessagePort? get port native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SharedWorker/port.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midiconnectionevent/port.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

port property
=============

::: {#getter .section .multi-line-signature}
[MidiPort](../midiport-class)? port
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
MidiPort? get port native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiConnectionEvent/port.html>
:::
