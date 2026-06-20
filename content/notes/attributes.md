[dart:html](../../dart-html/dart-html-library){._links-link}

attributes property
===================

::: {#getter .section .multi-line-signature}
[Map](../../dart-core/map-class)\<[String](../../dart-core/string-class),
[String](../../dart-core/string-class)\> attributes
:::

All attributes on this element.

Any modifications to the attribute map will automatically be applied to
this element.

This only includes attributes which are not in a namespace (such as
\'xlink:href\'), additional attributes can be accessed via
[getNamespacedAttributes](getnamespacedattributes).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Map<String, String> get attributes => new _ElementAttributeMap(this);
```

::: {#setter .section .multi-line-signature}
void
attributes=([Map](../../dart-core/map-class)\<[String](../../dart-core/string-class),
[String](../../dart-core/string-class)\> value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set attributes(Map<String, String> value) {
  Map<String, String> attributes = this.attributes;
  attributes.clear();
  for (String key in value.keys) {
    attributes[key] = value[key]!;
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Element/attributes.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Attributes.md)

# Attributes in the Relational Model

Attributes in the relational model are the columns of a table, representing the properties or characteristics of the entity described by the table. Each attribute has a domain, defining the possible values it can take, such as integer, text, or date. Attributes play a crucial role in defining the sc
hema of a relation (table) and are used to store and manipulate data. They are fundamental in maintaining data integrity, enforcing constraints, and enabling the relational operations that form the ba
sis of SQL queries.

Learn more from the following resources:

- [@article@What is a Relational Model?](https://www.guru99.com/relational-data-model-dbms.html)
- [@article@Relational Model in DBMS](https://www.scaler.com/topics/dbms/relational-model-in-dbms/)

## 관련 로드맵
- [[postgresql-dba|postgresql-dba]]
