[dart:core](../../dart-core/dart-core-library){._links-link}

Duration constructor
====================

::: {.section .multi-line-signature}
const Duration(

1.  {[int](../int-class) days = 0,
2.  [int](../int-class) hours = 0,
3.  [int](../int-class) minutes = 0,
4.  [int](../int-class) seconds = 0,
5.  [int](../int-class) milliseconds = 0,
6.  [int](../int-class) microseconds = 0}

)
:::

Creates a new [Duration](../duration-class) object whose value is the
sum of all individual parts.

Individual parts can be larger than the number of those parts in the
next larger unit. For example, `hours` can be greater than 23. If this
happens, the value overflows into the next larger unit, so 26 `hours` is
the same as 2 `hours` and one more `days`. Likewise, values can be
negative, in which case they underflow and subtract from the next larger
unit.

If the total number of microseconds cannot be represented as an integer
value, the number of microseconds might be truncated and it might lose
precision.

All arguments are 0 by default.

``` {.language-dart data-language="dart"}
const duration = Duration(days: 1, hours: 8, minutes: 56, seconds: 59,
  milliseconds: 30, microseconds: 10);
print(duration); // 32:56:59.030010
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
const Duration(
    {int days = 0,
    int hours = 0,
    int minutes = 0,
    int seconds = 0,
    int milliseconds = 0,
    int microseconds = 0})
    : this._microseconds(microseconds +
          microsecondsPerMillisecond * milliseconds +
          microsecondsPerSecond * seconds +
          microsecondsPerMinute * minutes +
          microsecondsPerHour * hours +
          microsecondsPerDay * days);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Duration/Duration.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/animationeffecttiming/duration.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

duration property
=================

::: {#getter .section .multi-line-signature}
[Object](../../dart-core/object-class)? duration

::: {.features}
\@Returns(\'num\|String\|Null\'), override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@Returns('num|String|Null')
Object? get duration native;
```

::: {#setter .section .multi-line-signature}
void duration=([Object](../../dart-core/object-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set duration(Object? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AnimationEffectTiming/duration.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediasource/duration.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

duration property
=================

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? duration
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get duration native;
```

::: {#setter .section .multi-line-signature}
void duration=([num](../../dart-core/num-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set duration(num? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaSource/duration.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/timeoutexception/duration.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

duration property
=================

::: {.section .multi-line-signature}
[Duration](../../dart-core/duration-class)? duration

::: {.features}
final
:::
:::

The duration that was exceeded.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final Duration? duration;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/TimeoutException/duration.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/animationeffecttimingreadonly/duration.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

duration property
=================

::: {#getter .section .multi-line-signature}
[Object](../../dart-core/object-class)? duration
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Object? get duration native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AnimationEffectTimingReadOnly/duration.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_audio/audiobuffer/duration.md)
[dart:web\_audio](../../dart-web_audio/dart-web_audio-library){._links-link}

duration property
=================

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? duration
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get duration native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_audio/AudioBuffer/duration.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/performanceservertiming/duration.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

duration property
=================

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? duration
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get duration native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PerformanceServerTiming/duration.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/performanceentry/duration.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

duration property
=================

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class) duration
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num get duration native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PerformanceEntry/duration.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcdtmfsender/duration.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

duration property
=================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? duration
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get duration native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcDtmfSender/duration.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediaelement/duration.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

duration property
=================

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class) duration
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num get duration native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaElement/duration.html>
:::
