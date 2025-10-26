# Week 3 업데이트 - 고급 블로그 기능

## 🎉 새로운 기능

### 1. Table of Contents (TOC)
- ✅ 헤딩 자동 추출 (h2, h3)
- ✅ 스크롤 시 활성 섹션 추적
- ✅ Smooth scroll
- ✅ Sticky positioning
- ✅ 모바일에서 숨김 (lg 이상에서만 표시)

### 2. 검색 기능
- ✅ Fuse.js 기반 전체 텍스트 검색
- ✅ SearchBar 컴포넌트 (Cmd+K / Ctrl+K 단축키)
- ✅ SearchResults 컴포넌트
- ✅ 검색 결과 페이지 (/search)
- ✅ Header에 검색 버튼 추가

### 3. ReadingProgress Bar
- ✅ 스크롤 진행도 표시
- ✅ 상단 고정
- ✅ 부드러운 애니메이션

### 4. CodeBlock 개선
- ✅ 복사 버튼 추가
- ✅ 언어 표시
- ✅ 복사 완료 피드백

---

## 📦 설치 방법

### 1. 패키지 설치

```bash
cd /mnt/c/Users/HOUSE/Documents/Projects/@hotssi/blog-sonagi-space

pnpm add fuse.js sonner
```

### 2. 파일 복사

다음 파일들을 프로젝트에 복사하세요:

#### 새로 생성된 파일들

**컴포넌트:**
- `components/blog/TableOfContents/TableOfContents.tsx`
- `components/blog/TableOfContents/index.ts`
- `components/blog/SearchBar/SearchBar.tsx`
- `components/blog/SearchBar/index.ts`
- `components/blog/SearchResults/SearchResults.tsx`
- `components/blog/SearchResults/index.ts`
- `components/blog/ReadingProgress/ReadingProgress.tsx`
- `components/blog/ReadingProgress/index.ts`
- `components/blog/CodeBlock/CodeBlock.tsx`
- `components/blog/CodeBlock/index.ts`

**라이브러리:**
- `lib/search.ts` (검색 로직)
- `lib/headings.ts` (헤딩 추출 유틸리티)

**페이지:**
- `app/search/page.tsx` (검색 결과 페이지)

#### 업데이트된 파일들 (덮어쓰기)

- `components/layout/Header/Header.tsx` (검색 버튼 추가)
- `app/blog/[slug]/page.tsx` (TOC + ReadingProgress 추가)
- `lib/mdx.ts` (헤딩 ID 자동 추가)
- `components/blog/index.ts` (export 추가)

### 3. Git 커밋

```bash
git add .
git commit -m "feat: add Week 3 features

- Table of Contents with scroll spy
- Full-text search with Fuse.js
- Reading progress bar
- Code block with copy button
- Search page and integration in Header

Week 3 completed ✅"
git push
```

---

## 🎯 사용 방법

### Table of Contents
블로그 상세 페이지에 자동으로 표시됩니다 (데스크톱만).
- 헤딩을 클릭하면 해당 섹션으로 이동
- 스크롤 시 현재 섹션이 하이라이트

### 검색
1. Header의 검색 아이콘 클릭
2. 또는 `Cmd+K` (Mac) / `Ctrl+K` (Windows) 단축키
3. 검색어 입력 후 Enter
4. 검색 결과 페이지로 이동

### ReadingProgress
블로그 포스트 페이지 상단에 자동으로 표시됩니다.
- 스크롤에 따라 진행도가 업데이트됨

### CodeBlock 복사 버튼
코드 블록에 마우스를 올리면 복사 버튼이 나타납니다.
- 클릭하면 코드가 클립보드에 복사됨
- "Copied!" 피드백 표시

---

## 🧪 테스트

### 1. 개발 서버 실행
```bash
pnpm dev
```

### 2. 테스트 항목

**Table of Contents:**
- [ ] http://localhost:3000/blog/[any-post] 접속
- [ ] 우측에 TOC 표시 확인 (데스크톱)
- [ ] TOC 항목 클릭 시 스크롤 확인
- [ ] 스크롤 시 활성 항목 하이라이트 확인

**검색:**
- [ ] Header 검색 아이콘 클릭
- [ ] /search 페이지로 이동 확인
- [ ] 검색어 입력 (예: "Next.js")
- [ ] 검색 결과 표시 확인
- [ ] `Cmd+K` 단축키 테스트

**ReadingProgress:**
- [ ] 블로그 포스트 페이지 접속
- [ ] 상단에 진행도 바 표시 확인
- [ ] 스크롤 시 진행도 업데이트 확인

**CodeBlock:**
- [ ] 코드 블록이 있는 포스트 접속
- [ ] 마우스 오버 시 복사 버튼 표시 확인
- [ ] 복사 버튼 클릭 후 "Copied!" 표시 확인

---

## 📝 다음 단계

Week 3 완료! 🎉

다음은 **Week 4: SEO & 성능 최적화**:
- Sitemap 자동 생성
- RSS Feed
- Google Analytics 통합
- 성능 최적화
- Lighthouse 점수 개선

---

**생성 일자**: 2025-10-26  
**버전**: Week 3
