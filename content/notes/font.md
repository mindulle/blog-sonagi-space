font
====

The `font` CSS [shorthand property](shorthand_properties.md) sets all the
different properties of an element\'s font. Alternatively, it sets an
element\'s font to a system font.

Try it
------

As with any shorthand property, any individual value that is not
specified is set to its corresponding initial value (possibly overriding
values previously set using non-shorthand properties). Though not
directly settable by `font`, the longhands
[`font-size-adjust`](font-size-adjust.md) and
[`font-kerning`](font-kerning.md) are also reset to their initial values.

Constituent properties
----------------------

This property is a shorthand for the following CSS properties:

- [`font-family`](_Resources/Markup%20And%20Styling/css/font-family.md)
- [`font-size`](font-size.md)
- [`font-stretch`](_Resources/Markup%20And%20Styling/css/font-stretch.md)
- [`font-style`](_Resources/Markup%20And%20Styling/css/font-style.md)
- [`font-variant`](font-variant.md)
- [`font-weight`](_Resources/Markup%20And%20Styling/css/font-weight.md)
- [`line-height`](line-height.md)

Syntax
------

[css]

```css
/* font-size font-family */
font: 1.2em "Fira Sans", sans-serif;

/* font-size/line height font-family */
font: 1.2em/2 "Fira Sans", sans-serif;

/* font-style font-weight font-size font-family */
font: italic bold 1.2em "Fira Sans", sans-serif;

/* font-stretch font-variant font-size font-family */
font: ultra-condensed small-caps 1.2em "Fira Sans", sans-serif;

/* system font */
font: caption;
```

The `font` property may be specified as either a single keyword, which
will select a system font, or as a shorthand for various font-related
properties.

If `font` is specified as a system keyword, it must be one of:
`caption`, `icon`, `menu`, `message-box`, `small-caption`, `status-bar`.

If `font` is specified as a shorthand for several font-related
properties, then:

- it must include values for:
  - [`<font-size>`](font-size.md)
  - [`<font-family>`](_Resources/Markup%20And%20Styling/css/font-family.md)
- it may optionally include values for:
  - [`<font-style>`](_Resources/Markup%20And%20Styling/css/font-style.md)
  - [`<font-variant>`](font-variant.md)
  - [`<font-weight>`](_Resources/Markup%20And%20Styling/css/font-weight.md)
  - [`<font-stretch>`](_Resources/Markup%20And%20Styling/css/font-stretch.md)
  - [`<line-height>`](line-height.md)
- `font-style`, `font-variant` and `font-weight` must precede
    `font-size`
- `font-variant` may only specify the values defined in CSS 2.1, that
    is `normal` and `small-caps`
- `font-stretch` may only be a single keyword value.
- `line-height` must immediately follow `font-size`, preceded by
    \"/\", like this: \"`16px/3`\"
- `font-family` must be the last value specified.

### Values

