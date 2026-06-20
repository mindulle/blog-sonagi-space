[dart:js\_util](../dart-js_util/dart-js_util-library){._links-link}

add\<T\> function
=================

::: {.section .multi-line-signature}
T add\<T\>(

1.  [Object](../dart-core/object-class)? first,
2.  [Object](../dart-core/object-class)? second

)
:::

Perform JavaScript addition (`+`) on two values.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external T add<T>(Object? first, Object? second);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js_util/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/atomics/add.md)
Atomics.add()
=============


The `Atomics.add()` static method adds a given value at a given position
in the array and returns the old value at that position. This atomic
operation guarantees that no other write happens until the modified
value is written back.



Try it 
------






Syntax
------




[js]


```js
Atomics.add(typedArray, index, value)
```





### Parameters



[`typedArray`](#typedarray)

:   An integer typed array. One of [`Int8Array`](../int8array),
    [`Uint8Array`](../uint8array), [`Int16Array`](../int16array),
    [`Uint16Array`](../uint16array), [`Int32Array`](../int32array),
    [`Uint32Array`](../uint32array),
    [`BigInt64Array`](../bigint64array), or
    [`BigUint64Array`](../biguint64array).

[`index`](#index)

:   The position in the `typedArray` to add a `value` to.

[`value`](#value)

:   The number to add.




### Return value 


The old value at the given position (`typedArray[index]`).




### Exceptions



[`TypeError`](../typeerror)

:   Thrown if `typedArray` is not one of the allowed integer types.

[`RangeError`](../rangeerror)

:   Thrown if `index` is out of bounds in the `typedArray`.




Examples
--------



### Using add() 




[js]


```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12); // returns 0, the old value
Atomics.load(ta, 0); // 12
```




Specifications
--------------


  ---------------------------------------------------------------------------------------------------
  Specification
  ---------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-atomics.add]](https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.add)

  ---------------------------------------------------------------------------------------------------


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

`add`

68

79

78

55

15.2

89

79

63

15.2

15.0

89

1.0

8.10.0


See also 
--------


-   [`Atomics`](../atomics)
-   [`Atomics.sub()`](sub)




© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/add>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/weakset/add.md)
WeakSet.prototype.add()
=======================

 
The `add()` method of [`WeakSet`](../weakset) instances appends a new
object to the end of this `WeakSet`.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
add(value)
```




 
### Parameters

 

[`value`](#value)

:   Must be either an object or a [non-registered
    symbol](../symbol#shared_symbols_in_the_global_symbol_registry). The
    value to add to the `WeakSet` collection.



 
### Return value 

 
The `WeakSet` object.



 
### Exceptions

 

[`TypeError`](../typeerror)

:   Thrown if `value` is not an object or a [non-registered
    symbol](../symbol#shared_symbols_in_the_global_symbol_registry).



 
Examples
--------


 
### Using add 

 
 
 
[js]


```js
const ws = new WeakSet();

ws.add(window); // add the window object to the WeakSet

ws.has(window); // true

// WeakSet only takes objects as arguments
ws.add(1);
// results in "TypeError: Invalid value used in weak set" in Chrome
// and "TypeError: 1 is not a non-null object" in Firefox
```




Specifications
--------------

 
  -------------------------------------------------------------------------------------------------------------------------
  Specification
  -------------------------------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-weakset.prototype.add]](https://tc39.es/ecma262/multipage/keyed-collections.html#sec-weakset.prototype.add)

  -------------------------------------------------------------------------------------------------------------------------


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

`add`

36

12

34

23

9

36

34

24

9

3.0

37

1.0

0.12.0

 
See also 
--------

 
-   [`WeakSet`](../weakset)
-   [`WeakSet.prototype.delete()`](delete)
-   [`WeakSet.prototype.has()`](has)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/add>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/set/add.md)
Set.prototype.add()
===================

 
The `add()` method of [`Set`](../set) instances inserts a new element
with a specified value in to this set, if there isn\'t an element with
the same value already in this set


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
add(value)
```




 
### Parameters

 

