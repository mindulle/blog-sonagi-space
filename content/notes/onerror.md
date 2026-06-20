[dart:async](../../dart-async/dart-async-library){._links-link}

onError\<E extends Object\> method
==================================

::: {.section .multi-line-signature}
[Future](../future-class)\<T\> onError\<E extends Object\>(

1.  [FutureOr](../futureor-class)\<T\> handleError(
    1.  E error,
    2.  [StackTrace](../../dart-core/stacktrace-class) stackTrace

    ),
2.  {[bool](../../dart-core/bool-class) test(
    1.  E error

    )?}

)
:::

Handles errors on this future.

Catches errors of type `E` that this future complete with. If `test` is
supplied, only catches errors of type `E` where `test` returns `true`.
If `E` is [Object](../../dart-core/object-class), then all errors are
potentially caught, depending only on a supplied `test`.toString()

If the error is caught, the returned future completes with the result of
calling `handleError` with the error and stack trace. This result must
be a value of the same type that this future could otherwise complete
with. For example, if this future cannot complete with `null`, then
`handleError` also cannot return `null`. Example:

``` {.language-dart data-language="dart"}
Future<T> retryOperation<T>(Future<T> operation(), T onFailure()) =>
    operation().onError<RetryException>((e, s) {
      if (e.canRetry) {
        return retryOperation(operation, onFailure);
      }
      return onFailure();
    });
```

If `handleError` throws, the returned future completes with the thrown
error and stack trace, except that if it throws the *same* error object
again, then it is considered a \"rethrow\" and the original stack trace
is retained. This can be used as an alternative to skipping the error in
`test`. Example:

``` {.language-dart data-language="dart"}
// Unwraps an an exceptions cause, if it has one.
someFuture.onError<SomeException>((e, _) {
  throw e.cause ?? e;
});
// vs.
someFuture.onError<SomeException>((e, _) {
  throw e.cause!;
}, test: (e) => e.cause != null);
```

If the error is not caught, the returned future completes with the same
result, value or error, as this future.

This method is effectively a more precisely typed version of
[Future.catchError](../future/catcherror). It makes it easy to catch
specific error types, and requires a correctly typed error handler
function, rather than just [Function](../../dart-core/function-class).
Because of this, the error handlers must accept the stack trace
argument.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<T> onError<E extends Object>(
    FutureOr<T> handleError(E error, StackTrace stackTrace),
    {bool test(E error)?}) {
  // There are various ways to optimize this to avoid the double is E/as E
  // type check, but for now we are not optimizing the error path.
  return this.catchError(
      (Object error, StackTrace stackTrace) =>
          handleError(error as E, stackTrace),
      test: (Object error) => error is E && (test == null || test(error)));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/FutureExtensions/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/streamsubscription/onerror.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

onError method
==============

::: {.section .multi-line-signature}
void onError(

1.  [Function](../../dart-core/function-class)? handleError

)
:::

Replaces the error event handler of this subscription.

The `handleError` function must be able to be called with either one
positional argument, or with two positional arguments where the seconds
is always a [StackTrace](../../dart-core/stacktrace-class).

The `handleError` argument may be `null`, in which case further error
events are considered *unhandled*, and will be reported to
[Zone.handleUncaughtError](../zone/handleuncaughterror).

The provided function is called for all error events from the stream
subscription.

This method replaces the current handler set by the invocation of
[Stream.listen](../stream/listen), by calling [asFuture](asfuture), or
by a previous call to [onError](onerror).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void onError(Function? handleError);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamSubscription/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechrecognition/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[SpeechRecognitionError](../speechrecognitionerror-class)\>
onError
:::

Stream of `error` events handled by this
[SpeechRecognition](../speechrecognition-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<SpeechRecognitionError> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechRecognition/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/svgelement/onerror.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../../dart-html/elementstream-class)\<[Event](../../dart-html/event-class)\>
onError

::: {.features}
override
:::
:::

Stream of `error` events handled by this
[Element](../../dart-html/element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onError => errorEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/SvgElement/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/httprequesteventtarget/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[ProgressEvent](../progressevent-class)\>
onError
:::

Stream of `error` events handled by this
[HttpRequestEventTarget](../httprequesteventtarget-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<ProgressEvent> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HttpRequestEventTarget/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechsynthesisutterance/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError
:::

Stream of `error` events handled by this
[SpeechSynthesisUtterance](../speechsynthesisutterance-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechSynthesisUtterance/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/bodyelement/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onError

::: {.features}
override
:::
:::

Stream of `error` events handled by this
[BodyElement](../bodyelement-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onError => errorEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/BodyElement/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/serviceworker/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError

::: {.features}
override
:::
:::

Stream of `error` events handled by this
[AbstractWorker](../abstractworker-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ServiceWorker/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-indexed_db/transaction/onerror.md)
[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../../dart-html/event-class)\>
onError
:::

Stream of `error` events handled by this
[Transaction](../transaction-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/Transaction/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/sharedworker/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError

::: {.features}
override
:::
:::

Stream of `error` events handled by this
[AbstractWorker](../abstractworker-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SharedWorker/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-indexed_db/database/onerror.md)
[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../../dart-html/event-class)\>
onError
:::

Stream of `error` events handled by this [Database](../database-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/Database/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onError

::: {.features}
override
:::
:::

Stream of `error` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onError => errorEvent.forElement(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-indexed_db/request/onerror.md)
[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../../dart-html/event-class)\>
onError
:::

Stream of `error` events handled by this [Request](../request-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/Request/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError

::: {.features}
override
:::
:::

Stream of `error` events handled by this [Window](../window-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => Element.errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/filereader/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[ProgressEvent](../progressevent-class)\>
onError
:::

Stream of `error` events handled by this
[FileReader](../filereader-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<ProgressEvent> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FileReader/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/workerglobalscope/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError
:::

Stream of `error` events handled by this
[WorkerGlobalScope](../workerglobalscope-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WorkerGlobalScope/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/applicationcache/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError
:::

Stream of `error` events handled by this
[ApplicationCache](../applicationcache-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ApplicationCache/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/worker/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError

::: {.features}
override
:::
:::

Stream of `error` events handled by this [Worker](../worker-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Worker/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/abstractworker/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError
:::

Stream of `error` events handled by this
[AbstractWorker](../abstractworker-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AbstractWorker/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcdatachannel/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError
:::

Stream of `error` events handled by this
[RtcDataChannel](../rtcdatachannel-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcDataChannel/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/notification/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError
:::

Stream of `error` events handled by this
[Notification](../notification-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Notification/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/eventsource/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError
:::

Stream of `error` events handled by this
[EventSource](../eventsource-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/EventSource/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError
:::

Stream of `error` events handled by this [Document](../document-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => Element.errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/filewriter/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError
:::

Stream of `error` events handled by this
[FileWriter](../filewriter-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FileWriter/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/websocket/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError
:::

Stream of `error` events handled by this
[WebSocket](../websocket-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WebSocket/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/elementlist/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[ElementStream](../elementstream-class)\<[Event](../event-class)\>
onError
:::

Stream of `error` events handled by this [Element](../element-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ElementStream<Event> get onError;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ElementList/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/globaleventhandlers/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/GlobalEventHandlers/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediarecorder/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaRecorder/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/sourcebuffer/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SourceBuffer/onError.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/sensor/onerror.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

onError property
================

::: {#getter .section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[Event](../event-class)\>
onError
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<Event> get onError => errorEvent.forTarget(this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Sensor/onError.html>
:::
