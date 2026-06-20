range
=====

When defining custom counter styles, the `range` descriptor lets the
author specify a range of counter values over which the style is
applied. If a counter value is outside the specified range, then the
fallback style will be used to construct the representation of that
marker.

Syntax
------

[css]

```css
/* Keyword value */
range: auto;

/* Range values */
range: 2 5;
range: infinite 10;
range: 6 infinite;
range: infinite infinite;

/* Multiple range values */
range:
  2 5,
  8 10;
range:
  infinite 6,
  10 infinite;
```

### Values

[`auto`](#auto)

:   The range depends on the counter system:

    -   For cyclic, numeric, and fixed systems, the range is negative
        infinity to positive infinity.
    -   For alphabetic and symbolic systems, the range is 1 to positive
        infinity.
    -   For additive systems, the range is 0 to positive infinity.
    -   For extends systems, the range is whatever auto would produce
        for the extended system; if extending a complex predefined style
        (§7 Complex Predefined Counter Styles), the range is the
        style\'s defined range.

[`[ [ | infinite ] ]#`](#_infinite_2_)

:   Defines a comma-separated list of ranges. For each individual range,
    the first value is the lower bound and the second value is the upper
    bound. A range is inclusive, that means it always contains both, the
    lower and upper bound numbers. If infinite is used as the first
    value in a range, it represents negative infinity; if it is used as
    the second value, it represents positive infinity. The range of the
    counter style is the union of all the ranges defined in the list. If
    the lower bound of any range is higher than the upper bound, the
    entire descriptor is invalid and will be ignored.

Description
-----------

The value of the range descriptor can be either auto or a comma
separated list of lower and upper bounds specified as integers.

If value is auto, then for cyclic, numeric, and fixed system, the range
will be from negative infinity to positive infinity. For alphabetic and
symbolic systems, range will be from 1 to positive infinity. For
additive systems, auto will result in the range 0 to positive infinity.
For extends systems, the range is whatever auto will produce for the
extended system.

When range is specified as integers, the value `infinite` can be used to
denote infinity. If *infinite* is specified as the first value in a
range, then it is interpreted as negative infinity. If used as upper
bound, it is taken as positive infinity.

Formal definition
-----------------

  ------------------------------------- ---------------------------------------
  Related [at-rule](at-rule.md)         [`@counter-style`](@counter-style.md)
  [Initial value](initial_value.md)     `auto`
  [Computed value](computed_value.md)   as specified
  ------------------------------------- ---------------------------------------

Formal syntax
-------------

```
range = 
  [ [ <integer> | infinite ] ]#  |
  auto                              
```

Examples
--------

### Setting counter style over a range

[html]

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
  <li>Eight</li>
  <li>Nine</li>
  <li>Ten</li>
</ul>
```

[css]

```css
@counter-style range-multi-example {
  system: cyclic;
  symbols: "\25A0" "\25A1";
  range:
    2 4,
    7 9;
}

.list {
  list-style: range-multi-example;
}
```

The above list will display as follows:

:

Specifications
--------------

  -------------------------------------------------------------------------------------------------

Specification
  -------------------------------------------------------------------------------------------------

  [CSS Counter Styles Level 3\
  [\#
  counter-style-range]](https://drafts.csswg.org/css-counter-styles/#counter-style-range)

  -------------------------------------------------------------------------------------------------

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

`range`

91

91

33

No

77

17

91

91

33

64

17

16.0

See also
--------

- [`list-style`](list-style.md),
    [`list-style-image`](list-style-image.md),
    [`list-style-position`](list-style-position.md)
- [`symbols()`](symbols.md), the functional notation creating anonymous
    counter styles.

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style/range>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/html/element/input/range.md)
\<input type=\"range\"\>
========================

[`<input>`](../input) elements of type `range` let the user specify a
numeric value which must be no less than a given value, and no more than
another given value. The precise value, however, is not considered
important. This is typically represented using a slider or dial control
rather than a text entry box like the [number](number) input type.

Because this kind of widget is imprecise, it should only be used if the
control\'s exact value isn\'t important.

Try it
------

If the user\'s browser doesn\'t support type `range`, it will fall back
and treat it as a `text` input.

### Validation

There is no pattern validation available; however, the following forms
of automatic validation are performed:

- If the [`value`](../input#value) is set to something which can\'t be
    converted into a valid floating-point number, validation fails
    because the input is suffering from a bad input.
- The value won\'t be less than [`min`](../input#min). The default
    is 0.
- The value won\'t be greater than [`max`](../input#max). The default
    is 100.
- The value will be a multiple of [`step`](../input#step). The default
    is 1.

### Value

The [`value`](../input#value) attribute contains a string which contains
a string representation of the selected number. The value is never an
empty string (`""`). The default value is halfway between the specified
minimum and maximum---unless the maximum is actually less than the
minimum, in which case the default is set to the value of the `min`
attribute. The algorithm for determining the default value is:

[js]

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

If an attempt is made to set the value lower than the minimum, it is set
to the minimum. Similarly, an attempt to set the value higher than the
maximum results in it being set to the maximum.

Additional attributes
---------------------

In addition to the attributes shared by all [`<input>`](../input)
elements, range inputs offer the following attributes.

### list

The value of the `list` attribute is the
[`id`](https://developer.mozilla.org/en-US/docs/Web/API/Element/id) of a
[`<datalist>`](../datalist) element located in the same document. The
[`<datalist>`](../datalist) provides a list of predefined values to
suggest to the user for this input. Any values in the list that are not
compatible with the [`type`](../input#type) are not included in the
suggested options. The values provided are suggestions, not
requirements: users can select from this predefined list or provide a
different value.

See the [adding tick marks](#adding_tick_marks) below for an example of
how the options on a range are denoted in supported browsers.

### max

The greatest value in the range of permitted values. If the
[`value`](../input#value) entered into the element exceeds this, the
element fails [constraint validation](../../constraint_validation). If
the value of the [`max`](../../attributes/max) attribute isn\'t a
number, then the element has no maximum value.

This value must be greater than or equal to the value of the
[`min`](../../attributes/min) attribute. See the HTML
[`max`](../../attributes/max) attribute.

### min

The lowest value in the range of permitted values. If the
[`value`](../input#value) of the element is less than this, the element
fails [constraint validation](../../constraint_validation). If a value
is specified for `min` that isn\'t a valid number, the input has no
minimum value.

This value must be less than or equal to the value of the
[`max`](../../attributes/max) attribute. See the HTML
[`min`](../../attributes/min) attribute.

**Note:** If the `min` and `max` values are equal or the `max` value is
lower than the `min` value the user will not be able to interact with
the range.

### step

The `step` attribute is a number that specifies the granularity that the
value must adhere to. Only values that match the specified stepping
interval ([`min`](#min) if specified, [`value`](../input#value)
otherwise, or an appropriate default value if neither of those is
provided) are valid.

The `step` attribute can also be set to the `any` string value. This
`step` value means that no stepping interval is implied and any value is
allowed in the specified range (barring other constraints, such as
[`min`](#min) and [`max`](#max)). See the [Setting step to the `any`
value](#setting_step_to_the_any_value) example for how this works in
supported browsers.

**Note:** When the value entered by a user doesn\'t adhere to the
stepping configuration, the [user
agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent) may
round off the value to the nearest valid value, preferring to round
numbers up when there are two equally close options.

The default stepping value for `range` inputs is 1, allowing only
integers to be entered, *unless* the stepping base is not an integer;
for example, if you set `min` to -10 and `value` to 1.5, then a `step`
of 1 will allow only values such as 1.5, 2.5, 3.5,... in the positive
direction and -0.5, -1.5, -2.5,... in the negative direction. See the
[HTML `step` attribute](../../attributes/step).

Non-standard Attributes
-----------------------

### orient

Similar to the -moz-orient non-standard CSS property impacting the
[`<progress>`](../progress) and [`<meter>`](../meter) elements, the
`orient` attribute defines the orientation of the range slider. Values
include `horizontal`, meaning the range is rendered horizontally, and
`vertical`, where the range is rendered vertically.

**Note:** The following input attributes do not apply to the input
range: `accept`, `alt`, `checked`, `dirname`, `formaction`,
`formenctype`, `formmethod`, `formnovalidate`, `formtarget`, `height`,
`maxlength`, `minlength`, `multiple`, `pattern`, `placeholder`,
`readonly`, `required`, `size`, and `src`. Any of these attributes, if
included, will be ignored.

Examples
--------

While the `number` type lets users enter a number with optional
constraints forcing their value to be between a minimum and a maximum
value, it does require that they enter a specific value. The `range`
input type lets you ask the user for a value in cases where the user may
not even care---or know---what the specific numeric value selected is.

A few examples of situations in which range inputs are commonly used:

- Audio controls such as volume and balance, or filter controls.
- Color configuration controls such as color channels, transparency,
    brightness, etc.
- Game configuration controls such as difficulty, visibility distance,
    world size, and so forth.
- Password length for a password manager\'s generated passwords.

As a rule, if the user is more likely to be interested in the percentage
of the distance between minimum and maximum values than the actual
number itself, a range input is a great candidate. For example, in the
case of a home stereo volume control, users typically think \"set volume
at halfway to maximum\" instead of \"set volume to 0.5\".

### Specifying the minimum and maximum

By default, the minimum is 0 and the maximum is 100. If that\'s not what
you want, you can easily specify different bounds by changing the values
of the [`min`](../input#min) and/or [`max`](../input#max) attributes.
These can be any floating-point value.

For example, to ask the user for a value between -10 and 10, you can
use:

[html]

```html
<input type="range" min="-10" max="10" />
```

### Setting the value\'s granularity

By default, the granularity is 1, meaning the value is always an
integer. To control the granularity, you can change the
[`step`](../input#step) attribute. For example, If you need a value to
be halfway between 5 and 10, you should set the value of `step` to 0.5:

#### Setting the step attribute

[html]

```html
<input type="range" min="5" max="10" step="0.5" />
```

#### Setting step to \"any\"

If you want to accept any value regardless of how many decimal places it
extends to, you can specify a value of `any` for the
[`step`](../input#step) attribute:

##### HTML

[html]

```html
<input id="pi_input" type="range" min="0" max="3.14" step="any" />
<p>Value: <output id="value"></output></p>
```

##### JavaScript

[js]

```js
const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});
```

This example lets the user select any value between 0 and π without any
restriction on the fractional part of the value selected. JavaScript is
used to show how the value changes as the user interacts with the range.

### Adding tick marks

To add tick marks to a range control, include the `list` attribute,
giving it the `id` of a [`<datalist>`](../datalist) element which
defines a series of tick marks on the control. Each point is represented
using an [`<option>`](../option) element with its
[`value`](../option#value) set to the range\'s value at which a mark
should be drawn.

#### HTML

[html]

```html
<label for="temp">Choose a comfortable temperature:</label><br />
<input type="range" id="temp" name="temp" list="markers" />

