---
title: "데이터과학입문 기말대비 마스터키트 Vol.4-A"
category: academic
tags: [exam, DataScience, 3-1, finals, Vol4, VariantA, code, calc]
---

# 📑 데이터과학입문 마스터키트 Vol.4-A (실전 계산 및 코드 트레이싱)
**버전**: Vol. 4-A (수기 계산 및 Pandas/Scikit-learn 손코딩)
**시험 범위**: Lecture 13 ~ 23 (기말 전범위)
**사용법**: 인쇄 후 빈칸에 알맞은 파이썬 코드를 적거나, 주어진 수식을 직접 계산하여 답을 도출하세요.

---

## Part 1. 데이터 클리닝 및 ML 파이프라인 코드 (L13-18)
다음 파이썬/판다스 코드의 빈칸 `[        ]`을 채우시오.

1. **[결측치 처리]** 'Age' 컬럼의 빈값을 해당 컬럼의 평균으로 대체하고 원본 데이터프레임에 바로 적용한다.
   `df['Age'].[        ](df['Age'].mean(), inplace=True)`
   
2. **[데이터 분할]** 특성(X)과 라벨(y)을 8:2 비율로 훈련 세트와 테스트 세트로 분할한다.
   `X_train, X_test, y_train, y_test = [        ](X, y, test_size=0.2, random_state=42)`

3. **[Scikit-learn 파이프라인 1]** 로지스틱 회귀 모델 객체를 생성하고, 훈련 데이터로 **학습**시킨다.
   `model = LogisticRegression()`
   `model.[        ](X_train, y_train)`

4. **[Scikit-learn 파이프라인 2]** 학습된 모델을 사용하여 테스트 데이터에 대한 예측값을 생성한다.
   `predictions = model.[        ](X_test)`

## Part 2. 핵심 알고리즘 수기 계산 (L19-22)
다음 조건을 읽고 지시사항에 따라 계산하시오.

5. **[k-NN 거리 계산]** 2차원 공간에 점 $A(1, 1)$와 $B(4, 5)$가 있다. 두 점 사이의 유클리드 거리(Euclidean Distance)를 구하시오.
   ▶ 정답: `[        ]`

6. **[의사결정 나무 지니 불순도]** 어떤 특정 노드에 총 6개의 데이터가 있으며, 이 중 '합격'이 6개, '불합격'이 0개이다. (즉, 완벽히 분류됨) 이 노드의 지니 불순도(Gini Impurity) 값은 얼마인가? ($Gini = 1 - \sum p_i^2$)
   ▶ 정답: `[        ]`

7. **[퍼셉트론 선형 결합]** 입력 피처 $x_1 = 2, x_2 = 3$ 이고, 가중치가 $w_1 = 0.5, w_2 = -1$ 이며, 편향(Bias) $b = 1$ 일 때, 이 퍼셉트론의 선형 결합값 $z$ (즉, $w_1 x_1 + w_2 x_2 + b$)를 구하시오.
   ▶ 정답: `[        ]`

8. **[회귀 평가 지표 MSE]** 2개의 테스트 데이터에 대한 실제값 $Y = [3, 5]$ 이고, 모델의 예측값 $\hat{Y} = [2, 5]$ 이다. 이 때 평균 제곱 오차(MSE)를 구하시오.
   ▶ 정답: `[        ]`

## Part 3. 실전 종합 코드 블록 분석 (L13-21)
다음 파이썬 데이터 전처리 및 머신러닝 파이프라인 코드를 읽고 물음에 답하시오.

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# [과정 1] 데이터 로드 및 결측치 전처리
df = pd.read_csv("data.csv")
df.____(A)____(df.mean(), inplace=True) 

# [과정 2] 특성과 라벨 분리 및 학습/테스트 데이터 분할
X = df.drop('target', axis=1)
y = df['target']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# [과정 3] 앙상블 모델 생성 및 학습
model = RandomForestClassifier(n_estimators=100)
model.____(B)____(X_train, y_train)

