[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

location property
=================

::: {#getter .section .multi-line-signature}
[SourceLocation](../sourcelocation-class)? location
:::

The source location of this Dart language entity, or `null` if the
entity is synthetic.

If the reflectee is a variable, the returned location gives the position
of the variable name at its point of declaration.

If the reflectee is a library, class, typedef, function or type variable
with associated metadata, the returned location gives the position of
the first metadata declaration associated with the reflectee.

Otherwise:

If the reflectee is a library, the returned location gives the position
of the keyword \'library\' at the reflectee\'s point of declaration, if
the reflectee is a named library, or the first character of the first
line in the compilation unit defining the reflectee if the reflectee is
anonymous.

If the reflectee is an abstract class, the returned location gives the
position of the keyword \'abstract\' at the reflectee\'s point of
declaration. Otherwise, if the reflectee is a class, the returned
location gives the position of the keyword \'class\' at the reflectee\'s
point of declaration.

If the reflectee is a typedef the returned location gives the position
of the of the keyword \'typedef\' at the reflectee\'s point of
declaration.

If the reflectee is a function with a declared return type, the returned
location gives the position of the function\'s return type at the
reflectee\'s point of declaration. Otherwise. the returned location
gives the position of the function\'s name at the reflectee\'s point of
declaration.

This operation is optional and may throw an
[UnsupportedError](../../dart-core/unsupportederror-class).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
SourceLocation? get location;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/DeclarationMirror/location.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/location.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

location property
=================

::: {#getter .section .multi-line-signature}
[Location](../location-class) location

::: {.features}
override
:::
:::

The current location of this window.

``` {.language-dart data-language="dart"}
Location currentLocation = window.location;
print(currentLocation.href); // 'http://www.example.com:80/'
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Location get location => _location;
```

::: {#setter .section .multi-line-signature}
void location=([LocationBase](../locationbase-class) value)
:::

Sets the window\'s location, which causes the browser to navigate to the
new location.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set location(value) {
  _location = value;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/location.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/keyevent/location.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

location property
=================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) location

::: {.features}
override
:::
:::

Accessor to the part of the keyboard that the key was pressed from (one
of KeyLocation.STANDARD, KeyLocation.RIGHT, KeyLocation.LEFT,
KeyLocation.NUMPAD, KeyLocation.MOBILE, KeyLocation.JOYSTICK).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get location => _parent.location;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/KeyEvent/location.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/windowbase/location.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

location property
=================

::: {#getter .section .multi-line-signature}
[LocationBase](../locationbase-class) location
:::

The current location of this window.

``` {.language-dart data-language="dart"}
Location currentLocation = window.location;
print(currentLocation.href); // 'http://www.example.com:80/'
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
LocationBase get location;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WindowBase/location.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-mirrors/librarydependencymirror/location.md)
[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

location property
=================

::: {#getter .section .multi-line-signature}
[SourceLocation](../sourcelocation-class)? location
:::

Returns the source location for this import/export declaration.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
SourceLocation? get location;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/LibraryDependencyMirror/location.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/redirectinfo/location.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

location property
=================

::: {#getter .section .multi-line-signature}
[Uri](../../dart-core/uri-class) location
:::

Returns the location for the redirect.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Uri get location;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/RedirectInfo/location.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/keyboardevent/location.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

location property
=================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) location
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get location native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/KeyboardEvent/location.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/workerglobalscope/location.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

location property
=================

::: {#getter .section .multi-line-signature}
\_WorkerLocation location
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
_WorkerLocation get location native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WorkerGlobalScope/location.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Location.md)

# Location API

Geolocation API provides device location (latitude/longitude) using GPS, Wi-Fi, and sensors. Requires user permission for privacy. Enables current location access, position tracking, and distance calculations for location-aware web applications like maps and navigation.

Visit the following resources to learn more:

- [@article@Geolocation API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [@article@Geolocation API overview](https://developers.google.com/maps/documentation/geolocation/overview)


## 관련 로드맵
- [[frontend|frontend]]
