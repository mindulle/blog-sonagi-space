[dart:core](../../dart-core/dart-core-library){._links-link}

parse method
============

::: {.section .multi-line-signature}
[Uri](../uri-class) parse(

1.  [String](../string-class) uri,
2.  \[[int](../int-class) start = 0,
3.  [int](../int-class)? end\]

)
:::

Creates a new `Uri` object by parsing a URI string.

If `start` and `end` are provided, they must specify a valid substring
of `uri`, and only the substring from `start` to `end` is parsed as a
URI.

If the `uri` string is not valid as a URI or URI reference, a
[FormatException](../formatexception-class) is thrown.

Example:

``` {.language-dart data-language="dart"}
final uri =
    Uri.parse('https://example.com/api/fetch?limit=10,20,30&max=100');
print(uri); // https://example.com/api/fetch?limit=10,20,30&max=100

Uri.parse('::Not valid URI::'); // Throws FormatException.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Uri parse(String uri, [int start = 0, int? end]) {
  // This parsing will not validate percent-encoding, IPv6, etc.
  // When done splitting into parts, it will call, e.g., [_makeFragment]
  // to do the final parsing.
  //
  // Important parts of the RFC 3986 used here:
  // URI           = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
  //
  // hier-part     = "//" authority path-abempty
  //               / path-absolute
  //               / path-rootless
  //               / path-empty
  //
  // URI-reference = URI / relative-ref
  //
  // absolute-URI  = scheme ":" hier-part [ "?" query ]
  //
  // relative-ref  = relative-part [ "?" query ] [ "#" fragment ]
  //
  // relative-part = "//" authority path-abempty
  //               / path-absolute
  //               / path-noscheme
  //               / path-empty
  //
  // scheme        = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
  //
  // authority     = [ userinfo "@" ] host [ ":" port ]
  // userinfo      = *( unreserved / pct-encoded / sub-delims / ":" )
  // host          = IP-literal / IPv4address / reg-name
  // IP-literal    = "[" ( IPv6address / IPv6addrz / IPvFuture ) "]"
  // IPv6addrz     = IPv6address "%25" ZoneID
  // ZoneID        = 1*( unreserved / pct-encoded )
  // port          = *DIGIT
  // reg-name      = *( unreserved / pct-encoded / sub-delims )
  //
  // path          = path-abempty    ; begins with "/" or is empty
  //               / path-absolute   ; begins with "/" but not "//"
  //               / path-noscheme   ; begins with a non-colon segment
  //               / path-rootless   ; begins with a segment
  //               / path-empty      ; zero characters
  //
  // path-abempty  = *( "/" segment )
  // path-absolute = "/" [ segment-nz *( "/" segment ) ]
  // path-noscheme = segment-nz-nc *( "/" segment )
  // path-rootless = segment-nz *( "/" segment )
  // path-empty    = 0<pchar>
  //
  // segment       = *pchar
  // segment-nz    = 1*pchar
  // segment-nz-nc = 1*( unreserved / pct-encoded / sub-delims / "@" )
  //               ; non-zero-length segment without any colon ":"
  //
  // pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
  //
  // query         = *( pchar / "/" / "?" )
  //
  // fragment      = *( pchar / "/" / "?" )
  end ??= uri.length;

  // Special case data:URIs. Ignore case when testing.
  if (end >= start + 5) {
    int dataDelta = _startsWithData(uri, start);
    if (dataDelta == 0) {
      // The case is right.
      if (start > 0 || end < uri.length) uri = uri.substring(start, end);
      return UriData._parse(uri, 5, null).uri;
    } else if (dataDelta == 0x20) {
      return UriData._parse(uri.substring(start + 5, end), 0, null).uri;
    }
    // Otherwise the URI doesn't start with "data:" or any case variant of it.
  }

  // The following index-normalization belongs with the scanning, but is
  // easier to do here because we already have extracted variables from the
  // indices list.
  var indices = List<int>.filled(8, 0, growable: false);

  // Set default values for each position.
  // The value will either be correct in some cases where it isn't set
  // by the scanner, or it is clearly recognizable as an unset value.
  indices
    ..[0] = 0
    ..[_schemeEndIndex] = start - 1
    ..[_hostStartIndex] = start - 1
    ..[_notSimpleIndex] = start - 1
    ..[_portStartIndex] = start
    ..[_pathStartIndex] = start
    ..[_queryStartIndex] = end
    ..[_fragmentStartIndex] = end;
  var state = _scan(uri, start, end, _uriStart, indices);
  // Some states that should be non-simple, but the URI ended early.
  // Paths that end at a ".." must be normalized to end in "../".
  if (state >= _nonSimpleEndStates) {
    indices[_notSimpleIndex] = end;
  }
  int schemeEnd = indices[_schemeEndIndex];
  if (schemeEnd >= start) {
    // Rescan the scheme part now that we know it's not a path.
    state = _scan(uri, start, schemeEnd, _schemeStart, indices);
    if (state == _schemeStart) {
      // Empty scheme.
      indices[_notSimpleIndex] = schemeEnd;
    }
  }
  // The returned positions are limited by the scanners ability to write only
  // one position per character, and only the current position.
  // Scanning from left to right, we only know whether something is a scheme
  // or a path when we see a `:` or `/`, and likewise we only know if the first
  // `/` is part of the path or is leading an authority component when we see
  // the next character.

  int hostStart = indices[_hostStartIndex] + 1;
  int portStart = indices[_portStartIndex];
  int pathStart = indices[_pathStartIndex];
  int queryStart = indices[_queryStartIndex];
  int fragmentStart = indices[_fragmentStartIndex];

  // We may discover the scheme while handling special cases.
  String? scheme;

  // Derive some positions that weren't set to normalize the indices.
  if (fragmentStart < queryStart) queryStart = fragmentStart;
  // If pathStart isn't set (it's before scheme end or host start), then
  // the path is empty, or there is no authority part and the path
  // starts with a non-simple character.
  if (pathStart < hostStart) {
    // There is an authority, but no path. The path would start with `/`
    // if it was there.
    pathStart = queryStart;
  } else if (pathStart <= schemeEnd) {
    // There is a scheme, but no authority.
    pathStart = schemeEnd + 1;
  }
  // If there is an authority with no port, set the port position
  // to be at the end of the authority (equal to pathStart).
  // This also handles a ":" in a user-info component incorrectly setting
  // the port start position.
  if (portStart < hostStart) portStart = pathStart;

  assert(hostStart == start || schemeEnd <= hostStart);
  assert(hostStart <= portStart);
  assert(schemeEnd <= pathStart);
  assert(portStart <= pathStart);
  assert(pathStart <= queryStart);
  assert(queryStart <= fragmentStart);

  bool isSimple = indices[_notSimpleIndex] < start;

  if (isSimple) {
    // Check/do normalizations that weren't detected by the scanner.
    // This includes removal of empty port or userInfo,
    // or scheme specific port and path normalizations.
    if (hostStart > schemeEnd + 3) {
      // Always be non-simple if URI contains user-info.
      // The scanner doesn't set the not-simple position in this case because
      // it's setting the host-start position instead.
      isSimple = false;
    } else if (portStart > start && portStart + 1 == pathStart) {
      // If the port is empty, it should be omitted.
      // Pathological case, don't bother correcting it.
      isSimple = false;
    } else if (uri.startsWith(r"\", pathStart) ||
        hostStart > start &&
            (uri.startsWith(r"\", hostStart - 1) ||
                uri.startsWith(r"\", hostStart - 2))) {
      // Seeing a `\` anywhere.
      // The scanner doesn't record when the first path character is a `\`
      // or when the last slash before the authority is a `\`.
      isSimple = false;
    } else if (queryStart < end &&
            (queryStart == pathStart + 2 &&
                uri.startsWith("..", pathStart)) ||
        (queryStart > pathStart + 2 &&
            uri.startsWith("/..", queryStart - 3))) {
      // The path ends in a ".." segment. This should be normalized to "../".
      // We didn't detect this while scanning because a query or fragment was
      // detected at the same time (which is why we only need to check this
      // if there is something after the path).
      isSimple = false;
    } else {
      // There are a few scheme-based normalizations that
      // the scanner couldn't check.
      // That means that the input is very close to simple, so just do
      // the normalizations.
      if (schemeEnd == start + 4) {
        // Do scheme based normalizations for file, http.
        if (uri.startsWith("file", start)) {
          scheme = "file";
          if (hostStart <= start) {
            // File URIs should have an authority.
            // Paths after an authority should be absolute.
            String schemeAuth = "file://";
            int delta = 2;
            if (!uri.startsWith("/", pathStart)) {
              schemeAuth = "file:///";
              delta = 3;
            }
            uri = schemeAuth + uri.substring(pathStart, end);
            schemeEnd -= start;
            hostStart = 7;
            portStart = 7;
            pathStart = 7;
            queryStart += delta - start;
            fragmentStart += delta - start;
            start = 0;
            end = uri.length;
          } else if (pathStart == queryStart) {
            // Uri has authority and empty path. Add "/" as path.
            if (start == 0 && end == uri.length) {
              uri = uri.replaceRange(pathStart, queryStart, "/");
              queryStart += 1;
              fragmentStart += 1;
              end += 1;
            } else {
              uri = "${uri.substring(start, pathStart)}/"
                  "${uri.substring(queryStart, end)}";
              schemeEnd -= start;
              hostStart -= start;
              portStart -= start;
              pathStart -= start;
              queryStart += 1 - start;
              fragmentStart += 1 - start;
              start = 0;
              end = uri.length;
            }
          }
        } else if (uri.startsWith("http", start)) {
          scheme = "http";
          // HTTP URIs should not have an explicit port of 80.
          if (portStart > start &&
              portStart + 3 == pathStart &&
              uri.startsWith("80", portStart + 1)) {
            if (start == 0 && end == uri.length) {
              uri = uri.replaceRange(portStart, pathStart, "");
              pathStart -= 3;
              queryStart -= 3;
              fragmentStart -= 3;
              end -= 3;
            } else {
              uri = uri.substring(start, portStart) +
                  uri.substring(pathStart, end);
              schemeEnd -= start;
              hostStart -= start;
              portStart -= start;
              pathStart -= 3 + start;
              queryStart -= 3 + start;
              fragmentStart -= 3 + start;
              start = 0;
              end = uri.length;
            }
          }
        }
      } else if (schemeEnd == start + 5 && uri.startsWith("https", start)) {
        scheme = "https";
        // HTTPS URIs should not have an explicit port of 443.
        if (portStart > start &&
            portStart + 4 == pathStart &&
            uri.startsWith("443", portStart + 1)) {
          if (start == 0 && end == uri.length) {
            uri = uri.replaceRange(portStart, pathStart, "");
            pathStart -= 4;
            queryStart -= 4;
            fragmentStart -= 4;
            end -= 3;
          } else {
            uri = uri.substring(start, portStart) +
                uri.substring(pathStart, end);
            schemeEnd -= start;
            hostStart -= start;
            portStart -= start;
            pathStart -= 4 + start;
            queryStart -= 4 + start;
            fragmentStart -= 4 + start;
            start = 0;
            end = uri.length;
          }
        }
      }
    }
  }

  if (isSimple) {
    if (start > 0 || end < uri.length) {
      uri = uri.substring(start, end);
      schemeEnd -= start;
      hostStart -= start;
      portStart -= start;
      pathStart -= start;
      queryStart -= start;
      fragmentStart -= start;
    }
    return _SimpleUri(uri, schemeEnd, hostStart, portStart, pathStart,
        queryStart, fragmentStart, scheme);
  }

  return _Uri.notSimple(uri, start, end, schemeEnd, hostStart, portStart,
      pathStart, queryStart, fragmentStart, scheme);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Uri/parse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/json/parse.md)
JSON.parse()
============

 
The `JSON.parse()` static method parses a JSON string, constructing the
JavaScript value or object described by the string. An optional
*reviver* function can be provided to perform a transformation on the
resulting object before it is returned.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
JSON.parse(text)
JSON.parse(text, reviver)
```




 
### Parameters

 

