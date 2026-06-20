Comments
========

A CSS **comment** is used to add explanatory notes to the code or to
prevent the browser from interpreting specific parts of the style sheet.
By design, comments have no effect on the layout of a document.

Syntax
------

Comments can be placed wherever white space is allowed within a style
sheet. They can be used on a single line, or traverse multiple lines.

[css]

```css
/* Comment */
```

Examples
--------

[css]

```css
/* A one-line comment */

/*
A comment
which stretches
over several
lines
*/

/* The comment below is used to
   disable specific styling */
/*
span {
  color: blue;
  font-size: 1.5em;
}
*/
```

Notes
-----

The `/* */` comment syntax is used for both single and multiline
comments. There is no other way to specify comments in external style
sheets. However, when using the
[`<style>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)
element, you may use `<!-- -->` to hide CSS from older browsers,
although this is not recommended. As with most programming languages
that use the `/* */` comment syntax, comments cannot be nested. In other
words, the first instance of `*/` that follows an instance of `/*`
closes the comment.

Specifications
--------------

- [CSS 2.1 Syntax and basic data types
    \#comments](https://www.w3.org/TR/CSS21/syndata.html#comments)

See also
--------

- CSS key concepts:
  - [CSS syntax](_Resources/Markup%20And%20Styling/css/syntax.md)
  - [At-rules](at-rule.md)
  - [Specificity](specificity.md)
  - [Inheritance](inheritance.md)
  - [Box model](introduction_to_the_css_box_model.md)
  - [Layout modes](layout_mode.md)
  - [Visual formatting models](visual_formatting_model.md)
  - [Margin collapsing](mastering_margin_collapsing.md)
  - Values
    - [Initial values](initial_value.md)
    - [Computed values](computed_value.md)
    - [Used values](used_value.md)
    - [Actual values](actual_value.md)
  - [Value definition syntax](value_definition_syntax.md)
  - [Shorthand properties](shorthand_properties.md)
  - [Replaced elements](replaced_element.md)

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/Comments>


---
## 상세 내용 (Merged from 20_Wiki/Develop/_commons/fruit/smells/dispensables/comments.md)
# Comments
### Signs and Symptoms

A method is filled with explanatory comments.

<figure class="image">

<img
src="https://refactoring.guru/images/refactoring/content/smells/comments-01.png?id=584958123f3b902e0ad0895d879509b9"
srcset="/images/refactoring/content/smells/comments-01-2x.png?id=15fe22a84b974b19a752ad169ae999ae 2x"
width="500" height="300" />
</figure>
### Reasons for the Problem

Comments are usually created with the best of intentions, when the author realizes that his or her code isn't intuitive or obvious. In such cases, comments are like a deodorant masking the smell of fishy code that could be improved.

> The best comment is a good name for a method or class.

If you feel that a code fragment can't be understood without comments, try to change the code structure in a way that makes comments unnecessary.

### Treatment
- If a comment is intended to explain a complex expression, the expression should be split into understandable subexpressions using [[extract-variable|extract-variable]].
- If a comment explains a section of code, this section can be turned into a separate method via [[extract-method|extract-method]]. The name of the new method can be taken from the comment text itself, most likely.
- If a method has already been extracted, but comments are still necessary to explain what the method does, give the method a self-explanatory name. Use [[rename-method|rename-method]] for this.
- If you need to assert rules about a state that's necessary for the system to work, use [[introduce-assertion|introduce-assertion]].

### Payoff

- Code becomes more intuitive and obvious.<figure class="image">
<img
src="https://refactoring.guru//images/refactoring/content/smells/comments-02.png?id=266f82bb7081957d409ae690c2c66483"
srcset="/images/refactoring/content/smells/comments-02-2x.png?id=57a83d2b705347aa0d0a6d197a1f9d3c 2x"
loading="lazy" width="500" height="300" />
</figure>
### When to Ignore

Comments can sometimes be useful:

- When explaining **why** something is being implemented in a particular way.
- When explaining complex algorithms (when all other methods for simplifying the algorithm have been tried and come up short).
