[dart:html](../../dart-html/dart-html-library){._links-link}

commit method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) commit()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future commit() => promiseToFuture(JS("", "#.commit()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/OffscreenCanvasRenderingContext2D/commit.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_gl/renderingcontext2/commit.md)
[dart:web\_gl](../../dart-web_gl/dart-web_gl-library){._links-link}

commit method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) commit()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future commit() => promiseToFuture(JS("", "#.commit()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_gl/RenderingContext2/commit.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-web_gl/renderingcontext/commit.md)
[dart:web\_gl](../../dart-web_gl/dart-web_gl-library){._links-link}

commit method
=============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) commit()
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future commit() => promiseToFuture(JS("", "#.commit()", this));
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_gl/RenderingContext/commit.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/COMMIT.md)

# COMMIT

COMMIT is an SQL command that saves all changes made during a transaction to the database. Until a COMMIT command is issued, all modifications within a transaction are only temporary and visible to the current session. Once COMMIT is executed, the changes become permanent and visible to other users 
and sessions. This ensures data consistency and durability.

Visit the following resources to learn more:

- [@article@SQL COMMIT and ROLLBACK](https://www.digitalocean.com/community/tutorials/sql-commit-sql-rollback)

## 관련 로드맵
- [[sql|sql]]
