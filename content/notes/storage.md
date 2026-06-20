[dart:html](../../dart-html/dart-html-library){._links-link}

storage property
================

::: {#getter .section .multi-line-signature}
[StorageManager](../storagemanager-class)? storage
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
StorageManager? get storage native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Navigator/storage.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Storage.md)

# Storage

React Native provides a few ways to persist data locally in the app. Here's a brief summary of the storage options available:

*   Async Storage
*   Expo Secure Store
*   Expo File System
*   Expo SQLite

Choose the storage option that best fits your app's requirements and use cases. Keep in mind that AsyncStorage and SecureStorage are more suited for small-scale data storage, while Realm and SQLite support more complex storage and querying needs.

Visit the following resources to learn more:

- [@official@AsyncStorage](https://reactnative.dev/docs/asyncstorage)
- [@article@Best Data Storage Option for React Native Apps](https://dev.to/ammarahmed/best-data-storage-option-for-react-native-apps-42k)

## 관련 로드맵
- [[React Native|react-native]]
