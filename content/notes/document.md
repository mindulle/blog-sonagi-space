[dart:html](../dart-html/dart-html-library){._links-link}

document top-level property
===========================

::: {#getter .section .multi-line-signature}
[HtmlDocument](htmldocument-class) document
:::

Root node for all content in a web page.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
HtmlDocument get document =>
    JS('returns:HtmlDocument;depends:none;effects:none;gvn:true', 'document');
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/document.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/document.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

document property
=================

::: {#getter .section .multi-line-signature}
[Document](../document-class) document
:::

The newest document in this window.

Other resources
---------------

-   [Loading web
    pages](https://html.spec.whatwg.org/multipage/browsers.html) from
    WHATWG.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Document get document => JS('Document', '#.document', this);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/document.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/document/document.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

Document constructor
====================

::: {.section .multi-line-signature}
Document()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
factory Document() {
  return Document._create_1();
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Document/Document.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Document.md)

# Document

\*\*Document Databases are a type of No-SQL databases that store data in JSON, BSON, or XML formats, allowing for flexible, semi-structured and hierarchical data structures. These databases are characterized by their dynamic schema, scalability through distribution, and ability to intuitively map da
ta models to application code. Popular examples include MongoDB, which allows for easy storage and retrieval of varied data types without requiring a rigid, predefined schema.

Visit the following resources to learn more:

- [@article@What is a Document Database?](https://www.mongodb.com/resources/basics/databases/document-databases)
- [@article@HDocument-oriented database](https://en.wikipedia.org/wiki/Document-oriented_database)

## 관련 로드맵
- [[data-engineer|data-engineer]]
