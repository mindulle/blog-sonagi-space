padding
=======

The `padding` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[shorthand property](shorthand_properties.md) sets the [](introduction_to_the_css_box_model.md#padding_area) on
all four sides of an element at once.

Try it
------

An element\'s padding area is the space between its content and its
border.

**Note:** Padding creates extra space within an element. In contrast,
[`margin`](margin.md) creates extra space *around* an element.

Constituent properties
----------------------

This property is a shorthand for the following CSS properties:

- [`padding-top`](padding-top.md)
- [`padding-right`](padding-right.md)
- [`padding-bottom`](padding-bottom.md)
- [`padding-left`](padding-left.md)

Syntax
------

[css]

```css
/* Apply to all four sides */
padding: 1em;

/* top and bottom | left and right */
padding: 5% 10%;

/* top | left and right | bottom */
padding: 1em 2em 2em;

/* top | right | bottom | left */
padding: 5px 1em 0 2em;

/* Global values */
padding: inherit;
padding: initial;
padding: revert;
padding: revert-layer;
padding: unset;
```

The `padding` property may be specified using one, two, three, or four
values. Each value is a [`<length>`](length.md) or a
[`<percentage>`](percentage.md). Negative values are invalid.

- When **one** value is specified, it applies the same padding to
    **all four sides**.
- When **two** values are specified, the first padding applies to the
    **top and bottom**, the second to the **left and right**.
- When **three** values are specified, the first padding applies to
    the **top**, the second to the **right and left**, the third to the
    **bottom**.
- When **four** values are specified, the paddings apply to the
    **top**, **right**, **bottom**, and **left** in that order
    (clockwise).

### Values

[`<length>`](length.md)

:   The size of the padding as a fixed value.

[`<percentage>`](percentage.md)

:   The size of the padding as a percentage, relative to the inline size
    (*width* in a horizontal language, defined by
    [`writing-mode`](writing-mode.md)) of the [](containing_block.md).

Formal definition
-----------------

+-----------------------------------+-----------------------------------+
| [Initial value](initial_value.md)    | as each of the properties of the  |
|                                   | shorthand:\                       |
|                                   |                                   |
|                                   | -   [](padding-bottom.md): |
|                                   |     `0`                           |
|                                   | -                                 |
|                                   |   [`padding-left`](padding-left.md): |
|                                   |     `0`                           |
|                                   | -                                 |
|                                   | [`padding-right`](padding-right.md): |
|                                   |     `0`                           |
|                                   | -   [`padding-top`](padding-top.md): |
|                                   |     `0`                           |
+-----------------------------------+-----------------------------------+
| Applies to                        | all elements, except              |
|                                   | `table-row-group`,                |
|                                   | `table-header-group`,             |
|                                   | `table-footer-group`,             |
|                                   | `table-row`, `table-column-group` |
|                                   | and `table-column`. It also       |
|                                   | applies to                        |
|                                   | [                                 |
|                                   | `::first-letter`](::first-letter) |
|                                   | and                               |
|                                   | [`::first-line`](::first-line).   |
+-----------------------------------+-----------------------------------+
| [Inherited](inheritance.md)          | no                                |
+-----------------------------------+-----------------------------------+
| Percentages                       | refer to the width of the         |
|                                   | containing block                  |
+-----------------------------------+-----------------------------------+
| [Computed value](computed_value.md)  | as each of the properties of the  |
|                                   | shorthand:\                       |
|                                   |                                   |
|                                   | -   [](padding-bottom.md): |
|                                   |     the percentage as specified   |
|                                   |     or the absolute length        |
|                                   | -                                 |
|                                   |   [`padding-left`](padding-left.md): |
|                                   |     the percentage as specified   |
|                                   |     or the absolute length        |
|                                   | -                                 |
|                                   | [`padding-right`](padding-right.md): |
|                                   |     the percentage as specified   |
|                                   |     or the absolute length        |
|                                   | -   [`padding-top`](padding-top.md): |
|                                   |     the percentage as specified   |
|                                   |     or the absolute length        |
+-----------------------------------+-----------------------------------+
| Animation type                    | a [length](length.md#interpolation)  |
+-----------------------------------+-----------------------------------+

Formal syntax
-------------

```
padding = 
  <'padding-top'>  
```

Examples
--------

### Setting padding with pixels

#### HTML

[html]

```html
<h4>This element has moderate padding.</h4>
<h3>The padding is huge in this element!</h3>
```

#### CSS

[css]

```css
h4 {
  background-color: lime;
  padding: 20px 50px;
}

h3 {
  background-color: cyan;
  padding: 110px 50px 50px 110px;
}
```

#### Result

### Setting padding with pixels and percentages

[css]

```css
padding: 5%; /* All sides: 5% padding */

padding: 10px; /* All sides: 10px padding */

padding: 10px 20px; /* top and bottom: 10px padding */
/* left and right: 20px padding */

padding: 10px 3% 20px; /* top:            10px padding */
/* left and right: 3% padding   */
/* bottom:         20px padding */

padding: 1em 3px 30px 5px; /* top:    1em padding  */
/* right:  3px padding  */
/* bottom: 30px padding */
/* left:   5px padding  */
```

Specifications
--------------

  ----------------------------------------------------------------------------------

Specification
  ----------------------------------------------------------------------------------

  [CSS Box Model Module Level 3\
  [\#
  padding-shorthand]](https://drafts.csswg.org/css-box/#padding-shorthand)

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

`padding`

1

12

1

4

3.5

1

≤37

18

4

14

1

1.0

See also
--------

- [](introduction_to_the_css_box_model.md)
- [`padding-top`](padding-top.md), [`padding-right`](padding-right.md),
    [`padding-bottom`](padding-bottom.md), and
    [`padding-left`](padding-left.md).
- The mapped logical properties:
    [`padding-block-start`](padding-block-start.md),
    [`padding-block-end`](padding-block-end.md),
    [`padding-inline-start`](padding-inline-start.md), and
    [`padding-inline-end`](padding-inline-end.md) and the shorthands
    [`padding-block`](padding-block.md) and
    [`padding-inline`](padding-inline.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/padding>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclaration/padding.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

padding property
================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) padding

::: {.features}
override
:::
:::

Gets the value of \"padding\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get padding => this._padding;
```

::: {#setter .section .multi-line-signature}
void padding=([String](../../dart-core/string-class)? value)

::: {.features}
override
:::
:::

Sets the value of \"padding\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set padding(String? value) {
  _padding = value == null ? '' : value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclaration/padding.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/padding.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

padding property
================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) padding
:::

Gets the value of \"padding\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get padding => getPropertyValue('padding');
```

::: {#setter .section .multi-line-signature}
void padding=([String](../../dart-core/string-class) value)
:::

Sets the value of \"padding\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set padding(String value) {
  setProperty('padding', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/padding.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Padding.md)

# Padding

Padding, in the context of convolutional neural networks, refers to adding extra layers of "pixels" or values around the input image or feature map. This is typically done with zeros (zero-padding), but other values can be used. The primary purpose of padding is to control the spatial size of the ou
tput feature maps and to manage boundary effects that arise during convolution operations. By strategically adding padding, we can preserve the original input size, prevent information loss at the edg
es, and improve the performance of the network.

Visit the following resources to learn more:

- [@article@Padding In Convolutional Neural Networks](https://www.digitalocean.com/community/tutorials/padding-in-convolutional-neural-networks)
- [@video@Convolution padding and stride](https://www.youtube.com/watch?v=oDAPkZ53zKk)

## 관련 로드맵
- [[machine-learning|Machine Learning]]
