[dart:async](../dart-async/dart-async-library){._links-link}

runZoned\<R\> function
======================

::: {.section .multi-line-signature}
R runZoned\<R\>(

1.  R body( ),
2.  {[Map](../dart-core/map-class)\<[Object](../dart-core/object-class)?,
    [Object](../dart-core/object-class)?\>? zoneValues,
3.  [ZoneSpecification](zonespecification-class)? zoneSpecification,
4.  @[Deprecated](../dart-core/deprecated-class)(\"Use runZonedGuarded
    instead\") [Function](../dart-core/function-class)? onError}

)
:::

Runs `body` in its own zone.

Creates a new zone using [Zone.fork](zone/fork) based on
`zoneSpecification` and `zoneValues`, then runs `body` in that zone and
returns the result.

If `onError` is provided, it must have one of the types

-   `void Function(Object)`
-   `void Function(Object, StackTrace)` and the `onError` handler is
    used *both* to handle asynchronous errors by overriding
    [ZoneSpecification.handleUncaughtError](zonespecification/handleuncaughterror)
    in `zoneSpecification`, if any, *and* to handle errors thrown
    synchronously by the call to `body`.

If an error occurs synchronously in `body`, then throwing in the
`onError` handler makes the call to `runZone` throw that error, and
otherwise the call to `runZoned` attempt to return `null`.

If the zone specification has a `handleUncaughtError` value or the
`onError` parameter is provided, the zone becomes an error-zone.

Errors will never cross error-zone boundaries by themselves. Errors that
try to cross error-zone boundaries are considered uncaught in their
originating error zone.

``` {.language-dart data-language="dart"}
var future = Future.value(499);
runZoned(() {
  var future2 = future.then((_) { throw "error in first error-zone"; });
  runZoned(() {
    var future3 = future2.catchError((e) { print("Never reached!"); });
  }, onError: (e, s) { print("unused error handler"); });
}, onError: (e, s) { print("catches error of first error-zone."); });
```

Example:

``` {.language-dart data-language="dart"}
runZoned(() {
  Future(() { throw "asynchronous error"; });
}, onError: (e, s) => print(e));  // Will print "asynchronous error".
```

It is possible to manually pass an error from one error zone to another
by re-throwing it in the new zone. If `onError` throws, that error will
occur in the original zone where [runZoned](runzoned) was called.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
R runZoned<R>(R body(),
    {Map<Object?, Object?>? zoneValues,
    ZoneSpecification? zoneSpecification,
    @Deprecated("Use runZonedGuarded instead") Function? onError}) {
  checkNotNullable(body, "body");
  if (onError != null) {
    // TODO: Remove this when code have been migrated off using [onError].
    if (onError is! void Function(Object, StackTrace)) {
      if (onError is void Function(Object)) {
        var originalOnError = onError;
        onError = (Object error, StackTrace stack) => originalOnError(error);
      } else {
        throw ArgumentError.value(onError, "onError",
            "Must be Function(Object) or Function(Object, StackTrace)");
      }
    }
    return runZonedGuarded(body, onError,
        zoneSpecification: zoneSpecification, zoneValues: zoneValues) as R;
  }
  return _runZoned<R>(body, zoneValues, zoneSpecification);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/runZoned.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/iooverrides/runzoned.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

runZoned\<R\> method
====================

::: {.section .multi-line-signature}
R runZoned\<R\>(

1.  R body( ),
2.  {[Directory](../directory-class) createDirectory(
    1.  [String](../../dart-core/string-class)

    )?,
3.  [Directory](../directory-class) getCurrentDirectory( )?,
4.  void setCurrentDirectory(
    1.  [String](../../dart-core/string-class)

    )?,
5.  [Directory](../directory-class) getSystemTempDirectory( )?,
6.  [File](../file-class) createFile(
    1.  [String](../../dart-core/string-class)

    )?,
7.  [Future](../../dart-async/future-class)\<[FileStat](../filestat-class)\>
    stat(
    1.  [String](../../dart-core/string-class)

    )?,
8.  [FileStat](../filestat-class) statSync(
    1.  [String](../../dart-core/string-class)

    )?,
9.  [Future](../../dart-async/future-class)\<[bool](../../dart-core/bool-class)\>
    fseIdentical(
    1.  [String](../../dart-core/string-class),
    2.  [String](../../dart-core/string-class)

    )?,
10. [bool](../../dart-core/bool-class) fseIdenticalSync(
    1.  [String](../../dart-core/string-class),
    2.  [String](../../dart-core/string-class)

    )?,
11. [Future](../../dart-async/future-class)\<[FileSystemEntityType](../filesystementitytype-class)\>
    fseGetType(
    1.  [String](../../dart-core/string-class),
    2.  [bool](../../dart-core/bool-class)

    )?,
12. [FileSystemEntityType](../filesystementitytype-class)
    fseGetTypeSync(
    1.  [String](../../dart-core/string-class),
    2.  [bool](../../dart-core/bool-class)

    )?,
13. [Stream](../../dart-async/stream-class)\<[FileSystemEvent](../filesystemevent-class)\>
    fsWatch(
    1.  [String](../../dart-core/string-class),
    2.  [int](../../dart-core/int-class),
    3.  [bool](../../dart-core/bool-class)

    )?,
14. [bool](../../dart-core/bool-class) fsWatchIsSupported( )?,
15. [Link](../link-class) createLink(
    1.  [String](../../dart-core/string-class)

    )?,
16. [Future](../../dart-async/future-class)\<[Socket](../socket-class)\>
    socketConnect(
    1.  dynamic,
    2.  [int](../../dart-core/int-class),
    3.  {dynamic sourceAddress,
    4.  [int](../../dart-core/int-class) sourcePort,
    5.  [Duration](../../dart-core/duration-class)? timeout}

    )?,
17. [Future](../../dart-async/future-class)\<[ConnectionTask](../connectiontask-class)\<[Socket](../socket-class)\>\>
    socketStartConnect(
    1.  dynamic,
    2.  [int](../../dart-core/int-class),
    3.  {dynamic sourceAddress,
    4.  [int](../../dart-core/int-class) sourcePort}

    )?,
18. [Future](../../dart-async/future-class)\<[ServerSocket](../serversocket-class)\>
    serverSocketBind(
    1.  dynamic,
    2.  [int](../../dart-core/int-class),
    3.  {[int](../../dart-core/int-class) backlog,
    4.  [bool](../../dart-core/bool-class) shared,
    5.  [bool](../../dart-core/bool-class) v6Only}

    )?,
19. [Stdin](../stdin-class) stdin( )?,
20. [Stdout](../stdout-class) stdout( )?,
21. [Stdout](../stdout-class) stderr( )?}

)
:::

Runs `body` in a fresh [Zone](../../dart-async/zone-class) using the
provided overrides.

See the documentation on the corresponding methods of
[IOOverrides](../iooverrides-class) for information about what the
optional arguments do.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static R runZoned<R>(R body(),
    {
    // Directory
    Directory Function(String)? createDirectory,
    Directory Function()? getCurrentDirectory,
    void Function(String)? setCurrentDirectory,
    Directory Function()? getSystemTempDirectory,

    // File
    File Function(String)? createFile,

    // FileStat
    Future<FileStat> Function(String)? stat,
    FileStat Function(String)? statSync,

    // FileSystemEntity
    Future<bool> Function(String, String)? fseIdentical,
    bool Function(String, String)? fseIdenticalSync,
    Future<FileSystemEntityType> Function(String, bool)? fseGetType,
    FileSystemEntityType Function(String, bool)? fseGetTypeSync,

    // _FileSystemWatcher
    Stream<FileSystemEvent> Function(String, int, bool)? fsWatch,
    bool Function()? fsWatchIsSupported,

    // Link
    Link Function(String)? createLink,

    // Socket
    Future<Socket> Function(dynamic, int,
            {dynamic sourceAddress, int sourcePort, Duration? timeout})?
        socketConnect,
    Future<ConnectionTask<Socket>> Function(dynamic, int,
            {dynamic sourceAddress, int sourcePort})?
        socketStartConnect,

    // ServerSocket
    Future<ServerSocket> Function(dynamic, int,
            {int backlog, bool v6Only, bool shared})?
        serverSocketBind,

    // Standard Streams
    Stdin Function()? stdin,
    Stdout Function()? stdout,
    Stdout Function()? stderr}) {
  IOOverrides overrides = new _IOOverridesScope(
    // Directory
    createDirectory,
    getCurrentDirectory,
    setCurrentDirectory,
    getSystemTempDirectory,

    // File
    createFile,

    // FileStat
    stat,
    statSync,

    // FileSystemEntity
    fseIdentical,
    fseIdenticalSync,
    fseGetType,
    fseGetTypeSync,

    // _FileSystemWatcher
    fsWatch,
    fsWatchIsSupported,

    // Link
    createLink,

    // Socket
    socketConnect,
    socketStartConnect,

    // ServerSocket
    serverSocketBind,

    // Standard streams
    stdin,
    stdout,
    stderr,
  );
  return _asyncRunZoned<R>(body, zoneValues: {_ioOverridesToken: overrides});
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/IOOverrides/runZoned.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpoverrides/runzoned.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

runZoned\<R\> method
====================

::: {.section .multi-line-signature}
R runZoned\<R\>(

1.  R body( ),
2.  {[HttpClient](../httpclient-class) createHttpClient(
    1.  [SecurityContext](../securitycontext-class)?

    )?,
3.  [String](../../dart-core/string-class) findProxyFromEnvironment(
    1.  [Uri](../../dart-core/uri-class) uri,
    2.  [Map](../../dart-core/map-class)\<[String](../../dart-core/string-class),
        [String](../../dart-core/string-class)\>? environment

    )?}

)
:::

Runs `body` in a fresh [Zone](../../dart-async/zone-class) using the
provided overrides.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static R runZoned<R>(R Function() body,
    {HttpClient Function(SecurityContext?)? createHttpClient,
    String Function(Uri uri, Map<String, String>? environment)?
        findProxyFromEnvironment}) {
  HttpOverrides overrides =
      _HttpOverridesScope(createHttpClient, findProxyFromEnvironment);
  return _asyncRunZoned<R>(body,
      zoneValues: {_httpOverridesToken: overrides});
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpOverrides/runZoned.html>
:::
