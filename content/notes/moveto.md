[dart:html](../../dart-html/dart-html-library){._links-link}

moveTo method
=============

::: {.section .multi-line-signature}
<div>

1.  \@JSName(\'moveTo\')

</div>

[Future](../../dart-async/future-class)\<[Entry](../entry-class)\>
moveTo(

1.  [DirectoryEntry](../directoryentry-class) parent,
2.  {[String](../../dart-core/string-class)? name}

)

::: {.features}
\@JSName(\'moveTo\')
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@JSName('moveTo')
Future<Entry> moveTo(DirectoryEntry parent, {String? name}) {
  var completer = new Completer<Entry>();
  _moveTo(parent, name, (value) {
    completer.complete(value);
  }, (error) {
    completer.completeError(error);
  });
  return completer.future;
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Entry/moveTo.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/moveto.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

moveTo method
=============

::: {.section .multi-line-signature}
void moveTo(

1.  [Point](../../dart-math/point-class)\<[num](../../dart-core/num-class)\>
    p

)
:::

Moves this window to a specific position.

x and y can be negative.

Other resources
---------------

-   [Window.moveTo](https://developer.mozilla.org/en-US/docs/Web/API/Window.moveTo)
    from MDN.
-   [Window.moveTo](http://dev.w3.org/csswg/cssom-view/#dom-window-moveto)
    from W3C.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void moveTo(Point p) {
  _moveTo(p.x.toInt(), p.y.toInt());
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/moveTo.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/offscreencanvasrenderingcontext2d/moveto.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

moveTo method
=============

::: {.section .multi-line-signature}
void moveTo(

1.  [num](../../dart-core/num-class) x,
2.  [num](../../dart-core/num-class) y

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void moveTo(num x, num y) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OffscreenCanvasRenderingContext2D/moveTo.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/canvasrenderingcontext2d/moveto.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

moveTo method
=============

::: {.section .multi-line-signature}
void moveTo(

1.  [num](../../dart-core/num-class) x,
2.  [num](../../dart-core/num-class) y

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void moveTo(num x, num y) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/CanvasRenderingContext2D/moveTo.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/paintrenderingcontext2d/moveto.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

moveTo method
=============

::: {.section .multi-line-signature}
void moveTo(

1.  [num](../../dart-core/num-class) x,
2.  [num](../../dart-core/num-class) y

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void moveTo(num x, num y) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/PaintRenderingContext2D/moveTo.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/path2d/moveto.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

moveTo method
=============

::: {.section .multi-line-signature}
void moveTo(

1.  [num](../../dart-core/num-class) x,
2.  [num](../../dart-core/num-class) y

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void moveTo(num x, num y) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Path2D/moveTo.html>
:::
