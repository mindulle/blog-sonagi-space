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
  } else {
    node.group = 'orphan';
  }
});

fs.writeFileSync(GRAPH_FILE, JSON.stringify(graphData, null, 2), 'utf8');
console.log(`✅ Graph enrichment complete: ${enrichedCount} nodes assigned to clusters.`);
