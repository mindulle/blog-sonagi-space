import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const NOTES_DIR = path.join(ROOT, 'content/notes');
const OUTPUT_FILE = path.join(ROOT, 'public/note-summaries.json');

if (!fs.existsSync(NOTES_DIR)) {
  process.exit(0);
}

const files = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith('.md'));
const summaries = {};

function extractExcerpt(content, maxLength = 150) {
  const firstParagraph = content
    .replace(/^---[\s\S]*?---\n/, '') 
    .replace(/#+\s.*\n/g, '')          
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, '$2' || '$1') 
    .trim()
    .split('\n')
    .find((line) => line.trim().length > 0) ?? '';

  return firstParagraph.length > maxLength
    ? firstParagraph.slice(0, maxLength) + '...'
    : firstParagraph;
}

for (const fileName of files) {
  const slug = fileName.replace(/\.md$/, '');
  const raw = fs.readFileSync(path.join(NOTES_DIR, fileName), 'utf8');
  const { data, content } = matter(raw);
  
  summaries[slug] = {
    slug,
    title: data.title || slug,
    tags: data.tags || [],
    excerpt: extractExcerpt(content)
  };
}

const outputDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(summaries, null, 2), 'utf8');
console.log(`✅ Summary generation complete: ${Object.keys(summaries).length} notes.`);
