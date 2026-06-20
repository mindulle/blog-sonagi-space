[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

unique property
===============

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class)? unique
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool? get unique native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/Index/unique.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Unique.md)

# Unique Constraint

A unique constraint ensures that all values in a column (or a group of columns) are different. It prevents duplicate entries, maintaining data integrity by enforcing uniqueness for the specified field(s). This is useful for fields like email addresses or usernames, where each record should have a di
stinct value.

Visit the following resources to learn more:

- [@article@SQL UNIQUE Constraint](https://www.w3schools.com/sql/sql_unique.asp)

## 관련 로드맵
- [[sql|sql]]
