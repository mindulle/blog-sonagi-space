# Q2. Virtual Machine Scale Set (50점) - 체크리스트

## 📚 학습 단계
- [ ] https://docs.microsoft.com/ko-kr/azure/virtual-machine-scale-sets/ 접속
- [ ] 왼쪽 메뉴에서 "자습서" 섹션 클릭
- [ ] "만들기 및 관리" 튜토리얼 읽기
- [ ] "부하 분산 장치 통합" 읽기
- [ ] "확장 집합 자동 크기 조정" 읽기

---

## 🔧 Azure Cloud Shell 설정

### Step 1: Cloud Shell 생성
- [ ] portal.azure.com 상단의 Cloud Shell 아이콘(`>_`) 클릭
- [ ] "Bash" 선택 (PowerShell 아님!)
- [ ] Storage Account 생성 (자동)

### Step 2: Bash 확인
```bash
echo $0
```
**예상 결과:** `/bin/bash` 출력

- [ ] 명령어 실행 후 `/bin/bash` 확인

---

## 🛠️ VMSS 구축 순서

### Step 1: 리소스 그룹 생성
```bash
az group create \
  --name myResourceGroup \
  --location eastus
```

**예상 결과:** JSON 형식의 리소스 그룹 정보 출력
- [ ] 리소스 그룹 생성 확인

---

### Step 2: VMSS 생성
```bash
az vmss create \
  --resource-group myResourceGroup \
  --name myScaleSet \
  --image UbuntuLTS \
  --upgrade-policy-mode Automatic \
  --admin-username azureuser \
  --generate-ssh-keys \
  --instance-count 2
```

**예상 결과:** 
- VMSS와 함께 Load Balancer, NIC, Disk 등 자동 생성
- JSON 형식의 리소스 정보 출력

- [ ] VMSS 생성 완료

---

### Step 3: 인스턴스 목록 확인
```bash
az vmss list-instances \
  --resource-group myResourceGroup \
  --name myScaleSet \
  --output table
```

**예상 결과:** 테이블 형식으로 2개 VM 정보 표시
```
InstanceId  LatestModelApplied    Name          ProvisioningState    ResourceGroup
-----------  --------------------  -----------  -------------------  ---------------
0            True                  myScaleSet0  Succeeded            myResourceGroup
1            True                  myScaleSet1  Succeeded            myResourceGroup
```

📸 **스크린샷 찍기:** 이 화면을 캡처 → 문서의 **"답변 1"** 아래 붙여넣기
- [ ] 스크린샷 완료

---

### Step 4: 인스턴스 상세 정보 확인
```bash
az vmss get-instance-view \
  --resource-group myResourceGroup \
  --name myScaleSet \
  --instance-id 0
```

```bash
az vmss get-instance-view \
  --resource-group myResourceGroup \
  --name myScaleSet \
  --instance-id 1
```

**예상 결과:** 각 VM의 상세 정보(상태, IP, 프로비저닝 상태 등)
- [ ] 2개 VM 상세 정보 확인

---

## 📊 자동 확장(AutoScale) 설정

### Step 1: 자동 크기 조정 프로필 생성
```bash
az monitor autoscale create \
  --resource-group myResourceGroup \
  --resource-type Microsoft.Compute/virtualMachineScaleSets \
  --resource myScaleSet \
  --name autoscale \
  --min-count 2 \
  --max-count 10 \
  --count 2
```

**예상 결과:** 자동 크기 조정 프로필 생성 완료
- [ ] 자동 크기 조정 프로필 생성 확인

---

### Step 2: Scale Out 규칙 추가 (CPU 80% 초과 시 +2)
```bash
az monitor autoscale rule create \
  --resource-group myResourceGroup \
  --autoscale-name autoscale \
  --condition "Percentage CPU > 80 avg 3m" \
  --scale out 2
```

**예상 결과:** 규칙 생성 완료
- [ ] Scale Out 규칙 추가 확인

---

### Step 3: Scale In 규칙 추가 (CPU 30% 미만 시 -1)
```bash
az monitor autoscale rule create \
  --resource-group myResourceGroup \
  --autoscale-name autoscale \
  --condition "Percentage CPU < 30 avg 3m" \
  --scale in 1
```

**예상 결과:** 규칙 생성 완료
- [ ] Scale In 규칙 추가 확인

---

### Step 4: 규칙 목록 확인
```bash
az monitor autoscale rule list \
  --resource-group myResourceGroup \
  --autoscale-name autoscale \
  --output table
```

