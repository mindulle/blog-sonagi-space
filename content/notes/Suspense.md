---
title: Suspense
tags: [concept, react]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/react/content/suspense@_F3WMxhzaK9F8_-zHDDMF.md
---

# Suspense

React Suspense is a feature in React that allows components to "suspend" rendering while they are waiting for something to happen, such as data to be fetched from an API or an image to be loaded. Suspense allows developers to create a more seamless user experience by rendering a placeholder or fallb
ack component while the component is waiting for the required data to be available.

Here is a general overview of how React Suspense works:

*   A component that uses Suspense wraps a component that may need to "suspend" rendering in a `Suspense` component.
*   The wrapped component throws a promise when it needs to suspend rendering.
*   The `Suspense` component catches the promise and renders a fallback component while the promise is pending.
*   When the promise resolves, the wrapped component is rendered with the required data.

Visit the following resources to learn more:

- [@official@React Suspense](https://react.dev/reference/react/Suspense)
- [@article@React Suspense - A complete guide](https://hygraph.com/blog/react-suspense)

## 관련 로드맵
- [[react|react]]


---
## 상세 내용 (Merged from 20_Wiki/Develop/_commons/seed/Concept/React/Purpose/Suspense.md)
Suspense is a component in React that lets you specify the fallback content to display while waiting for a component to load. It is used in conjunction with `lazy()` to lazily load components.

```js
import { lazy, Suspense } from 'react';

const LazyRoadmapRender = lazy(() => import('./RoadmapRender'));

export function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>Show</button>
      {show && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyRoadmapRender />
        </Suspense>
      )}
    </>
  );
}
```

Until the `RoadmapRender` component is loaded, the `Suspense` component will display the `Loading...` fallback content.