<datalist id="markers">
  <option value="0"></option>
  <option value="25"></option>
  <option value="50"></option>
  <option value="75"></option>
  <option value="100"></option>
</datalist>
```

#### Result

### Using the same datalist for multiple range controls

To help you from repeating code you can reuse that same
[`<datalist>`](../datalist) for multiple `<input type="range">`
elements, and other [`<input>`](../input) types.

**Note:** If you also want to [show the labels](#adding_labels) as in
the example below then you would need a `datalist` for each range input.

#### HTML

[html]

```html
<p>
  <label for="temp1">Temperature for room 1:</label>
  <input type="range" id="temp1" name="temp1" list="values" />
</p>
<p>
  <label for="temp2">Temperature for room 2:</label>
  <input type="range" id="temp2" name="temp2" list="values" />
</p>

<p>
  <label for="temp3">Temperature for room 3:</label>
  <input type="range" id="temp3" name="temp3" list="values" />
</p>

<datalist id="values">
  <option value="0" label="0"></option>
  <option value="25" label="25"></option>
  <option value="50" label="50"></option>
  <option value="75" label="75"></option>
  <option value="100" label="100"></option>
</datalist>
```

#### Result

### Adding labels

You can label tick marks by giving the `<option>` elements `label`
attributes. However, the label content will not be displayed by default.
You can use CSS to show the labels and to position them correctly.
Here\'s one way you could do this.

#### HTML

[html]

```html
<label for="tempB">Choose a comfortable temperature:</label><br />
<input type="range" id="tempB" name="temp" list="values" />

