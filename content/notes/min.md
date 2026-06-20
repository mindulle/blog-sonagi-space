min()
=====

The `min()` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[function](css_functions.md) lets you set the smallest (most negative)
value from a list of comma-separated expressions as the value of a CSS
property value. The `min()` function can be used anywhere a
[`<length>`](length.md), [`<frequency>`](frequency.md), [`<angle>`](angle.md),
[`<time>`](time.md), [`<percentage>`](percentage.md), [`<number>`](number.md), or
[`<integer>`](integer.md) is allowed.

Try it
------

In the first above example, the width will be at most 200px, but will be
smaller if the viewport is less than 400px wide (in which case 1vw would
be 4px, so 50vw would be 200px). This technique uses an absolute unit to
specify a fixed maximum value for the property, and a relative unit to
allow the value to shrink to suit smaller viewports.

Syntax
------

The `min()` function takes one or more comma-separated expressions as
its parameter, with the smallest (most negative) expression value result
used as the value.

The expressions can be math expressions (using arithmetic operators),
literal values, or other expressions, such as [`attr()`](attr.md), that
evaluate to a valid argument type (like [`<length>`](length.md)).

You can use different units for each value in your expression, if you
wish. You may also use parentheses to establish computation order when
needed.

### Notes

- Math expressions involving percentages for widths and heights on
    table columns, table column groups, table rows, table row groups,
    and table cells in both auto and fixed layout tables *may* be
    treated as if `auto` had been specified.
- It is permitted to nest `max()` and other `min()` functions as
    expression values. The expressions are full math expressions, so you
    can use direct addition, subtraction, multiplication and division
    without using the `calc()` function itself.
- The expression can be values combining the addition ( + ),
    subtraction ( - ), multiplication ( \* ) and division ( / )
    operators, using standard operator precedence rules. Make sure to
    put a space on each side of the + and - operands. The operands in
    the expression may be any `<length>` syntax value.
- You can (and often need to) combine `min()` and `max()` values, or
    use `min()` within a `clamp()` or `calc()` function.
- You can provide more than two arguments, if you have multiple
    constraints to apply.

### Formal syntax

```
<min()> = 
  min( <calc-sum># )  

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

Accessibility concerns
----------------------

When using `min()` to set a maximum font size, ensure that the font can
still be scaled at least 200% for readability (without assistive
technology like a zoom function).

- [MDN Understanding WCAG, Guideline 1.4
    explanations](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 \| W3C Understanding WCAG
    2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

Examples
--------

### Setting a maximum size for a label and input

Another use case for `min()` is to set a maximum size on responsive form
controls: enabling the width of labels and inputs to shrink as the width
of the form shrinks.

Let\'s look at some CSS:

[css]

```css
input,
label {
  padding: 2px;
  box-sizing: border-box;
  display: inline-block;
  width: min(40%, 400px);
  background-color: pink;
}

form {
  margin: 4px;
  border: 1px solid black;
  padding: 4px;
}
```

Here, the form itself, along with the margin, border, and padding, will
be 100% of its parent\'s width. We declare the input and label to be the
lesser of 40% of the form width up to the padding or 400px wide,
whichever is smaller. In other words, the widest that the label and
input can be is 400px. The narrowest they will be is 40% of the form\'s
width, which on a smartwatch\'s screen is very small.

[html]

```html
<form>
  <label for="misc">Type something:</label>
  <input type="text" id="misc" name="misc" />
