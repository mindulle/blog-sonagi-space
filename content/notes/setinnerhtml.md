[dart:html](../../dart-html/dart-html-library){._links-link}

setInnerHtml method
===================

::: {.section .multi-line-signature}
void setInnerHtml(

1.  [String](../../dart-core/string-class)? html,
2.  {[NodeValidator](../nodevalidator-class)? validator,
3.  [NodeTreeSanitizer](../nodetreesanitizer-class)? treeSanitizer}

)
:::

Parses the HTML fragment and sets it as the contents of this element.
This ensures that the generated content follows the sanitization rules
specified by the validator or treeSanitizer.

If the default validation behavior is too restrictive then a new
NodeValidator should be created, either extending or wrapping a default
validator and overriding the validation APIs.

The treeSanitizer is used to walk the generated node tree and sanitize
it. A custom treeSanitizer can also be provided to perform special
validation rules but since the API is more complex to implement this is
discouraged.

The resulting tree is guaranteed to only contain nodes and attributes
which are allowed by the provided validator.

See also:

-   [NodeValidator](../nodevalidator-class)
-   [NodeTreeSanitizer](../nodetreesanitizer-class)

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setInnerHtml(String? html,
    {NodeValidator? validator, NodeTreeSanitizer? treeSanitizer}) {
  text = null;
  if (treeSanitizer is _TrustedHtmlTreeSanitizer) {
    _innerHtml = html;
  } else {
    append(createFragment(html,
        validator: validator, treeSanitizer: treeSanitizer));
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/setInnerHtml.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/templateelement/setinnerhtml.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

setInnerHtml method
===================

::: {.section .multi-line-signature}
void setInnerHtml(

1.  [String](../../dart-core/string-class)? html,
2.  {[NodeValidator](../nodevalidator-class)? validator,
3.  [NodeTreeSanitizer](../nodetreesanitizer-class)? treeSanitizer}

)

::: {.features}
override
:::
:::

An override to place the contents into content rather than as child
nodes.

See also:

-   [w3c.github.io/DOM-Parsing/\#the-innerhtml-mixin](https://w3c.github.io/DOM-Parsing/#the-innerhtml-mixin)

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setInnerHtml(String? html,
    {NodeValidator? validator, NodeTreeSanitizer? treeSanitizer}) {
  text = null;
  content!.nodes.clear();
  var fragment = createFragment(html,
      validator: validator, treeSanitizer: treeSanitizer);

  content!.append(fragment);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TemplateElement/setInnerHtml.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/documentfragment/setinnerhtml.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

setInnerHtml method
===================

::: {.section .multi-line-signature}
void setInnerHtml(

1.  [String](../../dart-core/string-class)? html,
2.  {[NodeValidator](../nodevalidator-class)? validator,
3.  [NodeTreeSanitizer](../nodetreesanitizer-class)? treeSanitizer}

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void setInnerHtml(String? html,
    {NodeValidator? validator, NodeTreeSanitizer? treeSanitizer}) {
  this.nodes.clear();
  append(document.body!.createFragment(html,
      validator: validator, treeSanitizer: treeSanitizer));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/DocumentFragment/setInnerHtml.html>
:::
