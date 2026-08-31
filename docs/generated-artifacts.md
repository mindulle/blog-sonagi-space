# 생성물(Generated Artifacts) 대장

이 문서는 블로그 빌드가 만들어내는 데이터 파일과, 그중 **재현 불가능한 자산**을 기록한다.
생성물을 수정하려는 사람은 먼저 이 문서를 읽어야 한다.

---

## 1. 정규 생성 파이프라인

`package.json` 의 `prebuild` / `build` 가 아래 3개 스크립트를 순서대로 실행한다.

| 스크립트                         | 입력                                                    | 출력                                   | Git 추적                               |
| -------------------------------- | ------------------------------------------------------- | -------------------------------------- | -------------------------------------- |
| `scripts/generate-backlinks.mjs` | `content/notes/`                                        | `lib/generated/backlinks.json`         | ❌ (`.gitignore` 의 `/lib/generated/`) |
| `scripts/generate-summaries.mjs` | `content/notes/`                                        | `public/note-summaries.json`           | ✅                                     |
| `scripts/enrich-graph.mjs`       | `public/wiki-graph.json` + `public/note-summaries.json` | `public/wiki-graph.json` (제자리 변형) | ✅                                     |

`lib/notes.ts` 의 `getAllNotes()` 는 디스크의 `.md` 가 아니라 `public/note-summaries.json` 을 읽는다.
따라서 요약 JSON 이 낡으면 사이트 전체가 낡은 목록을 보여준다.

### 요약 JSON 이 반드시 담아야 하는 필드

`lib/notes.ts` 와 `app/blog/page.tsx` 가 의존하므로 하나라도 빠지면 기능이 조용히 죽는다.

```
slug, title, tags, excerpt,
created, status, published, publishedDate,
category, coverImage, series, seriesOrder
```

특히 `published` 가 없으면 `app/blog/page.tsx` 의
`getAllNotes().filter(note => note.published)` 가 전부 걸러내어 **`/blog` 가 글 0개**가 된다.

### 생성물은 소스가 사라지면 반드시 제거되어야 한다

`generate-summaries.mjs` 는 매번 `content/notes/` 를 기준으로 처음부터 다시 만든다.
이 성질(pruning)을 잃으면 삭제된 노트가 영구히 살아남아 "유령 노트"가 된다.

> 과거 사례: `public/note-summaries.json` 이 20,165개 항목(8.65MB)을 담고 있었으나
> 디스크의 `.md` 는 4개였다. `pnpm dev` 는 prebuild 를 돌리지 않아 로컬에는 유령 노트
> 20,161개가 보이고, Vercel `build` 는 재생성하여 4개만 배포되는 dev/prod 괴리가 있었다.
> 유령 노트를 클릭하면 `getNoteBySlug()` 가 `null` 을 반환한다.

---

## 2. ⚠️ `public/wiki-graph.json` — 동결 자산 (재현 불가)

| 항목       | 값                                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| 크기       | 약 7.7 MB                                                                                             |
| 내용       | `nodes` 21,355 / `links` 28,070                                                                       |
| 출처       | `llm-wiki` 위키 전체를 그래프화한 것 (노드 예: `{"id":"Welcome","title":"Welcome to llm-wiki", ...}`) |
| 소비처     | `components/blog/LocalGraph.tsx` — `fetch('/wiki-graph.json')`                                        |
| **생성기** | **없음**                                                                                              |

**이 파일을 생성하는 스크립트는 이 레포에 존재하지 않는다.**
`llm-wiki`, `sonagi-bots`, `sonagi-iac` 및 홈 디렉토리 스크립트에서도 발견되지 않았다.
`enrich-graph.mjs` 와 (삭제된) `prebuild.mjs` 는 **이미 존재하는 파일에 `group` 필드를 덧붙이는 변형만** 한다.

```
scripts/enrich-graph.mjs  → 있으면 group 할당, 없으면 아무것도 못 함
```

### 과거 사고 — enrich-graph 가 분류를 파괴하고 있었다

