import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_ROOT = path.resolve(__dirname, '..');
const WIKI_ROOT = process.env.WIKI_ROOT || path.resolve(BLOG_ROOT, '../llm-wiki');
const TARGET_NOTES_DIR = path.join(BLOG_ROOT, 'content/notes');
const TARGET_IMG_DIR = path.join(BLOG_ROOT, 'public/images/wiki');

// PARA 구조 디렉토리 목록
const PARA_DIRS = ['00_System', '01_Projects', '02_Areas', '03_Resources', '04_Archives'];

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

console.log(`Starting migration from PARA directories in: ${WIKI_ROOT}`);

PARA_DIRS.forEach((paraDir) => {
  const sourceDir = path.join(WIKI_ROOT, paraDir);
  if (!fs.existsSync(sourceDir)) return;
  
  walkDir(sourceDir, (filePath) => {
    if (!filePath.endsWith('.md')) return;

    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const parsed = matter(content);
      
      // [화이트리스트 방식] 명시적으로 published: true (또는 publish: true)인 글만 가져옴
      if (parsed.data.published !== true && parsed.data.publish !== true) {
        skippedCount++;
        return;
      }
      
      const fileName = path.basename(filePath);
      if (['index.md', 'readme.md'].includes(fileName.toLowerCase()) || fileName.startsWith('@')) {
        skippedCount++;
        return;
      }

      // [상태 매핑 계층] 위키 어휘를 블로그 어휘로 매핑하여 GrowthBadge 크래시 방지
      const rawStatus = (parsed.data.status || '').toLowerCase();
      let mappedStatus = 'seed'; // 기본값 폴백
      if (['stable', 'official', 'evergreen'].includes(rawStatus)) {
        mappedStatus = 'evergreen';
      } else if (['active', 'sapling'].includes(rawStatus)) {
        mappedStatus = 'sapling';
      }
      parsed.data.status = mappedStatus;

      const safeFileName = fileName.replace(/\s+/g, '-');
      const targetPath = path.join(TARGET_NOTES_DIR, safeFileName);
      
      let bodyContent = parsed.content;
      
      // 이미지 백링크 및 마크다운 링크 파싱
      const wikilinkRegex = /!\[\[([^\]]+)\]\]/g;
      bodyContent = bodyContent.replace(wikilinkRegex, (match, imageName) => {
        neededImages.add(imageName);
        return `![${imageName}](/images/wiki/${encodeURIComponent(imageName)})`;
      });

      const mdImageRegex = /!\[([^\]]*)\]\(([^)"]+)\)/g;
      bodyContent = bodyContent.replace(mdImageRegex, (match, alt, imgPath) => {
        if (!imgPath.startsWith('http') && !imgPath.startsWith('/')) {
          const imgName = path.basename(imgPath);
          neededImages.add(imgName);
          return `![${alt}](/images/wiki/${encodeURIComponent(imgName)})`;
        }
        return match;
      });

      // 변경된 Frontmatter(status 등)와 bodyContent를 다시 문자열로 직렬화
      const updatedContent = matter.stringify(bodyContent, parsed.data);

      fs.writeFileSync(targetPath, updatedContent, 'utf8');
      copiedCount++;
    } catch (err) {
      console.error(`Error processing ${filePath}:`, err.message);
    }
  });
});

let copiedImages = 0;

if (neededImages.size > 0) {
  console.log(`Looking for ${neededImages.size} images in ${WIKI_ROOT}...`);
  walkDir(WIKI_ROOT, (filePath) => {
    // 이미지 확장자만
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
