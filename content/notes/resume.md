[dart:isolate](../../dart-isolate/dart-isolate-library){._links-link}

resume method
=============

::: {.section .multi-line-signature}
void resume(

1.  [Capability](../capability-class) resumeCapability

)
:::

Resumes a paused isolate.

Sends a message to an isolate requesting that it ends a pause that was
previously requested.

When all active pause requests have been cancelled, the isolate will
continue processing events and handling normal messages.

If the `resumeCapability` is not one that has previously been used to
pause the isolate, or it has already been used to resume from that
pause, the resume call has no effect.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void resume(Capability resumeCapability);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-isolate/Isolate/resume.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/streamsubscription/resume.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

resume method
=============

::: {.section .multi-line-signature}
void resume()
:::

Resumes after a pause.

This undoes one previous call to [pause](pause). When all previously
calls to [pause](pause) have been matched by a calls to
[resume](resume), possibly through a `resumeSignal` passed to
[pause](pause), the stream subscription may emit events again.

It is safe to [resume](resume) even when the subscription is not paused,
and the resume will have no effect.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void resume();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamSubscription/resume.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/baseaudiocontext/resume.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

resume method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) resume()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future resume() => promiseToFuture(JS("", "#.resume()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/BaseAudioContext/resume.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechsynthesis/resume.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

resume method
=============

::: {.section .multi-line-signature}
void resume()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void resume() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechSynthesis/resume.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediarecorder/resume.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

resume method
=============

::: {.section .multi-line-signature}
void resume()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void resume() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaRecorder/resume.html>
:::
