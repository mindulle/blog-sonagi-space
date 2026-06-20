widows
======

The `widows` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
property sets the minimum number of lines in a block container that must
be shown at the *top* of a [page](css_paged_media.md), region, or
[column](css_multicol_layout.md).

In typography, a *widow* is the last line of a paragraph that appears
alone at the top of a page. (The paragraph is continued from a prior
page.)

Syntax
------

[css]

```css
/* <integer> values */
widows: 2;
widows: 3;

/* Global values */
widows: inherit;
widows: initial;
widows: revert;
widows: revert-layer;
widows: unset;
```

### Values

[`<integer>`](integer.md)

:   The minimum number of lines that can stay by themselves at the top
    of a new fragment after a fragmentation break. The value must be
    positive.

Formal definition
-----------------

  ---------------------------------- --------------------------
  [Initial value](initial_value.md)     `2`
  Applies to                         block container elements
  [Inherited](inheritance.md)           yes
  [Computed value](computed_value.md)   as specified
  Animation type                     by computed value type
  ---------------------------------- --------------------------

Formal syntax
-------------

```
widows = 
  <integer [0,∞]>  
```

Examples
--------

### Controlling column widows

#### HTML

[html]

```html
<div>
  <p>This is the first paragraph containing some text.</p>
  <p>
    This is the second paragraph containing some more text than the first one.
    It is used to demonstrate how widows work.
  </p>
  <p>
    This is the third paragraph. It has a little bit more text than the first
    one.
  </p>
</div>
```

#### CSS

[css]

```css
div {
  background-color: #8cffa0;
  columns: 3;
  widows: 2;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### Result

Specifications
--------------

  -----------------------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------------------

  [CSS Fragmentation Module Level 3\
  [\# widows-orphans]](https://drafts.csswg.org/css-break/#widows-orphans)

[CSS Multi-column Layout Module Level 1\
  [\#
  filling-columns]](https://drafts.csswg.org/css-multicol/#filling-columns)
  -----------------------------------------------------------------------------------

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

`widows`

25

12

No

8

9.2

1.3

4.4

25

No

14

1

1.5

See also
--------

- [`orphans`](orphans.md)
- [Paged media](css_paged_media.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/widows>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/widows.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

widows property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) widows
:::

Gets the value of \"widows\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get widows => getPropertyValue('widows');
```

::: {#setter .section .multi-line-signature}
void widows=([String](../../dart-core/string-class) value)
:::

Sets the value of \"widows\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set widows(String value) {
  setProperty('widows', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/widows.html>
:::
