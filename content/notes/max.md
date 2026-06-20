max()
=====

The `max()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) lets you set the largest (most positive) value
from a list of comma-separated expressions as the value of a CSS
property value. The `max()` function can be used anywhere a
[`<length>`](length.md), [`<frequency>`](frequency.md), [`<angle>`](angle.md),
[`<time>`](time.md), [`<percentage>`](percentage.md), [`<number>`](number.md), or
[`<integer>`](integer.md) is allowed.

Try it
------

In the first example shown above, the width will be at least 400px, but
will be wider if the viewport is more than 2000px wide (in which case
1vw would be 20px, so 20vw would be 400px). This technique uses an
absolute unit to specify a fixed minimum value for the property, and a
relative unit to allow the value to grow to suit larger viewports.

Syntax
------

The `max()` function takes one or more comma-separated expressions as
its parameter, with the largest (most positive) expression value used as
the value of the property to which it is assigned.

The expressions can be math expressions (using arithmetic operators),
literal values, or other expressions, such as [`attr()`](attr.md), that
evaluate to a valid argument type (like [`<length>`](length.md)), or nested
[`min()`](min.md) and `max()` functions.

You can use different units for each value in your expression. You may
also use parentheses to establish computation order when needed.

### Notes

- Math expressions involving percentages for widths and heights on
    table columns, table column groups, table rows, table row groups,
    and table cells in both auto and fixed layout tables *may* be
    treated as if `auto` had been specified.
- It is permitted to nest `min()` and other `max()` functions as
    expression values. The expressions are full math expressions, so you
    can use direct addition, subtraction, multiplication and division
    without using the calc() function itself.
- The expression can be values combining the addition ( + ),
    subtraction ( - ), multiplication ( \* ) and division ( / )
    operators, using standard operator precedence rules. Make sure to
    put a space on each side of the + and - operands. The operands in
    the expression may be any \<length\> syntax value.
- You can (and often need to) combine `min()` and `max()` values, or
    use `max()` within a `clamp()` or `calc()` function.

### Formal syntax

```
<max()> = 
  max( <calc-sum># )  

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

### Setting a minimum size for a font

Another use case for `max()` is to allow a font size to grow while
ensuring it is at least a minimum size, enabling responsive font sizes
while ensuring legibility.

Let\'s look at some CSS:

[css]

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

The font-size will at minimum be 2rems, or twice the default size of
font for the page. This ensures that it is legible and accessible.

[html]

```html
<h1>This text is always legible, but doesn't change size</h1>
<h1 class="responsive">
  This text is always legible, and is responsive, to a point
</h1>
```

Think of the `max()` function as finding the minimum value allowed for a
property.

Accessibility concerns
----------------------

When `max()` is used for controlling text size, make sure the text is
always large enough to read. A suggestion is to use the [`min()`](min.md)
function nested within a `max()` that has as its second value a
[relative length unit](length.md#relative_length_units) that is always
large enough to read. For example:

[css]

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

This ensures a minimum size of *1rem*, with a text size that scales if
the page is zoomed.

- [MDN Understanding WCAG, Guideline 1.4
    explanations](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 \| W3C Understanding WCAG
    2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

Specifications
--------------

  -----------------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------------

  [CSS Values and Units Module Level 4\
  [\#
  calc-notation]](https://drafts.csswg.org/css-values/#calc-notation)

  -----------------------------------------------------------------------------

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

`max`

79

79

75

No

66

11.1

79

79

79

57

11.3

12.0

See also
--------

- [`calc()`](calc.md)
- [`clamp()`](clamp.md)
- [`min()`](min.md)
- [CSS
    Values](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/max>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/html/attributes/max.md)
HTML attribute: max
===================

The `max` attribute defines the maximum value that is acceptable and
valid for the input containing the attribute. If the
[`value`](../element/input#value) of the element is greater than this,
the element fails
[validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation).
This value must be greater than or equal to the value of the
[`min`](min) attribute. If the `max` attribute is present but is not
specified or is invalid, no `max` value is applied. If the `max`
attribute is valid and a non-empty value is greater than the maximum
allowed by the `max` attribute, constraint validation will prevent form
submission.

Valid for the numeric input types, including the
[date](../element/input/date), [month](../element/input/month),
[week](../element/input/week), [time](../element/input/time),
[datetime-local](../element/input/datetime-local),
[number](../element/input/number) and [range](../element/input/range)
types, and both the [`<progress>`](../element/progress) and
[`<meter>`](../element/meter) elements, the `max` attribute is a number
that specifies the most positive value a form control to be considered
valid.

If the value exceeds the max value allowed, the
[`validityState.rangeOverflow`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/rangeOverflow)
will be true, and the control will be matched by the
[`:out-of-range`](https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range)
and
[`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)
pseudo-classes.

### Syntax

  Input type                                          Syntax                                                                  Example
  --------------------------------------------------- ----------------------------------------------------------------------- --------------------------------------------------------
  [date](../element/input/date)                       `yyyy-mm-dd`                                                            `<input type="date" max="2019-12-25" step="1">`
  [month](../element/input/month)                     `yyyy-mm`                                                               `<input type="month" max="2019-12" step="12">`
  [week](../element/input/week)                       `yyyy-W##`                                                              `<input type="week" max="2019-W23" step="">`
  [time](../element/input/time)                       `hh:mm`                                                                 `<input type="time" max="17:00" step="900">`
  [datetime-local](../element/input/datetime-local)   `yyyy-mm-ddThh:mm`                                                      `<input type="datetime-local" max="2019-12-25T23:59">`
  [number](../element/input/number)                   [\<number\>](https://developer.mozilla.org/en-US/docs/Web/CSS/number)   `<input type="number" min="0" step="5" max="100">`
  [range](../element/input/range)                     [\<number\>](https://developer.mozilla.org/en-US/docs/Web/CSS/number)   `<input type="range" min="60" step="5" max="100">`

  :  Syntax for `max` values by input `type`

**Note:** When the data entered by the user doesn\'t adhere to the
maximum value set, the value is considered invalid in constraint
validation and will match the
[`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)
and
[`:out-of-range`](https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range)
pseudo-classes.

See [Client-side validation](../constraint_validation) and
[`rangeOverflow`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/rangeOverflow)
for more information.

For the [`<progress>`](../element/progress) element, the `max` attribute
describes how much work the task indicated by the `progress` element
requires. If present, must have a value greater than zero and be a valid
floating point number. For the [`<meter>`](../element/meter) element,
the `max` attribute defines the upper numeric bound of the measured
range. This must be greater than the minimum value ([`min`](min)
attribute), if specified. In both cases, if omitted, the value defaults
to 1.

  Input type                            Syntax                                                                  Example
  ------------------------------------- ----------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------
  [`<progress>`](../element/progress)   [\<number\>](https://developer.mozilla.org/en-US/docs/Web/CSS/number)   `<progress id="file" max="100" value="70"> 70% </progress>`
  [`<meter>`](../element/meter)         [\<number\>](https://developer.mozilla.org/en-US/docs/Web/CSS/number)   `<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="40"> at 40/100</meter>`

  :  Syntax for `max` values for other elements

Accessibility concerns
----------------------

Provide instructions to help users understand how to complete the form
and use individual form controls. Indicate any required and optional
input, data formats, and other relevant information. When using the
`max` attribute, ensure this maximum requirement is understood by the
user. Providing instructions within the [`<label>`](../element/label)
may be sufficient. If providing instructions outside of labels, which
allows more flexible positioning and design, consider using
[`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
or
[`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

Specifications
--------------

  --------------------------------------------------------------------------------------------------------------------

Specification
  --------------------------------------------------------------------------------------------------------------------

  [HTML Standard\
  [\#
  the-min-and-max-attributes]](https://html.spec.whatwg.org/multipage/input.html#the-min-and-max-attributes)

  [HTML Standard\
  [\# attr-meter-max]](https://html.spec.whatwg.org/multipage/form-elements.html#attr-meter-max)

[HTML Standard\
  [\# attr-progress-max]](https://html.spec.whatwg.org/multipage/form-elements.html#attr-progress-max)
  --------------------------------------------------------------------------------------------------------------------

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

`max`

6

12

6

10

11

6

4.4

18

6

11

7

1.0

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

`max`

6

≤18

16

No

11

6

No

18

16

11

10.3

1.0

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

`max`

4

12

16

10

≤12.1

5

≤37

18

16

≤12.1

4

1.0

### html.elements.input.max

BCD tables only load in the browser with JavaScript enabled. Enable
JavaScript to view data.

### html.elements.meter.max

BCD tables only load in the browser with JavaScript enabled. Enable
JavaScript to view data.

### html.elements.progress.max

BCD tables only load in the browser with JavaScript enabled. Enable
JavaScript to view data.

See also
--------

- [`step`](step)
- [`min`](min)
- other meter attributes:
    [`low`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/low),
    [`high`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/high),
    [`optimum`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/optimum)
- [Constraint validation](../constraint_validation)
- [Form
    validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [`validityState.rangeOverflow`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/rangeOverflow)
- [`:out-of-range`](https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range)
- [`<input>`](../element/input)
- [date](../element/input/date), [month](../element/input/month),
    [week](../element/input/week), [time](../element/input/time),
    [datetime-local](../element/input/datetime-local),
    [number](../element/input/number) and
    [range](../element/input/range) types, and the
    [`<meter>`](../element/meter)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max>>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/max.md)
[dart:math](../dart-math/dart-math-library){._links-link}

max\<T extends num\> function
=============================

::: {.section .multi-line-signature}
T max\<T extends num\>(

1.  T a,
2.  T b

)
:::

Returns the larger of two numbers.

Returns NaN if either argument is NaN. The larger of `-0.0` and `0.0` is
`0.0`. If the arguments are otherwise equal (including int and doubles
with the same mathematical value) then it is unspecified which of the
two arguments is returned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external T max<T extends num>(T a, T b);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/max.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/math/max.md)
Math.max()
==========

 
The `Math.max()` static method returns the largest of the numbers given
as input parameters, or -[`Infinity`](../infinity) if there are no
parameters.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Math.max()
Math.max(value1)
Math.max(value1, value2)
Math.max(value1, value2, /* …, */ valueN)
```




 
### Parameters

 

[`value1`](#value1), ..., `valueN`

:   Zero or more numbers among which the largest value will be selected
    and returned.



 
### Return value 

 
The largest of the given numbers. Returns [`NaN`](../nan) if any of the
parameters is or is converted into `NaN`. Returns
-[`Infinity`](../infinity) if no parameters are provided.



 
Description
-----------

 
Because `max()` is a static method of `Math`, you always use it as
`Math.max()`, rather than as a method of a `Math` object you created
(`Math` is not a constructor).

[`Math.max.length`](../function/length) is 2, which weakly signals that
it\'s designed to handle at least two parameters.



 
Examples
--------


 
### Using Math.max() 

 
 
 
[js]


```js
Math.max(10, 20); // 20
Math.max(-10, -20); // -10
Math.max(-10, 20); // 20
```




 
### Getting the maximum element of an array 

 
[`Array.prototype.reduce()`](../array/reduce) can be used to find the
maximum element in a numeric array, by comparing each value:

 
 
[js]


```js
const arr = [1, 2, 3];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
```


The following function uses
[`Function.prototype.apply()`](../function/apply) to get the maximum of
an array. `getMaxOfArray([1, 2, 3])` is equivalent to
`Math.max(1, 2, 3)`, but you can use `getMaxOfArray()` on
programmatically constructed arrays. This should only be used for arrays
with relatively few elements.

 
 
[js]


```js
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```


The [spread syntax](../../operators/spread_syntax) is a shorter way of
writing the `apply` solution to get the maximum of an array:

 
 
[js]


```js
const arr = [1, 2, 3];
const max = Math.max(...arr);
```


However, both spread (`...`) and `apply` will either fail or return the
wrong result if the array has too many elements, because they try to
pass the array elements as function parameters. See [Using apply and
built-in
functions](../function/apply#using_apply_and_built-in_functions) for
more details. The `reduce` solution does not have this problem.



Specifications
--------------

 
  -----------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-math.max]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.max)

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

`max`

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

 
-   [`Math.min()`](min)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/inputelement/max.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

max property
============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? max

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get max native;
```

::: {#setter .section .multi-line-signature}
void max=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set max(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/InputElement/max.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rangeinputelementbase/max.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

max property
============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? max
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get max;
```

::: {#setter .section .multi-line-signature}
void max=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set max(String? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RangeInputElementBase/max.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/meterelement/max.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

max property
============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? max
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get max native;
```

::: {#setter .section .multi-line-signature}
void max=([num](../../dart-core/num-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set max(num? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MeterElement/max.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/progresselement/max.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

max property
============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class) max
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num get max native;
```

::: {#setter .section .multi-line-signature}
void max=([num](../../dart-core/num-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set max(num value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ProgressElement/max.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float32x4/max.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

max method
==========

::: {.section .multi-line-signature}
[Float32x4](../float32x4-class) max(

1.  [Float32x4](../float32x4-class) other

)
:::

Returns the lane-wise maximum value in [this](../float32x4-class) or
`other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float32x4 max(Float32x4 other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float32x4/max.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float64x2/max.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

max method
==========

::: {.section .multi-line-signature}
[Float64x2](../float64x2-class) max(

1.  [Float64x2](../float64x2-class) other

)
:::

Returns the lane-wise maximum value in [this](../float64x2-class) or
`other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float64x2 max(Float64x2 other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float64x2/max.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-developer/gauge/max.md)
[dart:developer](../../dart-developer/dart-developer-library){._links-link}

max property
============

::: {.section .multi-line-signature}
[double](../../dart-core/double-class) max

::: {.features}
final
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final double max;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-developer/Gauge/max.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediasettingsrange/max.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

max property
============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? max
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get max native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaSettingsRange/max.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/MAX.md)

# MAX

`MAX` is an aggregate function in SQL that returns the highest value in a set of values. It can be used with numeric, date, or string data types, selecting the maximum value from a specified column. `MAX` is often used in combination with `GROUP BY` to find the highest value within each group. This 
function is useful for various data analysis tasks, such as finding the highest salary, the most recent date, or the alphabetically last name in a dataset.

Visit the following resources to learn more:

- [@article@MAX](https://www.techonthenet.com/sql/max.php)
- [@video@Basic Aggregate Functions](https://www.youtube.com/watch?v=jcoJuc5e3RE)

## 관련 로드맵
- [[sql|sql]]
