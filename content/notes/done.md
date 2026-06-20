[dart:async](../../dart-async/dart-async-library){._links-link}

done property
=============

::: {#getter .section .multi-line-signature}
[Future](../future-class) done

::: {.features}
override
:::
:::

A future which is completed when the stream controller is done sending
events.

This happens either when the done event has been sent, or if the
subscriber on a single-subscription stream is canceled.

A broadcast stream controller will send the done event even if listeners
are paused, so some broadcast events may not have been received yet when
the returned future completes.

If there is no listener on a non-broadcast stream, or the listener
pauses and never resumes, the done event will not be sent and this
future will never complete.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future get done;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamController/done.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/streamsink/done.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

done property
=============

::: {#getter .section .multi-line-signature}
[Future](../future-class) done
:::

Return a future which is completed when the
[StreamSink](../streamsink-class) is finished.

If the `StreamSink` fails with an error, perhaps in response to adding
events using [add](../eventsink/add), [addError](../eventsink/adderror)
or [close](close), the [done](done) future will complete with that
error.

Otherwise, the returned future will complete when either:

-   all events have been processed and the sink has been closed, or
-   the sink has otherwise been stopped from handling more events (for
    example by canceling a stream subscription).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future get done;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamSink/done.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpclientrequest/done.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

done property
=============

::: {#getter .section .multi-line-signature}
[Future](../../dart-async/future-class)\<[HttpClientResponse](../httpclientresponse-class)\>
done

::: {.features}
override
:::
:::

A `HttpClientResponse` future that will complete once the response is
available.

If an error occurs before the response is available, this future will
complete with an error.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<HttpClientResponse> get done;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpClientRequest/done.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/stdout/done.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

done property
=============

::: {#getter .section .multi-line-signature}
[Future](../../dart-async/future-class) done

::: {.features}
inherited
:::
:::

A future that will complete when the consumer closes, or when an error
occurs.

This future is identical to the future returned by [close](close).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future get done => _sink.done;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Stdout/done.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/iosink/done.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

done property
=============

::: {#getter .section .multi-line-signature}
[Future](../../dart-async/future-class) done

::: {.features}
override
:::
:::

A future that will complete when the consumer closes, or when an error
occurs.

This future is identical to the future returned by [close](close).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future get done;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/IOSink/done.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/socket/done.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

done property
=============

::: {#getter .section .multi-line-signature}
[Future](../../dart-async/future-class) done

::: {.features}
override
:::
:::

A future that will complete when the consumer closes, or when an error
occurs.

This future is identical to the future returned by [close](close).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future get done;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Socket/done.html>
:::
