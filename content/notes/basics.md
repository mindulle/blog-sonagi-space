---
title: React rendering basics
date: 2021-06-12
category: dev
tags: [react, rendering, performance, virtual-dom]
description: Take a deeper dive into React's rendering process and understand the basics behind the popular JavaScript framework.
author: chalarangelo
---

## React rendering 시리즈

- React rendering basics (이 문서)
- [[optimization|React rendering optimization]]
- [[State|React rendering state]]

## Rendering introduction

**Rendering** is the process during which React moves down the component tree starting at the root, looking for all the components flagged for update, asking them to describe their desired UI structure based on the current combination of `props` and `state`. For each flagged component, React will ca
ll its `render()` method (for class components) or `FunctionComponent()` (for function components), and save the output produced after converting the JSX result into a plain JS object, using `React.cr
eateElement()`.

After collecting the render output from the entire component tree, React will diff the new tree (the **virtual DOM**) with the current DOM tree and collect the list of changes that need to be made to the DOM to produce the desired UI structure. After this process, known as **reconciliation**, React 
applies all the calculated changes to the DOM.

## Render and commit phases

Conceptually, this work is divided into two phases:

- **Render phase**: rendering components, calculating changes
- **Commit phase**: applying the changes to the DOM

After the **commit phase** is complete, React will run `componentDidMount` and `componentDidUpdate` lifecycle methods, as well as `useLayoutEffect()` and, after a short timeout, `useEffect()` hooks.

Two key takeaways here are the following:

- Rendering is not the same as updating the DOM
- A component may be rendered without any visible changes

## Rendering reasons

After the initial render has completed, there are a few different things that will cause a re-render:

- `this.setState()` (class components)
- `this.forceUpdate()` (class components)
- `useState()` setters (function components)
- `useReducer()` dispatches (function components)
- `ReactDOM.render()` again (on the root component)

## Rendering behavior

React's default behavior is to **recursively render all child components inside of it when a parent component is rendered**. This means that it does not care if a component's `props` have changed - as long as the parent component rendered, its children will render unconditionally.

To put this another way, calling `setState()` in the root component without any other changes, will cause React to re-render every single component in the component tree. Most likely, most of the components will return the exact same render output as the last render, meaning React will not have to m
ake any changes to the DOM, but the rendering and diffing calculations will be performed regardless, taking time and effort.

**다음 문서**: [[optimization|React rendering optimization]]

---
## 상세 내용 (Merged from 20_Wiki/_concepts/Basics.md)

# Scheduling Basics

Scheduling involves assigning pods to worker nodes based on criteria such as resource availability, labels, affinity/anti-affinity rules, taints, and tolerations. Pods are the smallest deployable units in k8s, consisting of one or more containers that share the same network namespace. The scheduler 
is responsible for assigning pods to nodes, while labels are used for matching. Affinity and anti-affinity rules dictate how pods are scheduled based on their relationships with other pods or nodes. Q
oS is used to prioritize pod scheduling based on their resource requirements.

Visit the following resources to learn more:

- [@official@Kubernetes Scheduler](https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/)
- [@video@How Scheduling in Kubernetes Works](https://www.youtube.com/watch?v=0FvQR-0tK54)

## 관련 로드맵
- [[Kubernetes|kubernetes]]
