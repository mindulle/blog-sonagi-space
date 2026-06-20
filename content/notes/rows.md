[dart:html](../../dart-html/dart-html-library){._links-link}

rows property
=============

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) rows
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get rows native;
```

::: {#setter .section .multi-line-signature}
void rows=([int](../../dart-core/int-class) value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set rows(int value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextAreaElement/rows.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/tablesectionelement/rows.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

rows property
=============

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[TableRowElement](../tablerowelement-class)\>
rows
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<TableRowElement> get rows => new _WrappedList<TableRowElement>(_rows);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TableSectionElement/rows.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/tableelement/rows.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

rows property
=============

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[TableRowElement](../tablerowelement-class)\>
rows
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<TableRowElement> get rows => new _WrappedList<TableRowElement>(_rows);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TableElement/rows.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Rows.md)

# Rows in PostgreSQL

A row in PostgreSQL represents a single, uniquely identifiable record with a specific set of fields in a table. Each row in a table is made up of one or more columns, where each column can store a specific type of data (e.g., integer, character, date, etc.). The structure of a table determines the s
chema of its rows, and each row in a table must adhere to this schema.

Learn more from the following resources:

- [@official@PostgreSQL - Rows](https://www.postgresql.org/docs/current/functions-comparisons.html)


## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
