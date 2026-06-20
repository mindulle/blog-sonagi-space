[dart:html](../../dart-html/dart-html-library){._links-link}

timeStamp method
================

::: {.section .multi-line-signature}
void timeStamp(

1.  \[[Object](../../dart-core/object-class)? arg\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void timeStamp([Object? arg]) =>
    _isConsoleDefined ? JS('void', 'window.console.timeStamp(#)', arg) : null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Console/timeStamp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtclegacystatsreport/timestamp.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

timestamp property
==================

::: {#getter .section .multi-line-signature}
[DateTime](../../dart-core/datetime-class) timestamp
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
DateTime get timestamp => convertNativeToDart_DateTime(this._get_timestamp);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcLegacyStatsReport/timestamp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/keyevent/timestamp.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

timeStamp property
==================

::: {#getter .section .multi-line-signature}
[double](../../dart-core/double-class) timeStamp

::: {.features}
inherited
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
double get timeStamp => wrapped.timeStamp as double;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/KeyEvent/timeStamp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rtcrtpcontributingsource/timestamp.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

timestamp property
==================

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? timestamp
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get timestamp native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RtcRtpContributingSource/timestamp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/notification/timestamp.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

timestamp property
==================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? timestamp
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get timestamp native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Notification/timestamp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/geoposition/timestamp.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

timestamp property
==================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? timestamp
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get timestamp native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Geoposition/timestamp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/gamepad/timestamp.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

timestamp property
==================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? timestamp
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get timestamp native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Gamepad/timestamp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/sensor/timestamp.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

timestamp property
==================

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? timestamp
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get timestamp native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Sensor/timestamp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/event/timestamp.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

timeStamp property
==================

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? timeStamp
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get timeStamp native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Event/timeStamp.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Timestamp.md)

# Timestamp

A `timestamp` in server side game development is essentially a sequence of characters, encoding the date and time at which a certain event occurred. This data is particularly significant when tracking the sequence of certain events, debugging issues, logging, and when performing any sort of data ana
lysis. The timestamp is typically generated by the server and it reflects the server's current date and time. For instance, you might find it in a server log file, indicating when each event occurred,
 or in a database row, showing when each row was created or last updated. Timestamps are often included in the HTTP headers to let the client know when the resource was last modified.

## 관련 로드맵
- [[server-side-game-developer|server-side-game-developer]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/TIMESTAMP.md)

# TIMESTAMP

A TIMESTAMP is a data type used to store a specific point in time, typically including both date and time components. It often includes fractions of a second (milliseconds or microseconds) for greater precision. It is very common for databases to have a timestamp that automatically updates when a ro
w is updated.

Visit the following resources to learn more:

- [@article@Different SQL TimeStamp functions in SQL Server](https://www.sqlshack.com/different-sql-timestamp-functions-in-sql-server/)

## 관련 로드맵
- [[sql|sql]]
