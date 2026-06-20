isolation
=========

The `isolation` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
property determines whether an element must create a new [stacking
context](https://developer.mozilla.org/en-US/docs/Glossary/Stacking_context).

Try it
------

This property is especially helpful when used in conjunction with
[`mix-blend-mode`](mix-blend-mode.md) and [`z-index`](z-index.md).

Syntax
------

[css]

```css
/* Keyword values */
isolation: auto;
isolation: isolate;

/* Global values */
isolation: inherit;
isolation: initial;
isolation: revert;
isolation: revert-layer;
isolation: unset;
```

The `isolation` property is specified as one of the keyword values
listed below.

### Values

[`auto`](#auto)

:   A new stacking context is created only if one of the properties
    applied to the element requires it.

[`isolate`](#isolate)

:   A new stacking context must be created.

Formal definition
-----------------

  ---------------------------------- ---------------------------------------------------------------------------------------------------------------
  [Initial value](initial_value.md)     `auto`
  Applies to                         All elements. In SVG, it applies to container elements, graphics elements, and graphics referencing elements.
  [Inherited](inheritance.md)           no
  [Computed value](computed_value.md)   as specified
  Animation type                     Not animatable
  ---------------------------------- ---------------------------------------------------------------------------------------------------------------

Formal syntax
-------------

```
isolation = 
  <isolation-mode>  

<isolation-mode> = 
  auto     |
  isolate  
```

Examples
--------

### Forcing a new stacking context for an element

#### HTML

[html]

```html
<div class="big-square ">
  <div class="isolation-auto">
    <div class="small-square">auto</div>
  </div>
  <div class="isolation-isolate">
    <div class="small-square">isolate</div>
  </div>
</div>
```

#### CSS

[css]

```css
.isolation-auto {
  isolation: auto;
}

.isolation-isolate {
  isolation: isolate;
}

.big-square {
  background-color: rgb(0, 255, 0);
  width: 200px;
  height: 210px;
}

.small-square {
  background-color: rgb(0, 255, 0);
  width: 100px;
  height: 100px;
  border: 1px solid black;
  padding: 2px;
  mix-blend-mode: difference;
}
```

#### Result

Specifications
--------------

  -----------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------

  [Compositing and Blending Level 2\
  [\# isolation]](https://drafts.fxtf.org/compositing/#isolation)

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

`isolation`

41

79

36

No

30

8

41

41

36

30

8

4.0

See also
--------

- [`<blend-mode>`](blend-mode.md)
- [`mix-blend-mode`](mix-blend-mode.md),
    [`background-blend-mode`](background-blend-mode.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/isolation>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstyledeclarationbase/isolation.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

isolation property
==================

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class) isolation
:::

Gets the value of \"isolation\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String get isolation => getPropertyValue('isolation');
```

::: {#setter .section .multi-line-signature}
void isolation=([String](../../dart-core/string-class) value)
:::

Sets the value of \"isolation\"

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set isolation(String value) {
  setProperty('isolation', value, '');
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleDeclarationBase/isolation.html>
:::
