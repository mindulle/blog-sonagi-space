[dart:async](../../dart-async/dart-async-library){._links-link}

cancel method
=============

::: {.section .multi-line-signature}
[Future](../future-class) cancel()
:::

Cancels the stream iterator (and the underlying stream subscription)
early.

The stream iterator is automatically canceled if the
[moveNext](movenext) future completes with either `false` or an error.

If you need to stop listening for values before the stream iterator is
automatically closed, you must call [cancel](cancel) to ensure that the
stream is properly closed.

If [moveNext](movenext) has been called when the iterator is canceled,
its returned future will complete with `false` as value, as will all
further calls to [moveNext](movenext).

Returns a future which completes when the cancellation is complete. This
can be an already completed future if the cancellation happens
synchronously.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future cancel();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamIterator/cancel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/streamsubscription/cancel.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

cancel method
=============

::: {.section .multi-line-signature}
[Future](../future-class)\<void\> cancel()
:::

Cancels this subscription.

After this call, the subscription no longer receives events.

The stream may need to shut down the source of events and clean up after
the subscription is canceled.

Returns a future that is completed once the stream has finished its
cleanup.

Typically, cleanup happens when the stream needs to release resources.
For example, a stream might need to close an open file (as an
asynchronous operation). If the listener wants to delete the file after
having canceled the subscription, it must wait for the cleanup future to
complete.

If the cleanup throws, which it really shouldn\'t, the returned future
completes with that error.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<void> cancel();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamSubscription/cancel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/timer/cancel.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

cancel method
=============

::: {.section .multi-line-signature}
void cancel()
:::

Cancels the timer.

Once a [Timer](../timer-class) has been canceled, the callback function
will not be called by the timer. Calling [cancel](cancel) more than once
on a [Timer](../timer-class) is allowed, and will have no further
effect.

Example:

``` {.language-dart data-language="dart"}
final timer =
    Timer(const Duration(seconds: 5), () => print('Timer finished'));
// Cancel timer, callback never called.
timer.cancel();
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void cancel();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Timer/cancel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/underlyingsourcebase/cancel.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

cancel method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) cancel(

1.  [Object](../../dart-core/object-class)? reason

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future cancel(Object? reason) =>
    promiseToFuture(JS("", "#.cancel(#)", this, reason));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/UnderlyingSourceBase/cancel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/connectiontask/cancel.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

cancel method
=============

::: {.section .multi-line-signature}
void cancel()
:::

Cancels the connection attempt.

This also causes the [socket](socket) `Future` to complete with a
[SocketException](../socketexception-class) error.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void cancel() {
  _onCancel();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ConnectionTask/cancel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/workletanimation/cancel.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

cancel method
=============

::: {.section .multi-line-signature}
void cancel()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void cancel() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WorkletAnimation/cancel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechsynthesis/cancel.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

cancel method
=============

::: {.section .multi-line-signature}
void cancel()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void cancel() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechSynthesis/cancel.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/animation/cancel.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

cancel method
=============

::: {.section .multi-line-signature}
void cancel()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void cancel() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Animation/cancel.html>
:::
