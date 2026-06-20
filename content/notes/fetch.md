[dart:html](../../dart-html/dart-html-library){._links-link}

fetch method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class)\<[BackgroundFetchRegistration](../backgroundfetchregistration-class)\>
fetch(

1.  [String](../../dart-core/string-class) id,
2.  [Object](../../dart-core/object-class) requests,
3.  \[[Map](../../dart-core/map-class)? options\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future<BackgroundFetchRegistration> fetch(String id, Object requests,
    [Map? options]) {
  var options_dict = null;
  if (options != null) {
    options_dict = convertDartToNative_Dictionary(options);
  }
  return promiseToFuture<BackgroundFetchRegistration>(JS(
      "creates:BackgroundFetchRegistration;",
      "#.fetch(#, #, #)",
      this,
      id,
      requests,
      options_dict));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/BackgroundFetchManager/fetch.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/workerglobalscope/fetch.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

fetch method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) fetch(

1.  dynamic input,
2.  \[[Map](../../dart-core/map-class)? init\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future fetch(/*RequestInfo*/ input, [Map? init]) {
  var init_dict = null;
  if (init != null) {
    init_dict = convertDartToNative_Dictionary(init);
  }
  return promiseToFuture(
      JS("creates:_Response;", "#.fetch(#, #)", this, input, init_dict));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/WorkerGlobalScope/fetch.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/dart2/dart-html/window/fetch.md)
[dart:html](../../dart-html/dart-html-library){._links-link}

fetch method
============

::: {.section .multi-line-signature}
[Future](../../dart-async/future-class) fetch(

1.  dynamic input,
2.  \[[Map](../../dart-core/map-class)? init\]

)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
Future fetch(/*RequestInfo*/ input, [Map? init]) {
  var init_dict = null;
  if (init != null) {
    init_dict = convertDartToNative_Dictionary(init);
  }
  return promiseToFuture(
      JS("creates:_Response;", "#.fetch(#, #)", this, input, init_dict));
}
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/Window/fetch.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/fetch.md)

# fetch

The `fetch()` method in JavaScript is used to request to the server and load the information on the webpages. The request can be of any APIs that return the data of the format JSON or XML. This method returns a promise.

Visit the following resources to learn more:

- [@official@MDN - Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [@official@NodeJS globals: fetch](https://nodejs.org/api/globals.html#fetch)
- [@official@MDN - Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [@article@freeCodeCamp on avoiding callback hell](https://www.freecodecamp.org/news/how-to-deal-with-nested-callbacks-and-avoid-callback-hell-1bc8dc4a2012/)

## 관련 로드맵
- [[nodejs|nodejs]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Fetch.md)

# Fetch

The `fetch()` method in JavaScript is used to request to the server and load the information on the webpages. The request can be of any APIs that return the data of the format JSON or XML. This method returns a promise.

Visit the following resources to learn more:

- [@article@Fetch MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [@article@Network request - Fetch](https://javascript.info/fetch)
- [@article@Abort a fetch request manually in JavaScript](https://www.amitmerchant.com/abort-fetch-request-manually-in-javascript/)


## 관련 로드맵
- [[JavaScript|javascript]]