<datalist id="values">
  <option value="0" label="very cold!"></option>
  <option value="25" label="cool"></option>
  <option value="50" label="medium"></option>
  <option value="75" label="getting warm!"></option>
  <option value="100" label="hot!"></option>
</datalist>
```

#### CSS

[css]

```css
datalist {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  writing-mode: vertical-lr;
  width: 200px;
}

option {
  padding: 0;
}

input[type="range"] {
  width: 200px;
  margin: 0;
}

```

#### Result

### Creating vertical range controls

By default, browsers render range inputs as sliders with the knob
sliding left and right.

To create a vertical range, wherein the knob slides up and down, set the
CSS
[`appearance`](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance)
property to `slider-vertical` and include the non-standard `orient`
attribute for Firefox.

#### Horizontal range control

Consider this range control:

[html]

```html
<input type="range" id="volume" min="0" max="11" value="7" step="1" />
```

This control is horizontal (at least on most if not all major browsers;
others might vary).

#### Using the appearance property

The
[`appearance`](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance)
property has a non-standard value of `slider-vertical` that, well, makes
sliders vertical.

We use the same HTML as in the previous examples:

[html]

```html
<input type="range" min="0" max="11" value="7" step="1" />
```

We target just the inputs with a type of range:

[css]

```css
input[type="range"] {
  appearance: slider-vertical;
}

