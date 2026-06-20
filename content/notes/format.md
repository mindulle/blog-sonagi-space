[dart:io](../../dart-io/dart-io-library){._links-link}

format method
=============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class) format(

1.  [DateTime](../../dart-core/datetime-class) date

)
:::

Format a date according to
[RFC-1123](http://tools.ietf.org/html/rfc1123 "RFC-1123"), e.g.
`Thu, 1 Jan 1970 00:00:00 GMT`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static String format(DateTime date) {
  const List wkday = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const List month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  DateTime d = date.toUtc();
  StringBuffer sb = StringBuffer()
    ..write(wkday[d.weekday - 1])
    ..write(", ")
    ..write(d.day <= 9 ? "0" : "")
    ..write(d.day.toString())
    ..write(" ")
    ..write(month[d.month - 1])
    ..write(" ")
    ..write(d.year.toString())
    ..write(d.hour <= 9 ? " 0" : " ")
    ..write(d.hour.toString())
    ..write(d.minute <= 9 ? ":0" : ":")
    ..write(d.minute.toString())
    ..write(d.second <= 9 ? ":0" : ":")
    ..write(d.second.toString())
    ..write(" GMT");
  return sb.toString();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpDate/format.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/intl/numberformat/format.md)
Intl.NumberFormat.prototype.format()
====================================

 
The `format()` method of [`Intl.NumberFormat`](../numberformat)
instances formats a number according to the [locale and formatting
options](numberformat#parameters) of this `Intl.NumberFormat` object.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
format(number)
```




 
### Parameters

 

[`number`](#number)

:   A [`Number`](../../number), [`BigInt`](../../bigint), or string, to
    format. Strings are parsed in the same way as in [number
    conversion](../../number#number_coercion), except that `format()`
    will use the exact value that the string represents, avoiding loss
    of precision during implicitly conversion to a number.

 
**Note:** Older versions of the specification parsed strings as a
[`Number`](../../number). Check the compatibility table for your
browser.




 
### Return value 

 
A string representing the given `number` formatted according to the
locale and formatting options of this
[`Intl.NumberFormat`](../numberformat) object.



 
Description
-----------

 
[`Number`](../../number) values in JavaScript suffer from loss of
precision if they are too big or too small, making the text
representation inaccurate. If you are performing calculations with
integers larger than
[`Number.MAX_SAFE_INTEGER`](../../number/max_safe_integer) you should
use a [`BigInt`](../../bigint) instead, which will format correctly:

 
 
[js]


```js
new Intl.NumberFormat("en-US").format(1234567891234567891); // 1,234,567,891,234,568,000
new Intl.NumberFormat("en-US").format(1234567891234567891n); // 1,234,567,891,234,567,891
```


You can also pass through very large strings to be formatted as an
arbitrary-precision decimal string (if you\'re performing calculations
on the data you will still need to work with `BigInt`):

 
 
[js]


```js
new Intl.NumberFormat("en-US").format("1234567891234567891"); // 1,234,567,891,234,567,891
```




 
Examples
--------


 
### Using format 

 
Use the `format` getter function for formatting a single currency value.
The code below shows how to format the roubles currency for a Russian
locale:

 
 
[js]


```js
const options = { style: "currency", currency: "RUB" };
const numberFormat = new Intl.NumberFormat("ru-RU", options);
console.log(numberFormat.format(654321.987));
// "654 321,99 ₽"
```




 
### Using format with map 

 
Use the `format` getter function for formatting all numbers in an array.
Note that the function is bound to the
[`Intl.NumberFormat`](../numberformat) from which it was obtained, so it
can be passed directly to [`Array.prototype.map`](../../array/map). This
is considered a historical artefact, as part of a convention which is no
longer followed for new features, but is preserved to maintain
compatibility with existing programs.

 
 
[js]


```js
const a = [123456.789, 987654.321, 456789.123];
const numberFormat = new Intl.NumberFormat("es-ES");
const formatted = a.map((n) => numberFormat.format(n));
console.log(formatted.join("; "));
// "123.456,789; 987.654,321; 456.789,123"
```




 
### Using format with a string 

 
Using a string we can specify very numbers that are larger than
[`Number.MAX_SAFE_INTEGER`](../../number/max_safe_integer) without
losing precision.

 
 
[js]


```js
const numberFormat = new Intl.NumberFormat("en-US");

// Here the value is converted to a Number
console.log(numberFormat.format(987654321987654321));
// 987,654,321,987,654,300

// Here we use a string and don't lose precision
console.log(numberFormat.format("987654321987654321"));
// 987,654,321,987,654,321
```


We can also use the general \"E\" exponent syntax for decimal strings:
`#.#E#`. The code below creates a [`BigInt`](../../bigint), coerces it
to a string with the suffix `E-6`, and then formats it.

 
 
[js]


```js
const numberFormat = new Intl.NumberFormat("en-US");
const bigNum = 1000000000000000110000n;
console.log(numberFormat.format(bigNum));
// "1,000,000,000,000,000,110,000"

// Format as a string using the `E` syntax:
console.log(numberFormat.format(`${bigNum}E-6`));
// "1,000,000,000,000,000.11"
```




Specifications
--------------

 
  -------------------------------------------------------------------------------------------------------------------
  Specification
  -------------------------------------------------------------------------------------------------------------------
  [ECMAScript Internationalization API Specification\
  [\#
  sec-intl.numberformat.prototype.format]](https://tc39.es/ecma402/#sec-intl.numberformat.prototype.format)

  -------------------------------------------------------------------------------------------------------------------


Browser compatibility 
---------------------

 


Desktop

Mobile

Server

Chrome

Edge

Firefox

Opera

Safari

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

WebView Android

Deno

Node.js

`format`

24

12Before Edge 18, numbers are rounded to 15 decimal digits. For example,
`new Intl.NumberFormat('en-US').format(1000000000000005)` returns
`"1,000,000,000,000,010"`.

29

15

10

25

56

14

10

1.5

4.4

1.8

0.12.0Before version 13.0.0, only the locale data for `en-US` is
available by default. See [the `NumberFormat()`
constructor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)
for more details.

`number_parameter-string_decimal`

106

106

116

92

15.4

106

116

72

15.4

20.0

106

No

19.0.0

 
See also 
--------

 
-   [`Intl.NumberFormat`](../numberformat)
-   [`Number.prototype.toLocaleString()`](../../number/tolocalestring)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/intl/durationformat/format.md)
Intl.DurationFormat.prototype.format()
======================================

 
 
**Experimental:** **This is an [experimental
technology](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental)**\
Check the [Browser compatibility table](#browser_compatibility)
carefully before using this in production.


The `format()` method of [`Intl.DurationFormat`](../durationformat)
instances formats a duration according to the locale and formatting
options of this [`Intl.DurationFormat`](../durationformat) object.


 
Syntax
------

 
 
 
[js]


```js
format(duration)
```




 
### Parameters

 

[`duration`](#duration)

:   The duration object to be formatted. It should include some or all
    of the following properties: `months`, `weeks`, `days`, `hours`,
    `minutes`, `seconds`, `milliseconds`, `microseconds`, `nanoseconds`.



 
### Return value 

 
A string representing the given `duration` formatted according to the
locale and formatting options of this
[`Intl.DurationFormat`](../durationformat) object.



 
Examples
--------


 
### Using format() 

 
The following example shows how to create a Duration formatter using the
English language.

 
 
[js]


```js
const duration = {
  years: 1,
  months: 2,
  weeks: 3,
  days: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7,
  microseconds: 8,
  nanoseconds: 9,
};

// Without options, style defaults to "short"
new Intl.DurationFormat("en").format(duration);
// "1 yr, 2 mths, 3 wks, 3 days, 4 hr, 5 min, 6 sec, 7 ms, 8 μs, 9 ns"

// With style set to "long"
new Intl.DurationFormat("en", { style: "long" }).format(duration);
// "1 year, 2 months, 3 weeks, 3 days, 4 hours, 5 minutes, 6 seconds, 7 milliseconds, 8 microseconds, 9 nanoseconds"

// With style set to "narrow"
new Intl.DurationFormat("en", { style: "narrow" }).format(duration);
// "1y 2mo 3w 3d 4h 5m 6s 7ms 8μs 9ns"
```




 
### Using format() with different locales and styles 

 
 
 
[js]


```js
const duration = {
  hours: 1,
  minutes: 46,
  seconds: 40,
};

// With style set to "long" and locale "fr-FR"
new Intl.DurationFormat("fr-FR", { style: "long" }).format(duration);
// "1 heure, 46 minutes et 40 secondes"

// With style set to "short" and locale set to "en"
new Intl.DurationFormat("en", { style: "short" }).format(duration);
// "1 hr, 46 min and 40 sec"

// With style set to "short" and locale set to "pt"
new Intl.DurationFormat("pt", { style: "narrow" }).format(duration);
// "1h 46min 40s"

// With style set to "digital" and locale set to "en"
new Intl.DurationFormat("en", { style: "digital" }).format(duration);
// "1:46:40"

// With style set to "digital", locale set to "en", and hours set to "long"
new Intl.DurationFormat("en", { style: "digital", hours: "long" }).format(
  duration,
);
// "1 hour, 46:40"
```




 
### Using format() with the fractionalDigits option 

 
 
 
[js]


```js
const duration = {
  hours: 11,
  minutes: 30,
  seconds: 12,
  milliseconds: 345,
  microseconds: 600,
};

new Intl.DurationFormat("en", { style: "digital" }).format(duration);
// "11:30:12.3456"

new Intl.DurationFormat("en", { style: "digital", fractionalDigits: 5 }).format(
  duration,
);
// "11:30:12.34560"

new Intl.DurationFormat("en", { style: "digital", fractionalDigits: 3 }).format(
  duration,
);
// "11:30:12.346"
```




Specifications
--------------

 
  ---------------------------------------------------------------------------------------------------------------------------------------------
  Specification
  ---------------------------------------------------------------------------------------------------------------------------------------------
  [Intl.DurationFormat\
  [\#
  sec-Intl.DurationFormat.prototype.format]](https://tc39.es/proposal-intl-duration-format/#sec-Intl.DurationFormat.prototype.format)

  ---------------------------------------------------------------------------------------------------------------------------------------------


Browser compatibility 
---------------------

 


Desktop

Mobile

Server

Chrome

Edge

Firefox

Opera

Safari

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

WebView Android

Deno

Node.js

`format`

No

No

No

No

16.4

No

No

No

16.4

No

No

No

No

 
See also 
--------

 
-   [`Intl.DurationFormat`](../durationformat)
-   [`Intl.supportedValuesOf()`](../supportedvaluesof)
-   [`Intl`](../../intl)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/format>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/intl/datetimeformat/format.md)
Intl.DateTimeFormat.prototype.format()
======================================

 
The `format()` method of [`Intl.DateTimeFormat`](../datetimeformat)
instances formats a date according to the locale and formatting options
of this `Intl.DateTimeFormat` object.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
format(date)
```




 
### Parameters

 

[`date`](#date)

:   The date to format.



 
### Return value 

 
A string representing the given `date` formatted according to the locale
and formatting options of this
[`Intl.DateTimeFormat`](../datetimeformat) object.



 
Examples
--------


 
### Using format 

 
Use the `format` getter function for formatting a single date, here for
Serbia:

 
 
[js]


```js
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateTimeFormat = new Intl.DateTimeFormat("sr-RS", options);
console.log(dateTimeFormat.format(new Date()));
// "недеља, 7. април 2013."
```




 
### Using format with map 

 
Use the `format` getter function for formatting all dates in an array.
Note that the function is bound to the
[`Intl.DateTimeFormat`](../datetimeformat) from which it was obtained,
so it can be passed directly to
[`Array.prototype.map()`](../../array/map).

 
 
[js]


```js
const a = [new Date(2012, 8), new Date(2012, 11), new Date(2012, 3)];
const options = { year: "numeric", month: "long" };
const dateTimeFormat = new Intl.DateTimeFormat("pt-BR", options);
const formatted = a.map(dateTimeFormat.format);
console.log(formatted.join("; "));
// "setembro de 2012; dezembro de 2012; abril de 2012"
```




 
### Avoid comparing formatted date values to static values 

 
Most of the time, the formatting returned by `format()` is consistent.
However, this might change in the future and isn\'t guaranteed for all
the languages --- output variations are by design and allowed by the
specification. Most notably, the IE and Edge browsers insert
bidirectional control characters around dates, so the output text will
flow properly when concatenated with other text.

For this reason you cannot expect to be able to compare the results of
`format()` to a static value:

 
 
[js]


```js
let d = new Date("2019-01-01T00:00:00.000000Z");
let formattedDate = Intl.DateTimeFormat(undefined, {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}).format(d);

"1.1.2019, 01:00:00" === formattedDate;
// true in Firefox and others
// false in IE and Edge
```


 
**Note:** See also this [StackOverflow
thread](https://stackoverflow.com/questions/25574963/ies-tolocalestring-has-strange-characters-in-results)
for more details and examples.




Specifications
--------------

 
  -----------------------------------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------------------------------
  [ECMAScript Internationalization API Specification\
  [\#
  sec-intl.datetimeformat.prototype.format]](https://tc39.es/ecma402/#sec-intl.datetimeformat.prototype.format)

  -----------------------------------------------------------------------------------------------------------------------


Browser compatibility 
---------------------

 


Desktop

Mobile

Server

Chrome

Edge

Firefox

Opera

Safari

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

WebView Android

Deno

Node.js

`format`

24

12

29

15

10

25

56

14

10

1.5

4.4

1.8

0.12.0Before version 13.0.0, only the locale data for `en-US` is
available by default. See [the `DateTimeFormat()`
constructor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
for more details.

 
See also 
--------

 
-   [`Intl.DateTimeFormat`](../datetimeformat)
-   [`Date.prototype.toLocaleString()`](../../date/tolocalestring)
-   [`Date.prototype.toLocaleDateString()`](../../date/tolocaledatestring)
-   [`Date.prototype.toLocaleTimeString()`](../../date/tolocaletimestring)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/intl/relativetimeformat/format.md)
Intl.RelativeTimeFormat.prototype.format()
==========================================

 
The `format()` method of
[`Intl.RelativeTimeFormat`](../relativetimeformat) instances formats a
`value` and `unit` according to the locale and formatting options of
this `Intl.RelativeTimeFormat` object.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
format(value, unit)
```




 
### Parameters

 

[`value`](#value)

:   Numeric value to use in the internationalized relative time message.

[`unit`](#unit)

:   Unit to use in the relative time internationalized message. Possible
    values are: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`,
    `"hour"`, `"minute"`, `"second"`. Plural forms are also permitted.



 
### Return value 

 
A string representing the given `value` and `unit` formatted according
to the locale and formatting options of this
[`Intl.RelativeTimeFormat`](../relativetimeformat) object.



 
Examples
--------


 
### Basic format usage 

 
The following example shows how to create a relative time formatter
using the English language.

 
 
[js]


```js
// Create a relative time formatter in your locale
// with default values explicitly passed in.
const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // other values: "lookup"
  numeric: "always", // other values: "auto"
  style: "long", // other values: "short" or "narrow"
});

// Format relative time using negative value (-1).
rtf.format(-1, "day"); // "1 day ago"

// Format relative time using positive value (1).
rtf.format(1, "day"); // "in 1 day"
```




 
### Using the auto option 

 
If `numeric:auto` option is passed, it will produce the string
`yesterday`, `today`, or `tomorrow` instead of `1 day ago`, `in 0 days`,
or `in 1 day`. This allows to not always have to use numeric values in
the output.

 
 
[js]


```js
// Create a relative time formatter in your locale
// with numeric: "auto" option value passed in.
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using negative value (-1).
rtf.format(-1, "day"); // "yesterday"

rtf.format(0, "day"); // "today"

// Format relative time using positive day unit (1).
rtf.format(1, "day"); // "tomorrow"
```




Specifications
--------------

 
  -------------------------------------------------------------------------------------------------------------------------------
  Specification
  -------------------------------------------------------------------------------------------------------------------------------
  [ECMAScript Internationalization API Specification\
  [\#
  sec-Intl.RelativeTimeFormat.prototype.format]](https://tc39.es/ecma402/#sec-Intl.RelativeTimeFormat.prototype.format)

  -------------------------------------------------------------------------------------------------------------------------------


Browser compatibility 
---------------------

 


Desktop

Mobile

Server

Chrome

Edge

Firefox

Opera

Safari

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

WebView Android

Deno

Node.js

`format`

71

79

65

58

14

71

65

50

14

10.0

71

1.8

12.0.0Before version 13.0.0, only the locale data for `en-US` is
available by default. See [the `RelativeTimeFormat()`
constructor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat)
for more details.

 
See also 
--------

 
-   [`Intl.RelativeTimeFormat`](../relativetimeformat)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/intl/listformat/format.md)
Intl.ListFormat.prototype.format()
==================================

 
The `format()` method of [`Intl.ListFormat`](../listformat) instances
returns a string with a language-specific representation of the list.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
format()
format(list)
```




 
### Parameters

 

[`list`](#list)

:   An iterable object, such as an Array.



 
### Return value 

 
A language-specific formatted string representing the elements of the
list



 
Description
-----------

 
The `format()` method returns a string that has been formatted based on
parameters provided in the `Intl.ListFormat` object. The `locales` and
`options` parameters customize the behavior of `format()` and let
applications specify the language conventions that should be used to
format the list.



 
Examples
--------


 
### Using format 

 
The following example shows how to create a List formatter using the
English language.

 
 
[js]


```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus and Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "unit" }).format(list),
);
// Motorcycle Bus Car
```




Specifications
--------------

 
  ---------------------------------------------------------------------------------------------------------------
  Specification
  ---------------------------------------------------------------------------------------------------------------
  [ECMAScript Internationalization API Specification\
  [\#
  sec-Intl.ListFormat.prototype.format]](https://tc39.es/ecma402/#sec-Intl.ListFormat.prototype.format)

  ---------------------------------------------------------------------------------------------------------------


Browser compatibility 
---------------------

 


Desktop

Mobile

Server

Chrome

Edge

Firefox

Opera

Safari

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

WebView Android

Deno

Node.js

`format`

72

79

78

60

14.1Only available on macOS Big Sur (11) and above.

72

79

51

14.5

11.0

72

1.8

12.0.0Before version 13.0.0, only the locale data for `en-US` is
available by default. See [the `ListFormat()`
constructor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat)
for more details.

 
See also 
--------

 
-   [`Intl.ListFormat`](../listformat)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format>