</form>
```

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

`min`

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
- [`max()`](max.md)
- [CSS
    Values](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/min>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/html/attributes/min.md)
HTML attribute: min
===================

The `min` attribute defines the minimum value that is acceptable and
valid for the input containing the attribute. If the
[`value`](../element/input#value) of the element is less than this, the
element fails
[validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation).
This value must be less than or equal to the value of the `max`
attribute.

Some input types have a default minimum. If the input has no default
minimum and a value is specified for `min` that can\'t be converted to a
valid number (or no minimum value is set), the input has no minimum
value.

It is valid for the input types including:
[date](../element/input/date), [month](../element/input/month),
[week](../element/input/week), [time](../element/input/time),
[datetime-local](../element/input/datetime-local),
[number](../element/input/number) and [range](../element/input/range)
types, and the [`<meter>`](../element/meter) element.

### Syntax

  Input type                                          Syntax                                                                  Example
  --------------------------------------------------- ----------------------------------------------------------------------- --------------------------------------------------------
  [date](../element/input/date)                       `yyyy-mm-dd`                                                            `<input type="date" min="2019-12-25" step="1">`
  [month](../element/input/month)                     `yyyy-mm`                                                               `<input type="month" min="2019-12" step="12">`
  [week](../element/input/week)                       `yyyy-W##`                                                              `<input type="week" min="2019-W23" step="">`
  [time](../element/input/time)                       `hh:mm`                                                                 `<input type="time" min="09:00" step="900">`
  [datetime-local](../element/input/datetime-local)   `yyyy-mm-ddThh:mm`                                                      `<input type="datetime-local" min="2019-12-25T19:30">`
  [number](../element/input/number)                   [\<number\>](https://developer.mozilla.org/en-US/docs/Web/CSS/number)   `<input type="number" min="0" step="5" max="100">`
  [range](../element/input/range)                     [\<number\>](https://developer.mozilla.org/en-US/docs/Web/CSS/number)   `<input type="range" min="60" step="5" max="100">`

  :  Syntax for `min` values by input `type`

**Note:** When the data entered by the user doesn\'t adhere to the min
value set, the value is considered invalid in constraint validation and
will match the
[`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)
and
[`:out-of-range`](https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range)
pseudo-classes.

See [Client-side validation](../constraint_validation) and
[`rangeUnderflow`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/rangeUnderflow)
for more information.

For the [`<meter>`](../element/meter) element, the `min` attribute
defines the lower numeric bound of the measured range. This must be less
than the minimum value ([`max`](max) attribute), if specified. In both
cases, if omitted, the value defaults to 1.

  Input type                      Syntax                                                                  Example
  ------------------------------- ----------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------
  [`<meter>`](../element/meter)   [\<number\>](https://developer.mozilla.org/en-US/docs/Web/CSS/number)   `<meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="40"> at 40/100</meter>`

  :  Syntax for `min` values for other elements

### Impact on step

The value of `min` and `step` define what are valid values, even if the
`step` attribute is not included, as `step` defaults to `0`.

We add a big red border around invalid inputs:

[css]

```css
input:invalid {
  border: solid red 3px;
}

```

Then define an input with a minimum value of 7.2, omitting the step
attribute, wherein it defaults to 1.

[html]

```html
<input id="myNumber" name="myNumber" type="number" min="7.2" value="8" />
```

Because `step` defaults to 1, valid values include `7.2`, `8.2`, `9.2`,
and so on. The value 8 is not valid. As we included an invalid value,
supporting browsers will show the value as invalid.

If not explicitly included, `step` defaults to 1 for `number` and
`range`, and 1 unit type (second, week, month, day) for the date/time
input types.

Accessibility concerns
----------------------

Provide instructions to help users understand how to complete the form
and use individual form controls. Indicate any required and optional
input, data formats, and other relevant information. When using the
`min` attribute, ensure this minimum requirement is understood by the
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

`min`

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

`min`

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

### html.elements.input.min

BCD tables only load in the browser with JavaScript enabled. Enable
JavaScript to view data.

### html.elements.meter.min

BCD tables only load in the browser with JavaScript enabled. Enable
JavaScript to view data.

See also
--------

- [`step`](step)
- [`max`](max)
- other meter attributes:
    [`low`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/low),
    [`high`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/high),
    [`optimum`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/optimum)
- [Constraint validation](../constraint_validation)
- [Form
    validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [`validityState.rangeUnderflow`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/rangeUnderflow)
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
https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/min>>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-math/min.md)
[dart:math](../dart-math/dart-math-library){._links-link}

min\<T extends num\> function
=============================

::: {.section .multi-line-signature}
T min\<T extends num\>(

1.  T a,
2.  T b

)
:::

Returns the lesser of two numbers.

Returns NaN if either argument is NaN. The lesser of `-0.0` and `0.0` is
`-0.0`. If the arguments are otherwise equal (including int and doubles
with the same mathematical value) then it is unspecified which of the
two arguments is returned.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external T min<T extends num>(T a, T b);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-math/min.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/math/min.md)
Math.min()
==========

 
The `Math.min()` static method returns the smallest of the numbers given
as input parameters, or [`Infinity`](../infinity) if there are no
parameters.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Math.min()
Math.min(value1)
Math.min(value1, value2)
Math.min(value1, value2, /* …, */ valueN)
```




 
### Parameters

 

[`value1`](#value1), ..., `valueN`

:   Zero or more numbers among which the lowest value will be selected
    and returned.



 
### Return value 

 
The smallest of the given numbers. Returns [`NaN`](../nan) if any of the
parameters is or is converted into `NaN`. Returns
[`Infinity`](../infinity) if no parameters are provided.



 
Description
-----------

 
Because `min()` is a static method of `Math`, you always use it as
`Math.min()`, rather than as a method of a `Math` object you created
(`Math` is not a constructor).

[`Math.min.length`](../function/length) is 2, which weakly signals that
it\'s designed to handle at least two parameters.



 
Examples
--------


 
### Using Math.min() 

 
This finds the min of `x` and `y` and assigns it to `z`:

 
 
[js]


```js
const x = 10;
const y = -20;
const z = Math.min(x, y); // -20
```




 
### Clipping a value with Math.min() 

 
`Math.min()` is often used to clip a value so that it is always less
than or equal to a boundary. For instance, this

 
 
[js]


```js
let x = f(foo);

if (x > boundary) {
  x = boundary;
}
```


may be written as this

 
 
[js]


```js
const x = Math.min(f(foo), boundary);
```


[`Math.max()`](max) can be used in a similar way to clip a value at the
other end.



Specifications
--------------

 
  -----------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-math.min]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.min)

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

`min`

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

 
-   [`Math.max()`](max)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/inputelement/min.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

min property
============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? min

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get min native;
```

::: {#setter .section .multi-line-signature}
void min=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set min(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/InputElement/min.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rangeinputelementbase/min.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

min property
============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? min
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get min;
```

::: {#setter .section .multi-line-signature}
void min=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set min(String? value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RangeInputElementBase/min.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/meterelement/min.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

min property
============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? min
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get min native;
```

::: {#setter .section .multi-line-signature}
void min=([num](../../dart-core/num-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set min(num? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MeterElement/min.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float32x4/min.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

min method
==========

::: {.section .multi-line-signature}
[Float32x4](../float32x4-class) min(

1.  [Float32x4](../float32x4-class) other

)
:::

Returns the lane-wise minimum value in [this](../float32x4-class) or
`other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float32x4 min(Float32x4 other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float32x4/min.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/float64x2/min.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

min method
==========

::: {.section .multi-line-signature}
[Float64x2](../float64x2-class) min(

1.  [Float64x2](../float64x2-class) other

)
:::

Returns the lane-wise minimum value in [this](../float64x2-class) or
`other`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Float64x2 min(Float64x2 other);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/Float64x2/min.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-developer/gauge/min.md)
[dart:developer](../../dart-developer/dart-developer-library){._links-link}

min property
============

::: {.section .multi-line-signature}
[double](../../dart-core/double-class) min

::: {.features}
final
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
final double min;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-developer/Gauge/min.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediasettingsrange/min.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

min property
============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? min
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get min native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaSettingsRange/min.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/MIN.md)

# MIN

`MIN` is an aggregate function in SQL that returns the lowest value in a set of values. It works with numeric, date, or string data types, selecting the minimum value from a specified column. Often used in conjunction with `GROUP BY`, `MIN` can find the smallest value within each group. This functio
n is useful for various data analysis tasks, such as identifying the lowest price, earliest date, or alphabetically first name in a dataset.

Visit the following resources to learn more:

- [@article@SQL MAX & MIN](https://www.programiz.com/sql/min-and-max)
- [@video@COUNT, SUM, AVG, MIN, MAX (SQL) - Aggregating Data](https://www.youtube.com/watch?v=muwEdPsx534)

## 관련 로드맵
- [[sql|sql]]