[`value`](#value)

:   The value of the element to add to the `Set` object.



 
### Return value 

 
The `Set` object with added value.



 
Examples
--------


 
### Using the add() method 

 
 
 
[js]


```js
const mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // chainable

console.log(mySet);
// Set [1, 5, "some text"]
```




Specifications
--------------

 
  -----------------------------------------------------------------------------------------------------------------
  Specification
  -----------------------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-set.prototype.add]](https://tc39.es/ecma262/multipage/keyed-collections.html#sec-set.prototype.add)

  -----------------------------------------------------------------------------------------------------------------


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

`add`

38

12

13

25

8

38

14

25

8

3.0

38

1.0

0.12.0

 
See also 
--------

 
-   [`Set`](../set)
-   [`Set.prototype.delete()`](delete)
-   [`Set.prototype.has()`](has)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpheaders/add.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [String](../../dart-core/string-class) name,
2.  [Object](../../dart-core/object-class) value,
3.  {\@Since(\"2.8\") [bool](../../dart-core/bool-class)
    preserveHeaderCase = false}

)
:::

Adds a header value.

The header named `name` will have a string value derived from `value`
added to its list of values.

Some headers are single valued, and for these, adding a value will
replace a previous value. If the `value` is a
[DateTime](../../dart-core/datetime-class), an HTTP date format will be
applied. If the value is an [Iterable](../../dart-core/iterable-class),
each element will be added separately. For all other types the default
[Object.toString](../../dart-core/object/tostring) method will be used.

Header names are converted to lower-case unless `preserveHeaderCase` is
set to true. If two header names are the same when converted to
lower-case, they are considered to be the same header, with one set of
values.

The current case of the a header name is that of the name used by the
last [set](set) or [add](add) call for that header.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(String name, Object value,
    {@Since("2.8") bool preserveHeaderCase = false});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpHeaders/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/splaytreeset/add.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) add(

1.  E element

)

::: {.features}
override
:::
:::

Adds `value` to the set.

Returns `true` if `value` (or an equal value) was not yet in the set.
Otherwise returns `false` and the set is not changed.

Example:

``` {.language-dart data-language="dart"}
final dateTimes = <DateTime>{};
final time1 = DateTime.fromMillisecondsSinceEpoch(0);
final time2 = DateTime.fromMillisecondsSinceEpoch(0);
// time1 and time2 are equal, but not identical.
assert(time1 == time2);
assert(!identical(time1, time2));
final time1Added = dateTimes.add(time1);
print(time1Added); // true
// A value equal to time2 exists already in the set, and the call to
// add doesn't change the set.
final time2Added = dateTimes.add(time2);
print(time2Added); // false

print(dateTimes); // {1970-01-01 02:00:00.000}
assert(dateTimes.length == 1);
assert(identical(time1, dateTimes.first));
print(dateTimes.length);
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool add(E element) => _add(element);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeSet/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/add.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) add(

1.  E value

)

::: {.features}
override
:::
:::

Adds `value` to the set.

Returns `true` if `value` (or an equal value) was not yet in the set.
Otherwise returns `false` and the set is not changed.

Example:

``` {.language-dart data-language="dart"}
final dateTimes = <DateTime>{};
final time1 = DateTime.fromMillisecondsSinceEpoch(0);
final time2 = DateTime.fromMillisecondsSinceEpoch(0);
// time1 and time2 are equal, but not identical.
assert(time1 == time2);
assert(!identical(time1, time2));
final time1Added = dateTimes.add(time1);
print(time1Added); // true
// A value equal to time2 exists already in the set, and the call to
// add doesn't change the set.
final time2Added = dateTimes.add(time2);
print(time2Added); // false

