scroll()
========

**Experimental:** **This is an [experimental
technology](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental)**\
Check the [Browser compatibility table](#browser_compatibility)
carefully before using this in production.

The `scroll()` [CSS function](css_functions.md) can be used with
[`animation-timeline`](animation-timeline.md) to indicate a scrollable
element (*scroller*) and scrollbar axis that will provide an anonymous
scroll progress timeline for animating the current element. The scroll
progress timeline is progressed through by scrolling the scroller
between top and bottom (or left and right). The position in the scroll
range is converted into a percentage of progress --- 0% at the start and
100% at the end.

**Note:** If the indicated axis does not contain a scrollbar, then the
animation timeline will be inactive (have zero progress).

**Note:** Each use of `scroll()` corresponds to its own unique instance
of
[`ScrollTimeline`](https://developer.mozilla.org/en-US/docs/Web/API/ScrollTimeline)
in the [Web Animations
API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).

Syntax
------

[css]

```
/* Function with no parameters set */
animation-timeline: scroll();

```css
animation-timeline: scroll(nearest); /* Default */
animation-timeline: scroll(root);
animation-timeline: scroll(self);

/* Values for selecting the axis */
animation-timeline: scroll(block); /* Default */
animation-timeline: scroll(inline);
animation-timeline: scroll(y);
animation-timeline: scroll(x);

/* Examples that specify scroller and axis */
animation-timeline: scroll(block nearest); /* Default */
animation-timeline: scroll(inline root);
animation-timeline: scroll(x self);
```

### Parameters

[scroller](#scroller)

:   The value for indicating the scroller element that will provide the
    scroll progress timeline can be any one of the following:

    [`nearest`](#nearest)

    :   The nearest ancestor of the current element that has scrollbars
        on either axis. This is the default value.

    [`root`](#root)

    :   The root element of the document.

    [`self`](#self)

    :   The current element itself.

[axis](#axis)

:   The scrollbar axis value can be any one of the following:

    [`block`](#block)

    :   The scrollbar on the block axis of the scroll container, which
        is the axis in the direction perpendicular to the flow of text
        within a line. For horizontal writing modes, such as standard
        English, this is the same as `y`, while for vertical writing
        modes, it is the same as `x`. This is the default value.

    [`inline`](#inline)

    :   The scrollbar on the inline axis of the scroll container, which
        is the axis in the direction parallel to the flow of text in a
        line. For horizontal writing modes, this is the same as `x`,
        while for vertical writing modes, this is the same as `y`.

    [`y`](#y)

    :   The scrollbar on the vertical axis of the scroll container.

    [`x`](#x)

    :   The scrollbar on the horizontal axis of the scroll container.

**Note:** The scroller and axis values can be specified in any order.

### Formal syntax

```
<scroll()> = 
  scroll( [ <scroller> || <axis> ]? )  

<scroller> = 
  root     |
  nearest  

<axis> = 
  block       |
  inline      |
  vertical    |
  horizontal  
```

Examples
--------

### Setting an anonymous scroll progress timeline

In this example, the `#square` element is animated using an anonymous
scroll progress timeline, which is applied to the element to be animated
using the `scroll()` function. The timeline in this particular example
is provided by the nearest parent element that has (any) scrollbar, from
the scrollbar in the block direction.

#### HTML

The HTML for the example is shown below.

[html]

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

#### CSS

The CSS below defines a square that rotates in alternate directions
according to the timeline provided by the `animation-timeline` property.
In this case, the timeline is provided by `scroll(block nearest)`, which
means that it will select the scrollbar in the block direction of the
nearest ancestor element that has scrollbars; in this case the vertical
scrollbar of the \"container\" element.

**Note:** `block` and `nearest` are actually the default parameter
values, so we could have used just `scroll()`.

[css]

```
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  position: absolute;
  bottom: 0;

  animation-name: rotateAnimation;
  animation-duration: 1ms; /* Firefox requires this to apply the animation */
```css
  animation-timeline: scroll(block nearest);
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

The CSS for the container sets its height to 300px and we also set the
container to create a vertical scrollbar if it overflows. The
\"stretcher\" CSS sets the block height to 600px, which forces the
container element to overflow. These two together ensure that the
container has a vertical scrollbar, which allows it to be used as the
source of the anonymous scroll progress timeline.

[css]

```
#container {
  height: 300px;
  overflow-y: scroll;
  position: relative;
}

#stretcher {
  height: 600px;
}
```

```css

Scroll to see the square element being animated.

 

Specifications
--------------


  ----------------------------------------------------------------------------------------

Specification
  ----------------------------------------------------------------------------------------

  [Scroll-driven Animations\
  [\#
  scroll-notation]](https://drafts.csswg.org/scroll-animations/#scroll-notation)

  ----------------------------------------------------------------------------------------

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

`scroll`

115

115

110\[\"Zero scroll range is treated as 100% but should be 0% (see [bug
1780865](https://bugzil.la/1780865)).\", \"Supports the deprecated
`horizontal` and `vertical` axis values, and not the `x` and `y`
values.\"\]

No

101

No

115

115

No

No

No

No


See also 
--------

 

- [CSS scroll-driven animations](../css_scroll-driven_animations)
- [Using CSS animations](../css_animations/using_css_animations)
- [`animation-timeline`](../animation-timeline)

 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline/scroll>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/scroll.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

scroll method
=============

::: {.section .multi-line-signature}
void scroll(

1.  \[dynamic options\_OR\_x,
2.  dynamic y,
3.  [Map](../../dart-core/map-class)? scrollOptions\]

)
:::

Scrolls the page horizontally and vertically to a specific point.

This method is identical to [scrollTo](scrollto).

Other resources
---------------

-   [Window.scroll](https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll)
    from MDN.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void scroll([options_OR_x, y, Map? scrollOptions]) {
  if (options_OR_x == null && y == null && scrollOptions == null) {
    _scroll_1();
    return;
  }
  if ((options_OR_x is Map) && y == null && scrollOptions == null) {
    var options_1 = convertDartToNative_Dictionary(options_OR_x);
    _scroll_2(options_1);
    return;
  }
  if ((y is num) && (options_OR_x is num) && scrollOptions == null) {
    _scroll_3(options_OR_x, y);
    return;
  }
  if ((y is int) && (options_OR_x is int) && scrollOptions == null) {
    _scroll_4(options_OR_x, y);
    return;
  }
  if (scrollOptions != null && (y is int) && (options_OR_x is int)) {
    var scrollOptions_1 = convertDartToNative_Dictionary(scrollOptions);
    _scroll_5(options_OR_x, y, scrollOptions_1);
    return;
  }
  throw new ArgumentError("Incorrect number or type of arguments");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/scroll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/element/scroll.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

scroll method
=============

::: {.section .multi-line-signature}
void scroll(

1.  \[dynamic options\_OR\_x,
2.  [num](../../dart-core/num-class)? y\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void scroll([options_OR_x, num? y]) {
  if (options_OR_x == null && y == null) {
    _scroll_1();
    return;
  }
  if ((options_OR_x is Map) && y == null) {
    var options_1 = convertDartToNative_Dictionary(options_OR_x);
    _scroll_2(options_1);
    return;
  }
  if (y != null && (options_OR_x is num)) {
    _scroll_3(options_OR_x, y);
    return;
  }
  throw new ArgumentError("Incorrect number or type of arguments");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/scroll.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/vttregion/scroll.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

scroll property
===============

::: {#getter .section .multi-line-signature}
[String](../../dart-core/string-class)? scroll
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? get scroll native;
```

::: {#setter .section .multi-line-signature}
void scroll=([String](../../dart-core/string-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set scroll(String? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/VttRegion/scroll.html>
:::
