import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const NOTES_DIR = path.join(ROOT, 'content/notes');
const GRAPH_FILE = path.join(ROOT, 'public/wiki-graph.json');

const WIKILINK_REGEX = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

if (!fs.existsSync(NOTES_DIR)) {
  console.log('content/notes/ directory missing.');
  process.exit(0);
}

// 1. Read existing frozen graph
let graphData = { nodes: [], links: [] };
if (fs.existsSync(GRAPH_FILE)) {
  graphData = JSON.parse(fs.readFileSync(GRAPH_FILE, 'utf8'));
}

const existingNodeIds = new Set(graphData.nodes.map(n => n.id));
const existingLinks = new Set(graphData.links.map(l => `${l.source}->${l.target}`));

const files = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith('.md'));

let newNodesCount = 0;
let newLinksCount = 0;

for (const fileName of files) {
  const slug = fileName.replace(/\.md$/, '');
  const fullPath = path.join(NOTES_DIR, fileName);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(raw);
  
  const title = data.title || slug;
  
  // Add node if missing
  if (!existingNodeIds.has(slug)) {
    graphData.nodes.push({
      id: slug,
      title: title,
      visibility: data.published ? "public" : "private",
      val: 1,
      group: "etc"
    });
    existingNodeIds.add(slug);
    newNodesCount++;
  } else {
    // Update existing node title/visibility just in case
    const node = graphData.nodes.find(n => n.id === slug);
    if (node) {
      node.title = title;
      node.visibility = data.published ? "public" : "private";
    }
  }

  // Extract links
  WIKILINK_REGEX.lastIndex = 0;
  let match;
  while ((match = WIKILINK_REGEX.exec(content)) !== null) {
    const targetRaw = match[1].trim();
    // In our system, the slug is targetRaw lowercased, spaces replaced by hyphens
    // Wait, the backlink generator uses: targetRaw.toLowerCase().replace(/[-_\s]/g, ' ')
    // But usually slugs are hyphens. Let's assume exact match or targetRaw slugified.
    // For simplicity, let's just use the exact text or basic slugification.
    let targetSlug = targetRaw.toLowerCase().replace(/\s+/g, '-');
    
    // If the wikilink is "Sonagi Design System", targetSlug is "sonagi-design-system"
    const linkStr = `${slug}->${targetSlug}`;
    
    if (!existingLinks.has(linkStr)) {
      graphData.links.push({
        source: slug,
        target: targetSlug
      });
      existingLinks.add(linkStr);
      newLinksCount++;
      
      // Also add target node as a dummy if it doesn't exist at all
      if (!existingNodeIds.has(targetSlug)) {
        graphData.nodes.push({
          id: targetSlug,
          title: targetRaw,
          visibility: "private",
          val: 1,
          group: "orphan"
        });
        existingNodeIds.add(targetSlug);
      }
    }
  }
}

fs.writeFileSync(GRAPH_FILE, JSON.stringify(graphData, null, 2), 'utf8');
console.log(`✅ Graph generation complete: Added ${newNodesCount} nodes and ${newLinksCount} links to the frozen graph.`);
