[dart:html](../../dart-html/dart-html-library){._links-link}

modal property
==============

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class)? modal
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool? get modal native;
```

::: {#setter .section .multi-line-signature}
void modal=([bool](../../dart-core/bool-class)? value)
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
set modal(bool? value) native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/AccessibleNode/modal.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Modal.md)

# Modal

Modals are containers appearing in front of the main content to provide critical information or an actionable piece of content.

- **Supports any type of Content:** Like any other container, modals can be used in different scenarios and you should be able to use it with any other component inside.
- **Supplementary Actions:** Since content in the modal may be actionable, it’s important to have an area for action elements. This area is usually located at the bottom of the modal container.
- **Close Action:** Modals should provide a clear way to be closed as they’re blocking content when open. This may be either a separate close button or one of the supplementary actions.
- **Information Structure:** Even though modals can be used as an empty container for the content, they need a defined information structure to provide a holistic experience. It may include defining how titles and subtitles look by default or where an action element’s area is.
- **Keyboard Navigation Support:** It should be possible to close a modal by pressing the Esc key and all the focusable elements inside the modal container should be accessible with keyboard navigation.
- **Focus Trapping:** Once a modal is opened, the focus should be moved to the first element inside the modal and should be looped within the modal container. Closing the modal should return the focus to the last focused element on the page.


## 관련 로드맵
- [[design-system|design-system]]
