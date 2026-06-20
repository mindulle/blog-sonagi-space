[dart:html](../../dart-html/dart-html-library){._links-link}

registerElement2 method
=======================

::: {.section .multi-line-signature}
[Function](../../dart-core/function-class) registerElement2(

1.  [String](../../dart-core/string-class) tag,
2.  \[[Map](../../dart-core/map-class)? options\]

)

::: {.features}
override
:::
:::

Register a custom subclass of Element to be instantiatable by the DOM.

This is necessary to allow the construction of any custom elements.

The class being registered must either subclass HtmlElement or
SvgElement. If they subclass these directly then they can be used as:

``` {.language-dart data-language="dart"}
class FooElement extends HtmlElement{
   void created() {
     print('FooElement created!');
   }
}

main() {
  document.registerElement('x-foo', FooElement);
  var myFoo = new Element.tag('x-foo');
  // prints 'FooElement created!' to the console.
}
```

The custom element can also be instantiated via HTML using the syntax
`<x-foo></x-foo>`

Other elements can be subclassed as well:

``` {.language-dart data-language="dart"}
class BarElement extends InputElement{
   void created() {
     print('BarElement created!');
   }
}

main() {
  document.registerElement('x-bar', BarElement);
  var myBar = new Element.tag('input', 'x-bar');
  // prints 'BarElement created!' to the console.
}
```

This custom element can also be instantiated via HTML using the syntax
`<input is="x-bar"></input>`

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Function registerElement2(String tag, [Map? options]) {
  return _registerCustomElement(JS('', 'window'), this, tag, options);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/HtmlDocument/registerElement2.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/registerelement2.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

registerElement2 method
=======================

::: {.section .multi-line-signature}
[Function](../../dart-core/function-class) registerElement2(

1.  [String](../../dart-core/string-class) type,
2.  \[[Map](../../dart-core/map-class)? options\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Function registerElement2(String type, [Map? options]) {
  if (options != null) {
    var options_1 = convertDartToNative_Dictionary(options);
    return _registerElement2_1(type, options_1);
  }
  return _registerElement2_2(type);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/registerElement2.html>
:::
