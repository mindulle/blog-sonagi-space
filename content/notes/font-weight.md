font-weight
===========

The `font-weight`
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets
the weight (or boldness) of the font. The weights available depend on
the [`font-family`](_Resources/Markup%20And%20Styling/css/font-family.md) that is currently set.

Try it
------

Syntax
------

[css]

```css
/* <font-weight-absolute> keyword values */
font-weight: normal;
font-weight: bold;

/* <font-weight-absolute> numeric values [1,1000] */
font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400; /* normal */
font-weight: 500;
font-weight: 600;
font-weight: 700; /* bold */
font-weight: 800;
font-weight: 900;

/* Keyword values relative to the parent */
font-weight: lighter;
font-weight: bolder;

/* Global values */
font-weight: inherit;
font-weight: initial;
font-weight: revert;
font-weight: revert-layer;
font-weight: unset;
```

The `font-weight` property is specified using either a
`<font-weight-absolute>` value or a relative weight value, as listed
below.

### Values

[`normal`](#normal)

:   Normal font weight. Same as `400`.

[`bold`](#bold)

:   Bold font weight. Same as `700`.

[`<number>`](#number)

:   A [`<number>`](number.md) value between 1 and 1000, both values
    included. Higher numbers represent weights that are bolder than (or
    as bold as) lower numbers. This allows fine-grain control for
    [variable fonts](#variable_fonts). For non-variable fonts, if the
    exact specified weight is unavailable, a [fallback
    weight](#fallback-weights) algorithm is used --- numeric values that
    are divisible by 100 correspond to common weight names, as described
    in the [Common weight name mapping](#common_weight_name_mapping)
    section below.

[`lighter`](#lighter)

:   One relative font weight lighter than the parent element. Note that
    only four font weights are considered for relative weight
    calculation; see the [Meaning of relative
    weights](#meaning_of_relative_weights) section below.

[`bolder`](#bolder)

:   One relative font weight heavier than the parent element. Note that
    only four font weights are considered for relative weight
    calculation; see the [Meaning of relative
    weights](#meaning_of_relative_weights) section below.

### Fallback weights

If the exact weight given is unavailable, then the following rule is
used to determine the weight actually rendered:

- If the target weight given is between `400` and `500` inclusive:
  - Look for available weights between the target and `500`, in
        ascending order.
  - If no match is found, look for available weights less than the
        target, in descending order.
  - If no match is found, look for available weights greater than
        `500`, in ascending order.
- If a weight less than `400` is given, look for available weights
    less than the target, in descending order. If no match is found,
    look for available weights greater than the target, in ascending
    order.
- If a weight greater than `500` is given, look for available weights
    greater than the target, in ascending order. If no match is found,
    look for available weights less than the target, in descending
    order.

### Meaning of relative weights

When `lighter` or `bolder` is specified, the below chart shows how the
absolute font weight of the element is determined.

Note that when using relative weights, only four font weights are
considered --- thin (100), normal (400), bold (700), and heavy (900). If
a font family has more weights available, they are ignored for the
purposes of relative weight calculation.

  Inherited value   `bolder`   `lighter`
  ----------------- ---------- -----------
  100               400        100
  200               400        100
  300               400        100
  400               700        100
  500               700        100
  600               900        400
  700               900        400
  800               900        700
  900               900        700

### Common weight name mapping

The numerical values `100` to `900` roughly correspond to the following
common weight names (see the [OpenType
specification](https://docs.microsoft.com/typography/opentype/spec/os2#usweightclass)):

  Value   Common weight name
  ------- -----------------------------------------------------------------------------------------------------------------------------
  100     Thin (Hairline)
  200     Extra Light (Ultra Light)
  300     Light
  400     Normal (Regular)
  500     Medium
  600     Semi Bold (Demi Bold)
  700     Bold
  800     Extra Bold (Ultra Bold)
  900     Black (Heavy)
  950     [Extra Black (Ultra Black)](https://docs.microsoft.com/dotnet/api/system.windows.fontweights?view=netframework-4.8#remarks)

### Variable fonts

While many fonts have a particular weight corresponding to one of the
numbers in [Common weight name mapping](#common_weight_name_mapping),
most variable fonts support a range of weights providing much finer
granularity, giving designers and developers more control over the
chosen weight.

For TrueType or OpenType variable fonts, the \"wght\" variation is used
to implement varying widths.

This demo loads with `font-weight: 500;` set. Change the value of the
`font-weight` property to see the weight of the text change.

Accessibility concerns
----------------------

People experiencing low vision conditions may have difficulty reading
text set with a `font-weight` value of `100` (Thin/Hairline) or `200`
(Extra Light), especially if the font has a [](_Resources/Markup%20And%20Styling/css/color.md#accessibility_concerns).

- [MDN Understanding WCAG, Guideline 1.4
    explanations](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 \| W3C Understanding WCAG
    2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

Formal definition
-----------------

  ---------------------------------- ------------------------------------------------------------------------------------------------------------
  [Initial value](initial_value.md)     `normal`
  Applies to                         all elements. It also applies to [`::first-letter`](::first-letter) and [`::first-line`](::first-line).
  [Inherited](inheritance.md)           yes
  [Computed value](computed_value.md)   the keyword or the numerical value as specified, with `bolder` and `lighter` transformed to the real value
  Animation type                     a [font weight](_Resources/Markup%20And%20Styling/css/font-weight.md#interpolation)
  ---------------------------------- ------------------------------------------------------------------------------------------------------------

Formal syntax
-------------

```
font-weight = 
  <font-weight-absolute>  |
  bolder                  |
  lighter                 

<font-weight-absolute> = 
  normal             |
  bold               |
  <number [1,1000]>  
```

Examples
--------

### Setting font weights

#### HTML

[html]

```html
<p>
  Alice was beginning to get very tired of sitting by her sister on the bank,
  and of having nothing to do: once or twice she had peeped into the book her
  sister was reading, but it had no pictures or conversations in it, "and what
  is the use of a book," thought Alice "without pictures or conversations?"
</p>

<div>
  I'm heavy<br />
  <span>I'm lighter</span>
</div>
```

#### CSS

[css]

```css
/* Set paragraph text to be bold. */
p {
  font-weight: bold;
}

/* Set div text to two steps heavier than
   normal but less than a standard bold. */
div {
  font-weight: 600;
}

/* Set span text to be one step lighter
   than its parent. */
span {
  font-weight: lighter;
}
```

#### Result

Specifications
--------------

  ----------------------------------------------------------------------------------

Specification
  ----------------------------------------------------------------------------------

  [CSS Fonts Module Level 4\
  [\#
  font-weight-prop]](https://drafts.csswg.org/css-fonts/#font-weight-prop)

  ----------------------------------------------------------------------------------

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

`font-weight`

2

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

`number`

62

17

61

No

49

11

62

62

61

46

11

8.0

See also
--------

- [`font-family`](_Resources/Markup%20And%20Styling/css/font-family.md)
- [`font-style`](_Resources/Markup%20And%20Styling/css/font-style.md)
- [Fundamental text and font
    styling](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
- [CSS fonts](css_fonts.md) module

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/@font-face/font-weight.md)
font-weight
===========

The `font-weight` CSS descriptor allows authors to specify font weights
for the fonts specified in the [`@font-face`](@font-face.md) at-rule.
The [`font-weight`](_Resources/Markup%20And%20Styling/css/font-weight.md) property can separately be used to
set how thick or thin characters in text should be displayed.

For a particular font family, authors can download various font faces
which correspond to the different styles of the same font family, and
then use the `font-weight` descriptor to explicitly specify the font
face\'s weights. The values for the CSS descriptor is same as that of
its corresponding font property.

There are generally limited weights available for a particular font
family. When a specified weight doesn\'t exist, a nearby weight is used.
Fonts lacking bold typeface are often synthesized by the user agent. To
prevent this, use the [`font-synthesis`](font-synthesis.md) shorthand
property.

Syntax
------

[css]

```css
/* Single values */
font-weight: normal;
font-weight: bold;
font-weight: 400;

/* Multiple Values */
font-weight: normal bold;
font-weight: 300 500;
```

The `font-weight` property is described using any one of the values
listed below.

### Values

[`normal`](#normal)

:   Normal font weight. Same as `400`.

[`bold`](#bold)

:   Bold font weight. Same as `700`.

[`<number>`](#number)

:   A [`<number>`](number.md) value between 1 and 1000, inclusive.
    Higher numbers represent weights that are bolder than (or as bold
    as) lower numbers. Certain commonly used values correspond to common
    weight names, as described in the [Common weight name
    mapping](#common_weight_name_mapping) section below.

In earlier versions of the `font-weight` specification, the property
accepts only keyword values and the numeric values 100, 200, 300, 400,
500, 600, 700, 800, and 900; non-variable fonts can only really make use
of these set values, although fine-grained values (e.g. 451) will be
translated to one of these values for non-variable fonts.

CSS Fonts Level 4 extends the syntax to accept any number between 1 and
1000, inclusive, and introduces [Variable fonts](#variable_fonts), which
can make use of this much finer-grained range of font weights.

### Common weight name mapping

The numerical values `100` to `900` roughly correspond to the following
common weight names:

  Value   Common weight name
  ------- ---------------------------
  100     Thin (Hairline)
  200     Extra Light (Ultra Light)
  300     Light
  400     Normal
  500     Medium
  600     Semi Bold (Demi Bold)
  700     Bold
  800     Extra Bold (Ultra Bold)
  900     Black (Heavy)

### Variable fonts

Most fonts have a particular weight which corresponds to one of the
numbers in [Common weight name mapping](#common_weight_name_mapping).
However some fonts, called variable fonts, can support a range of
weights with more or less fine granularity, and this can give the
designer a much closer degree of control over the chosen weight.

For TrueType or OpenType variable fonts, the \"wght\" variation is used
to implement varying weights.

Accessibility concerns
----------------------

People experiencing low vision conditions may have difficulty reading
text set with a `font-weight` value of `100` (Thin/Hairline) or `200`
(Extra Light), especially if the font has a [](_Resources/Markup%20And%20Styling/css/color.md#accessibility_concerns).

- [MDN Understanding WCAG, Guideline 1.4
    explanations](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 \| W3C Understanding WCAG
    2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

Formal definition
-----------------

  ------------------------------------- -------------------------------
  Related [at-rule](at-rule.md)         [`@font-face`](@font-face.md)
  [Initial value](initial_value.md)     `normal`
  [Computed value](computed_value.md)   as specified
  ------------------------------------- -------------------------------

Formal syntax
-------------

```text
font-weight = 
  auto                         |
  <font-weight-absolute>  

<font-weight-absolute> = 
  normal             |
  bold               |
  <number [1,1000]>  
```

Examples
--------

### Setting normal font weight in a \@font-face rule

The following finds a local Open Sans font or imports it, and allows
using the font for normal font weights.

[css]

```css
@font-face {
  font-family: "Open Sans";
  src:
    local("Open Sans") format("woff2"),
    url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
  font-weight: 400;
}
```

Specifications
--------------

  ------------------------------------------------------------------------------

Specification
  ------------------------------------------------------------------------------

  [CSS Fonts Module Level 4\
  [\#
  font-prop-desc]](https://drafts.csswg.org/css-fonts/#font-prop-desc)

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

`font-weight`

4

12

3.5

4

10

3.1

≤37

18

4

10.1

2

1.0

See also
--------

- [`font-display`](_Resources/Markup%20And%20Styling/css/@font-face/font-display.md)
- [`font-family`](_Resources/Markup%20And%20Styling/css/@font-face/font-family.md)
- [`font-stretch`](_Resources/Markup%20And%20Styling/css/@font-face/font-stretch.md)
- [`font-style`](_Resources/Markup%20And%20Styling/css/@font-face/font-style.md)
- [`font-feature-settings`](_Resources/Markup%20And%20Styling/css/font-feature-settings.md)
- [`font-variation-settings`](_Resources/Markup%20And%20Styling/css/@font-face/font-variation-settings.md)
- [`src`](src.md)
- [`unicode-range descriptor`](unicode-range.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-weight>
