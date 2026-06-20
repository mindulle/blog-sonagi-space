\<time\>
========

The `<time>` [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[data type](css_types.md) represents a time value expressed in seconds or
milliseconds. It is used in [`animation`](animation.md),
[`transition`](transition.md), and related properties.

Syntax
------

The `<time>` data type consists of a [`<number>`](number.md) followed by
one of the units listed below. Optionally, it may be preceded by a
single `+` or `-` sign. As with all dimensions, there is no space
between the unit literal and the number.

**Note:** Although the number `0` is always the same regardless of unit,
the unit may not be omitted. In other words, `0` is invalid and does not
represent `0s` or `0ms`.

### Units

#### s

:   Represents a time in seconds. Examples: `0s`, `1.5s`, `-60s`.

[`ms`](#ms)

:   Represents a time in milliseconds. Examples: `0ms`, `150.25ms`,
    `-60000ms`.

**Note:** Conversion between `s` and `ms` follows the logical `1s` =
`1000ms`.

Examples
--------

### Valid times

```
12s         Positive integer
-456ms      Negative integer
4.3ms       Non-integer
14mS        The unit is case-insensitive, although capital letters are not recommended.
+0s         Zero with a leading + and a unit
-0ms        Zero with a leading - and a unit
```

### Invalid times

```
0           Although unitless zero is allowed for <length>s, it's invalid for <time>s.
12.0        This is a <number>, not a <time>, because it's missing a unit.
7 ms        No space is allowed between the number and the unit.
```

Specifications
--------------

  -----------------------------------------------------------------------

Specification
  -----------------------------------------------------------------------

  [CSS Values and Units Module Level 4\
  [\# time]](https://drafts.csswg.org/css-values/#time)

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

`time`

1

12

4

9

10.1

3.1

2

18

4

10.1

2

1.0

See also
--------

- [`<time-percentage>`](time-percentage.md)
- [CSS Values and Units](css_values_and_units.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/time>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/html/element/time.md)
\<time\>: The (Date) Time element
=================================

The `<time>` [HTML](../index) element represents a specific period in
time. It may include the `datetime` attribute to translate dates into
machine-readable format, allowing for better search engine results or
custom features such as reminders.

It may represent one of the following:

- A time on a 24-hour clock.
- A precise date in the [Gregorian
    calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) (with
    optional time and timezone information).
- [A valid time
    duration](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-duration-string).

Try it
------

Attributes
----------

Like all other HTML elements, this element supports the [](_Resources/Markup%20And%20Styling/html/global_attributes/index.md).

[`datetime`](#datetime)

:   This attribute indicates the time and/or date of the element and
    must be in one of the formats described below.

Usage notes
-----------

This element is for presenting dates and times in a machine-readable
format. For example, this can help a user agent offer to add an event to
a user\'s calendar.

This element should not be used for dates prior to the introduction of
the Gregorian calendar (due to complications in calculating those
dates).

The *datetime value* (the machine-readable value of the datetime) is the
value of the element\'s `datetime` attribute, which must be in the
proper format (see below). If the element does not have a `datetime`
attribute, **it must not have any element descendants**, and the
*datetime value* is the element\'s child text content.

### Valid datetime values

[a valid year string](#a_valid_year_string)

:   `2011`

[a valid month string](#a_valid_month_string)

:   `2011-11`

[a valid date string](#a_valid_date_string)

:   `2011-11-18`

[a valid yearless date string](#a_valid_yearless_date_string)

:   `11-18`

[a valid week string](#a_valid_week_string)

:   `2011-W47`

[a valid time string](#a_valid_time_string)

:   `14:54`

    `14:54:39`

    `14:54:39.929`

[a valid local date and time string](#a_valid_local_date_and_time_string)

:   `2011-11-18T14:54:39.929`

    `2011-11-18 14:54:39.929`

[a valid global date and time string](#a_valid_global_date_and_time_string)

:   `2011-11-18T14:54:39.929Z`

    `2011-11-18T14:54:39.929-0400`

    `2011-11-18T14:54:39.929-04:00`

    `2011-11-18 14:54:39.929Z`

    `2011-11-18 14:54:39.929-0400`

    `2011-11-18 14:54:39.929-04:00`

[a valid duration string](#a_valid_duration_string)

:   `PT4H18M3S`

Examples
--------

### Simple example

#### HTML

[html]

```html
<p>The concert starts at <time datetime="2018-07-07T20:00:00">20:00</time>.</p>
```

#### Result

### `datetime` example

#### HTML

[html]

```html
<p>
  The concert took place on <time datetime="2001-05-15T19:00">May 15</time>.
</p>
```

#### Result

Technical summary
-----------------

  --------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------
  [Content categories](../content_categories)   [Flow content](../content_categories#flow_content), [phrasing content](../content_categories#phrasing_content), palpable content.
  Permitted content                             [Phrasing content](../content_categories#phrasing_content).
  Tag omission                                  None, both the starting and ending tag are mandatory.
  Permitted parents                             Any element that accepts [phrasing content](../content_categories#phrasing_content).
  Implicit ARIA role                            `time`
  Permitted ARIA roles                          Any
  DOM interface                                 [`HTMLTimeElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTimeElement)
  --------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------

Specifications
--------------

  ---------------------------------------------------------------------------------------------------------------

Specification
  ---------------------------------------------------------------------------------------------------------------

  [HTML Standard\
  [\#
  the-time-element]](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element)

  ---------------------------------------------------------------------------------------------------------------

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

`time`

62

≤18

22

No

4911.5--12

7

62

62

22

4611.5--12

4

8.0

`datetime`

62

≤18

22

No

4911.5--12

7

62

62

22

4611.5--12

4

8.0

See also
--------

- The [`<data>`](data) element, allowing to signal other kind of
    values.

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time>>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/html/element/input/time.md)
\<input type=\"time\"\>
=======================

[`<input>`](../input) elements of type `time` create input fields
designed to let the user easily enter a time (hours and minutes, and
optionally seconds).

The control\'s user interface varies from browser to browser; see
[Browser compatibility](#browser_compatibility) for further details. In
unsupported browsers, the control degrades gracefully to
[`<input type="text">`](text).

Try it
------

Appearance
----------

### Chrome and Opera

In Chrome/Opera the `time` control is simple, with slots to enter hours
and minutes in 12 or 24-hour format depending on operating system
locale, and up and down arrows to increment and decrement the currently
selected component. In some versions, an \"X\" button is provided to
clear the control\'s value.

![12-hour Chrome time
input] 12-hour

![24-hour Chrome time
input] 24-hour

### Firefox

Firefox\'s `time` control is very similar to Chrome\'s, except that it
doesn\'t have the up and down arrows. It also uses a 12- or 24-hour
format for inputting times, based on system locale. An \"X\" button is
provided to clear the control\'s value.

![12-hour Firefox time
input] 12-hour

![24-hour Firefox time
input] 24-hour

### Edge

The Edge `time` control is somewhat more elaborate, opening up an hour
and minute picker with sliding reels. It, like Chrome, uses a 12- or
24-hour format for inputting times, based on system locale:

![12-hour Edge time
input] 12-hour

![24-hour Edge time
input] 24-hour

Value
-----

A string containing the value of the time entered into the input.

### Setting the value attribute

You can set a default value for the input by including a valid time in
the [`value`](../input#value) attribute when creating the `<input>`
element, like so:

[html]

```html
<label for="appt-time">Choose an appointment time: </label>
<input id="appt-time" type="time" name="appt-time" value="13:30" />
```

### Setting the value using JavaScript

You can also get and set the time value in JavaScript using the
[`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
`value` property, for example:

[js]

```js
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = "15:30";
```

### Time value format

The `value` of the `time` input is always in 24-hour format that
includes leading zeros: `hh:mm`, regardless of the input format, which
is likely to be selected based on the user\'s locale (or by the user
agent). If the time includes seconds (see [Using the step
attribute](#using_the_step_attribute)), the format is always `hh:mm:ss`.
You can learn more about the format of the time value used by this input
type in [Time strings](../../date_and_time_formats#time_strings).

In this example, you can see the time input\'s value by entering a time
and seeing how it changes afterward.

First, a look at the HTML. This is simple enough, with the label and
input as we\'ve seen before, but with the addition of a [`<p>`](../p)
element with a [`<span>`](../span) to display the value of the `time`
input:

[html]

```html
<form>
  <label for="startTime">Start time: </label>
  <input type="time" id="startTime" />
  <p>
    Value of the <code>time</code> input:
    <code> "<span id="value">n/a</span>"</code>.
  </p>
</form>
```

The JavaScript code adds code to the time input to watch for the
[`input`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
event, which is triggered every time the contents of an input element
change. When this happens, the contents of the `<span>` are replaced
with the new value of the input element.

[js]

```js
const startTime = document.getElementById("startTime");
const valueSpan = document.getElementById("value");

startTime.addEventListener(
  "input",
  () => {
    valueSpan.innerText = startTime.value;
  },
  false,
);
```

When a form including a `time` input is submitted, the value is encoded
before being included in the form\'s data. The form\'s data entry for a
time input will always be in the form `name=hh%3Amm`, or
`name=hh%3Amm%3Ass` if seconds are included (see [Using the step
attribute](#using_the_step_attribute)).

Additional attributes
---------------------

In addition to the attributes common to all [`<input>`](../input)
elements, `time` inputs offer the following attributes.

**Note:** Unlike many data types, time values have a **periodic
domain**, meaning that the values reach the highest possible value, then
wrap back around to the beginning again. For example, specifying a `min`
of `14:00` and a `max` of `2:00` means that the permitted time values
start at 2:00 PM, run through midnight to the next day, ending at 2:00
AM. See more in the [making min and max cross
midnight](#making_min_and_max_cross_midnight) section of this article.

### list

The values of the list attribute is the
[`id`](https://developer.mozilla.org/en-US/docs/Web/API/Element/id) of a
[`<datalist>`](../datalist) element located in the same document. The
[`<datalist>`](../datalist) provides a list of predefined values to
suggest to the user for this input. Any values in the list that are not
compatible with the [`type`](../input#type) are not included in the
suggested options. The values provided are suggestions, not
requirements: users can select from this predefined list or provide a
different value.

### max

A string indicating the latest time to accept, specified in the same
[time value format](#time_value_format) as described above. If the
specified string isn\'t a valid time, no maximum value is set.

### min

A string specifying the earliest time to accept, given in the [time
value format](#time_value_format) described previously. If the value
specified isn\'t a valid time string, no minimum value is set.

### readonly

A Boolean attribute which, if present, means this field cannot be edited
by the user. Its `value` can, however, still be changed by JavaScript
code directly setting the
[`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
`value` property.

**Note:** Because a read-only field cannot have a value, `required` does
not have any effect on inputs with the `readonly` attribute also
specified.

### step

The `step` attribute is a number that specifies the granularity that the
value must adhere to, or the special value `any`, which is described
below. Only values which are equal to the basis for stepping
([`min`](#min) if specified, [`value`](../input#value) otherwise, and an
appropriate default value if neither of those is provided) are valid.

A string value of `any` means that no stepping is implied, and any value
is allowed (barring other constraints, such as [`min`](#min) and
[`max`](#max)).

**Note:** When the data entered by the user doesn\'t adhere to the
stepping configuration, the [user
agent](https://developer.mozilla.org/en-US/docs/Glossary/User_agent) may
round to the nearest valid value, preferring numbers in the positive
direction when there are two equally close options.

For `time` inputs, the value of `step` is given in seconds, with a
scaling factor of 1000 (since the underlying numeric value is in
milliseconds). The default value of `step` is 60, indicating 60 seconds
(or 1 minute, or 60,000 milliseconds).

*At this time, it\'s unclear what a value of `any` means for `step` when
used with `time` inputs. This will be updated as soon as that
information is determined.*

Using time inputs
-----------------

### Basic uses of time

The simplest use of `<input type="time">` involves a basic `<input>` and
[`<label>`](../label) element combination, as seen below:

[html]

```html
<form>
  <label for="appt-time">Choose an appointment time: </label>
  <input id="appt-time" type="time" name="appt-time" />
</form>
```

### Controlling input size

`<input type="time">` doesn\'t support form sizing attributes such as
[`size`](../input#size), since times are always about the same number of
characters long. You\'ll have to resort to
[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) for sizing
needs.

### Using the step attribute

You can use the [`step`](../input#step) attribute to vary the amount of
time jumped whenever the time is incremented or decremented (for
example, so the time moves by 10 minutes at a time when clicking the
little arrow widgets).

**Note:** This property has some strange effects across browsers, so is
not completely reliable.

It takes an integer value that equates to the number of seconds you want
to increment by; the default value is 60 seconds, or one minute. If you
specify a value of less than 60 seconds (1 minute), the `time` input
will show a seconds input area alongside the hours and minutes:

[html]

```html
<form>
  <label for="appt-time">Choose an appointment time: </label>
  <input id="appt-time" type="time" name="appt-time" step="2" />
</form>
```

In Chrome and Opera, which are the only browsers to show up/down
iteration arrows, clicking the arrows changes the seconds value by two
seconds, but doesn\'t affect the hours or minutes. Minutes (or hours)
can only be used for stepping when you specify a number of minutes (or
hours) in seconds, such as 120 for 2 minutes, or 7200 for 2 hours).

In Firefox, there are no arrows, so the `step` value isn\'t used.
However, providing it *does* add the seconds input area adjacent to the
minutes section.

The steps value seems to have no effect in Edge.

**Note:** Using `step` seems to cause validation to not work properly
(as seen in the next section).

Validation
----------

By default, `<input type="time">` does not apply any validation to
entered values, other than the user agent\'s interface generally not
allowing you to enter anything other than a time value. This is helpful
(assuming the `time` input is fully supported by the user agent), but
you can\'t entirely rely on the value to be a proper time string, since
it might be an empty string (`""`), which is allowed. It\'s also
possible for the value to look roughly like a valid time but not be
correct, such as `25:05`.

### Setting maximum and minimum times

You can use the [`min`](../input#min) and [`max`](../input#max)
attributes to restrict the valid times that can be chosen by the user.
In the following example we are setting a minimum time of `12:00` and a
maximum time of `18:00`:

[html]

```html
<form>
  <label for="appt-time">
    Choose an appointment time (opening hours 12:00 to 18:00):
  </label>
  <input id="appt-time" type="time" name="appt-time" min="12:00" max="18:00" />
  <span class="validity"></span>
</form>
```

Here\'s the CSS used in the above example. Here we make use of the
[`:valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid) and
[`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)
CSS properties to style the input based on whether the current value is
valid. We had to put the icons on a [`<span>`](../span) next to the
input, not on the input itself, because in Chrome the generated content
is placed inside the form control, and can\'t be styled or shown
effectively.

[css]

```css
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}

input + span {
  padding-right: 30px;
}

input:invalid + span::after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span::after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}

```

The result here is that:

- Only times between 12:00 and 18:00 will be seen as valid; times
    outside that range will be denoted as invalid.
- Depending on what browser you\'re using, you might find that times
    outside the specified range might not even be selectable in the time
    picker (e.g. Edge).

#### Making min and max cross midnight

By setting a [`min`](../input#min) attribute greater than the
[`max`](../input#max) attribute, the valid time range will wrap around
midnight to produce a valid time range which crosses midnight. This
functionality is not supported by any other input types. While this
feature is [in the HTML
spec](https://html.spec.whatwg.org/multipage/input.html#has-a-reversed-range),
it is not yet universally supported. Chrome-based browsers support it
starting in version 82 and Firefox added it in version 76. Safari as of
version 14.1 does not support this. Be prepared for this situation to
arise:

[js]

```js
const input = document.createElement("input");
input.type = "time";
input.min = "23:00";
input.max = "01:00";
input.value = "23:59";

if (input.validity.valid && input.type === "time") {
  // <input type=time> reversed range supported
} else {
  // <input type=time> reversed range unsupported
}
```

### Making times required

In addition, you can use the [`required`](../input#required) attribute
to make filling in the time mandatory. As a result, supporting browsers
will display an error if you try to submit a time that is outside the
set bounds, or an empty time field.

Let\'s look at an example; here we\'ve set minimum and maximum times,
and also made the field required:

[html]

```html
<form>
  <div>
    <label for="appt-time">
      Choose an appointment time (opening hours 12:00 to 18:00):
    </label>
    <input
      id="appt-time"
      type="time"
      name="appt-time"
      min="12:00"
      max="18:00"
      required />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Submit form" />
  </div>
</form>
```

If you try to submit the form with an incomplete time (or with a time
outside the set bounds), the browser displays an error. Try playing with
the example now:

**Warning:** HTML form validation is *not* a substitute for scripts that
ensure that the entered data is in the proper format. It\'s far too easy
for someone to make adjustments to the HTML that allow them to bypass
the validation, or to remove it entirely. It\'s also possible for
someone to bypass your HTML entirely and submit the data directly to
your server. If your server-side code fails to validate the data it
receives, disaster could strike when improperly-formatted data is
submitted (or data which is too large, of the wrong type, and so forth).

Handling browser support
------------------------

As mentioned, older versions of Safari and a few other, less common,
browsers don\'t support time inputs natively. In general, otherwise,
support is good --- especially on mobile platforms, which tend to have
very nice user interfaces for specifying a time value. For example, the
`time` picker on Chrome for Android looks like this:

![Phone screen showing modal dialog with 10:21 as a header. The 10 is
fully opaque. The 21 is not. The main area has a circle with the numbers
1 - 12 in a ring, and the number 13 -24 on an inner ring. The number 10
is highlighted with a blue circle. The buttons at the bottom are clear,
cancel, and
set.]

Browsers that don\'t support time inputs gracefully degrade to a text
input, but this creates problems both in terms of consistency of user
interface (the presented control will be different), and data handling.

The second problem is the more serious; as mentioned previously, `time`
inputs\' values are always normalized to the format `hh:mm` or
`hh:mm:ss`. With a text input, on the other hand, by default the browser
has no idea of what format the time should be in, and there are multiple
ways in which people write times, such as:

- `3.00 pm`
- `3:00pm`
- `15:00`
- `3 o'clock in the afternoon`
- etc.

One way around this is to put a [`pattern`](../input#pattern) attribute
on your `time` input. Even though the `time` input doesn\'t use it, the
`text` input fallback will. For example, try viewing the following demo
in a browser that doesn\'t support time inputs:

[html]

```html
<form>
  <div>
    <label for="appt-time">
      Choose an appointment time (opening hours 12:00 to 18:00):
    </label>
    <input
      id="appt-time"
      type="time"
      name="appt-time"
      min="12:00"
      max="18:00"
      required
      pattern="[0-9]{2}:[0-9]{2}" />
    <span class="validity"></span>
  </div>
  <div>
    <input type="submit" value="Submit form" />
  </div>
</form>
```

If you try submitting it, you\'ll see that non-supporting browsers now
display an error message (and highlight the input as invalid) if your
entry doesn\'t match the pattern `nn:nn`, where `n` is a number from 0
to 9. Of course, this doesn\'t stop people from entering invalid times,
or incorrectly formatted times that follow the pattern.

Then there\'s the problem of the user having no idea exactly what format
the time is expected to be in.

The best way to deal with times in forms in a cross-browser way, for the
time being, is to get the user to enter the hours and minutes (and
seconds if required) in separate controls ([`<select>`](../select)
elements are popular; see below for an example), or use JavaScript
libraries such as the [jQuery timepicker
plugin](https://timepicker.co/).

Examples
--------

In this example, we create two sets of interface elements for choosing
times: a native picker created with `<input type="time">`, and a set of
two [`<select>`](../select) elements for choosing hours/minutes in older
browsers that don\'t support the native input.

The HTML looks like so:

[html]

```html
<form>
  <div class="nativeTimePicker">
    <label for="appt-time">
      Choose an appointment time (opening hours 12:00 to 18:00):
    </label>
    <input
      id="appt-time"
      type="time"
      name="appt-time"
      min="12:00"
      max="18:00"
      required />
    <span class="validity"></span>
  </div>
  <p class="fallbackLabel">
    Choose an appointment time (opening hours 12:00 to 18:00):
  </p>
  <div class="fallbackTimePicker">
    <div>
      <span>
        <label for="hour">Hour:</label>
        <select id="hour" name="hour"></select>
      </span>
      <span>
        <label for="minute">Minute:</label>
        <select id="minute" name="minute"></select>
      </span>
    </div>
  </div>
</form>
```

The hour and minutes values for their `<select>` elements are
dynamically generated.

The other part of the code that may be of interest is the feature
detection code --- to detect whether the browser supports
`<input type="time">`, we create a new [`<input>`](../input) element,
try setting its `type` to `time`, then immediately check what its type
is set to --- non-supporting browsers will return `text`, because the
`time` type falls back to type `text`. If `<input type="time">` is not
supported, we hide the native picker and show the fallback picker UI
([`<select>`](../select)s) instead.

[js]

```js
// Define variables
const nativePicker = document.querySelector(".nativeTimePicker");
const fallbackPicker = document.querySelector(".fallbackTimePicker");
const fallbackLabel = document.querySelector(".fallbackLabel");

const hourSelect = document.querySelector("#hour");
const minuteSelect = document.querySelector("#minute");

// Hide fallback initially
fallbackPicker.style.display = "none";
fallbackLabel.style.display = "none";

// Test whether a new time input falls back to a text input or not
const test = document.createElement("input");

try {
  test.type = "time";
} catch (e) {
  console.log(e.description);
}

// If it does, run the code inside the if () {} block
if (test.type === "text") {
  // Hide the native picker and show the fallback
  nativePicker.style.display = "none";
  fallbackPicker.style.display = "block";
  fallbackLabel.style.display = "block";

  // Populate the hours and minutes dynamically
  populateHours();
  populateMinutes();
}

function populateHours() {
  // Populate the hours <select> with the 6 open hours of the day
  for (let i = 12; i <= 18; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    hourSelect.appendChild(option);
  }
}

function populateMinutes() {
  // populate the minutes <select> with the 60 hours of each minute
  for (let i = 0; i <= 59; i++) {
    const option = document.createElement("option");
    option.textContent = i < 10 ? `0${i}` : i;
    minuteSelect.appendChild(option);
  }
}

// make it so that if the hour is 18, the minutes value is set to 00
// — you can't select times past 18:00
function setMinutesToZero() {
  if (hourSelect.value === "18") {
    minuteSelect.value = "00";
  }
}

hourSelect.onchange = setMinutesToZero;
minuteSelect.onchange = setMinutesToZero;
```

Technical Summary
-----------------

  --------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------
  **[Value](#value)**               A string representing a time, or empty.
  **Events**                        [`change`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) and [`input`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
  **Supported common attributes**   [`autocomplete`](../input#autocomplete), [`list`](../input#list), [`readonly`](../input#readonly), and [`step`](../input#step)
  **IDL attributes**                `value`, `valueAsDate`, `valueAsNumber`, and `list`.
  **DOM interface**                 [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
  **Methods**                       [`select()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select), [`stepDown()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown), and [`stepUp()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/s
tepUp).
  **Implicit ARIA Role**            [`no corresponding role`](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role)
  --------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------

Specifications
--------------

  ------------------------------------------------------------------------------------------------------------

Specification
  ------------------------------------------------------------------------------------------------------------

  [HTML Standard\
  [\#
  time-state-(type=time)]](https://html.spec.whatwg.org/multipage/input.html#time-state-(type=time))

  ------------------------------------------------------------------------------------------------------------

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

`time`

20

12

57

No

10

14.1

4.4

25

57

10.1

5

1.5

See also
--------

- The generic [`<input>`](../input) element and the interface used to
    manipulate it,
    [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
- [Date and time formats used in HTML](../../date_and_time_formats)
- [Date and Time picker
    tutorial](https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls#date_and_time_picker)
- [`<input type="datetime-local">`](datetime-local),
    [`<input type="date">`](date), [`<input type="week">`](week), and
    [`<input type="month">`](month)
- [Compatibility of CSS
    properties](https://developer.mozilla.org/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time>>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/console/time.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

time method
===========

::: {.section .multi-line-signature}
void time(

1.  \[[String](../../dart-core/string-class)? label\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void time([String? label]) =>
    _isConsoleDefined ? JS('void', 'window.console.time(#)', label) : null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Console/time.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/intersectionobserverentry/time.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

time property
=============

::: {#getter .section .multi-line-signature}
[num](../../dart-core/num-class)? time
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
num? get time native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/IntersectionObserverEntry/time.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/budgetstate/time.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

time property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class)? time
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int? get time native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/BudgetState/time.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/TIME.md)

# TIME

The TIME data type in SQL is used to store time values, typically in the format of hours, minutes, and seconds. It's useful for recording specific times of day without date information. SQL provides various functions for manipulating and comparing TIME values, allowing for time-based calculations an
d queries. The exact range and precision of TIME can vary between different database management systems.

Learn more from the following resources:

## 관련 로드맵
- [[sql|sql]]


---
## 상세 내용 (Merged from 20_Wiki/Develop/_commons/fruit/Testing/go/build_an_application/time.md)
# Time

**[You can find all the code for this chapter here](https://github.com/quii/learn-go-with-tests/tree/main/time)**

The product owner wants us to expand the functionality of our command line application by helping a group of people play Texas-Holdem Poker.

## Just enough information on poker

You won't need to know much about poker, only that at certain time intervals all the players need to be informed of a steadily increasing "blind" value.

Our application will help keep track of when the blind should go up, and how much it should be.

- When it starts it asks how many players are playing. This determines the amount of time there is before the "blind" bet goes up.
  - There is a base amount of time of 5 minutes.
  - For every player, 1 minute is added.
  - e.g 6 players equals 11 minutes for the blind.
- After the blind time expires the game should alert the players the new amount the blind bet is.
- The blind starts at 100 chips, then 200, 400, 600, 1000, 2000 and continue to double until the game ends (our previous functionality of "Ruth wins" should still finish the game)

## Reminder of the code

In the previous chapter we made our start to the command line application which already accepts a command of `{name} wins`. Here is what the current `CLI` code looks like, but be sure to familiarise yourself with the other code too before starting.

```go
type CLI struct {
	playerStore PlayerStore
	in          *bufio.Scanner
}

func NewCLI(store PlayerStore, in io.Reader) *CLI {
	return &CLI{
		playerStore: store,
		in:          bufio.NewScanner(in),
	}
}

func (cli *CLI) PlayPoker() {
	userInput := cli.readLine()
	cli.playerStore.RecordWin(extractWinner(userInput))
}

func extractWinner(userInput string) string {
	return strings.Replace(userInput, " wins", "", 1)
}

func (cli *CLI) readLine() string {
	cli.in.Scan()
	return cli.in.Text()
}
```


### `time.AfterFunc`

We want to be able to schedule our program to print the blind bet values at certain durations dependant on the number of players.

To limit the scope of what we need to do, we'll forget about the number of players part for now and just assume there are 5 players so we'll test that _every 10 minutes the new value of the blind bet is printed_.

As usual the standard library has us covered with [`func AfterFunc(d Duration, f func()) *Timer`](https://golang.org/pkg/time/#AfterFunc)

> `AfterFunc` waits for the duration to elapse and then calls f in its own goroutine. It returns a `Timer` that can be used to cancel the call using its Stop method.

### [`time.Duration`](https://golang.org/pkg/time/#Duration)

> A Duration represents the elapsed time between two instants as an int64 nanosecond count.

The time library has a number of constants to let you multiply those nanoseconds so they're a bit more readable for the kind of scenarios we'll be doing

```
5 * time.Second
```

When we call `PlayPoker` we'll schedule all of our blind alerts.

Testing this may be a little tricky though. We'll want to verify that each time period is scheduled with the correct blind amount but if you look at the signature of `time.AfterFunc` its second argument is the function it will run. You cannot compare functions in Go so we'd be unable to test what fu
nction has been sent in. So we'll need to write some kind of wrapper around `time.AfterFunc` which will take the time to run and the amount to print so we can spy on that.

## Write the test first

Add a new test to our suite

```go
t.Run("it schedules printing of blind values", func(t *testing.T) {
	in := strings.NewReader("Chris wins\n")
	playerStore := &poker.StubPlayerStore{}
	blindAlerter := &SpyBlindAlerter{}

	cli := poker.NewCLI(playerStore, in, blindAlerter)
	cli.PlayPoker()

	if len(blindAlerter.alerts) != 1 {
		t.Fatal("expected a blind alert to be scheduled")
	}
})
```

You'll notice we've made a `SpyBlindAlerter` which we are trying to inject into our `CLI` and then checking that after we call `PlayPoker` that an alert is scheduled.

(Remember we are just going for the simplest scenario first and then we'll iterate.)

Here's the definition of `SpyBlindAlerter`

```go
type SpyBlindAlerter struct {
	alerts []struct {
		scheduledAt time.Duration
		amount      int
	}
}

func (s *SpyBlindAlerter) ScheduleAlertAt(duration time.Duration, amount int) {
	s.alerts = append(s.alerts, struct {
		scheduledAt time.Duration
		amount      int
	}{duration, amount})
}

```


## Try to run the test

```
./CLI_test.go:32:27: too many arguments in call to poker.NewCLI
	have (*poker.StubPlayerStore, *strings.Reader, *SpyBlindAlerter)
	want (poker.PlayerStore, io.Reader)
```

## Write the minimal amount of code for the test to run and check the failing test output

We have added a new argument and the compiler is complaining. _Strictly speaking_ the minimal amount of code is to make `NewCLI` accept a `*SpyBlindAlerter` but let's cheat a little and just define the dependency as an interface.

```go
type BlindAlerter interface {
	ScheduleAlertAt(duration time.Duration, amount int)
}
```

And then add it to the constructor

```go
func NewCLI(store PlayerStore, in io.Reader, alerter BlindAlerter) *CLI
```

Your other tests will now fail as they don't have a `BlindAlerter` passed in to `NewCLI`.

Spying on BlindAlerter is not relevant for the other tests so in the test file add

```go
var dummySpyAlerter = &SpyBlindAlerter{}
```

Then use that in the other tests to fix the compilation problems. By labelling it as a "dummy" it is clear to the reader of the test that it is not important.

[> Dummy objects are passed around but never actually used. Usually they are just used to fill parameter lists.](https://martinfowler.com/articles/mocksArentStubs.html)

The tests should now compile and our new test fails.

```
=== RUN   TestCLI
=== RUN   TestCLI/it_schedules_printing_of_blind_values
--- FAIL: TestCLI (0.00s)
    --- FAIL: TestCLI/it_schedules_printing_of_blind_values (0.00s)
    	CLI_test.go:38: expected a blind alert to be scheduled
```

## Write enough code to make it pass

We'll need to add the `BlindAlerter` as a field on our `CLI` so we can reference it in our `PlayPoker` method.

```go
type CLI struct {
	playerStore PlayerStore
	in          *bufio.Scanner
	alerter     BlindAlerter
}

func NewCLI(store PlayerStore, in io.Reader, alerter BlindAlerter) *CLI {
	return &CLI{
		playerStore: store,
		in:          bufio.NewScanner(in),
		alerter:     alerter,
	}
}
```

To make the test pass, we can call our `BlindAlerter` with anything we like

```go
func (cli *CLI) PlayPoker() {
	cli.alerter.ScheduleAlertAt(5*time.Second, 100)
	userInput := cli.readLine()
	cli.playerStore.RecordWin(extractWinner(userInput))
}
```

Next we'll want to check it schedules all the alerts we'd hope for, for 5 players

## Write the test first

```go
	t.Run("it schedules printing of blind values", func(t *testing.T) {
		in := strings.NewReader("Chris wins\n")
		playerStore := &poker.StubPlayerStore{}
		blindAlerter := &SpyBlindAlerter{}

		cli := poker.NewCLI(playerStore, in, blindAlerter)
		cli.PlayPoker()

		cases := []struct {
			expectedScheduleTime time.Duration
			expectedAmount       int
		}{
			{0 * time.Second, 100},
			{10 * time.Minute, 200},
			{20 * time.Minute, 300},
			{30 * time.Minute, 400},
			{40 * time.Minute, 500},
			{50 * time.Minute, 600},
			{60 * time.Minute, 800},
			{70 * time.Minute, 1000},
			{80 * time.Minute, 2000},
			{90 * time.Minute, 4000},
			{100 * time.Minute, 8000},
		}

		for i, c := range cases {
			t.Run(fmt.Sprintf("%d scheduled for %v", c.expectedAmount, c.expectedScheduleTime), func(t *testing.T) {

				if len(blindAlerter.alerts) <= i {
					t.Fatalf("alert %d was not scheduled %v", i, blindAlerter.alerts)
				}

				alert := blindAlerter.alerts[i]

				amountGot := alert.amount
				if amountGot != c.expectedAmount {
					t.Errorf("got amount %d, want %d", amountGot, c.expectedAmount)
				}

				gotScheduledTime := alert.scheduledAt
				if gotScheduledTime != c.expectedScheduleTime {
					t.Errorf("got scheduled time of %v, want %v", gotScheduledTime, c.expectedScheduleTime)
				}
			})
		}
	})
```

Table-based test works nicely here and clearly illustrate what our requirements are. We run through the table and check the `SpyBlindAlerter` to see if the alert has been scheduled with the correct values.

## Try to run the test

You should have a lot of failures looking like this

```
=== RUN   TestCLI
--- FAIL: TestCLI (0.00s)
=== RUN   TestCLI/it_schedules_printing_of_blind_values
    --- FAIL: TestCLI/it_schedules_printing_of_blind_values (0.00s)
=== RUN   TestCLI/it_schedules_printing_of_blind_values/100_scheduled_for_0s
        --- FAIL: TestCLI/it_schedules_printing_of_blind_values/100_scheduled_for_0s (0.00s)
        	CLI_test.go:71: got scheduled time of 5s, want 0s
=== RUN   TestCLI/it_schedules_printing_of_blind_values/200_scheduled_for_10m0s
        --- FAIL: TestCLI/it_schedules_printing_of_blind_values/200_scheduled_for_10m0s (0.00s)
        	CLI_test.go:59: alert 1 was not scheduled [{5000000000 100}]
```

## Write enough code to make it pass

```go
func (cli *CLI) PlayPoker() {

	blinds := []int{100, 200, 300, 400, 500, 600, 800, 1000, 2000, 4000, 8000}
	blindTime := 0 * time.Second
	for _, blind := range blinds {
		cli.alerter.ScheduleAlertAt(blindTime, blind)
		blindTime = blindTime + 10*time.Minute
	}

	userInput := cli.readLine()
	cli.playerStore.RecordWin(extractWinner(userInput))
}
```

It's not a lot more complicated than what we already had. We're just now iterating over an array of `blinds` and calling the scheduler on an increasing `blindTime`

## Refactor

We can encapsulate our scheduled alerts into a method just to make `PlayPoker` read a little clearer.

```go
func (cli *CLI) PlayPoker() {
	cli.scheduleBlindAlerts()
	userInput := cli.readLine()
	cli.playerStore.RecordWin(extractWinner(userInput))
}

func (cli *CLI) scheduleBlindAlerts() {
	blinds := []int{100, 200, 300, 400, 500, 600, 800, 1000, 2000, 4000, 8000}
	blindTime := 0 * time.Second
	for _, blind := range blinds {
		cli.alerter.ScheduleAlertAt(blindTime, blind)
		blindTime = blindTime + 10*time.Minute
	}
}
```

Finally our tests are looking a little clunky. We have two anonymous structs representing the same thing, a `ScheduledAlert`. Let's refactor that into a new type and then make some helpers to compare them.

```go
type scheduledAlert struct {
	at     time.Duration
	amount int
}

func (s scheduledAlert) String() string {
	return fmt.Sprintf("%d chips at %v", s.amount, s.at)
}

type SpyBlindAlerter struct {
	alerts []scheduledAlert
}

func (s *SpyBlindAlerter) ScheduleAlertAt(at time.Duration, amount int) {
	s.alerts = append(s.alerts, scheduledAlert{at, amount})
}
```

We've added a `String()` method to our type so it prints nicely if the test fails

Update our test to use our new type

```go
t.Run("it schedules printing of blind values", func(t *testing.T) {
	in := strings.NewReader("Chris wins\n")
	playerStore := &poker.StubPlayerStore{}
	blindAlerter := &SpyBlindAlerter{}

	cli := poker.NewCLI(playerStore, in, blindAlerter)
	cli.PlayPoker()

	cases := []scheduledAlert{
		{0 * time.Second, 100},
		{10 * time.Minute, 200},
		{20 * time.Minute, 300},
		{30 * time.Minute, 400},
		{40 * time.Minute, 500},
		{50 * time.Minute, 600},
		{60 * time.Minute, 800},
		{70 * time.Minute, 1000},
		{80 * time.Minute, 2000},
		{90 * time.Minute, 4000},
		{100 * time.Minute, 8000},
	}

	for i, want := range cases {
		t.Run(fmt.Sprint(want), func(t *testing.T) {

			if len(blindAlerter.alerts) <= i {
				t.Fatalf("alert %d was not scheduled %v", i, blindAlerter.alerts)
			}

			got := blindAlerter.alerts[i]
			assertScheduledAlert(t, got, want)
		})
	}
})
```

Implement `assertScheduledAlert` yourself.

We've spent a fair amount of time here writing tests and have been somewhat naughty not integrating with our application. Let's address that before we pile on any more requirements.

Try running the app and it won't compile, complaining about not enough args to `NewCLI`.

Let's create an implementation of `BlindAlerter` that we can use in our application.

Create `blind_alerter.go` and move our `BlindAlerter` interface and add the new things below

```go
package poker

import (
	"fmt"
	"os"
	"time"
)

type BlindAlerter interface {
	ScheduleAlertAt(duration time.Duration, amount int)
}

type BlindAlerterFunc func(duration time.Duration, amount int)

func (a BlindAlerterFunc) ScheduleAlertAt(duration time.Duration, amount int) {
	a(duration, amount)
}

func StdOutAlerter(duration time.Duration, amount int) {
	time.AfterFunc(duration, func() {
		fmt.Fprintf(os.Stdout, "Blind is now %d\n", amount)
	})
}
```

Remember that any _type_ can implement an interface, not just `structs`. If you are making a library that exposes an interface with one function defined it is a common idiom to also expose a `MyInterfaceFunc` type.

This type will be a `func` which will also implement your interface. That way users of your interface have the option to implement your interface with just a function; rather than having to create an empty `struct` type.

We then create the function `StdOutAlerter` which has the same signature as the function and just use `time.AfterFunc` to schedule it to print to `os.Stdout`.

Update `main` where we create `NewCLI` to see this in action

```go
poker.NewCLI(store, os.Stdin, poker.BlindAlerterFunc(poker.StdOutAlerter)).PlayPoker()
```

Before running you might want to change the `blindTime` increment in `CLI` to be 10 seconds rather than 10 minutes just so you can see it in action.

You should see it print the blind values as we'd expect every 10 seconds. Notice how you can still type `Shaun wins` into the CLI and it will stop the program how we'd expect.

The game won't always be played with 5 people so we need to prompt the user to enter a number of players before the game starts.

## Write the test first

To check we are prompting for the number of players we'll want to record what is written to StdOut. We've done this a few times now, we know that `os.Stdout` is an `io.Writer` so we can check what is written if we use dependency injection to pass in a `bytes.Buffer` in our test and see what our code
 will write.

We don't care about our other collaborators in this test just yet so we've made some dummies in our test file.

We should be a little wary that we now have 4 dependencies for `CLI`, that feels like maybe it is starting to have too many responsibilities. Let's live with it for now and see if a refactoring emerges as we add this new functionality.

```go
var dummyBlindAlerter = &SpyBlindAlerter{}
var dummyPlayerStore = &poker.StubPlayerStore{}
var dummyStdIn = &bytes.Buffer{}
var dummyStdOut = &bytes.Buffer{}
```

Here is our new test

```go
t.Run("it prompts the user to enter the number of players", func(t *testing.T) {
	stdout := &bytes.Buffer{}
	cli := poker.NewCLI(dummyPlayerStore, dummyStdIn, stdout, dummyBlindAlerter)
	cli.PlayPoker()

	got := stdout.String()
	want := "Please enter the number of players: "

	if got != want {
		t.Errorf("got %q, want %q", got, want)
	}
})
```

We pass in what will be `os.Stdout` in `main` and see what is written.

## Try to run the test

```
./CLI_test.go:38:27: too many arguments in call to poker.NewCLI
	have (*poker.StubPlayerStore, *bytes.Buffer, *bytes.Buffer, *SpyBlindAlerter)
	want (poker.PlayerStore, io.Reader, poker.BlindAlerter)
```

## Write the minimal amount of code for the test to run and check the failing test output

We have a new dependency so we'll have to update `NewCLI`

```go
func NewCLI(store PlayerStore, in io.Reader, out io.Writer, alerter BlindAlerter) *CLI
```

Now the _other_ tests will fail to compile because they don't have an `io.Writer` being passed into `NewCLI`.

Add `dummyStdout` for the other tests.

The new test should fail like so

```
=== RUN   TestCLI
--- FAIL: TestCLI (0.00s)
=== RUN   TestCLI/it_prompts_the_user_to_enter_the_number_of_players
    --- FAIL: TestCLI/it_prompts_the_user_to_enter_the_number_of_players (0.00s)
    	CLI_test.go:46: got '', want 'Please enter the number of players: '
FAIL
```

## Write enough code to make it pass

We need to add our new dependency to our `CLI` so we can reference it in `PlayPoker`

```go
type CLI struct {
	playerStore PlayerStore
	in          *bufio.Scanner
	out         io.Writer
	alerter     BlindAlerter
}

func NewCLI(store PlayerStore, in io.Reader, out io.Writer, alerter BlindAlerter) *CLI {
	return &CLI{
		playerStore: store,
		in:          bufio.NewScanner(in),
		out:         out,
		alerter:     alerter,
	}
}
```

Then finally we can write our prompt at the start of the game

```go
func (cli *CLI) PlayPoker() {
	fmt.Fprint(cli.out, "Please enter the number of players: ")
	cli.scheduleBlindAlerts()
	userInput := cli.readLine()
	cli.playerStore.RecordWin(extractWinner(userInput))
}
```

## Refactor

We have a duplicate string for the prompt which we should extract into a constant

```go
const PlayerPrompt = "Please enter the number of players: "
```

Use this in both the test code and `CLI`.

Now we need to send in a number and extract it out. The only way we'll know if it has had the desired effect is by seeing what blind alerts were scheduled.

## Write the test first

```go
t.Run("it prompts the user to enter the number of players", func(t *testing.T) {
	stdout := &bytes.Buffer{}
	in := strings.NewReader("7\n")
	blindAlerter := &SpyBlindAlerter{}

	cli := poker.NewCLI(dummyPlayerStore, in, stdout, blindAlerter)
	cli.PlayPoker()

	got := stdout.String()
	want := poker.PlayerPrompt

	if got != want {
		t.Errorf("got %q, want %q", got, want)
	}

	cases := []scheduledAlert{
		{0 * time.Second, 100},
		{12 * time.Minute, 200},
		{24 * time.Minute, 300},
		{36 * time.Minute, 400},
	}

	for i, want := range cases {
		t.Run(fmt.Sprint(want), func(t *testing.T) {

			if len(blindAlerter.alerts) <= i {
				t.Fatalf("alert %d was not scheduled %v", i, blindAlerter.alerts)
			}

			got := blindAlerter.alerts[i]
			assertScheduledAlert(t, got, want)
		})
	}
})
```

Ouch! A lot of changes.

- We remove our dummy for StdIn and instead send in a mocked version representing our user entering 7
- We also remove our dummy on the blind alerter so we can see that the number of players has had an effect on the scheduling
- We test what alerts are scheduled

## Try to run the test

The test should still compile and fail reporting that the scheduled times are wrong because we've hard-coded for the game to be based on having 5 players

```
=== RUN   TestCLI
--- FAIL: TestCLI (0.00s)
=== RUN   TestCLI/it_prompts_the_user_to_enter_the_number_of_players
    --- FAIL: TestCLI/it_prompts_the_user_to_enter_the_number_of_players (0.00s)
=== RUN   TestCLI/it_prompts_the_user_to_enter_the_number_of_players/100_chips_at_0s
        --- PASS: TestCLI/it_prompts_the_user_to_enter_the_number_of_players/100_chips_at_0s (0.00s)
=== RUN   TestCLI/it_prompts_the_user_to_enter_the_number_of_players/200_chips_at_12m0s
```

## Write enough code to make it pass

Remember, we are free to commit whatever sins we need to make this work. Once we have working software we can then work on refactoring the mess we're about to make!

```go
func (cli *CLI) PlayPoker() {
	fmt.Fprint(cli.out, PlayerPrompt)

	numberOfPlayers, _ := strconv.Atoi(cli.readLine())

	cli.scheduleBlindAlerts(numberOfPlayers)

	userInput := cli.readLine()
	cli.playerStore.RecordWin(extractWinner(userInput))
}

func (cli *CLI) scheduleBlindAlerts(numberOfPlayers int) {
	blindIncrement := time.Duration(5+numberOfPlayers) * time.Minute

	blinds := []int{100, 200, 300, 400, 500, 600, 800, 1000, 2000, 4000, 8000}
	blindTime := 0 * time.Second
	for _, blind := range blinds {
		cli.alerter.ScheduleAlertAt(blindTime, blind)
		blindTime = blindTime + blindIncrement
	}
}
```

- We read in the `numberOfPlayersInput` into a string
- We use `cli.readLine()` to get the input from the user and then call `Atoi` to convert it into an integer - ignoring any error scenarios. We'll need to write a test for that scenario later.
- From here we change `scheduleBlindAlerts` to accept a number of players. We then calculate a `blindIncrement` time to use to add to `blindTime` as we iterate over the blind amounts

While our new test has been fixed, a lot of others have failed because now our system only works if the game starts with a user entering a number. You'll need to fix the tests by changing the user inputs so that a number followed by a newline is added (this is highlighting yet more flaws in our appr
oach right now).

## Refactor

This all feels a bit horrible right? Let's **listen to our tests**.

- In order to test that we are scheduling some alerts we set up 4 different dependencies. Whenever you have a lot of dependencies for a _thing_ in your system, it implies it's doing too much. Visually we can see it in how cluttered our test is.
- To me it feels like **we need to make a cleaner abstraction between reading user input and the business logic we want to do**
- A better test would be _given this user input, do we call a new type `Game` with the correct number of players_.
- We would then extract the testing of the scheduling into the tests for our new `Game`.

We can refactor toward our `Game` first and our test should continue to pass. Once we've made the structural changes we want we can think about how we can refactor the tests to reflect our new separation of concerns

Remember when making changes in refactoring try to keep them as small as possible and keep re-running the tests.

Try it yourself first. Think about the boundaries of what a `Game` would offer and what our `CLI` should be doing.

For now **don't** change the external interface of `NewCLI` as we don't want to change the test code and the client code at the same time as that is too much to juggle and we could end up breaking things.

This is what I came up with:

```go
// game.go
type Game struct {
	alerter BlindAlerter
	store   PlayerStore
}

func (p *Game) Start(numberOfPlayers int) {
	blindIncrement := time.Duration(5+numberOfPlayers) * time.Minute

	blinds := []int{100, 200, 300, 400, 500, 600, 800, 1000, 2000, 4000, 8000}
	blindTime := 0 * time.Second
	for _, blind := range blinds {
		p.alerter.ScheduleAlertAt(blindTime, blind)
		blindTime = blindTime + blindIncrement
	}
}

func (p *Game) Finish(winner string) {
	p.store.RecordWin(winner)
}

// cli.go
type CLI struct {
	in   *bufio.Scanner
	out  io.Writer
	game *Game
}

func NewCLI(store PlayerStore, in io.Reader, out io.Writer, alerter BlindAlerter) *CLI {
	return &CLI{
		in:  bufio.NewScanner(in),
		out: out,
		game: &Game{
			alerter: alerter,
			store:   store,
		},
	}
}

const PlayerPrompt = "Please enter the number of players: "

func (cli *CLI) PlayPoker() {
	fmt.Fprint(cli.out, PlayerPrompt)

	numberOfPlayersInput := cli.readLine()
	numberOfPlayers, _ := strconv.Atoi(strings.Trim(numberOfPlayersInput, "\n"))

	cli.game.Start(numberOfPlayers)

	winnerInput := cli.readLine()
	winner := extractWinner(winnerInput)

	cli.game.Finish(winner)
}

func extractWinner(userInput string) string {
	return strings.Replace(userInput, " wins\n", "", 1)
}

func (cli *CLI) readLine() string {
	cli.in.Scan()
	return cli.in.Text()
}
```

From a "domain" perspective:
- We want to `Start` a `Game`, indicating how many people are playing
- We want to `Finish` a `Game`, declaring the winner

The new `Game` type encapsulates this for us.

With this change we've passed `BlindAlerter` and `PlayerStore` to `Game` as it is now responsible for alerting and storing results.

Our `CLI` is now just concerned with:

- Constructing `Game` with its existing dependencies (which we'll refactor next)
- Interpreting user input as method invocations for `Game`

We want to try to avoid doing "big" refactors which leave us in a state of failing tests for extended periods as that increases the chances of mistakes. (If you are working in a large/distributed team this is extra important)

The first thing we'll do is refactor `Game` so that we inject it into `CLI`. We'll do the smallest changes in our tests to facilitate that and then we'll see how we can break up the tests into the themes of parsing user input and game management.

All we need to do right now is change `NewCLI`

```go
func NewCLI(in io.Reader, out io.Writer, game *Game) *CLI {
	return &CLI{
		in:   bufio.NewScanner(in),
		out:  out,
		game: game,
	}
}
```

This feels like an improvement already. We have less dependencies and _our dependency list is reflecting our overall design goal_ of CLI being concerned with input/output and delegating game specific actions to a `Game`.

If you try and compile there are problems. You should be able to fix these problems yourself. Don't worry about making any mocks for `Game` right now, just initialise _real_ `Game`s just to get everything compiling and tests green.

To do this you'll need to make a constructor

```go
func NewGame(alerter BlindAlerter, store PlayerStore) *Game {
	return &Game{
		alerter: alerter,
		store:   store,
	}
}
```

Here's an example of one of the setups for the tests being fixed

```go
stdout := &bytes.Buffer{}
in := strings.NewReader("7\n")
blindAlerter := &SpyBlindAlerter{}
game := poker.NewGame(blindAlerter, dummyPlayerStore)

cli := poker.NewCLI(in, stdout, game)
cli.PlayPoker()
```

It shouldn't take much effort to fix the tests and be back to green again (that's the point!) but make sure you fix `main.go` too before the next stage.

```go
// main.go
game := poker.NewGame(poker.BlindAlerterFunc(poker.StdOutAlerter), store)
cli := poker.NewCLI(os.Stdin, os.Stdout, game)
cli.PlayPoker()
```

Now that we have extracted out `Game` we should move our game specific assertions into tests separate from CLI.

This is just an exercise in copying our `CLI` tests but with less dependencies

```go
func TestGame_Start(t *testing.T) {
	t.Run("schedules alerts on game start for 5 players", func(t *testing.T) {
		blindAlerter := &poker.SpyBlindAlerter{}
		game := poker.NewGame(blindAlerter, dummyPlayerStore)

		game.Start(5)

		cases := []poker.ScheduledAlert{
			{At: 0 * time.Second, Amount: 100},
			{At: 10 * time.Minute, Amount: 200},
			{At: 20 * time.Minute, Amount: 300},
			{At: 30 * time.Minute, Amount: 400},
			{At: 40 * time.Minute, Amount: 500},
			{At: 50 * time.Minute, Amount: 600},
			{At: 60 * time.Minute, Amount: 800},
			{At: 70 * time.Minute, Amount: 1000},
			{At: 80 * time.Minute, Amount: 2000},
			{At: 90 * time.Minute, Amount: 4000},
			{At: 100 * time.Minute, Amount: 8000},
		}

		checkSchedulingCases(cases, t, blindAlerter)
	})

	t.Run("schedules alerts on game start for 7 players", func(t *testing.T) {
		blindAlerter := &poker.SpyBlindAlerter{}
		game := poker.NewGame(blindAlerter, dummyPlayerStore)

		game.Start(7)

		cases := []poker.ScheduledAlert{
			{At: 0 * time.Second, Amount: 100},
			{At: 12 * time.Minute, Amount: 200},
			{At: 24 * time.Minute, Amount: 300},
			{At: 36 * time.Minute, Amount: 400},
		}

		checkSchedulingCases(cases, t, blindAlerter)
	})

}

func TestGame_Finish(t *testing.T) {
	store := &poker.StubPlayerStore{}
	game := poker.NewGame(dummyBlindAlerter, store)
	winner := "Ruth"

	game.Finish(winner)
	poker.AssertPlayerWin(t, store, winner)
}
```

The intent behind what happens when a game of poker starts is now much clearer.

Make sure to also move over the test for when the game ends.

Once we are happy we have moved the tests over for game logic we can simplify our CLI tests so they reflect our intended responsibilities clearer

- Process user input and call `Game`'s methods when appropriate
- Send output
- Crucially it doesn't know about the actual workings of how games work

To do this we'll have to make it so `CLI` no longer relies on a concrete `Game` type but instead accepts an interface with `Start(numberOfPlayers)` and `Finish(winner)`. We can then create a spy of that type and verify the correct calls are made.

It's here we realise that naming is awkward sometimes. Rename `Game` to `TexasHoldem` (as that's the _kind_ of game we're playing) and the new interface will be called `Game`. This keeps faithful to the notion that our CLI is oblivious to the actual game we're playing and what happens when you `Star
t` and `Finish`.

```go
type Game interface {
	Start(numberOfPlayers int)
	Finish(winner string)
}
```

Replace all references to `*Game` inside `CLI` and replace them with `Game` (our new interface). As always keep re-running tests to check everything is green while we are refactoring.

Now that we have decoupled `CLI` from `TexasHoldem` we can use spies to check that `Start` and `Finish` are called when we expect them to, with the correct arguments.

Create a spy that implements `Game`

```go
type GameSpy struct {
	StartedWith  int
	FinishedWith string
}

func (g *GameSpy) Start(numberOfPlayers int) {
	g.StartedWith = numberOfPlayers
}

func (g *GameSpy) Finish(winner string) {
	g.FinishedWith = winner
}
```

Replace any `CLI` test which is testing any game specific logic with checks on how our `GameSpy` is called. This will then reflect the responsibilities of CLI in our tests clearly.

Here is an example of one of the tests being fixed; try and do the rest yourself and check the source code if you get stuck.

```go
	t.Run("it prompts the user to enter the number of players and starts the game", func(t *testing.T) {
		stdout := &bytes.Buffer{}
		in := strings.NewReader("7\n")
		game := &GameSpy{}

		cli := poker.NewCLI(in, stdout, game)
		cli.PlayPoker()

		gotPrompt := stdout.String()
		wantPrompt := poker.PlayerPrompt

		if gotPrompt != wantPrompt {
			t.Errorf("got %q, want %q", gotPrompt, wantPrompt)
		}

		if game.StartedWith != 7 {
			t.Errorf("wanted Start called with 7 but got %d", game.StartedWith)
		}
	})
```

Now that we have a clean separation of concerns, checking edge cases around IO in our `CLI` should be easier.

We need to address the scenario where a user puts a non numeric value when prompted for the number of players:

Our code should not start the game and it should print a handy error to the user and then exit.

## Write the test first

We'll start by making sure the game doesn't start

```go
t.Run("it prints an error when a non numeric value is entered and does not start the game", func(t *testing.T) {
	stdout := &bytes.Buffer{}
	in := strings.NewReader("Pies\n")
	game := &GameSpy{}

	cli := poker.NewCLI(in, stdout, game)
	cli.PlayPoker()

	if game.StartCalled {
		t.Errorf("game should not have started")
	}
})
```

You'll need to add to our `GameSpy` a field `StartCalled` which only gets set if `Start` is called

## Try to run the test
```
=== RUN   TestCLI/it_prints_an_error_when_a_non_numeric_value_is_entered_and_does_not_start_the_game
    --- FAIL: TestCLI/it_prints_an_error_when_a_non_numeric_value_is_entered_and_does_not_start_the_game (0.00s)
        CLI_test.go:62: game should not have started
```

## Write enough code to make it pass

Around where we call `Atoi` we just need to check for the error

```go
numberOfPlayers, err := strconv.Atoi(cli.readLine())

if err != nil {
	return
}
```

Next we need to inform the user of what they did wrong so we'll assert on what is printed to `stdout`.

## Write the test first

We've asserted on what was printed to `stdout` before so we can copy that code for now

```go
gotPrompt := stdout.String()

wantPrompt := poker.PlayerPrompt + "you're so silly"

if gotPrompt != wantPrompt {
	t.Errorf("got %q, want %q", gotPrompt, wantPrompt)
}
```

We are storing _everything_ that gets written to stdout so we still expect the `poker.PlayerPrompt`. We then just check an additional thing gets printed. We're not too bothered about the exact wording for now, we'll address it when we refactor.

## Try to run the test

```
=== RUN   TestCLI/it_prints_an_error_when_a_non_numeric_value_is_entered_and_does_not_start_the_game
    --- FAIL: TestCLI/it_prints_an_error_when_a_non_numeric_value_is_entered_and_does_not_start_the_game (0.00s)
        CLI_test.go:70: got 'Please enter the number of players: ', want 'Please enter the number of players: you're so silly'
```

## Write enough code to make it pass

Change the error handling code

```go
if err != nil {
	fmt.Fprint(cli.out, "you're so silly")
	return
}
```

## Refactor

Now refactor the message into a constant like `PlayerPrompt`

```go
wantPrompt := poker.PlayerPrompt + poker.BadPlayerInputErrMsg
```

and put in a more appropriate message

```go
const BadPlayerInputErrMsg = "Bad value received for number of players, please try again with a number"
```

Finally our testing around what has been sent to `stdout` is quite verbose, let's write an assert function to clean it up.

```go
func assertMessagesSentToUser(t testing.TB, stdout *bytes.Buffer, messages ...string) {
	t.Helper()
	want := strings.Join(messages, "")
	got := stdout.String()
	if got != want {
		t.Errorf("got %q sent to stdout but expected %+v", got, messages)
	}
}
```

Using the vararg syntax (`...string`) is handy here because we need to assert on varying amounts of messages.

Use this helper in both of the tests where we assert on messages sent to the user.

There are a number of tests that could be helped with some `assertX` functions so practice your refactoring by cleaning up our tests so they read nicely.

Take some time and think about the value of some of the tests we've driven out. Remember we don't want more tests than necessary, can you refactor/remove some of them _and still be confident it all works_ ?

Here is what I came up with

```go
func TestCLI(t *testing.T) {

	t.Run("start game with 3 players and finish game with 'Chris' as winner", func(t *testing.T) {
		game := &GameSpy{}
		stdout := &bytes.Buffer{}

		in := userSends("3", "Chris wins")
		cli := poker.NewCLI(in, stdout, game)

		cli.PlayPoker()

		assertMessagesSentToUser(t, stdout, poker.PlayerPrompt)
		assertGameStartedWith(t, game, 3)
		assertFinishCalledWith(t, game, "Chris")
	})

	t.Run("start game with 8 players and record 'Cleo' as winner", func(t *testing.T) {
		game := &GameSpy{}

		in := userSends("8", "Cleo wins")
		cli := poker.NewCLI(in, dummyStdOut, game)

		cli.PlayPoker()

		assertGameStartedWith(t, game, 8)
		assertFinishCalledWith(t, game, "Cleo")
	})

	t.Run("it prints an error when a non numeric value is entered and does not start the game", func(t *testing.T) {
		game := &GameSpy{}

		stdout := &bytes.Buffer{}
		in := userSends("pies")

		cli := poker.NewCLI(in, stdout, game)
		cli.PlayPoker()

		assertGameNotStarted(t, game)
		assertMessagesSentToUser(t, stdout, poker.PlayerPrompt, poker.BadPlayerInputErrMsg)
	})
}
```
The tests now reflect the main capabilities of CLI, it is able to read user input in terms of how many people are playing and who won and handles when a bad value is entered for number of players. By doing this it is clear to the reader what `CLI` does, but also what it doesn't do.

What happens if instead of putting `Ruth wins` the user puts in `Lloyd is a killer` ?

Finish this chapter by writing a test for this scenario and making it pass.

## Wrapping up

### A quick project recap

For the past 5 chapters we have slowly TDD'd a fair amount of code

- We have two applications, a command line application and a web server.
- Both these applications rely on a `PlayerStore` to record winners
- The web server can also display a league table of who is winning the most games
- The command line app helps players play a game of poker by tracking what the current blind value is.

### time.Afterfunc

A very handy way of scheduling a function call after a specific duration. It is well worth investing time [looking at the documentation for `time`](https://golang.org/pkg/time/) as it has a lot of time saving functions and methods for you to work with.

Some of my favourites are

- `time.After(duration)` returns a `chan Time` when the duration has expired. So if you wish to do something _after_ a specific time, this can help.
- `time.NewTicker(duration)` returns a `Ticker` which is similar to the above in that it returns a channel but this one "ticks" every duration, rather than just once. This is very handy if you want to execute some code every `N duration`.

### More examples of good separation of concerns

_Generally_ it is good practice to separate the responsibilities of dealing with user input and responses away from domain code. You see that here in our command line application and also our web server.

Our tests got messy. We had too many assertions (check this input, schedules these alerts, etc) and too many dependencies. We could visually see it was cluttered; it is **so important to listen to your tests**.

- If your tests look messy try and refactor them.
- If you've done this and they're still a mess it is very likely pointing to a flaw in your design
- This is one of the real strengths of tests.

Even though the tests and the production code was a bit cluttered we could freely refactor backed by our tests.

Remember when you get into these situations to always take small steps and re-run the tests after every change.

It would've been dangerous to refactor both the test code _and_ the production code at the same time, so we first refactored the production code (in the current state we couldn't improve the tests much) without changing its interface so we could rely on our tests as much as we could while changing t
hings. _Then_ we refactored the tests after the design improved.

After refactoring the dependency list reflected our design goal. This is another benefit of DI in that it often documents intent. When you rely on global variables responsibilities become very unclear.

## An example of a function implementing an interface

When you define an interface with one method in it you might want to consider defining a `MyInterfaceFunc` type to complement it so users can implement your interface with just a function.

```go
type BlindAlerter interface {
	ScheduleAlertAt(duration time.Duration, amount int)
}

// BlindAlerterFunc allows you to implement BlindAlerter with a function
type BlindAlerterFunc func(duration time.Duration, amount int)

// ScheduleAlertAt is BlindAlerterFunc implementation of BlindAlerter
func (a BlindAlerterFunc) ScheduleAlertAt(duration time.Duration, amount int) {
	a(duration, amount)
}
```

By doing this, people using your library can implement your interface with just a function. They can use [Type Conversion](https://go.dev/tour/basics/13) to convert their function into a `BlindAlerterFunc` and then use it as a BlindAlerter (as `BlindAlerterFunc` implements `BlindAlerter`).

```go
game := poker.NewTexasHoldem(poker.BlindAlerterFunc(poker.StdOutAlerter), store)
```

The broader point here is, in Go you can add methods to _types_, not just structs. This is a very powerful feature, and you can use it to implement interfaces in more convenient ways.

Consider that you can not only define types of functions, but also define types around other types, so that you can add methods to them.

```go
type Blog map[string]string

func (b Blog) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, b[r.URL.Path])
}
```

Here we've created an HTTP handler that implements a very simple "blog" where it will use URL paths as keys to posts stored in a map.
