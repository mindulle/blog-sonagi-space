---
title: 'Google Copybara: 저장소 간 코드 이동 | GeekNews'
url: 'https://news.hada.io/topic?id=31018'
source: 'Discord Web Clipper'
clipped_at: '2026-07-02 05:19:23'
---

[▲](javascript:vote(31018, 'up'); "토픽 추천")

[Google Copybara: 저장소 간 코드 이동\
============================](https://github.com/google/copybara)
(github.com/google)

3P by [GN⁺](https://news.hada.io/@neo)
9시간전 | [★ favorite](javascript:fav(31018, 'favorite')) | [댓글 1개](https://news.hada.io/topic?id=31018)

- **Copybara**는 Google 내부에서 쓰이는 도구로, 여러 저장소 사이에서 소스 코드를 변환하고 이동해 confidential 저장소와 public 저장소를 동기화하는 사례에 쓰임
- 하나의 저장소를 **권위 있는 저장소**로 선택해 단일 진실 공급원을 유지하지만, 기여는 어느 저장소에서도 받을 수 있고 릴리스도 어느 저장소에서든 만들 수 있음
- 주요 사용 사례는 반복적인 코드 이동이며, confidential 저장소에서 public 저장소로 일부 코드를 가져오거나 public 저장소 변경을 authoritative 저장소로 가져오는 흐름을 지원함
- Copybara는 상태를 별도 서버가 아니라 대상 저장소의 **커밋 메시지 라벨**에 저장하는 stateless 방식이라, 여러 사용자나 서비스가 같은 설정과 저장소에서 같은 결과를 얻을 수 있음
- 현재 지원 저장소 유형은 **Git**이며 Mercurial 읽기는 실험적 기능이고, 확장 가능한 구조로 맞춤 origin과 destination을 추가할 수 있음

---

## Copybara가 해결하는 문제

- **Copybara**는 저장소 간 소스 코드 이동과 변환을 위한 도구임
- 소스 코드가 여러 저장소에 존재해야 하는 경우가 있으며, Copybara는 이런 저장소 사이에서 코드를 변환하고 이동할 수 있게 함
- 대표 사례는 **confidential 저장소**와 **public 저장소**를 동기화해서 유지하는 프로젝트임
- 가장 흔한 사용 방식은 한 저장소에서 다른 저장소로 코드를 반복적으로 옮기는 것임
- 새 저장소로 코드를 한 번만 옮기는 용도로도 사용할 수 있음

## 권위 저장소와 기여 흐름

- Copybara는 저장소 중 하나를 **authoritative repository**로 선택해야 함
  - 항상 하나의 **source of truth**가 존재하도록 하기 위한 조건임
- 기여는 어느 저장소에서도 가능함
- 릴리스도 어느 저장소에서든 만들 수 있음
- 비권위 저장소에서 변경이 발생하면 Copybara가 해당 변경을 변환해 권위 저장소의 적절한 위치로 이동할 수 있음
  - 예시는 public 저장소의 contributor가 만든 변경임
  - 병합 충돌은 권위 저장소 안에서 오래된 변경을 처리하는 방식과 동일하게 다룸

## 사용 예시

- Copybara 사용 예시는 다음을 포함함
  - confidential 저장소의 코드 일부를 public 저장소로 가져오기
  - public 저장소의 코드를 confidential 저장소로 가져오기
  - non-authoritative 저장소의 변경을 authoritative 저장소로 가져오기
- 예시 설정은 `core.workflow`로 origin과 destination을 정의함
  - origin은 `git.github_origin`으로 `[https://github.com/google/copybara.git](https://github.com/google/copybara.git) `의 `master`를 사용함
  - destination은 `git.destination`으로 `file:///tmp/foo`를 사용함
  - `destination_files`는 `third_party/copybara/**`를 대상으로 하고 `README_INTERNAL.txt`는 제외함
  - `core.replace`와 `core.move`로 BUILD 파일 경로 치환과 디렉터리 이동을 수행함
- 실행 예시는 bare Git 저장소를 만든 뒤 `copybara copy.bara.sky`를 실행하는 방식임

## 상태 저장 방식과 저장소 지원

- Copybara의 주요 특징 중 하나는 **stateless** 구조임
- 더 정확히는 상태를 대상 저장소에 저장함
  - 저장 위치는 커밋 메시지의 **라벨**임
- 이 방식으로 여러 사용자나 서비스가 같은 설정과 저장소 조합을 사용해 같은 결과를 얻을 수 있음
- 현재 지원되는 저장소 유형은 **Git**임
- Mercurial 저장소에서 읽는 기능은 가능하지만 아직 **실험적**임
- 확장 가능한 아키텍처를 통해 거의 모든 사용 사례에 맞는 bespoke origin과 destination을 추가할 수 있음
- 다른 저장소 유형의 공식 지원은 향후 추가될 예정임

## 설치와 빌드

- 시작하기 가장 쉬운 방법은 사전 빌드 바이너리가 포함된 주간 **snapshot release**를 사용하는 것임
  - 릴리스는 자동으로 만들어짐
  - 수동 테스트, 버전 호환성, 정확성 보장은 없음
  - 릴리스는 `[https://github.com/google/copybara/releases](https://github.com/google/copybara/releases) `에서 선택함
- 미릴리스 버전을 쓰려면 HEAD에서 빌드해야 함
  - [JDK 11](https://www.oracle.com/java/technologies/downloads/#java11)
    설치 필요
  - [Bazel](https://bazel.build/install)
    설치 필요
  - `git clone [https://github.com/google/copybara.git](https://github.com/google/copybara.git) `로 소스 복제
  - `bazel build //java/com/google/copybara`로 빌드
  - 실행 가능한 uberjar는 `bazel build //java/com/google/copybara:copybara_deploy.jar`로 생성
  - 테스트는 `bazel test //...`로 실행 가능함
- 일부 테스트는 Mercurial, Quilt 같은 기반 도구 설치가 필요함
  - Pull Request가 해당 모듈과 관련 없으면 해당 테스트를 건너뛰어도 됨
  - CI는 모든 테스트를 실행함
- Arch Linux에서는 [`aur/copybara-git`](https://aur.archlinux.org/packages/copybara-git)
  패키지를 사용할 수 있음

## Bazel에서 사전 빌드 Copybara 사용

- 주간 snapshot release를 Bazel에서 사용할 수 있음
- Copybara는 class file version 65.0으로 제공되므로 **Java Runtime 21 이상**에서 실행해야 함
  - `.bazelrc`에 `run --java_runtime_version=remotejdk_21` 추가 필요
- `http_jar`로 release artifact를 내려받음
  - `WORKSPACE`에서는 `load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_jar")` 사용
  - `MODULE.bazel`에서는 `http_jar = use_repo_rule("@bazel_tools//tools/build_defs/repo:http.bzl", "http_jar")` 사용
- `WORKSPACE` 또는 `MODULE.bazel`에서 `[version]` 자리를 채워 `copybara_deploy.jar`를 지정함
- BUILD 파일에서는 `java_binary`를 선언해 `com.google.copybara.Main`을 main class로 사용함
- 실행 예시는 `bazel run //tools:copybara -- migrate copy.bara.sky`임

## 외부 Bazel 저장소로 소스 빌드

- Copybara 의존성을 위한 편의 매크로가 제공됨
- `WORKSPACE`에 `http_archive`를 추가하고 `{{ sha256sum }}`과 `{{ commit }}` 값을 채움
- 이후 다음 매크로를 로드하고 호출함
  - `copybara_repositories()`
  - `copybara_maven_repositories()`
  - `copybara_go_repositories()`
- 워크스페이스 안에서 `bazel run @com_github_google_copybara//java/com/google/copybara -- <args...>`로 빌드 및 실행할 수 있음

## Docker 사용

- Docker로 Copybara를 빌드하고 실행하는 방식은 현재 **실험적**임
- 빌드는 `docker build --rm -t copybara .`로 수행함
- 실행은 대상 코드 루트에서 `docker run -it -v "$(pwd)":/usr/src/app copybara help` 형태로 수행함
- 컨테이너 실행 인자 대신 환경 변수를 사용할 수 있음
  - `COPYBARA_SUBCOMMAND=migrate`: 실행 명령 변경, 기본값은 `migrate`
  - `COPYBARA_CONFIG=copy.bara.sky`: 설정 파일 경로 지정, 기본값은 루트의 `copy.bara.sky`
  - `COPYBARA_WORKFLOW=default`: 실행할 workflow 지정, 기본값은 `default`
  - `COPYBARA_SOURCEREF=''`: sourceref 지정, 기본값 없음
  - `COPYBARA_OPTIONS=''`: Copybara 옵션 지정, 기본값 없음
- Git 설정과 SSH 자격 증명은 Docker 컨테이너에 공유할 수 있음
  - 예시는 `~/.gitconfig`, `~/.ssh`, `SSH_AUTH_SOCK`를 컨테이너에 마운트하는 방식임

## 문서와 문의

- 문서는 아직 작업 중임
- 제공되는 자료는 다음과 같음
  - [Reference documentation](https://github.com/google/docs/reference.md)
  - [Examples](https://github.com/google/docs/examples.md)
  - [Tutorial on how to get started](https://blog.kubesimplify.com/moving-code-between-git-repositories-with-copybara)
- 질문은 [mailing list](https://groups.google.com/forum/#!forum/copybara-discuss)
  로 문의할 수 있음
- Bazel 테스트 오류를 로그 파일 `cat` 없이 보려면 `~/.bazelrc`에 `test --test_output=streamed`를 추가할 수 있음

## 함께 보면 좋은 글 β

- [RepoBar - 메뉴 바와 터미널에서 GitHub 저장소 상태를 한눈에 표시](https://news.hada.io/topic?id=28670)
- [open-code-review — Alibaba의 AI 코드 리뷰 도구](https://news.hada.io/topic?id=30677)
- [에버노트 → 구글 드라이브 이전 도구 (HTML 내보내기 + Google Docs 변환, macOS)](https://news.hada.io/topic?id=27055)
- [Google Code Wiki: AI가 코드 읽어주는 시대, 신입도 첫날 커밋한다](https://news.hada.io/topic?id=24360)
- [GitHub에서 Codeberg로: 나의 경험](https://news.hada.io/topic?id=24756)

## 댓글과 토론

인증 이메일 클릭후 다시 체크박스를 눌러주세요

[▲](javascript:votec(60993, 'up'); "댓글 추천")

[GN⁺](https://news.hada.io/@neo)
[9시간전](https://news.hada.io/topic?id=31018#cid60993)
  [\[-\]](javascript:child_toggle(60993, 0);)

###### [Hacker News 의견들](https://news.ycombinator.com/item?id=48740698)

- 마침 내가 게임 개발 스튜디오에서 쓰려고 만든 **Perforce 지원 패치**를 오픈소스로 공개한 직후에 이 글이 올라와서 재미있었음  
  Copybara의 주된 용도가 내부 Google 코드 배포이고, 그 코드가 Perforce와 관련 있는 Piper에 있다는 점을 생각하면 Perforce 지원이 없고 Git 지원만 의미 있게 있는 게 꽤 의외였음  
  PR을 만들기 전에 Git 이력을 보니 Gerrit Change-ID 표시가 많아서, 어딘가 내가 접근할 수 없는 Gerrit 코드 리뷰 시스템이 있고 내 PR이 업스트림되지 않을까 걱정되기도 했음  
  Perforce용 Gerrit/Rietveld가 없다는 점도 아쉽지만, 모든 걸 바랄 수는 없음  
  [https://github.com/google/copybara/pull/347](https://github.com/google/copybara/pull/347)

  - Gerrit/Rietveld에 **Perforce 지원**이 없는 이유 중 하나는 Google이 Piper에 저장된 코드 변경에 그 도구들을 쓰지 않기 때문임. 대신 **Critique**를 사용함  
    [https://abseil.io/resources/swe-book/html/ch19.html](https://abseil.io/resources/swe-book/html/ch19.html)
    [https://read.engineerscodex.com/p/how-google-takes-the-pain-...](https://read.engineerscodex.com/p/how-google-takes-the-pain-out-of)
    외부 도구 중 Critique만큼 좋은 건 아직 못 찾았고, GitHub의 빈약한 PR 리뷰 도구가 대부분에게 받아들여진다는 게 놀라움. 비슷한 수준의 도구를 아는 사람이 있으면 듣고 싶음  
    몇 년 전 Google을 떠날 때 꽤 꼼꼼히 찾아봤고 [https://codeapprove.com/](https://codeapprove.com/)
    가 가장 가까웠지만 여전히 빠진 부분이 많았음
  - Piper는 Perforce의 포크가 아님. **Perforce와 API 호환**은 되지만 완전히 다른 구현임
  - 그 저장소는 PR을 받아줌. 다만 내부에서 병합한 뒤 다시 외부로 내보내는 방식임  
    내부 모노레포에 사는 gVisor나 Bazel 같은 오픈소스 프로젝트도 약간씩 차이는 있지만 대체로 비슷하게 운영됨

- 이 영역의 다른 흥미로운 도구로 Rust는 커밋 동기화에 **Josh**라는 도구를 사용함  
  [https://josh-project.dev](https://josh-project.dev/)

  Rust 쪽 블로그 글도 있음  
  [https://blog.rust-lang.org/inside-rust/2026/06/04/how-josh-h...](https://blog.rust-lang.org/inside-rust/2026/06/04/how-josh-helps-rust-manage-code-across-multiple-repositories/)

  Meta에는 예전에 fbshipit이라는 오픈소스 도구가 있었지만, 공개 저장소에 따르면 더 이상 쓰지 않는다고 함  
  [https://github.com/facebookarchive/fbshipit](https://github.com/facebookarchive/fbshipit)

  이 분야에 다른 도구가 또 있을까?

  - 최근 해커톤에서 전통적인 명령형 변환 위에 **생성형 변환 계층**을 얹어 보려고 [https://github.com/sluongng/capyfun](https://github.com/sluongng/capyfun)
    을 대충 바이브 코딩으로 만들었음
  - **git subtree**가 원조 도구였음: [https://apenwarr.ca/log/20090430](https://apenwarr.ca/log/20090430)
    이후 Git 본체에 병합됨  
    [https://manpages.debian.org/testing/git-man/git-subtree.1.en...](https://manpages.debian.org/testing/git-man/git-subtree.1.en.html)
    [https://docs.github.com/en/get-started/using-git/about-git-s...](https://docs.github.com/en/get-started/using-git/about-git-subtree-merges)

- 여러 저장소가 약간의 코드를 공유하고 싶지만, 라이브러리로 분리하고 참조를 걸고 버전 릴리스를 발행하고 의존 저장소를 갱신하는 수고까지는 가치가 없을 때도 이게 편한가?  
  예를 들어 공통 도메인 모델이 들어 있는 폴더를 하나의 주 저장소에서 다른 저장소들로 그냥 **동기화**하는 식으로 쓸 수 있는지 궁금함  
  Go식으로 “의존성을 잔뜩 두는 것보다 약간 복사하는 게 낫다”는 철학에 가까운 용도임

  - 주로 외부 **오픈소스 프로젝트**를 내부 모노레포와 동기화하는 데 쓰임. 정책상 빌드 산출물보다 소스 코드 가져오기를 요구하지만 예외를 받을 수는 있음  
    일부 프로젝트는 모노레포에서 개발되고 Copybara로 외부에 내보내짐  
    우리 팀은 내부적으로 Starlark 규칙 집합의 버전 관리에도 사용함
  - 내부에는 **모노레포**가 있고 그중 일부를 세상에 오픈소스로 공개하고 싶을 때 쓰는 도구임. 그래도 코드는 계속 모노레포 안에 있어야 하니 이게 해법이 됨  
    공개 저장소를 사내 비공개 저장소의 의존성으로 두면 개발 측면에서 꽤 골치 아픔. 그런 의존성이 트리처럼 늘어나면 정말 두통거리임
  - Copybara로 그런 일도 할 수는 있지만, 그렇게 쓰면 짜증 나고 지루할 가능성이 큼. 라이브러리를 분리하거나 파일 몇 개를 별도 저장소에 밀어 넣는 문제보다 더 귀찮을 수 있음

- 꽤 오래 써 왔고, 주로 큰 프로젝트 안에서 만든 도구가 독립 릴리스할 만큼 커졌을 때 사용함  
  코드를 내보내고 다시 가져오는 **양방향 배포** 전체를 할 만큼 강력하지만, 그런 건 너무 번거로워서 사양함  
  나는 대체로 원래 저장소에서 폴더 하나를 떼어 내되 이력은 보존하는 단순한 일회성 내보내기에 씀. 이후 개발은 새 저장소로 옮김  
  새 프로젝트 구조가 완전히 달라도 `Git blame`이 작동하니 만족함

  - 그 **단방향 패턴**이 실제로 Google 내부에서도 쓰는 방식임. 모노레포에서 GitHub로 바깥쪽 동기화를 함  
    양방향은 지저분해지는데, 경로 재매핑, 파일 제외, 헤더 제거 같은 변환은 한 방향으로는 쉽지만 항상 깨끗하게 역변환할 수는 없기 때문임  
    양쪽이 모두 갈라지면 Copybara의 기준선 추적이 헷갈리는 결과를 내기 시작함. 의미상 같은 커밋도 변환 뒤에는 서로 다른 SHA를 만들기 때문임  
    알아둘 만한 점은 이력 “보존”이 진짜 이식이 아니라, 재작성된 커밋을 체리픽하는 방식이라는 것임. 파일 내용과 작성자 정보가 넘어가니 `Git blame`은 작동하지만 SHA는 새로 생김  
    Copybara는 원래 SHA를 커밋 메시지 트레일러 `GitOrigin-RevId`에 넣어 두므로, 나중에 저장소 사이의 커밋을 대조해야 할 때 유용함

- 52년 넘는 진보라니 :-)  
  2026년 7월: Google **copybara**는 두 프로덕션 저장소 사이에서 코드를 옮길 수 있게 해줌  
  1974년 3월: IBM COPY는 두 프로덕션 파티션 데이터 세트 사이에서 코드를 옮길 수 있게 해줌. OS/MVT 및 OS/VS2 TSO Data Utilities COPY, FORMAT, LIST, MERGE User's Guide and Reference [https://www.computinghistory.org.uk/downloads/8987](https://www.computinghistory.org.uk/downloads/8987)
- Dagster에서 공개용 저장소가 더 큰 내부 모노레포 안에 살 수 있도록 **허브-스포크 모델**을 구성하는 데 Copybara를 썼고, 동작은 했지만 꽤 많은 우회적인 처리가 필요했음  
  [https://dagster.io/blog/monorepos-the-hub-and-spoke-model-an...](https://dagster.io/blog/monorepos-the-hub-and-spoke-model-and-copybara)
- 제외나 변환 없이 저장소 동기화만 필요하다면 굳이 쓰지 않을 것 같음. 당장은 맞을 수 있지만, kaniko나 많은 Google 제품/도구처럼 보관 처리되거나 종료되면 곤란해질 수 있음  
  GitLab에는 GitLab에서 GitHub나 다른 Git 제공자/서버로 **미러링**하는 아주 단순한 방법이 있음

  - Copybara가 종료될 가능성은 정말 낮다고 봄. 알기로는 google3와 대규모 오픈소스 프로젝트 유지·벤더링 방식에서 꽤 **핵심 도구**임
  - 맞음, Copybara는 한쪽 또는 양쪽 방향으로 **변환**을 하는 데 쓰는 도구에 가까움  
    예를 들어 외부 `bzl`을 내부 Blaze `BUILD` 호환 형태로 바꾸거나, 외부 import와 내부 `third_party`식 import 사이를 바꾸는 등의 작업임  
    순수 미러라면 Copybara는 지나치게 무거움

- 좋다. 나도 약 5년 전에 중첩 Git 저장소와 스크립트로 비슷한 걸 만들어서 비공개·공개 저장소를 함께 다루는 목적을 달성했음  
  내 셸 스크립트는 당연히 **Google 규모**는 아니었음

  - 나도 비슷했음. 처음엔 `git subtree` 래퍼일 줄 알았는데, 보니 훨씬 더 많은 일을 하는 것 같음  
    예를 들어 동기화 중에 **커밋 작성자 이메일**을 바꾸는 기능도 있음

[답변달기](https://news.hada.io/topic?id=31018)