[`<'font-style'>`](#font-style)

:   See the [`font-style`](_Resources/Markup%20And%20Styling/css/font-style.md) CSS property.

[`<'font-variant'>`](#font-variant)

:   See the [`font-variant`](font-variant.md) CSS property.

[`<'font-weight'>`](#font-weight)

:   See the [`font-weight`](_Resources/Markup%20And%20Styling/css/font-weight.md) CSS property.

[`<'font-stretch'>`](#font-stretch)

:   See the [`font-stretch`](_Resources/Markup%20And%20Styling/css/font-stretch.md) CSS property.

[`<'font-size'>`](#font-size)

:   See the [`font-size`](font-size.md) CSS property.

[`<'line-height'>`](#line-height)

:   See the [`line-height`](line-height.md) CSS property.

[`<'font-family'>`](#font-family)

:   See the [`font-family`](_Resources/Markup%20And%20Styling/css/font-family.md) CSS property.

#### System font values

[`caption`](#caption)

:   The system font used for captioned controls (e.g., buttons,
    drop-downs, etc.).

[`icon`](#icon)

:   The system font used to label icons.

[`menu`](#menu)

:   The system font used in menus (e.g., dropdown menus and menu lists).

[`message-box`](#message-box)

:   The system font used in dialog boxes.

[`small-caption`](#small-caption)

:   The system font used for labeling small controls.

[`status-bar`](#status-bar)

:   The system font used in window status bars.

[Prefixed system font keywords](#prefixed_system_font_keywords)

:   Browsers often implement several more, prefixed, keywords: Gecko
    implements `-moz-window`, `-moz-document`, `-moz-desktop`,
    `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`,
    `-moz-list`, and `-moz-field`.

Formal definition
-----------------

+-----------------------------------+-----------------------------------+
| [Initial value](initial_value.md)    | as each of the properties of the  |
|                                   | shorthand:\                       |
|                                   |                                   |
|                                   | -   [`font-style`](_Resources/Markup%20And%20Styling/css/font-style.md):   |
|                                   |     `normal`                      |
|                                   | -                                 |
|                                   |   [`font-variant`](font-variant.md): |
|                                   |     `normal`                      |
|                                   | -   [`font-weight`](_Resources/Markup%20And%20Styling/css/font-weight.md): |
|                                   |     `normal`                      |
|                                   | -                                 |
|                                   |   [`font-stretch`](_Resources/Markup%20And%20Styling/css/font-stretch.md): |
|                                   |     `normal`                      |
|                                   | -   [`font-size`](font-size.md):     |
|                                   |     `medium`                      |
|                                   | -   [`line-height`](line-height.md): |
|                                   |     `normal`                      |
|                                   | -   [`font-family`](_Resources/Markup%20And%20Styling/css/font-family.md): |
|                                   |     depends on user agent         |
+-----------------------------------+-----------------------------------+
| Applies to                        | all elements. It also applies to  |
|                                   | [                                 |
|                                   | `::first-letter`](::first-letter) |
|                                   | and                               |
|                                   | [`::first-line`](::first-line).   |
+-----------------------------------+-----------------------------------+
| [Inherited](inheritance.md)          | yes                               |
+-----------------------------------+-----------------------------------+
| Percentages                       | as each of the properties of the  |
|                                   | shorthand:\                       |
|                                   |                                   |
|                                   | -   [`font-size`](font-size.md):     |
|                                   |     refer to the parent           |
|                                   |     element\'s font size          |
|                                   | -   [`line-height`](line-height.md): |
|                                   |     refer to the font size of the |
|                                   |     element itself                |
+-----------------------------------+-----------------------------------+
| [Computed value](computed_value.md)  | as each of the properties of the  |
|                                   | shorthand:\                       |
|                                   |                                   |
|                                   | -   [`font-style`](_Resources/Markup%20And%20Styling/css/font-style.md):   |
|                                   |     as specified                  |
|                                   | -                                 |
|                                   |   [`font-variant`](font-variant.md): |
|                                   |     as specified                  |
|                                   | -   [`font-weight`](_Resources/Markup%20And%20Styling/css/font-weight.md): |
|                                   |     the keyword or the numerical  |
|                                   |     value as specified, with      |
|                                   |     `bolder` and `lighter`        |
|                                   |     transformed to the real value |
|                                   | -                                 |
|                                   |   [`font-stretch`](_Resources/Markup%20And%20Styling/css/font-stretch.md): |
|                                   |     as specified                  |
|                                   | -   [`font-size`](font-size.md): as  |
|                                   |     specified, but with relative  |
|                                   |     lengths converted into        |
|                                   |     absolute lengths              |
|                                   | -   [`line-height`](line-height.md): |
|                                   |     for percentage and length     |
|                                   |     values, the absolute length,  |
|                                   |     otherwise as specified        |
|                                   | -   [`font-family`](_Resources/Markup%20And%20Styling/css/font-family.md): |
|                                   |     as specified                  |
+-----------------------------------+-----------------------------------+
| Animation type                    | as each of the properties of the  |
|                                   | shorthand:\                       |
|                                   |                                   |
|                                   | -   [`font-style`](_Resources/Markup%20And%20Styling/css/font-style.md):   |
|                                   |     by computed value type;       |
|                                   |     `normal` animates as          |
|                                   |     `oblique 0deg`                |
|                                   | -                                 |
|                                   |   [`font-variant`](font-variant.md): |
|                                   |     discrete                      |
|                                   | -   [`font-weight`](_Resources/Markup%20And%20Styling/css/font-weight.md): |
|                                   |     a [](_Resources/Markup%20And%20Styling/css/font-weight.md#interpolation) |
|                                   | -                                 |
|                                   |   [`font-stretch`](_Resources/Markup%20And%20Styling/css/font-stretch.md): |
|                                   |     a [](_Resources/Markup%20And%20Styling/css/font-stretch.md#interpolation) |
|                                   | -   [`font-size`](font-size.md): a   |
|                                   |                                   |
|                                   |    [length](length.md#interpolation) |
|                                   | -   [`line-height`](line-height.md): |
|                                   |     either number or length       |
|                                   | -   [`font-family`](_Resources/Markup%20And%20Styling/css/font-family.md): |
|                                   |     discrete                      |
+-----------------------------------+-----------------------------------+

Formal syntax
-------------

```
font = 
  [ [ <'font-style'> || <font-variant-css2> || <'font-weight'> || <font-stretch-css3> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ]  |
  caption                                             |
  icon                                                |
  menu                                                |
  message-box                                         |
  small-caption                                       |
  status-bar                                          

<font-variant-css2> = 
  normal      |
  small-caps  

<font-stretch-css3> = 
  normal           |
  ultra-condensed  |
  extra-condensed  |
  condensed        |
  semi-condensed   |
  semi-expanded    |
  expanded         |
  extra-expanded   |
  ultra-expanded   
```

Examples
--------

### Setting font properties

[css]

```css
/* Set the font size to 12px and the line height to 14px.
   Set the font family to sans-serif */
p {
  font: 12px/14px sans-serif;
}

/* Set the font size to 80% of the parent element
   or default value (if no parent element present).
   Set the font family to sans-serif */
p {
  font: 80% sans-serif;
}

/* Set the font weight to bold,
   the font-style to italic,
   the font size to large,
   and the font family to serif. */
p {
  font: bold italic large serif;
}

/* Use the same font as the status bar of the window */
p {
  font: status-bar;
}
```

### Live sample

Specifications
--------------

  -----------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------

  [CSS Fonts Module Level 4\
  [\# font-prop]](https://drafts.csswg.org/css-fonts/#font-prop)

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

`font`

1

12

1

3

3.5

1

≤37

18

4

14

1

1.0

`font_stretch_support`

60

79

43

No

47

11

60

60

43

44

11

8.0

`system_fonts`

1

12

1

4

6

1

37

18

4

14

1

1.0

See also
--------

- [`font-style`](_Resources/Markup%20And%20Styling/css/font-style.md)
- [`font-weight`](_Resources/Markup%20And%20Styling/css/font-weight.md)
- [Fundamental text and font
    styling](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/font>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/html/element/font.md)
\<font\>
========

**Deprecated:** This feature is no longer recommended. Though some
browsers might still support it, it may have already been removed from
the relevant web standards, may be in the process of being dropped, or
may only be kept for compatibility purposes. Avoid using it, and update
existing code if possible; see the [compatibility
table](#browser_compatibility) at the bottom of this page to guide your
decision. Be aware that this feature may cease to work at any time.

The `<font>` [HTML](../index) element defines the font size, color and
face for its content.

**Warning:** Do not use this element. Use the CSS
[Fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts)
properties to style text.

Attributes
----------

Like all other HTML elements, this element supports the [](_Resources/Markup%20And%20Styling/html/global_attributes/index.md).

[`color`](#color) [Deprecated]

:   This attribute sets the text color using either a named color or a
    color specified in the hexadecimal \#RRGGBB format.

[`face`](#face) [Deprecated]

:   This attribute contains a comma-separated list of one or more font
    names. The document text in the default style is rendered in the
    first font face that the client\'s browser supports. If no font
    listed is installed on the local system, the browser typically
    defaults to the proportional or fixed-width font for that system.

[`size`](#size) [Deprecated]

:   This attribute specifies the font size as either a numeric or
    relative value. Numeric values range from `1` to `7` with `1` being
    the smallest and `3` the default. It can be defined using a relative
    value, like `+2` or `-3`, which sets it relative to `3`, the default
    value.

DOM interface
-------------

This element implements the
[`HTMLFontElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFontElement)
interface.

Specifications
--------------

  ---------------------------------------------------------------------------

Specification
  ---------------------------------------------------------------------------

  [HTML Standard\
  [\#
  font]](https://html.spec.whatwg.org/multipage/obsolete.html#font)

  ---------------------------------------------------------------------------

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

`font`

1

12

1

Yes

15

≤4

4.4

18

4

14

≤3.2

1.0

`color`

1

12

1

Yes

15

≤4

4.4

18

4

14

≤3.2

1.0

`face`

1

12

1

Yes

15

≤4

4.4

18

4

14

≤3.2

1.0

`size`

1

12

1

Yes

15

≤4

4.4

18

4

14

≤3.2

1.0

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font>>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclaration/font.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

font property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) font

::: {.features}
override
:::
:::

Gets the value of \"font\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get font => this._font;
```

::: {#setter .section .multi-line-signature}
void font=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"font\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set font(String? value) {
  _font = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/font.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/font.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

font property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) font
:::

Gets the value of \"font\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get font => getPropertyValue('font');
```

::: {#setter .section .multi-line-signature}
void font=([String](../../dart-core/string-class) value)
:::

Sets the value of \"font\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set font(String value) {
  setProperty('font', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/font.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/offscreencanvasrenderingcontext2d/font.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

font property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? font
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get font native;
```

::: {#setter .section .multi-line-signature}
void font=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set font(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OffscreenCanvasRenderingContext2D/font.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/canvasrenderingcontext2d/font.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

font property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) font
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get font native;
```

::: {#setter .section .multi-line-signature}
void font=([String](../../dart-core/string-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set font(String value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CanvasRenderingContext2D/font.html>
:::
