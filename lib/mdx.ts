// lib/mdx.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Post, PostWithContent, Category } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'content/posts');

/**
 * 읽기 시간 계산 (분)
 * 평균 읽기 속도: 200단어/분 (한글 기준)
 */
function calculateReadingTime(content: string): number {
  // 한글, 영문 단어 수 계산
  const koreanChars = content.match(/[가-힣]/g)?.length || 0;
  const words = content.match(/\b\w+\b/g)?.length || 0;
  
  // 한글 500자 = 약 1분, 영문 200단어 = 약 1분
  const koreanMinutes = koreanChars / 500;
  const englishMinutes = words / 200;
  
  const totalMinutes = Math.ceil(koreanMinutes + englishMinutes);
  return Math.max(1, totalMinutes); // 최소 1분
}

/**
 * 모든 포스트 가져오기 (draft 제외)
 */
export async function getAllPosts(): Promise<Post[]> {
  // content/posts 디렉토리가 없으면 빈 배열 반환
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      // 읽기 시간 계산
      const readingTime = calculateReadingTime(content);
      
      return {
        slug,
        title: data.title || 'Untitled',
        description: data.description || '',
        date: data.date || new Date().toISOString(),
        category: data.category || 'development',
        tags: data.tags || [],
        coverImage: data.coverImage,
        author: data.author || 'Anonymous',
        readingTime,
        draft: data.draft || false,
        featured: data.featured || false,
      } as Post;
    })
    // draft 제외
    .filter((post) => !post.draft)
    // 날짜순 정렬 (최신순)
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

  return allPostsData;
}

/**
 * 특정 포스트 가져오기 (content 포함)
 */
export async function getPostBySlug(slug: string): Promise<PostWithContent | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    // 파일이 없으면 null 반환
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // 읽기 시간 계산
    const readingTime = calculateReadingTime(content);
    
    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      category: data.category || 'development',
      tags: data.tags || [],
      coverImage: data.coverImage,
      author: data.author || 'Anonymous',
      readingTime,
      draft: data.draft || false,
      featured: data.featured || false,
      content,
    };
  } catch (error) {
    console.error(`Error loading post: ${slug}`, error);
    return null;
  }
}

/**
 * 모든 카테고리 가져오기
 */
export async function getAllCategories(): Promise<Category[]> {
  const posts = await getAllPosts();
  const categories = Array.from(new Set(posts.map((post) => post.category)));
  return categories as Category[];
}

/**
 * 카테고리별 포스트 가져오기
 */
export async function getPostsByCategory(category: Category): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.category === category);
}

/**
 * 태그별 포스트 가져오기
 */
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tags.includes(tag));
}

/**
 * 모든 태그 가져오기 (빈도수 포함)
 */
export async function getAllTags(): Promise<Array<{ name: string; count: number }>> {
  const posts = await getAllPosts();
  const tagCounts = new Map<string, number>();
  
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });
  
  return Array.from(tagCounts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Featured 포스트 가져오기
 */
export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}

/**
 * 관련 포스트 가져오기 (같은 카테고리 또는 태그 기반)
 */
export async function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): Promise<Post[]> {
  const allPosts = await getAllPosts();
  const currentPost = allPosts.find((post) => post.slug === currentSlug);
  
  if (!currentPost) {
    return [];
  }
  
  // 현재 포스트 제외
  const otherPosts = allPosts.filter((post) => post.slug !== currentSlug);
  
  // 관련도 점수 계산
  const scoredPosts = otherPosts.map((post) => {
    let score = 0;
    
    // 같은 카테고리면 +3점
    if (post.category === currentPost.category) {
      score += 3;
    }
    
    // 공통 태그 개수만큼 점수 추가
    const commonTags = post.tags.filter((tag) => currentPost.tags.includes(tag));
    score += commonTags.length;
    
    return { post, score };
  });
  
  // 점수순으로 정렬하고 상위 N개 반환
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}