**예상 결과:** 테이블 형식으로 2개 규칙 표시

📸 **스크린샷 찍기:** 이 화면을 캡처 → 문서의 **"답변 2"** 아래 붙여넣기
- [ ] 스크린샷 완료

---

## 📝 Custom Script 생성

### Step 1: customConfig.json 파일 생성
Cloud Shell에서 다음 명령어로 파일 생성:

```bash
cat > customConfig.json << 'EOF'
{
  "fileUris": ["https://raw.githubusercontent.com/Azure-Samples/compute-automation-configurations/master/automate_nginx.sh"],
  "commandToExecute": "bash automate_nginx.sh"
}
EOF
```

**확인:**
```bash
cat customConfig.json
```

**예상 결과:** JSON 파일 내용 표시
- [ ] customConfig.json 파일 생성 확인

---

### Step 2: Custom Script Extension 적용
```bash
az vmss extension set \
  --resource-group myResourceGroup \
  --vmss-name myScaleSet \
  --name CustomScript \
  --publisher Microsoft.Azure.Extensions \
  --version 2.0 \
  --settings customConfig.json
```

**예상 결과:** 확장 적용 완료
- [ ] Custom Script 적용 확인

---

## 🌐 Load Balancer Rule 추가

### Step 1: Load Balancer 확인
```bash
az network lb list \
  --resource-group myResourceGroup \
  --output table
```

**예상 결과:** 자동으로 생성된 Load Balancer 목록 (일반적으로 `myScaleSetLB`)
- [ ] Load Balancer 확인

---

### Step 2: LB Rule 추가
```bash
az network lb rule create \
  --resource-group myResourceGroup \
  --lb-name myScaleSetLB \
  --name myLoadBalancerRuleWeb \
  --protocol tcp \
  --frontend-port 80 \
  --backend-port 80 \
  --frontend-ip-name loadBalancerFrontEnd \
  --backend-pool-name myScaleSetLBBEPool
```

**예상 결과:** LB Rule 생성 완료
- [ ] LB Rule 생성 확인

---

## 🖥️ 웹 서버 접속 테스트

### Step 1: Load Balancer 공개 IP 확인
```bash
az network public-ip list \
  --resource-group myResourceGroup \
  --query "[].ipAddress" \
  --output tsv
```

**예상 결과:** 공개 IP 주소 (예: `40.123.45.67`)
- [ ] 공개 IP 확인

### Step 2: 웹 브라우저에서 접속
1. 웹 브라우저 열기
2. 주소창에 `http://<공개IP>` 입력 (예: `http://40.123.45.67`)
3. Enter 키 누르기

**예상 결과:** nginx 기본 페이지 + 호스트명 출력

4. **강제 새로고침** (Ctrl+Shift+R 또는 Cmd+Shift+R) 여러 번 반복

**확인:**
- 페이지의 호스트명이 변경되는가? (myScaleSet0 ↔ myScaleSet1)
- → 다른 VM들로 부하 분산되고 있음을 의미

📸 **스크린샷 찍기:** 
- **VM #1 응답 화면** 캡처 → 문서의 **"답변 3"** 아래 붙여넣기
- **VM #2 응답 화면** 캡처 → 문서의 **"답변 3"** 아래 붙여넣기 (2개 이미지)

- [ ] VM #1 스크린샷 완료
- [ ] VM #2 스크린샷 완료

---

## 🔥 CPU 로드 테스트 (자동 확장 확인)

### Step 1: VM SSH 연결 정보 확인
```bash
az vmss list-instance-connection-info \
  --resource-group myResourceGroup \
  --name myScaleSet \
  --output table
```

**예상 결과:**
```
IpAddress      Port
-----------  ------
40.123.45.67 50000
40.123.45.67 50001
```

- [ ] SSH 연결 정보 확인

---

### Step 2: VM #0에 SSH 접속
```bash
ssh -i ~/.ssh/id_rsa -p 50000 azureuser@40.123.45.67
```

**팁:**
- IP와 포트는 위에서 확인한 값 사용
- SSH 키는 자동으로 생성되어 `~/.ssh/id_rsa`에 저장됨
- "yes"를 입력하여 접속 확인

---

### Step 3: VM에서 CPU 로드 생성 (VM #0)
```bash
sudo apt-get update
sudo apt-get -y install stress
sudo stress --cpu 10 --timeout 300 &
```

**예상 결과:**
- stress 작업 시작 메시지 출력
- Job 번호 표시 (예: `[1] 1234`)

- [ ] VM #0 CPU 로드 시작

