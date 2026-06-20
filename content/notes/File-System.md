---
title: File System
tags: [concept, ios]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/ios/content/file-system@_bkRbqVXKNCnRvEFCM6mN.md
---

# File System

The iOS file system provides a structured way for apps to store and access data directly on the device. Each app operates within its own sandbox, a dedicated directory structure that isolates the app's data for security and privacy. Within this sandbox, apps can create, read, write, and organize fil
es and directories. The system offers several key directories, including Documents for user-generated content, Library for app-specific data, and tmp for temporary files. File management in iOS is pri
marily handled through the FileManager class, which provides a comprehensive API for file and directory operations. When working with files, developers must consider factors such as data persistence across app updates, iCloud backup settings, and efficient management of storage space. The file syste
m is particularly useful for storing larger datasets, binary files, or data that doesn't fit well into structured storage systems like Core Data or User Defaults.

Learn more from the following resources:

- [@official@File System Basics](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html)
- [@official@About File System](https://developer.apple.com/documentation/foundation/file_system/about_apple_file_system/)
- [@official@FileManager](https://developer.apple.com/documentation/foundation/filemanager)

## 관련 로드맵
- [[ios|ios]]
