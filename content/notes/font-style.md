font-style
==========

The `font-style` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
property sets whether a font should be styled with a normal, italic, or
oblique face from its [`font-family`](_Resources/Markup%20And%20Styling/css/font-family.md).

Try it
------

**Italic** font faces are generally cursive in nature, usually using
less horizontal space than their unstyled counterparts, while
**oblique** faces are usually just sloped versions of the regular face.
When the specified style is not available, both italic and oblique faces
are simulated by artificially sloping the glyphs of the regular face
(use [`font-synthesis`](font-synthesis.md) to control this behavior).

Syntax
------

[css]

```css
font-style: normal;
font-style: italic;
font-style: oblique;
font-style: oblique 10deg;

/* Global values */
font-style: inherit;
font-style: initial;
font-style: revert;
font-style: revert-layer;
font-style: unset;
```

The `font-style` property is specified as a single keyword chosen from
the list of values below, which can optionally include an angle if the
keyword is `oblique`.

### Values

[`normal`](#normal)

:   Selects a font that is classified as `normal` within a
    [`font-family`](_Resources/Markup%20And%20Styling/css/font-family.md).

[`italic`](#italic)

:   Selects a font that is classified as `italic`. If no italic version
    of the face is available, one classified as `oblique` is used
    instead. If neither is available, the style is artificially
    simulated.

[`oblique`](#oblique)

:   Selects a font that is classified as `oblique`. If no oblique
    version of the face is available, one classified as `italic` is used
    instead. If neither is available, the style is artificially
    simulated.

[`oblique`](#oblique_2) [`<angle>`](angle.md)

:   Selects a font classified as `oblique`, and additionally specifies
    an angle for the slant of the text. If one or more oblique faces are
    available in the chosen font family, the one that most closely
    matches the specified angle is chosen. If no oblique faces are
    available, the browser will synthesize an oblique version of the
    font by slanting a normal face by the specified amount. Valid values
    are degree values of `-90deg` to `90deg` inclusive. If an angle is
    not specified, an angle of 14 degrees is used. Positive values are
    slanted to the end of the line, while negative values are slanted
    towards the beginning.

    In general, for a requested angle of 14 degrees or greater, larger
    angles are preferred; otherwise, smaller angles are preferred (see
    the spec\'s [font matching
    section](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm)
    for the precise algorithm).

### Variable fonts

Variable fonts can offer a fine control over the degree to which an
oblique face is slanted. You can select this using the `<angle>`
modifier for the `oblique` keyword.

For TrueType or OpenType variable fonts, the `"slnt"` variation is used
to implement varying slant angles for oblique, and the `"ital"`
variation with a value of 1 is used to implement italic values. See
[`font-variation-settings`](_Resources/Markup%20And%20Styling/css/font-variation-settings.md).

**Note:** For the example below to work, you\'ll need a browser that
supports the CSS Fonts Level 4 syntax in which `font-style: oblique` can
accept an `<angle>`. The demo loads with `font-style: oblique 23deg;`.
Change the value to see the slant of the text change.

Accessibility concerns
----------------------

Large sections of text set with a `font-style` value of `italic` may be
difficult for people with cognitive concerns such as Dyslexia to read.

- [MDN Understanding WCAG, Guideline 1.4
    explanations](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Understanding WCAG
    2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

Formal definition
-----------------

  ---------------------------------- ---------------------------------------------------------------------------------------------------------
  [Initial value](initial_value.md)     `normal`
  Applies to                         all elements. It also applies to [`::first-letter`](::first-letter) and [`::first-line`](::first-line).
  [Inherited](inheritance.md)           yes
  [Computed value](computed_value.md)   as specified
  Animation type                     by computed value type; `normal` animates as `oblique 0deg`
  ---------------------------------- ---------------------------------------------------------------------------------------------------------

Formal syntax
-------------

```
font-style = 
  normal                           |
  italic                           |
  oblique <angle [-90deg,90deg]>?  
```

Examples
--------

### Font styles

[css]

```css
.normal {
  font-style: normal;
}

.italic {
  font-style: italic;
}

.oblique {
  font-style: oblique;
}
```

Specifications
--------------

  --------------------------------------------------------------------------------

Specification
  --------------------------------------------------------------------------------

  [CSS Fonts Module Level 4\
  [\#
  font-style-prop]](https://drafts.csswg.org/css-fonts/#font-style-prop)

  --------------------------------------------------------------------------------

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

`font-style`

1

12

1Before Firefox 44, `oblique` was not distinguished from `italic`.

4

7

1

4.4

18

4Before Firefox 44, `oblique` was not distinguished from `italic`.

10.1

1

1.0

`oblique-angle`

62

79

61

No

49

11.1

62

62

61

46

11.3

8.0

See also
--------

- [`font-family`](_Resources/Markup%20And%20Styling/css/font-family.md)
- [`font-weight`](_Resources/Markup%20And%20Styling/css/font-weight.md)
- [Fundamental text and font
    styling](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/font-style>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/@font-face/font-style.md)
font-style
==========

The `font-style` CSS descriptor allows authors to specify font styles
for the fonts specified in the [`@font-face`](@font-face.md) at-rule.

For a particular font family, authors can download various font faces
that correspond to the different styles of the same font family and then
use the `font-style` descriptor to explicitly specify the font face\'s
style. The values for this CSS descriptor are the same as that of the
corresponding [`font-style`](_Resources/Markup%20And%20Styling/css/font-style.md) property.

Syntax
------

[css]

```css
font-style: normal;
font-style: italic;
font-style: oblique;
font-style: oblique 30deg;
font-style: oblique 30deg 50deg;
```

### Values

[`normal`](#normal)

:   Selects the normal version of the font-family.

[`italic`](#italic)

:   Specifies that font-face is an italicized version of the normal
    font.

[`oblique`](#oblique)

:   Specifies that the font-face is an artificially sloped version of
    the normal font.

[`oblique`](#oblique_2) with angle

:   Selects a font classified as `oblique`, and additionally specifies
    an angle for the slant of the text.

[`oblique`](#oblique_3) with angle range

:   Selects a font classified as `oblique`, and additionally specifies a
    range of allowable angle for the slant of the text. Note that a
    range is only supported when the `font-style` is `oblique`; for
    `font-style: normal` or `italic`, no second value is allowed.

Formal definition
-----------------

  ------------------------------------- -------------------------------
  Related [at-rule](at-rule.md)         [`@font-face`](@font-face.md)
  [Initial value](initial_value.md)     `normal`
  [Computed value](computed_value.md)   as specified
  ------------------------------------- -------------------------------

Formal syntax
-------------

```
font-style = 
  auto                       |
  normal                     |
  italic                     |
  oblique [ <angle> ]?  
```

Examples
--------

### Specifying an italic font style

As an example, consider the garamond font family, in its normal form, we
get the following result:

[css]

```css
@font-face {
  font-family: garamond;
  src: url("garamond.ttf");
}
```

The italicized version of this text uses the same glyphs present in the
unstyled version, but they are artificially sloped by a few degrees.

On the other hand, if a true italicized version of the font family
exists, we can include it in the `src` descriptor and specify the font
style as italic, so that it is clear that the font is italicized. True
italics use different glyphs and are a bit different from their upright
counterparts, having some unique features and generally have a rounded
and calligraphic quality. These fonts are specially created by font
designers and are **not** artificially sloped.

[css]

```css
@font-face {
  font-family: garamond;
  src: url("garamond-italic.ttf");
  font-style: italic;
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

`font-style`

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
- [`font-weight`](_Resources/Markup%20And%20Styling/css/@font-face/font-weight.md)
- [`font-feature-settings`](_Resources/Markup%20And%20Styling/css/font-feature-settings.md)
- [`font-variation-settings`](_Resources/Markup%20And%20Styling/css/@font-face/font-variation-settings.md)
- [`src`](src.md)
- [`unicode-range`](unicode-range.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-style>
