[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

count method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[int](../../dart-core/int-class)\>
count(

1.  \[dynamic key\_OR\_range\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<int> count([key_OR_range]) {
  try {
    var request = _count(key_OR_range);
    return _completeRequest(request);
  } catch (e, stacktrace) {
    return new Future.error(e, stacktrace);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/ObjectStore/count.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-indexed_db/index/count.md)
[dart:indexed\_db](../../dart-indexed_db/dart-indexed_db-library){._links-link}

count method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[int](../../dart-core/int-class)\>
count(

1.  \[dynamic key\_OR\_range\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<int> count([key_OR_range]) {
  try {
    var request = _count(key_OR_range);
    return _completeRequest(request);
  } catch (e, stacktrace) {
    return new Future.error(e, stacktrace);
  }
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-indexed_db/Index/count.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/console/count.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

count method
============

::: {.section .multi-line-signature}
void count(

1.  \[[Object](../../dart-core/object-class)? arg\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
void count([Object? arg]) =>
    _isConsoleDefined ? JS('void', 'window.console.count(#)', arg) : null;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Console/count.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/count.md)

# count

The count meta-argument in Terraform allows you to specify the number of instances of a particular resource to create. By setting count to a numeric value, Terraform dynamically generates multiple instances of the resource, indexed from 0 to count-1. This is useful for managing infrastructure that r
equires multiple identical or similar resources, such as creating multiple virtual machines or storage buckets. Using count, you can conditionally create resources by setting the value based on variab
les or expressions, making your configurations more flexible and reducing redundancy. Each instance of the resource can be uniquely referenced using the count.index value, enabling more granular control and customization of each resource instance.

Note: You cannot delare count and for_each on the same resource.

Learn more from the following resources:

- [@official@Terraform Docs - count](https://developer.hashicorp.com/terraform/language/meta-arguments/count)
- [@article@Terraform by Example - count](https://www.terraformbyexample.com/count)
- [@video@Conditional blocks in Terraform using count](https://www.youtube.com/watch?v=RVoIqWkN_gI)


## 관련 로드맵
- [[Terraform|terraform]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/COUNT.md)

# Count

The Count function in data analysis is one of the most fundamental tasks that a Data Analyst gets to handle. This function is a simple yet powerful tool that aids in understanding the underlying data by providing the count or frequency of occurrences of unique elements in data sets. The relevance of
 count comes into play in various scenarios – from understanding the popularity of a certain category to analyzing customer activity, and much more. This basic function offers crucial insights into da
ta, making it an essential skill in the toolkit of any data analyst.

Visit the following resources to learn more:

- [@article@COUNT Function](https://support.microsoft.com/en-gb/office/count-function-a59cd7fc-b623-4d93-87a4-d23bf411294c)
- [@video@How to Count Cells in Microsoft Excel (COUNT, COUNTA, COUNTIF, COUNTIFS Functions)](https://www.youtube.com/watch?v=5RFLncJuMng)

## 관련 로드맵
- [[data-analyst|data-analyst]]
