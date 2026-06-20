[dart:html](../../dart-html/dart-html-library){._links-link}

clone method
============

::: {.section .multi-line-signature}
<div>

1.  \@JSName(\'cloneNode\')

</div>

[Node](../node-class) clone(

1.  [bool](../../dart-core/bool-class)? deep

)

::: {.features}
\@JSName(\'cloneNode\')
:::
:::

Returns a copy of this node.

If `deep` is `true`, then all of this node\'s children and descendents
are copied as well. If `deep` is `false`, then only this node is copied.

Other resources
---------------

-   [Node.cloneNode](https://developer.mozilla.org/en-US/docs/Web/API/Node.cloneNode)
    from MDN.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@JSName('cloneNode')
/**
 * Returns a copy of this node.
 *
 * If [deep] is `true`, then all of this node's children and descendents are
 * copied as well. If [deep] is `false`, then only this node is copied.
 *
 * ## Other resources
 *
 * * [Node.cloneNode](https://developer.mozilla.org/en-US/docs/Web/API/Node.cloneNode)
 *   from MDN.
 */
Node clone(bool? deep) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Node/clone.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediastreamtrack/clone.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

clone method
============

::: {.section .multi-line-signature}
[MediaStreamTrack](../mediastreamtrack-class) clone()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
MediaStreamTrack clone() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaStreamTrack/clone.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediastream/clone.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

clone method
============

::: {.section .multi-line-signature}
[MediaStream](../mediastream-class) clone()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
MediaStream clone() native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaStream/clone.html>
:::
