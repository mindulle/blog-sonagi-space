[dart:core](../../dart-core/dart-core-library){._links-link}

tryParse method
===============

::: {.section .multi-line-signature}
[BigInt](../bigint-class)? tryParse(

1.  [String](../string-class) source,
2.  {[int](../int-class)? radix}

)
:::

Parses `source` as a, possibly signed, integer literal and returns its
value.

As [parse](parse) except that this method returns `null` if the input is
not valid

Examples:

``` {.language-dart data-language="dart"}
print(BigInt.tryParse('-12345678901234567890')); // -12345678901234567890
print(BigInt.tryParse('0xFF')); // 255
print(BigInt.tryParse('0xffffffffffffffff')); // 18446744073709551615

// From binary (base 2) value.
print(BigInt.tryParse('1100', radix: 2)); // 12
print(BigInt.tryParse('00011111', radix: 2)); // 31
print(BigInt.tryParse('011111100101', radix: 2)); // 2021
// From octal (base 8) value.
print(BigInt.tryParse('14', radix: 8)); // 12
print(BigInt.tryParse('37', radix: 8)); // 31
print(BigInt.tryParse('3745', radix: 8)); // 2021
// From hexadecimal (base 16) value.
print(BigInt.tryParse('c', radix: 16)); // 12
print(BigInt.tryParse('1f', radix: 16)); // 31
print(BigInt.tryParse('7e5', radix: 16)); // 2021
// From base 35 value.
print(BigInt.tryParse('y1', radix: 35)); // 1191 == 34 * 35 + 1
print(BigInt.tryParse('z1', radix: 35)); // null
// From base 36 value.
print(BigInt.tryParse('y1', radix: 36)); // 1225 == 34 * 36 + 1
print(BigInt.tryParse('z1', radix: 36)); // 1261 == 35 * 36 + 1
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external static BigInt? tryParse(String source, {int? radix});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/BigInt/tryParse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/int/tryparse.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

tryParse method
===============

::: {.section .multi-line-signature}
[int](../int-class)? tryParse(

1.  [String](../string-class) source,
2.  {[int](../int-class)? radix}

)

::: {.features}
override
:::
:::

Parse `source` as a, possibly signed, integer literal.

Like [parse](parse) except that this function returns `null` where a
similar call to [parse](parse) would throw a
[FormatException](../formatexception-class).

Example:

``` {.language-dart data-language="dart"}
print(int.tryParse('2021')); // 2021
print(int.tryParse('1f')); // null
// From binary (base 2) value.
print(int.tryParse('1100', radix: 2)); // 12
print(int.tryParse('00011111', radix: 2)); // 31
print(int.tryParse('011111100101', radix: 2)); // 2021
// From octal (base 8) value.
print(int.tryParse('14', radix: 8)); // 12
print(int.tryParse('37', radix: 8)); // 31
print(int.tryParse('3745', radix: 8)); // 2021
// From hexadecimal (base 16) value.
print(int.tryParse('c', radix: 16)); // 12
print(int.tryParse('1f', radix: 16)); // 31
print(int.tryParse('7e5', radix: 16)); // 2021
// From base 35 value.
print(int.tryParse('y1', radix: 35)); // 1191 == 34 * 35 + 1
print(int.tryParse('z1', radix: 35)); // null
// From base 36 value.
print(int.tryParse('y1', radix: 36)); // 1225 == 34 * 36 + 1
print(int.tryParse('z1', radix: 36)); // 1261 == 35 * 36 + 1
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external static int? tryParse(String source, {int? radix});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/int/tryParse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/num/tryparse.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

tryParse method
===============

::: {.section .multi-line-signature}
[num](../num-class)? tryParse(

1.  [String](../string-class) input

)
:::

Parses a string containing a number literal into a number.

Like [parse](parse), except that this function returns `null` for
invalid inputs instead of throwing.

Examples:

``` {.language-dart data-language="dart"}
var value = num.tryParse('2021'); // 2021
value = num.tryParse('3.14'); // 3.14
value = num.tryParse('  3.14 \xA0'); // 3.14
value = num.tryParse('0.'); // 0.0
value = num.tryParse('.0'); // 0.0
value = num.tryParse('-1.e3'); // -1000.0
value = num.tryParse('1234E+7'); // 12340000000.0
value = num.tryParse('+.12e-9'); // 1.2e-10
value = num.tryParse('-NaN'); // NaN
value = num.tryParse('0xFF'); // 255
value = num.tryParse(double.infinity.toString()); // Infinity
value = num.tryParse('1f'); // null
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static num? tryParse(String input) {
  String source = input.trim();
  // TODO(lrn): Optimize to detect format and result type in one check.
  return int.tryParse(source) ?? double.tryParse(source);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/num/tryParse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/uri/tryparse.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

tryParse method
===============

::: {.section .multi-line-signature}
[Uri](../uri-class)? tryParse(

1.  [String](../string-class) uri,
2.  \[[int](../int-class) start = 0,
3.  [int](../int-class)? end\]

)
:::

Creates a new `Uri` object by parsing a URI string.

If `start` and `end` are provided, they must specify a valid substring
of `uri`, and only the substring from `start` to `end` is parsed as a
URI.

Returns `null` if the `uri` string is not valid as a URI or URI
reference.

Example:

``` {.language-dart data-language="dart"}
final uri = Uri.tryParse(
    'https://dart.dev/guides/libraries/library-tour#utility-classes', 0,
    16);
print(uri); // https://dart.dev

var notUri = Uri.tryParse('::Not valid URI::');
print(notUri); // null
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Uri? tryParse(String uri, [int start = 0, int? end]) {
  // TODO: Optimize to avoid throwing-and-recatching.
  try {
    return parse(uri, start, end);
  } on FormatException {
    return null;
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Uri/tryParse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/double/tryparse.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

tryParse method
===============

::: {.section .multi-line-signature}
[double](../double-class)? tryParse(

1.  [String](../string-class) source

)

::: {.features}
override
:::
:::

Parse `source` as a double literal and return its value.

Like [parse](parse), except that this function returns `null` for
invalid inputs instead of throwing.

Example:

``` {.language-dart data-language="dart"}
var value = double.tryParse('3.14'); // 3.14
value = double.tryParse('  3.14 \xA0'); // 3.14
value = double.tryParse('0.'); // 0.0
value = double.tryParse('.0'); // 0.0
value = double.tryParse('-1.e3'); // -1000.0
value = double.tryParse('1234E+7'); // 12340000000.0
value = double.tryParse('+.12e-9'); // 1.2e-10
value = double.tryParse('-NaN'); // NaN
value = double.tryParse('0xFF'); // null
value = double.tryParse(double.infinity.toString()); // Infinity
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external static double? tryParse(String source);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/double/tryParse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/datetime/tryparse.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

tryParse method
===============

::: {.section .multi-line-signature}
[DateTime](../datetime-class)? tryParse(

1.  [String](../string-class) formattedString

)
:::

Constructs a new [DateTime](../datetime-class) instance based on
`formattedString`.

Works like [parse](parse) except that this function returns `null` where
[parse](parse) would throw a
[FormatException](../formatexception-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static DateTime? tryParse(String formattedString) {
  // TODO: Optimize to avoid throwing.
  try {
    return parse(formattedString);
  } on FormatException {
    return null;
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/DateTime/tryParse.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/internetaddress/tryparse.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

tryParse method
===============

::: {.section .multi-line-signature}
[InternetAddress](../internetaddress-class)? tryParse(

1.  [String](../../dart-core/string-class) address

)
:::

Attempts to parse `address` as a numeric address.

Returns `null` If `address` is not a numeric IPv4 (dotted-decimal
notation) or IPv6 (hexadecimal representation) address.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external static InternetAddress? tryParse(String address);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/InternetAddress/tryParse.html>
:::