```

#### Using the orient attribute

In Firefox only, there is a non-standard `orient` property.

Use similar HTML as in the previous examples, we add the attribute with
a value of `vertical`:

[html]

```html
<input type="range" min="0" max="11" value="7" step="1" orient="vertical" />
```

#### writing-mode: bt-lr

The
[`writing-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode)
property should generally not be used to alter text direction for
internationalization or localization purposes, but can be used for
special effects.

We use the same HTML as in the previous examples:

[html]

```html
<input type="range" min="0" max="11" value="7" step="1" />
```

We target just the inputs with a type of range, changing the writing
mode from the default to `bt-lr`, or bottom-to-top and left-to-right:

[css]

```css
input[type="range"] {
  writing-mode: bt-lr;
}

```

#### Putting it all together

As each of the above examples works in different browsers, you can put
all of them in a single example to make it work cross browser:

We keep the `orient` attribute with a value of `vertical` for Firefox:

[html]

```html
<input type="range" min="0" max="11" value="7" step="1" orient="vertical" />
```

We target just the `input`s with a `type` of `range` and `orient` set to
`vertical`, changing the `writing-mode` from the default to `bt-lr`, or
bottom-to-top and left-to-right, for pre-Blink versions of Edge, and add
`appearance: slider-vertical` which is supported in Blink and Webkit
browsers:

[css]

```css
input[type="range"][orient="vertical"] {
  writing-mode: bt-lr;
  appearance: slider-vertical;
}

```

