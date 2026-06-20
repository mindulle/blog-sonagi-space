log()
=====

The `log()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) is an exponential function that returns the
logarithm of a number.

[Logarithm](https://en.wikipedia.org/wiki/Logarithm) is the inverse of
exponentiation. It is the number that a fixed base has to be raised to
in order to yield the number passed as the first parameter.

In CSS, when a single parameter is passed, the natural logarithm `e`, or
approximately `2.7182818`, is used, though the base can be set to any
value with an optional second parameter.

Syntax
------

[css]

```css
/* A <number> value */
width: calc(100px * log(7.389)); /* 200px */
width: calc(100px * log(8, 2)); /* 300px */
width: calc(100px * log(625, 5)); /* 400px */
```

### Parameters

The `log(value [, base]?)` function accepts two comma-separated values
as its parameters.

[`value`](#value)

:   A calculation which resolves to a [`<number>`](number.md) greater than
    or equal to 0. Representing the value to be logarithmed.

[`base`](#base)

:   Optional. A calculation which resolves to a [`<number>`](number.md)
    greater than or equal to 0. Representing the base of the logarithm.
    If not defined, the default logarithmic base `e` is used.

### Return value

The logarithm of `value`, when `base` is defined.

The natural logarithm (base `e`) of `value`, when `base` is not defined.

### Formal syntax

```
<log()> = 
  log( <calc-sum> , <calc-sum>? )  

<calc-sum> = 
  <calc-product> [ [ '+' | '-' ] <calc-product> ]*  

<calc-product> = 
  <calc-value> [ [ '*' | '/' ] <calc-value> ]*  

<calc-value> = 
  <number>         |
  <dimension>      |
  <percentage>     |
  <calc-constant>  |
  ( <calc-sum> )   

<calc-constant> = 
  e          |
  pi         |
  infinity   |
  -infinity  |
  NaN        
```

Examples
--------

### Sizes based on `log()` function

This example shows how you can use the `log()` function to calculate
sizes.

#### HTML

[html]

```html
<div class="boxes">
  <div class="box zero">50px</div>
  <div class="box one">100px</div>
  <div class="box two">150px</div>
  <div class="box three">200px</div>
</div>
```

#### CSS

Here we are using [CSS custom properties](using_css_custom_properties.md)
to define the sizes to be used. First, we declare the first size
(`--size-0`), which is then used to calculate the other sizes.

- `--size-1` is calculated by multiplying `--size-0` (50px) by the
    value of `log(7.389)` (2) which results in 100px.
- `--size-2` is calculated by multiplying `--size-0` (50px) by the
    value of `log(8, 2)` (3) which results in 150px.
- `--size-3` is calculated by multiplying `--size-0` (50px) by the
    value of `log(625, 5)` (4) which results in 200px.

[css]

```css
:root {
  --size-0: 50px;
  --size-1: calc(var(--size-0) * log(7.389)); /*  100px */
  --size-2: calc(var(--size-0) * log(8, 2)); /*  150px */
  --size-3: calc(var(--size-0) * log(625, 5)); /*  200px */
}
```

The sizes are then applied as the `width` and `height` values of the
selectors.

[css]

```css
.one {
  width: var(--size-1);
  height: var(--size-1);
}
.two {
  width: var(--size-2);
  height: var(--size-2);
}
.three {
  width: var(--size-3);
  height: var(--size-3);
}
```

#### Result

Specifications
--------------

  -------------------------------------------------------------------------------

Specification
  -------------------------------------------------------------------------------

  [CSS Values and Units Module Level 4\
  [\#
  exponent-funcs]](https://drafts.csswg.org/css-values/#exponent-funcs)

  -------------------------------------------------------------------------------

Browser compatibility
---------------------

Desktop

Mobile

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

WebView Android

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

`log`

No

No

118

No

No

15.4

No

No

118

No

15.4

No

See also
--------

- [`pow()`](pow.md)
- [`sqrt()`](sqrt.md)
- [`hypot()`](hypot.md)
- [`exp()`](exp.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/log>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-developer/log.md)
[dart:developer](../dart-developer/dart-developer-library){._links-link}

log function
============

::: {.section .multi-line-signature}
void log(

1.  [String](../dart-core/string-class) message,
2.  {[DateTime](../dart-core/datetime-class)? time,
3.  [int](../dart-core/int-class)? sequenceNumber,
4.  [int](../dart-core/int-class) level = 0,
5.  [String](../dart-core/string-class) name = \'\',
6.  [Zone](../dart-async/zone-class)? zone,
7.  [Object](../dart-core/object-class)? error,
8.  [StackTrace](../dart-core/stacktrace-class)? stackTrace}

)
:::

Emit a log event.

This function was designed to map closely to the logging information
collected by `package:logging`.

-   `message` is the log message
-   `time` (optional) is the timestamp
-   `sequenceNumber` (optional) is a monotonically increasing sequence
    number
-   `level` (optional) is the severity level (a value between 0 and
    2000); see the `package:logging` `Level` class for an overview of
    the possible values
-   `name` (optional) is the name of the source of the log message
-   `zone` (optional) the zone where the log was emitted
-   `error` (optional) an error object associated with this log event
-   `stackTrace` (optional) a stack trace associated with this log event

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void log(
  String message, {
  DateTime? time,
  int? sequenceNumber,
  int level = 0,
  String name = '',
  Zone? zone,
  Object? error,
  StackTrace? stackTrace,
});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-developer/log.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/log.md)
[dart:math](../dart-math/dart-math-library){._links-link}

log function
============

::: {.section .multi-line-signature}
[double](../dart-core/double-class) log(

1.  [num](../dart-core/num-class) x

)
:::

Converts `x` to a [double](../dart-core/double-class) and returns the
natural logarithm of the value.

Returns negative infinity if `x` is equal to zero. Returns NaN if `x` is
NaN or less than zero.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external double log(num x);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/log.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/math/log.md)
Math.log()
==========

 
The `Math.log()` static method returns the natural logarithm (base
[e](e)) of a number. That is

$$\forall x > 0,\;{\operatorname{\mathtt{M}\mathtt{a}\mathtt{t}\mathtt{h}.\mathtt{l}\mathtt{o}\mathtt{g}}(\mathtt{x})} = \ln(x) = \text{the\ unique}y\text{such\ that}e^{y} = x$$


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Math.log(x)
```




 
### Parameters

 

