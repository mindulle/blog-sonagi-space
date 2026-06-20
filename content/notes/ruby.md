---
title: Ruby
tags: [roadmap, ruby]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/ruby
---

# Ruby

## 요약
ruby에 관한 로드맵 지식입니다. 각 세부 개념은 개별 문서로 관리됩니다.

## 주요 개념 (Atomic Notes)


## 관련 로드맵
- [[AI Agents|AI Agents]]
- [[ai-engineer|ai-engineer]]
- [[Python|python]]
- [[JavaScript|javascript]]


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Ruby.md)

# Ruby

Ruby is a high-level, object-oriented language known for simplicity, productivity, and elegant syntax. Emphasizes developer happiness and supports multiple paradigms. Famous for Ruby on Rails framework enabling rapid web application development. Popular for web development, scripting, and prototypin
g.

Visit the following resources to learn more:

- [@article@Ruby Website](https://www.ruby-lang.org/en/)
- [@article@Learn Ruby in 20 minutes](https://www.ruby-lang.org/en/documentation/quickstart/)
- [@article@Ruby, An Introduction to a Programmer’s Best Friend](https://thenewstack.io/ruby-a-programmers-best-friend/)
- [@video@Ruby Comprehensive courses](https://www.youtube.com/playlist?list=PL_EzhIKp343lBMH4UuklrMRL_WkilGoXe)
- [@feed@Explore top posts about Ruby](https://app.daily.dev/tags/ruby?ref=roadmapsh)

## 관련 로드맵
- [[backend|backend]]


---
## 상세 내용 (Merged from 20_Wiki/Develop/References/html/element/ruby.md)
\<ruby\>: The Ruby Annotation element
=====================================

The `<ruby>` [HTML](../index) element represents small annotations that
are rendered above, below, or next to base text, usually used for
showing the pronunciation of East Asian characters. It can also be used
for annotating other kinds of text, but this usage is less common.

The term *ruby* originated as [a unit of measurement used by
typesetters](https://en.wikipedia.org/wiki/Agate_(typography)),
representing the smallest size that text can be printed on newsprint
while remaining legible.

Try it
------

  --------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------
  [Content categories](../content_categories)   [Flow content](../content_categories#flow_content), [phrasing content](../content_categories#phrasing_content), palpable content.
  Permitted content                             [Phrasing content](../content_categories#phrasing_content).
  Tag omission                                  None, both the starting and ending tag are mandatory.
  Permitted parents                             Any element that accepts [phrasing content](../content_categories#phrasing_content).
  Implicit ARIA role                            [No corresponding role](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role)
  Permitted ARIA roles                          Any
  DOM interface                                 [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
  --------------------------------------------- -----------------------------------------------------------------------------------------------------------------------------------

Attributes
----------

This element only includes the [](_Resources/Markup%20And%20Styling/html/global_attributes/index.md).

Examples
--------

### Example 1: Character

[html]

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### Result

### Example 2: Word

[html]

```html
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

#### Result

Specifications
--------------

  ---------------------------------------------------------------------------------------------------------------

Specification
  ---------------------------------------------------------------------------------------------------------------

  [HTML Standard\
  [\#
  the-ruby-element]](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-ruby-element)

  ---------------------------------------------------------------------------------------------------------------

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

`ruby`

5

12

38

5

15

5

4.4

18

38

14

4.2

1.0

See also
--------

- [`<rt>`](rt)
- [`<rp>`](rp)
- [`<rb>`](rb)
- [`<rtc>`](rtc)
- [`text-transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform):
    full-size-kana

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby>>
