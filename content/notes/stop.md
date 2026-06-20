[dart:core](../../dart-core/dart-core-library){._links-link}

stop method
===========

::: {.section .multi-line-signature}
void stop()
:::

Stops the [Stopwatch](../stopwatch-class).

The [elapsedTicks](elapsedticks) count stops increasing after this call.
If the [Stopwatch](../stopwatch-class) is currently not running, then
calling this method has no effect.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void stop() {
  _stop ??= _now();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Stopwatch/stop.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/stop.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

stop method
===========

::: {.section .multi-line-signature}
void stop()
:::

Stops the window from loading.

Other resources
---------------

-   [The Window
    object](http://www.w3.org/html/wg/drafts/html/master/browsers.html#the-window-object)
    from W3C.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void stop() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/stop.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audioscheduledsourcenode/stop.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

stop method
===========

::: {.section .multi-line-signature}
void stop(

1.  \[[num](../../dart-core/num-class)? when\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void stop([num? when]) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioScheduledSourceNode/stop.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/speechrecognition/stop.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

stop method
===========

::: {.section .multi-line-signature}
void stop()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void stop() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SpeechRecognition/stop.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediastreamtrack/stop.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

stop method
===========

::: {.section .multi-line-signature}
void stop()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void stop() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaStreamTrack/stop.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediarecorder/stop.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

stop method
===========

::: {.section .multi-line-signature}
void stop()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void stop() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaRecorder/stop.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/sensor/stop.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

stop method
===========

::: {.section .multi-line-signature}
void stop()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void stop() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Sensor/stop.html>
:::
