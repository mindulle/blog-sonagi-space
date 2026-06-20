---
title: "인터넷과웹기초 기말대비 실전 모의고사 (Vol.3 B)"
category: academic
tags: [exam, Web, 3-1, mock-exam, finals]
---

# 🎯 인터넷과웹기초 파이널 모의고사 (Vol.3 B)

코드 추적 및 디버깅 중심

---

## 📝 실전 객관식 모의고사

**Q1. [반응형 웹] 다음 중 데스크탑 퍼스트(Desktop First) 미디어 쿼리 작성 방식으로 알맞은 것은?**
① @media (min-width: 768px)
② @media (max-width: 768px)
③ @media (height: 100vh)
④ @media screen and (orientation: portrait)

**Q2. [CSS] 다음 요소의 최종 너비(width)는 얼마인가?
```css
html { font-size: 10px; }
.box { width: 15rem; }
```**
① 10px
② 15px
③ 150px
④ 계산 불가

**Q3. [JS 기초] 다음 코드의 출력 결과는?
```javascript
console.log(typeof null);
console.log(typeof undefined);
```**
① null, undefined
② object, undefined
③ object, object
④ undefined, null

**Q4. [JS 기초] 다음 중 조건문 `if(val)` 에서 true로 평가되는 `val`의 값은?**
① val = 0
② val = NaN
③ val = [] (빈 배열)
④ val = ''

**Q5. [JS 기초] 아래 코드에서 에러가 발생하는 라인은 몇 번인가?
```javascript
1: const user = { name: 'Kim' };
2: user.name = 'Lee';
3: user.age = 20;
4: user = { name: 'Park' };
```**
① 1번 라인
② 2번 라인
③ 3번 라인
④ 4번 라인

**Q6. [배열] 다음 코드의 실행 결과는?
```javascript
const arr = ['a', 'b', 'c'];
arr.push('d');
console.log(arr.length);
```**
① 3
② 4
③ ['a', 'b', 'c', 'd']
④ TypeError

**Q7. [함수] 다음 화살표 함수 중 문법적으로 **틀린** 것은?**
① const add = (a, b) => a + b;
② const square = x => x * x;
③ const getObj = () => { id: 1 };
④ const print = () => console.log('Hi');

**Q8. [DOM] 태그 내부의 텍스트만 읽어올 때 사용하는 올바른 속성은?**
① innerHTML
② outerHTML
③ textContent
④ value

**Q9. [이벤트] `e.target`과 `e.currentTarget`의 차이로 올바른 것은?**
① 둘은 항상 동일하다.
② e.target은 이벤트 등록 요소, e.currentTarget은 클릭된 요소다.
③ e.target은 실제 클릭된 가장 안쪽 요소, e.currentTarget은 리스너가 달린 요소다.
④ currentTarget은 jQuery 전용 속성이다.

**Q10. [jQuery] `$('#box .item')` 과 동일한 결과를 반환하는 코드는?**
① $('#box').parent('.item')
② $('#box').find('.item')
③ $('#box').closest('.item')
④ $('#box').siblings('.item')

**Q11. [jQuery] 체크박스의 체크 여부(상태값)를 가져올 때 가장 적절한 메서드는?**
① .attr('checked')
② .val()
③ .prop('checked')
④ .html()

**Q12. [비동기] Promise가 성공(fulfilled)되었을 때 실행되는 체이닝 블록은?**
① .catch()
② .finally()
③ .then()
④ .resolve()

**Q13. [비동기] JSON 파싱 시 에러가 발생하는 원인이 될 수 **없는** 것은?**
① 키 값에 큰따옴표 누락
② 마지막 데이터 뒤 쉼표(Trailing Comma)
③ 문자열 값을 작은따옴표로 감쌈
④ 배열 안에 숫자값이 큰따옴표 없이 들어있음

---

## 🔑 정답 및 해설

**Q1 정답: ②**
* **해설**: 데스크탑 퍼스트는 기본 CSS를 PC 기준으로 짜고, 모바일로 갈수록 `@media (max-width)`를 통해 레이아웃을 좁혀가며 변경하는 방식입니다.

**Q2 정답: ③**
* **해설**: rem은 html 요소의 font-size(10px)를 기준으로 곱해지므로 10px * 15 = 150px이 됩니다.

**Q3 정답: ②**
* **해설**: typeof null이 'object'로 나오는 것은 자바스크립트의 설계 오류입니다.

**Q4 정답: ③**
* **해설**: 빈 배열 []이나 빈 객체 {}는 메모리에 참조값이 존재하므로 Truthy입니다.

**Q5 정답: ④**
* **해설**: const 객체 자체를 다른 참조값으로 재할당(4번)하는 것은 불가능합니다.

**Q6 정답: ②**
* **해설**: push는 요소를 추가합니다. 요소가 1개 추가되어 length는 4가 됩니다.

**Q7 정답: ③**
* **해설**: 객체를 반환할 때 소괄호로 래핑하여 `() => ({ id: 1 })` 형태로 써야 합니다.

**Q8 정답: ③**
* **해설**: 태그 내부의 텍스트만 가져올 때는 textContent 또는 innerText를 사용합니다.

**Q9 정답: ③**
* **해설**: 이벤트 위임 시, target은 클릭된 녀석이고 currentTarget은 이벤트를 캐치하는 녀석입니다.

**Q10 정답: ②**
* **해설**: 띄어쓰기 선택자는 하위 자손을 찾는 `.find()`와 동일합니다.

**Q11 정답: ③**
* **해설**: 동적으로 변하는 상태값(boolean)은 `.prop()`으로 제어하는 것이 안전합니다.

**Q12 정답: ③**
* **해설**: 성공 시 `.then()`, 에러 시 `.catch()` 블록으로 넘어갑니다.

**Q13 정답: ④**
* **해설**: JSON에서 숫자나 불리언은 원래 따옴표 없이 씁니다.

