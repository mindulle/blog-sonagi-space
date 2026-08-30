import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'content/posts');
const NOTES_DIR = path.join(ROOT, 'content/notes');

if (fs.existsSync(POSTS_DIR)) {
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  for (const file of files) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
    const { data, content } = matter(raw);
    
    const newFrontmatter = {
      title: data.title,
      tags: data.tags || [],
      created: data.date || '',
      category: data.category || '',
      coverImage: data.coverImage || '',
      status: 'evergreen',
      published: true,
      publishedDate: data.date || ''
    };
    
    // Convert components to codeblocks so they render safely as markdown
    let newContent = content.replace(/<Card>/g, '```tsx\n<Card>').replace(/<\/Card>/g, '<\/Card>\n```');
    
    const newFileContent = matter.stringify(newContent, newFrontmatter);
    const targetFile = file.replace('.mdx', '.md');
    fs.writeFileSync(path.join(NOTES_DIR, targetFile), newFileContent, 'utf8');
    console.log(`Migrated ${file} -> ${targetFile}`);
  }
} else {
  console.log("No posts directory found.");
}
