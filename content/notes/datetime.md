[dart:core](../../dart-core/dart-core-library){._links-link}

DateTime constructor
====================

::: {.section .multi-line-signature}
DateTime(

1.  [int](../int-class) year,
2.  \[[int](../int-class) month = 1,
3.  [int](../int-class) day = 1,
4.  [int](../int-class) hour = 0,
5.  [int](../int-class) minute = 0,
6.  [int](../int-class) second = 0,
7.  [int](../int-class) millisecond = 0,
8.  [int](../int-class) microsecond = 0\]

)
:::

Constructs a [DateTime](../datetime-class) instance specified in the
local time zone.

For example, to create a `DateTime` object representing the 7th of
September 2017, 5:30pm

``` {.language-dart data-language="dart"}
final dentistAppointment = DateTime(2017, 9, 7, 17, 30);
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
DateTime(int year,
    [int month = 1,
    int day = 1,
    int hour = 0,
    int minute = 0,
    int second = 0,
    int millisecond = 0,
    int microsecond = 0])
    : this._internal(year, month, day, hour, minute, second, millisecond,
          microsecond, false);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/DateTime/DateTime.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/timeelement/datetime.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

dateTime property
=================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? dateTime
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get dateTime native;
```

::: {#setter .section .multi-line-signature}
void dateTime=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set dateTime(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TimeElement/dateTime.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/modelement/datetime.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

dateTime property
=================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) dateTime
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get dateTime native;
```

::: {#setter .section .multi-line-signature}
void dateTime=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set dateTime(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ModElement/dateTime.html>
:::
