---
title: "인터넷과웹기초 기말대비 실전 모의고사 (Vol.3 C)"
category: academic
tags: [exam, Web, 3-1, mock-exam, finals]
---

# 🎯 인터넷과웹기초 파이널 모의고사 (Vol.3 C)

이론 및 함정 방어 중심

---

## 📝 실전 객관식 모의고사

**Q1. [CSS] 반응형 웹 레이아웃 구성을 위한 Flexbox 속성 중 요소들을 가로 축으로 정렬하는 기준 속성은?**
① align-items
② justify-content
③ flex-direction
④ flex-wrap

**Q2. [CSS] 반응형 웹에서 레이아웃이 변하는 분기점(해상도)을 지칭하는 용어는?**
① Breakpoint
② Viewport
③ Grid Line
④ Media Query

**Q3. [배열] 배열의 요소들을 순서대로 하나의 문자열로 결합하려 한다. 올바른 메서드는?**
① arr.concat()
② arr.split('')
③ arr.join('')
④ arr.slice()

**Q4. [배열] 다음 중 원본 배열을 변형(Mutate)시키는 메서드는?**
① map()
② filter()
③ push()
④ slice()

**Q5. [문법] 함수 매개변수의 기본값(Default Parameter)을 설정하는 문법으로 올바른 것은?**
① function sum(a, b=0) { ... }
② function sum(a, b: 0) { ... }
③ function sum(a, b || 0) { ... }
④ function sum(a, default b=0) { ... }

**Q6. [문법] 전개 구문(Spread Syntax)을 사용하여 두 배열(a, b)을 합치는 코드로 올바른 것은?**
① const arr = [...a, ...b];
② const arr = [a ... b];
③ const arr = a + b;
④ const arr = concat(a, b);

**Q7. [이벤트] 동적으로 생성된 요소에 이벤트를 바인딩하기 위해 부모에 이벤트 위임(Event Delegation)을 하는 이유는?**
① 메모리를 적게 차지하므로 무조건 빠르다.
② 자식 요소는 addEventListener를 사용할 수 없기 때문이다.
③ 새로 추가된 요소에는 미리 직접 리스너를 달 수 없기 때문이다.
④ 보안상의 이유로 금지되어 있다.

**Q8. [jQuery] jQuery 객체의 특정 인덱스 요소를 순수 자바스크립트 DOM 객체로 꺼내오는 메서드는?**
① .get(0)
② .eq(0)
③ .first()
④ .item(0)

**Q9. [jQuery] jQuery의 `.each()` 문법에서 콜백 함수의 인자 순서로 올바른 것은?**
① .each(function(element, index))
② .each(function(index, element))
③ .each(function(key, value, array))
④ .each(function(event))

**Q10. [비동기] 비동기 처리 모델에서 프로미스(Promise) 객체가 가질 수 없는 상태(State)는?**
① Pending (대기)
② Fulfilled (이행/성공)
③ Rejected (거부/실패)
④ Stopped (정지)

---

## 🔑 정답 및 해설

**Q1 정답: ②**
* **해설**: Flex 주축(기본 가로) 정렬은 `justify-content`를 사용합니다.

**Q2 정답: ①**
* **해설**: 디자인 레이아웃이 변하는 분기점 수치를 Breakpoint(중단점)라고 부릅니다.

**Q3 정답: ③**
* **해설**: `.join('')`은 배열의 모든 요소를 이어붙여 문자열로 만듭니다.

**Q4 정답: ③**
* **해설**: map, filter, slice는 새 배열을 반환하지만, push나 pop은 원본 배열을 바꿉니다.

**Q5 정답: ①**
* **해설**: 할당 연산자(=)를 이용하여 b=0 과 같이 기본값을 설정합니다.

**Q6 정답: ①**
* **해설**: 마침표 세 개(...)를 통해 배열 껍질을 벗겨내고 새로운 배열 안에 합칠 수 있습니다.

**Q7 정답: ③**
* **해설**: DOM 로드 시점에 존재하지 않던 동적 요소의 클릭을 감지하려면 이미 존재하는 부모를 이용해야 합니다.

**Q8 정답: ①**
* **해설**: `.eq(0)`은 여전히 jQuery 객체를 반환하고, `.get(0)`이나 `[0]`은 순수 DOM 노드를 반환합니다.

**Q9 정답: ②**
* **해설**: 자바스크립트의 forEach와 달리 jQuery each는 (index, element) 순서입니다.

**Q10 정답: ④**
* **해설**: Promise는 Pending, Fulfilled, Rejected 세 가지 상태만 가집니다.