# [과정 4] 예측 수행
predictions = model.____(C)____(X_test)
```

9. 위 코드의 **[과정 1]**에서 결측치를 각 열의 평균값으로 대체하여 원본에 바로 적용하기 위해 (A)에 들어갈 알맞은 Pandas 메서드는?
   ▶ 정답: `[        ]`

10. 위 코드의 **[과정 3]**과 **[과정 4]**에서 모델을 훈련 데이터로 학습시키고, 테스트 데이터에 대한 예측값을 도출하기 위해 (B)와 (C)에 들어갈 Scikit-learn 핵심 메서드를 차례대로 적으시오.
   ▶ 정답: (B) `[        ]`, (C) `[        ]`

11. 위 코드에서 사용된 `RandomForestClassifier`는 어떤 단일 알고리즘(Weak Learner)을 무작위로 여러 개(위 코드에서는 100개) 생성하여 묶는 배깅(Bagging) 기법인가?
   ▶ 정답: `[        ]`

## Part 4. 심화 코드 패턴 (L19-22, 과제 5·6 유형)
다음 빈칸을 채우시오.

12. **[Pipeline + Scaling]** 스케일링과 로지스틱 회귀를 하나의 파이프라인으로 묶어 학습시킨다.
    ```python
    from sklearn.pipeline import make_pipeline
    from sklearn.preprocessing import StandardScaler
    from sklearn.linear_model import LogisticRegression

    pipe = [        ]([        ](), LogisticRegression())
    pipe.[        ](X_train, y_train)
    ```

13. **[원-핫 인코딩]** 범주형 변수를 포함한 데이터프레임 `df`를 원-핫 인코딩하되, 첫 번째 더미 변수를 제거하여 다중공선성을 방지한다.
    ```python
    df_encoded = pd.[        ](df, [        ]=True)
    ```

14. **[교차 검증]** 학습된 파이프라인 `pipe`의 일반화 성능을 5-fold 교차 검증으로 평가한다.
    ```python
    from sklearn.model_selection import cross_val_score
    scores = [        ](pipe, X, y, cv=[        ])
    print(scores.mean())
    ```

## Part 5. 정밀도·재현율 수기 계산 (L17-18)
다음 혼동 행렬(Confusion Matrix)을 보고 물음에 답하시오.

|  | 예측: Positive | 예측: Negative |
|---|---|---|
| **실제: Positive** | TP = 40 | FN = 10 |
| **실제: Negative** | FP = 20 | TN = 30 |

15. **[Precision]** 정밀도(Precision)를 계산하시오. ($Precision = \frac{TP}{TP + FP}$)
    ▶ 정답: `[        ]`

16. **[Recall]** 재현율(Recall)을 계산하시오. ($Recall = \frac{TP}{TP + FN}$)
    ▶ 정답: `[        ]`

17. **[Forward Propagation]** 입력 $x_1 = 0.8, x_2 = 0.2$, 가중치 $w_1 = 0.5, w_2 = -0.3$, 편향 $b = 0.1$일 때, 은닉층의 선형 결합값 $z_h = w_1 x_1 + w_2 x_2 + b$를 구하시오.
    ▶ 정답: `[        ]`

---

## 🔑 정답 (Vol.4-A)
1. `fillna`
2. `train_test_split`
3. `fit`
4. `predict`
5. `5` (해설: $\sqrt{(4-1)^2 + (5-1)^2} = \sqrt{9 + 16} = \sqrt{25} = 5$)
6. `0` (해설: 합격 확률 $1$, 불합격 확률 $0$ 이므로 $1 - (1^2 + 0^2) = 1 - 1 = 0$. 완벽히 순수함)
7. `-1` (해설: $2 \times 0.5 + 3 \times (-1) + 1 = 1 - 3 + 1 = -1$)
8. `0.5` (해설: 오차는 각각 $-1$, $0$. 오차의 제곱은 $1, 0$. 평균을 내면 $(1+0)/2 = 0.5$)
9. `fillna`
10. (B) `fit`, (C) `predict`
11. 의사결정 나무 (Decision Tree)
12. `make_pipeline`, `StandardScaler`, `fit` (해설: `pipe = make_pipeline(StandardScaler(), LogisticRegression())` → `pipe.fit(X_train, y_train)`)
13. `get_dummies`, `drop_first` (해설: `pd.get_dummies(df, drop_first=True)`)
14. `cross_val_score`, `5` (해설: `cross_val_score(pipe, X, y, cv=5)`)
15. `0.667` (해설: $40 / (40 + 20) = 40/60 \approx 0.667$)
16. `0.8` (해설: $40 / (40 + 10) = 40/50 = 0.8$)
17. `0.44` (해설: $0.5 \times 0.8 + (-0.3) \times 0.2 + 0.1 = 0.4 - 0.06 + 0.1 = 0.44$) *(과제 6 Part A와 동일 유형)*

---
*   **출력용 현재 문서 (PDF)**: [[20_Wiki/Academic/3-1/데이터과학입문/03_Exams/데이터과학입문_기말대비_마스터키트_Vol4_A.pdf|📄 Vol.4-A 인쇄용 PDF]]
*   [[20_Wiki/Academic/3-1/데이터과학입문/05_Notes/데이터과학입문_기말_상세요약|📄 상세 요약 노트 보기]]*
