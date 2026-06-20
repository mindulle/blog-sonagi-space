[dart:core](../dart-core/dart-core-library){._links-link}

bool class
==========

The reserved words `true` and `false` denote objects that are the only
two instances of this class.

It is a compile-time error for a class to attempt to extend or implement
bool.

Constructors
------------

[bool.fromEnvironment](bool/bool.fromenvironment)([String](string-class)
name, {[bool](bool-class) defaultValue = false})

::: {.constructor-modifier .features}
const
:::

::: {.constructor-modifier .features}
factory
:::

Returns the boolean value of the environment declaration `name`.

[bool.hasEnvironment](bool/bool.hasenvironment)([String](string-class)
name)

::: {.constructor-modifier .features}
const
:::

::: {.constructor-modifier .features}
factory
:::

Whether there is an environment declaration `name`.

Properties {#instance-properties}
----------

[hashCode](bool/hashcode) → [int](int-class)

::: {.features}
read-only, override
:::

The hash code for this object.

[runtimeType](object/runtimetype) → [Type](type-class)

::: {.features}
read-only, inherited
:::

A representation of the runtime type of the object.

Methods {#instance-methods}
-------

[noSuchMethod](object/nosuchmethod)([Invocation](invocation-class)
invocation) → dynamic

::: {.features}
inherited
:::

Invoked when a non-existent method or property is accessed.

[toString](bool/tostring)() → [String](string-class)

::: {.features}
override
:::

Returns either `"true"` for `true` and `"false"` for `false`.

Operators
---------

[operator &](bool/operator_bitwise_and)([bool](bool-class) other) →
[bool](bool-class)

::: {.features}
\@Since(\"2.1\")
:::

The logical conjunction (\"and\") of this and `other`.

[operator ==](object/operator_equals)([Object](object-class) other) →
[bool](bool-class)

::: {.features}
inherited
:::

The equality operator.

[operator \^](bool/operator_bitwise_exclusive_or)([bool](bool-class)
other) → [bool](bool-class)

::: {.features}
\@Since(\"2.1\")
:::

The logical exclusive disjunction (\"exclusive or\") of this and
`other`.

[operator \|](bool/operator_bitwise_or)([bool](bool-class) other) →
[bool](bool-class)

::: {.features}
\@Since(\"2.1\")
:::

The logical disjunction (\"inclusive or\") of this and `other`.

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/bool-class.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-ffi/bool-class.md)
[dart:ffi](../dart-ffi/dart-ffi-library){._links-link}

Bool class
==========

Represents a native bool in C.

[Bool](bool-class) is not constructible in the Dart code and serves
purely as marker in type signatures.

Inheritance

:   -   [Object](../dart-core/object-class)
    -   [NativeType](nativetype-class)
    -   Bool

Annotations

:   -   \@Since(\'2.15\')

Constructors
------------

[Bool](bool/bool)()

::: {.constructor-modifier .features}
const
:::

Properties {#instance-properties}
----------

[hashCode](../dart-core/object/hashcode) → [int](../dart-core/int-class)

::: {.features}
read-only, inherited
:::

The hash code for this object.

[runtimeType](../dart-core/object/runtimetype) →
[Type](../dart-core/type-class)

::: {.features}
read-only, inherited
:::

A representation of the runtime type of the object.

Methods {#instance-methods}
-------

[noSuchMethod](../dart-core/object/nosuchmethod)([Invocation](../dart-core/invocation-class)
invocation) → dynamic

::: {.features}
inherited
:::

Invoked when a non-existent method or property is accessed.

[toString](../dart-core/object/tostring)() →
[String](../dart-core/string-class)

::: {.features}
inherited
:::

A string representation of this object.

Operators
---------

[operator
==](../dart-core/object/operator_equals)([Object](../dart-core/object-class)
other) → [bool](../dart-core/bool-class)

::: {.features}
inherited
:::

The equality operator.

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-ffi/Bool-class.html>
:::
