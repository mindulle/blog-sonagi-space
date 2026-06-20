color
=====

The `color` CSS property sets the foreground [color value](color_value.md)
of an element\'s text and [text decorations](text-decoration.md), and sets
the [`currentcolor`](color_value.md#currentcolor_keyword) value.
`currentcolor` may be used as an indirect value on *other* properties
and is the default for other color properties, such as
[`border-color`](border-color.md).

Try it
------

For an overview of using color in HTML, see [](applying_color.md).

Syntax
------

[css]

```css
/* Keyword values */
color: currentcolor;

/* <named-color> values */
color: red;
color: orange;
color: tan;
color: rebeccapurple;

/* <hex-color> values */
color: #090;
color: #009900;
color: #090a;
color: #009900aa;

/* <rgb()> values */
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.3);
color: rgb(34 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);

/* <hsl()> values */
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);

/* <hwb()> values */
color: hwb(90 10% 10%);
color: hwb(90 10% 10% / 0.5);
color: hwb(90deg 10% 10%);
color: hwb(1.5708rad 60% 0%);
color: hwb(0.25turn 0% 40% / 50%);

/* Global values */
color: inherit;
color: initial;
color: revert;
color: revert-layer;
color: unset;
```

The `color` property is specified as a single [`<color>`](color_value.md)
value.

Note that the value must be a uniform [`color`](_Resources/Markup%20And%20Styling/css/color.md). It can\'t be a
[`<gradient>`](gradient.md), which is actually a type of
[`<image>`](_Resources/Markup%20And%20Styling/css/image.md).

### Values

[`<color>`](color_value.md)

:   Sets the color of the textual and decorative parts of the element.

[`currentcolor`](color_value.md#currentcolor_keyword)

:   Sets the color to the element\'s `color` property value. However, if
    set as the value of `color`, `currentcolor` is treated as `inherit`.

Accessibility concerns
----------------------

It is important to ensure that the contrast ratio between the color of
the text and the background the text is placed over is high enough that
people experiencing low vision conditions will be able to read the
content of the page.

Color contrast ratio is determined by comparing the luminosity of the
text and background color values. In order to meet current [Web Content
Accessibility Guidelines
(WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/), a ratio of
4.5:1 is required for text content and 3:1 for larger text such as
headings. Large text is defined as 18.66px and [bold](_Resources/Markup%20And%20Styling/css/font-weight.md) or
larger, or 24px or larger.

- [WebAIM: Color Contrast
    Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4
    explanations](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 \| W3C Understanding WCAG
    2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Formal definition
-----------------

  ---------------------------------- ------------------------------------------------------------------------------------------------------------------
  [Initial value](initial_value.md)     `canvastext`
  Applies to                         all elements and text. It also applies to [`::first-letter`](::first-letter) and [`::first-line`](::first-line).
  [Inherited](inheritance.md)           yes
  [Computed value](computed_value.md)   computed color
  Animation type                     by computed value type
  ---------------------------------- ------------------------------------------------------------------------------------------------------------------

Formal syntax
-------------

```
color = 
  <color>  
```

Examples
--------

### Making text red

The following are all ways to make a paragraph\'s text red:

[css]

```css
p {
  color: red;
}
p {
  color: #f00;
}
p {
  color: #ff0000;
}
p {
  color: rgb(255, 0, 0);
}
p {
  color: rgb(100%, 0%, 0%);
}
p {
  color: hsl(0, 100%, 50%);
}

/* 50% translucent */
p {
  color: #ff000080;
}
p {
  color: rgba(255, 0, 0, 0.5);
}
p {
  color: hsla(0, 100%, 50%, 0.5);
}
```

Specifications
--------------

  --------------------------------------------------------------------------------------

Specification
  --------------------------------------------------------------------------------------

  [CSS Color Module Level 4\
  [\#
  the-color-property]](https://drafts.csswg.org/css-color/#the-color-property)

  --------------------------------------------------------------------------------------

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

`color`

1

12

1

3

3.5

1

4.4

18

4

10.1

1

1.0

See also
--------

- The [`<color>`](color_value.md) data type
- Other color-related properties:
    [`background-color`](background-color.md),
    [`border-color`](border-color.md), [`outline-color`](outline-color.md),
    [`text-decoration-color`](text-decoration-color.md),
    [`text-emphasis-color`](text-emphasis-color.md),
    [`text-shadow`](text-shadow.md), [`caret-color`](caret-color.md),
    [`column-rule-color`](column-rule-color.md), and
    [`print-color-adjust`](print-color-adjust.md)
- [](applying_color.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/color>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/color_value/color.md)
color()
=======

The `color()` functional notation allows a color to be specified in a
particular, specified colorspace rather than the implicit sRGB
colorspace that most of the other color functions operate in.

Support for a particular colorspace can be detected with the
[`color-gamut`](color-gamut.md) CSS media feature.

Syntax
------

[css]

```css
color(display-p3 1 0.5 0);
color(display-p3 1 0.5 0 / .5);
```

### Values

Functional notation: `color(colorspace c1 c2 c3[ / A])`

[`colorspace`](#colorspace)

:   An [`<ident>`](ident.md) denoting one of the predefined color
    spaces: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`,
    `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50`, and `xyz-d65`.

[`c1`](#c1), `c2`, `c3`

:   [`<number>`](number.md) between 0 and 1, a
    [`<percentage>`](percentage.md) or the keyword `none`, which provide
    the component values in the color space.

[`A`](#a) [Optional]

:   An [`<alpha-value>`](alpha-value.md) or the keyword `none`, where
    the number `1` corresponds to `100%` (full opacity).

**Note:** See [](color_value.md#missing_color_components) for the effect of
`none`.

### Formal syntax

```
<color()> = 
  color( <colorspace-params> [ / [ <alpha-value> | none ] ]? )  

<colorspace-params> = 
  <predefined-rgb-params>  |
  <xyz-params>             

<alpha-value> = 
  <number>      |
  <percentage>  

<predefined-rgb-params> = 
  <predefined-rgb> [ <number> | <percentage> | none ]  

<xyz-params> = 
  <xyz-space> [ <number> | <percentage> | none ]  

<predefined-rgb> = 
  srgb          |
  srgb-linear   |
  display-p3    |
  a98-rgb       |
  prophoto-rgb  |
  rec2020       

<xyz-space> = 
  xyz      |
  xyz-d50  |
  xyz-d65  
```

Examples
--------

### Using predefined colorspaces with color()

The following example shows the effect of varying the lightness, a-axis,
and b-axis values of the `color()` function.

#### HTML

[html]

```html
<div data-color="red-a98-rgb"></div>
<div data-color="red-prophoto-rgb"></div>
<div data-color="green-srgb-linear"></div>
<div data-color="green-display-p3"></div>
<div data-color="blue-rec2020"></div>
<div data-color="blue-srgb"></div>
```

#### CSS

[css]

```css
[data-color="red-a98-rgb"] {
  background-color: color(a98-rgb 1 0 0);
}
[data-color="red-prophoto-rgb"] {
  background-color: color(prophoto-rgb 1 0 0);
}
[data-color="green-srgb-linear"] {
  background-color: color(srgb-linear 0 1 0);
}
[data-color="green-display-p3"] {
  background-color: color(display-p3 0 1 0);
}
[data-color="blue-rec2020"] {
  background-color: color(rec2020 0 0 1);
}
[data-color="blue-srgb"] {
  background-color: color(srgb 0 0 1);
}
```

#### Result

### Using the xyz colorspace with color()

The following example shows how to use the `xyz` colorspace to specify a
color.

#### HTML

[html]

```html
<div data-color="red"></div>
<div data-color="green"></div>
<div data-color="blue"></div>
```

#### CSS

[css]

```css
[data-color="red"] {
  background-color: color(xyz 45 20 0);
}

[data-color="green"] {
  background-color: color(xyz-d50 0.3 80 0.3);
}

[data-color="blue"] {
  background-color: color(xyz-d65 5 0 50);
}
```

#### Result

### Using color-gamut media queries with color()

This example shows how to use the [`color-gamut`](color-gamut.md)
media query to detect support for a particular colorspace and use that
colorspace to specify a color.

#### HTML

[html]

```html
<div></div>
<div></div>
<div></div>
```

#### CSS

[css]

```css
@media (color-gamut: p3) {
  div {
    background-color: color(display-p3 0 0 1);
  }
}

@media (color-gamut: srgb) {
  div:nth-child(2) {
    background-color: color(srgb 0 0 1);
  }
}

@media (color-gamut: rec2020) {
  div:nth-child(3) {
    background-color: color(rec2020 0 0 1);
  }
}
```

#### Result

Specifications
--------------

  ------------------------------------------------------------------------------

Specification
  ------------------------------------------------------------------------------

  [CSS Color Module Level 4\
  [\#
  color-function]](https://drafts.csswg.org/css-color/#color-function)

  ------------------------------------------------------------------------------

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

`color`

111

111

113

No

97

15

10.1--15Only supports `display-p3` and `srgb` predefined color profiles.

111

111

113

No

15

10.3--15Only supports `display-p3` and `srgb` predefined color profiles.

22.0

See also
--------

- [The `<color>` data type](color_value.md) for a list of all color
    notations
- [`color-gamut`](color-gamut.md) media feature
- [Wide Gamut Color in CSS with
    Display-p3](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/@media/color.md)
color
=====

The `color` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[media feature](@media.md#media_features) can be used to test the number
of bits per color component (red, green, blue) of the output device.

Syntax
------

The `color` feature is specified as an [`<integer>`](integer.md) value
that represents the number of bits per color component (red, green,
blue) of the output device. If the device is not a color device, the
value is zero. It is a range feature, meaning that you can also use the
prefixed `min-color` and `max-color` variants to query minimum and
maximum values, respectively.

**Note:** If the various color components are represented by different
numbers of bits, the smallest number is used. For example, if a display
uses 5 bits for blue and red and 6 bits for green, then the device is
considered to use 5 bits per color component. If the device uses indexed
colors, the minimum number of bits per color component in the color
table is used.

See [](applying_color.md) to learn more about using CSS to
apply color to HTML.

Examples
--------

### HTML

[html]

```html
<p>
  This text should be black on non-color devices, red on devices with a low
  number of colors, and greenish on devices with a high number of colors.
</p>
```

### CSS

[css]

```css
p {
  color: black;
}

/* Any color device */
@media (color) {
  p {
    color: red;
  }
}

/* Any color device with at least 8 bits per color component */
@media (min-color: 8) {
  p {
    color: #24ba13;
  }
}
```

### Result

Specifications
--------------

  -----------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------

  [Media Queries Level 4\
  [\# color]](https://drafts.csswg.org/mediaqueries/#color)

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

`color`

1

12

2

9

10

3

≤37

18

4

10.1

1

1.0

See also
--------

- [](applying_color.md)
- The CSS [`color`](_Resources/Markup%20And%20Styling/css/color.md) property
- The CSS [`<color>`](color_value.md) data unit

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/html/element/input/color.md)
\<input type=\"color\"\>
========================

[`<input>`](../input) elements of type `color` provide a user interface
element that lets a user specify a color, either by using a visual color
picker interface or by entering the color into a text field in `#rrggbb`
hexadecimal format.

Only simple colors (without alpha channel) are allowed though CSS colors
has more formats, e.g. color names, functional notations and a
hexadecimal format with an alpha channel.

The element\'s presentation may vary substantially from one browser
and/or platform to another---it might be a simple textual input that
automatically validates to ensure that the color information is entered
in the proper format, or a platform-standard color picker, or some kind
of custom color picker window.

Try it
------

Value
-----

The [`value`](../input#value) of an [`<input>`](../input) element of
type `color` is always a string which contains a 7-character string
specifying an RGB color in hexadecimal format. While you can input the
color in either upper- or lower-case, it will be stored in lower-case
form. The value is never in any other form, and is never empty.

**Note:** Setting the value to anything that isn\'t a valid,
fully-opaque, RGB color *in hexadecimal notation* will result in the
value being set to `#000000`. In particular, you can\'t use CSS\'s
standardized color names, or any CSS function syntax, to set the value.
This makes sense when you keep in mind that HTML and CSS are separate
languages and specifications. In addition, colors with an alpha channel
are not supported; specifying a color in 9-character hexadecimal
notation (e.g. `#009900aa`) will also result in the color being set to
`#000000`.

Using color inputs
------------------

Inputs of type `color` are simple, due to the limited number of
attributes they support.

### Providing a default color

You can update the simple example above to set a default value, so that
the color picker is pre-filled with the default color and the color
picker (if any) will also default to that color:

[html]

```html
<input type="color" value="#ff0000" />
```

If you don\'t specify a value, the default is `#000000`, which is black.
The value must be in seven-character hexadecimal notation, meaning the
\"\#\" character followed by two digits each representing red, green,
and blue, like this: `#rrggbb`. If you have colors that are in any other
format (such as CSS color names or CSS color functions such as `rgb()`
or `rgba()`), you\'ll have to convert them to hexadecimal before setting
the `value`.

### Tracking color changes

As is the case with other [`<input>`](../input) types, there are two
events that can be used to detect changes to the color value:
[`input`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
and
[`change`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event).
`input` is fired on the `<input>` element every time the color changes.
The `change` event is fired when the user dismisses the color picker. In
both cases, you can determine the new value of the element by looking at
its [`value`](../input#value).

Here\'s an example that watches changes over time to the color value:

[js]

```js
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

### Selecting the value

When a browser doesn\'t support a color picker interface, its
implementation of color inputs will be a text box that validates the
contents automatically to ensure that the value is in the correct
format. In this case you can use the
[`select()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select)
method to select the text currently in the edit field.

If the browser instead uses a color picker, `select()` does nothing. You
should be aware of this behavior so your code can respond appropriately
in either case.

[js]

```js
colorPicker.select();
```

Validation
----------

A color input\'s value is considered to be invalid if the [user
agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent) is
unable to convert the user\'s input into seven-character lower-case
hexadecimal notation. If and when this is the case, the
[`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)
pseudo-class is applied to the element.

Example
-------

Let\'s create an example which does a little more with the color input
by tracking the
[`change`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
and
[`input`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
events to take the new color and apply it to every [`<p>`](../p) element
in the document.

### HTML

The HTML is fairly straightforward --- a couple of paragraphs of
descriptive material with an [`<input>`](../input) of type `color` with
the ID `color-picker`, which we\'ll use to change the color of the
paragraphs\' text.

[html]

```html
<p>
  An example demonstrating the use of the
  <code>&lt;input type="color"&gt;</code> control.
</p>

<label for="color-picker">Color:</label>
<input type="color" value="#ff0000" id="color-picker" />

<p>
  Watch the paragraph colors change when you adjust the color picker. As you
  make changes in the color picker, the first paragraph's color changes, as a
  preview (this uses the <code>input</code> event). When you close the color
  picker, the <code>change</code> event fires, and we detect that to change
  every paragraph to the selected color.
</p>
```

### JavaScript

First, there\'s some setup. Here we establish some variables, setting up
a variable that contains the color we\'ll set the color picker to when
we first load up, and then setting up a
[`load`](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)
handler to do the main startup work once the page is fully loaded.

[js]

```js
let colorPicker;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
```

#### Initialization

Once the page is loaded, our `load` event handler, `startup()`, is
called:

[js]

```js
function startup() {
  colorPicker = document.querySelector("#color-picker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", updateFirst, false);
  colorPicker.addEventListener("change", updateAll, false);
  colorPicker.select();
}
```

This gets a reference to the color `<input>` element in a variable
called `colorPicker`, then sets the color input\'s value to the value in
`defaultColor`. Then the color input\'s
[`input`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
event is set up to call our `updateFirst()` function, and the
[`change`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
event is set to call `updateAll()`. These are both seen below.

Finally, we call
[`select()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select)
to select the text content of the color input if the control is
implemented as a text field (this has no effect if a color picker
interface is provided instead).

#### Reacting to color changes

We provide two functions that deal with color changes. The
`updateFirst()` function is called in response to the `input` event. It
changes the color of the first paragraph element in the document to
match the new value of the color input. Since `input` events are fired
every time an adjustment is made to the value (for example, if the
brightness of the color is increased), these will happen repeatedly as
the color picker is used.

[js]

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

When the color picker is dismissed, indicating that the value will not
change again (unless the user re-opens the color picker), a `change`
event is sent to the element. We handle that event using the
`updateAll()` function, using [`Event.target.value`](../input#value) to
obtain the final selected color:

[js]

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

This sets the color of every [`<p>`](../p) block so that its
[`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
attribute matches the current value of the color input, which is
referred to using
[`event.target`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target).

### Result

The final result looks like this:

Technical summary
-----------------

  --------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **[Value](#value)**               A 7-character string specifying a [`<color>`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) in lower-case hexadecimal notation
  **Events**                        [`change`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) and [`input`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
  **Supported common attributes**   [`autocomplete`](../input#autocomplete) and [`list`](../input#list)
  **IDL attributes**                `list` and `value`
  **DOM interface**                 [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
  **Methods**                       [`select()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select)
  **Implicit ARIA Role**            [`no corresponding role`](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role)
  --------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Specifications
--------------

  ----------------------------------------------------------------------------------------------------------------

Specification
  ----------------------------------------------------------------------------------------------------------------

  [HTML Standard\
  [\#
  color-state-(type=color)]](https://html.spec.whatwg.org/multipage/input.html#color-state-(type=color))

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

`color`

20

14

29

No

12

12.1

4.4

25

27Firefox for Android doesn\'t allow the user to choose a custom color,
only one of the predefined ones.

12

12.2

1.5

`autocomplete`

20

14

No

No

15

No

4.4

25

No

14

No

1.5

`list`

20

14

110The `list` attribute is supported in Firefox for Windows and Linux.
See [bug 960984](https://bugzil.la/960984).

No

15

12.1

4.4

25

No

14

12.2

1.5

See also
--------

- [Compatibility of CSS
    properties](https://developer.mozilla.org/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color>>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclaration/color.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

color property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) color

::: {.features}
override
:::
:::

Gets the value of \"color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get color => this._color;
```

::: {#setter .section .multi-line-signature}
void color=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set color(String? value) {
  _color = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/color.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/color.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

color property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) color
:::

Gets the value of \"color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get color => getPropertyValue('color');
```

::: {#setter .section .multi-line-signature}
void color=([String](../../dart-core/string-class) value)
:::

Sets the value of \"color\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set color(String value) {
  setProperty('color', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/color.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/hrelement/color.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

color property
==============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) color
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get color native;
```

::: {#setter .section .multi-line-signature}
void color=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set color(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HRElement/color.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Color.md)

# Color

Color establishes brand identity and visual hierarchy in design systems. A comprehensive color system should organize colors logically, meet WCAG accessibility standards, support light/dark themes, create semantic categories, establish systematic naming, balance brand expression with function, and p
rovide multiple formats.

## 관련 로드맵
- [[design-system|design-system]]
