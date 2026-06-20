\<number\>
==========

The `<number>` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[data type](css_types.md) represents a number, being either an integer or a
number with a fractional component.

Syntax
------

The syntax of `<number>` extends the syntax of [`<integer>`](integer.md). A
fractional value is represented by a `.` followed by one or more decimal
digits, and may be appended to an integer. There is no unit associated
with numbers.

Interpolation
-------------

When animated, values of the `<number>` CSS data type are interpolated
as real, floating-point numbers. The speed of the interpolation is
determined by the [easing function](easing-function.md) associated with the
animation.

Examples
--------

### Valid numbers

```
12          A raw <integer> is also a <number>.
4.01        Positive fraction
-456.8      Negative fraction
0.0         Zero
+0.0        Zero, with a leading +
-0.0        Zero, with a leading -
.60         Fractional number without a leading zero
10e3        Scientific notation
-3.4e-2     Complicated scientific notation
```

### Invalid numbers

```
12.         Decimal points must be followed by at least one digit.
+-12.2      Only one leading +/- is allowed.
12.1.1      Only one decimal point is allowed.
```

Specifications
--------------

  -----------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------

  [CSS Values and Units Module Level 4\
  [\# numbers]](https://drafts.csswg.org/css-values/#numbers)

  -----------------------------------------------------------------------

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

`number`

1

12

1

5

2

1

4.4

18

4

10.1

1

1.0

`scientific_notation`

43

12

29

11

30

10.1

43

43

29

30

10.3

4.0

See also
--------

- [`<integer>`](integer.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/number>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/number.md)
Number
======

 
`Number` values represent floating-point numbers like `37` or `-9.25`.

The `Number` constructor contains constants and methods for working with
numbers. Values of other types can be converted to numbers using the
`Number()` function.


 
Description
-----------

 
Numbers are most commonly expressed in literal forms like `255` or
`3.14159`. The [lexical grammar](../lexical_grammar#numeric_literals)
contains a more detailed reference.

 
 
[js]


```js
255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)
```


A number literal like `37` in JavaScript code is a floating-point value,
not an integer. There is no separate integer type in common everyday
use. (JavaScript also has a [`BigInt`](bigint) type, but it\'s not
designed to replace Number for everyday uses. `37` is still a number,
not a BigInt.)

When used as a function, `Number(value)` converts a string or other
value to the Number type. If the value can\'t be converted, it returns
[`NaN`](nan).

 
 
[js]


```js
Number("123"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN
```




 
### Number encoding 

 
The JavaScript `Number` type is a [double-precision 64-bit binary format
IEEE
754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format)
value, like `double` in Java or C\#. This means it can represent
fractional values, but there are some limits to the stored number\'s
magnitude and precision. Very briefly, an IEEE 754 double-precision
number uses 64 bits to represent 3 parts:

-   1 bit for the *sign* (positive or negative)
-   11 bits for the *exponent* (-1022 to 1023)
-   52 bits for the *mantissa* (representing a number between 0 and 1)

The mantissa (also called *significand*) is the part of the number
representing the actual value (significant digits). The exponent is the
power of 2 that the mantissa should be multiplied by. Thinking about it
as scientific notation:

$$\text{Number} = ({- 1})^{\text{sign}} \cdot (1 + \text{mantissa}) \cdot 2^{\text{exponent}}$$

The mantissa is stored with 52 bits, interpreted as digits after `1.…`
in a binary fractional number. Therefore, the mantissa\'s precision is
2^-52^ (obtainable via [`Number.EPSILON`](number/epsilon)), or about 15
to 17 decimal places; arithmetic above that level of precision is
subject to
[rounding](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Representable_numbers,_conversion_and_rounding).

The largest value a number can hold is 2^1023^ × (2 - 2^-52^) (with the
exponent being 1023 and the mantissa being 0.1111... in base 2), which
is obtainable via [`Number.MAX_VALUE`](number/max_value). Values higher
than that are replaced with the special number constant
[`Infinity`](infinity).

Integers can only be represented without loss of precision in the range
-2^53^ + 1 to 2^53^ - 1, inclusive (obtainable via
[`Number.MIN_SAFE_INTEGER`](number/min_safe_integer) and
[`Number.MAX_SAFE_INTEGER`](number/max_safe_integer)), because the
mantissa can only hold 53 bits (including the leading 1).

More details on this are described in the [ECMAScript
standard](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-ecmascript-language-types-number-type).



 
### Number coercion 

 
Many built-in operations that expect numbers first coerce their
arguments to numbers (which is largely why `Number` objects behave
similarly to number primitives). [The
operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber)
can be summarized as follows:

-   Numbers are returned as-is.
-   [`undefined`](undefined) turns into [`NaN`](nan).
-   [`null`](../operators/null) turns into `0`.
-   `true` turns into `1`; `false` turns into `0`.
-   Strings are converted by parsing them as if they contain a [number
    literal](../lexical_grammar#numeric_literals). Parsing failure
    results in `NaN`. There are some minor differences compared to an
    actual number literal:
    -   Leading and trailing whitespace/line terminators are ignored.
    -   A leading `0` digit does not cause the number to become an octal
        literal (or get rejected in strict mode).
    -   `+` and `-` are allowed at the start of the string to indicate
        its sign. (In actual code, they \"look like\" part of the
        literal, but are actually separate unary operators.) However,
        the sign can only appear once, and must not be followed by
        whitespace.
    -   `Infinity` and `-Infinity` are recognized as literals. In actual
        code, they are global variables.
    -   Empty or whitespace-only strings are converted to `0`.
    -   [Numeric separators](../lexical_grammar#numeric_separators) are
        not allowed.
-   [BigInts](bigint) throw a [`TypeError`](typeerror) to prevent
    unintended implicit coercion causing loss of precision.
-   [Symbols](symbol) throw a [`TypeError`](typeerror).
-   Objects are first [converted to a
    primitive](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion)
    by calling their [`[@@toPrimitive]()`](symbol/toprimitive) (with
    `"number"` as hint), `valueOf()`, and `toString()` methods, in that
    order. The resulting primitive is then converted to a number.

There are two ways to achieve nearly the same effect in JavaScript.

-   [Unary plus](../operators/unary_plus): `+x` does exactly the number
    coercion steps explained above to convert `x`.
-   The [`Number()`](number/number) function: `Number(x)` uses the same
    algorithm to convert `x`, except that [BigInts](bigint) don\'t throw
    a [`TypeError`](typeerror), but return their number value, with
    possible loss of precision.

[`Number.parseFloat()`](number/parsefloat) and
[`Number.parseInt()`](number/parseint) are similar to `Number()` but
only convert strings, and have slightly different parsing rules. For
example, `parseInt()` doesn\'t recognize the decimal point, and
`parseFloat()` doesn\'t recognize the `0x` prefix.

#### Integer conversion 

Some operations expect integers, most notably those that work with
array/string indices, date/time components, and number radixes. After
performing the number coercion steps above, the result is
[truncated](math/trunc) to an integer (by discarding the fractional
part). If the number is ±Infinity, it\'s returned as-is. If the number
is `NaN` or `-0`, it\'s returned as `0`. The result is therefore always
an integer (which is not `-0`) or ±Infinity.

Notably, when converted to integers, both `undefined` and `null` become
`0`, because `undefined` is converted to `NaN`, which also becomes `0`.

#### Fixed-width number conversion 

JavaScript has some lower-level functions that deal with the binary
encoding of integer numbers, most notably [bitwise
operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators)
and [`TypedArray`](typedarray) objects. Bitwise operators always convert
the operands to 32-bit integers. In these cases, after converting the
value to a number, the number is then normalized to the given width by
first [truncating](math/trunc) the fractional part and then taking the
lowest bits in the integer\'s two\'s complement encoding.

 
 
[js]


```js
new Int32Array([1.1, 1.9, -1.1, -1.9]); // Int32Array(4) [ 1, 1, -1, -1 ]

new Int8Array([257, -257]); // Int8Array(2) [ 1, -1 ]
// 257 = 0001 0000 0001
//     =      0000 0001 (mod 2^8)
//     = 1
// -257 = 1110 1111 1111
//      =      1111 1111 (mod 2^8)
//      = -1 (as signed integer)

new Uint8Array([257, -257]); // Uint8Array(2) [ 1, 255 ]
// -257 = 1110 1111 1111
//      =      1111 1111 (mod 2^8)
//      = 255 (as unsigned integer)
```




 
Constructor
-----------

 

[`Number()`](number/number)

:   Creates a new `Number` value.

When `Number` is called as a constructor (with `new`), it creates a
[`Number`](number) object, which is **not** a primitive. For example,
`typeof new Number(42) === "object"`, and `new Number(42) !== 42`
(although `new Number(42) == 42`).

 
**Warning:** You should rarely find yourself using `Number` as a
constructor.




 
Static properties 
-----------------

 

[`Number.EPSILON`](number/epsilon)

:   The smallest interval between two representable numbers.

[`Number.MAX_SAFE_INTEGER`](number/max_safe_integer)

:   The maximum safe integer in JavaScript (2^53^ - 1).

[`Number.MAX_VALUE`](number/max_value)

:   The largest positive representable number.

[`Number.MIN_SAFE_INTEGER`](number/min_safe_integer)

:   The minimum safe integer in JavaScript (-(2^53^ - 1)).

[`Number.MIN_VALUE`](number/min_value)

:   The smallest positive representable number---that is, the positive
    number closest to zero (without actually being zero).

[`Number.NaN`](number/nan)

:   Special \"**N**ot **a** **N**umber\" value.

[`Number.NEGATIVE_INFINITY`](number/negative_infinity)

:   Special value representing negative infinity. Returned on overflow.

[`Number.POSITIVE_INFINITY`](number/positive_infinity)

:   Special value representing infinity. Returned on overflow.



 
Static methods 
--------------

 

[`Number.isFinite()`](number/isfinite)

:   Determine whether the passed value is a finite number.

[`Number.isInteger()`](number/isinteger)

:   Determine whether the passed value is an integer.

[`Number.isNaN()`](number/isnan)

:   Determine whether the passed value is `NaN`.

[`Number.isSafeInteger()`](number/issafeinteger)

:   Determine whether the passed value is a safe integer (number between
    -(2^53^ - 1) and 2^53^ - 1).

[`Number.parseFloat()`](number/parsefloat)

:   This is the same as the global [`parseFloat()`](parsefloat)
    function.

[`Number.parseInt()`](number/parseint)

:   This is the same as the global [`parseInt()`](parseint) function.



 
Instance properties 
-------------------

 
These properties are defined on `Number.prototype` and shared by all
`Number` instances.

[`Number.prototype.constructor`](object/constructor)

:   The constructor function that created the instance object. For
    `Number` instances, the initial value is the
    [`Number`](number/number) constructor.



 
Instance methods 
----------------

 

[`Number.prototype.toExponential()`](number/toexponential)

:   Returns a string representing the number in exponential notation.

[`Number.prototype.toFixed()`](number/tofixed)

:   Returns a string representing the number in fixed-point notation.

[`Number.prototype.toLocaleString()`](number/tolocalestring)

:   Returns a string with a language sensitive representation of this
    number. Overrides the
    [`Object.prototype.toLocaleString()`](object/tolocalestring) method.

[`Number.prototype.toPrecision()`](number/toprecision)

:   Returns a string representing the number to a specified precision in
    fixed-point or exponential notation.

[`Number.prototype.toString()`](number/tostring)

:   Returns a string representing the specified object in the specified
    *radix* (\"base\"). Overrides the
    [`Object.prototype.toString()`](object/tostring) method.

[`Number.prototype.valueOf()`](number/valueof)

:   Returns the primitive value of the specified object. Overrides the
    [`Object.prototype.valueOf()`](object/valueof) method.



 
Examples
--------


 
### Using the Number object to assign values to numeric variables 

 
The following example uses the `Number` object\'s properties to assign
values to several numeric variables:

 
 
[js]


```js
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
```




 
### Integer range for Number 

 
The following example shows the minimum and maximum integer values that
can be represented as `Number` object.

 
 
[js]


```js
const biggestInt = Number.MAX_SAFE_INTEGER; // (2**53 - 1) => 9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991
```


When parsing data that has been serialized to JSON, integer values
falling outside of this range can be expected to become corrupted when
JSON parser coerces them to `Number` type.

A possible workaround is to use [`String`](string) instead.

Larger numbers can be represented using the [`BigInt`](bigint) type.



 
### Using Number() to convert a Date object 

 
The following example converts the [`Date`](date) object to a numerical
value using `Number` as a function:

 
 
[js]


```js
const d = new Date("1995-12-17T03:24:00");
console.log(Number(d));
```


This logs `819199440000`.



 
### Convert numeric strings and null to numbers 

 
 
 
[js]


```js
Number("123"); // 123
Number("123") === 123; // true
Number("12.3"); // 12.3
Number("12.00"); // 12
Number("123e-1"); // 12.3
Number(""); // 0
Number(null); // 0
Number("0x11"); // 17
Number("0b11"); // 3
Number("0o11"); // 9
Number("foo"); // NaN
Number("100a"); // NaN
Number("-Infinity"); // -Infinity
```




Specifications
--------------

 
  -----------------------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-number-objects]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number-objects)

  -----------------------------------------------------------------------------------------------------------


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

`EPSILON`

34

12

25

21

9

34

25

21

9

2.0

37

1.0

0.12.0

`MAX_SAFE_INTEGER`

34

12

31

21

9

34

31

21

9

2.0

37

1.0

0.12.0

`MAX_VALUE`

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

`MIN_SAFE_INTEGER`

34

12

31

21

9

34

31

21

9

2.0

37

1.0

0.12.0

`MIN_VALUE`

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

`NEGATIVE_INFINITY`

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

`NaN`

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

`Number`

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

`POSITIVE_INFINITY`

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

`Number`

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

`isFinite`

19

12

16

15

9

25

16

14

9

1.5

4.4

1.0

0.10.0

`isInteger`

34

12

16

21

9

34

16

21

9

2.0

37

1.0

0.12.0

`isNaN`

25

12

15

15

9

25

15

14

9

1.5

4.4

1.0

0.10.0

`isSafeInteger`

34

12

32

21

9

34

32

21

9

2.0

37

1.0

0.12.0

`parseFloat`

34

12

25

21

9

34

25

21

9

2.0

37

1.0

0.12.0

`parseInt`

34

12

25

21

9

34

25

21

9

2.0

37

1.0

0.12.0

`toExponential`

1

12

1

7

2

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`toFixed`

1

12

1

7

2

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`toLocaleString`

1

12Before Edge 18, numbers are rounded to 15 decimal digits. For example,
`(1000000000000005).toLocaleString('en-US')` returns
`"1,000,000,000,000,010"`.

1

4

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`toPrecision`

1

12

1

7

2

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`toString`

1

12

1

4

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`valueOf`

1

12

1

4

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

 
-   [Polyfill of modern `Number` behavior (with support binary and octal
    literals) in
    `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
-   [`NaN`](nan)
-   [Arithmetic
    operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)
-   [`Math`](math)
-   [`BigInt`](bigint)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/html/element/input/number.md)
\<input type=\"number\"\>
=========================

[`<input>`](../input) elements of type `number` are used to let the user
enter a number. They include built-in validation to reject non-numerical
entries.

The browser may opt to provide stepper arrows to let the user increase
and decrease the value using their mouse or by tapping with a fingertip.

Try it
------

On browsers that don\'t support inputs of type `number`, a `number`
input falls back to type `text`.

Value
-----

A number representing the value of the number entered into the input.
You can set a default value for the input by including a number inside
the [`value`](../input#value) attribute, like so:

[html]

```html
<input id="number" type="number" value="42" />
```

Additional attributes
---------------------

In addition to the attributes commonly supported by all
[`<input>`](../input) types, inputs of type `number` support these
attributes.

### `list`

The values of the list attribute is the
[`id`](https://developer.mozilla.org/en-US/docs/Web/API/Element/id) of a
[`<datalist>`](../datalist) element located in the same document. The
[`<datalist>`](../datalist) provides a list of predefined values to
suggest to the user for this input. Any values in the list that are not
compatible with the [`type`](../input#type) are not included in the
suggested options. The values provided are suggestions, not
requirements: users can select from this predefined list or provide a
different value.

### `max`

The maximum value to accept for this input. If the
[`value`](../input#value) entered into the element exceeds this, the
element fails [constraint validation](../../constraint_validation). If
the value of the `max` attribute isn\'t a number, then the element has
no maximum value.

This value must be greater than or equal to the value of the `min`
attribute.

### `min`

The minimum value to accept for this input. If the
[`value`](../input#value) of the element is less than this, the element
fails [constraint validation](../../constraint_validation). If a value
is specified for `min` that isn\'t a valid number, the input has no
minimum value.

This value must be less than or equal to the value of the `max`
attribute.

### `placeholder`

The `placeholder` attribute is a string that provides a brief hint to
the user as to what kind of information is expected in the field. It
should be a word or short phrase that demonstrates the expected type of
data, rather than an explanatory message. The text *must not* include
carriage returns or line feeds.

If the control\'s content has one directionality
([LTR](https://developer.mozilla.org/en-US/docs/Glossary/LTR) or
[RTL](https://developer.mozilla.org/en-US/docs/Glossary/RTL)) but needs
to present the placeholder in the opposite directionality, you can use
Unicode bidirectional algorithm formatting characters to override
directionality within the placeholder; see [How to use Unicode controls
for bidi
text](https://www.w3.org/International/questions/qa-bidi-unicode-controls)
for more information.

**Note:** Avoid using the `placeholder` attribute if you can. It is not
as semantically useful as other ways to explain your form, and can cause
unexpected technical issues with your content. See [`<input>`
labels](../input#labels) for more information.

### `readonly`

A Boolean attribute which, if present, means this field cannot be edited
by the user. Its `value` can, however, still be changed by JavaScript
code directly setting the
[`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
`value` property.

**Note:** Because a read-only field cannot have a value, `required` does
not have any effect on inputs with the `readonly` attribute also
specified.

### `step`

The `step` attribute is a number that specifies the granularity that the
value must adhere to, or the special value `any`, which is described
below. Only values which are equal to the basis for stepping
([`min`](#min) if specified, [`value`](../input#value) otherwise, and an
appropriate default value if neither of those is provided) are valid.

A string value of `any` means that no stepping is implied, and any value
is allowed (barring other constraints, such as [`min`](#min) and
[`max`](#max)).

**Note:** When the data entered by the user doesn\'t adhere to the
stepping configuration, the [user
agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent) may
round to the nearest valid value, preferring numbers in the positive
direction when there are two equally close options.

The default stepping value for `number` inputs is `1`, allowing only
integers to be entered---*unless* the stepping base is not an integer.

Using number inputs
-------------------

The `number` input type should only be used for incremental numbers,
especially when spinbutton incrementing and decrementing are helpful to
user experience. The `number` input type is not appropriate for values
that happen to only consist of numbers but aren\'t strictly speaking a
number, such as postal codes in many countries or credit card numbers.
For non-numeric inputs, consider using a different input type, such as
[`<input type="tel">`](tel) or other [`<input>`](../input) type with the
[`inputmode`](_Resources/Markup%20And%20Styling/html/global_attributes/index.md#inputmode) attribute:

[html]

```html
<input type="text" inputmode="numeric" pattern="\d*" />
```

`<input type="number">` elements can help simplify your work when
building the user interface and logic for entering numbers into a form.
When you create a number input with the proper `type` value, `number`,
you get automatic validation that the entered text is a number, and
usually a set of up and down buttons to step the value up and down.

**Warning:** Logically, you should not be able to enter characters
inside a number input other than numbers. Some browsers allow invalid
characters, others do not; see [Firefox bug
1398528](https://bugzil.la/1398528).

**Note:** A user can tinker with your HTML behind the scenes, so your
site *must not* use simple client-side validation for any security
purposes. You *must* verify on the server side any transaction in which
the provided value may have security implications of any kind.

Mobile browsers further help with the user experience by showing a
special keyboard more suited for entering numbers when the user tries to
enter a value.

### A simple number input

In its most basic form, a number input can be implemented like this:

[html]

```html
<label for="ticketNum">Number of tickets you would like to buy:</label>
<input id="ticketNum" type="number" name="ticketNum" value="0" />
```

A number input is considered valid when empty and when a single number
is entered, but is otherwise invalid. If the
[`required`](../input#required) attribute is used, the input is no
longer considered valid when empty.

**Note:** Any number is an acceptable value, as long as it is a [valid
floating point
number](https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number)
(that is, not
[NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
or
[Infinity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)).

### Placeholders

Sometimes it\'s helpful to offer an in-context hint as to what form the
input data should take. This can be especially important if the page
design doesn\'t offer descriptive labels for each [`<input>`](../input).
This is where **placeholders** come in. A placeholder is a value most
commonly used to provide a hint as to the format the input should take
`value`. It is displayed inside the edit box when the element\'s `value`
is `""`. Once data is entered into the box, the placeholder disappears;
if the box is emptied, the placeholder reappears.

Here, we have an `number` input with the placeholder
\"`Multiple of 10`\". Note how the placeholder disappears and reappears
as you manipulate the contents of the edit field.

[html]

```html
<input type="number" placeholder="Multiple of 10" />
```

### Controlling step size

By default, the up and down buttons provided for you to step the number
up and down will step the value up and down by 1. You can change this by
providing a [`step`](../input#step) attribute, which takes as its value
a number specifying the step amount. Our above example contains a
placeholder saying that the value should be a multiple of 10, so it
makes sense to add a `step` value of `10`:

[html]

```html
<input type="number" placeholder="multiple of 10" step="10" />
```

In this example, you should find that the up and down step arrows will
increase and decrease the value by 10 each time, not 1. You can still
manually enter a number that\'s not a multiple of 10, but it will be
considered invalid.

### Specifying minimum and maximum values

You can use the [`min`](../input#min) and [`max`](../input#max)
attributes to specify a minimum and maximum value that the field can
have. For example, let\'s give our example a minimum of `0`, and a
maximum of `100`:

[html]

```html
<input type="number" placeholder="multiple of 10" step="10" min="0" max="100" />
```

In this updated version, you should find that the up and down step
buttons will not allow you to go below 0 or above 100. You can still
manually enter a number outside these bounds, but it will be considered
invalid.

### Allowing decimal values

One issue with number inputs is that their step size is 1 by default. If
you try to enter a number with a decimal (such as \"1.0\"), it will be
considered invalid. If you want to enter a value that requires decimals,
you\'ll need to reflect this in the `step` value (e.g. `step="0.01"` to
allow decimals to two decimal places). Here\'s a simple example:

[html]

```html
<input type="number" placeholder="1.0" step="0.01" min="0" max="10" />
```

See that this example allows any value between `0.0` and `10.0`, with
decimals to two places. For example, \"9.52\" is valid, but \"9.521\" is
not.

### Controlling input size

[`<input>`](../input) elements of type `number` don\'t support form
sizing attributes such as [`size`](../input#size). You\'ll have to
resort to [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) to
change the size of these controls.

For example, to adjust the width of the input to be only as wide as is
needed to enter a three-digit number, we can change our HTML to include
an [`id`](_Resources/Markup%20And%20Styling/html/global_attributes/index.md#id) and to shorten our placeholder
since the field will be too narrow for the text we have been using so
far:

[html]

```html
<input
  type="number"
  placeholder="x10"
  step="10"
  min="0"
  max="100"
  id="number" />
```

Then we add some CSS to narrow the width of the element with the `id`
selector `#number`:

[css]

```css

# number {

  width: 3em;
}

```

The result looks like this:

### Offering suggested values

You can provide a list of default options from which the user can select
by specifying the [`list`](../input#list) attribute, which contains as
its value the [`id`](_Resources/Markup%20And%20Styling/html/global_attributes/index.md#id) of a
[`<datalist>`](../datalist), which in turn contains one
[`<option>`](../option) element per suggested value. Each `option`\'s
`value` is the corresponding suggested value for the number entry box.

[html]

```html
<input id="ticketNum" type="number" name="ticketNum" list="defaultNumbers" />
<span class="validity"></span>

<datalist id="defaultNumbers">
  <option value="10045678"></option>
  <option value="103421"></option>
  <option value="11111111"></option>
  <option value="12345678"></option>
  <option value="12999922"></option>
</datalist>
```

Validation
----------

We have already mentioned a number of validation features of `number`
inputs, but let\'s review them now:

- `<input type="number">` elements automatically invalidate any entry
    that isn\'t a number (or empty, unless `required` is specified).
- You can use the [`required`](../input#required) attribute to make an
    empty entry invalid. (In other words, the input *must* be filled
    in.)
- You can use the [`step`](../input#step) attribute to constrain valid
    values to a certain set of steps (e.g., multiples of 10).
- You can use the [`min`](../input#min) and [`max`](../input#max)
    attributes to constrain valid values to lower and upper bounds.

The following example exhibits all of the above features, as well as
using some CSS to display valid and invalid icons, depending on the
`input`\'s value:

[html]

```html
<form>
  <div>
    <label for="balloons">Number of balloons to order (multiples of 10):</label>
    <input
      id="balloons"
      type="number"
      name="balloons"
      step="10"
      min="0"
      max="100"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" />
  </div>
</form>
```

Try submitting the form with different invalid values entered --- e.g.,
no value; a value below 0 or above 100; a value that is not a multiple
of 10; or a non-numerical value --- and see how the error messages the
browser gives you differ with different ones.

The CSS applied to this example is as follows:

[css]

```css
div {
  margin-bottom: 10px;
}

input:invalid + span::after {
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  content: "✓";
  padding-left: 5px;
}

```

Here we use the
[`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)
and [`:valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid)
pseudo classes to display an appropriate invalid or valid icon as
generated content on the adjacent [`<span>`](../span) element, as a
visual indicator of validity.

We put it on a separate `<span>` element for added flexibility. Some
browsers don\'t display generated content very effectively on some types
of form inputs. (Read, for example, the section on
[`<input type="date">` validation](date#validation).)

**Warning:** HTML form validation is *not* a substitute for server-side
scripts that ensure that the entered data is in the proper format!

It\'s far too easy for someone to make adjustments to the HTML that
allow them to bypass the validation, or to remove it entirely. It\'s
also possible for someone to bypass your HTML and submit the data
directly to your server.

If your server-side code fails to validate the data it receives,
disaster could strike when improperly-formatted data is submitted (or
data which is too large, is of the wrong type, and so forth).

### Pattern validation

`<input type="number">` elements do not support use of the
[`pattern`](../input#pattern) attribute for making entered values
conform to a specific regex pattern.

The rationale for this is that number inputs won\'t be valid if they
contain anything except numbers, and you can constrain the minimum and
maximum number of valid digits using the [`min`](../input#min) and
[`max`](../input#max) attributes (as explained above).

Examples
--------

We\'ve already covered the fact that by default, the increment is `1`,
and you can use the [`step`](../input#step) attribute to allow decimal
inputs. Let\'s take a closer look.

In the following example is a form for entering the user\'s height. It
defaults to accepting a height in meters, but you can click the relevant
button to change the form to accept feet and inches instead. The input
for the height in meters accepts decimals to two places.

The HTML looks like this:

[html]

```html
<form>
  <div class="metersInputGroup">
    <label for="meters">Enter your height — meters:</label>
    <input
      id="meters"
      type="number"
      name="meters"
      step="0.01"
      min="0"
      placeholder="e.g. 1.78"
      required />
    <span class="validity"></span>
  </div>
  <div class="feetInputGroup" style="display: none;">
    <span>Enter your height — </span>
    <label for="feet">feet:</label>
    <input id="feet" type="number" name="feet" min="0" step="1" />
    <span class="validity"></span>
    <label for="inches">inches:</label>
    <input id="inches" type="number" name="inches" min="0" max="11" step="1" />
    <span class="validity"></span>
  </div>
  <div>
    <input
      type="button"
      class="meters"
      value="Enter height in feet and inches" />
  </div>
  <div>
    <input type="submit" value="Submit form" />
  </div>
</form>
```

You\'ll see that we are using many of the attributes we\'ve already
looked at in the article earlier on. Since we want to accept a meter
value in centimeters, we\'ve set the `step` value to `0.01`, so that
values like *1.78* are not seen as invalid. We\'ve also provided a
placeholder for that input.

We\'ve hidden the feet and inches inputs initially using
`style="display: none;"`, so that meters is the default entry type.

Now, onto the CSS. This looks very similar to the validation styling we
saw before; nothing remarkable here.

[css]

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}

```

And finally, the JavaScript:

[js]

```js
const metersInputGroup = document.querySelector(".metersInputGroup");
const feetInputGroup = document.querySelector(".feetInputGroup");
const metersInput = document.querySelector("#meters");
const feetInput = document.querySelector("#feet");
const inchesInput = document.querySelector("#inches");
const switchBtn = document.querySelector('input[type="button"]');

switchBtn.addEventListener("click", () => {
  if (switchBtn.getAttribute("class") === "meters") {
    switchBtn.setAttribute("class", "feet");
    switchBtn.value = "Enter height in meters";

    metersInputGroup.style.display = "none";
    feetInputGroup.style.display = "block";

    feetInput.setAttribute("required", "");
    inchesInput.setAttribute("required", "");
    metersInput.removeAttribute("required");

    metersInput.value = "";
  } else {
    switchBtn.setAttribute("class", "meters");
    switchBtn.value = "Enter height in feet and inches";

    metersInputGroup.style.display = "block";
    feetInputGroup.style.display = "none";

    feetInput.removeAttribute("required");
    inchesInput.removeAttribute("required");
    metersInput.setAttribute("required", "");

    feetInput.value = "";
    inchesInput.value = "";
  }
});
```

After declaring a few variables, an event listener is added to the
`button` to control the switching mechanism. This is pretty simple,
mostly involving changing over the button\'s `class` and
[`<label>`](../label), and updating the display values of the two sets
of inputs when the button is pressed.

(Note that we\'re not converting back and forth between meters and
feet/inches here, which a real-life web application would probably do.)

**Note:** When the user clicks the button, the `required` attribute(s)
are removed from the input(s) we are hiding, and empty the `value`
attribute(s). This is so the form can be submitted if both input sets
aren\'t filled in. It also ensures that the form won\'t submit data that
the user didn\'t mean to.

If you didn\'t do this, you\'d have to fill in both feet/inches **and**
meters to submit the form!

Accessibility
-------------

The implicit
[role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
for the `<input type="number">` element is
[`spinbutton`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role).
If spinbutton is not an important feature for your form control,
consider *not* using `type="number"`. Instead, use
[`inputmode="numeric"`](../../global_attributes/inputmode) along with a
[`pattern`](../../attributes/pattern) attribute that limits the
characters to numbers and associated characters. With
`<input type="number">`, there is a risk of users accidentally
incrementing a number when they\'re trying to do something else.
Additionally, if users try to enter something that\'s not a number,
there\'s no explicit feedback about what they\'re doing wrong.

Also consider using the [`autocomplete`](../../attributes/autocomplete)
attribute to help users complete forms more quickly and with fewer
chances of errors. For example, to enable autofill on a zip code field,
set `autocomplete="postal-code"`.

Technical summary
-----------------

  --------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----
  **[Value](#value)**               A [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) representing a number, or empty
  **Events**                        [`change`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) and [`input`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
  **Supported common attributes**   [`autocomplete`](../input#autocomplete), [`list`](../input#list), [`placeholder`](../input#placeholder), [`readonly`](../input#readonly)
  **IDL attributes**                `list`, `value`, `valueAsNumber`
  **DOM interface**                 [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
  **Methods**                       [`select()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select), [`stepUp()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp), [`stepDown()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDow
n)
  **Implicit ARIA Role**            `spinbutton`
  --------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----

Specifications
--------------

  --------------------------------------------------------------------------------------------------------------------

Specification
  --------------------------------------------------------------------------------------------------------------------

  [HTML Standard\
  [\#
  number-state-(type=number)]](https://html.spec.whatwg.org/multipage/input.html#number-state-(type=number))

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

`number`

7

12

29

10

15

5.1

4.4

18

29

14

5

1.0

See also
--------

- [HTML forms
    guide](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [`<input>`](../input)
- [`<input type="tel">`](tel)
- [Compatibility of CSS
    properties](https://developer.mozilla.org/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
- [Article: Why Gov.UK changed the input type for
    numbers](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number>>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/number/number.md)
Number() constructor
====================

 
The `Number()` constructor creates [`Number`](../number) objects. When
called as a function, it returns primitive values of type Number.


 
Syntax
------

 
 
 
[js]


```js
new Number(value)
Number(value)
```


 
**Note:** `Number()` can be called with or without
[`new`](../../operators/new), but with different effects. See [Return
value](#return_value).




 
### Parameters

 

[`value`](#value)

:   The numeric value of the object being created.



 
### Return value 

 
When `Number` is called as a constructor (with
[`new`](../../operators/new)), it creates a [`Number`](../number)
object, which is **not** a primitive.

When `Number` is called as a function, it [coerces the parameter to a
number primitive](../number#number_coercion). [BigInts](../bigint) are
converted to numbers. If the value can\'t be converted, it returns
[`NaN`](../nan).

 
**Warning:** You should rarely find yourself using `Number` as a
constructor.




 
Examples
--------


 
### Creating Number objects 

 
 
 
[js]


```js
const a = new Number("123"); // a === 123 is false
const b = Number("123"); // b === 123 is true
a instanceof Number; // is true
b instanceof Number; // is false
typeof a; // "object"
typeof b; // "number"
```




 
### Using Number() to convert a BigInt to a number 

 
`Number()` is the only case where a BigInt can be converted to a number
without throwing, because it\'s very explicit.

 
 
[js]


```js
+1n; // TypeError: Cannot convert a BigInt value to a number
0 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```


 
 
[js]


```js
Number(1n); // 1
```


Note that this may result in loss of precision, if the BigInt is too
large to be [safely represented](issafeinteger).

 
 
[js]


```js
BigInt(Number(2n ** 54n + 1n)) === 2n ** 54n + 1n; // false
```




Specifications
--------------

 
  -------------------------------------------------------------------------------------------------------------------
  Specification
  -------------------------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-number-constructor]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-number-constructor)

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

`Number`

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

 
-   [Polyfill of modern `Number` behavior (with support binary and octal
    literals) in
    `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
-   [`NaN`](../nan)
-   [`Math`](../math)
-   [`BigInt`](../bigint)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/css/number.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

number method
=============

::: {.section .multi-line-signature}
[CssUnitValue](../cssunitvalue-class) number(

1.  [num](../../dart-core/num-class) value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static CssUnitValue number(num value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Css/number.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/number.md)

# number

The `Number` data type in JavaScript represents floating-point numbers, such as 37 or -9.25. The `Number` constructor provides constants and methods to work with numbers, and values of other types can be converted to numbers using the `Number()` function.

## Example

```js
let num1 = 255; // integer
let num2 = 255.0; // floating-point number with no fractional part
let num3 = 0xff; // hexadecimal notation
let num4 = 0b11111111; // binary notation
let num5 = 0.255e3; // exponential notation

console.log(num1 === num2); // true
console.log(num1 === num3); // true
console.log(num1 === num4); // true
console.log(num1 === num5); // true
```

In this example:

- `255` and `255.0` are equivalent, as JavaScript treats both as the same number.
- `0xff` represents `255` in hexadecimal notation.
- `0b11111111` represents `255` in binary notation.
- `0.255e3` is `255` in exponential notation.
- All these different representations are equal to `255` in JavaScript.


## 관련 로드맵
- [[JavaScript|javascript]]
