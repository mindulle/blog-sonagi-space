[dart:developer](../../dart-developer/dart-developer-library){._links-link}

begin method
============

::: {.section .multi-line-signature}
[Flow](../flow-class) begin(

1.  {[int](../../dart-core/int-class)? id}

)
:::

A \"begin\" Flow event.

When passed to a [Timeline](../timeline-class) method, generates a
\"begin\" Flow event. If `id` is not provided, an id that conflicts with
no other Dart-generated flow id\'s will be generated.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
static Flow begin({int? id}) {
  return new Flow._(_begin, id ?? _getNextAsyncId());
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-developer/Flow/begin.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/BEGIN.md)

# BEGIN

`BEGIN` is used in SQL to start a transaction, which is a sequence of one or more SQL operations that are executed as a single unit. A transaction ensures that all operations within it are completed successfully before any changes are committed to the database. If any part of the transaction fails, 
the `ROLLBACK` command can be used to undo all changes made during the transaction, maintaining the integrity of the database. Once all operations are successfully completed, the `COMMIT` command is u
sed to save the changes. Transactions are crucial for maintaining data consistency and handling errors effectively.

Visit the following resources to learn more:

- [@article@BEGIN...END Statement](https://infocenter.sybase.com/help/index.jsp?topic=/com.sybase.infocenter.dc00801.1510/html/iqrefso/BABFBJAB.htm)
- [@article@SQL 'BEGIN' & 'END' Statements](https://reintech.io/blog/understanding-sql-begin-end-statements-guide)

## 관련 로드맵
- [[sql|sql]]
