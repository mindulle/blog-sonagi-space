# 클라우드컴퓨팅 과제 04 - MS Azure 실습 해야 할 일 목록

**주의사항**:
- 모든 캡처 화면은 `[클라우드컴퓨팅] 과제 04 MS Azure 1 (이름)(학번)-v5.docx` 문서의 정해진 위치에 삽입해야 합니다.
- 샌드박스를 사용하는 경우 `https://portal.azure.com/learn.docs.microsoft.com` 로 접속하세요.
- 각 웹페이지의 `XXXX` 부분에는 본인의 영문 이름을 입력해야 합니다.

---

## [Q 1] 윈도우 서버 + IIS (50점)

### 1. 윈도우 VM 생성
- [ ] Azure Portal 접속 및 "가상 머신" 메뉴로 이동.
- [ ] [Azure에서 Windows 가상 머신 만들기 튜토리얼](https://docs.microsoft.com/ko-kr/learn/modules/create-windows-virtual-machine-in-azure/)을 참고하여 Windows 가상 머신 생성.
- [ ] 튜토리얼 중 **"Windows VM에 연결"** 까지만 진행하여 RDP로 원격 접속.
- [ ] 📸 **[문제 1 캡처]**: 생성한 Windows VM의 "개요" 페이지 화면 전체 캡처.

### 2. 네트워크(방화벽) 설정 및 IIS 웹 서버 구축
- [ ] Windows VM "개요" 페이지 좌측 메뉴에서 **[설정 > 네트워킹]** 선택.
- [ ] **"인바운드 포트 규칙 추가"** 클릭하여 HTTP (포트 80) 인바운드 허용 규칙 추가.
- [ ] RDP로 접속한 윈도우 VM 내부에서 **PowerShell**을 관리자 권한으로 실행.
- [ ] 다음 명령어 입력하여 IIS 설치:
  ```powershell
  Install-WindowsFeature -name Web-Server -IncludeManagementTools
  ```
- [ ] 탐색기를 열어 `C:\inetpub\wwwroot` 경로로 이동.
- [ ] `iisstart.html` 파일을 메모장으로 열어 모든 내용을 지움.
- [ ] 다음 문구 작성 후 저장 (XXXX에 본인 영문 이름):
  ```html
  Hello World. My name is XXXX. This is a Windows VM on MS Azure!
  ```
- [ ] VM 내부의 웹 브라우저에서 `http://127.0.0.1` 접속하여 페이지 정상 확인.
- [ ] 본인 컴퓨터(로컬 PC)의 웹 브라우저에서 **Windows VM의 공인 IP 주소**로 접속.
- [ ] 📸 **[문제 2 캡처]**: 로컬 PC 웹 브라우저에서 접속 성공한 화면 캡처.

---

## [Q 2] 리눅스 VM 생성하기 + Apache2 (50점)

### 1. 리눅스 VM 생성
- [ ] [Linux VM 만들기 튜토리얼](https://learn.microsoft.com/ko-kr/azure/virtual-machines/linux/quick-create-portal?tabs=ubuntu) 참고 (샌드박스 미제공).
- [ ] Azure Portal에서 Ubuntu 등 Linux OS로 가상 머신 생성 및 SSH 접속.
- [ ] 📸 **[문제 1 캡처]**: 생성한 Linux VM의 "개요" 페이지 화면 전체 캡처.

### 2. Apache2 (또는 Nginx) 설치 및 서비스 확인
- [ ] SSH로 접속한 리눅스 터미널에서 Apache2 설치 (Ubuntu 기준):
  ```bash
  sudo apt update
  sudo apt install apache2
  ```
- [ ] 서비스 상태 확인 명령어 실행:
  ```bash
  sudo systemctl status apache2 --no-pager
  ```
- [ ] 📸 **[문제 2 캡처]**: 위 명령어 실행 결과(상태가 active/running으로 표시된 터미널 화면) 캡처.

### 3. 네트워크(방화벽) 설정 및 웹 페이지 수정
- [ ] Linux VM "개요" 페이지 좌측 메뉴에서 **[설정 > 네트워킹]** 선택.
- [ ] **"인바운드 포트 규칙 추가"** 클릭하여 HTTP (포트 80) 인바운드 허용 규칙 추가.
- [ ] SSH 접속 터미널에서 웹 루트 폴더로 이동:
  ```bash
  cd /var/www/html
  ```
- [ ] `index.html` 파일을 열어 내용을 지우고 아래 문구로 수정 (XXXX에 본인 영문 이름):
  ```bash
  echo "Hello world. My name is XXXX. This is a Linux VM on MS Azure!" | sudo tee index.html
  ```
- [ ] 본인 컴퓨터(로컬 PC)의 웹 브라우저에서 **Linux VM의 공인 IP 주소**로 접속.
- [ ] 📸 **[문제 3 캡처]**: 로컬 PC 웹 브라우저에서 접속 성공한 화면 캡처.

---

## 제출 전 최종 확인
- [ ] MS Word 문서(`[클라우드컴퓨팅] 과제 04 MS Azure 1 (이름)(학번)-v5.docx`)의 질문 1, 2, 3 영역에 총 5개의 캡처가 모두 들어갔는지 확인.
- [ ] 파일명을 `[클라우드컴퓨팅] 과제 04 MS Azure 1 (본인이름)(학번).pdf`로 변경하여 제출 (PDF 변환 권장).
