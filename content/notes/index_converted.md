CSS reference
=============

Use this **CSS reference** to browse an [[#index]] of
all of the standard
[[https://developer.mozilla.org/en-US/docs/Web/CSS]] properties,
[[pseudo-elements|pseudo-elements]],
[[css_functions|css_functions]] and
[[#concepts]]
and a list of [[#selectors]]. Also included
is a brief [[#dom-css_cssom]].

Basic rule syntax
-----------------

### Style rule syntax

```css
style-rule ::=
    selectors-list {
      properties-list
    }
```

Where:

```css
selectors-list ::=
    selector
    

properties-list ::=
    
```

See the index of [[#pseudo]],
and *[[#pseudo]]* below. The syntax for each specified
*value* depends on the data type defined for each specified *property*.

#### Style rule examples

```css
strong {
  color: red;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

For a beginner-level introduction to the syntax of selectors, see our
[guide on CSS
Selectors]https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors.
Be aware that any [[_Resources/Markup And Styling/css/syntax]] error in a rule definition
invalidates the entire rule. Invalid rules are ignored by the browser.
Note that CSS rule definitions are entirely
https://developer.mozilla.org/en-US/docs/Glossary/ASCII
[[https://www.w3.org/TR/css-syntax-3/#intro]], whereas DOM-CSS
/ CSSOM [[the rule management system]] is
[[https://www.w3.org/TR/cssom/#introduction]].

### At-rule syntax

As the structure of at-rules varies widely, please see
[[at-rule|at-rule]] to find the syntax of the specific one you want.

Index
-----

**Note:** This index does not include SVG-exclusive [presentation
attributes]https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation,
which can be used as CSS properties on
[[https://developer.mozilla.org/en-US/docs/Web/SVG]] elements.

**Note:** The property names in this index do **not** include the
JavaScript names which do differ from the CSS standard names.

### -

- [[--*|--*]]
- [[-webkit-line-clamp|-webkit-line-clamp]]

### A

- [[abs|abs]]
-
- [[accent-color|accent-color]]
- [[acos|acos]]
-
- [[additive-symbols|additive-symbols]]
- [[after|::after]]
- [[align-content|align-content]]
- [[align-items|align-items]]
- [[align-self|align-self]]
- [[align-tracks|align-tracks]]
- [[all|all]]
-
- [[angle|angle]]
- [[angle-percentage|angle-percentage]]
- [[Animation|animation]]
- [[animation-composition|animation-composition]]
- [[animation-delay|animation-delay]]
- [[animation-direction|animation-direction]]
- [[animation-duration|animation-duration]]
- [[animation-fill-mode|animation-fill-mode]]
- [[animation-iteration-count|animation-iteration-count]]
- [[animation-name|animation-name]]
- [[animation-play-state|animation-play-state]]
- [[animation-range|animation-range]]
- [[animation-range-end|animation-range-end]]
- [[animation-range-start|animation-range-start]]
- [[animation-timeline|animation-timeline]]
- [[animation-timing-function|animation-timing-function]]
- [[@font-feature-values#@annotation]]
- [[font-variant-alternates#annotation[[]]]]
- [[:any-link|:any-link]]
- [[appearance|appearance]]
- [[ascent-override|ascent-override]]
- [[asin|asin]]
- [[_Resources/Markup And Styling/css/aspect-ratio]]
- [[atan|atan]]
- [[atan2|atan2]]
- [[attr|attr]]

### B

- [[::backdrop|::backdrop]]
- [[backdrop-filter|backdrop-filter]]
- [[backface-visibility|backface-visibility]]
- [[background|background]]
- [[background-attachment|background-attachment]]
- [[background-blend-mode|background-blend-mode]]
- [[background-clip|background-clip]]
- [[background-color|background-color]]
- [[background-image|background-image]]
- [[background-origin|background-origin]]
- [[background-position|background-position]]
- [[background-position-x|background-position-x]]
- [[background-position-y|background-position-y]]
- [[background-repeat|background-repeat]]
- [[background-size|background-size]]
- [[base-palette|base-palette]]
- [[basic-shape|basic-shape]]
- [[before|::before]]
- [[:blank|:blank]]
-
- [[blend-mode|blend-mode]]
-
- [[block-size|block-size]]
- [[blur|blur]]
- [[border|border]]
- [[border-block|border-block]]
- [[border-block-color|border-block-color]]
- [[border-block-end|border-block-end]]
- [[border-block-end-color|border-block-end-color]]
- [[border-block-end-style|border-block-end-style]]
- [[border-block-end-width|border-block-end-width]]
- [[border-block-start|border-block-start]]
- [[border-block-start-color|border-block-start-color]]
- [[border-block-start-style|border-block-start-style]]
- [[border-block-start-width|border-block-start-width]]
- [[border-block-style|border-block-style]]
- [[border-block-width|border-block-width]]
- [[border-bottom|border-bottom]]
- [[border-bottom-color|border-bottom-color]]
- [[border-bottom-left-radius|border-bottom-left-radius]]
- [[border-bottom-right-radius|border-bottom-right-radius]]
- [[border-bottom-style|border-bottom-style]]
- [[border-bottom-width|border-bottom-width]]
- [[border-collapse|border-collapse]]
- [[border-color|border-color]]
- [[border-end-end-radius|border-end-end-radius]]
- [[border-end-start-radius|border-end-start-radius]]
- [[border-image|border-image]]
- [[border-image-outset|border-image-outset]]
- [[border-image-repeat|border-image-repeat]]
- [[border-image-slice|border-image-slice]]
- [[border-image-source|border-image-source]]
- [[border-image-width|border-image-width]]
- [[border-inline|border-inline]]
- [[border-inline-color|border-inline-color]]
- [[border-inline-end|border-inline-end]]
- [[border-inline-end-color|border-inline-end-color]]
- [[border-inline-end-style|border-inline-end-style]]
- [[border-inline-end-width|border-inline-end-width]]
- [[border-inline-start|border-inline-start]]
- [[border-inline-start-color|border-inline-start-color]]
- [[border-inline-start-style|border-inline-start-style]]
- [[border-inline-start-width|border-inline-start-width]]
- [[border-inline-style|border-inline-style]]
- [[border-inline-width|border-inline-width]]
- [[border-left|border-left]]
- [[border-left-color|border-left-color]]
- [[border-left-style|border-left-style]]
- [[border-left-width|border-left-width]]
- [[border-radius|border-radius]]
- [[border-right|border-right]]
- [[border-right-color|border-right-color]]
- [[border-right-style|border-right-style]]
- [[border-right-width|border-right-width]]
- [[border-spacing|border-spacing]]
- [[border-start-end-radius|border-start-end-radius]]
- [[border-start-start-radius|border-start-start-radius]]
- [[border-style|border-style]]
- [[border-top|border-top]]
- [[border-top-color|border-top-color]]
- [[border-top-left-radius|border-top-left-radius]]
- [[border-top-right-radius|border-top-right-radius]]
- [[border-top-style|border-top-style]]
- [[border-top-width|border-top-width]]
- [[border-width|border-width]]
- [[bottom|bottom]]
- [[@page#page-margin-box-type]]
- [[box-decoration-break|box-decoration-break]]
- [[box-shadow|box-shadow]]
- [[box-sizing|box-sizing]]
- [[break-after|break-after]]
- [[break-before|break-before]]
- [[break-inside|break-inside]]
- [[brightness|brightness]]

### C

- [[calc|calc]]
- [[caption-side|caption-side]]
-
- [[caret-color|caret-color]]
-
- [[@font-feature-values#@character-variant]]
- [[font-variant-alternates#character-variant[[]]]]
- [[@charset|@charset]]
- [[checked|:checked]]
- [[basic-shape#circle[[]]]]
- [[clamp|clamp]]
- [[clear|clear]]
- [[clip|clip]]
- [[clip-path|clip-path]]
- [[color_value|color_value]]
- [[_Resources/Markup And Styling/css/color]]
- [[color-scheme|color-scheme]]
- [[column-count|column-count]]
- [[column-fill|column-fill]]
- [[column-gap|column-gap]]
- [[column-rule|column-rule]]
- [[column-rule-color|column-rule-color]]
- [[column-rule-style|column-rule-style]]
- [[column-rule-width|column-rule-width]]
- [[column-span|column-span]]
- [[column-width|column-width]]
- [[columns|columns]]
- [[conic-gradient|conic-gradient]]
- [[contain|contain]]
- [[contain-intrinsic-block-size|contain-intrinsic-block-size]]
- [[contain-intrinsic-height|contain-intrinsic-height]]
- [[contain-intrinsic-inline-size|contain-intrinsic-inline-size]]
- [[contain-intrinsic-size|contain-intrinsic-size]]
- [[contain-intrinsic-width|contain-intrinsic-width]]
- [[container|container]]
- [[container-name|container-name]]
- [[container-type|container-type]]
- [[content|content]]
- [[content-visibility|content-visibility]]
- [[contrast|contrast]]
- [[cos|cos]]
- [[counter|counter]]
- [[counter-increment|counter-increment]]
- [[counter-reset|counter-reset]]
- [[counter-set|counter-set]]
- [[@counter-style|@counter-style]]
- [[counters|counters]]
- [[cross-fade|cross-fade]]
- [[easing-function#cubic-bezier[[]]]]
- [[::cue|::cue]]
- [[::cue-region|::cue-region]]
- [[current|:current]]
- [[cursor|cursor]]
- [[custom-ident|custom-ident]]
- [[length#cap]]
- [[length#ch]]
- [[length#cm]]

### D

- [[angle#deg]]
- [[dashed-ident|dashed-ident]]
- [[:default|:default]]
- [[:defined|:defined]]
- [[descent-override|descent-override]]
- [[dimension|dimension]]
- [[dir|:dir]]
- [[direction|direction]]
- [[disabled|:disabled]]
- [[display|display]]
- [[display-box|display-box]]
- [[display-inside|display-inside]]
- [[display-internal|display-internal]]
- [[display-legacy|display-legacy]]
- [[display-listitem|display-listitem]]
- [[display-outside|display-outside]]
- [[drop-shadow|drop-shadow]]
- [[_Resources/Markup And Styling/css/resolution#dpcm]]
- [[_Resources/Markup And Styling/css/resolution#dpi]]
- [[_Resources/Markup And Styling/css/resolution#dppx]]

### E

- [[element[[]]]]
- [[basic-shape#ellipse[[]]]]
- [[empty|:empty]]
- [[empty-cells|empty-cells]]
- [[enabled|:enabled]]
- [[env|env]]
- [[exp|exp]]
- [[length#em]]
- [[length#ex]]

### F

- [[fallback|fallback]]
- [[filter|filter]]
- [[filter-function|filter-function]]
- [[first|:first]]
- [[:first-child|:first-child]]
- [[::first-letter|::first-letter]]
- [[::first-line|::first-line]]
- [[:first-of-type|:first-of-type]]
- [[fit-content|fit-content]]
- [[flex_value|flex_value]]
- [[flex|flex]]
- [[flex-basis|flex-basis]]
- [[flex-direction|flex-direction]]
- [[flex-flow|flex-flow]]
- [[flex-grow|flex-grow]]
- [[flex-shrink|flex-shrink]]
- [[flex-wrap|flex-wrap]]
- [[flex_value#fr]]
- [[float|float]]
- [[focus|:focus]]
- [[:focus-visible|:focus-visible]]
- [[:focus-within|:focus-within]]
- [[font|font]]
- _Resources/Markup And Styling/css/@font-face/font-display
- [[@font-face|@font-face]]
- [[_Resources/Markup And Styling/css/font-family]]
- _Resources/Markup And Styling/css/@font-face/font-family
- _Resources/Markup And Styling/css/@font-palette-values/font-family
- _Resources/Markup And Styling/css/font-feature-settings
- _Resources/Markup And Styling/css/@font-face/font-feature-settings
- [[@font-feature-values|@font-feature-values]]
- [[font-kerning|font-kerning]]
- [[font-language-override|font-language-override]]
- [[font-optical-sizing|font-optical-sizing]]
- [[font-palette|font-palette]]
- [[@font-palette-values|@font-palette-values]]
- [[font-size|font-size]]
- [[font-size-adjust|font-size-adjust]]
- [[_Resources/Markup And Styling/css/font-stretch]]
- _Resources/Markup And Styling/css/@font-face/font-stretch
- [[_Resources/Markup And Styling/css/font-style]]
- _Resources/Markup And Styling/css/@font-face/font-style
- [[font-synthesis|font-synthesis]]
- [[font-synthesis-small-caps|font-synthesis-small-caps]]
- [[font-synthesis-style|font-synthesis-style]]
- [[font-synthesis-weight|font-synthesis-weight]]
- [[font-variant|font-variant]]
- [[@font-face|@font-face]]
- [[font-variant-alternates|font-variant-alternates]]
- [[font-variant-caps|font-variant-caps]]
- [[font-variant-east-asian|font-variant-east-asian]]
- [[font-variant-emoji|font-variant-emoji]]
- [[font-variant-ligatures|font-variant-ligatures]]
- [[font-variant-numeric|font-variant-numeric]]
- [[font-variant-position|font-variant-position]]
- _Resources/Markup And Styling/css/font-variation-settings
- _Resources/Markup And Styling/css/@font-face/font-variation-settings
- [[_Resources/Markup And Styling/css/font-weight]]
- _Resources/Markup And Styling/css/@font-face/font-weight
- [[forced-color-adjust|forced-color-adjust]]
- [[@font-face/src#format[[]]]]
- [[frequency|frequency]]
- [[frequency-percentage|frequency-percentage]]
- [[:fullscreen|:fullscreen]]
- [[future|:future]]

### G

- [[angle#grad]]
- [[gap|gap]]
- [[gradient|gradient]]
- [[::grammar-error|::grammar-error]]
- [[grayscale|grayscale]]
- [[_Resources/Markup And Styling/css/grid]]
- [[grid-area|grid-area]]
- [[grid-auto-columns|grid-auto-columns]]
- [[grid-auto-flow|grid-auto-flow]]
- [[grid-auto-rows|grid-auto-rows]]
- [[grid-column|grid-column]]
- [[grid-column-end|grid-column-end]]
- [[grid-column-start|grid-column-start]]
- [[grid-row|grid-row]]
- [[grid-row-end|grid-row-end]]
- [[grid-row-start|grid-row-start]]
- [[grid-template|grid-template]]
- [[grid-template-areas|grid-template-areas]]
- [[grid-template-columns|grid-template-columns]]
- [[grid-template-rows|grid-template-rows]]

### H

- [[frequency#hz]]
- [[hanging-punctuation|hanging-punctuation]]
- [[has|:has]]
- [[_Resources/Markup And Styling/css/height]]
- [[https://developer.mozilla.org/en-US/docs/Web/CSS]]
-
- [[:host_function|:host_function]]
-
- [[hover|:hover]]
- [[color_value#hsl[[]]]]
- [[color_value#hsla[[]]]]
- [[hue-rotate|hue-rotate]]
-
- [[hyphenate-character|hyphenate-character]]
- [[hyphenate-limit-chars|hyphenate-limit-chars]]
- [[hyphens|hyphens]]
- [[hypot|hypot]]

### I

- [[ident|ident]]
- [[_Resources/Markup And Styling/css/image]]
- [[image#the_image[[]]_functional_notation]]
- [[image-orientation|image-orientation]]
- [[image-rendering|image-rendering]]
- [[image-resolution|image-resolution]]
- [[image-set|image-set]]
- [[@import|@import]]
- [[:in-range|:in-range]]
- [[indeterminate|:indeterminate]]
- [[inherit|inherit]]
- [[inherits|inherits]]
- [[initial|initial]]
- [[initial-letter|initial-letter]]
- [[initial-letter-align|initial-letter-align]]
- [[initial-value|initial-value]]
- [[inline-size|inline-size]]
-
- [[_Resources/Markup And Styling/css/inset]]
- [[basic-shape#inset[[]]]]
- [[inset-block|inset-block]]
- [[inset-block-end|inset-block-end]]
- [[inset-block-start|inset-block-start]]
- [[inset-inline|inset-inline]]
- [[inset-inline-end|inset-inline-end]]
- [[inset-inline-start|inset-inline-start]]
- [[integer|integer]]
- [[invalid|:invalid]]
- [[invert|invert]]
- [[is|:is]]
- [[isolation|isolation]]
- [[length#ic]]
- [[length#in]]

### J

- [[justify-content|justify-content]]
- [[justify-items|justify-items]]
- [[justify-self|justify-self]]
- [[justify-tracks|justify-tracks]]

### K

- [[frequency#khz]]
- [[@keyframes|@keyframes]]

### L

-
- [[lang|:lang]]
- [[:last-child|:last-child]]
- [[:last-of-type|:last-of-type]]
- [[@layer|@layer]]
-
-
-
-
- [[left|:left]]
- [[left|left]]
- [[@page#page-margin-box-type]]
- [[LENGTH|length]]
- [[length-percentage|length-percentage]]
- [[letter-spacing|letter-spacing]]
- [[line-break|line-break]]
-
- [[line-gap-override|line-gap-override]]
- [[line-height|line-height]]
- [[line-height-step|line-height-step]]
- [[line-style|line-style]]
- [[linear-gradient|linear-gradient]]
- [[link|:link]]
- [[list-style|list-style]]
- [[list-style-image|list-style-image]]
- [[list-style-position|list-style-position]]
- [[list-style-type|list-style-type]]
- [[@font-face/src#local[[]]]]
- [[:local-link|:local-link]]
- [[log|log]]

### M

- [[length#mm]]
- [[margin|margin]]
- [[margin-block|margin-block]]
- [[margin-block-end|margin-block-end]]
- [[margin-block-start|margin-block-start]]
- [[margin-bottom|margin-bottom]]
- [[margin-inline|margin-inline]]
- [[margin-inline-end|margin-inline-end]]
- [[margin-inline-start|margin-inline-start]]
- [[margin-left|margin-left]]
- [[margin-right|margin-right]]
- [[margin-top|margin-top]]
- [[margin-trim|margin-trim]]
- [[::marker|::marker]]
-
- [[mask|mask]]
- [[mask-border|mask-border]]
- [[mask-border-mode|mask-border-mode]]
- [[mask-border-outset|mask-border-outset]]
- [[mask-border-repeat|mask-border-repeat]]
- [[mask-border-slice|mask-border-slice]]
- [[mask-border-source|mask-border-source]]
- [[mask-border-width|mask-border-width]]
- [[mask-clip|mask-clip]]
- [[mask-composite|mask-composite]]
- [[mask-image|mask-image]]
- [[mask-mode|mask-mode]]
- [[mask-origin|mask-origin]]
- [[mask-position|mask-position]]
- [[mask-repeat|mask-repeat]]
- [[mask-size|mask-size]]
- [[mask-type|mask-type]]
- [[masonry-auto-flow|masonry-auto-flow]]
- [[math-depth|math-depth]]
- [[math-shift|math-shift]]
- [[math-style|math-style]]
- [[Matrix|matrix]]
- [[matrix3d|matrix3d]]
- [[max|max]]
- [[max-block-size|max-block-size]]
- [[max-height|max-height]]
- [[https://developer.mozilla.org/en-US/docs/Web/CSS]]
- [[max-inline-size|max-inline-size]]
-
- [[max-width|max-width]]
- [[https://developer.mozilla.org/en-US/docs/Web/CSS]]
- [[https://developer.mozilla.org/en-US/docs/Web/CSS]]
- [[@media|@media]]
- [[min|min]]
- [[min-block-size|min-block-size]]
- [[min-height|min-height]]
- [[https://developer.mozilla.org/en-US/docs/Web/CSS]]
- [[min-inline-size|min-inline-size]]
- [[min-width|min-width]]
- [[https://developer.mozilla.org/en-US/docs/Web/CSS]]
- [[https://developer.mozilla.org/en-US/docs/Web/CSS]]
- [[minmax|minmax]]
- [[mix-blend-mode|mix-blend-mode]]
- [[mod|mod]]
- [[time#ms]]

### N

- [[@namespace|@namespace]]
- [[negative|negative]]
- [[:not|:not]]
- [[:nth-child|:nth-child]]
- [[:nth-of-type|:nth-of-type]]
- [[:nth-last-child|:nth-last-child]]
- [[:nth-last-of-type|:nth-last-of-type]]
- [[:nth-last-of-type|:nth-last-of-type]]
- [[:nth-of-type|:nth-of-type]]
- [[number|number]]

### O

- [[object-fit|object-fit]]
- [[object-position|object-position]]
- [[offset|offset]]
- [[offset-anchor|offset-anchor]]
- [[offset-distance|offset-distance]]
- [[offset-path|offset-path]]
- [[offset-position|offset-position]]
- [[offset-rotate|offset-rotate]]
- [[:only-child|:only-child]]
- [[:only-of-type|:only-of-type]]
- [[_Resources/Markup And Styling/css/opacity]]
- _Resources/Markup And Styling/css/filter-function/opacity
- [[:optional|:optional]]
- [[order|order]]
- [[https://developer.mozilla.org/en-US/docs/Web/CSS]]
- [[@font-feature-values#@ornaments]]
- [[font-variant-alternates#ornaments[[]]]]
- [[orphans|orphans]]
- [[:out-of-range|:out-of-range]]
- [[outline|outline]]
- [[outline-color|outline-color]]
- [[outline-offset|outline-offset]]
- [[outline-style|outline-style]]
- [[outline-width|outline-width]]
- [[overflow|overflow]]
- [[overflow-anchor|overflow-anchor]]
- [[_Resources/Markup And Styling/css/overflow-block]]
- [[overflow-clip-margin|overflow-clip-margin]]
- [[_Resources/Markup And Styling/css/overflow-inline]]
- [[overflow-wrap|overflow-wrap]]
- [[overflow-x|overflow-x]]
- [[overflow-y|overflow-y]]
- [[override-colors|override-colors]]
- [[overscroll-behavior|overscroll-behavior]]
- [[overscroll-behavior-block|overscroll-behavior-block]]
- [[overscroll-behavior-inline|overscroll-behavior-inline]]
- [[overscroll-behavior-x|overscroll-behavior-x]]
- [[overscroll-behavior-y|overscroll-behavior-y]]

### P

- [[pseudo-classes|pseudo-classes]]
- [[pseudo-elements|pseudo-elements]]
- [[length#pc]]
- [[length#pt]]
- [[length#px]]
- [[pad|pad]]
- [[padding|padding]]
- [[padding-block|padding-block]]
- [[padding-block-end|padding-block-end]]
- [[padding-block-start|padding-block-start]]
- [[padding-bottom|padding-bottom]]
- [[padding-inline|padding-inline]]
- [[padding-inline-end|padding-inline-end]]
- [[padding-inline-start|padding-inline-start]]
- [[padding-left|padding-left]]
- [[padding-right|padding-right]]
- [[padding-top|padding-top]]
- [[@page|@page]]
- [[page|page]]
- [[page-break-after|page-break-after]]
- [[page-break-before|page-break-before]]
- [[page-break-inside|page-break-inside]]
- [[page-orientation|page-orientation]]
- [[paint|paint]]
- [[paint-order|paint-order]]
- [[part|::part]]
- [[:past|:past]]
- [[path|path]]
- [[paused|:paused]]
- [[percentage|percentage]]
- [[_Resources/Markup And Styling/css/perspective]]
- _Resources/Markup And Styling/css/transform-function/perspective
- [[perspective-origin|perspective-origin]]
- [[:picture-in-picture|:picture-in-picture]]
- [[place-content|place-content]]
- [[place-items|place-items]]
- [[place-self|place-self]]
- [[placeholder|::placeholder]]
- [[:placeholder-shown|:placeholder-shown]]
- [[:playing|:playing]]
- [[pointer-events|pointer-events]]
- [[basic-shape#polygon[[]]]]
- [[position_value|position_value]]
- [[position|position]]
- [[pow|pow]]
- [[prefix|prefix]]
- [[print-color-adjust|print-color-adjust]]
- [[@property|@property]]

### Q

- [[length#q]]
- [[quotes|quotes]]

### R

- [[angle#rad]]
- [[length#rem]]
- [[radial-gradient|radial-gradient]]
- [[range|range]]
- [[ratio|ratio]]
- [[ray|ray]]
- [[Readonly|:read-only]]
- [[:read-write|:read-write]]
- [[shape#rect[[]]]]
- [[rem|rem]]
- [[repeat|repeat]]
- [[repeating-conic-gradient|repeating-conic-gradient]]
- [[repeating-linear-gradient|repeating-linear-gradient]]
- [[repeating-radial-gradient|repeating-radial-gradient]]
- [[required|:required]]
- [[resize|resize]]
- [[_Resources/Markup And Styling/css/resolution]]
-
- [[revert|revert]]
- [[color_value#rgb[[]]]]
- [[color_value#rgba[[]]]]
- [[right|:right]]
- [[right|right]]
- [[@page#page-margin-box-type]]
- [[root|:root]]
- [[_Resources/Markup And Styling/css/rotate]]
- _Resources/Markup And Styling/css/transform-function/rotate
- [[rotate3d|rotate3d]]
- [[rotatex|rotatex]]
- [[rotatey|rotatey]]
- [[rotatez|rotatez]]
- [[round|round]]
- [[row-gap|row-gap]]
- [[ruby-align|ruby-align]]
-
- [[ruby-position|ruby-position]]

### S

- [[saturate|saturate]]
- [[_Resources/Markup And Styling/css/scale]]
- _Resources/Markup And Styling/css/transform-function/scale
- [[scale3d|scale3d]]
- [[scalex|scalex]]
- [[scaley|scaley]]
- [[scalez|scalez]]
- [[Scope|:scope]]
- [[overflow|overflow]]
- [[scroll-behavior|scroll-behavior]]
- [[scroll-margin|scroll-margin]]
- [[scroll-margin-block|scroll-margin-block]]
- [[scroll-margin-block-end|scroll-margin-block-end]]
- [[scroll-margin-block-start|scroll-margin-block-start]]
- [[scroll-margin-bottom|scroll-margin-bottom]]
- [[scroll-margin-inline|scroll-margin-inline]]
- [[scroll-margin-inline-end|scroll-margin-inline-end]]
- [[scroll-margin-inline-start|scroll-margin-inline-start]]
- [[scroll-margin-left|scroll-margin-left]]
- [[scroll-margin-right|scroll-margin-right]]
- [[scroll-margin-top|scroll-margin-top]]
- [[scroll-padding|scroll-padding]]
- [[scroll-padding-block|scroll-padding-block]]
- [[scroll-padding-block-end|scroll-padding-block-end]]
- [[scroll-padding-block-start|scroll-padding-block-start]]
- [[scroll-padding-bottom|scroll-padding-bottom]]
- [[scroll-padding-inline|scroll-padding-inline]]
- [[scroll-padding-inline-end|scroll-padding-inline-end]]
- [[scroll-padding-inline-start|scroll-padding-inline-start]]
- [[scroll-padding-left|scroll-padding-left]]
- [[scroll-padding-right|scroll-padding-right]]
- [[scroll-padding-top|scroll-padding-top]]
- [[scroll-snap-align|scroll-snap-align]]
- [[scroll-snap-stop|scroll-snap-stop]]
- [[scroll-snap-type|scroll-snap-type]]
- [[scroll-timeline|scroll-timeline]]
- [[scroll-timeline|scroll-timeline]]
- [[scroll-timeline-axis|scroll-timeline-axis]]
- [[scroll-timeline-name|scroll-timeline-name]]
- [[scrollbar-color|scrollbar-color]]
- [[scrollbar-gutter|scrollbar-gutter]]
- [[scrollbar-width|scrollbar-width]]
- [[Selection|::selection]]
-
- [[sepia|sepia]]
- [[shape|shape]]
- [[shape-image-threshold|shape-image-threshold]]
- [[shape-margin|shape-margin]]
- [[shape-outside|shape-outside]]
- [[sign|sign]]
- [[sin|sin]]
- [[size|size]]
- [[size-adjust|size-adjust]]
- [[skew|skew]]
- [[skewx|skewx]]
- [[skewy|skewy]]
- [[::slotted|::slotted]]
- [[speak-as|speak-as]]
- [[::spelling-error|::spelling-error]]
- [[sqrt|sqrt]]
- [[src|src]]
- [[easing-function#steps[[]]]]
- [[string|string]]
- [[@font-feature-values#@styleset]]
- [[font-variant-alternates#styleset[[]]]]
- [[@font-feature-values#@stylistic]]
- [[font-variant-alternates#stylistic[[]]]]
- [[suffix|suffix]]
- [[@supports|@supports]]
-
- [[@font-feature-values#@swash]]
- [[font-variant-alternates#swash[[]]]]
- [[symbols|symbols]]
- [[symbols|symbols]]
- [[_Resources/Markup And Styling/css/@property/syntax]]
- [[system|system]]
- [[time#s]]

### T

- [[angle#turn]]
- [[tab-size|tab-size]]
- [[table-layout|table-layout]]
- [[tan|tan]]
- [[target|:target]]
-
-
- [[::target-text|::target-text]]
-
- [[:target-within|:target-within]]
- [[text-align|text-align]]
- [[text-align-last|text-align-last]]
- [[text-combine-upright|text-combine-upright]]
- [[text-decoration|text-decoration]]
- [[text-decoration-color|text-decoration-color]]
- [[text-decoration-line|text-decoration-line]]
- [[text-decoration-skip|text-decoration-skip]]
- [[text-decoration-skip-ink|text-decoration-skip-ink]]
- [[text-decoration-style|text-decoration-style]]
- [[text-decoration-thickness|text-decoration-thickness]]
- [[text-emphasis|text-emphasis]]
- [[text-emphasis-color|text-emphasis-color]]
- [[text-emphasis-position|text-emphasis-position]]
- [[text-emphasis-style|text-emphasis-style]]
- [[text-indent|text-indent]]
- [[text-justify|text-justify]]
- [[text-orientation|text-orientation]]
- [[text-overflow|text-overflow]]
- [[text-rendering|text-rendering]]
- [[text-shadow|text-shadow]]
- [[text-size-adjust|text-size-adjust]]
- [[text-transform|text-transform]]
- [[text-underline-offset|text-underline-offset]]
- [[text-underline-position|text-underline-position]]
- [[text-wrap|text-wrap]]
- [[time|time]]
- [[time-percentage|time-percentage]]
- [[timeline-scope|timeline-scope]]
- [[easing-function|easing-function]]
- [[top|top]]
- [[@page#page-margin-box-type]]
- [[touch-action|touch-action]]
- [[transform|transform]]
- [[transform-box|transform-box]]
- [[transform-function|transform-function]]
- [[transform-origin|transform-origin]]
- [[transform-style|transform-style]]
- [[Transition|transition]]
- [[transition-delay|transition-delay]]
- [[transition-duration|transition-duration]]
- [[transition-property|transition-property]]
- [[transition-timing-function|transition-timing-function]]
- [[_Resources/Markup And Styling/css/translate]]
- _Resources/Markup And Styling/css/transform-function/translate
- [[translate3d|translate3d]]
- [[translatex|translatex]]
- [[translatey|translatey]]
- [[translatez|translatez]]
-

### U

- [[unicode-bidi|unicode-bidi]]
- [[unicode-range|unicode-range]]
- [[unset|unset]]
- [[url|url]]
- [[url#the_url[[]]_functional_notation]]
- [[:user-invalid|:user-invalid]]
- [[user-select|user-select]]
- [[:user-valid|:user-valid]]
- [[https://developer.mozilla.org/en-US/docs/Web/CSS]]

### V

- [[length#vh]]
- [[length#vmax]]
- [[length#vmin]]
- [[length#vw]]
- [[valid|:valid]]
- [[var[[]]]]
- [[vertical-align|vertical-align]]
-
- [[view-timeline|view-timeline]]
- [[view-timeline-axis|view-timeline-axis]]
- [[view-timeline-inset|view-timeline-inset]]
- [[view-timeline-name|view-timeline-name]]
- [[::view-transition|::view-transition]]
- [[::view-transition-group|::view-transition-group]]
- [[::view-transition-image-pair|::view-transition-image-pair]]
- [[view-transition-name|view-transition-name]]
- [[::view-transition-new|::view-transition-new]]
- [[::view-transition-old|::view-transition-old]]
- [[https://developer.mozilla.org/en-US/docs/Web/CSS]]
- [[https://developer.mozilla.org/en-US/docs/Web/CSS]]
- [[visibility|visibility]]
- [[:visited|:visited]]

### W

- [[where|:where]]
- [[white-space|white-space]]
- [[white-space-collapse|white-space-collapse]]
-
- [[widows|widows]]
- [[_Resources/Markup And Styling/css/width]]
- [[https://developer.mozilla.org/en-US/docs/Web/CSS]]
- [[will-change|will-change]]
- [[word-break|word-break]]
- [[word-spacing|word-spacing]]
- [[overflow-wrap|overflow-wrap]]
- [[writing-mode|writing-mode]]

### X

- [[_Resources/Markup And Styling/css/resolution#x]]

### Z

- [[z-index|z-index]]
- [[https://developer.mozilla.org/en-US/docs/Web/CSS]]

### Others

- [[--*|--*]]

Selectors
---------

The following are the various [[css_selectors|css_selectors]], which allow
styles to be conditional based on various features of elements within
the DOM.

### Basic selectors

**Basic selectors** are fundamental selectors; these are the most basic
selectors that are frequently combined to create other, more complex
selectors.

- [[universal_selectors|universal_selectors]] `*`
- [[type_selectors|type_selectors]] `elementname`
- [[class_selectors|class_selectors]] `.classname`
- [[id_selectors|id_selectors]] `#idname`
- `

### Grouping selectors

[[selector_list|selector_list]] `A, B`

:   Specifies that both `A` and `B` elements are selected. This is a
    grouping method to select several matching elements.

### Combinators

Combinators are selectors that establish a relationship between two or
more simple selectors, such as \"`A` is a child of `B`\" or \"`A` is
adjacent to `B`\", creating a complex selector.

[[next-sibling_combinator|next-sibling_combinator]] `A + B`

:   Specifies that the elements selected by both `A` and `B` have the
    same parent and that the element selected by `B` immediately follows
    the element selected by `A` horizontally.

[[subsequent-sibling_combinator|subsequent-sibling_combinator]] `A ~ B`

:   Specifies that the elements selected by both `A` and `B` share the
    same parent and that the element selected by `A` comes before---but
    not necessarily immediately before---the element selected by `B`.

[[child_combinator|child_combinator]] `A > B`

:   Specifies that the element selected by `B` is the direct child of
    the element selected by `A`.

[[descendant_combinator|descendant_combinator]] `A B`

:   Specifies that the element selected by `B` is a descendant of the
    element selected by `A`, but is not necessarily a direct child.

:   Specifies that the element selected by `B` is located within the
    table column specified by `A`. Elements which span multiple columns
    are considered to be a member of all of those columns.

### Pseudo

[[pseudo-classes|pseudo-classes]] `:`

:   Specifies a special state of the selected element[[s|s]].

[[pseudo-elements|pseudo-elements]] `::`

:   Represents entities that are not included in HTML.

See also [selectors in the Selectors
specification][[https://drafts.csswg.org/selectors/]] and the
[[https://drafts.csswg.org/css-pseudo/]].

Concepts
--------

### Syntax and semantics

- [[_Resources/Markup And Styling/css/syntax]]
- [[at-rule|at-rule]]
- [[cascade|cascade]]
- [[comments|comments]]
- https://developer.mozilla.org/en-US/docs/Glossary/CSS_Descriptor
- [[Inheritance|inheritance]]
- [[shorthand_properties|shorthand_properties]]
- [[specificity|specificity]]
- [[value_definition_syntax|value_definition_syntax]]
- [[css_values_and_units|css_values_and_units]]
- [[css_functions|css_functions]]

### Values

- [[actual_value|actual_value]]
- [[computed_value|computed_value]]
- [[initial_value|initial_value]]
- [[resolved_value|resolved_value]]
- [[specified_value|specified_value]]
- [[used_value|used_value]]

### Layout

- [Block formatting
    context]https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context
- [[introduction_to_the_css_box_model|introduction_to_the_css_box_model]]
- [[containing_block|containing_block]]
- [[layout_mode|layout_mode]]
- [[mastering_margin_collapsing|mastering_margin_collapsing]]
- [[replaced_element|replaced_element]]
- [Stacking
    context]css_positioned_layout/understanding_z-index/stacking_context
- [[visual_formatting_model|visual_formatting_model]]

DOM-CSS / CSSOM
---------------

### Major object types

- https://developer.mozilla.org/en-US/docs/Web/API/Document/styleSheets
- `styleSheets.cssRules`
- `cssRules.cssText` [[selector & style]]
- `cssRules.selectorText`
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
- `HTMLElement.style.cssText` [[just style]]
- https://developer.mozilla.org/en-US/docs/Web/API/Element/className
- https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

### Important methods

- https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule
- https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/deleteRule

See also
--------

- [Mozilla CSS
    extensions]https://developer.mozilla.org/en-US/docs/Web/CSS/Mozilla_Extensions
    [[prefixed with `-moz-`]]
- [WebKit CSS
    extensions]https://developer.mozilla.org/en-US/docs/Web/CSS/WebKit_Extensions
    [[mostly prefixed with `-webkit-`]]

External Links
--------------

- [[https://www.w3.org/TR/CSS/#indices]]

© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference>
