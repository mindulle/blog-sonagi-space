[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

open method
===========

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[Database](../database-class)\>
open(

1.  [String](../../dart-core/string-class) name,
2.  {[int](../../dart-core/int-class)? version,
3.  void onUpgradeNeeded(
    1.  [VersionChangeEvent](../versionchangeevent-class) event

    )?,
4.  void onBlocked(
    1.  [Event](../../dart-html/event-class) event

    )?}

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<Database> open(String name,
    {int? version,
    void onUpgradeNeeded(VersionChangeEvent event)?,
    void onBlocked(Event event)?}) {
  if ((version == null) != (onUpgradeNeeded == null)) {
    return new Future.error(new ArgumentError(
        'version and onUpgradeNeeded must be specified together'));
  }
  try {
    OpenDBRequest request;
    if (version != null) {
      request = _open(name, version);
    } else {
      request = _open(name);
    }

    if (onUpgradeNeeded != null) {
      request.onUpgradeNeeded.listen(onUpgradeNeeded);
    }
    if (onBlocked != null) {
      request.onBlocked.listen(onBlocked);
    }
    return _completeRequest(request);
  } catch (e, stacktrace) {
    return new Future.error(e, stacktrace);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/IdbFactory/open.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpclient/open.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

open method
===========

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[HttpClientRequest](../httpclientrequest-class)\>
open(

1.  [String](../../dart-core/string-class) method,
2.  [String](../../dart-core/string-class) host,
3.  [int](../../dart-core/int-class) port,
4.  [String](../../dart-core/string-class) path

)
:::

Opens a HTTP connection.

The HTTP method to use is specified in `method`, the server is specified
using `host` and `port`, and the path (including a possible query) is
specified using `path`. The path may also contain a URI fragment, which
will be ignored.

The `Host` header for the request will be set to the value `host`:`port`
(if `host` is an IP address, it will still be used in the `Host`
header). This can be overridden through the `HttpClientRequest`
interface before the request is sent.

For additional information on the sequence of events during an HTTP
transaction, and the objects returned by the futures, see the overall
documentation for the class [HttpClient](../httpclient-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<HttpClientRequest> open(
    String method, String host, int port, String path);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpClient/open.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/httprequest/open.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

open method
===========

::: {.section .multi-line-signature}
void open(

1.  [String](../../dart-core/string-class) method,
2.  [String](../../dart-core/string-class) url,
3.  {[bool](../../dart-core/bool-class)? async,
4.  [String](../../dart-core/string-class)? user,
5.  [String](../../dart-core/string-class)? password}

)
:::

Specify the desired `url`, and `method` to use in making the request.

By default the request is done asynchronously, with no user or password
authentication information. If `async` is false, the request will be
sent synchronously.

Calling `open` again on a currently active request is equivalent to
calling [abort](abort).

Note: Most simple HTTP requests can be accomplished using the
[getString](getstring), [request](request),
[requestCrossOrigin](requestcrossorigin), or
[postFormData](postformdata) methods. Use of this `open` method is
intended only for more complex HTTP requests where finer-grained control
is needed.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void open(String method, String url,
    {bool? async, String? user, String? password}) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HttpRequest/open.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/file/open.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

open method
===========

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[RandomAccessFile](../randomaccessfile-class)\>
open(

1.  {[FileMode](../filemode-class) mode = FileMode.read}

)
:::

Opens the file for random access operations.

Returns a `Future<RandomAccessFile>` that completes with the opened
random access file. `RandomAccessFile`s must be closed using the
[RandomAccessFile.close](../randomaccessfile/close) method.

Files can be opened in three modes:

-   [FileMode.read](../filemode/read-constant): open the file for
    reading.

-   [FileMode.write](../filemode/write-constant): open the file for both
    reading and writing and truncate the file to length zero. If the
    file does not exist the file is created.

-   [FileMode.append](../filemode/append-constant): same as
    [FileMode.write](../filemode/write-constant) except that the file is
    not truncated.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<RandomAccessFile> open({FileMode mode = FileMode.read});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/File/open.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/open.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

open method
===========

::: {.section .multi-line-signature}
[WindowBase](../windowbase-class) open(

1.  [String](../../dart-core/string-class) url,
2.  [String](../../dart-core/string-class) name,
3.  \[[String](../../dart-core/string-class)? options\]

)
:::

Opens a new window.

Other resources
---------------

-   [Window.open](https://developer.mozilla.org/en-US/docs/Web/API/Window.open)
    from MDN.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
WindowBase open(String url, String name, [String? options]) {
  if (options == null) {
    return _DOMWindowCrossFrame._createSafe(_open2(url, name));
  } else {
    return _DOMWindowCrossFrame._createSafe(_open3(url, name, options));
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/open.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/detailselement/open.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

open property
=============

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class)? open
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool? get open native;
```

::: {#setter .section .multi-line-signature}
void open=([bool](../../dart-core/bool-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set open(bool? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DetailsElement/open.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/dialogelement/open.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

open property
=============

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class)? open
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool? get open native;
```

::: {#setter .section .multi-line-signature}
void open=([bool](../../dart-core/bool-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set open(bool? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DialogElement/open.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cachestorage/open.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

open method
===========

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) open(

1.  [String](../../dart-core/string-class) cacheName

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future open(String cacheName) =>
    promiseToFuture(JS("creates:_Cache;", "#.open(#)", this, cacheName));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CacheStorage/open.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/midiport/open.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

open method
===========

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) open()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future open() => promiseToFuture(JS("", "#.open()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MidiPort/open.html>
:::
