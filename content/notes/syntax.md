Syntax
======

The basic goal of the Cascading Stylesheet
([CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)) language is to
allow a browser engine to paint elements of the page with specific
features, like colors, positioning, or decorations. The *CSS syntax*
reflects this goal and its basic building blocks are:

- The **property** which is an identifier, that is a human-readable
    *name*, that defines which feature is considered.
- The **value** which describe how the feature must be handled by the
    engine. Each property has a set of valid values, defined by a formal
    grammar, as well as a semantic meaning, implemented by the browser
    engine.

CSS declarations
----------------

Setting CSS properties to specific values is the core function of the
CSS language. A property and value pair is called a **declaration**, and
any CSS engine calculates which declarations apply to every single
element of a page in order to appropriately lay it out, and to style it.

Both properties and values are case-insensitive by default in CSS. The
pair is separated by a colon, \'`:`\' (`U+003A COLON`), and white spaces
before, between, and after properties and values, but not necessarily
inside, are ignored.

There are more than [100 different properties](index) in CSS and a
nearly infinite number of different values. Not all pairs of properties
and values are allowed and each property defines what are the valid
values. When a value is not valid for a given property, the declaration
is deemed *invalid* and is wholly ignored by the CSS engine.

CSS declaration blocks
----------------------

Declarations are grouped in **blocks**, that is in a structure delimited
by an opening brace, \'`{`\' (`U+007B LEFT CURLY BRACKET`), and a
closing one, \'`}`\' (`U+007D RIGHT CURLY BRACKET`). Blocks sometimes
can be nested, so opening and closing braces must be matched.

Such blocks are naturally called **declaration blocks** and declarations
inside them are separated by a semicolon, \'`;`\' (`U+003B SEMICOLON`).
A declaration block may be empty, that is containing null declaration.
White spaces around declarations are ignored. The last declaration of a
block doesn\'t need to be terminated by a semicolon, though it is often
considered *good style* to do it as it prevents forgetting to add it
when extending the block with another declaration.

A CSS declaration block is visualized in the diagram below.

