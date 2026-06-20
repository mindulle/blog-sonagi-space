columns
=======

The `columns` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
shorthand property sets the number of columns to use when drawing an
element\'s contents, as well as those columns\' widths.

Try it
------

Constituent properties
----------------------

This property is a shorthand for the following CSS properties:

- [`column-count`](column-count.md)
- [`column-width`](column-width.md)

Syntax
------

[css]

```css
/* Column width */
columns: 18em;

/* Column count */
columns: auto;
columns: 2;

/* Both column width and count */
columns: 2 auto;
columns: auto 12em;
columns: auto auto;

/* Global values */
columns: inherit;
columns: initial;
columns: revert;
columns: revert-layer;
columns: unset;
```

The `columns` property may be specified as one or two of the values
listed below, in any order.

### Values

[`<'column-width'>`](#column-width)

:   The ideal column width, defined as a [`<length>`](length.md) or the
    keyword `auto`. The actual width may be wider or narrower to fit the
    available space. See [`column-width`](column-width.md).

[`<'column-count'>`](#column-count)

:   The ideal number of columns into which the element\'s content should
    be flowed, defined as an [`<integer>`](integer.md) or the keyword
    `auto`. If neither this value nor the column\'s width are `auto`, it
    merely indicates the maximum allowable number of columns. See
    [`column-count`](column-count.md).

Formal definition
-----------------

+-----------------------------------+-----------------------------------+
| [Initial value](initial_value.md)    | as each of the properties of the  |
|                                   | shorthand:\                       |
|                                   |                                   |
|                                   | -                                 |
|                                   |   [`column-width`](column-width.md): |
|                                   |     `auto`                        |
|                                   | -                                 |
|                                   |   [`column-count`](column-count.md): |
|                                   |     `auto`                        |
+-----------------------------------+-----------------------------------+
| Applies to                        | Block containers except table     |
|                                   | wrapper boxes                     |
+-----------------------------------+-----------------------------------+
| [Inherited](inheritance.md)          | no                                |
+-----------------------------------+-----------------------------------+
| [Computed value](computed_value.md)  | as each of the properties of the  |
|                                   | shorthand:\                       |
|                                   |                                   |
|                                   | -                                 |
|                                   |   [`column-width`](column-width.md): |
|                                   |     the absolute length, zero or  |
|                                   |     larger                        |
|                                   | -                                 |
|                                   |   [`column-count`](column-count.md): |
|                                   |     as specified                  |
+-----------------------------------+-----------------------------------+
| Animation type                    | as each of the properties of the  |
|                                   | shorthand:\                       |
|                                   |                                   |
|                                   | -                                 |
|                                   |   [`column-width`](column-width.md): |
|                                   |     a                             |
|                                   |                                   |
|                                   |    [length](length.md#interpolation) |
|                                   | -                                 |
|                                   |   [`column-count`](column-count.md): |
|                                   |     an                            |
|                                   |                                   |
|                                   |  [integer](integer.md#interpolation) |
+-----------------------------------+-----------------------------------+

Formal syntax
-------------

```
columns = 
  <'column-width'>  ||
  <'column-count'>  
```

Examples
--------

### Setting three equal columns

#### HTML

[html]

```html
<p class="content-box">
  This is a bunch of text split into three columns using the CSS `columns`
  property. The text is equally distributed over the columns.
</p>
```

#### CSS

[css]

```css
.content-box {
  columns: 3 auto;
}
```

#### Result

Specifications
--------------

  -----------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------

  [CSS Multi-column Layout Module Level 1\
  [\# columns]](https://drafts.csswg.org/css-multicol/#columns)

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

`columns`

5050

1212

52

9--74Before version 37, multiple columns didn\'t work with
`display: table-caption` elements.

10

1511.1

93

502

50

52

22Before version 37, multiple columns didn\'t work with
`display: table-caption` elements.

1411.1

93.2

5.0

See also
--------

- [`widows`](widows.md)
- [`orphans`](orphans.md)
- [Paged media](css_paged_media.md)
- [Multiple-column
    Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/columns>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/columns.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

columns property
================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) columns
:::

Gets the value of \"columns\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get columns => getPropertyValue('columns');
```

::: {#setter .section .multi-line-signature}
void columns=([String](../../dart-core/string-class) value)
:::

Sets the value of \"columns\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set columns(String value) {
  setProperty('columns', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/columns.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Columns.md)

# Columns in PostgreSQL

Columns are a fundamental component of PostgreSQL's object model. They are used to store the actual data within a table and define their attributes such as data type, constraints, and other properties. 

Learn more from the following resources:

- [@official@Columns](https://www.postgresql.org/docs/current/ddl-alter.html)
- [@article@PostgreSQL ADD COLUMN](https://www.w3schools.com/postgresql/postgresql_add_column.php)

## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