[`text`](#text)

:   The string to parse as JSON. See the [`JSON`](../json) object for a
    description of JSON syntax.

[`reviver`](#reviver) [Optional]

:   If a function, this prescribes how each value originally produced by
    parsing is transformed before being returned. Non-callable values
    are ignored. The function is called with the following arguments:

    [`key`](#key)

    :   The key associated with the value.

    [`value`](#value)

    :   The value produced by parsing.



 
### Return value 

 
The [`Object`](../object), [`Array`](../array), string, number, boolean,
or `null` value corresponding to the given JSON `text`.



 
### Exceptions

 

[`SyntaxError`](../syntaxerror)

:   Thrown if the string to parse is not valid JSON.



 
Description
-----------

 
`JSON.parse()` parses a JSON string according to the [JSON
grammar](../json#full_json_grammar), then evaluates the string as if
it\'s a JavaScript expression. The only instance where a piece of JSON
text represents a different value from the same JavaScript expression is
when dealing with the `"__proto__"` key --- see [Object literal syntax
vs.
JSON](../../operators/object_initializer#object_literal_syntax_vs._json).



 
### The reviver parameter 

 
If a `reviver` is specified, the value computed by parsing is
*transformed* before being returned. Specifically, the computed value
and all its properties (in a
[depth-first](https://en.wikipedia.org/wiki/Depth-first_search) fashion,
beginning with the most nested properties and proceeding to the original
value itself) are individually run through the `reviver`.

The `reviver` is called with the object containing the property being
processed as `this` (unless you define the `reviver` as an arrow
function, in which case there\'s no separate `this` binding) and two
arguments: `key` and `value`, representing the property name as a string
(even for arrays) and the property value. If the `reviver` function
returns [`undefined`](../undefined) (or returns no value --- for
example, if execution falls off the end of the function), the property
is deleted from the object. Otherwise, the property is redefined to be
the return value. If the `reviver` only transforms some values and not
others, be certain to return all untransformed values as-is ---
otherwise, they will be deleted from the resulting object.

Similar to the `replacer` parameter of [`JSON.stringify()`](stringify),
for arrays and objects, `reviver` will be last called on the root value
with an empty string as the `key` and the root object as the `value`.
For other valid JSON values, `reviver` works similarly and is called
once with an empty string as the `key` and the value itself as the
`value`.

If you return another value from `reviver`, that value will completely
replace the originally parsed value. This even applies to the root
value. For example:

 
 
[js]


```js
const transformedObj1 = JSON.parse('[1,5,{"s":1}]', (key, value) => {
  return typeof value === "object" ? undefined : value;
});

console.log(transformedObj1); // undefined
```


There is no way to work around this generically. You cannot specially
handle the case where `key` is an empty string, because JSON objects can
also contain keys that are empty strings. You need to know very
precisely what kind of transformation is needed for each key when
implementing the reviver.

Note that `reviver` is run after the value is parsed. So, for example,
numbers in JSON text will have already been converted to JavaScript
numbers, and may lose precision in the process. To transfer large
numbers without loss of precision, serialize them as strings, and revive
them to [BigInts](../bigint), or other appropriate arbitrary precision
formats.



 
Examples
--------


 
### Using JSON.parse() 

 
 
 
[js]


```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```




 
### Using the reviver parameter 

 
 
 
[js]


```js
JSON.parse(
  '{"p": 5}',
  (key, value) =>
    typeof value === "number"
      ? value * 2 // return value * 2 for numbers
      : value, // return everything else unchanged
);
// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key);
  return value;
});
// 1
// 2
// 4
// 6
// 5
// 3
// ""
```




 
### Using reviver when paired with the replacer of JSON.stringify() 

 
In order for a value to properly round-trip (that is, it gets
deserialized to the same original object), the serialization process
must preserve the type information. For example, you can use the
`replacer` parameter of [`JSON.stringify()`](stringify) for this
purpose:

 
 
[js]


```js
// Maps are normally serialized as objects with no properties.
// We can use the replacer to specify the entries to be serialized.
const map = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

const jsonText = JSON.stringify(map, (key, value) =>
  value instanceof Map ? Array.from(value.entries()) : value,
);

console.log(jsonText);
// [[1,"one"],[2,"two"],[3,"three"]]

const map2 = JSON.parse(jsonText, (key, value) =>
  Array.isArray(value) ? new Map(value) : value,
);

console.log(map2);
// Map { 1 => "one", 2 => "two", 3 => "three" }
```


Because JSON has no syntax space for annotating type metadata, in order
to revive values that are not plain objects, you have to consider one of
the following:

-   Serialize the entire object to a string and prefix it with a type
    tag.
-   \"Guess\" based on the structure of the data (for example, an array
    of two-member arrays)
-   If the shape of the payload is fixed, based on the property name
    (for example, all properties called `registry` hold `Map` objects).



 
### JSON.parse() does not allow trailing commas 

 
 
 
[js]


```js
// both will throw a SyntaxError
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
```




 
### JSON.parse() does not allow single quotes 

 
 
 
[js]


```js
// will throw a SyntaxError
JSON.parse("{'foo': 1}");
```




Specifications
--------------

 
  -------------------------------------------------------------------------------------------------
  Specification
  -------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-json.parse]](https://tc39.es/ecma262/multipage/structured-data.html#sec-json.parse)

  -------------------------------------------------------------------------------------------------


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

`parse`

3

12

3.5

10.5

4

18

4

11

4

1.0

≤37

1.0

0.10.0

 
See also 
--------

 
-   [`JSON.stringify()`](stringify)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/datetime/parse.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

parse method
============

::: {.section .multi-line-signature}
[DateTime](../datetime-class) parse(

1.  [String](../string-class) formattedString

)
:::

Constructs a new [DateTime](../datetime-class) instance based on
`formattedString`.

Throws a [FormatException](../formatexception-class) if the input string
cannot be parsed.

The function parses a subset of ISO 8601, which includes the subset
accepted by RFC 3339.

The accepted inputs are currently:

-   A date: A signed four-to-six digit year, two digit month and two
    digit day, optionally separated by `-` characters. Examples:
    \"19700101\", \"-0004-12-24\", \"81030-04-01\".
-   An optional time part, separated from the date by either `T` or a
    space. The time part is a two digit hour, then optionally a two
    digit minutes value, then optionally a two digit seconds value, and
    then optionally a \'.\' or \',\' followed by at least a one digit
    second fraction. The minutes and seconds may be separated from the
    previous parts by a \':\'. Examples: \"12\", \"12:30:24.124\",
    \"12:30:24,124\", \"123010.50\".
-   An optional time-zone offset part, possibly separated from the
    previous by a space. The time zone is either \'z\' or \'Z\', or it
    is a signed two digit hour part and an optional two digit minute
    part. The sign must be either \"+\" or \"-\", and cannot be omitted.
    The minutes may be separated from the hours by a \':\'. Examples:
    \"Z\", \"-10\", \"+01:30\", \"+1130\".

This includes the output of both [toString](tostring) and
[toIso8601String](toiso8601string), which will be parsed back into a
`DateTime` object with the same time as the original.

The result is always in either local time or UTC. If a time zone offset
other than UTC is specified, the time is converted to the equivalent UTC
time.

Examples of accepted strings:

-   `"2012-02-27"`
-   `"2012-02-27 13:27:00"`
-   `"2012-02-27 13:27:00.123456789z"`
-   `"2012-02-27 13:27:00,123456789z"`
-   `"20120227 13:27:00"`
-   `"20120227T132700"`
-   `"20120227"`
-   `"+20120227"`
-   `"2012-02-27T14Z"`
-   `"2012-02-27T14+00:00"`
-   `"-123450101 00:00:00 Z"`: in the year -12345.
-   `"2002-02-27T14:00:00-0500"`: Same as `"2002-02-27T19:00:00Z"`

This method accepts out-of-range component values and interprets them as
overflows into the next larger component. For example, \"2020-01-42\"
will be parsed as 2020-02-11, because the last valid date in that month
is 2020-01-31, so 42 days is interpreted as 31 days of that month plus
11 days into the next month.

To detect and reject invalid component values, use
[DateFormat.parseStrict](https://pub.dev/documentation/intl/latest/intl/DateFormat/parseStrict.html)
from the [intl](https://pub.dev/packages/intl) package.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static DateTime parse(String formattedString) {
  var re = _parseFormat;
  Match? match = re.firstMatch(formattedString);
  if (match != null) {
    int parseIntOrZero(String? matched) {
      if (matched == null) return 0;
      return int.parse(matched);
    }

    // Parses fractional second digits of '.(\d+)' into the combined
    // microseconds. We only use the first 6 digits because of DateTime
    // precision of 999 milliseconds and 999 microseconds.
    int parseMilliAndMicroseconds(String? matched) {
      if (matched == null) return 0;
      int length = matched.length;
      assert(length >= 1);
      int result = 0;
      for (int i = 0; i < 6; i++) {
        result *= 10;
        if (i < matched.length) {
          result += matched.codeUnitAt(i) ^ 0x30;
        }
      }
      return result;
    }

    int years = int.parse(match[1]!);
    int month = int.parse(match[2]!);
    int day = int.parse(match[3]!);
    int hour = parseIntOrZero(match[4]);
    int minute = parseIntOrZero(match[5]);
    int second = parseIntOrZero(match[6]);
    int milliAndMicroseconds = parseMilliAndMicroseconds(match[7]);
    int millisecond =
        milliAndMicroseconds ~/ Duration.microsecondsPerMillisecond;
    int microsecond = milliAndMicroseconds
        .remainder(Duration.microsecondsPerMillisecond) as int;
    bool isUtc = false;
    if (match[8] != null) {
      // timezone part
      isUtc = true;
      String? tzSign = match[9];
      if (tzSign != null) {
        // timezone other than 'Z' and 'z'.
        int sign = (tzSign == '-') ? -1 : 1;
        int hourDifference = int.parse(match[10]!);
        int minuteDifference = parseIntOrZero(match[11]);
        minuteDifference += 60 * hourDifference;
        minute -= sign * minuteDifference;
      }
    }
    int? value = _brokenDownDateToValue(years, month, day, hour, minute,
        second, millisecond, microsecond, isUtc);
    if (value == null) {
      throw FormatException("Time out of range", formattedString);
    }
    return DateTime._withValue(value, isUtc: isUtc);
  } else {
    throw FormatException("Invalid date format", formattedString);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/DateTime/parse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/javascript/global_objects/date/parse.md)
Date.parse()
============

 
The `Date.parse()` static method parses a string representation of a
date, and returns the date\'s
[timestamp](../date#the_epoch_timestamps_and_invalid_date).

Only the [date time string format](../date#date_time_string_format) is
explicitly specified to be supported. Other formats are
implementation-defined and may not work across all browsers. A library
can help if many different formats are to be accommodated.


 
Try it 
------

 



 
Syntax
------

 
 
 
[js]


```js
Date.parse(dateString)
```




 
### Parameters

 

[`dateString`](#datestring)

:   A string in [the date time string
    format](../date#date_time_string_format). See the linked reference
    for caveats on using different formats.



 
### Return value 

 
A number representing the
[timestamp](../date#the_epoch_timestamps_and_invalid_date) of the given
date. If `dateString` fails to be parsed as a valid date,
[`NaN`](../nan) is returned.



 
Description
-----------

 
This function is useful for setting date values based on string values,
for example in conjunction with the [`setTime()`](settime) method.

Because `parse()` is a static method of `Date`, you always use it as
`Date.parse()`, rather than as a method of a `Date` object you created.



 
Examples
--------


 
### Using Date.parse() 

 
The following calls all return `1546300800000`. The first will imply UTC
time because it\'s date-only, and the others explicitly specify the UTC
timezone.

 
 
[js]


```js
Date.parse("2019-01-01");
Date.parse("2019-01-01T00:00:00.000Z");
Date.parse("2019-01-01T00:00:00.000+00:00");
```


The following call, which does not specify a time zone will be set to
2019-01-01 at 00:00:00 in the local timezone of the system, because it
has both date and time.

 
 
[js]


```js
Date.parse("2019-01-01T00:00:00");
```




 
### Non-standard date strings 

 
 
**Note:** This section contains implementation-specific behavior that
can be inconsistent across implementations.


Implementations usually default to the local time zone when the date
string is non-standard. For consistency, we will assume that the code
uses the UTC timezone.

 
 
[js]


```js
Date.parse("Jan 1, 1970"); // 0 in all implementations

Date.parse("Thu, 01 Jan 1970 00:00:00"); // 0 in all implementations

Date.parse("1970,1,1"); // 0 in Chrome and Firefox, NaN in Safari

Date.parse("02 01 1970");
// 2678400000 in Chrome and Firefox (Sun Feb 01 1970 00:00:00 GMT+0000);
// NaN in Safari

// With explicit timezone
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT+0300");
// -10800000 in all implementations in all timezones

// Single number
Date.parse("0");
// 946684800000 in Chrome (Sat Jan 01 2000 00:00:00 GMT+0000);
// NaN in Firefox;
// -62167219200000 in Safari (Sat Jan 01 0000 00:00:00 GMT+0000)

// Two-digit number that may be a month
Date.parse("28"); // NaN in all implementations

// Two-digit year
Date.parse("70/01/01"); // 0 in all implementations

// Out-of-bounds date components
Date.parse("2014-25-23"); // NaN in all implementations
Date.parse("Mar 32, 2014"); // NaN in all implementations
Date.parse("2014/25/23"); // NaN in all implementations

Date.parse("2014-02-30");
// NaN in Safari and Firefox;
// 1393718400000 in Chrome (Sun Mar 02 2014 00:00:00 GMT+0000)
Date.parse("02/30/2014"); // 1393718400000 in all implementations
```




Specifications
--------------

 
  ---------------------------------------------------------------------------------------------------
  Specification
  ---------------------------------------------------------------------------------------------------
  [ECMAScript Language Specification\
  [\#
  sec-date.parse]](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date.parse)

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

`parse`

1

12

1

3

1

18

4

10.1

1

1.0

4.4

1.0

0.10.0

`iso_8601`

6

12

4

6

5.1

18

4

10.1

5

1.0

≤37

1.0

0.12.0

 
See also 
--------

 
-   [`Date.UTC()`](utc)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse>



---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/httpdate/parse.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

parse method
============

::: {.section .multi-line-signature}
[DateTime](../../dart-core/datetime-class) parse(

1.  [String](../../dart-core/string-class) date

)
:::

Parse a date string in either of the formats
[RFC-1123](http://tools.ietf.org/html/rfc1123 "RFC-1123"),
[RFC-850](http://tools.ietf.org/html/rfc850 "RFC-850") or ANSI C\'s
asctime() format. These formats are listed here.

``` {.language-dart data-language="dart"}
Thu, 1 Jan 1970 00:00:00 GMT
Thursday, 1-Jan-1970 00:00:00 GMT
Thu Jan  1 00:00:00 1970
```

For more information see [RFC-2616 section
3.1.1](http://tools.ietf.org/html/rfc2616#section-3.3.1 "RFC-2616 section 3.1.1").

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static DateTime parse(String date) {
  final int SP = 32;
  const List wkdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const List weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  const List months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  final int formatRfc1123 = 0;
  final int formatRfc850 = 1;
  final int formatAsctime = 2;

  int index = 0;
  String tmp;

  void expect(String s) {
    if (date.length - index < s.length) {
      throw HttpException("Invalid HTTP date $date");
    }
    String tmp = date.substring(index, index + s.length);
    if (tmp != s) {
      throw HttpException("Invalid HTTP date $date");
    }
    index += s.length;
  }

  int expectWeekday() {
    int weekday;
    // The formatting of the weekday signals the format of the date string.
    int pos = date.indexOf(",", index);
    if (pos == -1) {
      int pos = date.indexOf(" ", index);
      if (pos == -1) throw HttpException("Invalid HTTP date $date");
      tmp = date.substring(index, pos);
      index = pos + 1;
      weekday = wkdays.indexOf(tmp);
      if (weekday != -1) {
        return formatAsctime;
      }
    } else {
      tmp = date.substring(index, pos);
      index = pos + 1;
      weekday = wkdays.indexOf(tmp);
      if (weekday != -1) {
        return formatRfc1123;
      }
      weekday = weekdays.indexOf(tmp);
      if (weekday != -1) {
        return formatRfc850;
      }
    }
    throw HttpException("Invalid HTTP date $date");
  }

  int expectMonth(String separator) {
    int pos = date.indexOf(separator, index);
    if (pos - index != 3) throw HttpException("Invalid HTTP date $date");
    tmp = date.substring(index, pos);
    index = pos + 1;
    int month = months.indexOf(tmp);
    if (month != -1) return month;
    throw HttpException("Invalid HTTP date $date");
  }

  int expectNum(String separator) {
    int pos;
    if (separator.isNotEmpty) {
      pos = date.indexOf(separator, index);
    } else {
      pos = date.length;
    }
    String tmp = date.substring(index, pos);
    index = pos + separator.length;
    try {
      int value = int.parse(tmp);
      return value;
    } on FormatException {
      throw HttpException("Invalid HTTP date $date");
    }
  }

  void expectEnd() {
    if (index != date.length) {
      throw HttpException("Invalid HTTP date $date");
    }
  }

  int format = expectWeekday();
  int year;
  int month;
  int day;
  int hours;
  int minutes;
  int seconds;
  if (format == formatAsctime) {
    month = expectMonth(" ");
    if (date.codeUnitAt(index) == SP) index++;
    day = expectNum(" ");
    hours = expectNum(":");
    minutes = expectNum(":");
    seconds = expectNum(" ");
    year = expectNum("");
  } else {
    expect(" ");
    day = expectNum(format == formatRfc1123 ? " " : "-");
    month = expectMonth(format == formatRfc1123 ? " " : "-");
    year = expectNum(" ");
    hours = expectNum(":");
    minutes = expectNum(":");
    seconds = expectNum(" ");
    expect("GMT");
  }
  expectEnd();
  return DateTime.utc(year, month + 1, day, hours, minutes, seconds, 0);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HttpDate/parse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/int/parse.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

parse method
============

::: {.section .multi-line-signature}
[int](../int-class) parse(

1.  [String](../string-class) source,
2.  {[int](../int-class)? radix,
3.  @[deprecated](../deprecated-constant) [int](../int-class) onError(
    1.  [String](../string-class) source

    )?}

)

::: {.features}
override
:::
:::

Parse `source` as a, possibly signed, integer literal and return its
value.

The `source` must be a non-empty sequence of base-`radix` digits,
optionally prefixed with a minus or plus sign (\'-\' or \'+\').

The `radix` must be in the range 2..36. The digits used are first the
decimal digits 0..9, and then the letters \'a\'..\'z\' with values 10
through 35. Also accepts upper-case letters with the same values as the
lower-case ones.

If no `radix` is given then it defaults to 10. In this case, the
`source` digits may also start with `0x`, in which case the number is
interpreted as a hexadecimal integer literal, When `int` is implemented
by 64-bit signed integers, hexadecimal integer literals may represent
values larger than 2^63^, in which case the value is parsed as if it is
an *unsigned* number, and the resulting value is the corresponding
signed integer value.

For any int `n` and valid radix `r`, it is guaranteed that
`n == int.parse(n.toRadixString(r), radix: r)`.

If the `source` string does not contain a valid integer literal,
optionally prefixed by a sign, a
[FormatException](../formatexception-class) is thrown (unless the
deprecated `onError` parameter is used, see below).

Instead of throwing and immediately catching the
[FormatException](../formatexception-class), instead use
[tryParse](tryparse) to handle a parsing error.

Example:

``` {.language-dart data-language="dart"}
var value = int.tryParse(text);
if (value == null) {
  // handle the problem
  // ...
}
```

The `onError` parameter is deprecated and will be removed. Instead of
`int.parse(string, onError: (string) => ...)`, you should use
`int.tryParse(string) ?? (...)`.

When the source string is not valid and `onError` is provided, whenever
a [FormatException](../formatexception-class) would be thrown, `onError`
is instead called with `source` as argument, and the result of that call
is returned by [parse](parse).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external static int parse(String source,
    {int? radix, @deprecated int onError(String source)?});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/int/parse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/bigint/parse.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

parse method
============

::: {.section .multi-line-signature}
[BigInt](../bigint-class) parse(

1.  [String](../string-class) source,
2.  {[int](../int-class)? radix}

)
:::

Parses `source` as a, possibly signed, integer literal and returns its
value.

The `source` must be a non-empty sequence of base-`radix` digits,
optionally prefixed with a minus or plus sign (\'-\' or \'+\').

The `radix` must be in the range 2..36. The digits used are first the
decimal digits 0..9, and then the letters \'a\'..\'z\' with values 10
through 35. Also accepts upper-case letters with the same values as the
lower-case ones.

If no `radix` is given then it defaults to 10. In this case, the
`source` digits may also start with `0x`, in which case the number is
interpreted as a hexadecimal literal, which effectively means that the
`0x` is ignored and the radix is instead set to 16.

For any int `n` and radix `r`, it is guaranteed that
`n == int.parse(n.toRadixString(r), radix: r)`.

Throws a [FormatException](../formatexception-class) if the `source` is
not a valid integer literal, optionally prefixed by a sign. Examples:

``` {.language-dart data-language="dart"}
print(BigInt.parse('-12345678901234567890')); // -12345678901234567890
print(BigInt.parse('0xFF')); // 255
print(BigInt.parse('0xffffffffffffffff')); // 18446744073709551615

// From binary (base 2) value.
print(BigInt.parse('1100', radix: 2)); // 12
print(BigInt.parse('00011111', radix: 2)); // 31
print(BigInt.parse('011111100101', radix: 2)); // 2021
// From octal (base 8) value.
print(BigInt.parse('14', radix: 8)); // 12
print(BigInt.parse('37', radix: 8)); // 31
print(BigInt.parse('3745', radix: 8)); // 2021
// From hexadecimal (base 16) value.
print(BigInt.parse('c', radix: 16)); // 12
print(BigInt.parse('1f', radix: 16)); // 31
print(BigInt.parse('7e5', radix: 16)); // 2021
// From base 35 value.
print(BigInt.parse('y1', radix: 35)); // 1191 == 34 * 35 + 1
print(BigInt.parse('z1', radix: 35)); // Throws.
// From base 36 value.
print(BigInt.parse('y1', radix: 36)); // 1225 == 34 * 36 + 1
print(BigInt.parse('z1', radix: 36)); // 1261 == 35 * 36 + 1
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external static BigInt parse(String source, {int? radix});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/parse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/num/parse.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

parse method
============

::: {.section .multi-line-signature}
[num](../num-class) parse(

1.  [String](../string-class) input,
2.  \[@[deprecated](../deprecated-constant) [num](../num-class) onError(
    1.  [String](../string-class) input

    )?\]

)
:::

Parses a string containing a number literal into a number.

The method first tries to read the `input` as integer (similar to
[int.parse](../int/parse) without a radix). If that fails, it tries to
parse the `input` as a double (similar to
[double.parse](../double/parse)). If that fails, too, it invokes
`onError` with `input`, and the result of that invocation becomes the
result of calling `parse`.

If no `onError` is supplied, it defaults to a function that throws a
[FormatException](../formatexception-class).

For any number `n`, this function satisfies
`identical(n, num.parse(n.toString()))` (except when `n` is a NaN
`double` with a payload).

The `onError` parameter is deprecated and will be removed. Instead of
`num.parse(string, (string) { ... })`, you should use
`num.tryParse(string) ?? (...)`.

Examples:

``` {.language-dart data-language="dart"}
var value = num.parse('2021'); // 2021
value = num.parse('3.14'); // 3.14
value = num.parse('  3.14 \xA0'); // 3.14
value = num.parse('0.'); // 0.0
value = num.parse('.0'); // 0.0
value = num.parse('-1.e3'); // -1000.0
value = num.parse('1234E+7'); // 12340000000.0
value = num.parse('+.12e-9'); // 1.2e-10
value = num.parse('-NaN'); // NaN
value = num.parse('0xFF'); // 255
value = num.parse(double.infinity.toString()); // Infinity
value = num.parse('1f'); // Throws.
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static num parse(String input, [@deprecated num onError(String input)?]) {
  num? result = tryParse(input);
  if (result != null) return result;
  if (onError == null) throw FormatException(input);
  return onError(input);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/parse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/uridata/parse.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

parse method
============

::: {.section .multi-line-signature}
[UriData](../uridata-class) parse(

1.  [String](../string-class) uri

)
:::

Parses a string as a `data` URI.

The string must have the format:

``` {.language-plaintext data-language="dart"}
'data:' (type '/' subtype)? (';' attribute '=' value)* (';base64')? ',' data
```

where `type`, `subtype`, `attribute` and `value` are specified in
RFC-2045, and `data` is a sequence of URI-characters (RFC-2396 `uric`).

This means that all the characters must be ASCII, but the URI may
contain percent-escapes for non-ASCII byte values that need an
interpretation to be converted to the corresponding string.

Parsing checks that Base64 encoded data is valid, and it normalizes it
to use the default Base64 alphabet and to use padding. Non-Base64 data
is escaped using percent-escapes as necessary to make it valid, and
existing escapes are case normalized.

Accessing the individual parts may fail later if they turn out to have
content that cannot be decoded successfully as a string, for example if
existing percent escapes represent bytes that cannot be decoded by the
chosen [Encoding](../../dart-convert/encoding-class) (see
[contentAsString](contentasstring)).

A [FormatException](../formatexception-class) is thrown if `uri` is not
a valid data URI.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static UriData parse(String uri) {
  if (uri.length >= 5) {
    int dataDelta = _startsWithData(uri, 0);
    if (dataDelta == 0) {
      // Exact match on "data:".
      return _parse(uri, 5, null);
    }
    if (dataDelta == 0x20) {
      // Starts with a non-normalized "data" scheme containing upper-case
      // letters. Parse anyway, but throw away the scheme.
      return _parse(uri.substring(5), 0, null);
    }
  }
  throw FormatException("Does not start with 'data:'", uri, 0);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/UriData/parse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/double/parse.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

parse method
============

::: {.section .multi-line-signature}
[double](../double-class) parse(

1.  [String](../string-class) source,
2.  \[@[deprecated](../deprecated-constant) [double](../double-class)
    onError(
    1.  [String](../string-class) source

    )?\]

)

::: {.features}
override
:::
:::

Parse `source` as a double literal and return its value.

Accepts an optional sign (`+` or `-`) followed by either the characters
\"Infinity\", the characters \"NaN\" or a floating-point representation.
A floating-point representation is composed of a mantissa and an
optional exponent part. The mantissa is either a decimal point (`.`)
followed by a sequence of (decimal) digits, or a sequence of digits
optionally followed by a decimal point and optionally more digits. The
(optional) exponent part consists of the character \"e\" or \"E\", an
optional sign, and one or more digits. The `source` must not be `null`.

Leading and trailing whitespace is ignored.

If the `source` string is not a valid double literal, the `onError` is
called with the `source` as argument, and its return value is used
instead. Throws a [FormatException](../formatexception-class) if the
`source` string is not valid and no `onError` is provided.

Examples of accepted strings:

``` {.language-dart data-language="dart"}
"3.14"
"  3.14 \xA0"
"0."
".0"
"-1.e3"
"1234E+7"
"+.12e-9"
"-NaN"
```

The `onError` parameter is deprecated and will be removed. Instead of
`double.parse(string, (string) { ... })`, you should use
`double.tryParse(string) ?? (...)`.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external static double parse(String source,
    [@deprecated double onError(String source)?]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/double/parse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/headervalue/parse.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

parse method
============

::: {.section .multi-line-signature}
[HeaderValue](../headervalue-class) parse(

1.  [String](../../dart-core/string-class) value,
2.  {[String](../../dart-core/string-class) parameterSeparator = \";\",
3.  [String](../../dart-core/string-class)? valueSeparator,
4.  [bool](../../dart-core/bool-class) preserveBackslash = false}

)
:::

Creates a new header value object from parsing a header value string
with both value and optional parameters.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static HeaderValue parse(String value,
    {String parameterSeparator = ";",
    String? valueSeparator,
    bool preserveBackslash = false}) {
  return _HeaderValue.parse(value,
      parameterSeparator: parameterSeparator,
      valueSeparator: valueSeparator,
      preserveBackslash: preserveBackslash);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/HeaderValue/parse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/contenttype/parse.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

parse method
============

::: {.section .multi-line-signature}
[ContentType](../contenttype-class) parse(

1.  [String](../../dart-core/string-class) value

)

::: {.features}
override
:::
:::

Creates a new content type object from parsing a Content-Type header
value. As primary type, sub type and parameter names and values are not
case sensitive all these values will be converted to lower case. Parsing
this string

``` {.language-dart data-language="dart"}
text/html; charset=utf-8
```

will create a content type object with primary type \"text\", subtype
\"html\" and parameter \"charset\" with value \"utf-8\". There may be
more parameters supplied, but they are not recognized by this class.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static ContentType parse(String value) {
  return _ContentType.parse(value);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/ContentType/parse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssstylevalue/parse.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

parse method
============

::: {.section .multi-line-signature}
[Object](../../dart-core/object-class)? parse(

1.  [String](../../dart-core/string-class) property,
2.  [String](../../dart-core/string-class) cssText

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Object? parse(String property, String cssText) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssStyleValue/parse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/cssnumericvalue/parse.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

parse method
============

::: {.section .multi-line-signature}
[CssNumericValue](../cssnumericvalue-class) parse(

1.  [String](../../dart-core/string-class) cssText

)

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static CssNumericValue parse(String cssText) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CssNumericValue/parse.html>
:::
