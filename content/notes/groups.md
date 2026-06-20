[dart:core](../../dart-core/dart-core-library){._links-link}

groups method
=============

::: {.section .multi-line-signature}
[List](../list-class)\<[String](../string-class)?\> groups(

1.  [List](../list-class)\<[int](../int-class)\> groupIndices

)
:::

A list of the groups with the given indices.

The list contains the strings returned by [group](group) for each index
in `groupIndices`.

``` {.language-dart data-language="dart"}
final string = '[00:13.37] This is a chat message.';
final regExp = RegExp(r'^\[\s*(\d+):(\d+)\.(\d+)\]\s*(.*)$');
final match = regExp.firstMatch(string)!;
final message = jsonEncode(match.groups([1, 2, 3, 4]));
// ['00','13','37','This is a chat message.']
```

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
List<String?> groups(List<int> groupIndices);
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-core/Match/groups.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Groups.md)

# Groups

Xcode groups are organizational tools used to structure and manage files within a project. They provide a logical hierarchy for arranging source code, resources, and other project files without affecting the actual file system structure. Key aspects of Xcode groups include:

1. Visual organization: Groups appear as folders in the Project Navigator, helping developers categorize and locate files easily.
2. Flexible structure: Files can be organized into groups based on functionality, feature, or any other logical division.
3. No impact on build: Grouping doesn't affect how Xcode compiles or packages the application.
4. Color coding: Groups can be color-coded for quick visual identification.
5. Nested groups: Support for subgroups allows for more detailed organization.
6. References vs. folders: Groups can be created as simple references or as folder references that mirror the file system.
7. Drag-and-drop management: Easy reorganization of files and groups within the Project Navigator.

Using groups effectively helps maintain clean, organized projects, especially as they grow in size and complexity.

Learn more from the following resources:

- [@official@Managing files and folders in your Xcode project](https://developer.apple.com/documentation/xcode/managing-files-and-folders-in-your-xcode-project)


## 관련 로드맵
- [[ios|ios]]
