[dart:html](../../dart-html/dart-html-library){._links-link}

exclusive property
==================

::: {#getter .section .multi-line-signature}
[bool](../../dart-core/bool-class)? exclusive
:::

Implementation {#source}
--------------

``` {.language-dart data-language="dart"}
bool? get exclusive native;
```

::: {._attribution}
© 2012 the Dart project authors\
Licensed under the BSD 3-Clause \"New\" or \"Revised\" License.\
<https://api.dart.dev/stable/2.18.5/dart-html/VRSession/exclusive.html>
:::


---
## 상세 내용 (Merged from 20_Wiki/_concepts/Exclusive.md)

# Exclusive Clustering

Exclusive clustering, also known as hard clustering, is a type of clustering where each data point can only belong to one cluster. This means there's no overlap between clusters; a data point is definitively assigned to a single group. The goal is to partition the data into distinct, non-overlapping
 clusters based on similarity. For example, K-Means is an exclusive clustering algorithm. It aims to partition n data points into k clusters in which each data point belongs to the cluster with the ne
arest mean (cluster centers or cluster centroid), serving as a prototype of the cluster.

Visit the following resources to learn more:

- [@article@K-means | scikit-learn](https://scikit-learn.org/stable/modules/clustering.html#k-means)
- [@article@Unsupervised Clustering: A Guide](https://builtin.com/articles/unsupervised-clustering)

## 관련 로드맵
- [[machine-learning|Machine Learning]]
