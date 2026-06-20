[dart:web\_gl](../../dart-web_gl/dart-web_gl-library){._links-link}

precision property
==================

::: {#getter .section .multi-line-signature}
[int](../../dart-core/int-class) precision
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
int get precision native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-web_gl/ShaderPrecisionFormat/precision.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Precision.md)

# Precision

Precision measures how accurate a model's positive predictions are. It tells you, out of all the instances the model predicted as positive, what proportion were actually positive. In simpler terms, it answers the question: "When the model says something is true, how often is it actually true?". The 
formula for precision is: Precision = True Positives / (True Positives + False Positives).

Visit the following resources to learn more:

- [@article@Precision | scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.precision_score.html)

## 관련 로드맵
- [[machine-learning|Machine Learning]]