`scripts/enrich-graph.mjs` 는 요약에 없는 노드의 `group` 을 무조건 `'orphan'` 으로 덮어썼다.
`note-summaries.json` 은 `content/notes/`(4개)만 반영하므로, 빌드마다 21,353개 노드의
분류가 전부 날아갔다.

```
빌드 전: etc 2577, orphan 16921, cs 397, backend 827, ai-ml 92, frontend 342, design 135, management 64
빌드 후: orphan 21353, etc 1, design 1
```

git 에 커밋된 파일에는 정상 분류가 남아 있었지만 Vercel 은 매 빌드마다 재파괴한 결과를
배포했다. 즉 **프로덕션 그래프는 클러스터링이 사라진 상태였다.**

현재는 `else if (!node.group)` 으로 바꿔 기존 분류를 보존한다.
검증: `node scripts/enrich-graph.mjs` 실행 후 `git diff public/wiki-graph.json` 이 비어야 한다.

### 그래서 지켜야 할 것

- **삭제하지 말 것.** 지우면 "지식 연결망"(LocalGraph) 기능을 복구할 수 없다.
- `enrich-graph.mjs` 를 수정할 때 **기존 `group` 을 덮어쓰지 말 것.** 이 파일은 동결 자산이다.
- 현재 노드 21,355개는 대부분 `content/notes/` 에 실체가 없는 위키 문서다.
  즉 그래프는 **존재하지 않는 노트들의 연결망**을 그리고 있다.
- 근본 해결은 위키 승격 파이프라인(`scripts/migrate-notes.mjs`)을 실제로 가동시켜
  `content/notes/` 를 채우고, 그 시점에 **그래프 생성기를 함께 작성**하는 것이다.
  콘텐츠가 4개인 상태에서 생성기를 만들면 4노드 그래프가 되어 기능이 무의미해진다.

---

## 3. 삭제된 `scripts/prebuild.mjs` (배선 금지 이력)

3개 스크립트를 단일 패스 + 증분 캐시로 통합한 재작성본이 존재했으나,
`package.json` 에 배선되지 않은 고아 상태였고 결함 2건 때문에 삭제했다.
같은 최적화를 다시 시도하려면 아래를 반드시 해결해야 한다.

1. **필드 누락** — 요약에 `slug`/`title`/`tags`/`excerpt` 4개만 기록했다.
   `status`, `published`, `publishedDate`, `created`, `category`, `coverImage`,
   `series`, `seriesOrder` 8개가 빠져 `/blog` 가 글 0개가 된다.
2. **프루닝 부재** — `const summaries = { ...prevSummaries }` 로 시작해 변경분만 덮어써서,
   소스 `.md` 가 사라진 항목을 제거하지 않았다. `FORCE_PREBUILD=1` 로도 유령 20,165개가 살아남았다.

성능 재작성은 위키 마이그레이션으로 노트가 수천 개 규모가 된 이후에 의미가 있다.
현재 정규 파이프라인 전체 소요는 1초 미만이다.

---

## 4. 참고 — 위키 승격 파이프라인 현황

`scripts/migrate-notes.mjs` 는 `package.json` 에 배선되어 있지 않으며, 수동 실행용이다.

- 소스: `WIKI_ROOT` 환경변수, 기본값 `../llm-wiki` 의 `20_Wiki/`
- 화이트리스트: frontmatter 에 `published: true` 또는 `publish: true` 가 있는 문서만 복사
- **현재 산출물은 0건이다.** 위키 문서 20,373개 중 `published`/`publish` 키를 가진 문서가 없다.

또한 위키의 status 어휘(`stable`, `active`, `official`, `to-read`, `New`)는
블로그 성숙도 모델(`seed` / `sapling` / `evergreen`)과 다르다.
`components/blog/GrowthBadge.tsx` 는 `statusMap[status]` 를 구조분해하므로
어휘 밖의 값이 들어오면 TypeError 로 렌더링이 깨진다. 마이그레이션 시 매핑 계층이 필요하다.
