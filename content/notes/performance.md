[dart:html](../../dart-html/dart-html-library){._links-link}

performance property
====================

::: {#getter .section .multi-line-signature}
[Performance](../performance-class) performance

::: {.features}
\@SupportedBrowser(SupportedBrowser.CHROME),
\@SupportedBrowser(SupportedBrowser.FIREFOX),
\@SupportedBrowser(SupportedBrowser.IE)
:::
:::

Timing and navigation data for this window.

Other resources
---------------

-   [Measuring page load speed with navigation
    timeing](http://www.html5rocks.com/en/tutorials/webperformance/basics/)
    from HTML5Rocks.
-   [Navigation timing
    specification](http://www.w3.org/TR/navigation-timing/) from W3C.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@SupportedBrowser(SupportedBrowser.CHROME)
@SupportedBrowser(SupportedBrowser.FIREFOX)
@SupportedBrowser(SupportedBrowser.IE)
Performance get performance native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/performance.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/workerglobalscope/performance.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

performance property
====================

::: {#getter .section .multi-line-signature}
[WorkerPerformance](../workerperformance-class)? performance
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
WorkerPerformance? get performance native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WorkerGlobalScope/performance.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Performance.md)

# SQL Performance Tuning

SQL performance tuning involves optimizing SQL queries and database structures to improve the speed and efficiency of data retrieval and manipulation. This includes techniques like indexing, query optimization, and database configuration adjustments to reduce query execution time and minimize resour
ce consumption. The goal is to ensure that SQL queries run quickly and efficiently, providing timely and accurate data for analysis and reporting.

Visit the following resources to learn more:

- [@official@SQL Roadmap](https://roadmap.sh/sql)
- [@article@SQL Query Optimization: 15 Techniques for Better Performance](https://www.datacamp.com/blog/sql-query-optimization)
- [@article@Performance Tuning SQL Queries](https://mode.com/sql-tutorial/sql-performance-tuning)

## 관련 로드맵
- [[bi-analyst|bi-analyst]]
