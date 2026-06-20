[dart:svg](../dart-svg/dart-svg-library){._links-link}

ImageElement class
==================

Inheritance

:   -   [Object](../dart-core/object-class)
    -   [EventTarget](../dart-html/eventtarget-class)
    -   [Node](../dart-html/node-class)
    -   [Element](../dart-html/element-class)
    -   [SvgElement](svgelement-class)
    -   [GraphicsElement](graphicselement-class)
    -   ImageElement

Implemented types

:   -   [UriReference](urireference-class)

Annotations

:   -   \@Unstable()
    -   \@Native(\"SVGImageElement\")

Constructors
------------

[ImageElement](imageelement/imageelement)()

::: {.constructor-modifier .features}
factory
:::

[ImageElement.created](imageelement/imageelement.created)()

Constructor instantiated by the DOM when a custom element has been
created.

Properties {#instance-properties}
----------

[accessibleNode](../dart-html/element/accessiblenode) →
[AccessibleNode](../dart-html/accessiblenode-class)?

::: {.features}
read-only, inherited
:::

[assignedSlot](../dart-html/element/assignedslot) →
[SlotElement](../dart-html/slotelement-class)?

::: {.features}
read-only, inherited
:::

[async](imageelement/async) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write
:::

[attributes](../dart-html/element/attributes) ↔
[Map](../dart-core/map-class)\<[String](../dart-core/string-class),
[String](../dart-core/string-class)\>

::: {.features}
read / write, inherited
:::

All attributes on this element.

[baseUri](../dart-html/node/baseuri) →
[String](../dart-core/string-class)?

::: {.features}
\@JSName(\'baseURI\'), read-only, inherited
:::

[borderEdge](../dart-html/element/borderedge) →
[CssRect](../dart-html/cssrect-class)

::: {.features}
read-only, inherited
:::

Access the dimensions and position of this element\'s content + padding
+ border box.

[childNodes](../dart-html/node/childnodes) →
[List](../dart-core/list-class)\<[Node](../dart-html/node-class)\>

::: {.features}
\@Returns(\'NodeList\'), \@Creates(\'NodeList\'), read-only, inherited
:::

A list of this node\'s children.

[children](svgelement/children) ↔
[List](../dart-core/list-class)\<[Element](../dart-html/element-class)\>

::: {.features}
read / write, inherited
:::

List of the direct children of this element.

[classes](svgelement/classes) ↔
[CssClassSet](../dart-html/cssclassset-class)

::: {.features}
read / write, inherited
:::

The set of CSS classes applied to this element.

[className](../dart-html/element/classname) ↔
[String](../dart-core/string-class)

::: {.features}
read / write, inherited
:::

[client](../dart-html/element/client) →
[Rectangle](../dart-math/rectangle-class)\<[num](../dart-core/num-class)\>

::: {.features}
read-only, inherited
:::

Gets the position of this element relative to the client area of the
page.

[clientHeight](../dart-html/element/clientheight) →
[int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

[clientLeft](../dart-html/element/clientleft) →
[int](../dart-core/int-class)?

::: {.features}
read-only, inherited
:::

[clientTop](../dart-html/element/clienttop) →
[int](../dart-core/int-class)?

::: {.features}
read-only, inherited
:::

[clientWidth](../dart-html/element/clientwidth) →
[int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

[computedName](../dart-html/element/computedname) →
[String](../dart-core/string-class)?

::: {.features}
read-only, inherited
:::

[computedRole](../dart-html/element/computedrole) →
[String](../dart-core/string-class)?

::: {.features}
read-only, inherited
:::

[contentEdge](../dart-html/element/contentedge) →
[CssRect](../dart-html/cssrect-class)

::: {.features}
read-only, inherited
:::

Access this element\'s content position.

[contentEditable](../dart-html/element/contenteditable) ↔
[String](../dart-core/string-class)

::: {.features}
read / write, inherited
:::

[dataset](../dart-html/element/dataset) ↔
[Map](../dart-core/map-class)\<[String](../dart-core/string-class),
[String](../dart-core/string-class)\>

::: {.features}
read / write, inherited
:::

Allows access to all custom data attributes (data-\*) set on this
element.

[dir](../dart-html/element/dir) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write, inherited
:::

[documentOffset](../dart-html/element/documentoffset) →
[Point](../dart-math/point-class)\<[num](../dart-core/num-class)\>

::: {.features}
read-only, inherited
:::

Provides the coordinates of the element relative to the top of the
document.

[draggable](../dart-html/element/draggable) ↔
[bool](../dart-core/bool-class)

::: {.features}
read / write, inherited
:::

Indicates whether the element can be dragged and dropped.

[farthestViewportElement](graphicselement/farthestviewportelement) →
[SvgElement](svgelement-class)?

::: {.features}
read-only, inherited
:::

[firstChild](../dart-html/node/firstchild) →
[Node](../dart-html/node-class)?

::: {.features}
read-only, inherited
:::

The first child of this node.

[hashCode](../dart-core/object/hashcode) → [int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

The hash code for this object.

[height](imageelement/height) → [AnimatedLength](animatedlength-class)?

::: {.features}
read-only
:::

[hidden](../dart-html/element/hidden) ↔ [bool](../dart-core/bool-class)

::: {.features}
read / write, inherited
:::

Indicates whether the element is not relevant to the page\'s current
state.

[href](imageelement/href) → [AnimatedString](animatedstring-class)?

::: {.features}
read-only, override
:::

[id](../dart-html/element/id) ↔ [String](../dart-core/string-class)

::: {.features}
read / write, inherited
:::

[inert](../dart-html/element/inert) ↔ [bool](../dart-core/bool-class)?

::: {.features}
read / write, inherited
:::

[innerHtml](svgelement/innerhtml) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write, inherited
:::

Parses the HTML fragment and sets it as the contents of this element.

[innerText](../dart-html/element/innertext) ↔
[String](../dart-core/string-class)

::: {.features}
\@JSName(\'innerText\'), read / write, inherited
:::

[inputMode](../dart-html/element/inputmode) ↔
[String](../dart-core/string-class)?

::: {.features}
read / write, inherited
:::

[isConnected](../dart-html/node/isconnected) →
[bool](../dart-core/bool-class)?

::: {.features}
read-only, inherited
:::

[isContentEditable](svgelement/iscontenteditable) →
[bool](../dart-core/bool-class)

::: {.features}
read-only, inherited
:::

[lang](../dart-html/element/lang) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write, inherited
:::

[lastChild](../dart-html/node/lastchild) →
[Node](../dart-html/node-class)?

::: {.features}
read-only, inherited
:::

The last child of this node.

[localName](../dart-html/element/localname) →
[String](../dart-core/string-class)

::: {.features}
\@Returns(\'String\'), read-only, inherited
:::

[marginEdge](../dart-html/element/marginedge) →
[CssRect](../dart-html/cssrect-class)

::: {.features}
read-only, inherited
:::

Access the dimensions and position of this element\'s content + padding
+ border + margin box.

[namespaceUri](../dart-html/element/namespaceuri) →
[String](../dart-core/string-class)?

::: {.features}
read-only, inherited
:::

A URI that identifies the XML namespace of this element.

[nearestViewportElement](graphicselement/nearestviewportelement) →
[SvgElement](svgelement-class)?

::: {.features}
read-only, inherited
:::

[nextElementSibling](../dart-html/element/nextelementsibling) →
[Element](../dart-html/element-class)?

::: {.features}
read-only, inherited
:::

[nextNode](../dart-html/node/nextnode) →
[Node](../dart-html/node-class)?

::: {.features}
\@JSName(\'nextSibling\'), read-only, inherited
:::

The next sibling node.

[nodeName](../dart-html/node/nodename) →
[String](../dart-core/string-class)?

::: {.features}
read-only, inherited
:::

The name of this node.

[nodes](../dart-html/node/nodes) ↔
[List](../dart-core/list-class)\<[Node](../dart-html/node-class)\>

::: {.features}
read / write, inherited
:::

A modifiable list of this node\'s children.

[nodeType](../dart-html/node/nodetype) → [int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

The type of node.

[nodeValue](../dart-html/node/nodevalue) →
[String](../dart-core/string-class)?

::: {.features}
read-only, inherited
:::

The value of this node.

[nonce](svgelement/nonce) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write, inherited
:::

[offset](../dart-html/element/offset) →
[Rectangle](../dart-math/rectangle-class)\<[num](../dart-core/num-class)\>

::: {.features}
read-only, inherited
:::

Gets the offset of this element relative to its offsetParent.

[offsetHeight](../dart-html/element/offsetheight) →
[int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

[offsetLeft](../dart-html/element/offsetleft) →
[int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

[offsetParent](../dart-html/element/offsetparent) →
[Element](../dart-html/element-class)?

::: {.features}
read-only, inherited
:::

[offsetTop](../dart-html/element/offsettop) →
[int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

[offsetWidth](../dart-html/element/offsetwidth) →
[int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

[on](../dart-html/element/on) →
[ElementEvents](../dart-html/elementevents-class)

::: {.features}
read-only, inherited
:::

This is an ease-of-use accessor for event streams which should only be
used when an explicit accessor is not available.

[onAbort](svgelement/onabort) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `abort` events handled by this
[Element](../dart-html/element-class).

[onBeforeCopy](../dart-html/element/onbeforecopy) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `beforecopy` events handled by this
[Element](../dart-html/element-class).

[onBeforeCut](../dart-html/element/onbeforecut) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `beforecut` events handled by this
[Element](../dart-html/element-class).

[onBeforePaste](../dart-html/element/onbeforepaste) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `beforepaste` events handled by this
[Element](../dart-html/element-class).

[onBlur](svgelement/onblur) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `blur` events handled by this
[Element](../dart-html/element-class).

[onCanPlay](svgelement/oncanplay) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onCanPlayThrough](svgelement/oncanplaythrough) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onChange](svgelement/onchange) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `change` events handled by this
[Element](../dart-html/element-class).

[onClick](svgelement/onclick) →
[ElementStream](../dart-html/elementstream-class)\<[MouseEvent](../dart-html/mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `click` events handled by this
[Element](../dart-html/element-class).

[onContextMenu](svgelement/oncontextmenu) →
[ElementStream](../dart-html/elementstream-class)\<[MouseEvent](../dart-html/mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `contextmenu` events handled by this
[Element](../dart-html/element-class).

[onCopy](../dart-html/element/oncopy) →
[ElementStream](../dart-html/elementstream-class)\<[ClipboardEvent](../dart-html/clipboardevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `copy` events handled by this
[Element](../dart-html/element-class).

[onCut](../dart-html/element/oncut) →
[ElementStream](../dart-html/elementstream-class)\<[ClipboardEvent](../dart-html/clipboardevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `cut` events handled by this
[Element](../dart-html/element-class).

[onDoubleClick](svgelement/ondoubleclick) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
\@DomName(\'SVGElement.ondblclick\'), read-only, inherited
:::

Stream of `doubleclick` events handled by this
[Element](../dart-html/element-class).

[onDrag](svgelement/ondrag) →
[ElementStream](../dart-html/elementstream-class)\<[MouseEvent](../dart-html/mouseevent-class)\>

::: {.features}
read-only, inherited
:::

A stream of `drag` events fired when this element currently being
dragged.

[onDragEnd](svgelement/ondragend) →
[ElementStream](../dart-html/elementstream-class)\<[MouseEvent](../dart-html/mouseevent-class)\>

::: {.features}
read-only, inherited
:::

A stream of `dragend` events fired when this element completes a drag
operation.

[onDragEnter](svgelement/ondragenter) →
[ElementStream](../dart-html/elementstream-class)\<[MouseEvent](../dart-html/mouseevent-class)\>

::: {.features}
read-only, inherited
:::

A stream of `dragenter` events fired when a dragged object is first
dragged over this element.

[onDragLeave](svgelement/ondragleave) →
[ElementStream](../dart-html/elementstream-class)\<[MouseEvent](../dart-html/mouseevent-class)\>

::: {.features}
read-only, inherited
:::

A stream of `dragleave` events fired when an object being dragged over
this element leaves this element\'s target area.

[onDragOver](svgelement/ondragover) →
[ElementStream](../dart-html/elementstream-class)\<[MouseEvent](../dart-html/mouseevent-class)\>

::: {.features}
read-only, inherited
:::

A stream of `dragover` events fired when a dragged object is currently
being dragged over this element.

[onDragStart](svgelement/ondragstart) →
[ElementStream](../dart-html/elementstream-class)\<[MouseEvent](../dart-html/mouseevent-class)\>

::: {.features}
read-only, inherited
:::

A stream of `dragstart` events fired when this element starts being
dragged.

[onDrop](svgelement/ondrop) →
[ElementStream](../dart-html/elementstream-class)\<[MouseEvent](../dart-html/mouseevent-class)\>

::: {.features}
read-only, inherited
:::

A stream of `drop` events fired when a dragged object is dropped on this
element.

[onDurationChange](svgelement/ondurationchange) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onEmptied](svgelement/onemptied) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onEnded](svgelement/onended) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onError](svgelement/onerror) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `error` events handled by this
[Element](../dart-html/element-class).

[onFocus](svgelement/onfocus) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `focus` events handled by this
[Element](../dart-html/element-class).

[onFullscreenChange](../dart-html/element/onfullscreenchange) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `fullscreenchange` events handled by this
[Element](../dart-html/element-class).

[onFullscreenError](../dart-html/element/onfullscreenerror) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `fullscreenerror` events handled by this
[Element](../dart-html/element-class).

[onInput](svgelement/oninput) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `input` events handled by this
[Element](../dart-html/element-class).

[onInvalid](svgelement/oninvalid) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `invalid` events handled by this
[Element](../dart-html/element-class).

[onKeyDown](svgelement/onkeydown) →
[ElementStream](../dart-html/elementstream-class)\<[KeyboardEvent](../dart-html/keyboardevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `keydown` events handled by this
[Element](../dart-html/element-class).

[onKeyPress](svgelement/onkeypress) →
[ElementStream](../dart-html/elementstream-class)\<[KeyboardEvent](../dart-html/keyboardevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `keypress` events handled by this
[Element](../dart-html/element-class).

[onKeyUp](svgelement/onkeyup) →
[ElementStream](../dart-html/elementstream-class)\<[KeyboardEvent](../dart-html/keyboardevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `keyup` events handled by this
[Element](../dart-html/element-class).

[onLoad](svgelement/onload) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `load` events handled by this
[Element](../dart-html/element-class).

[onLoadedData](svgelement/onloadeddata) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onLoadedMetadata](svgelement/onloadedmetadata) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onMouseDown](svgelement/onmousedown) →
[ElementStream](../dart-html/elementstream-class)\<[MouseEvent](../dart-html/mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `mousedown` events handled by this
[Element](../dart-html/element-class).

[onMouseEnter](svgelement/onmouseenter) →
[ElementStream](../dart-html/elementstream-class)\<[MouseEvent](../dart-html/mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `mouseenter` events handled by this
[Element](../dart-html/element-class).

[onMouseLeave](svgelement/onmouseleave) →
[ElementStream](../dart-html/elementstream-class)\<[MouseEvent](../dart-html/mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `mouseleave` events handled by this
[Element](../dart-html/element-class).

[onMouseMove](svgelement/onmousemove) →
[ElementStream](../dart-html/elementstream-class)\<[MouseEvent](../dart-html/mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `mousemove` events handled by this
[Element](../dart-html/element-class).

[onMouseOut](svgelement/onmouseout) →
[ElementStream](../dart-html/elementstream-class)\<[MouseEvent](../dart-html/mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `mouseout` events handled by this
[Element](../dart-html/element-class).

[onMouseOver](svgelement/onmouseover) →
[ElementStream](../dart-html/elementstream-class)\<[MouseEvent](../dart-html/mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `mouseover` events handled by this
[Element](../dart-html/element-class).

[onMouseUp](svgelement/onmouseup) →
[ElementStream](../dart-html/elementstream-class)\<[MouseEvent](../dart-html/mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `mouseup` events handled by this
[Element](../dart-html/element-class).

[onMouseWheel](svgelement/onmousewheel) →
[ElementStream](../dart-html/elementstream-class)\<[WheelEvent](../dart-html/wheelevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `mousewheel` events handled by this
[Element](../dart-html/element-class).

[onPaste](../dart-html/element/onpaste) →
[ElementStream](../dart-html/elementstream-class)\<[ClipboardEvent](../dart-html/clipboardevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `paste` events handled by this
[Element](../dart-html/element-class).

[onPause](svgelement/onpause) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onPlay](svgelement/onplay) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onPlaying](svgelement/onplaying) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onRateChange](svgelement/onratechange) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onReset](svgelement/onreset) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `reset` events handled by this
[Element](../dart-html/element-class).

[onResize](svgelement/onresize) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onScroll](svgelement/onscroll) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `scroll` events handled by this
[Element](../dart-html/element-class).

[onSearch](../dart-html/element/onsearch) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `search` events handled by this
[Element](../dart-html/element-class).

[onSeeked](svgelement/onseeked) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onSeeking](svgelement/onseeking) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onSelect](svgelement/onselect) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `select` events handled by this
[Element](../dart-html/element-class).

[onSelectStart](../dart-html/element/onselectstart) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `selectstart` events handled by this
[Element](../dart-html/element-class).

[onStalled](svgelement/onstalled) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onSubmit](svgelement/onsubmit) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `submit` events handled by this
[Element](../dart-html/element-class).

[onSuspend](svgelement/onsuspend) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onTimeUpdate](svgelement/ontimeupdate) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onTouchCancel](svgelement/ontouchcancel) →
[ElementStream](../dart-html/elementstream-class)\<[TouchEvent](../dart-html/touchevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `touchcancel` events handled by this
[Element](../dart-html/element-class).

[onTouchEnd](svgelement/ontouchend) →
[ElementStream](../dart-html/elementstream-class)\<[TouchEvent](../dart-html/touchevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `touchend` events handled by this
[Element](../dart-html/element-class).

[onTouchEnter](../dart-html/element/ontouchenter) →
[ElementStream](../dart-html/elementstream-class)\<[TouchEvent](../dart-html/touchevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `touchenter` events handled by this
[Element](../dart-html/element-class).

[onTouchLeave](../dart-html/element/ontouchleave) →
[ElementStream](../dart-html/elementstream-class)\<[TouchEvent](../dart-html/touchevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `touchleave` events handled by this
[Element](../dart-html/element-class).

[onTouchMove](svgelement/ontouchmove) →
[ElementStream](../dart-html/elementstream-class)\<[TouchEvent](../dart-html/touchevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `touchmove` events handled by this
[Element](../dart-html/element-class).

[onTouchStart](svgelement/ontouchstart) →
[ElementStream](../dart-html/elementstream-class)\<[TouchEvent](../dart-html/touchevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `touchstart` events handled by this
[Element](../dart-html/element-class).

[onTransitionEnd](../dart-html/element/ontransitionend) →
[ElementStream](../dart-html/elementstream-class)\<[TransitionEvent](../dart-html/transitionevent-class)\>

::: {.features}
\@SupportedBrowser(SupportedBrowser.CHROME),
\@SupportedBrowser(SupportedBrowser.FIREFOX),
\@SupportedBrowser(SupportedBrowser.IE, \'10\'),
\@SupportedBrowser(SupportedBrowser.SAFARI), read-only, inherited
:::

Stream of `transitionend` events handled by this
[Element](../dart-html/element-class).

[onVolumeChange](svgelement/onvolumechange) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onWaiting](svgelement/onwaiting) →
[ElementStream](../dart-html/elementstream-class)\<[Event](../dart-html/event-class)\>

::: {.features}
read-only, inherited
:::

[onWheel](svgelement/onwheel) →
[ElementStream](../dart-html/elementstream-class)\<[WheelEvent](../dart-html/wheelevent-class)\>

::: {.features}
read-only, inherited
:::

[outerHtml](svgelement/outerhtml) → [String](../dart-core/string-class)?

::: {.features}
read-only, inherited
:::

[ownerDocument](../dart-html/node/ownerdocument) →
[Document](../dart-html/document-class)?

::: {.features}
read-only, inherited
:::

The document this node belongs to.

[ownerSvgElement](svgelement/ownersvgelement) →
[SvgSvgElement](svgsvgelement-class)?

::: {.features}
\@JSName(\'ownerSVGElement\'), read-only, inherited
:::

[paddingEdge](../dart-html/element/paddingedge) →
[CssRect](../dart-html/cssrect-class)

::: {.features}
read-only, inherited
:::

Access the dimensions and position of this element\'s content + padding
box.

[parent](../dart-html/node/parent) →
[Element](../dart-html/element-class)?

::: {.features}
\@JSName(\'parentElement\'), read-only, inherited
:::

The parent element of this node.

[parentNode](../dart-html/node/parentnode) →
[Node](../dart-html/node-class)?

::: {.features}
read-only, inherited
:::

The parent node of this node.

[preserveAspectRatio](imageelement/preserveaspectratio) →
[AnimatedPreserveAspectRatio](animatedpreserveaspectratio-class)?

::: {.features}
read-only
:::

[previousElementSibling](../dart-html/element/previouselementsibling) →
[Element](../dart-html/element-class)?

::: {.features}
read-only, inherited
:::

[previousNode](../dart-html/node/previousnode) →
[Node](../dart-html/node-class)?

::: {.features}
\@JSName(\'previousSibling\'), read-only, inherited
:::

The previous sibling node.

[requiredExtensions](graphicselement/requiredextensions) →
[StringList](stringlist-class)?

::: {.features}
read-only, inherited
:::

[runtimeType](../dart-core/object/runtimetype) →
[Type](../dart-core/type-class)

::: {.features}
read-only, inherited
:::

A representation of the runtime type of the object.

[scrollHeight](../dart-html/element/scrollheight) →
[int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

[scrollLeft](../dart-html/element/scrollleft) ↔
[int](../dart-core/int-class)

::: {.features}
read / write, inherited
:::

[scrollTop](../dart-html/element/scrolltop) ↔
[int](../dart-core/int-class)

::: {.features}
read / write, inherited
:::

[scrollWidth](../dart-html/element/scrollwidth) →
[int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

[shadowRoot](../dart-html/element/shadowroot) →
[ShadowRoot](../dart-html/shadowroot-class)?

::: {.features}
\@SupportedBrowser(SupportedBrowser.CHROME, \'25\'), read-only,
inherited
:::

The shadow root of this shadow host.

[slot](../dart-html/element/slot) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write, inherited
:::

[spellcheck](../dart-html/element/spellcheck) ↔
[bool](../dart-core/bool-class)?

::: {.features}
read / write, inherited
:::

[style](../dart-html/element/style) →
[CssStyleDeclaration](../dart-html/cssstyledeclaration-class)

::: {.features}
read-only, inherited
:::

[styleMap](../dart-html/element/stylemap) →
[StylePropertyMap](../dart-html/stylepropertymap-class)?

::: {.features}
read-only, inherited
:::

[systemLanguage](graphicselement/systemlanguage) →
[StringList](stringlist-class)?

::: {.features}
read-only, inherited
:::

[tabIndex](../dart-html/element/tabindex) ↔
[int](../dart-core/int-class)?

::: {.features}
read / write, inherited
:::

[tagName](../dart-html/element/tagname) →
[String](../dart-core/string-class)

::: {.features}
read-only, inherited
:::

[text](../dart-html/node/text) ↔ [String](../dart-core/string-class)?

::: {.features}
\@JSName(\'textContent\'), \@JSName(\'textContent\'), read / write,
inherited
:::

All text within this node and its descendents.

[title](../dart-html/element/title) ↔
[String](../dart-core/string-class)?

::: {.features}
read / write, inherited
:::

[transform](graphicselement/transform) →
[AnimatedTransformList](animatedtransformlist-class)?

::: {.features}
read-only, inherited
:::

[translate](../dart-html/element/translate) ↔
[bool](../dart-core/bool-class)?

::: {.features}
read / write, inherited
:::

Specifies whether this element\'s text content changes when the page is
localized.

[viewportElement](svgelement/viewportelement) →
[SvgElement](svgelement-class)?

::: {.features}
read-only, inherited
:::

[width](imageelement/width) → [AnimatedLength](animatedlength-class)?

::: {.features}
read-only
:::

[x](imageelement/x) → [AnimatedLength](animatedlength-class)?

::: {.features}
read-only
:::

[y](imageelement/y) → [AnimatedLength](animatedlength-class)?

::: {.features}
read-only
:::

Methods {#instance-methods}
-------

[addEventListener](../dart-html/eventtarget/addeventlistener)([String](../dart-core/string-class)
type, [EventListener](../dart-html/eventlistener)? listener,
\[[bool](../dart-core/bool-class)? useCapture\]) → void

::: {.features}
inherited
:::

[after](../dart-html/element/after)([Object](../dart-core/object-class)
nodes) → void

::: {.features}
inherited
:::

[animate](../dart-html/element/animate)([Iterable](../dart-core/iterable-class)\<[Map](../dart-core/map-class)\<[String](../dart-core/string-class),
dynamic\>\> frames, \[dynamic timing\]) →
[Animation](../dart-html/animation-class)

::: {.features}
\@SupportedBrowser(SupportedBrowser.CHROME, \'36\'), inherited
:::

Creates a new AnimationEffect object whose target element is the object
on which the method is called, and calls the play() method of the
AnimationTimeline object of the document timeline of the node document
of the element, passing the newly created AnimationEffect as the
argument to the method. Returns an Animation for the effect.

[append](../dart-html/node/append)([Node](../dart-html/node-class) node)
→ [Node](../dart-html/node-class)

::: {.features}
\@JSName(\'appendChild\'), inherited
:::

Adds a node to the end of the child [nodes](../dart-html/node/nodes)
list of this node.

[appendHtml](../dart-html/element/appendhtml)([String](../dart-core/string-class)
text, {[NodeValidator](../dart-html/nodevalidator-class)? validator,
[NodeTreeSanitizer](../dart-html/nodetreesanitizer-class)?
treeSanitizer}) → void

::: {.features}
inherited
:::

Parses the specified text as HTML and adds the resulting node after the
last child of this element.

[appendText](../dart-html/element/appendtext)([String](../dart-core/string-class)
text) → void

::: {.features}
inherited
:::

Adds the specified text after the last child of this element.

[attached](../dart-html/element/attached)() → void

::: {.features}
inherited
:::

Called by the DOM when this element has been inserted into the live
document.

[attachShadow](../dart-html/element/attachshadow)([Map](../dart-core/map-class)
shadowRootInitDict) → [ShadowRoot](../dart-html/shadowroot-class)

::: {.features}
inherited
:::

[attributeChanged](../dart-html/element/attributechanged)([String](../dart-core/string-class)
name, [String](../dart-core/string-class) oldValue,
[String](../dart-core/string-class) newValue) → void

::: {.features}
inherited
:::

Called by the DOM whenever an attribute on this has been changed.

[before](../dart-html/element/before)([Object](../dart-core/object-class)
nodes) → void

::: {.features}
inherited
:::

[blur](svgelement/blur)() → void

::: {.features}
inherited
:::

[click](svgelement/click)() → void

::: {.features}
inherited
:::

[clone](../dart-html/node/clone)([bool](../dart-core/bool-class)? deep)
→ [Node](../dart-html/node-class)

::: {.features}
\@JSName(\'cloneNode\'), inherited
:::

Returns a copy of this node.

[closest](../dart-html/element/closest)([String](../dart-core/string-class)
selectors) → [Element](../dart-html/element-class)?

::: {.features}
inherited
:::

[contains](../dart-html/node/contains)([Node](../dart-html/node-class)?
other) → [bool](../dart-core/bool-class)

::: {.features}
inherited
:::

Returns true if this node contains the specified node.

[createFragment](svgelement/createfragment)([String](../dart-core/string-class)?
svg, {[NodeValidator](../dart-html/nodevalidator-class)? validator,
[NodeTreeSanitizer](../dart-html/nodetreesanitizer-class)?
treeSanitizer}) →
[DocumentFragment](../dart-html/documentfragment-class)

::: {.features}
inherited
:::

Create a DocumentFragment from the HTML fragment and ensure that it
follows the sanitization rules specified by the validator or
treeSanitizer.

[createShadowRoot](../dart-html/element/createshadowroot)() →
[ShadowRoot](../dart-html/shadowroot-class)

::: {.features}
\@SupportedBrowser(SupportedBrowser.CHROME, \'25\'), inherited
:::

Creates a new shadow root for this shadow host.

[decode](imageelement/decode)() → [Future](../dart-async/future-class)

[detached](../dart-html/element/detached)() → void

::: {.features}
inherited
:::

Called by the DOM when this element has been removed from the live
document.

[dispatchEvent](../dart-html/eventtarget/dispatchevent)([Event](../dart-html/event-class)
event) → [bool](../dart-core/bool-class)

::: {.features}
inherited
:::

[enteredView](../dart-html/element/enteredview){.deprecated}() → void

::: {.features}
inherited
:::

Deprecated\*: override [attached](../dart-html/element/attached)
instead.

[focus](svgelement/focus)() → void

::: {.features}
inherited
:::

[getAnimations](../dart-html/element/getanimations)() →
[List](../dart-core/list-class)\<[Animation](../dart-html/animation-class)\>

::: {.features}
inherited
:::

[getAttribute](../dart-html/element/getattribute)([String](../dart-core/string-class)
name) → [String](../dart-core/string-class)?

::: {.features}
inherited
:::

[getAttributeNames](../dart-html/element/getattributenames)() →
[List](../dart-core/list-class)\<[String](../dart-core/string-class)\>

::: {.features}
inherited
:::

[getAttributeNS](../dart-html/element/getattributens)([String](../dart-core/string-class)?
namespaceURI, [String](../dart-core/string-class) name) →
[String](../dart-core/string-class)?

::: {.features}
inherited
:::

[getBBox](graphicselement/getbbox)() → [Rect](rect-class)

::: {.features}
inherited
:::

[getBoundingClientRect](../dart-html/element/getboundingclientrect)() →
[Rectangle](../dart-math/rectangle-class)\<[num](../dart-core/num-class)\>

::: {.features}
\@Creates(\'\_DomRect\'), \@Returns(\'\_DomRect\|Null\'), inherited
:::

Returns the smallest bounding rectangle that encompasses this element\'s
padding, scrollbar, and border.

[getClientRects](../dart-html/element/getclientrects)() →
[List](../dart-core/list-class)\<[Rectangle](../dart-math/rectangle-class)\<[num](../dart-core/num-class)\>\>

::: {.features}
inherited
:::

[getComputedStyle](../dart-html/element/getcomputedstyle)(\[[String](../dart-core/string-class)?
pseudoElement\]) →
[CssStyleDeclaration](../dart-html/cssstyledeclaration-class)

::: {.features}
inherited
:::

The set of all CSS values applied to this element, including inherited
and default values.

[getCtm](graphicselement/getctm)() → [Matrix](matrix-class)

::: {.features}
\@JSName(\'getCTM\'), inherited
:::

[getDestinationInsertionPoints](../dart-html/element/getdestinationinsertionpoints)()
→ [List](../dart-core/list-class)\<[Node](../dart-html/node-class)\>

::: {.features}
\@Returns(\'NodeList\'), \@Creates(\'NodeList\'), inherited
:::

Returns a list of shadow DOM insertion points to which this element is
distributed.

[getElementsByClassName](../dart-html/element/getelementsbyclassname)([String](../dart-core/string-class)
classNames) →
[List](../dart-core/list-class)\<[Node](../dart-html/node-class)\>

::: {.features}
\@Creates(\'NodeList\|HtmlCollection\'),
\@Returns(\'NodeList\|HtmlCollection\'), inherited
:::

Returns a list of nodes with the given class name inside this element.

[getNamespacedAttributes](../dart-html/element/getnamespacedattributes)([String](../dart-core/string-class)
namespace) →
[Map](../dart-core/map-class)\<[String](../dart-core/string-class),
[String](../dart-core/string-class)\>

::: {.features}
inherited
:::

Gets a map for manipulating the attributes of a particular namespace.

[getRootNode](../dart-html/node/getrootnode)(\[[Map](../dart-core/map-class)?
options\]) → [Node](../dart-html/node-class)

::: {.features}
inherited
:::

[getScreenCtm](graphicselement/getscreenctm)() → [Matrix](matrix-class)

::: {.features}
\@JSName(\'getScreenCTM\'), inherited
:::

[hasAttribute](../dart-html/element/hasattribute)([String](../dart-core/string-class)
name) → [bool](../dart-core/bool-class)

::: {.features}
inherited
:::

[hasAttributeNS](../dart-html/element/hasattributens)([String](../dart-core/string-class)?
namespaceURI, [String](../dart-core/string-class) name) →
[bool](../dart-core/bool-class)

::: {.features}
inherited
:::

[hasChildNodes](../dart-html/node/haschildnodes)() →
[bool](../dart-core/bool-class)

::: {.features}
inherited
:::

Returns true if this node has any children.

[hasPointerCapture](../dart-html/element/haspointercapture)([int](../dart-core/int-class)
pointerId) → [bool](../dart-core/bool-class)

::: {.features}
inherited
:::

[insertAdjacentElement](svgelement/insertadjacentelement)([String](../dart-core/string-class)
where, [Element](../dart-html/element-class) element) →
[Element](../dart-html/element-class)

::: {.features}
inherited
:::

Inserts `element` into the DOM at the specified location.

[insertAdjacentHtml](svgelement/insertadjacenthtml)([String](../dart-core/string-class)
where, [String](../dart-core/string-class) text,
{[NodeValidator](../dart-html/nodevalidator-class)? validator,
[NodeTreeSanitizer](../dart-html/nodetreesanitizer-class)?
treeSanitizer}) → void

::: {.features}
inherited
:::

Parses text as an HTML fragment and inserts it into the DOM at the
specified location.

[insertAdjacentText](svgelement/insertadjacenttext)([String](../dart-core/string-class)
where, [String](../dart-core/string-class) text) → void

::: {.features}
inherited
:::

Inserts text into the DOM at the specified location.

[insertAllBefore](../dart-html/node/insertallbefore)([Iterable](../dart-core/iterable-class)\<[Node](../dart-html/node-class)\>
newNodes, [Node](../dart-html/node-class) child) → void

::: {.features}
inherited
:::

Inserts all of the nodes into this node directly before child.

[insertBefore](../dart-html/node/insertbefore)([Node](../dart-html/node-class)
node, [Node](../dart-html/node-class)? child) →
[Node](../dart-html/node-class)

::: {.features}
inherited
:::

Inserts the given node into this node directly before child. If child is
`null`, then the given node is inserted at the end of this node\'s child
nodes.

[leftView](../dart-html/element/leftview){.deprecated}() → void

::: {.features}
inherited
:::

Deprecated\*: override [detached](../dart-html/element/detached)
instead.

[matches](../dart-html/element/matches)([String](../dart-core/string-class)
selectors) → [bool](../dart-core/bool-class)

::: {.features}
inherited
:::

Checks if this element matches the CSS selectors.

[matchesWithAncestors](../dart-html/element/matcheswithancestors)([String](../dart-core/string-class)
selectors) → [bool](../dart-core/bool-class)

::: {.features}
inherited
:::

Checks if this element or any of its parents match the CSS selectors.

[noSuchMethod](../dart-core/object/nosuchmethod)([Invocation](../dart-core/invocation-class)
invocation) → dynamic

::: {.features}
inherited
:::

Invoked when a non-existent method or property is accessed.

[offsetTo](../dart-html/element/offsetto)([Element](../dart-html/element-class)
parent) →
[Point](../dart-math/point-class)\<[num](../dart-core/num-class)\>

::: {.features}
inherited
:::

Provides the offset of this element\'s
[borderEdge](../dart-html/element/borderedge) relative to the specified
`parent`.

[querySelector](../dart-html/element/queryselector)([String](../dart-core/string-class)
selectors) → [Element](../dart-html/element-class)?

::: {.features}
inherited
:::

Finds the first descendant element of this element that matches the
specified group of selectors.

[querySelectorAll](../dart-html/element/queryselectorall)\<T extends
[Element](../dart-html/element-class)\>([String](../dart-core/string-class)
selectors) → [ElementList](../dart-html/elementlist-class)\<T\>

::: {.features}
inherited
:::

Finds all descendent elements of this element that match the specified
group of selectors.

[releasePointerCapture](../dart-html/element/releasepointercapture)([int](../dart-core/int-class)
pointerId) → void

::: {.features}
inherited
:::

[remove](../dart-html/node/remove)() → void

::: {.features}
inherited
:::

Removes this node from the DOM.

[removeAttribute](../dart-html/element/removeattribute)([String](../dart-core/string-class)
name) → void

::: {.features}
inherited
:::

[removeAttributeNS](../dart-html/element/removeattributens)([String](../dart-core/string-class)?
namespaceURI, [String](../dart-core/string-class) name) → void

::: {.features}
inherited
:::

[removeEventListener](../dart-html/eventtarget/removeeventlistener)([String](../dart-core/string-class)
type, [EventListener](../dart-html/eventlistener)? listener,
\[[bool](../dart-core/bool-class)? useCapture\]) → void

::: {.features}
inherited
:::

[replaceWith](../dart-html/node/replacewith)([Node](../dart-html/node-class)
otherNode) → [Node](../dart-html/node-class)

::: {.features}
inherited
:::

Replaces this node with another node.

[requestFullscreen](../dart-html/element/requestfullscreen)(\[[Map](../dart-core/map-class)?
options\]) → [Future](../dart-async/future-class)\<void\>

::: {.features}
\@SupportedBrowser(SupportedBrowser.CHROME),
\@SupportedBrowser(SupportedBrowser.FIREFOX),
\@SupportedBrowser(SupportedBrowser.SAFARI), inherited
:::

Displays this element fullscreen.

[requestPointerLock](../dart-html/element/requestpointerlock)() → void

::: {.features}
inherited
:::

[scroll](../dart-html/element/scroll)(\[dynamic options\_OR\_x,
[num](../dart-core/num-class)? y\]) → void

::: {.features}
inherited
:::

[scrollBy](../dart-html/element/scrollby)(\[dynamic options\_OR\_x,
[num](../dart-core/num-class)? y\]) → void

::: {.features}
inherited
:::

[scrollIntoView](../dart-html/element/scrollintoview)(\[[ScrollAlignment](../dart-html/scrollalignment-class)?
alignment\]) → void

::: {.features}
inherited
:::

Scrolls this element into view.

[scrollIntoViewIfNeeded](../dart-html/element/scrollintoviewifneeded)(\[[bool](../dart-core/bool-class)?
centerIfNeeded\]) → void

::: {.features}
inherited
:::

Nonstandard version of `scrollIntoView` that scrolls the current element
into the visible area of the browser window if it\'s not already within
the visible area of the browser window. If the element is already within
the visible area of the browser window, then no scrolling takes place.

[scrollTo](../dart-html/element/scrollto)(\[dynamic options\_OR\_x,
[num](../dart-core/num-class)? y\]) → void

::: {.features}
inherited
:::

[setApplyScroll](../dart-html/element/setapplyscroll)([String](../dart-core/string-class)
nativeScrollBehavior) →
[Future](../dart-async/future-class)\<[ScrollState](../dart-html/scrollstate-class)\>

::: {.features}
inherited
:::

[setAttribute](../dart-html/element/setattribute)([String](../dart-core/string-class)
name, [Object](../dart-core/object-class) value) → void

::: {.features}
inherited
:::

[setAttributeNS](../dart-html/element/setattributens)([String](../dart-core/string-class)?
namespaceURI, [String](../dart-core/string-class) name,
[Object](../dart-core/object-class) value) → void

::: {.features}
inherited
:::

[setDistributeScroll](../dart-html/element/setdistributescroll)([String](../dart-core/string-class)
nativeScrollBehavior) →
[Future](../dart-async/future-class)\<[ScrollState](../dart-html/scrollstate-class)\>

::: {.features}
inherited
:::

[setInnerHtml](../dart-html/element/setinnerhtml)([String](../dart-core/string-class)?
html, {[NodeValidator](../dart-html/nodevalidator-class)? validator,
[NodeTreeSanitizer](../dart-html/nodetreesanitizer-class)?
treeSanitizer}) → void

::: {.features}
inherited
:::

Parses the HTML fragment and sets it as the contents of this element.
This ensures that the generated content follows the sanitization rules
specified by the validator or treeSanitizer.

[setPointerCapture](../dart-html/element/setpointercapture)([int](../dart-core/int-class)
pointerId) → void

::: {.features}
inherited
:::

[toString](../dart-html/element/tostring)() →
[String](../dart-core/string-class)

::: {.features}
inherited
:::

The string representation of this element.

Operators
---------

[operator
==](../dart-core/object/operator_equals)([Object](../dart-core/object-class)
other) → [bool](../dart-core/bool-class)

::: {.features}
inherited
:::

The equality operator.

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/ImageElement-class.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/imageelement-class.md)
[dart:html](../dart-html/dart-html-library){._links-link}

ImageElement class
==================

Inheritance

:   -   [Object](../dart-core/object-class)
    -   [EventTarget](eventtarget-class)
    -   [Node](node-class)
    -   [Element](element-class)
    -   [HtmlElement](htmlelement-class)
    -   ImageElement

Implemented types

:   -   [CanvasImageSource](canvasimagesource-class)

Annotations

:   -   \@Native(\"HTMLImageElement\")

Constructors
------------

[ImageElement](imageelement/imageelement)({[String](../dart-core/string-class)?
src, [int](../dart-core/int-class)? width,
[int](../dart-core/int-class)? height})

::: {.constructor-modifier .features}
factory
:::

[ImageElement.created](imageelement/imageelement.created)()

Constructor instantiated by the DOM when a custom element has been
created.

Properties {#instance-properties}
----------

[accessibleNode](element/accessiblenode) →
[AccessibleNode](accessiblenode-class)?

::: {.features}
read-only, inherited
:::

[alt](imageelement/alt) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write
:::

[assignedSlot](element/assignedslot) → [SlotElement](slotelement-class)?

::: {.features}
read-only, inherited
:::

[async](imageelement/async) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write
:::

[attributes](element/attributes) ↔
[Map](../dart-core/map-class)\<[String](../dart-core/string-class),
[String](../dart-core/string-class)\>

::: {.features}
read / write, inherited
:::

All attributes on this element.

[baseUri](node/baseuri) → [String](../dart-core/string-class)?

::: {.features}
\@JSName(\'baseURI\'), read-only, inherited
:::

[borderEdge](element/borderedge) → [CssRect](cssrect-class)

::: {.features}
read-only, inherited
:::

Access the dimensions and position of this element\'s content + padding
+ border box.

[childNodes](node/childnodes) →
[List](../dart-core/list-class)\<[Node](node-class)\>

::: {.features}
\@Returns(\'NodeList\'), \@Creates(\'NodeList\'), read-only, inherited
:::

A list of this node\'s children.

[children](element/children) ↔
[List](../dart-core/list-class)\<[Element](element-class)\>

::: {.features}
read / write, inherited
:::

List of the direct children of this element.

[classes](element/classes) ↔ [CssClassSet](cssclassset-class)

::: {.features}
read / write, inherited
:::

The set of CSS classes applied to this element.

[className](element/classname) ↔ [String](../dart-core/string-class)

::: {.features}
read / write, inherited
:::

[client](element/client) →
[Rectangle](../dart-math/rectangle-class)\<[num](../dart-core/num-class)\>

::: {.features}
read-only, inherited
:::

Gets the position of this element relative to the client area of the
page.

[clientHeight](element/clientheight) → [int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

[clientLeft](element/clientleft) → [int](../dart-core/int-class)?

::: {.features}
read-only, inherited
:::

[clientTop](element/clienttop) → [int](../dart-core/int-class)?

::: {.features}
read-only, inherited
:::

[clientWidth](element/clientwidth) → [int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

[complete](imageelement/complete) → [bool](../dart-core/bool-class)?

::: {.features}
read-only
:::

[computedName](element/computedname) →
[String](../dart-core/string-class)?

::: {.features}
read-only, inherited
:::

[computedRole](element/computedrole) →
[String](../dart-core/string-class)?

::: {.features}
read-only, inherited
:::

[contentEdge](element/contentedge) → [CssRect](cssrect-class)

::: {.features}
read-only, inherited
:::

Access this element\'s content position.

[contentEditable](element/contenteditable) ↔
[String](../dart-core/string-class)

::: {.features}
read / write, inherited
:::

[crossOrigin](imageelement/crossorigin) ↔
[String](../dart-core/string-class)?

::: {.features}
read / write
:::

[currentSrc](imageelement/currentsrc) →
[String](../dart-core/string-class)?

::: {.features}
read-only
:::

[dataset](element/dataset) ↔
[Map](../dart-core/map-class)\<[String](../dart-core/string-class),
[String](../dart-core/string-class)\>

::: {.features}
read / write, inherited
:::

Allows access to all custom data attributes (data-\*) set on this
element.

[dir](element/dir) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write, inherited
:::

[documentOffset](element/documentoffset) →
[Point](../dart-math/point-class)\<[num](../dart-core/num-class)\>

::: {.features}
read-only, inherited
:::

Provides the coordinates of the element relative to the top of the
document.

[draggable](element/draggable) ↔ [bool](../dart-core/bool-class)

::: {.features}
read / write, inherited
:::

Indicates whether the element can be dragged and dropped.

[firstChild](node/firstchild) → [Node](node-class)?

::: {.features}
read-only, inherited
:::

The first child of this node.

[hashCode](../dart-core/object/hashcode) → [int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

The hash code for this object.

[height](imageelement/height) ↔ [int](../dart-core/int-class)?

::: {.features}
read / write
:::

[hidden](element/hidden) ↔ [bool](../dart-core/bool-class)

::: {.features}
read / write, inherited
:::

Indicates whether the element is not relevant to the page\'s current
state.

[id](element/id) ↔ [String](../dart-core/string-class)

::: {.features}
read / write, inherited
:::

[inert](element/inert) ↔ [bool](../dart-core/bool-class)?

::: {.features}
read / write, inherited
:::

[innerHtml](element/innerhtml) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write, inherited
:::

Parses the HTML fragment and sets it as the contents of this element.

[innerText](element/innertext) ↔ [String](../dart-core/string-class)

::: {.features}
\@JSName(\'innerText\'), read / write, inherited
:::

[inputMode](element/inputmode) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write, inherited
:::

[isConnected](node/isconnected) → [bool](../dart-core/bool-class)?

::: {.features}
read-only, inherited
:::

[isContentEditable](element/iscontenteditable) →
[bool](../dart-core/bool-class)?

::: {.features}
read-only, inherited
:::

[isMap](imageelement/ismap) ↔ [bool](../dart-core/bool-class)?

::: {.features}
read / write
:::

[lang](element/lang) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write, inherited
:::

[lastChild](node/lastchild) → [Node](node-class)?

::: {.features}
read-only, inherited
:::

The last child of this node.

[localName](element/localname) → [String](../dart-core/string-class)

::: {.features}
\@Returns(\'String\'), read-only, inherited
:::

[marginEdge](element/marginedge) → [CssRect](cssrect-class)

::: {.features}
read-only, inherited
:::

Access the dimensions and position of this element\'s content + padding
+ border + margin box.

[namespaceUri](element/namespaceuri) →
[String](../dart-core/string-class)?

::: {.features}
read-only, inherited
:::

A URI that identifies the XML namespace of this element.

[naturalHeight](imageelement/naturalheight) →
[int](../dart-core/int-class)

::: {.features}
read-only
:::

[naturalWidth](imageelement/naturalwidth) →
[int](../dart-core/int-class)

::: {.features}
read-only
:::

[nextElementSibling](element/nextelementsibling) →
[Element](element-class)?

::: {.features}
read-only, inherited
:::

[nextNode](node/nextnode) → [Node](node-class)?

::: {.features}
\@JSName(\'nextSibling\'), read-only, inherited
:::

The next sibling node.

[nodeName](node/nodename) → [String](../dart-core/string-class)?

::: {.features}
read-only, inherited
:::

The name of this node.

[nodes](node/nodes) ↔
[List](../dart-core/list-class)\<[Node](node-class)\>

::: {.features}
read / write, inherited
:::

A modifiable list of this node\'s children.

[nodeType](node/nodetype) → [int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

The type of node.

[nodeValue](node/nodevalue) → [String](../dart-core/string-class)?

::: {.features}
read-only, inherited
:::

The value of this node.

[nonce](htmlelement/nonce) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write, inherited
:::

[offset](element/offset) →
[Rectangle](../dart-math/rectangle-class)\<[num](../dart-core/num-class)\>

::: {.features}
read-only, inherited
:::

Gets the offset of this element relative to its offsetParent.

[offsetHeight](element/offsetheight) → [int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

[offsetLeft](element/offsetleft) → [int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

[offsetParent](element/offsetparent) → [Element](element-class)?

::: {.features}
read-only, inherited
:::

[offsetTop](element/offsettop) → [int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

[offsetWidth](element/offsetwidth) → [int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

[on](element/on) → [ElementEvents](elementevents-class)

::: {.features}
read-only, inherited
:::

This is an ease-of-use accessor for event streams which should only be
used when an explicit accessor is not available.

[onAbort](element/onabort) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `abort` events handled by this [Element](element-class).

[onBeforeCopy](element/onbeforecopy) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `beforecopy` events handled by this [Element](element-class).

[onBeforeCut](element/onbeforecut) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `beforecut` events handled by this [Element](element-class).

[onBeforePaste](element/onbeforepaste) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `beforepaste` events handled by this [Element](element-class).

[onBlur](element/onblur) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `blur` events handled by this [Element](element-class).

[onCanPlay](element/oncanplay) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onCanPlayThrough](element/oncanplaythrough) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onChange](element/onchange) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `change` events handled by this [Element](element-class).

[onClick](element/onclick) →
[ElementStream](elementstream-class)\<[MouseEvent](mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `click` events handled by this [Element](element-class).

[onContextMenu](element/oncontextmenu) →
[ElementStream](elementstream-class)\<[MouseEvent](mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `contextmenu` events handled by this [Element](element-class).

[onCopy](element/oncopy) →
[ElementStream](elementstream-class)\<[ClipboardEvent](clipboardevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `copy` events handled by this [Element](element-class).

[onCut](element/oncut) →
[ElementStream](elementstream-class)\<[ClipboardEvent](clipboardevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `cut` events handled by this [Element](element-class).

[onDoubleClick](element/ondoubleclick) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
\@DomName(\'Element.ondblclick\'), read-only, inherited
:::

Stream of `doubleclick` events handled by this [Element](element-class).

[onDrag](element/ondrag) →
[ElementStream](elementstream-class)\<[MouseEvent](mouseevent-class)\>

::: {.features}
read-only, inherited
:::

A stream of `drag` events fired when this element currently being
dragged.

[onDragEnd](element/ondragend) →
[ElementStream](elementstream-class)\<[MouseEvent](mouseevent-class)\>

::: {.features}
read-only, inherited
:::

A stream of `dragend` events fired when this element completes a drag
operation.

[onDragEnter](element/ondragenter) →
[ElementStream](elementstream-class)\<[MouseEvent](mouseevent-class)\>

::: {.features}
read-only, inherited
:::

A stream of `dragenter` events fired when a dragged object is first
dragged over this element.

[onDragLeave](element/ondragleave) →
[ElementStream](elementstream-class)\<[MouseEvent](mouseevent-class)\>

::: {.features}
read-only, inherited
:::

A stream of `dragleave` events fired when an object being dragged over
this element leaves this element\'s target area.

[onDragOver](element/ondragover) →
[ElementStream](elementstream-class)\<[MouseEvent](mouseevent-class)\>

::: {.features}
read-only, inherited
:::

A stream of `dragover` events fired when a dragged object is currently
being dragged over this element.

[onDragStart](element/ondragstart) →
[ElementStream](elementstream-class)\<[MouseEvent](mouseevent-class)\>

::: {.features}
read-only, inherited
:::

A stream of `dragstart` events fired when this element starts being
dragged.

[onDrop](element/ondrop) →
[ElementStream](elementstream-class)\<[MouseEvent](mouseevent-class)\>

::: {.features}
read-only, inherited
:::

A stream of `drop` events fired when a dragged object is dropped on this
element.

[onDurationChange](element/ondurationchange) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onEmptied](element/onemptied) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onEnded](element/onended) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onError](element/onerror) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `error` events handled by this [Element](element-class).

[onFocus](element/onfocus) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `focus` events handled by this [Element](element-class).

[onFullscreenChange](element/onfullscreenchange) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `fullscreenchange` events handled by this
[Element](element-class).

[onFullscreenError](element/onfullscreenerror) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `fullscreenerror` events handled by this
[Element](element-class).

[onInput](element/oninput) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `input` events handled by this [Element](element-class).

[onInvalid](element/oninvalid) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `invalid` events handled by this [Element](element-class).

[onKeyDown](element/onkeydown) →
[ElementStream](elementstream-class)\<[KeyboardEvent](keyboardevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `keydown` events handled by this [Element](element-class).

[onKeyPress](element/onkeypress) →
[ElementStream](elementstream-class)\<[KeyboardEvent](keyboardevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `keypress` events handled by this [Element](element-class).

[onKeyUp](element/onkeyup) →
[ElementStream](elementstream-class)\<[KeyboardEvent](keyboardevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `keyup` events handled by this [Element](element-class).

[onLoad](element/onload) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `load` events handled by this [Element](element-class).

[onLoadedData](element/onloadeddata) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onLoadedMetadata](element/onloadedmetadata) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onMouseDown](element/onmousedown) →
[ElementStream](elementstream-class)\<[MouseEvent](mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `mousedown` events handled by this [Element](element-class).

[onMouseEnter](element/onmouseenter) →
[ElementStream](elementstream-class)\<[MouseEvent](mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `mouseenter` events handled by this [Element](element-class).

[onMouseLeave](element/onmouseleave) →
[ElementStream](elementstream-class)\<[MouseEvent](mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `mouseleave` events handled by this [Element](element-class).

[onMouseMove](element/onmousemove) →
[ElementStream](elementstream-class)\<[MouseEvent](mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `mousemove` events handled by this [Element](element-class).

[onMouseOut](element/onmouseout) →
[ElementStream](elementstream-class)\<[MouseEvent](mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `mouseout` events handled by this [Element](element-class).

[onMouseOver](element/onmouseover) →
[ElementStream](elementstream-class)\<[MouseEvent](mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `mouseover` events handled by this [Element](element-class).

[onMouseUp](element/onmouseup) →
[ElementStream](elementstream-class)\<[MouseEvent](mouseevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `mouseup` events handled by this [Element](element-class).

[onMouseWheel](element/onmousewheel) →
[ElementStream](elementstream-class)\<[WheelEvent](wheelevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `mousewheel` events handled by this [Element](element-class).

[onPaste](element/onpaste) →
[ElementStream](elementstream-class)\<[ClipboardEvent](clipboardevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `paste` events handled by this [Element](element-class).

[onPause](element/onpause) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onPlay](element/onplay) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onPlaying](element/onplaying) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onRateChange](element/onratechange) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onReset](element/onreset) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `reset` events handled by this [Element](element-class).

[onResize](element/onresize) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onScroll](element/onscroll) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `scroll` events handled by this [Element](element-class).

[onSearch](element/onsearch) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `search` events handled by this [Element](element-class).

[onSeeked](element/onseeked) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onSeeking](element/onseeking) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onSelect](element/onselect) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `select` events handled by this [Element](element-class).

[onSelectStart](element/onselectstart) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `selectstart` events handled by this [Element](element-class).

[onStalled](element/onstalled) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onSubmit](element/onsubmit) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

Stream of `submit` events handled by this [Element](element-class).

[onSuspend](element/onsuspend) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onTimeUpdate](element/ontimeupdate) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onTouchCancel](element/ontouchcancel) →
[ElementStream](elementstream-class)\<[TouchEvent](touchevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `touchcancel` events handled by this [Element](element-class).

[onTouchEnd](element/ontouchend) →
[ElementStream](elementstream-class)\<[TouchEvent](touchevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `touchend` events handled by this [Element](element-class).

[onTouchEnter](element/ontouchenter) →
[ElementStream](elementstream-class)\<[TouchEvent](touchevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `touchenter` events handled by this [Element](element-class).

[onTouchLeave](element/ontouchleave) →
[ElementStream](elementstream-class)\<[TouchEvent](touchevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `touchleave` events handled by this [Element](element-class).

[onTouchMove](element/ontouchmove) →
[ElementStream](elementstream-class)\<[TouchEvent](touchevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `touchmove` events handled by this [Element](element-class).

[onTouchStart](element/ontouchstart) →
[ElementStream](elementstream-class)\<[TouchEvent](touchevent-class)\>

::: {.features}
read-only, inherited
:::

Stream of `touchstart` events handled by this [Element](element-class).

[onTransitionEnd](element/ontransitionend) →
[ElementStream](elementstream-class)\<[TransitionEvent](transitionevent-class)\>

::: {.features}
\@SupportedBrowser(SupportedBrowser.CHROME),
\@SupportedBrowser(SupportedBrowser.FIREFOX),
\@SupportedBrowser(SupportedBrowser.IE, \'10\'),
\@SupportedBrowser(SupportedBrowser.SAFARI), read-only, inherited
:::

Stream of `transitionend` events handled by this
[Element](element-class).

[onVolumeChange](element/onvolumechange) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onWaiting](element/onwaiting) →
[ElementStream](elementstream-class)\<[Event](event-class)\>

::: {.features}
read-only, inherited
:::

[onWheel](element/onwheel) →
[ElementStream](elementstream-class)\<[WheelEvent](wheelevent-class)\>

::: {.features}
read-only, inherited
:::

[outerHtml](element/outerhtml) → [String](../dart-core/string-class)?

::: {.features}
\@JSName(\'outerHTML\'), read-only, inherited
:::

[ownerDocument](node/ownerdocument) → [Document](document-class)?

::: {.features}
read-only, inherited
:::

The document this node belongs to.

[paddingEdge](element/paddingedge) → [CssRect](cssrect-class)

::: {.features}
read-only, inherited
:::

Access the dimensions and position of this element\'s content + padding
box.

[parent](node/parent) → [Element](element-class)?

::: {.features}
\@JSName(\'parentElement\'), read-only, inherited
:::

The parent element of this node.

[parentNode](node/parentnode) → [Node](node-class)?

::: {.features}
read-only, inherited
:::

The parent node of this node.

[previousElementSibling](element/previouselementsibling) →
[Element](element-class)?

::: {.features}
read-only, inherited
:::

[previousNode](node/previousnode) → [Node](node-class)?

::: {.features}
\@JSName(\'previousSibling\'), read-only, inherited
:::

The previous sibling node.

[referrerPolicy](imageelement/referrerpolicy) ↔
[String](../dart-core/string-class)?

::: {.features}
read / write
:::

[runtimeType](../dart-core/object/runtimetype) →
[Type](../dart-core/type-class)

::: {.features}
read-only, inherited
:::

A representation of the runtime type of the object.

[scrollHeight](element/scrollheight) → [int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

[scrollLeft](element/scrollleft) ↔ [int](../dart-core/int-class)

::: {.features}
read / write, inherited
:::

[scrollTop](element/scrolltop) ↔ [int](../dart-core/int-class)

::: {.features}
read / write, inherited
:::

[scrollWidth](element/scrollwidth) → [int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

[shadowRoot](element/shadowroot) → [ShadowRoot](shadowroot-class)?

::: {.features}
\@SupportedBrowser(SupportedBrowser.CHROME, \'25\'), read-only,
inherited
:::

The shadow root of this shadow host.

[sizes](imageelement/sizes) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write
:::

[slot](element/slot) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write, inherited
:::

[spellcheck](element/spellcheck) ↔ [bool](../dart-core/bool-class)?

::: {.features}
read / write, inherited
:::

[src](imageelement/src) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write
:::

[srcset](imageelement/srcset) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write
:::

[style](element/style) →
[CssStyleDeclaration](cssstyledeclaration-class)

::: {.features}
read-only, inherited
:::

[styleMap](element/stylemap) →
[StylePropertyMap](stylepropertymap-class)?

::: {.features}
read-only, inherited
:::

[tabIndex](element/tabindex) ↔ [int](../dart-core/int-class)?

::: {.features}
read / write, inherited
:::

[tagName](element/tagname) → [String](../dart-core/string-class)

::: {.features}
read-only, inherited
:::

[text](node/text) ↔ [String](../dart-core/string-class)?

::: {.features}
\@JSName(\'textContent\'), \@JSName(\'textContent\'), read / write,
inherited
:::

All text within this node and its descendents.

[title](element/title) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write, inherited
:::

[translate](element/translate) ↔ [bool](../dart-core/bool-class)?

::: {.features}
read / write, inherited
:::

Specifies whether this element\'s text content changes when the page is
localized.

[useMap](imageelement/usemap) ↔ [String](../dart-core/string-class)?

::: {.features}
read / write
:::

[width](imageelement/width) ↔ [int](../dart-core/int-class)?

::: {.features}
read / write
:::

Methods {#instance-methods}
-------

[addEventListener](eventtarget/addeventlistener)([String](../dart-core/string-class)
type, [EventListener](eventlistener)? listener,
\[[bool](../dart-core/bool-class)? useCapture\]) → void

::: {.features}
inherited
:::

[after](element/after)([Object](../dart-core/object-class) nodes) → void

::: {.features}
inherited
:::

[animate](element/animate)([Iterable](../dart-core/iterable-class)\<[Map](../dart-core/map-class)\<[String](../dart-core/string-class),
dynamic\>\> frames, \[dynamic timing\]) → [Animation](animation-class)

::: {.features}
\@SupportedBrowser(SupportedBrowser.CHROME, \'36\'), inherited
:::

Creates a new AnimationEffect object whose target element is the object
on which the method is called, and calls the play() method of the
AnimationTimeline object of the document timeline of the node document
of the element, passing the newly created AnimationEffect as the
argument to the method. Returns an Animation for the effect.

[append](node/append)([Node](node-class) node) → [Node](node-class)

::: {.features}
\@JSName(\'appendChild\'), inherited
:::

Adds a node to the end of the child [nodes](node/nodes) list of this
node.

[appendHtml](element/appendhtml)([String](../dart-core/string-class)
text, {[NodeValidator](nodevalidator-class)? validator,
[NodeTreeSanitizer](nodetreesanitizer-class)? treeSanitizer}) → void

::: {.features}
inherited
:::

Parses the specified text as HTML and adds the resulting node after the
last child of this element.

[appendText](element/appendtext)([String](../dart-core/string-class)
text) → void

::: {.features}
inherited
:::

Adds the specified text after the last child of this element.

[attached](element/attached)() → void

::: {.features}
inherited
:::

Called by the DOM when this element has been inserted into the live
document.

[attachShadow](element/attachshadow)([Map](../dart-core/map-class)
shadowRootInitDict) → [ShadowRoot](shadowroot-class)

::: {.features}
inherited
:::

[attributeChanged](element/attributechanged)([String](../dart-core/string-class)
name, [String](../dart-core/string-class) oldValue,
[String](../dart-core/string-class) newValue) → void

::: {.features}
inherited
:::

Called by the DOM whenever an attribute on this has been changed.

[before](element/before)([Object](../dart-core/object-class) nodes) →
void

::: {.features}
inherited
:::

[blur](element/blur)() → void

::: {.features}
inherited
:::

[click](element/click)() → void

::: {.features}
inherited
:::

[clone](node/clone)([bool](../dart-core/bool-class)? deep) →
[Node](node-class)

::: {.features}
\@JSName(\'cloneNode\'), inherited
:::

Returns a copy of this node.

[closest](element/closest)([String](../dart-core/string-class)
selectors) → [Element](element-class)?

::: {.features}
inherited
:::

[contains](node/contains)([Node](node-class)? other) →
[bool](../dart-core/bool-class)

::: {.features}
inherited
:::

Returns true if this node contains the specified node.

[createFragment](element/createfragment)([String](../dart-core/string-class)?
html, {[NodeValidator](nodevalidator-class)? validator,
[NodeTreeSanitizer](nodetreesanitizer-class)? treeSanitizer}) →
[DocumentFragment](documentfragment-class)

::: {.features}
inherited
:::

Create a DocumentFragment from the HTML fragment and ensure that it
follows the sanitization rules specified by the validator or
treeSanitizer.

[createShadowRoot](element/createshadowroot)() →
[ShadowRoot](shadowroot-class)

::: {.features}
\@SupportedBrowser(SupportedBrowser.CHROME, \'25\'), inherited
:::

Creates a new shadow root for this shadow host.

[decode](imageelement/decode)() → [Future](../dart-async/future-class)

[detached](element/detached)() → void

::: {.features}
inherited
:::

Called by the DOM when this element has been removed from the live
document.

[dispatchEvent](eventtarget/dispatchevent)([Event](event-class) event) →
[bool](../dart-core/bool-class)

::: {.features}
inherited
:::

[enteredView](element/enteredview){.deprecated}() → void

::: {.features}
inherited
:::

Deprecated\*: override [attached](element/attached) instead.

[focus](element/focus)() → void

::: {.features}
inherited
:::

[getAnimations](element/getanimations)() →
[List](../dart-core/list-class)\<[Animation](animation-class)\>

::: {.features}
inherited
:::

[getAttribute](element/getattribute)([String](../dart-core/string-class)
name) → [String](../dart-core/string-class)?

::: {.features}
inherited
:::

[getAttributeNames](element/getattributenames)() →
[List](../dart-core/list-class)\<[String](../dart-core/string-class)\>

::: {.features}
inherited
:::

[getAttributeNS](element/getattributens)([String](../dart-core/string-class)?
namespaceURI, [String](../dart-core/string-class) name) →
[String](../dart-core/string-class)?

::: {.features}
inherited
:::

[getBoundingClientRect](element/getboundingclientrect)() →
[Rectangle](../dart-math/rectangle-class)\<[num](../dart-core/num-class)\>

::: {.features}
\@Creates(\'\_DomRect\'), \@Returns(\'\_DomRect\|Null\'), inherited
:::

Returns the smallest bounding rectangle that encompasses this element\'s
padding, scrollbar, and border.

[getClientRects](element/getclientrects)() →
[List](../dart-core/list-class)\<[Rectangle](../dart-math/rectangle-class)\<[num](../dart-core/num-class)\>\>

::: {.features}
inherited
:::

[getComputedStyle](element/getcomputedstyle)(\[[String](../dart-core/string-class)?
pseudoElement\]) → [CssStyleDeclaration](cssstyledeclaration-class)

::: {.features}
inherited
:::

The set of all CSS values applied to this element, including inherited
and default values.

[getDestinationInsertionPoints](element/getdestinationinsertionpoints)()
→ [List](../dart-core/list-class)\<[Node](node-class)\>

::: {.features}
\@Returns(\'NodeList\'), \@Creates(\'NodeList\'), inherited
:::

Returns a list of shadow DOM insertion points to which this element is
distributed.

[getElementsByClassName](element/getelementsbyclassname)([String](../dart-core/string-class)
classNames) → [List](../dart-core/list-class)\<[Node](node-class)\>

::: {.features}
\@Creates(\'NodeList\|HtmlCollection\'),
\@Returns(\'NodeList\|HtmlCollection\'), inherited
:::

Returns a list of nodes with the given class name inside this element.

[getNamespacedAttributes](element/getnamespacedattributes)([String](../dart-core/string-class)
namespace) →
[Map](../dart-core/map-class)\<[String](../dart-core/string-class),
[String](../dart-core/string-class)\>

::: {.features}
inherited
:::

Gets a map for manipulating the attributes of a particular namespace.

[getRootNode](node/getrootnode)(\[[Map](../dart-core/map-class)?
options\]) → [Node](node-class)

::: {.features}
inherited
:::

[hasAttribute](element/hasattribute)([String](../dart-core/string-class)
name) → [bool](../dart-core/bool-class)

::: {.features}
inherited
:::

[hasAttributeNS](element/hasattributens)([String](../dart-core/string-class)?
namespaceURI, [String](../dart-core/string-class) name) →
[bool](../dart-core/bool-class)

::: {.features}
inherited
:::

[hasChildNodes](node/haschildnodes)() → [bool](../dart-core/bool-class)

::: {.features}
inherited
:::

Returns true if this node has any children.

[hasPointerCapture](element/haspointercapture)([int](../dart-core/int-class)
pointerId) → [bool](../dart-core/bool-class)

::: {.features}
inherited
:::

[insertAdjacentElement](element/insertadjacentelement)([String](../dart-core/string-class)
where, [Element](element-class) element) → [Element](element-class)

::: {.features}
inherited
:::

Inserts `element` into the DOM at the specified location.

[insertAdjacentHtml](element/insertadjacenthtml)([String](../dart-core/string-class)
where, [String](../dart-core/string-class) html,
{[NodeValidator](nodevalidator-class)? validator,
[NodeTreeSanitizer](nodetreesanitizer-class)? treeSanitizer}) → void

::: {.features}
inherited
:::

Parses text as an HTML fragment and inserts it into the DOM at the
specified location.

[insertAdjacentText](element/insertadjacenttext)([String](../dart-core/string-class)
where, [String](../dart-core/string-class) text) → void

::: {.features}
inherited
:::

Inserts text into the DOM at the specified location.

[insertAllBefore](node/insertallbefore)([Iterable](../dart-core/iterable-class)\<[Node](node-class)\>
newNodes, [Node](node-class) child) → void

::: {.features}
inherited
:::

Inserts all of the nodes into this node directly before child.

[insertBefore](node/insertbefore)([Node](node-class) node,
[Node](node-class)? child) → [Node](node-class)

::: {.features}
inherited
:::

Inserts the given node into this node directly before child. If child is
`null`, then the given node is inserted at the end of this node\'s child
nodes.

[leftView](element/leftview){.deprecated}() → void

::: {.features}
inherited
:::

Deprecated\*: override [detached](element/detached) instead.

[matches](element/matches)([String](../dart-core/string-class)
selectors) → [bool](../dart-core/bool-class)

::: {.features}
inherited
:::

Checks if this element matches the CSS selectors.

[matchesWithAncestors](element/matcheswithancestors)([String](../dart-core/string-class)
selectors) → [bool](../dart-core/bool-class)

::: {.features}
inherited
:::

Checks if this element or any of its parents match the CSS selectors.

[noSuchMethod](../dart-core/object/nosuchmethod)([Invocation](../dart-core/invocation-class)
invocation) → dynamic

::: {.features}
inherited
:::

Invoked when a non-existent method or property is accessed.

[offsetTo](element/offsetto)([Element](element-class) parent) →
[Point](../dart-math/point-class)\<[num](../dart-core/num-class)\>

::: {.features}
inherited
:::

Provides the offset of this element\'s [borderEdge](element/borderedge)
relative to the specified `parent`.

[querySelector](element/queryselector)([String](../dart-core/string-class)
selectors) → [Element](element-class)?

::: {.features}
inherited
:::

Finds the first descendant element of this element that matches the
specified group of selectors.

[querySelectorAll](element/queryselectorall)\<T extends
[Element](element-class)\>([String](../dart-core/string-class)
selectors) → [ElementList](elementlist-class)\<T\>

::: {.features}
inherited
:::

Finds all descendent elements of this element that match the specified
group of selectors.

[releasePointerCapture](element/releasepointercapture)([int](../dart-core/int-class)
pointerId) → void

::: {.features}
inherited
:::

[remove](node/remove)() → void

::: {.features}
inherited
:::

Removes this node from the DOM.

[removeAttribute](element/removeattribute)([String](../dart-core/string-class)
name) → void

::: {.features}
inherited
:::

[removeAttributeNS](element/removeattributens)([String](../dart-core/string-class)?
namespaceURI, [String](../dart-core/string-class) name) → void

::: {.features}
inherited
:::

[removeEventListener](eventtarget/removeeventlistener)([String](../dart-core/string-class)
type, [EventListener](eventlistener)? listener,
\[[bool](../dart-core/bool-class)? useCapture\]) → void

::: {.features}
inherited
:::

[replaceWith](node/replacewith)([Node](node-class) otherNode) →
[Node](node-class)

::: {.features}
inherited
:::

Replaces this node with another node.

[requestFullscreen](element/requestfullscreen)(\[[Map](../dart-core/map-class)?
options\]) → [Future](../dart-async/future-class)\<void\>

::: {.features}
\@SupportedBrowser(SupportedBrowser.CHROME),
\@SupportedBrowser(SupportedBrowser.FIREFOX),
\@SupportedBrowser(SupportedBrowser.SAFARI), inherited
:::

Displays this element fullscreen.

[requestPointerLock](element/requestpointerlock)() → void

::: {.features}
inherited
:::

[scroll](element/scroll)(\[dynamic options\_OR\_x,
[num](../dart-core/num-class)? y\]) → void

::: {.features}
inherited
:::

[scrollBy](element/scrollby)(\[dynamic options\_OR\_x,
[num](../dart-core/num-class)? y\]) → void

::: {.features}
inherited
:::

[scrollIntoView](element/scrollintoview)(\[[ScrollAlignment](scrollalignment-class)?
alignment\]) → void

::: {.features}
inherited
:::

Scrolls this element into view.

[scrollIntoViewIfNeeded](element/scrollintoviewifneeded)(\[[bool](../dart-core/bool-class)?
centerIfNeeded\]) → void

::: {.features}
inherited
:::

Nonstandard version of `scrollIntoView` that scrolls the current element
into the visible area of the browser window if it\'s not already within
the visible area of the browser window. If the element is already within
the visible area of the browser window, then no scrolling takes place.

[scrollTo](element/scrollto)(\[dynamic options\_OR\_x,
[num](../dart-core/num-class)? y\]) → void

::: {.features}
inherited
:::

[setApplyScroll](element/setapplyscroll)([String](../dart-core/string-class)
nativeScrollBehavior) →
[Future](../dart-async/future-class)\<[ScrollState](scrollstate-class)\>

::: {.features}
inherited
:::

[setAttribute](element/setattribute)([String](../dart-core/string-class)
name, [Object](../dart-core/object-class) value) → void

::: {.features}
inherited
:::

[setAttributeNS](element/setattributens)([String](../dart-core/string-class)?
namespaceURI, [String](../dart-core/string-class) name,
[Object](../dart-core/object-class) value) → void

::: {.features}
inherited
:::

[setDistributeScroll](element/setdistributescroll)([String](../dart-core/string-class)
nativeScrollBehavior) →
[Future](../dart-async/future-class)\<[ScrollState](scrollstate-class)\>

::: {.features}
inherited
:::

[setInnerHtml](element/setinnerhtml)([String](../dart-core/string-class)?
html, {[NodeValidator](nodevalidator-class)? validator,
[NodeTreeSanitizer](nodetreesanitizer-class)? treeSanitizer}) → void

::: {.features}
inherited
:::

Parses the HTML fragment and sets it as the contents of this element.
This ensures that the generated content follows the sanitization rules
specified by the validator or treeSanitizer.

[setPointerCapture](element/setpointercapture)([int](../dart-core/int-class)
pointerId) → void

::: {.features}
inherited
:::

[toString](element/tostring)() → [String](../dart-core/string-class)

::: {.features}
inherited
:::

The string representation of this element.

Operators
---------

[operator
==](../dart-core/object/operator_equals)([Object](../dart-core/object-class)
other) → [bool](../dart-core/bool-class)

::: {.features}
inherited
:::

The equality operator.

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImageElement-class.html>
:::
