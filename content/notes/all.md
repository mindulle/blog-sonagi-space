all
===

The `all` [shorthand](shorthand_properties.md)
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property resets
all of an element\'s properties except [`unicode-bidi`](unicode-bidi.md),
[`direction`](direction.md), and [](using_css_custom_properties.md). It can set properties to their
initial or inherited values, or to the values specified in another
cascade layer or stylesheet origin.

Try it
------

Constituent properties
----------------------

This property is a shorthand for all CSS properties except for
[`unicode-bidi`](unicode-bidi.md), [`direction`](direction.md), and [](using_css_custom_properties.md).

Syntax
------

[css]

```css
/* Global values */
all: initial;
all: inherit;
all: unset;
all: revert;
all: revert-layer;
```

The `all` property is specified as one of the CSS global keyword values.
Note that none of these values affect the [`unicode-bidi`](unicode-bidi.md)
and [`direction`](direction.md) properties.

### Values

[`initial`](initial.md)

:   Specifies that all the element\'s properties should be changed to
    their [initial values](initial_value.md).

[`inherit`](inherit.md)

:   Specifies that all the element\'s properties should be changed to
    their [inherited values](inheritance.md).

[`unset`](unset.md)

:   Specifies that all the element\'s properties should be changed to
    their inherited values if they inherit by default, or to their
    initial values if not.

[`revert`](revert.md)

