import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const GRAPH_FILE = path.join(ROOT, 'public/wiki-graph.json');
const SUMMARIES_FILE = path.join(ROOT, 'public/note-summaries.json');

if (!fs.existsSync(GRAPH_FILE) || !fs.existsSync(SUMMARIES_FILE)) {
  console.log('Graph or summaries file missing. Skipping enrichment.');
  process.exit(0);
}

const graphData = JSON.parse(fs.readFileSync(GRAPH_FILE, 'utf8'));
const summariesData = JSON.parse(fs.readFileSync(SUMMARIES_FILE, 'utf8'));

// Categories for clustering (Super Groups)
const superGroups = {
  'frontend': ['react', 'javascript', 'frontend', 'angular', 'css', 'html', 'ui'],
  'backend': ['backend', 'php', 'redis', 'postgresql-dba', 'server-side-game-developer', 'aspnet-core', 'nodejs', 'database'],
  'design': ['design', 'ux', 'ui-ux', 'figma', 'design-system'],
  'ai-ml': ['machine-learning', 'ai-agents', 'deep-learning'],
  'management': ['product-manager', 'engineering-manager', 'agile'],
  'cs': ['computer-science', 'algorithm', 'data-structure', 'cyber-security']
};

let enrichedCount = 0;
let preservedCount = 0;

graphData.nodes.forEach(node => {
  // 노드 id(slug)를 기반으로 summary 데이터 조회
  const summary = summariesData[node.id];
  
  if (summary && summary.tags && summary.tags.length > 0) {
    const primaryTag = summary.tags.find(t => t !== 'concept' && t !== 'reference') || summary.tags[0];
    
    // Super Group 매핑
    let assignedGroup = 'etc';
    for (const [groupName, keywords] of Object.entries(superGroups)) {
      if (keywords.includes(primaryTag)) {
        assignedGroup = groupName;
        break;
      }
    }
    
    node.group = assignedGroup;
    enrichedCount++;
  } else if (!node.group) {
    // 요약에 없는 노드는 기존 group 을 보존한다.
    //
    // wiki-graph.json 은 재현 불가능한 동결 자산인데(생성기가 레포에 없음),
    // note-summaries.json 은 content/notes/ 만 반영한다. 예전에는 이 분기가
    // 무조건 'orphan' 을 덮어써서, 노트 4개 기준으로 빌드하면 21,353개 노드의
    // 분류(cs/backend/frontend/design/...)가 전부 날아갔다.
    // 자세한 내용은 docs/generated-artifacts.md 참조.
    node.group = 'orphan';
    preservedCount++;
  } else {
    preservedCount++;
  }
});

fs.writeFileSync(GRAPH_FILE, JSON.stringify(graphData, null, 2), 'utf8');
console.log(
  `✅ Graph enrichment complete: ${enrichedCount} nodes assigned, ${preservedCount} preserved.`
);
