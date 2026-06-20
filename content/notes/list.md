[dart:core](../../dart-core/dart-core-library){._links-link}

List\<E\> constructor
=====================

::: {.section .multi-line-signature}
<div>

1.  @[Deprecated](../deprecated-class)(\"Use a list literal, \[\], or
    the List.filled constructor instead\")

</div>

List\<E\>(

1.  \[[int](../int-class)? length\]

)
:::

Creates a list of the given length.

**NOTE**: This constructor cannot be used in null-safe code. Use
[List.filled](list.filled) to create a non-empty list. This requires a
fill value to initialize the list elements with. To create an empty
list, use `[]` for a growable list or `List.empty` for a fixed length
list (or where growability is determined at run-time).

The created list is fixed-length if `length` is provided.

``` {.language-dart data-language="dart"}
var fixedLengthList = List(3);
fixedLengthList.length;     // 3
fixedLengthList.length = 1; // Error
```

The list has length 0 and is growable if `length` is omitted.

``` {.language-dart data-language="dart"}
var growableList = List();
growableList.length; // 0;
growableList.length = 3;
```

To create a growable list with a given length, for a nullable element
type, just assign the length right after creation:

``` {.language-dart data-language="dart"}
List<SomeNullableType> growableList = []..length = 500;
```

For a non-nullable element type, an alternative is the following:

``` {.language-dart data-language="dart"}
List<int> growableList = List<int>.filled(500, 0, growable: true);
```

The `length` must not be negative or null, if it is provided.

If the element type is not nullable, `length` must not be greater than
zero.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
@Deprecated("Use a list literal, [], or the List.filled constructor instead")
external factory List([int? length]);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/List/List.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/networkinterface/list.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

list method
===========

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[List](../../dart-core/list-class)\<[NetworkInterface](../networkinterface-class)\>\>
list(

1.  {[bool](../../dart-core/bool-class) includeLoopback = false,
2.  [bool](../../dart-core/bool-class) includeLinkLocal = false,
3.  [InternetAddressType](../internetaddresstype-class) type =
    InternetAddressType.any}

)
:::

Query the system for [NetworkInterface](../networkinterface-class)s.

If `includeLoopback` is `true`, the returned list will include the
loopback device. Default is `false`.

If `includeLinkLocal` is `true`, the list of addresses of the returned
[NetworkInterface](../networkinterface-class)s, may include link local
addresses. Default is `false`.

If `type` is either
[InternetAddressType.IPv4](../internetaddresstype/ipv4-constant) or
[InternetAddressType.IPv6](../internetaddresstype/ipv6-constant) it will
only lookup addresses of the specified type. Default is
[InternetAddressType.any](../internetaddresstype/any-constant).

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
external static Future<List<NetworkInterface>> list(
    {bool includeLoopback = false,
    bool includeLinkLocal = false,
    InternetAddressType type = InternetAddressType.any});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/NetworkInterface/list.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-io/directory/list.md)
[dart:io](../../dart-io/dart-io-library){._links-link}

list method
===========

::: {.section .multi-line-signature}
[Stream](../../dart-async/stream-class)\<[FileSystemEntity](../filesystementity-class)\>
list(

1.  {[bool](../../dart-core/bool-class) recursive = false,
2.  [bool](../../dart-core/bool-class) followLinks = true}

)
:::

Lists the sub-directories and files of this
[Directory](../directory-class).

Optionally recurses into sub-directories.

If `followLinks` is `false`, then any symbolic links found are reported
as [Link](../link-class) objects, rather than as directories or files,
and are not recursed into.

If `followLinks` is `true`, then working links are reported as
directories or files, depending on what they point to, and links to
directories are recursed into f `recursive` is `true`.

Broken links are reported as [Link](../link-class) objects.

If a symbolic link makes a loop in the file system, then a recursive
listing will not follow a link twice in the same recursive descent, but
will report it as a [Link](../link-class) the second time it is seen.

The result is a stream of `FileSystemEntity` objects for the
directories, files, and links.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Stream<FileSystemEntity> list(
    {bool recursive = false, bool followLinks = true});
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-io/Directory/list.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-collection/linkedlistentry/list.md)
[dart:collection](../../dart-collection/dart-collection-library){._links-link}

list property
=============

::: {#getter .section .multi-line-signature}
[LinkedList](../linkedlist-class)\<E\>? list
:::

The linked list containing this element.

The value is `null` if this entry is not currently in any list.

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
LinkedList<E>? get list => _list;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-collection/LinkedListEntry/list.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/inputelement/list.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

list property
=============

::: {#getter .section .multi-line-signature}
[HtmlElement](../htmlelement-class)? list

::: {.features}
override
:::
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
HtmlElement? get list native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/InputElement/list.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/rangeinputelementbase/list.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

list property
=============

::: {#getter .section .multi-line-signature}
[Element](../element-class)? list
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Element? get list;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/RangeInputElementBase/list.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/telephoneinputelement/list.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

list property
=============

::: {#getter .section .multi-line-signature}
[Element](../element-class)? list
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Element? get list;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TelephoneInputElement/list.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/searchinputelement/list.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

list property
=============

::: {#getter .section .multi-line-signature}
[Element](../element-class)? list
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Element? get list;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/SearchInputElement/list.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/emailinputelement/list.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

list property
=============

::: {#getter .section .multi-line-signature}
[Element](../element-class)? list
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Element? get list;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/EmailInputElement/list.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/textinputelement/list.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

list property
=============

::: {#getter .section .multi-line-signature}
[Element](../element-class)? list
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Element? get list;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/TextInputElement/list.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/urlinputelement/list.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

list property
=============

::: {#getter .section .multi-line-signature}
[Element](../element-class)? list
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Element? get list;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/UrlInputElement/list.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/list.md)

# list

The terraform list command is used to display a list of resources within the Terraform state. It provides a quick overview of all the resources currently being managed by Terraform in your configuration. This command is particularly useful when working with large or complex infrastructures, allowing
 developers to quickly see what resources are under Terraform's control. The output includes the resource type and name for each managed resource, making it easy to identify specific elements of your 
infrastructure. It's often used in conjunction with other state manipulation commands to verify the contents of the state or to identify resources for further inspection or modification.

Learn more from the following resources:

- [@official@Terraform State List](https://developer.hashicorp.com/terraform/cli/commands/state/list)


## 관련 로드맵
- [[Terraform|terraform]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/List.md)

# List

Lists define the layout of the page content or groups of elements stacking them vertically or horizontally.

- **Support any type of content:** Lists can be used in any context from page-level layout to managing offsets between granular components. hey should work with any component used inside.
- **Horizontal Stacking:** Lists can be used for inline elements and they have to manage how they’re stacked horizontally, including handling offsets between multiple rows of elements.
- **Divided Variant:** Lists with dividers are the best practice advised by many platform guidelines (especially on mobile).
- **Supports Actionable Content:** Sometimes lists are used for grouping tappable components, where the whole area of the list item should be clickable.


## 관련 로드맵
- [[design-system|design-system]]