---

### Step 4: VM #1도 동일하게 처리
다시 로컬 Cloud Shell로 돌아와서:
```bash
exit
```

그 다음 VM #1에 접속:
```bash
ssh -i ~/.ssh/id_rsa -p 50001 azureuser@40.123.45.67
```

VM #1에서도 동일하게 실행:
```bash
sudo apt-get update
sudo apt-get -y install stress
sudo stress --cpu 10 --timeout 300 &
exit
```

- [ ] VM #1 CPU 로드 시작

---

### Step 5: 자동 확장 모니터링 (11분 이상!)
```bash
watch az vmss list-instances \
  --resource-group myResourceGroup \
  --name myScaleSet \
  --output table
```

**예상 결과:**
- 처음: 2개 인스턴스 (myScaleSet0, myScaleSet1)
- 약 5분 후: CPU 높음 감지 → **4개 인스턴스로 확장** (myScaleSet0, 1, 2, 3)
- 약 11분 후: CPU 낮음 감지 → **2개 인스턴스로 축소** (myScaleSet0, 1)

**시간표 예상:**
- 0분: 시작 (2개 인스턴스)
- 5분: Scale Out 트리거 (휴지 기간)
- 6분: 4개 인스턴스 도달
- 11분: CPU 낮아짐 감지
- 12분: Scale In 트리거 (휴지 기간)
- 13분: 2개 인스턴스로 축소

📸 **스크린샷 찍기:** 
- **4개 인스턴스 상태** 화면 캡처 → 문서의 **"답변 4"** 아래 붙여넣기

- [ ] 4개 인스턴스 스크린샷 완료

**종료:**
- Watch 종료: Ctrl+C 누르기

---

## 📋 최종 리소스 상태 확인

### Step 1: Portal에서 최종 상태 확인
portal.azure.com > "모든 리소스" 접속

**확인할 것:**
- myScaleSet (VMSS)
- myScaleSetLB (Load Balancer)
- 2개 이상의 VM 인스턴스
- Network Interface, Disk, Public IP 등

📸 **스크린샷 찍기:** 
- **전체 화면 캡처** (우측 상단에 로그인 ID 보여야 함) → 문서의 **"답변 5"** 아래 붙여넣기

- [ ] 최종 상태 스크린샷 완료

---

## 🗑️ 모든 리소스 삭제

### ⚠️ 매우 중요!
비용 청구를 방지하기 위해 반드시 리소스 삭제!

### Step 1: Cloud Shell에서 리소스 그룹 삭제
```bash
az group delete --name myResourceGroup --yes --no-wait
```

**예상 결과:** 삭제 요청 즉시 반환 (백그라운드에서 삭제 진행)

- [ ] 리소스 그룹 삭제 명령 실행

---

### Step 2: Portal에서 확인 및 정리
1. portal.azure.com > "리소스 그룹" 메뉴
2. myResourceGroup이 "삭제 중" 상태인지 확인
3. 완전히 삭제될 때까지 대기 (5-10분)

- [ ] 리소스 그룹 삭제 대기

---

### Step 3: 남은 리소스 정리
```bash
az resource list --resource-group myResourceGroup --output table
```

**결과:** 아무것도 나오지 않아야 함 (모두 삭제됨)

- [ ] 리소스 완전 삭제 확인

---

### Step 4: 크레딧 확인
- [ ] https://www.microsoftazuresponsorships.com 접속
- [ ] "Balance" 확인
- [ ] $100에서 적절히 차감된 금액 확인

---

## ✅ Q2 최종 체크리스트
- [ ] 5가지 스크린샷 모두 캡처 완료
  - [ ] 답변 1: VMSS 인스턴스 목록
  - [ ] 답변 2: 자동확장 규칙 목록
  - [ ] 답변 3: VM #1 웹 화면
  - [ ] 답변 3: VM #2 웹 화면
  - [ ] 답변 4: 4개 인스턴스 상태
  - [ ] 답변 5: 최종 모든 리소스
- [ ] 모든 리소스 삭제 완료
- [ ] 크레딧 잔액 확인 완료
- [ ] Q2 완료!

---

## 🔗 참고 문서
- [Azure VMSS 공식 문서](https://docs.microsoft.com/ko-kr/azure/virtual-machine-scale-sets/)
- [Azure CLI 명령어 레퍼런스](https://learn.microsoft.com/ko-kr/cli/azure/)
- [Custom Script Extension](https://docs.microsoft.com/ko-kr/azure/virtual-machines/extensions/custom-script-windows)
