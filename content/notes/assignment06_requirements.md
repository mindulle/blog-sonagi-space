# 과제 06: OpenStack 실습 (DevStack) 요구사항 정리

본 문서는 `[클라우드컴퓨팅] 과제 06 DevStack(OpenStack)(이름)(학번)v2.docx` 파일의 내용을 바탕으로 정리되었습니다.

## 1. 과제 개요
- **목표**: OpenStack의 핵심 컴포넌트(Glance, Nova, Neutron)를 직접 다루고 네트워크 격리를 검증함.
- **환경**: VirtualBox VM (Ubuntu 24.04 LTS 권장) + DevStack 설치.

## 2. 필수 사전 준비
1. DevStack 설치 완료 및 모든 서비스 **ACTIVE** 상태 확인.
2. Horizon 대시보드 로그인 가능 (admin 계정).
3. 터미널에서 `source openrc admin admin` 후 `openstack token issue` 정상 동작 확인.

## 3. 주요 작업 및 스크린샷 체크리스트 (To-Do List)

### Step 0: 실행 환경 확인 (스크린샷 6장)
- [ ] **증빙 (1)**: `cat /proc/cpuinfo` (마지막 프로세서 번호 포함)
- [ ] **증빙 (2)**: `cat /proc/meminfo` ("MemTotal" 부분 포함)
- [ ] **증빙 (3)**: `df -h` (전체 화면)
- [ ] **증빙 (4)**: DevStack 버전 (`git -C /opt/stack/devstack log -1 --format=%h`)
- [ ] **증빙 (5)**: OpenStack 버전 (`openstack --version`)
- [ ] **증빙 (6)**: 인증 토큰 확인 (`openstack token issue`) - Project ID 등 포함

### Step 1: 사용자 정의 Flavor 생성 (스크린샷 2장)
- [ ] Flavor 이름: `lab-mini` (vCPU 1, RAM 512MB, Disk 5GB)
- [ ] **증빙 (1)**: 생성 전 `openstack flavor list` (lab-mini가 없는 상태)
- [ ] **증빙 (2)**: 생성 후 `openstack flavor list` (lab-mini가 있는 상태)

### Step 2: 새 OS 이미지 등록 (스크린샷 2장)
- [ ] 이미지 이름: `ubuntu-24-custom`
- [ ] **증빙 (1)**: `openstack image list` (상태가 active인 것 확인)
- [ ] **증빙 (2)**: `openstack image show ubuntu-24-custom` (disk_format, size, status 포함)

### Step 3: 독립 네트워크 및 서브넷 생성 (스크린샷 3장)
- [ ] **net-A** (sub-A: 10.10.10.0/24) / **net-B** (sub-B: 10.20.20.0/24) 생성
- [ ] **증빙 (1)**: `openstack network list` (net-A, net-B 확인)
- [ ] **증빙 (2)**: `openstack subnet list` (sub-A, sub-B 대역 확인)
- [ ] **증빙 (3)**: **Horizon Topology** 화면 캡처 (두 네트워크가 분리된 상태)

### Step 4: Security Group 설정 (스크린샷 1장)
- [ ] 보안 그룹명: `lab-allow` (ICMP 및 TCP/22 SSH 허용)
- [ ] **증빙 (1)**: `openstack security group show lab-allow` (규칙 확인)

### Step 5: VM 생성 (총 4개) (스크린샷 2장)
- [ ] VM-A1, VM-A2 (net-A 소속) / VM-B1, VM-B2 (net-B 소속)
- [ ] 자원 절약을 위해 `cirros` 이미지와 `m1.tiny` Flavor 사용 권장.
- [ ] **증빙 (1)**: `openstack server list` (4개 VM 모두 ACTIVE 및 IP 확인)
- [ ] **증빙 (2)**: **Horizon Instances** 화면 캡처

### Step 6: 통신 테스트 및 격리 검증 (스크린샷 4장)
- [ ] **증빙 (1)**: 시나리오 1 (VM-A1 -> VM-A2) **PING 성공**
- [ ] **증빙 (2)**: 시나리오 2 (VM-B1 -> VM-B2) **PING 성공**
- [ ] **증빙 (3)**: 시나리오 3 (VM-A1 -> VM-B1) **PING 실패**
- [ ] **증빙 (4)**: 시나리오 4 (VM-A2 -> VM-B2) **PING 실패**
- *※ 각 캡처에는 `hostname` 명령어 결과가 함께 보여야 함.*

## 4. 참고 사항 (기타 설정)
- **비밀번호**: `ubuntu` (또는 local.conf에 설정한 값)
- **로그인 계정**: `admin`
- **환경 변수 로드**: `source /opt/stack/devstack/openrc admin admin`
- **자원 정리 (정리 시 실행)**:
  ```bash
  openstack server delete VM-A1 VM-A2 VM-B1 VM-B2
  openstack subnet delete sub-A sub-B
  openstack network delete net-A net-B
  openstack security group delete lab-allow
  openstack image delete ubuntu-24-custom
  openstack flavor delete lab-mini
  ```

---
**주의**: 모든 스크린샷은 결과 보고서(DOCX/PDF)에 첨부해야 하며, 학번과 이름을 파일명 및 첫 페이지에 명시해야 합니다.