print(dateTimes); // {1970-01-01 02:00:00.000}
assert(dateTimes.length == 1);
assert(identical(time1, dateTimes.first));
print(dateTimes.length);
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool add(E value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/set/add.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
[bool](../bool-class) add(

1.  E value

)
:::

Adds `value` to the set.

Returns `true` if `value` (or an equal value) was not yet in the set.
Otherwise returns `false` and the set is not changed.

Example:

``` {.language-dart data-language="dart"}
final dateTimes = <DateTime>{};
final time1 = DateTime.fromMillisecondsSinceEpoch(0);
final time2 = DateTime.fromMillisecondsSinceEpoch(0);
// time1 and time2 are equal, but not identical.
assert(time1 == time2);
assert(!identical(time1, time2));
final time1Added = dateTimes.add(time1);
print(time1Added); // true
// A value equal to time2 exists already in the set, and the call to
// add doesn't change the set.
final time2Added = dateTimes.add(time2);
print(time2Added); // false

print(dateTimes); // {1970-01-01 02:00:00.000}
assert(dateTimes.length == 1);
assert(identical(time1, dateTimes.first));
print(dateTimes.length);
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool add(E value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Set/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/datetime/add.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
[DateTime](../datetime-class) add(

1.  [Duration](../duration-class) duration

)
:::

Returns a new [DateTime](../datetime-class) instance with `duration`
added to [this](../datetime-class).

``` {.language-dart data-language="dart"}
final today = DateTime.now();
final fiftyDaysFromNow = today.add(const Duration(days: 50));
```

Notice that the duration being added is actually 50 \* 24 \* 60 \* 60
seconds. If the resulting `DateTime` has a different daylight saving
offset than `this`, then the result won\'t have the same time-of-day as
`this`, and may not even hit the calendar date 50 days later.

Be careful when working with dates in local time.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external DateTime add(Duration duration);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/DateTime/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/stdout/add.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
    data

)

::: {.features}
inherited
:::
:::

Adds byte `data` to the target consumer, ignoring [encoding](encoding).

The [encoding](encoding) does not apply to this method, and the `data`
list is passed directly to the target consumer as a stream event.

This function must not be called when a stream is currently being added
using [addStream](addstream).

This operation is non-blocking. See [flush](flush) or [done](done) for
how to get any errors generated by this call.

The data list should not be modified after it has been passed to `add`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(List<int> data) {
  _sink.add(data);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Stdout/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssclassset/add.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) add(

1.  [String](../../dart-core/string-class) value

)

::: {.features}
override
:::
:::

Add the class `value` to element.

[add](add) and [addAll](addall) are the Dart equivalent of jQuery\'s
[addClass](http://api.jquery.com/addClass/).

If this CssClassSet corresponds to one element. Returns true if `value`
was added to the set, otherwise false.

If this CssClassSet corresponds to many elements, `false` is always
returned.

`value` must be a valid \'token\' representing a single class, i.e. a
non-empty string containing no whitespace. To add multiple classes use
[addAll](addall).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool add(String value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssClassSet/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/iosink/add.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
    data

)

::: {.features}
override
:::
:::

Adds byte `data` to the target consumer, ignoring [encoding](encoding).

The [encoding](encoding) does not apply to this method, and the `data`
list is passed directly to the target consumer as a stream event.

This function must not be called when a stream is currently being added
using [addStream](addstream).

This operation is non-blocking. See [flush](flush) or [done](done) for
how to get any errors generated by this call.

The data list should not be modified after it has been passed to `add`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(List<int> data);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/IOSink/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/streamcontroller/add.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  T event

)

::: {.features}
override
:::
:::

Sends a data `event`.

Listeners receive this event in a later microtask.

Note that a synchronous controller (created by passing true to the
`sync` parameter of the `StreamController` constructor) delivers events
immediately. Since this behavior violates the contract mentioned here,
synchronous controllers should only be used as described in the
documentation to ensure that the delivered events always *appear* as if
they were delivered in a separate microtask.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(T event);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/StreamController/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/add.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) add(

1.  [String](../../dart-core/string-class) value

)

::: {.features}
inherited
:::
:::

Add the class `value` to element.

This is the Dart equivalent of jQuery\'s
[addClass](http://api.jquery.com/addClass/).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool add(String value) {
  _validateToken(value);
  // TODO - figure out if we need to do any validation here
  // or if the browser natively does enough.
  return modify((s) => s.add(value)) ?? false;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listmixin/add.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  E element

)

::: {.features}
override
:::
:::

Adds `value` to the end of this list, extending the length by one.

The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
numbers.add(4);
print(numbers); // [1, 2, 3, 4]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E element) {
  // This implementation only works for lists which allow `null` as element.
  this[this.length++] = element;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListMixin/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-indexed_db/objectstore/add.md)
[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) add(

1.  dynamic value,
2.  \[dynamic key\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future add(value, [key]) {
  try {
    var request;
    if (key != null) {
      request = _add(value, key);
    } else {
      request = _add(value);
    }
    return _completeRequest(request);
  } catch (e, stacktrace) {
    return new Future.error(e, stacktrace);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/ObjectStore/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/immutablelistmixin/add.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  E value

)

::: {.features}
override
:::
:::

Adds `value` to the end of this list, extending the length by one.

The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
numbers.add(4);
print(numbers); // [1, 2, 3, 4]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  throw new UnsupportedError("Cannot add to immutable List.");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/ImmutableListMixin/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/stringconversionsinkmixin/add.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [String](../../dart-core/string-class) str

)

::: {.features}
override
:::
:::

Adds chunked data to this sink.

This method is also used when converters are used as
[StreamTransformer](../../dart-async/streamtransformer-class)s.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(String str) {
  addSlice(str, 0, str.length, false);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/StringConversionSinkMixin/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/byteconversionsinkbase/add.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
    chunk

)

::: {.features}
override
:::
:::

Adds chunked data to this sink.

This method is also used when converters are used as
[StreamTransformer](../../dart-async/streamtransformer-class)s.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(List<int> chunk);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/ByteConversionSinkBase/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/synchronousstreamcontroller/add.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  T data

)

::: {.features}
override
:::
:::

Adds event to the controller\'s stream.

As [StreamController.add](../streamcontroller/add), but must not be
called while an event is being added by [add](add), [addError](adderror)
or [close](close).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(T data);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/SynchronousStreamController/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-js/jsarray/add.md)
[dart:js](../../dart-js/dart-js-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  E value

)

::: {.features}
override
:::
:::

Adds `value` to the end of this list, extending the length by one.

The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
numbers.add(4);
print(numbers); // [1, 2, 3, 4]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external void add(E value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-js/JsArray/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/bytesbuilder/add.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [List](../../dart-core/list-class)\<[int](../../dart-core/int-class)\>
    bytes

)
:::

Appends `bytes` to the current contents of this builder.

Each value of `bytes` will be truncated to an 8-bit value in the range 0
.. 255.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(List<int> bytes);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/BytesBuilder/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/nodevalidatorbuilder/add.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [NodeValidator](../nodevalidator-class) validator

)
:::

Add an additional validator to the current list of validators.

Elements and attributes will be accepted if they are accepted by any
validators.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(NodeValidator validator) {
  _validators.add(validator);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/NodeValidatorBuilder/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32listview/add.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [double](../../dart-core/double-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32ListView/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64listview/add.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [double](../../dart-core/double-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64ListView/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8clampedlistview/add.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ClampedListView/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat32x4listview/add.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [Float32x4](../float32x4-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat32x4ListView/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiablefloat64x2listview/add.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [Float64x2](../float64x2-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableFloat64x2ListView/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint16listview/add.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint16ListView/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint32listview/add.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint32ListView/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint64listview/add.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint64ListView/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint16listview/add.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt16ListView/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32listview/add.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32ListView/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint64listview/add.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt64ListView/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableuint8listview/add.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableUint8ListView/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint8listview/add.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [int](../../dart-core/int-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt8ListView/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-typed_data/unmodifiableint32x4listview/add.md)
[dart:typed\_data](../../dart-typed_data/dart-typed_data-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [Int32x4](../int32x4-class) value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-typed_data/UnmodifiableInt32x4ListView/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/list/add.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  E value

)
:::

Adds `value` to the end of this list, extending the length by one.

The list must be growable.

``` {.language-dart data-language="dart"}
final numbers = <int>[1, 2, 3];
numbers.add(4);
print(numbers); // [1, 2, 3, 4]
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-convert/chunkedconversionsink/add.md)
[dart:convert](../../dart-convert/dart-convert-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  T chunk

)

