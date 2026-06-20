---
title: Error Boundaries
tags: [concept, react]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/react/content/error-boundaries@gMHMjsh0i8paLZUH5mDX3.md
---

# Error Boundaries

In the past, JavaScript errors inside components used to corrupt React’s internal state and cause it to emit cryptic errors on next renders. These errors were always caused by an earlier error in the application code, but React did not provide a way to handle them gracefully in components, and could
 not recover from them.

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tr
ee below them.

Visit the following resources to learn more:

- [@official@Error Boundaries in React](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)

## 관련 로드맵
- [[react|react]]


---
## 상세 내용 (Merged from 20_Wiki/Develop/_commons/seed/Syntax/React/Error boundaries.md)
Error boundaries are special React components that catch JavaScript errors during rendering, in lifecycle methods, and during the constructor of whole tree below them. They are used to handle errors gracefully by displaying a fallback UI and preventing the entire application from crashing due to unh
andled errors.

You can use [react-error-boundary](https://npm.im/react-error-boundary) package to create error boundaries in your application. It provides a `ErrorBoundary` component that you can wrap around any component that might throw an error. The `ErrorBoundary` component takes a `FallbackComponent` prop tha
t is used to render a fallback UI when an error occurs.

## Capturing Errors

```js
import { ErrorBoundary } from 'react-error-boundary';
import { FetchData } from './FetchData';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <FetchData />
    </ErrorBoundary>
  );
}
```

This `FetchData` component will throw an error when it is rendered, and the `ErrorBoundary` component will catch the error and display the `ErrorFallback` component.

```js
export function FetchData() {
  throw new Error('Error fetching data');
  return <p>This will never render</p>;
}
```