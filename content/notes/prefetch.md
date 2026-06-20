# Prefetch

Prefetch (`<link rel="prefetch">`) is a browser optimization which
allows us to fetch resources that may be needed for subsequent routes or pages before they are needed. Prefetching can be achieved in a few ways. It can be done declaratively in HTML (such as in the example below), via a HTTP Header (`Link: </js/chat-widget.js>; rel=prefetch`), [Service Workers](htt
ps://googlechrome.github.io/samples/service-worker/prefetch/)
or via more custom means such as through Webpack.

```html
<link rel="prefetch" href="/pages/next-page.html" />
<link rel="prefetch" href="/js/emoji-picker.js" />
```

## Prefetch

In the examples showing how we can import modules based on visibility or interaction, we saw that there was often some delay between clicking on the button in order to toggle the component, and showing the actual component on the screen. This happened, since the module still had to get requested and
 loaded when the user clicked on the button!

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056520/patterns.dev/prefetch.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056520/patterns.dev/prefetch.jpg"><source src="https://res.clo
udinary.com/ddxwdqwkr/video/upload/f_auto/v1609056520/patterns.dev/prefetch.mp4" type="video/mp4"></video>

In many cases, we know that users will request certain resources soon after the initial render of a page. Although they may not visible instantly, thus shouldn't be included in the initial bundle, it would be great to reduce the loading time as much as possible to give a better user experience!

Components or resources that we know are likely to be used at some point in the application can be **prefetched**. We can let Webpack know that certain bundles need to be prefetched, by adding a [magic comment](https://webpack.js.org/api/module-methods/#magic-comments) to the import statement: `/* w
ebpackPrefetch: true */`.

```js
const EmojiPicker = import(/* webpackPrefetch: true */ "./EmojiPicker");
```

<iframe src="https://codesandbox.io/p/devbox/prefetch-trni2?embed=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="prefetch"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

After building the application, we can see that the `EmojiPicker` will be prefetched.

```js
 Asset                             Size       Chunks                          Chunk Names
    emoji-picker.bundle.js         1.49 KiB   emoji-picker [emitted]          emoji-picker
    vendors~emoji-picker.bundle.js 171 KiB    vendors~emoji-picker [emitted]  vendors~emoji-picker
    main.bundle.js                 1.34 MiB   main  [emitted]                 main

Entrypoint main = main.bundle.js
(prefetch: vendors~emoji-picker.bundle.js emoji-picker.bundle.js)
```

The actual output is visible as a `link` tag with `rel="prefetch"` in
the `head` of our document.

```html
<link rel="prefetch" href="emoji-picker.bundle.js" as="script" />
<link rel="prefetch" href="vendors~emoji-picker.bundle.js" as="script" />
```

Modules that are prefetched are requested and loaded by the browser even **before the user requested the resource**. When the browser is idle and calculates that it's got enough bandwidth, it will make a request in order to load the resource, and cache it. Having the resource cached can reduce the l
oading time significantly, as we don't have to wait for the request to finish after the user has clicked the button. It can simply get the loaded resource from cache.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056521/patterns.dev/prefetch-3.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056521/patterns.dev/prefetch-3.jpg"><source src="https://res
.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056521/patterns.dev/prefetch-3.mp4" type="video/mp4"></video>

Although prefetching is a great way to optimize the loading time, don't overdo it. If the user ended up never requesting the `EmojiPicker` component, we unnecessarily loaded the resource. This could potentially cost a user money, or slow down the application. Only prefetch the necessary resources.

You may find the below resources on prefetching helpful:

- [Preload, prefetch and priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)
- [Faster navigations with predictive prefetching](https://web.dev/predictive-prefetching/)
- [Prefetching heuristics](https://blog.mgechev.com/2021/02/07/prefetching-strategies-heuristics-faster-web-apps/)
- [What not to prefetch](https://addyosmani.com/blog/what-not-to-prefetch-prerender/)


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/html/attributes/rel/prefetch.md)
rel=prefetch
============

The `prefetch` keyword for the [`rel`](../../element/link#rel) attribute
of the [`<link>`](../../element/link) element provides a hint to
browsers that the user is likely to need the target resource for future
navigations, and therefore the browser can likely improve the user
experience by preemptively fetching and caching the resource.
`<link rel="prefetch">` is used for same-site navigation resources, or
for subresources used by same-site pages.

The result is kept in the HTTP cache on disk. Because of this it is
useful for prefetching subresources, even if they are not used by the
current page. You could also use it to prefetch the next document the
user will likely visit on the site. However, as a result you need to be
careful with headers --- for example certain
[Cache-Control](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
headers could block prefetching (for example `no-cache` or `no-store`).

**Note:** Because of such limitations, you are advised to use the
[Speculation Rules
API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API)
for document prefetches instead, where it is supported.

`<link rel="prefetch">` is functionally equivalent to a
[`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) call
with a `priority: "low"` option set on it, except that the former will
generally have an even lower priority, and it will have a
[`Sec-Purpose: prefetch`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Purpose)
header set on the request. Note that in general browsers will give
prefetch resources a lower priority than preload ones (e.g. requested
via [`<link rel="preload">`](preload)) --- the current page is more
important than the next.

The fetch request for a `prefetch` operation results in an HTTP request
that includes the HTTP header
[`Sec-Purpose: prefetch`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Purpose).
A server might use this header to change the cache timeouts for the
resources, or perform other special handling. The request will also
include the
[`Sec-Fetch-Dest`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Dest)
header with the value set to `empty`.

The
[`Accept`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept)
header in the request will match the value used for normal navigation
requests. This allows the browser to find the matching cached resources
following navigation.

Examples
--------

### Basic prefetch

[js]

```js
<link rel="prefetch" href="main.js" />
```

### Navigation and subresource prefetches

Prefetching can be used to fetch both HTML and sub-resources for a
possible next navigation. A common use case is to have a simple website
landing page that fetches more \"heavy-weight\" resources used by the
rest of the site.

[html]

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### The effects of cache partitioning

Many browsers now implement some form of [cache
partitioning](https://developer.chrome.com/en/blog/http-cache-partitioning/),
which makes `<link rel="prefetch">` useless for resources intended for
use by different top-level sites. This includes the main document when
navigating cross-site. So, for example, the following prefetch:

[html]

```html
<link rel="prefetch" href="https://news.example/article" />
```

Would not be accessible from `https://aggregator.example/`.

Specifications
--------------

  ----------------------------------------------------------------------------------------------------

Specification
  ----------------------------------------------------------------------------------------------------

  [HTML Standard\
  [\#
  link-type-prefetch]](https://html.spec.whatwg.org/multipage/links.html#link-type-prefetch)

  ----------------------------------------------------------------------------------------------------

Browser compatibility
---------------------

Desktop

Mobile

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

WebView Android

Chrome Android

Firefox for Android

Opera Android

Safari on IOS

Samsung Internet

`prefetch`

8Requires secure context

12Requires secure context

2Requires secure context

11

15Requires secure context

13.1

4.4Requires secure context

18Requires secure context

4Requires secure context

14Requires secure context

13.4

1.5Requires secure context

See also
--------

- [Speculative
    loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Speculative_loading)
    for a comparison of `<link rel="prefetch">` and other similar
    performance improvement features.

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/prefetch>>


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/frontend/performance/vanilla/prefetch.md)

# Prefetch

Prefetch (`<link rel="prefetch">`) is a browser optimization which
allows us to fetch resources that may be needed for subsequent routes or pages before they are needed. Prefetching can be achieved in a few ways. It can be done declaratively in HTML (such as in the example below), via a HTTP Header (`Link: </js/chat-widget.js>; rel=prefetch`), [Service Workers](htt
ps://googlechrome.github.io/samples/service-worker/prefetch/)
or via more custom means such as through Webpack.

```html
<link rel="prefetch" href="/pages/next-page.html" />
<link rel="prefetch" href="/js/emoji-picker.js" />
```

## Prefetch

In the examples showing how we can import modules based on visibility or interaction, we saw that there was often some delay between clicking on the button in order to toggle the component, and showing the actual component on the screen. This happened, since the module still had to get requested and
 loaded when the user clicked on the button!

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056520/patterns.dev/prefetch.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056520/patterns.dev/prefetch.jpg"><source src="https://res.clo
udinary.com/ddxwdqwkr/video/upload/f_auto/v1609056520/patterns.dev/prefetch.mp4" type="video/mp4"></video>

In many cases, we know that users will request certain resources soon after the initial render of a page. Although they may not visible instantly, thus shouldn't be included in the initial bundle, it would be great to reduce the loading time as much as possible to give a better user experience!

Components or resources that we know are likely to be used at some point in the application can be **prefetched**. We can let Webpack know that certain bundles need to be prefetched, by adding a [magic comment](https://webpack.js.org/api/module-methods/#magic-comments) to the import statement: `/* w
ebpackPrefetch: true */`.

```js
const EmojiPicker = import(/* webpackPrefetch: true */ "./EmojiPicker");
```

<iframe src="https://codesandbox.io/p/devbox/prefetch-trni2?embed=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="prefetch"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

After building the application, we can see that the `EmojiPicker` will be prefetched.

```js
 Asset                             Size       Chunks                          Chunk Names
    emoji-picker.bundle.js         1.49 KiB   emoji-picker [emitted]          emoji-picker
    vendors~emoji-picker.bundle.js 171 KiB    vendors~emoji-picker [emitted]  vendors~emoji-picker
    main.bundle.js                 1.34 MiB   main  [emitted]                 main

Entrypoint main = main.bundle.js
(prefetch: vendors~emoji-picker.bundle.js emoji-picker.bundle.js)
```

The actual output is visible as a `link` tag with `rel="prefetch"` in
the `head` of our document.

```html
<link rel="prefetch" href="emoji-picker.bundle.js" as="script" />
<link rel="prefetch" href="vendors~emoji-picker.bundle.js" as="script" />
```

Modules that are prefetched are requested and loaded by the browser even **before the user requested the resource**. When the browser is idle and calculates that it's got enough bandwidth, it will make a request in order to load the resource, and cache it. Having the resource cached can reduce the l
oading time significantly, as we don't have to wait for the request to finish after the user has clicked the button. It can simply get the loaded resource from cache.

<video width="100%" src="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056521/patterns.dev/prefetch-3.mp4" autoplay="" controls="" playsinline="" loop="" poster="https://res.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056521/patterns.dev/prefetch-3.jpg"><source src="https://res
.cloudinary.com/ddxwdqwkr/video/upload/f_auto/v1609056521/patterns.dev/prefetch-3.mp4" type="video/mp4"></video>

Although prefetching is a great way to optimize the loading time, don't overdo it. If the user ended up never requesting the `EmojiPicker` component, we unnecessarily loaded the resource. This could potentially cost a user money, or slow down the application. Only prefetch the necessary resources.

You may find the below resources on prefetching helpful:

- [Preload, prefetch and priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)
- [Faster navigations with predictive prefetching](https://web.dev/predictive-prefetching/)
- [Prefetching heuristics](https://blog.mgechev.com/2021/02/07/prefetching-strategies-heuristics-faster-web-apps/)
- [What not to prefetch](https://addyosmani.com/blog/what-not-to-prefetch-prerender/)
