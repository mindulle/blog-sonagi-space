---
title: "인터넷과웹기초 기말대비 실전 모의고사 (Vol.3 파이널 풀세트)"
category: academic
tags: [exam, Web, 3-1, mock-exam, finals]
---

# 🎯 인터넷과웹기초 파이널 모의고사 (Vol.3) - 20문항 풀세트

기초적인 필수 개념부터 응용이 필요한 킬러 문항까지, 실제 기말고사와 동일하게 **총 20문항**으로 맞춘 파이널 실전 모의고사입니다. (난이도: 하~상 골고루 배치)

---

## 📝 실전 객관식 모의고사

### [단원 1] 반응형 웹 및 CSS
**Q1. [하] 모바일 기기에서 웹페이지의 너비를 화면 크기에 맞추기 위해 `<head>`에 필수적으로 넣어야 하는 태그는?**
① `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
② `<meta charset="UTF-8">`
③ `<link rel="stylesheet" href="style.css">`
④ `<title>Responsive Web</title>`

**Q2. [중] 다음 미디어 쿼리(Media Query) 코드에 대한 설명으로 틀린 것은?**
```css
@media screen and (min-width: 768px) {
  .container { display: flex; }
}
```
① 화면 너비가 768px 이상일 때 적용된다.
② 모바일 퍼스트(Mobile First) 방식으로 레이아웃을 짤 때 자주 사용되는 패턴이다.
③ 이 코드는 인쇄(print) 매체에서도 동일하게 `display: flex`가 적용된다.
④ `and` 키워드 좌우에는 반드시 공백이 있어야 정상 동작한다.

**Q3. [상] 다음 중 CSS 가변 단위에 대한 설명으로 가장 올바른 것은?**
① `px`는 기기의 해상도에 따라 크기가 유연하게 변하는 가변 단위이다.
② `em`은 브라우저의 기본 폰트 크기만을 기준으로 계산된다.
③ `rem`은 오직 최상위 루트 요소(html)의 폰트 크기를 기준으로 계산되므로 중첩 시 크기 계산이 용이하다.
④ `vh`는 뷰포트 너비의 1%를 의미한다.

---

### [단원 2] 자바스크립트 기초 문법
**Q4. [하] 자바스크립트에서 재할당이 불가능한 상수를 선언할 때 사용하는 키워드는?**
① `var`
② `let`
③ `const`
④ `static`

**Q5. [중] 다음 코드의 출력 결과로 알맞은 것은?**
```javascript
console.log(1 == '1');
console.log(1 === '1');
```
① `true`, `true`
② `false`, `false`
③ `true`, `false`
④ `false`, `true`

**Q6. [중] 다음 중 자바스크립트 조건문에서 `false`로 평가(Falsy)되지 *않는* 것은?**
① `0`
② `""` (빈 문자열)
③ `"false"` (문자열)
④ `undefined`

**Q7. [상] 자바스크립트 변수 호이스팅에 대한 설명으로 옳은 것은?**
① `var`로 선언한 변수는 블록 스코프(Block Scope)를 가진다.
② `let`과 `const`는 호이스팅(Hoisting)이 전혀 발생하지 않는다.
③ `let` 변수는 선언 라인 이전에 접근하려 하면 ReferenceError가 발생한다.
④ `const`로 선언된 객체의 속성(Property)값도 절대 변경할 수 없다.

---

### [단원 3] 자바스크립트 함수 & 배열 메서드
**Q8. [하] 배열의 끝에 새로운 데이터를 추가할 때 사용하는 메서드는?**
① `push()`
② `pop()`
③ `shift()`
④ `unshift()`

**Q9. [중] 화살표 함수(Arrow Function)에 대한 설명으로 틀린 것은?**
① `function` 키워드 대신 `=>` 기호를 사용하여 간결하게 작성한다.
② 매개변수가 하나뿐이라면 괄호 `()`를 생략할 수 있다.
③ 함수 본문이 단일 `return` 문이라면 중괄호 `{}`와 `return` 키워드를 생략할 수 있다.
④ 모든 화살표 함수는 자동으로 최상위 `window` 객체를 반환한다.

**Q10. [상] 다음 코드의 실행 결과는?**
```javascript
const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 10);
console.log(result);
```
① `[10, 20, 30, 40, 50]`
② `[2, 4]`
③ `[20, 40]`
④ `undefined`

---

### [단원 4] DOM 조작 및 이벤트
**Q11. [하] HTML 문서 내에서 id가 "myTitle"인 요소를 선택하는 올바른 자바스크립트 코드는?**
① `document.getElementByName('myTitle')`
② `document.querySelector('#myTitle')`
③ `document.querySelectorAll('myTitle')`
④ `document.getId('myTitle')`

**Q12. [중] DOM 조작 속성 중, 내부 HTML 태그를 해석하지 않고 오직 텍스트 형태로만 삽입하는 것은?**
① `innerHTML`
② `outerHTML`
③ `innerText`
④ `appendHTML`

**Q13. [상] 다음 중 특정 이벤트가 부모 요소로 전파되는 것(Bubbling)을 막기 위해 사용하는 메서드는?**
① `event.preventDefault()`
② `event.stopPropagation()`
③ `event.stopBubbling()`
④ `event.cancelBubble()`

---

### [단원 5] jQuery 기초 및 응용
**Q14. [하] jQuery를 사용하여 클래스 이름이 "box"인 모든 요소를 선택하는 코드는?**
① `$('#box')`
② `$('.box')`
③ `$('box')`
④ `jQuery('id=box')`

**Q15. [중] jQuery를 이용해 요소에 특정 CSS 클래스 'active'를 추가하는 메서드는?**
① `.css('active')`
② `.appendClass('active')`
③ `.addClass('active')`
④ `.classList.add('active')`

**Q16. [상] jQuery의 DOM 탐색 메서드 중, 자신을 포함한 조상 요소들 중에서 선택자와 일치하는 가장 가까운 단일 요소를 찾는 메서드는?**
① `.parent()`
② `.parents()`
③ `.find()`
④ `.closest()`

**Q17. [중] 순수 자바스크립트의 `document.addEventListener('DOMContentLoaded', ...)`와 동일한 역할을 하는 jQuery 코드는?**
① `$(window).load(...)`
② `$(document).ready(...)`
③ `$('body').onload(...)`
④ `$(document).on(...)`

---

### [단원 6] 비동기 처리 & 데이터 연동
**Q18. [하] 자바스크립트 객체를 네트워크 전송용 문자열로 변환할 때 사용하는 메서드는?**
① `JSON.parse()`
② `JSON.stringify()`
③ `JSON.toString()`
④ `Object.toJSON()`

**Q19. [중] 다음 중 JSON 포맷으로 올바르게 작성된 데이터는?**
① `{ title: "Web", score: 100 }`
② `{ 'title': 'Web', 'score': 100 }`
③ `{ "title": "Web", "score": 100 }`
④ `[ "title": "Web", "score": 100 ]`

**Q20. [상] 비동기 처리를 위한 `fetch` 함수와 관련된 설명으로 거리가 *먼* 것은?**
① `fetch`는 비동기적으로 네트워크 요청을 보내고 Promise 객체를 반환한다.
② 응답받은 순수 텍스트 데이터를 JSON 객체로 파싱하기 위해 `.json()` 메서드를 호출한다.
③ `await` 키워드는 동기 함수(일반 함수) 내부에서도 자유롭게 사용할 수 있다.
④ 네트워크 오류 등 예외 상황을 처리하기 위해 `try ... catch` 블록으로 감싸는 것이 권장된다.

---

## 🔑 파이널 20문항 정답 (빠른 채점용)

* **1단원**: Q1(①), Q2(③), Q3(③)
* **2단원**: Q4(③), Q5(③), Q6(③), Q7(③)
* **3단원**: Q8(①), Q9(④), Q10(③)
* **4단원**: Q11(②), Q12(③), Q13(②)
* **5단원**: Q14(②), Q15(③), Q16(④), Q17(②)
* **6단원**: Q18(②), Q19(③), Q20(③)

> 💡 **해설 요약**: 
> * **Q3**: rem은 루트(html) 기준이므로 요소 중첩에 따른 계산 오차를 막아줍니다.
> * **Q5**: `===`는 값뿐만 아니라 타입(자료형)까지 완벽히 일치해야 true를 반환합니다.
> * **Q6**: 글자가 들어있는 문자열 `"false"`는 내용이 있기 때문에 자바스크립트에서 true(Truthy)로 평가됩니다.
> * **Q7**: `let`도 호이스팅은 되지만 '일시적 사각지대(TDZ)'에 빠지므로 선언 전에 쓰면 에러가 납니다.
> * **Q10**: filter로 짝수만 걸러낸 배열 `[2, 4]`에 map을 돌려 10씩 곱하므로 `[20, 40]`이 됩니다.
> * **Q13**: 버블링 방지는 `stopPropagation()`, 브라우저 기본 동작(링크 이동 등) 방지는 `preventDefault()`입니다.
> * **Q16**: 클릭된 위치에서 가장 가까운 특정 부모 카드를 찾을 때 `closest()`가 핵심적으로 쓰입니다.
> * **Q20**: `await`는 반드시 `async` 키워드가 붙은 함수 안에서만 써야 합니다!
