# Q1. Load Balancer (50점) - 체크리스트

## 📚 학습 단계
- [ ] https://docs.microsoft.com/ko-kr/azure/load-balancer/ 접속
- [ ] "Azure Load Balancer란?" 페이지 읽기
- [ ] "부하 분산 옵션" 페이지 읽기
- [ ] "Azure Load Balancer 알고리즘" 페이지 읽기
- [ ] "Azure Load Balancer 구성 요소" 페이지 읽기

## 🔧 Load Balancer 구축

### Tutorial 링크
https://docs.microsoft.com/ko-kr/azure/load-balancer/quickstart-load-balancer-standard-public-portal?tabs=option-1-create-load-balancer-standard

### 구축 순서 (Portal에서 수행)
- [x] 1. 공개 Load Balancer 생성
- [x] 2. 백엔드 풀 구성 (Backend Pool)
- [x] 3. 헬스 프로브(Health Probe) 설정
- [x] 4. 부하 분산 규칙(Load Balancing Rule) 추가
- [x] 5. 2개 이상의 VM을 백엔드 풀에 추가
- [x] 6. VM들이 정상(Healthy) 상태인지 확인

---

## 📸 스크린샷 가이드

### 📌 문제 1: 모든 리소스 페이지
**언제:** Load Balancer 구축 완료 후, 모든 리소스가 보일 때

**어디서:** 
- portal.azure.com > "모든 리소스" 메뉴

**캡처할 것:**
- 전체 화면 캡처 (우측 상단에 로그인 ID와 디렉터리 정보가 보여야 함)
- Load Balancer, Virtual Network, NIC, VM 등 모든 생성된 리소스 확인 가능해야 함

**저장 위치:** 문서의 "[답변 1]" 아래에 붙여넣기

---

### 📌 문제 2: VM 접속 확인 (2개 스크린샷)
**언제:** Load Balancer의 공인 IP로 브라우저에서 접속 가능할 때

**방법:**
1. portal.azure.com > "모든 리소스" > Load Balancer 선택
2. "공개 IP 주소" 확인 (또는 "프론트엔드 IP 구성" > 공개 IP)
3. 웹 브라우저에서 `http://<공인IP>` 로 접속

**캡처할 것:**
- **VM1에 접속된 화면** - 페이지에 VM1의 이름 또는 정보가 표시되어야 함
- **VM2에 접속된 화면** - 페이지에 VM2의 이름 또는 정보가 표시되어야 함

**팁:** 같은 주소로 여러 번 접속하거나 강제 새로고침(Ctrl+Shift+R)을 하면 부하 분산에 의해 서로 다른 VM에 연결됩니다.

**저장 위치:** 문서의 "[답변 2]" 아래에 각각 붙여넣기

---

### 📌 문제 3: 백엔드 풀 설정
**언제:** 부하 분산이 정상 작동하는 것을 확인한 후

**어디서:**
- portal.azure.com > "모든 리소스" > Load Balancer 선택
- 왼쪽 메뉴에서 "백엔드 풀" (Backend Pools) 클릭
- 백엔드 풀 항목 클릭 (예: "myBackendPool" 또는 "lb-backend-pool")

**캡처할 것:**
- 전체 화면 (우측 상단에 로그인 ID 보여야 함)
- 백엔드 풀에 포함된 VM들이 보여야 함
- 각 VM의 상태(Healthy/Unhealthy) 확인 가능해야 함

**저장 위치:** 문서의 "[답변 3]" 아래에 붙여넣기

---

## 🗑️ 리소스 삭제

### 1단계: Portal에서 리소스 그룹 삭제
- [ ] portal.azure.com 접속
- [ ] "리소스 그룹" 메뉴 클릭
- [ ] Q1에서 생성한 모든 리소스 그룹 선택
- [ ] "삭제" 클릭하고 확인

### 2단계: 모든 리소스 확인
- [ ] portal.azure.com > "모든 리소스" 확인
- [ ] Q1 관련 리소스가 남아있으면 개별 삭제

### 3단계: 크레딧 확인
- [ ] https://www.microsoftazuresponsorships.com 접속
- [ ] "Check Your Balance" 또는 "Balance" 확인
- [ ] $100 크레딧이 적절히 사용됨 확인

---

## ✅ 최종 확인
- [ ] 3가지 스크린샷 모두 캡처 완료
- [ ] 모든 리소스 삭제 완료
- [ ] 크레딧 잔액 확인 완료
- [ ] Q1 완료!
