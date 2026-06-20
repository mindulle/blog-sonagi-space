grid
====

Baseline: [Widely supported]
---------------------------------------

Baseline is determined by this web feature being supported on the
current and the previous major versions of major browsers.

- [Learn
    more](https://developer.mozilla.org/en-US/blog/baseline-unified-view-stable-web-features/)
- [See full compatibility](#browser_compatibility)

The `grid` CSS property is a [shorthand property](shorthand_properties.md)
that sets all of the explicit and implicit grid properties in a single
declaration.

Using `grid` you specify one axis using
[`grid-template-rows`](grid-template-rows.md) or
[`grid-template-columns`](grid-template-columns.md), you then specify how
content should auto-repeat in the other axis using the implicit grid
properties: [`grid-auto-rows`](grid-auto-rows.md),
[`grid-auto-columns`](grid-auto-columns.md), and
[`grid-auto-flow`](grid-auto-flow.md).

Try it
------

**Note:** The sub-properties you don\'t specify are set to their initial
value, as normal for shorthands. Also, the gutter properties are NOT
reset by this shorthand.

Constituent properties
----------------------

This property is a shorthand for the following CSS properties:

- [`grid-auto-columns`](grid-auto-columns.md)
- [`grid-auto-flow`](grid-auto-flow.md)
- [`grid-auto-rows`](grid-auto-rows.md)
- [`grid-template-areas`](grid-template-areas.md)
- [`grid-template-columns`](grid-template-columns.md)
- [`grid-template-rows`](grid-template-rows.md)

Syntax
------

[css]

```css
/* <'grid-template'> values */
grid: none;
grid: "a" 100px "b" 1fr;
grid: [linename1] "a" 100px [linename2];
grid: "a" 200px "b" min-content;
grid: "a" minmax(100px, max-content) "b" 20%;
grid: 100px / 200px;
grid: minmax(400px, min-content) / repeat(auto-fill, 50px);

/* <'grid-template-rows'> /
   [ auto-flow && dense? ] <'grid-auto-columns'>? values */
grid: 200px / auto-flow;
grid: 30% / auto-flow dense;
grid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px;
grid: [line1] minmax(20em, max-content) / auto-flow dense 40%;

/* [ auto-flow && dense? ] <'grid-auto-rows'>? /
   <'grid-template-columns'> values */
grid: auto-flow / 200px;
grid: auto-flow dense / 30%;
grid: auto-flow 300px / repeat(3, [line1 line2 line3] 200px);
grid: auto-flow dense 40% / [line1] minmax(20em, max-content);

/* Global values */
grid: inherit;
grid: initial;
grid: revert;
grid: revert-layer;
grid: unset;
```

### Values

[`<'grid-template'>`](#grid-template)

:   Defines the [`grid-template`](grid-template.md) including
    [`grid-template-columns`](grid-template-columns.md),
    [`grid-template-rows`](grid-template-rows.md) and
    [`grid-template-areas`](grid-template-areas.md).

[`<'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?`](#grid-template-rows_auto-flow_dense_grid-auto-columns)

:   Sets up an auto-flow by setting the row tracks explicitly via the
    [`grid-template-rows`](grid-template-rows.md) property (and the
    [`grid-template-columns`](grid-template-columns.md) property to `none`)
    and specifying how to auto-repeat the column tracks via
    [`grid-auto-columns`](grid-auto-columns.md) (and setting
    [`grid-auto-rows`](grid-auto-rows.md) to `auto`).
    [`grid-auto-flow`](grid-auto-flow.md) is also set to `column`
    accordingly, with `dense` if it\'s specified.

    All other `grid` sub-properties are reset to their initial values.

[`[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`](#_auto-flow_dense_grid-auto-rows_grid-template-columns)

:   Sets up an auto-flow by setting the column tracks explicitly via the
    [`grid-template-columns`](grid-template-columns.md) property (and the
    [`grid-template-rows`](grid-template-rows.md) property to `none`) and
    specifying how to auto-repeat the row tracks via
    [`grid-auto-rows`](grid-auto-rows.md) (and setting
    [`grid-auto-columns`](grid-auto-columns.md) to `auto`).
    [`grid-auto-flow`](grid-auto-flow.md) is also set to `row` accordingly,
    with `dense` if it\'s specified.

    All other `grid` sub-properties are reset to their initial values.

Formal definition
-----------------

+-----------------------------------+-----------------------------------+
| [Initial value](initial_value.md)    | as each of the properties of the  |
|                                   | shorthand:\                       |
|                                   |                                   |
|                                   | -   [](grid-template-rows.md): |
|                                   |     `none`                        |
|                                   | -   [](grid-template-columns.md): |
|                                   |     `none`                        |
|                                   | -   [](grid-template-areas.md): |
|                                   |     `none`                        |
|                                   | -   [](grid-auto-rows.md): |
|                                   |     `auto`                        |
|                                   | -   [](grid-auto-columns.md): |
|                                   |     `auto`                        |
|                                   | -   [](grid-auto-flow.md): |
|                                   |     `row`                         |
|                                   | -                                 |
|                                   |  [`grid-column-gap`](column-gap.md): |
|                                   |     `0`                           |
|                                   | -   [`grid-row-gap`](row-gap.md):    |
|                                   |     `0`                           |
|                                   | -   [`column-gap`](column-gap.md):   |
|                                   |     `normal`                      |
|                                   | -   [`row-gap`](row-gap.md):         |
|                                   |     `normal`                      |
+-----------------------------------+-----------------------------------+
| Applies to                        | grid containers                   |
+-----------------------------------+-----------------------------------+
| [Inherited](inheritance.md)          | no                                |
+-----------------------------------+-----------------------------------+
| Percentages                       | as each of the properties of the  |
|                                   | shorthand:\                       |
|                                   |                                   |
|                                   | -   [](grid-template-rows.md): |
|                                   |     refer to corresponding        |
|                                   |     dimension of the content area |
|                                   | -   [](grid-template-columns.md): |
|                                   |     refer to corresponding        |
|                                   |     dimension of the content area |
|                                   | -   [](grid-auto-rows.md): |
|                                   |     refer to corresponding        |
|                                   |     dimension of the content area |
|                                   | -   [](grid-auto-columns.md): |
|                                   |     refer to corresponding        |
|                                   |     dimension of the content area |
+-----------------------------------+-----------------------------------+
| [Computed value](computed_value.md)  | as each of the properties of the  |
|                                   | shorthand:\                       |
|                                   |                                   |
|                                   | -   [](grid-template-rows.md): |
|                                   |     as specified, but with        |
|                                   |     relative lengths converted    |
|                                   |     into absolute lengths         |
|                                   | -   [](grid-template-columns.md): |
|                                   |     as specified, but with        |
|                                   |     relative lengths converted    |
|                                   |     into absolute lengths         |
|                                   | -   [](grid-template-areas.md): |
|                                   |     as specified                  |
|                                   | -   [](grid-auto-rows.md): |
|                                   |     the percentage as specified   |
|                                   |     or the absolute length        |
|                                   | -   [](grid-auto-columns.md): |
|                                   |     the percentage as specified   |
|                                   |     or the absolute length        |
|                                   | -   [](grid-auto-flow.md): |
|                                   |     as specified                  |
|                                   | -                                 |
|                                   |  [`grid-column-gap`](column-gap.md): |
|                                   |     the percentage as specified   |
|                                   |     or the absolute length        |
|                                   | -   [`grid-row-gap`](row-gap.md):    |
|                                   |     the percentage as specified   |
|                                   |     or the absolute length        |
|                                   | -   [`column-gap`](column-gap.md):   |
|                                   |     as specified, with            |
|                                   |     \<length\>s made absolute,    |
|                                   |     and normal computing to zero  |
|                                   |     except on multi-column        |
|                                   |     elements                      |
|                                   | -   [`row-gap`](row-gap.md): as      |
|                                   |     specified, with \<length\>s   |
|                                   |     made absolute, and normal     |
|                                   |     computing to zero except on   |
|                                   |     multi-column elements         |
+-----------------------------------+-----------------------------------+
| Animation type                    | as each of the properties of the  |
|                                   | shorthand:\                       |
|                                   |                                   |
|                                   | -   [](grid-template-rows.md): |
|                                   |     simple list of length,        |
|                                   |     percentage, or calc, provided |
|                                   |     the only differences are in   |
|                                   |     the values of the length,     |
|                                   |     percentage, or calc           |
|                                   |     components in the list        |
|                                   | -   [](grid-template-columns.md): |
|                                   |     simple list of length,        |
|                                   |     percentage, or calc, provided |
|                                   |     the only differences are in   |
|                                   |     the values of the length,     |
|                                   |     percentage, or calc           |
|                                   |     components in the list        |
|                                   | -   [](grid-template-areas.md): |
|                                   |     discrete                      |
|                                   | -   [](grid-auto-rows.md): |
|                                   |     by computed value type        |
|                                   | -   [](grid-auto-columns.md): |
|                                   |     by computed value type        |
|                                   | -   [](grid-auto-flow.md): |
|                                   |     discrete                      |
|                                   | -                                 |
|                                   |  [`grid-column-gap`](column-gap.md): |
|                                   |     a                             |
|                                   |                                   |
|                                   |    [length](length.md#interpolation) |
|                                   | -   [`grid-row-gap`](row-gap.md): a  |
|                                   |                                   |
|                                   |    [length](length.md#interpolation) |
|                                   | -   [`column-gap`](column-gap.md): a |
|                                   |                                   |
|                                   |   [length](length.md#interpolation), |
|                                   |     [](percentage.md#interpolation) |
|                                   |     or calc();                    |
|                                   | -   [`row-gap`](row-gap.md): a       |
|                                   |                                   |
|                                   |   [length](length.md#interpolation), |
|                                   |     [](percentage.md#interpolation) |
|                                   |     or calc();                    |
+-----------------------------------+-----------------------------------+

Formal syntax
-------------

```
grid = 
  <'grid-template'>                                   |
  <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?  |
  [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>  
```

Examples
--------

### Creating a grid layout

#### HTML

[html]

```html
<div id="container">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

[css]

```css
#container {
  display: grid;
  grid: repeat(2, 60px) / auto-flow 80px;
}

#container > div {
  background-color: #8ca0ff;
  width: 50px;
  height: 50px;
}
```

#### Result

Specifications
--------------

  -----------------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------------

  [CSS Grid Layout Module Level 2\
  [\#
  grid-shorthand]](https://drafts.csswg.org/css-grid/#grid-shorthand)

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

`grid`

57

16

52

No

44

10.1

57

57

52

43

10.3

6.0This was added early so is out of sync with the equivalent Chromium
version.

See also
--------

- Related CSS properties: [`grid-template`](grid-template.md),
    [`grid-template-rows`](grid-template-rows.md),
    [`grid-template-columns`](grid-template-columns.md),
    [`grid-template-areas`](grid-template-areas.md),
    [`grid-auto-columns`](grid-auto-columns.md),
    [`grid-auto-rows`](grid-auto-rows.md),
    [`grid-auto-flow`](grid-auto-flow.md)
- Grid Layout Guide: *[](grid_layout_using_line-based_placement.md)*
- Grid Layout Guide: *[](grid_template_areas.md#grid_definition_shorthands)*

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/grid>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/@media/grid.md)
grid
====

The `grid` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[media feature](@media.md#media_features) can be used to test whether
the output device uses a grid-based screen.

Most modern computers and smartphones have bitmap-based screens.
Examples of grid-based devices include text-only terminals and basic
phones with only one fixed font.

Syntax
------

The `grid` feature is specified as a
[`<mq-boolean>`](using_media_queries.md) value (`0` or
`1`) representing whether or not the output device is grid-based.

Examples
--------

### HTML

[html]

```html
<p class="unknown">I don't know if you're using a grid device. :-(</p>
<p class="bitmap">You are using a bitmap device.</p>
<p class="grid">You are using a grid device! Neato!</p>
```

### CSS

[css]

```css
:not(.unknown) {
  color: lightgray;
}

@media (grid: 0) {
  .unknown {
    color: lightgray;
  }

  .bitmap {
    color: red;
    text-transform: uppercase;
  }
}

@media (grid: 1) {
  .unknown {
    color: lightgray;
  }

  .grid {
    color: black;
    text-transform: uppercase;
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
  [\# grid]](https://drafts.csswg.org/mediaqueries/#grid)

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

`grid`

1

12

2

10

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

- [Using Media Queries](using_media_queries.md)
- [\@media](@media.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/@media/grid>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/grid.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

grid property
=============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) grid
:::

Gets the value of \"grid\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get grid => getPropertyValue('grid');
```

::: {#setter .section .multi-line-signature}
void grid=([String](../../dart-core/string-class) value)
:::

Sets the value of \"grid\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set grid(String value) {
  setProperty('grid', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/grid.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Grid.md)

# Grid

Every layout should sit on a grid that brings order and hierarchy to the interface. Define a grid separately for mobile, tablet and desktop devices with columns, gutters, and margins so your interface can adapt to any platform easily.


## 관련 로드맵
- [[design-system|design-system]]