::: {.features}
override
:::
:::

Adds chunked data to this sink.

This method is also used when converters are used as
[StreamTransformer](../../dart-async/streamtransformer-class)s.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(T chunk);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-convert/ChunkedConversionSink/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablelistview/add.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  E value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  throw new UnsupportedError("Cannot add to an unmodifiable list");
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableListView/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablesetview/add.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
[bool](../../dart-core/bool-class) add(

1.  E value

)

::: {.features}
inherited
:::
:::

This operation is not supported by an unmodifiable set.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool add(E value) => _throwUnmodifiable();
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableSetView/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/websocket/add.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  dynamic data

)

::: {.features}
override
:::
:::

Sends data on the WebSocket connection. The data in `data` must be
either a `String`, or a `List<int>` holding bytes.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(/*String|List<int>*/ data);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/WebSocket/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/datatransferitemlist/add.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
[DataTransferItem](../datatransferitem-class)? add(

1.  dynamic data\_OR\_file,
2.  \[[String](../../dart-core/string-class)? type\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
DataTransferItem? add(data_OR_file, [String? type]) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DataTransferItemList/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/doublelinkedqueue/add.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  E value

)

::: {.features}
override
:::
:::

Adds `value` at the end of the queue.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  _sentinel._prepend(value, this);
  _elementCount++;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/DoubleLinkedQueue/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/accessiblenodelist/add.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [AccessibleNode](../accessiblenode-class) node,
2.  [AccessibleNode](../accessiblenode-class)? before

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(AccessibleNode node, AccessibleNode? before) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AccessibleNodeList/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/linkedlist/add.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  E entry

)
:::

