[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

Comment constructor
===================

::: {.section .multi-line-signature}
const Comment(

1.  [String](../../dart-core/string-class) text,
2.  [String](../../dart-core/string-class) trimmedText,
3.  [bool](../../dart-core/bool-class) isDocComment

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
const Comment(this.text, this.trimmedText, this.isDocComment);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/Comment/Comment.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/comment/comment.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

Comment constructor
===================

::: {.section .multi-line-signature}
Comment(

1.  \[[String](../../dart-core/string-class)? data\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
factory Comment([String? data]) {
  return JS('returns:Comment;depends:none;effects:none;new:true',
      '#.createComment(#)', document, data == null ? "" : data);
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Comment/Comment.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/_commons/seed/Syntax/React/Comment.md)
You can write a ==comment== in JSX by wrapping it in curly braces and using JavaScript's multi-line comment syntax.
<!--SR:!2024-05-21,1,230-->

```js
{/* This is a comment */}
```