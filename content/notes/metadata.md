[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

metadata property
=================

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[InstanceMirror](../instancemirror-class)\>
metadata
:::

A list of the metadata associated with this declaration.

Let *D* be the declaration this mirror reflects. If *D* is decorated
with annotations *A1, \..., An* where *n \> 0*, then for each annotation
*Ai* associated with *D, 1 \<= i \<= n*, let *ci* be the constant object
specified by *Ai*. Then this method returns a list whose members are
instance mirrors on *c1, \..., cn*. If no annotations are associated
with *D*, then an empty list is returned.

If evaluating any of *c1, \..., cn* would cause a compilation error the
effect is the same as if a non-reflective compilation error had been
encountered.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<InstanceMirror> get metadata;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/DeclarationMirror/metadata.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/mediasession/metadata.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

metadata property
=================

::: {#getter .section .multi-line-signature}
[MediaMetadata](../mediametadata-class)? metadata
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
MediaMetadata? get metadata native;
```

::: {#setter .section .multi-line-signature}
void metadata=([MediaMetadata](../mediametadata-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set metadata(MediaMetadata? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/MediaSession/metadata.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-mirrors/librarydependencymirror/metadata.md)
[dart:mirrors](../../dart-mirrors/dart-mirrors-library){._links-link}

metadata property
=================

::: {#getter .section .multi-line-signature}
[List](../../dart-core/list-class)\<[InstanceMirror](../instancemirror-class)\>
metadata
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<InstanceMirror> get metadata;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-mirrors/LibraryDependencyMirror/metadata.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Metadata.md)

# Metadata

Metadata in Angular components refers to the configuration information that is used to define and configure the behavior of a component. It is specified using decorators, which are functions that add metadata to classes, properties, and methods.

Visit the following resources to learn more:

- [@official@Component API](https://angular.dev/api/core/Component)


## 관련 로드맵
- [[Angular|angular]]
