[dart:collection](../../dart-collection/dart-collection-library){._links-link}

lookup method
=============

::: {.section .multi-line-signature}
E? lookup(

1.  [Object](../../dart-core/object-class)? object

)

::: {.features}
override
:::
:::

If an object equal to `object` is in the set, return it.

Checks whether `object` is in the set, like [contains](contains), and if
so, returns the object in the set, otherwise returns `null`.

If the equality relation used by the set is not identity, then the
returned object may not be *identical* to `object`. Some set
implementations may not be able to implement this method. If the
[contains](contains) method is computed, rather than being based on an
actual object instance, then there may not be a specific object instance
representing the set element.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
final containsB = characters.lookup('B');
print(containsB); // B
final containsD = characters.lookup('D');
print(containsD); // null
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E? lookup(Object? object) {
  if (!_validKey(object)) return null;
  int comp = _splay(object as E);
  if (comp != 0) return null;
  return _root!.key;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SplayTreeSet/lookup.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/unmodifiablesetview/lookup.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

lookup method
=============

::: {.section .multi-line-signature}
E? lookup(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
override
:::
:::

If an object equal to `object` is in the set, return it.

Checks whether `object` is in the set, like [contains](contains), and if
so, returns the object in the set, otherwise returns `null`.

If the equality relation used by the set is not identity, then the
returned object may not be *identical* to `object`. Some set
implementations may not be able to implement this method. If the
[contains](contains) method is computed, rather than being based on an
actual object instance, then there may not be a specific object instance
representing the set element.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
final containsB = characters.lookup('B');
print(containsB); // B
final containsD = characters.lookup('D');
print(containsD); // null
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E? lookup(Object? element) => _source.lookup(element);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/UnmodifiableSetView/lookup.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/setmixin/lookup.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

lookup method
=============

::: {.section .multi-line-signature}
E? lookup(

1.  [Object](../../dart-core/object-class)? element

)

::: {.features}
override
:::
:::

If an object equal to `object` is in the set, return it.

Checks whether `object` is in the set, like [contains](contains), and if
so, returns the object in the set, otherwise returns `null`.

If the equality relation used by the set is not identity, then the
returned object may not be *identical* to `object`. Some set
implementations may not be able to implement this method. If the
[contains](contains) method is computed, rather than being based on an
actual object instance, then there may not be a specific object instance
representing the set element.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
final containsB = characters.lookup('B');
print(containsB); // B
final containsD = characters.lookup('D');
print(containsD); // null
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E? lookup(Object? element);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/SetMixin/lookup.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/internetaddress/lookup.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

lookup method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[List](../../dart-core/list-class)\<[InternetAddress](../internetaddress-class)\>\>
lookup(

1.  [String](../../dart-core/string-class) host,
2.  {[InternetAddressType](../internetaddresstype-class) type =
    InternetAddressType.any}

)
:::

Looks up the addresses of a host.

If `type` is
[InternetAddressType.any](../internetaddresstype/any-constant), it will
lookup both IP version 4 (IPv4) and IP version 6 (IPv6) addresses. If
`type` is either
[InternetAddressType.IPv4](../internetaddresstype/ipv4-constant) or
[InternetAddressType.IPv6](../internetaddresstype/ipv6-constant) it will
only lookup addresses of the specified type. The order of the list can,
and most likely will, change over time.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external static Future<List<InternetAddress>> lookup(String host,
    {InternetAddressType type = InternetAddressType.any});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/InternetAddress/lookup.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-core/set/lookup.md)
[dart:core](../../dart-core/dart-core-library){._links-link}

lookup method
=============

::: {.section .multi-line-signature}
E? lookup(

1.  [Object](../object-class)? object

)
:::

If an object equal to `object` is in the set, return it.

Checks whether `object` is in the set, like [contains](contains), and if
so, returns the object in the set, otherwise returns `null`.

If the equality relation used by the set is not identity, then the
returned object may not be *identical* to `object`. Some set
implementations may not be able to implement this method. If the
[contains](contains) method is computed, rather than being based on an
actual object instance, then there may not be a specific object instance
representing the set element.

``` {.language-dart data-language="dart"}
final characters = <String>{'A', 'B', 'C'};
final containsB = characters.lookup('B');
print(containsB); // B
final containsD = characters.lookup('D');
print(containsD); // null
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
E? lookup(Object? object);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Set/lookup.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/dynamiclibrary/lookup.md)
[dart:ffi](../../dart-ffi/dart-ffi-library){._links-link}

lookup\<T extends NativeType\> method
=====================================

::: {.section .multi-line-signature}
[Pointer](../pointer-class)\<T\> lookup\<T extends NativeType\>(

1.  [String](../../dart-core/string-class) symbolName

)
:::

Looks up a symbol in the [DynamicLibrary](../dynamiclibrary-class) and
returns its address in memory.

Similar to the functionality of the
[dlsym(3)](https://man7.org/linux/man-pages/man3/dlsym.3.html) system
call.

The symbol must be provided by the dynamic library. To check whether the
library provides such symbol, use [providesSymbol](providessymbol).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external Pointer<T> lookup<T extends NativeType>(String symbolName);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/DynamicLibrary/lookup.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-svg/attributeclassset/lookup.md)
[dart:svg](../../dart-svg/dart-svg-library){._links-link}

lookup method
=============

::: {.section .multi-line-signature}
[String](../../dart-core/string-class)? lookup(

1.  [Object](../../dart-core/object-class)? value

)

::: {.features}
inherited
:::
:::

Lookup from the Set interface. Not interesting for a String set.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
String? lookup(Object? value) => contains(value) ? value as String : null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-svg/AttributeClassSet/lookup.html>
:::
