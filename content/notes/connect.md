[dart:io](../../dart-io/dart-io-library){._links-link}

connect method
==============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[RawSecureSocket](../rawsecuresocket-class)\>
connect(

1.  dynamic host,
2.  [int](../../dart-core/int-class) port,
3.  {[SecurityContext](../securitycontext-class)? context,
4.  [bool](../../dart-core/bool-class) onBadCertificate(
    1.  [X509Certificate](../x509certificate-class) certificate

    )?,
5.  void keyLog(
    1.  [String](../../dart-core/string-class) line

    )?,
6.  [List](../../dart-core/list-class)\<[String](../../dart-core/string-class)\>?
    supportedProtocols,
7.  [Duration](../../dart-core/duration-class)? timeout}

)

::: {.features}
override
:::
:::

Constructs a new secure client socket and connect it to the given host
on the given port.

The returned [Future](../../dart-async/future-class) is completed with
the `RawSecureSocket` when it is connected and ready for subscription.

The certificate provided by the server is checked using the trusted
certificates set in the SecurityContext object If a certificate and key
are set on the client, using
[SecurityContext.useCertificateChain](../securitycontext/usecertificatechain)
and [SecurityContext.usePrivateKey](../securitycontext/useprivatekey),
and the server asks for a client certificate, then that client
certificate is sent to the server.

`onBadCertificate` is an optional handler for unverifiable certificates.
The handler receives the [X509Certificate](../x509certificate-class),
and can inspect it and decide (or let the user decide) whether to accept
the connection or not. The handler should return true to continue the
`RawSecureSocket` connection.

`onBadCertificate` is an optional handler for unverifiable certificates.
The handler receives the [X509Certificate](../x509certificate-class),
and can inspect it and decide (or let the user decide) whether to accept
the connection or not. The handler should return true to continue the
[SecureSocket](../securesocket-class) connection.

