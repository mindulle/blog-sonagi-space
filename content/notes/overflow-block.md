overflow-block
==============

The `overflow-block`
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets
what shows when content overflows the block start and block end edges of
a box. This may be nothing, a scroll bar, or the overflow content.

**Note:** The `overflow-block` property maps to
[`overflow-y`](overflow-y.md) or [`overflow-x`](overflow-x.md) depending on
the writing mode of the document.

Syntax
------

[css]

```css
/* Keyword values */
overflow-block: visible;
overflow-block: hidden;
overflow-block: clip;
overflow-block: scroll;
overflow-block: auto;

/* Global values */
overflow-block: inherit;
overflow-block: initial;
overflow-block: revert;
overflow-block: revert-layer;
overflow-block: unset;
```

The `overflow-block` property is specified as a single
[`<overflow>`](overflow_value.md) keyword value:

### Values

[`visible`](#visible)

:   Content is not clipped and may be rendered outside the padding
    box\'s block start and block end edges.

[`hidden`](#hidden)

:   Content is clipped if necessary to fit the block dimension in the
    padding box. No scrollbars are provided.

[`clip`](#clip)

:   Overflow content is clipped at the element\'s overflow clip edge
    that is defined using the
    [`overflow-clip-margin`](overflow-clip-margin.md) property.

[`scroll`](#scroll)

:   Content is clipped if necessary to fit in the block dimension in the
    padding box. Browsers display scrollbars whether or not any content
    is actually clipped. (This prevents scrollbars from appearing or
    disappearing when the content changes.) Printers may still print
    overflowing content.

[`auto`](#auto)

:   Depends on the user agent. If content fits inside the padding box,
    it looks the same as `visible`, but still establishes a new
    block-formatting context.

Formal definition
-----------------

  ---------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [Initial value](initial_value.md)     `auto`
  Applies to                         Block-containers, flex containers, and grid containers
  [Inherited](inheritance.md)           no
  [Computed value](computed_value.md)   as specified, except with `visible`/`clip` computing to `auto`/`hidden` respectively if one of [`overflow-x`](overflow-x.md) or [`overflow-y`](overflow-y.md) is neither `visible` nor clip
  Animation type                     discrete
  ---------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Formal syntax
-------------

```
overflow-block = 
  <'overflow'>  
```

Examples
--------

### HTML

[html]

```html
<ul>
  <li>
    <code>overflow-block: hidden</code> (hides the text outside the box)
    <div id="hidden">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: scroll</code> (always adds a scrollbar)
    <div id="scroll">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: clip</code> (hides the text outside the box beyond the
    overflow clip edge)
    <div id="clip">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: visible</code> (displays the text outside the box if
    needed)
    <div id="visible">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li>
    <code>overflow-block: auto</code> (on most browsers, equivalent to
    <code>scroll</code>)
    <div id="auto">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

### CSS

[css]

```css
div {
  border: 1px solid black;
  width: 250px;
  height: 100px;
  margin-bottom: 120px;
}

#hidden {
  overflow-block: hidden;
}
#scroll {
  overflow-block: scroll;
}
#scroll {
  overflow-block: clip;
}
#visible {
  overflow-block: visible;
}
#auto {
  overflow-block: auto;
}
```

### Result

Specifications
--------------

  -------------------------------------------------------------------------------------

Specification
  -------------------------------------------------------------------------------------

  [CSS Overflow Module Level 3\
  [\#
  overflow-control]](https://drafts.csswg.org/css-overflow/#overflow-control)

  -------------------------------------------------------------------------------------

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

`overflow-block`

No

No

69

No

No

No

No

No

79

No

No

No

See also
--------

- [`text-overflow`](text-overflow.md), [`white-space`](white-space.md),
    [`overflow`](overflow.md), [`overflow-inline`](_Resources/Markup%20And%20Styling/css/overflow-inline.md),
    [`overflow-x`](overflow-x.md), [`overflow-y`](overflow-y.md),
    [`clip`](clip.md), [`display`](display.md)
- [CSS logical properties](css_logical_properties_and_values.md)
- [CSS overflow](css_overflow.md) module
- [CSS scrollbars style](css_scrollbars_styling.md) module
- [CSS writing modes](css_writing_modes.md)
- [CSS building blocks: Overflowing
    content](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-block>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/@media/overflow-block.md)
overflow-block
==============

The `overflow-block`
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [](@media.md#media_features) can be used to test how the output
device handles content that overflows the initial [](containing_block.md) along the block axis.

Syntax
------

The `overflow-block` feature is specified as a keyword value chosen from
the list below.

[`none`](#none)

:   Content that overflows the block axis is not displayed.

[`scroll`](#scroll)

:   Content that overflows the block axis can be seen by scrolling to
    it.

[`optional-paged`](#optional-paged)

:   Content that overflows the block axis can be seen by scrolling to
    it, but page breaks can be manually triggered (such as via
    [`break-inside`](break-inside.md), etc.) to cause the following
    content to display on the following page.

[`paged`](#paged)

:   Content is broken up into discrete pages; content that overflows one
    page in the block axis is displayed on the following page.

Examples
--------

### HTML

[html]

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac turpis
  eleifend, fringilla velit ac, aliquam tellus. Vestibulum ante ipsum primis in
  faucibus orci luctus et ultrices posuere cubilia Curae; Nunc velit erat,
  tempus id rutrum sed, dapibus ut urna. Integer vehicula nibh a justo imperdiet
  rutrum. Nam faucibus pretium orci imperdiet sollicitudin. Nunc id facilisis
  dui. Proin elementum et massa et feugiat. Integer rutrum ullamcorper eleifend.
  Proin sit amet tincidunt risus. Sed nec augue congue eros accumsan tincidunt
  sed eget ex.
</p>
```

### CSS

[css]

```css
@media (overflow-block: scroll) {
  p {
    color: red;
  }
}
```

### Result

Specifications
--------------

  ---------------------------------------------------------------------------------------

Specification
  ---------------------------------------------------------------------------------------

  [Media Queries Level 4\
  [\#
  mf-overflow-block]](https://drafts.csswg.org/mediaqueries/#mf-overflow-block)

  ---------------------------------------------------------------------------------------

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

`overflow-block`

113

113

66

No

99

17

113

113

66

No

17

No

See also
--------

- [Using Media Queries](using_media_queries.md)
- [\@media](@media.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/@media/overflow-block>