Adds `entry` to the end of the linked list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E entry) {
  _insertBefore(_first, entry, updateFirst: false);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/LinkedList/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/selectelement/add.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [Object](../../dart-core/object-class) element,
2.  [Object](../../dart-core/object-class)? before

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(Object element, Object? before) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SelectElement/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssnumericvalue/add.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
[CssNumericValue](../cssnumericvalue-class) add(

1.  [CssNumericValue](../cssnumericvalue-class) value

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
CssNumericValue add(CssNumericValue value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssNumericValue/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/listqueue/add.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  E value

)

::: {.features}
override
:::
:::

Adds `value` at the end of the queue.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value) {
  _add(value);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/ListQueue/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/eventsink/add.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  T event

)

::: {.features}
override
:::
:::

Adds a data `event` to the sink.

Must not be called on a closed sink.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(T event);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/EventSink/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/customstream/add.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  T event

)
:::

Add the following custom event to the stream for dispatching to
interested listeners.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(T event);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CustomStream/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/fontfaceset/add.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
[FontFaceSet](../fontfaceset-class)? add(

1.  [FontFace](../fontface-class) arg

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
FontFaceSet? add(FontFace arg) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/FontFaceSet/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/sink/add.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  T data

)
:::

Adds `data` to the sink.

Must not be called after a call to [close](close).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(T data);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Sink/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/queue/add.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  E value

)
:::

Adds `value` at the end of the queue.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(E value);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/Queue/add.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/domtokenlist/add.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

add method
==========

::: {.section .multi-line-signature}
void add(

1.  [String](../../dart-core/string-class) tokens

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void add(String tokens) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DomTokenList/add.html>
:::