[`x`](#x)

:   A number greater than or equal to 0.



 
### Return value 

 
The natural logarithm (base [e](e)) of `x`. If `x` is ±0, returns
[`-Infinity`](../number/negative_infinity). If `x < 0`, returns
[`NaN`](../nan).



 
Description
-----------

 
Because `log()` is a static method of `Math`, you always use it as
`Math.log()`, rather than as a method of a `Math` object you created
(`Math` is not a constructor).

If you need the natural log of 2 or 10, use the constants
[`Math.LN2`](ln2) or [`Math.LN10`](ln10). If you need a logarithm to
base 2 or 10, use [`Math.log2()`](log2) or [`Math.log10()`](log10). If
you need a logarithm to other bases, use
`Math.log(x) / Math.log(otherBase)` as in the example below; you might
want to precalculate `1 / Math.log(otherBase)` since multiplication in
`Math.log(x) * constant` is much faster.

Beware that positive numbers very close to 1 can suffer from loss of
precision and make its natural logarithm less accurate. In this case,
you may want to use [`Math.log1p`](log1p) instead.



 
Examples
--------


 
### Using Math.log() 

 
 
 
[js]


```js
Math.log(-1); // NaN
Math.log(-0); // -Infinity
Math.log(0); // -Infinity
Math.log(1); // 0
Math.log(10); // 2.302585092994046
Math.log(Infinity); // Infinity
```




 
### Using Math.log() with a different base 

 
The following function returns the logarithm of `y` with base `x` (i.e.
$\log_{x}y$):

 
 
[js]


```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```


If you run `getBaseLog(10, 1000)`, it returns `2.9999999999999996` due
to floating-point rounding, but still very close to the actual answer of
3.



Specifications
--------------

 
  -----------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-math.log]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.log)

  -----------------------------------------------------------------------------------------------


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

`log`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

 
See also 
--------

 
-   [`Math.exp()`](exp)
-   [`Math.log1p()`](log1p)
-   [`Math.log10()`](log10)
-   [`Math.log2()`](log2)
-   [`Math.pow()`](pow)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/console/log.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

log method
==========

::: {.section .multi-line-signature}
void log(

1.  [Object](../../dart-core/object-class)? arg

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void log(Object? arg) =>
    _isConsoleDefined ? JS('void', 'window.console.log(#)', arg) : null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Console/log.html>
:::