:   Specifies behavior that depends on the stylesheet origin to which
    the declaration belongs:

    -   If the rule belongs to the [author
        origin](cascade#author_stylesheets), the `revert` value rolls
        back the [cascade](cascade) to the user level, so that the
        [specified values](specified_value) are calculated as if no
        author-level rules were specified for the element. For purposes
        of `revert`, the author origin includes the Override and
        Animation origins.
    -   If the rule belongs to the [user
        origin](cascade#user_stylesheets), the `revert` value rolls back
        the [cascade](cascade) to the user-agent level, so that the
        [specified values](specified_value) are calculated as if no
        author-level or user-level rules were specified for the element.
    -   If the rule belongs to the [user-agent
        origin](cascade#user-agent_stylesheets), the `revert` value acts
        like `unset`.

[`revert-layer`](revert-layer.md)

:   Specifies that all the element\'s properties should roll back the
    cascade to a previous [cascade layer](@layer.md), if one exists. If no
    other cascade layer exists, the element\'s properties will roll back
    to the matching rule, if one exists, in the current layer or to a
    previous [style
    origin](https://developer.mozilla.org/en-US/docs/Glossary/Style_origin).

Formal definition
-----------------

  ---------------------------------- -----------------------------------------------------------------------------------------------------------------------------
  [Initial value](initial_value.md)     There is no practical initial value for it.
  Applies to                         all elements
  [Inherited](inheritance.md)           no
  [Computed value](computed_value.md)   as the specified value applies to each property this is a shorthand for.
  Animation type                     as each of the properties of the shorthand (all properties but [`unicode-bidi`](unicode-bidi.md) and [`direction`](direction.md))
  ---------------------------------- -----------------------------------------------------------------------------------------------------------------------------

Formal syntax
-------------

```
all = 
  initial       |
  inherit       |
  unset         |
  revert        |
  revert-layer  
```

Examples
--------

In this example, the CSS file contains styling for the
[`<blockquote>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)
element in addition to some styling for the parent `<body>` element.
Various outputs in the Results subsection demonstrate how the styling of
the `<blockquote>` element is affected when different values are applied
to the `all` property inside the `blockquote` rule.

### HTML

[html]

```html
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

### CSS

[css]

```css
body {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
  margin: 0;
  padding: 0;
}

blockquote {
  background-color: skyblue;
  color: red;
}
```

### Results

#### A. No `all` property

This is the scenario in which no `all` property is set inside the
`blockquote` rule. The
[`<blockquote>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)
element uses the browser\'s default styling which gives it a margin,
together with a specific background and text color as specified in the
stylesheet. It also behaves as a *block* element: the text that follows
it is beneath it.

#### B. `all: initial`

With the `all` property set to `initial` in the `blockquote` rule, the
[`<blockquote>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)
element doesn\'t use the browser default styling anymore: it is an
*inline* element now (initial value), its
[`background-color`](background-color.md#formal_definition) is
`transparent` (initial value), its
[`font-size`](font-size.md#formal_definition) is `medium`, and its
[`color`](_Resources/Markup%20And%20Styling/css/color.md#formal_definition) is `black` (initial value).

#### C. `all: inherit`

In this case, the
[`<blockquote>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)
element doesn\'t use the browser default styling. Instead, it inherits
style values from its parent
[`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)
element: it is a *block* element now (inherited value), its
[`background-color`](background-color.md) is `#F0F0F0` (inherited value),
its [`font-size`](font-size.md) is `small` (inherited value), and its
[`color`](_Resources/Markup%20And%20Styling/css/color.md) is `blue` (inherited value).

#### D. `all: unset`

When the `unset` value is applied to the `all` property in the
`blockquote` rule, the
[`<blockquote>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)
element doesn\'t use the browser default styling. Because
[`background-color`](background-color.md#formal_definition) is a
non-inherited property and [`font-size`](font-size.md#formal_definition)
and [`color`](_Resources/Markup%20And%20Styling/css/color.md#formal_definition) are inherited properties, the
`<blockquote>` element is an *inline* element now (initial value), its
[`background-color`](background-color.md) is `transparent` (initial value),
but its [`font-size`](font-size.md) is still `small` (inherited value), and
its [`color`](_Resources/Markup%20And%20Styling/css/color.md) is `blue` (inherited value).

#### E. `all: revert`

When the `all` property is set to `revert` in the `blockquote` rule, the
`blockquote` rule is considered to be non-existent and the styling
property values are inherited from the ones applied to the parent
element `<body>`. So the `<blockquote>` element gets styled as a *block*
element, with [`background-color`](background-color.md) `#F0F0F0`,
[`font-size`](font-size.md) `small`, and [`color`](_Resources/Markup%20And%20Styling/css/color.md) `blue` - all
values inherited from the `body` rule.

#### F. `all: revert-layer`

There are no cascade layers defined in the CSS file, so the
`<blockquote>` element inherits its style from the matching `body` rule.
The `<blockquote>` element here is styled as a *block* element, with
[`background-color`](background-color.md) `#F0F0F0`,
[`font-size`](font-size.md) `small`, and [`color`](_Resources/Markup%20And%20Styling/css/color.md) `blue` - all
values inherited from the `body` rule. This scenario is an example of
the case when `all` set to `revert-layer` behaves the same as when `all`
is set to `revert`.

Specifications
--------------

  ------------------------------------------------------------------------------

Specification
  ------------------------------------------------------------------------------

  [CSS Cascading and Inheritance Level 4\
  [\#
  all-shorthand]](https://drafts.csswg.org/css-cascade/#all-shorthand)

  ------------------------------------------------------------------------------

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

`all`

37

79

27

No

24

9.1

37

37

27

24

9.3

3.0

See also
--------

CSS global keyword values: [`initial`](initial.md), [`inherit`](inherit.md),
[`unset`](unset.md), [`revert`](revert.md), [`revert-layer`](revert-layer.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/all>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/promise/all.md)
Promise.all()
=============

 
The `Promise.all()` static method takes an iterable of promises as input
and returns a single [`Promise`](../promise). This returned promise
fulfills when all of the input\'s promises fulfill (including when an
empty iterable is passed), with an array of the fulfillment values. It
rejects when any of the input\'s promises rejects, with this first
rejection reason.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Promise.all(iterable)
```




 
### Parameters

 

[`iterable`](#iterable)

:   An [iterable](../../iteration_protocols#the_iterable_protocol) (such
    as an [`Array`](../array)) of promises.



 
### Return value 

 
A [`Promise`](../promise) that is:

-   **Already fulfilled**, if the `iterable` passed is empty.
-   **Asynchronously fulfilled**, when all the promises in the given
    `iterable` fulfill. The fulfillment value is an array of fulfillment
    values, in the order of the promises passed, regardless of
    completion order. If the `iterable` passed is non-empty but contains
    no pending promises, the returned promise is still asynchronously
    (instead of synchronously) fulfilled.
-   **Asynchronously rejected**, when any of the promises in the given
    `iterable` rejects. The rejection reason is the rejection reason of
    the first promise that was rejected.



 
Description
-----------

 
The `Promise.all()` method is one of the [promise
concurrency](../promise#promise_concurrency) methods. It can be useful
for aggregating the results of multiple promises. It is typically used
when there are multiple related asynchronous tasks that the overall code
relies on to work successfully --- all of whom we want to fulfill before
the code execution continues.

`Promise.all()` will reject immediately upon **any** of the input
promises rejecting. In comparison, the promise returned by
[`Promise.allSettled()`](allsettled) will wait for all input promises to
complete, regardless of whether or not one rejects. Use `allSettled()`
if you need the final result of every promise in the input iterable.



 
Examples
--------


 
### Using Promise.all() 

 
`Promise.all` waits for all fulfillments (or the first rejection).

 
 
[js]


```js
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
```


If the `iterable` contains non-promise values, they will be ignored, but
still counted in the returned promise array value (if the promise is
fulfilled):

 
 
[js]


```js
// All values are non-promises, so the returned promise gets fulfilled
const p = Promise.all([1, 2, 3]);
// The only input promise is already fulfilled,
// so the returned promise gets fulfilled
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// One (and the only) input promise is rejected,
// so the returned promise gets rejected
const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }
```




 
### Asynchronicity or synchronicity of Promise.all 

 
This following example demonstrates the asynchronicity of `Promise.all`
when a non-empty `iterable` is passed:

 
 
[js]


```js
// Passing an array of promises that are already resolved,
// to trigger Promise.all as soon as possible
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.all(resolvedPromisesArray);
// Immediately logging the value of p
console.log(p);

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p);
});

// Logs, in order:
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
```


The same thing happens if `Promise.all` rejects:

 
 
[js]


```js
const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
const p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p);
});

// Logs:
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "rejected", <reason>: 44 }
```


`Promise.all` resolves synchronously if and only if the `iterable`
passed is empty:

 
 
[js]


```js
const p = Promise.all([]); // Will be immediately resolved
const p2 = Promise.all([1337, "hi"]); // Non-promise values are ignored, but the evaluation is done asynchronously
console.log(p);
console.log(p2);
setTimeout(() => {
  console.log("the queue is now empty");
  console.log(p2);
});

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
```




 
### Using Promise.all() with async functions 

 
Within [async functions](../../statements/async_function), it\'s very
common to \"over-await\" your code. For example, given the following
functions:

 
 
[js]


```js
function promptForDishChoice() {
  return new Promise((resolve, reject) => {
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
<form method="dialog">
  <p>What would you like to eat?</p>
  <select>
    <option value="pizza">Pizza</option>
    <option value="pasta">Pasta</option>
    <option value="salad">Salad</option>
  </select>
  <menu>
    <li><button value="cancel">Cancel</button></li>
    <li><button type="submit" value="ok">OK</button></li>
  </menu>
</form>
    `;
    dialog.addEventListener("close", () => {
      if (dialog.returnValue === "ok") {
        resolve(dialog.querySelector("select").value);
      } else {
        reject(new Error("User cancelled dialog"));
      }
    });
    document.body.appendChild(dialog);
    dialog.showModal();
  });
}

async function fetchPrices() {
  const response = await fetch("/prices");
  return await response.json();
}
```


You may write a function like this:

 
 
[js]


```js
async function getPrice() {
  const choice = await promptForDishChoice();
  const prices = await fetchPrices();
  return prices[choice];
}
```


However, note that the execution of `promptForDishChoice` and
`fetchPrices` don\'t depend on the result of each other. While the user
is choosing their dish, it\'s fine for the prices to be fetched in the
background, but in the code above, the [`await`](../../operators/await)
operator causes the async function to pause until the choice is made,
and then again until the prices are fetched. We can use `Promise.all` to
run them concurrently, so that the user doesn\'t have to wait for the
prices to be fetched before the result is given:

 
 
[js]


```js
async function getPrice() {
  const [choice, prices] = await Promise.all([
    promptForDishChoice(),
    fetchPrices(),
  ]);
  return prices[choice];
}
```


`Promise.all` is the best choice of [concurrency
method](../promise#promise_concurrency) here, because error handling is
intuitive --- if any of the promises reject, the result is no longer
available, so the whole `await` expression throws.

`Promise.all` accepts an iterable of promises, so if you are using it to
run several async functions concurrently, you need to call the async
functions and use the returned promises. Directly passing the functions
to `Promise.all` does not work, since they are not promises.

 
 
[js]


```js
async function getPrice() {
  const [choice, prices] = await Promise.all([
    promptForDishChoice,
    fetchPrices,
  ]);
  // `choice` and `prices` are still the original async functions;
  // Promise.all() does nothing to non-promises
}
```




 
### Promise.all fail-fast behavior 

 
`Promise.all` is rejected if any of the elements are rejected. For
example, if you pass in four promises that resolve after a timeout and
one promise that rejects immediately, then `Promise.all` will reject
immediately.

 
 
[js]


```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("two"), 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("three"), 3000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("four"), 4000);
});
const p5 = new Promise((resolve, reject) => {
  reject(new Error("reject"));
});

// Using .catch:
Promise.all([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error.message);
  });

// Logs:
// "reject"
```


It is possible to change this behavior by handling possible rejections:

 
 
[js]


```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1_delayed_resolution"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  reject(new Error("p2_immediate_rejection"));
});

Promise.all([p1.catch((error) => error), p2.catch((error) => error)]).then(
  (values) => {
    console.log(values[0]); // "p1_delayed_resolution"
    console.error(values[1]); // "Error: p2_immediate_rejection"
  },
);
```




Specifications
--------------

 
  ---------------------------------------------------------------------------------------------------------------
  Specification
  ---------------------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-promise.all]](https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.all)

  ---------------------------------------------------------------------------------------------------------------


Browser compatibility 
---------------------

 


Desktop

Mobile

Server

Chrome

Edge

Firefox

Opera

Safari

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

WebView Android

Deno

Node.js

`all`

32

12

29

19

8

32

29

19

8

2.0

4.4.3

1.0

0.12.0

 
See also 
--------

 
-   [`Promise`](../promise)
-   [`Promise.allSettled()`](allsettled)
-   [`Promise.any()`](any)
-   [`Promise.race()`](race)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all>

