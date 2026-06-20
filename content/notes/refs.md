---
title: "Refs"
date: 2025-10-28
tags: [react, concept, dom, component]
category: dev
description: "Refs are used to get reference to a DOM node or an instance of a component. They help to access the DOM nodes or React elements created in the render ..."
---

Refs are used to get reference to a DOM node or an instance of a component. They help to access the DOM nodes or React elements created in the render method. You can also use refs When you want a component to “remember” some information, but you don’t want that information to trigger new renders, yo
u can use a ref.

---
## 상세 내용 (Merged from 20_Wiki/_concepts/Refs.md)

# Refs

Refs provide a way to access DOM nodes or React elements created in the render method.

In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could 
be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.

Visit the following resources to learn more:

- [@official@Referencing Values with Refs](https://react.dev/learn/referencing-values-with-refs)
- [@official@Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs)
- [@article@Examples of using refs in React](https://www.robinwieruch.de/react-ref/)
- [@article@The Complete Guide to useRef() and Refs in React](https://dmitripavlutin.com/react-useref-guide/)
- [@article@What Exactly Are Refs? - React - CodeGuage](https://www.codeguage.com/courses/react/refs)
- [@video@Learn useRef in 11 Minutes - Web Dev Simplified](https://www.youtube.com/watch?v=t2ypzz6gJm0)

## 관련 로드맵
- [[react|react]]


---
## 상세 내용 (Merged from 20_Wiki/Develop/_commons/seed/Concept/React/Refs.md)
Refs are used to get reference to a DOM node or an instance of a component. They help to access the DOM nodes or React elements created in the render method. You can also use refs When you want a component to “remember” some information, but you don’t want that information to trigger new renders, yo
u can use a ref.