**Note:** The content of a CSS declaration block, that is a list of
semicolon-separated declarations, without the initial and closing
braces, can be put inside an HTML
[`style`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#style)
attribute.

CSS rulesets
------------

If style sheets could only apply a declaration to each element of a Web
page, they would be pretty useless. The real goal is to apply different
declarations to different parts of the document.

CSS allows this by associating conditions with declarations blocks. Each
(valid) declaration block is preceded by one or more comma-separated
[**selectors**](css_selectors.md), which are conditions selecting some
elements of the page. A [selector list](selector_list.md) and an associated
declarations block, together, are called a **ruleset**, or often a
**rule**.

A CSS ruleset (or rule) is visualized in the diagram below.

As an element of the page may be matched by several selectors, and
therefore by several rules potentially containing a given property
several times, with different values, the CSS standard defines which one
has precedence over the other and must be applied: this is called the
[cascade](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
algorithm.

**Note:** It is important to note that even if a ruleset characterized
by a group of selectors is a kind of shorthand replacing rulesets with a
single selector each, this doesn\'t apply to the validity of the ruleset
itself.

This leads to an important consequence: if one single basic selector is
invalid, like when using an unknown pseudo-element or pseudo-class, the
whole *selector* is invalid and therefore the entire rule is ignored (as
invalid too).

CSS statements
--------------

Rulesets are the main building blocks of a style sheet, which often
consists of only a big list of them. But there is other information that
a Web author wants to convey in the style sheet, like the character set,
other external style sheets to import, font face or list counter
descriptions and many more. It will use other and specific kinds of
statements to do that.

A **statement** is a building block that begins with any non-space
characters and ends at the first closing brace or semicolon (outside a
string, non-escaped and not included into another {}, () or \[\] pair).

There are two kinds of statements:

- **Rulesets** (or *rules*) that, as seen, associate a collection of
    CSS declarations to a condition described by a
    [selector](css_selectors.md).
- **At-rules** that start with an at sign, \'`@`\'
    (`U+0040 COMMERCIAL AT`), followed by an identifier and then
    continuing up to the end of the statement, that is up to the next
    semicolon (;) outside of a block, or the end of the next block. Each
    type of [at-rules](at-rule.md), defined by the identifier, may have its
    own internal syntax, and semantics of course. They are used to
    convey meta-data information (like [`@charset`](@charset.md) or
    [`@import`](@import.md)), conditional information (like
    [`@media`](@media.md) or [`@document`](@document.md)), or descriptive
    information (like [`@font-face`](@font-face.md)).

Any statement which isn\'t a ruleset or an at-rule is invalid and
ignored.

### Nested statements

There is another group of statements -- the **nested statements**. These
are statements that can be used in a specific subset of at-rules -- the
*conditional group rules*. These statements only apply if a specific
condition is matched: the `@media` at-rule content is applied only if
the device on which the browser runs matches the expressed condition;
the `@document` at-rule content is applied only if the current page
matches some conditions, and so on. In CSS1 and CSS2.1, only *rulesets*
could be used inside conditional group rules. That was very restrictive
and this restriction was lifted in [](css_conditional_rules.md). Now, though still experimental and not
supported by every browser, conditional group rules can contain a wider
range of content: rulesets but also some, but not all, at-rules.

See also
--------

- CSS key concepts:
  - **CSS syntax**
  - [Comments](comments.md)
  - [Specificity](specificity.md)
  - [Inheritance](inheritance.md)
  - [Box model](introduction_to_the_css_box_model.md)
  - [Layout modes](layout_mode.md)
  - [Visual formatting models](visual_formatting_model.md)
  - [Margin collapsing](mastering_margin_collapsing.md)
  - Values
    - [Initial values](initial_value.md)
    - [Computed values](computed_value.md)
    - [Used values](used_value.md)
    - [Actual values](actual_value.md)
  - [Value definition syntax](value_definition_syntax.md)
  - [Shorthand properties](shorthand_properties.md)
  - [Replaced elements](replaced_element.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/@property/syntax.md)
syntax
======

The `syntax` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
descriptor is required when using the [`@property`](@property.md)
[at-rule](at-rule.md) and describes the allowable syntax for the
property.

Syntax
------

The following are all valid syntax strings:

[css]

```css
syntax: "<color>"; /* accepts a color */

syntax: "<length> | <percentage>"; /* accepts lengths or percentages but not calc expressions with a combination of the two */

syntax: "small | medium | large"; /* accepts one of these values set as custom idents. */

syntax: "*"; /* any valid token */
```

Values
------

A string with a supported syntax as defined by the specification.
Supported syntaxes are a subset of [CSS types](css_types.md). These may
be used along, or a number of types can be used in combination.

[`"<length>"`](#length)

:   Any valid [`<length>`](length.md) values.

[`"<number>"`](#number)

:   Any valid [`<number>`](number.md) values.

[`"<percentage>"`](#percentage)

:   Any valid [`<percentage>`](percentage.md) values.

[`"<length-percentage>"`](#length-percentage)

:   Any valid [`<length-percentage>`](length-percentage.md) values.

[`"<color>"`](#color)

:   Any valid [`<color>`](color_value.md) values.

[`"<image>"`](#image)

:   Any valid [`<image>`](_Resources/Markup%20And%20Styling/css/image.md) values.

[`"<url>"`](#url)

:   Any valid [`url()`](url.md) values.

[`"<integer>"`](#integer)

:   Any valid [`<integer>`](integer.md) values.

[`"<angle>"`](#angle)

:   Any valid [`<angle>`](angle.md) values.

[`"<time>"`](#time)

:   Any valid [`<time>`](time.md) values.

[`"<resolution>"`](#resolution)

:   Any valid [`<resolution>`](_Resources/Markup%20And%20Styling/css/resolution.md) values.

[`"<transform-function>"`](#transform-function)

:   Any valid [`<transform-function>`](transform-function.md) values.

[`"<custom-ident>"`](#custom-ident)

:   Any valid [`<custom-ident>`](custom-ident.md) values.

[`"<transform-list>"`](#transform-list)

:   A list of valid [`<transform-function>`](transform-function.md)
    values.

Formal definition
-----------------

  ------------------------------------- -----------------------------
  Related [at-rule](at-rule.md)         [`@property`](@property.md)
  [Initial value](initial_value.md)     `n/a (required)`
  [Computed value](computed_value.md)   as specified
  ------------------------------------- -----------------------------

Formal syntax
-------------

```
syntax = 
  <string>  
```

Examples
--------

Add type checking to `--my-color` [`custom property`](../--*), using the
`<color>` syntax:

Using [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[`@property`](@property.md) [at-rule](at-rule.md):

[css]

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Using
[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[`CSS.registerProperty()`](https://developer.mozilla.org/en-US/docs/Web/API/CSS/registerProperty_static):

[js]

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

Specifications
--------------

  ------------------------------------------------------------------------------------------------------------------

Specification
  ------------------------------------------------------------------------------------------------------------------

  [CSS Properties and Values API Level 1\
  [\#
  the-syntax-descriptor]](https://drafts.css-houdini.org/css-properties-values-api/#the-syntax-descriptor)

  ------------------------------------------------------------------------------------------------------------------

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

`syntax`

85

85

preview

No

71

16.4

85

85

No

60

16.4

14.0

See also
--------

- [CSS Properties and Values
    API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting
    API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object
    Model](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Typed_OM_API)
- [CSS
    Houdini](https://developer.mozilla.org/en-US/docs/Web/Guide/Houdini)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/@property/syntax>
