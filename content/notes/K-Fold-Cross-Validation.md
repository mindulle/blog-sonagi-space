---
title: K-Fold Cross Validation
tags: [concept, machine-learning]
created: 2026-05-11
updated: 2026-05-11
source: 10_Sources/roadmaps/machine-learning/content/k-fold-cross-validation@vRS7DW2WUaXiHk9oJgg3z.md
---

# K-Fold Cross Validation

K-Fold Cross Validation is a technique used to assess how well a machine learning model will generalize to an independent dataset. It works by dividing the available data into _k_ equally sized folds or subsets. The model is then trained _k_ times, each time using _k-1_ folds as the training set and
 the remaining fold as the validation set. The performance metrics from each of the _k_ iterations are then averaged to provide an overall estimate of the model's performance.

Visit the following resources to learn more:

- [@article@Cross-validation: evaluating estimator performance | scikit-learn](https://scikit-learn.org/stable/modules/cross_validation.html)
- [@article@A Comprehensive Guide to K-Fold Cross Validation](https://www.datacamp.com/tutorial/k-fold-cross-validation)
- [@video@Complete Guide to Cross Validation](https://www.youtube.com/watch?v=-8s9KuNo5SA&t=925s)

## 관련 로드맵
- [[machine-learning|Machine Learning]]
