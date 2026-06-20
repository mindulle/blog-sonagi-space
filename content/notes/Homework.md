# Homework

## 문제 설명

- C 형태로 주어진 프로그램에서 각 인수 전달을 가정할 때,
- P에서 `write` 호출 직후의 변수 값을 적고 P의 출력과 main의 출력을 적어라.

## 의사코드 (Pseudo-code)

```c
A = 2; B = 5; C = 8; D = 9;

main() {
    P(A, B, C, D);
    write(A, B, C, D);
}

P(U, V, W, X) {
    V = U + A;
    W = A + B;
    A = A + 1;
    X = A + 2;
    write(U, V, W, X);
}
```

### 인수 전달 방식별 결과 표

| 전달 방식 (Parameter Passing) | A | B | C | D | U | V | W | X | P output | main output |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Call-by-Value** | 3 | 5 | 8 | 9 | 2 | 4 | 7 | 5 | 2, 4, 7, 5 | 3, 5, 8, 9 |
| **Call-by-Reference** | 3 | 4 | 6 | 5 | 3 | 4 | 6 | 5 | 3, 4, 6, 5 | 3, 4, 6, 5 |
| **Call-by-Value-Result** | 2 | 4 | 7 | 5 | 2 | 4 | 7 | 5 | 2, 4, 7, 5 | 2, 4, 7, 5 |
| **Call-by-Name** | 3 | 4 | 6 | 5 | 3 | 4 | 6 | 5 | 3, 4, 6, 5 | 3, 4, 6, 5 |