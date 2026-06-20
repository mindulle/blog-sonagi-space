import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const SOURCE_DIR = '/home/mindulle/projects/llm-wiki/20_Wiki';
const TARGET_DIR = '/home/mindulle/projects/blog-sonagi-space/content/notes';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else if (f.endsWith('.md')) {
      callback(path.join(dir, f));
    }
  });
}

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

let copiedCount = 0;
let skippedCount = 0;

walkDir(SOURCE_DIR, (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(content);
    
    // Frontmatter 체크
    if (parsed.data.publish === false || parsed.data.private === true) {
      skippedCount++;
      return;
    }
    
    // index.md 나 README.md 같은 시스템 파일 제외
    const fileName = path.basename(filePath);
    if (fileName.toLowerCase() === 'index.md' || fileName.toLowerCase() === 'readme.md' || fileName.startsWith('@')) {
      skippedCount++;
      return;
    }

    // 파일 이름에 공백이 있으면 하이픈으로 변경 (옵션)
    const safeFileName = fileName.replace(/\s+/g, '-');
    const targetPath = path.join(TARGET_DIR, safeFileName);
    
    // 복사 진행
    fs.writeFileSync(targetPath, content, 'utf8');
    copiedCount++;
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
});

console.log(`Migration complete!`);
console.log(`- Copied: ${copiedCount} files`);
console.log(`- Skipped: ${skippedCount} files`);
