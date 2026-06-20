[dart:async](../../dart-async/dart-async-library){._links-link}

fork method
===========

::: {.section .multi-line-signature}
[Zone](../zone-class) fork(

1.  {[ZoneSpecification](../zonespecification-class)? specification,
2.  [Map](../../dart-core/map-class)\<[Object](../../dart-core/object-class)?,
    [Object](../../dart-core/object-class)?\>? zoneValues}

)
:::

Creates a new zone as a child zone of this zone.

The new zone uses the closures in the given `specification` to override
the current\'s zone behavior. All specification entries that are `null`
inherit the behavior from the parent zone (`this`).

The new zone inherits the stored values (accessed through [operator
\[\]](operator_get)) of this zone and updates them with values from
`zoneValues`, which either adds new values or overrides existing ones.

Note that the fork operation is interceptable. A zone can thus change
the zone specification (or zone values), giving the forking zone full
control over the child zone.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Zone fork(
    {ZoneSpecification? specification, Map<Object?, Object?>? zoneValues});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/Zone/fork.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonedelegate/fork.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

fork method
===========

::: {.section .multi-line-signature}
[Zone](../zone-class) fork(

1.  [Zone](../zone-class) zone,
2.  [ZoneSpecification](../zonespecification-class)? specification,
3.  [Map](../../dart-core/map-class)? zoneValues

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Zone fork(Zone zone, ZoneSpecification? specification, Map? zoneValues);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneDelegate/fork.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-async/zonespecification/fork.md)
[dart:async](../../dart-async/dart-async-library){._links-link}

fork property
=============

::: {#getter .section .multi-line-signature}
[ForkHandler](../forkhandler)? fork
:::

A custom [Zone.handleUncaughtError](../zone/handleuncaughterror)
implementation for a new zone.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
ForkHandler? get fork;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-async/ZoneSpecification/fork.html>
:::
