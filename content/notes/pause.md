[dart:isolate](../../dart-isolate/dart-isolate-library){._links-link}

pause method
============

::: {.section .multi-line-signature}
[Capability](../capability-class) pause(

1.  \[[Capability](../capability-class)? resumeCapability\]

)
:::

Requests the isolate to pause.

When the isolate receives the pause command, it stops processing events
from the event loop queue. It may still add new events to the queue in
response to, e.g., timers or receive-port messages. When the isolate is
resumed, it starts handling the already enqueued events.

The pause request is sent through the isolate\'s command port, which
bypasses the receiving isolate\'s event loop. The pause takes effect
when it is received, pausing the event loop as it is at that time.

The `resumeCapability` is used to identity the pause, and must be used
again to end the pause using [resume](resume). If `resumeCapability` is
omitted, a new capability object is created and used instead.

If an isolate is paused more than once using the same capability, only
one resume with that capability is needed to end the pause.

If an isolate is paused using more than one capability, each pause must
be individually ended before the isolate resumes.

Returns the capability that must be used to end the pause. This is
either `resumeCapability`, or a new capability when `resumeCapability`
is omitted.

If [pauseCapability](pausecapability) is `null`, or it\'s not the pause
capability of the isolate identified by [controlPort](controlport), the
pause request is ignored by the receiving isolate.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Capability pause([Capability? resumeCapability]) {
  resumeCapability ??= Capability();
  _pause(resumeCapability);
  return resumeCapability;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-isolate/Isolate/pause.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/streamsubscription/pause.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

pause method
============

::: {.section .multi-line-signature}
void pause(

1.  \[[Future](../future-class)\<void\>? resumeSignal\]

)
:::

Requests that the stream pauses events until further notice.

While paused, the subscription will not fire any events. If it receives
events from its source, they will be buffered until the subscription is
resumed. For non-broadcast streams, the underlying source is usually
informed about the pause, so it can stop generating events until the
subscription is resumed.

To avoid buffering events on a broadcast stream, it is better to cancel
this subscription, and start to listen again when events are needed, if
the intermediate events are not important.

If `resumeSignal` is provided, the stream subscription will undo the
pause when the future completes, as if by a call to [resume](resume). If
the future completes with an error, the stream will still resume, but
the error will be considered unhandled and is passed to
[Zone.handleUncaughtError](../zone/handleuncaughterror).

A call to [resume](resume) will also undo a pause.

If the subscription is paused more than once, an equal number of resumes
must be performed to resume the stream. Calls to [resume](resume) and
the completion of a `resumeSignal` are interchangeable - the
[pause](pause) which was passed a `resumeSignal` may be ended by a call
to [resume](resume), and completing the `resumeSignal` may end a
different [pause](pause).

It is safe to [resume](resume) or complete a `resumeSignal` even when
the subscription is not paused, and the resume will have no effect.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void pause([Future<void>? resumeSignal]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamSubscription/pause.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechsynthesis/pause.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

pause method
============

::: {.section .multi-line-signature}
void pause()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void pause() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechSynthesis/pause.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediarecorder/pause.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

pause method
============

::: {.section .multi-line-signature}
void pause()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void pause() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaRecorder/pause.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediaelement/pause.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

pause method
============

::: {.section .multi-line-signature}
void pause()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void pause() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaElement/pause.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/animation/pause.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

pause method
============

::: {.section .multi-line-signature}
void pause()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void pause() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Animation/pause.html>
:::
