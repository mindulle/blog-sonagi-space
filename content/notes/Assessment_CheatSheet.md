---
title: '어세스먼트 실전 치트시트 (Assessment Cheat Sheet)'
category: 'Computing/DSA'
tags: [anki-sync, card, assessment, cheatsheet]
cards-deck: 'LLM-Wiki::Assessment'
---

## 어세스먼트 실전 엣지 케이스 및 함정 (Cheat Sheet)

이 문서는 실전 알고리즘 어세스먼트 및 시스템 설계 면접에서 자주 발생하는 치명적인 버그와 엣지 케이스들을 모아둔 치트시트입니다.
아래 항목들은 플러그인을 통해 자동으로 Anki 카드(`::` 문법)로 동기화됩니다.

## 🐍 Python & 코딩 패턴 함정

Python Mutable Default Argument 버그의 원인과 해결책은? :: 함수의 기본 인자로 `memo={}` 같은 가변(Mutable) 객체를 주면 함수 선언 시 1번만 평가되므로, 여러 번 호출 시 데이터가 누적(오염)됨. `memo=None`으로 두고 내부에서 초기화해야 함.

이진 탐색(Binary Search)에서 `mid = (left + right) // 2` 의 문제점과 안전한 코드는? :: 언어에 따라 `left + right`에서 Integer Overflow가 발생할 수 있음 (파이썬은 예외). 안전한 식은 `mid = left + (right - left) // 2` 임.

배열 내 요소가 모두 음수일 때 카데인(Kadane's) 알고리즘이 오작동(`0` 반환)하는 원인은? :: `max_sum`을 `0`으로 초기화했기 때문. 배열의 첫 번째 원소(`nums[0]`) 또는 `-float('inf')`로 초기화해야 정상적으로 가장 큰 음수를 반환함.

그리디(Greedy) 알고리즘으로 동전 거스름돈(Coin Change) 문제를 풀면 안 되는 경우는? :: 동전 단위들이 서로 배수 관계(예: 1, 5, 10, 50)가 아닐 때 (예: `[1, 3, 4]`로 6을 만들 때). 이 경우 그리디는 `4+1+1=3`개를 찾지만, DP는 `3+3=2`개를 찾음.

DFS를 이용한 그래프 사이클 검출(Topological Sort)에서 단순 `visited` Set 넣기/빼기(백트래킹)의 문제점은? :: 완전히 안전하다고 판명된 노드를 기록(Memoization)하지 않으면, 이미 검사한 경로를 다른 노드에서 재검사하게 되어 시간 초과(TLE, O(V\*E) 이상)가 발생함. 미방문(0), 방문중(1), 방문완료(2)의 3가지 상태 추적이 필수.

## 📊 Data Science & SQL 함정

Pandas에서 `seniors['status'] = 'senior'` 실행 시 발생하는 경고와 해결책은? :: `SettingWithCopyWarning` 경고 발생. 원본 데이터프레임의 뷰(View)인지 복사본(Copy)인지 모호한 상태에서 수정(Chained Assignment)했기 때문. `df.loc[조건, 'status'] = 'senior'` 로 직접 수정해야 함.

SQL에서 부서별 최고 급여자를 찾을 때 `SELECT name, MAX(salary) GROUP BY dept_id` 가 에러나는 이유는? :: 대부분의 표준 RDBMS에서는 `GROUP BY`에 명시되지 않은 일반 컬럼(`name`)을 집계 함수 없이 SELECT 절에 쓸 수 없음. 윈도우 함수(`RANK() OVER ...`)나 서브쿼리 조인 사용 필수.

SQL: "주문 내역이 없는 고객도 포함하여 총 주문 금액(0) 표시" 시 주의할 조인과 함수는? :: `INNER JOIN`을 쓰면 주문 없는 고객이 누락되므로 `LEFT JOIN`을 써야 함. 또한 결과가 `NULL`로 나오므로 `COALESCE(SUM(amount), 0)`으로 감싸야 함.

## 🏗️ 시스템 설계 (System Design) 함정

URL Shortener 설계 시 MD5 해시 앞부분만 잘라서 식별자로 쓸 때의 가장 큰 문제 2가지는? :: 1. 높은 해시 충돌(Collision) 확률 2. 충돌 시마다 DB 조회가 발생해 쓰기(Write) 병목 발생. (해결: 분산 ID 생성기 + Base62 인코딩 적용)

실시간 채팅 앱(WhatsApp 등)에서 클라이언트가 매초 서버에 `GET /messages`를 보내는 방식의 이름과 치명적 단점은? :: HTTP Polling. 무의미한 빈 요청이 폭주하여 서버 트래픽과 리소스가 심각하게 낭비됨. 양방향 영구 연결을 지원하는 `WebSocket`이나 `SSE`를 사용해야 함.

Redis로 Rate Limiter(요청 제한기) 구현 시 `GET`과 `INCR`을 분리해서 호출하면 생기는 문제는? :: 동시성 문제(Race Condition). 두 스레드가 동시에 `GET`으로 제한 도달 전임을 확인한 뒤 각각 `INCR`을 호출하면 허용 한도를 초과하게 됨. `INCR` 후 반환값으로 분기하거나 Lua 스크립트를 써서 원자성(Atomicity)을 보장해야 함.