Technical summary
-----------------

  --------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **[Value](#value)**               A string containing the string representation of the selected numeric value; use [`valueAsNumber`] to get the value as a number.
  **Events**                        [`change`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) and [`input`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
  **Supported common attributes**   [`autocomplete`](../input#autocomplete), [`list`](../input#list), [`max`](../input#max), [`min`](../input#min), and [`step`](../input#step)
  **IDL attributes**                `list`, `value`, and `valueAsNumber`
  **DOM interface**                 [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
  **Methods**                       [`stepDown()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown) and [`stepUp()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp)
  **Implicit ARIA Role**            `slider`
  --------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Specifications
--------------

  ----------------------------------------------------------------------------------------------------------------

Specification
  ----------------------------------------------------------------------------------------------------------------

  [HTML Standard\
  [\#
  range-state-(type=range)]](https://html.spec.whatwg.org/multipage/input.html#range-state-(type=range))

  ----------------------------------------------------------------------------------------------------------------

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

`range`

4

12

23

10

11

3.1

4.4

2--4.4Pre-Chromium Android WebView recognizes the `range` type, but
doesn\'t implement a range-specific control.

57

52

11

5

7.0

`tick_marks`

Yes

≤79

109

No

Yes

12.1

Yes

Yes

109

Yes

12.2

Yes

`vertical_orientation`

YesThe slider can be oriented vertically by setting the non-standard
`-webkit-appearance: slider-vertical` style on the `input` element. You
shouldn\'t use this, since it\'s proprietary, unless you include
appropriate fallbacks for users of other browsers.

12The slider can be oriented vertically by setting the
`writing-mode: bt-lr` style on the `input` element.

No

10The slider can be oriented vertically by setting the
`writing-mode: bt-lr` style on the `input` element.

YesThe slider can be oriented vertically by setting the non-standard
`-webkit-appearance: slider-vertical` style on the `input` element. You
shouldn\'t use this, since it\'s proprietary, unless you include
appropriate fallbacks for users of other browsers.

YesThe slider can be oriented vertically by setting the non-standard
`-webkit-appearance: slider-vertical` style on the `input` element. You
shouldn\'t use this, since it\'s proprietary, unless you include
appropriate fallbacks for users of other browsers.

YesThe slider can be oriented vertically by setting the non-standard
`-webkit-appearance: slider-vertical` style on the `input` element. You
shouldn\'t use this, since it\'s proprietary, unless you include
appropriate fallbacks for users of other browsers.

YesThe slider can be oriented vertically by setting the non-standard
`-webkit-appearance: slider-vertical` style on the `input` element. You
shouldn\'t use this, since it\'s proprietary, unless you include
appropriate fallbacks for users of other browsers.

No

YesThe slider can be oriented vertically by setting the non-standard
`-webkit-appearance: slider-vertical` style on the `input` element. You
shouldn\'t use this, since it\'s proprietary, unless you include
appropriate fallbacks for users of other browsers.

YesThe slider can be oriented vertically by setting the non-standard
`-webkit-appearance: slider-vertical` style on the `input` element. You
shouldn\'t use this, since it\'s proprietary, unless you include
appropriate fallbacks for users of other browsers.

YesThe slider can be oriented vertically by setting the non-standard
`-webkit-appearance: slider-vertical` style on the `input` element. You
shouldn\'t use this, since it\'s proprietary, unless you include
appropriate fallbacks for users of other browsers.

See also
--------

- [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [`<input>`](../input) and the
    [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
    interface it\'s based upon
- [`<input type="number">`](number)
- [`validityState.rangeOverflow`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/rangeOverflow)
    and
    [`validityState.rangeUnderflow`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/rangeUnderflow)
- [Controlling multiple parameters with
    ConstantSourceNode](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [Styling the range
    element](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
- [Compatibility of CSS
    properties](https://developer.mozilla.org/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/range/range.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

Range constructor
=================

::: {.section .multi-line-signature}
Range()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
factory Range() => document.createRange();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Range/Range.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Range.md)

# Range

The concept of Range refers to the spread of a dataset, primarily in the realm of statistics and data analysis. This measure is crucial for a data analyst as it provides an understanding of the variability amongst the numbers within a dataset. Specifically in a role such as Data Analyst, understandi
ng the range and dispersion aids in making more precise analyses and predictions. Understanding the dispersion within a range can highlight anomalies, identify standard norms, and form the foundation 
for statistical conclusions like the standard deviation, variance, and interquartile range. It allows for the comprehension of the reliability and stability of particular datasets, which can help guide strategic decisions in many industries. Therefore, range is a key concept that every data analyst 
must master.

Visit the following resources to learn more:

- [@article@How to Find the Range of a Data Set](https://www.scribbr.co.uk/stats/range-statistics/)

## 관련 로드맵
- [[data-analyst|data-analyst]]
