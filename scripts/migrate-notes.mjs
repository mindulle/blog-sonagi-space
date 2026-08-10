import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_ROOT = path.resolve(__dirname, '..');
const WIKI_ROOT = process.env.WIKI_ROOT || path.resolve(BLOG_ROOT, '../llm-wiki');
const SOURCE_DIR = path.join(WIKI_ROOT, '20_Wiki');
const TARGET_NOTES_DIR = path.join(BLOG_ROOT, 'content/notes');
const TARGET_IMG_DIR = path.join(BLOG_ROOT, 'public/images/wiki');

const neededImages = new Set();

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

if (!fs.existsSync(TARGET_NOTES_DIR)) fs.mkdirSync(TARGET_NOTES_DIR, { recursive: true });
if (!fs.existsSync(TARGET_IMG_DIR)) fs.mkdirSync(TARGET_IMG_DIR, { recursive: true });

let copiedCount = 0;
let skippedCount = 0;

console.log(`Starting migration from: ${SOURCE_DIR}`);

walkDir(SOURCE_DIR, (filePath) => {
  if (!filePath.endsWith('.md')) return;

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(content);
    
    if (parsed.data.publish === false || parsed.data.private === true) {
      skippedCount++;
      return;
    }
    
    const fileName = path.basename(filePath);
    if (['index.md', 'readme.md'].includes(fileName.toLowerCase()) || fileName.startsWith('@')) {
      skippedCount++;
      return;
    }

    const safeFileName = fileName.replace(/\s+/g, '-');
    const targetPath = path.join(TARGET_NOTES_DIR, safeFileName);
    
    const wikilinkRegex = /!\[\[([^\]]+)\]\]/g;
    content = content.replace(wikilinkRegex, (match, imageName) => {
      neededImages.add(imageName);
      return `![${imageName}](/images/wiki/${encodeURIComponent(imageName)})`;
    });

    const mdImageRegex = /!\[([^\]]*)\]\(([^)"]+)\)/g;
    content = content.replace(mdImageRegex, (match, alt, imgPath) => {
      if (!imgPath.startsWith('http') && !imgPath.startsWith('/')) {
        const imgName = path.basename(imgPath);
        neededImages.add(imgName);
        return `![${alt}](/images/wiki/${encodeURIComponent(imgName)})`;
      }
      return match;
    });

    fs.writeFileSync(targetPath, content, 'utf8');
    copiedCount++;
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
});

let copiedImages = 0;

if (neededImages.size > 0) {
  console.log(`Looking for ${neededImages.size} images in ${WIKI_ROOT}...`);
  walkDir(WIKI_ROOT, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'].includes(ext)) {
      const fileName = path.basename(filePath);
      if (neededImages.has(fileName)) {
        const destPath = path.join(TARGET_IMG_DIR, fileName);
        fs.copyFileSync(filePath, destPath);
        copiedImages++;
        neededImages.delete(fileName);
      }
    }
  });
}

console.log(`Migration complete!`);
console.log(`- Copied Notes: ${copiedCount}`);
console.log(`- Skipped Notes: ${skippedCount}`);
console.log(`- Copied Images: ${copiedImages}`);
if (neededImages.size > 0) {
  console.log(`- Missing Images: ${neededImages.size}`);
}