`keyLog` is an optional callback that will be called when new TLS keys
are exchanged with the server. `keyLog` will receive one line of text in
[NSS Key Log
Format](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSS/Key_Log_Format)
for each call. Writing these lines to a file will allow tools (such as
[Wireshark](https://gitlab.com/wireshark/wireshark/-/wikis/TLS#tls-decryption))
to decrypt content sent through this socket. This is meant to allow
network-level debugging of secure sockets and should not be used in
production code. For example:

``` {.language-dart data-language="dart"}
final log = File('keylog.txt');
final socket = await SecureSocket.connect('www.example.com', 443,
    keyLog: (line) => log.writeAsStringSync(line, mode: FileMode.append));
```

`supportedProtocols` is an optional list of protocols (in decreasing
order of preference) to use during the ALPN protocol negotiation with
the server. Example values are \"http/1.1\" or \"h2\". The selected
protocol can be obtained via
[RawSecureSocket.selectedProtocol](selectedprotocol).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Future<RawSecureSocket> connect(host, int port,
    {SecurityContext? context,
    bool onBadCertificate(X509Certificate certificate)?,
    void keyLog(String line)?,
    List<String>? supportedProtocols,
    Duration? timeout}) {
  _RawSecureSocket._verifyFields(host, port, false, false);
  return RawSocket.connect(host, port, timeout: timeout).then((socket) {
    return secure(socket,
        context: context,
        onBadCertificate: onBadCertificate,
        keyLog: keyLog,
        supportedProtocols: supportedProtocols);
  });
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawSecureSocket/connect.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/securesocket/connect.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

connect method
==============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[SecureSocket](../securesocket-class)\>
connect(

1.  dynamic host,
2.  [int](../../dart-core/int-class) port,
3.  {[SecurityContext](../securitycontext-class)? context,
4.  [bool](../../dart-core/bool-class) onBadCertificate(
    1.  [X509Certificate](../x509certificate-class) certificate

    )?,
5.  void keyLog(
    1.  [String](../../dart-core/string-class) line

    )?,
6.  [List](../../dart-core/list-class)\<[String](../../dart-core/string-class)\>?
    supportedProtocols,
7.  [Duration](../../dart-core/duration-class)? timeout}

)

::: {.features}
override
:::
:::

Constructs a new secure client socket and connects it to the given
`host` on port `port`.

The returned Future will complete with a `SecureSocket` that is
connected and ready for subscription.

The certificate provided by the server is checked using the trusted
certificates set in the SecurityContext object. The default
SecurityContext object contains a built-in set of trusted root
certificates for well-known certificate authorities.

`onBadCertificate` is an optional handler for unverifiable certificates.
The handler receives the [X509Certificate](../x509certificate-class),
and can inspect it and decide (or let the user decide) whether to accept
the connection or not. The handler should return true to continue the
`SecureSocket` connection.

`keyLog` is an optional callback that will be called when new TLS keys
are exchanged with the server. `keyLog` will receive one line of text in
[NSS Key Log
Format](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSS/Key_Log_Format)
for each call. Writing these lines to a file will allow tools (such as
[Wireshark](https://gitlab.com/wireshark/wireshark/-/wikis/TLS#tls-decryption))
to decrypt content sent through this socket. This is meant to allow
network-level debugging of secure sockets and should not be used in
production code. For example:

``` {.language-dart data-language="dart"}
final log = File('keylog.txt');
final socket = await SecureSocket.connect('www.example.com', 443,
    keyLog: (line) => log.writeAsStringSync(line, mode: FileMode.append));
```

`supportedProtocols` is an optional list of protocols (in decreasing
order of preference) to use during the ALPN protocol negotiation with
the server. Example values are \"http/1.1\" or \"h2\". The selected
protocol can be obtained via
[SecureSocket.selectedProtocol](selectedprotocol).

The argument `timeout` is used to specify the maximum allowed time to
wait for a connection to be established. If `timeout` is longer than the
system level timeout duration, a timeout may occur sooner than specified
in `timeout`. On timeout, a [SocketException](../socketexception-class)
is thrown and all ongoing connection attempts to `host` are cancelled.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Future<SecureSocket> connect(host, int port,
    {SecurityContext? context,
    bool onBadCertificate(X509Certificate certificate)?,
    void keyLog(String line)?,
    List<String>? supportedProtocols,
    Duration? timeout}) {
  return RawSecureSocket.connect(host, port,
          context: context,
          onBadCertificate: onBadCertificate,
          keyLog: keyLog,
          supportedProtocols: supportedProtocols,
          timeout: timeout)
      .then((rawSocket) => new SecureSocket._(rawSocket));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/SecureSocket/connect.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/socket/connect.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

connect method
==============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[Socket](../socket-class)\>
connect(

1.  dynamic host,
2.  [int](../../dart-core/int-class) port,
3.  {dynamic sourceAddress,
4.  [int](../../dart-core/int-class) sourcePort = 0,
5.  [Duration](../../dart-core/duration-class)? timeout}

)
:::

Creates a new socket connection to the host and port and returns a
[Future](../../dart-async/future-class) that will complete with either a
`Socket` once connected or an error if the host-lookup or connection
failed.

`host` can either be a [String](../../dart-core/string-class) or an
[InternetAddress](../internetaddress-class). If `host` is a
[String](../../dart-core/string-class), [connect](connect) will perform
a [InternetAddress.lookup](../internetaddress/lookup) and try all
returned [InternetAddress](../internetaddress-class)es, until connected.
Unless a connection was established, the error from the first failing
connection is returned.

The argument `sourceAddress` can be used to specify the local address to
bind when making the connection. The `sourceAddress` can either be a
[String](../../dart-core/string-class) or an
[InternetAddress](../internetaddress-class). If a
[String](../../dart-core/string-class) is passed it must hold a numeric
IP address.

The `sourcePort` defines the local port to bind to. If `sourcePort` is
not specified or zero, a port will be chosen.

The argument `timeout` is used to specify the maximum allowed time to
wait for a connection to be established. If `timeout` is longer than the
system level timeout duration, a timeout may occur sooner than specified
in `timeout`. On timeout, a [SocketException](../socketexception-class)
is thrown and all ongoing connection attempts to `host` are cancelled.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Future<Socket> connect(host, int port,
    {sourceAddress, int sourcePort = 0, Duration? timeout}) {
  final IOOverrides? overrides = IOOverrides.current;
  if (overrides == null) {
    return Socket._connect(host, port,
        sourceAddress: sourceAddress,
        sourcePort: sourcePort,
        timeout: timeout);
  }
  return overrides.socketConnect(host, port,
      sourceAddress: sourceAddress, sourcePort: sourcePort, timeout: timeout);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Socket/connect.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/rawsocket/connect.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

connect method
==============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[RawSocket](../rawsocket-class)\>
connect(

1.  dynamic host,
2.  [int](../../dart-core/int-class) port,
3.  {dynamic sourceAddress,
4.  [int](../../dart-core/int-class) sourcePort = 0,
5.  [Duration](../../dart-core/duration-class)? timeout}

)
:::

Creates a new socket connection to the host and port.

Returns a [Future](../../dart-async/future-class) that will complete
with either a `RawSocket` once connected, or an error if the host-lookup
or connection failed.

The `host` can either be a [String](../../dart-core/string-class) or an
[InternetAddress](../internetaddress-class). If `host` is a
[String](../../dart-core/string-class), [connect](connect) will perform
a [InternetAddress.lookup](../internetaddress/lookup) and try all
returned [InternetAddress](../internetaddress-class)es, until connected.
Unless a connection was established, the error from the first failing
connection is returned.

The argument `sourceAddress` can be used to specify the local address to
bind when making the connection. The `sourceAddress` can either be a
[String](../../dart-core/string-class) or an
[InternetAddress](../internetaddress-class). If a
[String](../../dart-core/string-class) is passed it must hold a numeric
IP address.

The `sourcePort` defines the local port to bind to. If `sourcePort` is
not specified or zero, a port will be chosen.

The argument `timeout` is used to specify the maximum allowed time to
wait for a connection to be established. If `timeout` is longer than the
system level timeout duration, a timeout may occur sooner than specified
in `timeout`. On timeout, a [SocketException](../socketexception-class)
is thrown and all ongoing connection attempts to `host` are cancelled.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external static Future<RawSocket> connect(host, int port,
    {sourceAddress, int sourcePort = 0, Duration? timeout});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RawSocket/connect.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/websocket/connect.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

connect method
==============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[WebSocket](../websocket-class)\>
connect(

1.  [String](../../dart-core/string-class) url,
2.  {[Iterable](../../dart-core/iterable-class)\<[String](../../dart-core/string-class)\>?
    protocols,
3.  [Map](../../dart-core/map-class)\<[String](../../dart-core/string-class),
    dynamic\>? headers,
4.  [CompressionOptions](../compressionoptions-class) compression =
    CompressionOptions.compressionDefault,
5.  [HttpClient](../httpclient-class)? customClient}

)
:::

Create a new WebSocket connection. The URL supplied in `url` must use
the scheme `ws` or `wss`.

The `protocols` argument is specifying the subprotocols the client is
willing to speak.

The `headers` argument is specifying additional HTTP headers for setting
up the connection. This would typically be the `Origin` header and
potentially cookies. The keys of the map are the header fields and the
values are either String or List.

If `headers` is provided, there are a number of headers which are
controlled by the WebSocket connection process. These headers are:

-   `connection`
-   `sec-websocket-key`
-   `sec-websocket-protocol`
-   `sec-websocket-version`
-   `upgrade`

If any of these are passed in the `headers` map they will be ignored.

If the `url` contains user information this will be passed as basic
authentication when setting up the connection.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Future<WebSocket> connect(String url,
        {Iterable<String>? protocols,
        Map<String, dynamic>? headers,
        CompressionOptions compression =
            CompressionOptions.compressionDefault,
        HttpClient? customClient}) =>
    _WebSocketImpl.connect(url, protocols, headers,
        compression: compression, customClient: customClient);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/WebSocket/connect.html>
:::
