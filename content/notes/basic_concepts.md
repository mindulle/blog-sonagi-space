Basic concepts of scroll snap
=============================


The properties in the [CSS scroll snap](css_scroll_snap.md) module
enable you to define how scrolling snaps to specific points as a user
scrolls through a document.

The scroll snap feature lets you define the snap positions where a
[scroll
container](https://developer.mozilla.org/en-US/docs/Glossary/Scroll_container)\'s
scrollport may end or \"snap to\" after a scrolling operation has
completed.



Key properties for CSS scroll snap 
----------------------------------


Before you can define scroll snapping, you need to enable scrolling on a
scroll container. You can do this by ensuring that the scroll container
has a defined size and that it has [`overflow`](overflow.md) enabled.

You can then define scroll snapping on the scroll container by using the
following two key properties:

-   [`scroll-snap-type`](scroll-snap-type.md): Using this property, you
    can define whether or not the scrollable viewport can be snapped to,
    whether snapping is required or optional, and the axis on which the
    snapping should occur.
-   [`scroll-snap-align`](scroll-snap-align.md): This property is set on
    every child of the scroll container and you can use it to define
    each child\'s snap position or lack thereof.
-   [`scroll-snap-stop`](scroll-snap-stop.md): This property ensures
    that a child is snapped to during scrolling and not passed over.
-   [`scroll-margin`](scroll-margin.md): This property can be set on
    child elements that are snapped to during scrolling to create an
    outset from the defined box.
-   [`scroll-padding`](scroll-padding.md): This property can be set on
    the scroll container to create a snapping offset.

The example below demonstrates scroll snapping along the vertical axis,
which is defined by `scroll-snap-type`. Additionally,
`scroll-snap-align` applies on all the children of the `<section>`
element, dictating the point where the scrolling of each child should
stop.




Using scroll-snap-type 
----------------------


The [`scroll-snap-type`](scroll-snap-type.md) property needs to know the
direction in which scroll snapping happens. This can be `x`, `y`, or the
logical mappings `block` or `inline`. You can also use the keyword
`both` to have scroll snapping work along both axes.

You can also pass in the keywords `mandatory` or `proximity`. The
`mandatory` keyword tells the browser whether the content *has* to snap
to a certain point, no matter where the scroll is. The `proximity`
keyword means that the content may snap to the point, but does not have
to.

Using `mandatory` creates a very consistent scrolling experience --- you
know the browser will always snap to each defined point. This means that
you can be confident that something you expect to be at the top of the
screen will be there when scrolling finishes. However, it can cause
problems if the content is larger than you expect --- users may find
themselves in the frustrating position of never being able to scroll and
view a certain point in the content. Therefore, the use of `mandatory`
should be carefully considered and only used in situations where you
know how much content is on the screen or scrollable section at any
time.


**Note:** Never use `mandatory` if the content inside one of your child
elements will overflow the parent container because user will not be
able to scroll the overflowing content into view.


The `proximity` value only snaps child elements to a position when it is
close by, with the browsers determining the exact distance.

In the example below, you can change the value between `mandatory` and
`proximity` to see the effect this has on the scroll experience.

In the above example, both [`height: 300px;`](_Resources/Markup%20And%20Styling/css/height.md) and
[`overflow-y: scroll;`](overflow-y.md) are set on the scroll container.

If the content doesn\'t overflow its container, there is nothing to
scroll.




Using scroll-snap-align 
-----------------------


The valid values for the [`scroll-snap-align`](scroll-snap-align.md)
property include `start`, `end`, `center`, and `none`. These values are
used to indicate the point in the scroll container to which the content
should snap. In the example below, you can change the value of
`scroll-snap-align` to see how this changes the scroll behavior.

If `scroll-snap-type` is `mandatory` and `scroll-snap-align` on a child
is either set to `none` or not set (in which case, it defaults to
`none`), the user will be unable to scroll that element into view.




Using scroll-padding 
--------------------


When using `start` or `end`, if you do not want the content to snap
right to the edge of the scroll container, or if you want the snap
position to be slightly offset from center when using `center`, use the
[`scroll-padding`](scroll-padding.md) property or its equivalent
longhand values to add some padding.

In the example below, `scroll-padding` is set to `40px`. When the
content snaps to the start of the second and third sections, scrolling
stops 40 pixels away from the start of the section. Try changing the
`scroll-padding` value to see how this changes the distance.

This is potentially useful if you have a
[fixed](position.md#fixed_positioning) element such as a navigation bar,
which could end up overlapping scrolled content. By using
`scroll-padding`, you can reserve space for the fixed element, as shown
in the example below, where the `<h1>` element remains on screen as the
content scrolls beneath it. Without padding, the heading would overlap
some of the content when snapping happens.




Using scroll-margin 
-------------------


The [`scroll-margin`](scroll-margin.md) property or the longhand scroll
margin values can be set on child elements, defining an outset from the
defined box. This allows for different amounts of space for different
child elements and can be used in conjunction with `scroll-padding` on
the parent. Try this in the example below.




Using scroll-snap-stop 
----------------------


Using the [`scroll-snap-stop`](scroll-snap-stop.md) property, you can
specify whether the scrolling must snap to the defined snap points. In
the above examples, this would mean that the scrolling would stop at the
start of each section or be able to skip past sections.

With this property definition, you can ensure that users see each
section of the scroller and don\'t accidentally scroll past them.
However, this setting can also negatively affect user experience by
preventing the user from quickly scrolling to their desired content.




See also 
--------


-   [CSS scroll snap](css_scroll_snap.md) module
-   [Well-controlled scrolling with CSS scroll
    snap](https://web.dev/css-scroll-snap/) on web.dev (2021)
-   [Practical CSS scroll
    snapping](https://css-tricks.com/practical-css-scroll-snapping/) on
    CSS-Tricks (2020)
-   [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) on
    12 Days of Web (2019)
-   [Scroll snap examples](https://codepen.io/collection/KpqBGW) on
    Codepen




© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap/Basic_concepts>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/css/css_multicol_layout/basic_concepts.md)
Basic concepts of multi-column layout
=====================================

Multi-column layout, usually referred to as multicol layout, is a
specification for laying out content into a set of column boxes much
like columns in a newspaper. This guide explains how the specification
works with some common use case examples.

Key properties
--------------

Multicol layout is unlike any of the other layout methods in CSS; it
fragments the content, including all descendant elements, into columns.
This happens in the same way that content is fragmented into pages when
we work with [CSS paged media](css_paged_media.md) by creating a print
stylesheet.

In this and subsequent guides, we will be discussing the following
properties defined in the [](css_multicol_layout.md) module:

- [`column-width`](column-width.md)
- [`column-count`](column-count.md)
- [`columns`](columns.md) shorthand
- [`column-rule-color`](column-rule-color.md)
- [`column-rule-style`](column-rule-style.md)
- [`column-rule-width`](column-rule-width.md)
- [`column-rule`](column-rule.md) shorthand
- [`column-span`](column-span.md)
- [`column-fill`](column-fill.md)
- [`column-gap`](column-gap.md)
- [`break-after`](break-after.md)
- [`break-before`](break-before.md)
- [`break-inside`](break-inside.md)

Defining columns
----------------

By adding the `column-count` or the `column-width` property to an
element, or using the `columns` shorthand, the element becomes a
*multi-column container* or *multicol container* for short. The columns
are anonymous boxes; they\'re described as *column boxes* in the
specification.

### Specifying the number of columns

The `column-count` property specifies the number of columns that you
would like the content to be displayed as. The browser will then assign
the correct amount of space to each column box to create the requested
number of columns.

In the below example, we use the `column-count` property to create three
columns on the `.container` element. The content, including the children
of `.container`, is then split between the three columns.

In the above example, the content is wrapped within the paragraph `<p>`
tags with the default styling. Therefore, there is a margin above each
paragraph. You can see how this margin causes the first line of text to
be pushed down. This is because a multicol container creates a [block
formatting context
(BFC)](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)
because of which margins on child elements do not collapse with any
margin on the container.

### Specifying the width of columns

The `column-width` property is used to set the optimal width for every
column box. If you declare a column width, the browser will work out how
many columns of that width will fit into the multicol container and
distribute any extra space equally between the columns. Therefore, the
column width should be seen as minimum width because the column boxes
are likely to be wider due to the additional space.

In the case of a single column with less width available than the value
of `column-width`, the column box will shrink to be smaller than the
declared column width.

In the example below, the `column-width` property is set to `200px`. We
get as many 200-pixel columns as will fit the container, with the extra
space shared equally.

### Specifying both number and width of columns

If you specify both the properties on a multicol container, then
`column-count` will act as a maximum number of columns. Therefore, the
behavior as described for `column-width` will happen, until the number
of columns in `column-count` is reached. After this point, no more
columns will be drawn, and the extra space is distributed evenly between
the existing columns, even if there is enough room for more columns of
the specified `column-width` size.

When using both properties together, you may get fewer columns than
specified in the value for `column-count`.

In this next example, we use `column-width` of `200px` and
`column-count` of `2`. Even if there is space for more than two columns,
we get two. If there is not enough space for two columns of at least 200
pixels each, we get one.

### Shorthand for column properties

You can use the `columns` shorthand to set the `column-count` and
`column-width` values. If you specify a length unit, the value will be
used for `column-width`, and if you specify an integer, the value will
be used for `column-count`. You can set both the properties, separating
the two values with a space.

This CSS would give the same result as [example
1](#specifying_the_number_of_columns), with `column-count` set to `3`.

[css]

```css
.container {
  columns: 3;
}
```

This CSS would give the same result as [example
2](#specifying_the_width_of_columns), with `column-width` of `200px`.

[css]

```css
.container {
  columns: 200px;
}
```

This CSS would give the same result as [example
3](#specifying-both-number-and-width-of-columns), with both
`column-count` and `column-width` set.

[css]

```css
.container {
  columns: 2 200px;
}
```

Next steps
----------

In this guide, we\'ve learned the basic use of multi-column layout. In
the next guide, we will look at how much we can [](styling_columns.md).

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_multicol_layout/Basic_concepts>
