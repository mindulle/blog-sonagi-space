[dart:core](../dart-core/dart-core-library){._links-link}

print function
==============

::: {.section .multi-line-signature}
void print(

1.  [Object](object-class)? object

)
:::

Prints a string representation of the object to the console.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void print(Object? object) {
  String line = "$object";
  var toZone = printToZone;
  if (toZone == null) {
    printToConsole(line);
  } else {
    toZone(line);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/print.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zone/print.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

print method
============

::: {.section .multi-line-signature}
void print(

1.  [String](../../dart-core/string-class) line

)
:::

Prints the given `line`.

The global `print` function delegates to the current zone\'s
[print](print) function which makes it possible to intercept printing.

Example:

``` {.language-dart data-language="dart"}
import 'dart:async';

main() {
  runZoned(() {
    // Ends up printing: "Intercepted: in zone".
    print("in zone");
  }, zoneSpecification: new ZoneSpecification(
      print: (Zone self, ZoneDelegate parent, Zone zone, String line) {
    parent.print(zone, "Intercepted: $line");
  }));
}
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void print(String line);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Zone/print.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/print.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

print method
============

::: {.section .multi-line-signature}
void print()
:::

Opens the print dialog for this window.

Other resources
---------------

-   [Window.print](https://developer.mozilla.org/en-US/docs/Web/API/Window.print)
    from MDN.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void print() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/print.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonespecification/print.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

print property
==============

::: {#getter .section .multi-line-signature}
[PrintHandler](../printhandler)? print
:::

A custom [Zone.print](../zone/print) implementation for a new zone.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
PrintHandler? get print;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneSpecification/print.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonedelegate/print.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

print method
============

::: {.section .multi-line-signature}
void print(

1.  [Zone](../zone-class) zone,
2.  [String](../../dart-core/string-class) line

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void print(Zone zone, String line);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneDelegate/print.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/print.md)

# print

The 'print' statement in PHP is an in-built function used for outputting one or more strings. Unlike 'echo', it is not a language construct and has a return value. However, it is slower because it uses expressions. The text or numeric data that 'print' outputs can be shown directly or stored in a va
riable. For instance, to print a string you may use `print("Hello, World!");`, and for using it with a variable, `echo $variable;` is suitable.

Visit the following resources to learn more:

- [@official@print](https://www.php.net/manual/en/function.print.php)

## 관련 로드맵
- [[PHP|php]]
