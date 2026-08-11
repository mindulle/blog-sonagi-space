# text-decoration-skip

**Experimental:** **This is an [experimental
technology](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental)**\
Check the [Browser compatibility table](#browser_compatibility)
carefully before using this in production.

The `text-decoration-skip`
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets
what parts of an element\'s content any text decoration affecting the
element must skip over. It controls all text decoration lines drawn by
the element and also any text decoration lines drawn by its ancestors.

**Note:** Most other browsers are converging on supporting the simpler
[`text-decoration-skip-ink`](text-decoration-skip-ink.md) property.

## Syntax

[css]

```css
/* Keyword values */
text-decoration-skip: none;
text-decoration-skip: objects;
text-decoration-skip: spaces;
text-decoration-skip: edges;
text-decoration-skip: box-decoration;

/* Multiple keywords */
text-decoration-skip: objects spaces;
text-decoration-skip: leading-spaces trailing-spaces;
text-decoration-skip: objects edges box-decoration;

/* Global values */
text-decoration-skip: inherit;
text-decoration-skip: initial;
text-decoration-skip: revert;
text-decoration-skip: revert-layer;
text-decoration-skip: unset;
```

### Values

[`none`](#none)

: Nothing is skipped. Thus, text decoration is drawn for all text
content and across atomic inline-level boxes.

[`objects`](#objects)

: The entire margin box of the element is skipped if it is an atomic
inline such as an image or inline-block.

[`spaces`](#spaces)

: All spacing is skipped: all [Unicode white space
characters](https://www.unicode.org/reports/tr44/#White_Space) and
all word separators, plus any adjacent
[`letter-spacing`](letter-spacing.md) or
[`word-spacing`](word-spacing.md).

[`leading-spaces`](#leading-spaces)

: The same as `spaces`, except that only leading spaces are skipped.

[`trailing-spaces`](#trailing-spaces)

: The same as `spaces`, except that only trailing spaces are skipped.

[`edges`](#edges)

: The start and end of the text decoration is inset slightly (e.g., by
half of the line thickness) from the content edge of the decorating
box. Thus, adjacent elements receive separate underlines. (This is
important in Chinese, where underlining is a form of punctuation.)

    ![An example of \"text-decoration-skip:
    edges;\".](/images/wiki/EpvjvyDyn0Ib4QqbgKAAAAAElFTkSuQmCC)

[`box-decoration`](#box-decoration)

: The text decoration is skipped over the box\'s margin, border, and
padding areas. This only has an effect on decorations imposed by an
ancestor; a _decorating box_ never draws over its own box
decoration.

## Formal definition

---

[Initial value](initial_value.md) `objects`
Applies to all elements
[Inherited](inheritance.md) yes
[Computed value](computed_value.md) as specified
Animation type discrete

---

## Formal syntax

```
text-decoration-skip =
  none  |
  auto
```

## Examples

### Skipping edges

#### HTML

[html]

```html
<p>Hey, grab a cup of <em>coffee!</em></p>
```

#### CSS

[css]

```css
p {
  margin: 0;
  font-size: 3em;
  text-decoration: underline;
  text-decoration-skip: edges;
}
```

#### Result

## Specifications

---

Specification

---

[CSS Text Decoration Module Level 4\
 [\#
text-decoration-skipping]](https://drafts.csswg.org/css-text-decor-4/#text-decoration-skipping)

---

## Browser compatibility

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

`text-decoration-skip`

57--64Only supports the deprecated `ink` value.

No

No

No

44--50Only supports the deprecated `ink` value.

12.1Supports only `none`, `auto`, and `objects` values.

7Supports only `none`, `auto`, and `objects` values.

57--64Only supports the deprecated `ink` value.

57--64Only supports the deprecated `ink` value.

No

43--46Only supports the deprecated `ink` value.

12.2Supports only `none`, `auto`, and `objects` values.

7Supports only `none`, `auto`, and `objects` values.

7.0--9.0Only supports the deprecated `ink` value.

## See also

- [`text-decoration-skip-ink`](text-decoration-skip-ink.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip>
