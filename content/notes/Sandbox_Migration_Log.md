---
title: 'Sandbox Migration Log'
tags: [sandbox, migration, codesandbox]
---

# CodeSandbox 이관 작업 일지

관련 이슈: CEO-211

## 작업 내역

1. `hotssi/sandbox` 리포지토리 내의 모든 `demo.html`, `example.html` 파일을 `index.html`로 규격화 (리네이밍) 하였습니다.
2. React 컴포넌트, Hooks, Visuals 등 80개가 넘는 하위 폴더에 CodeSandbox 구동에 필수적인 `package.json` 파일을 자동 생성 및 주입했습니다.
3. 해당 변경사항은 `hotssi/sandbox` 저장소의 `master` 브랜치에 정상적으로 푸시되었습니다.

본 문서는 작업 내역의 추적 및 Paperclip <-> GitHub 연동 자동화 테스트를 위해 작성되었습니다.
