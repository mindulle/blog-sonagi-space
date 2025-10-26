// types/blog.ts
// 블로그 포스트 관련 타입 정의

/**
 * 블로그 포스트 카테고리
 */
export type Category = 
  | 'development'
  | 'design'
  | 'essay'
  | 'project';

/**
 * 블로그 포스트 메인 타입
 */
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: Category;
  tags: string[];
  coverImage?: string;
  author?: string;
  readingTime: number; // 읽기 시간 (분)
  draft?: boolean;
  featured?: boolean; // 메인에 노출 여부
};

/**
 * MDX 포스트 (content 포함)
 */
export type PostWithContent = Post & {
  content: string;
};

/**
 * 포스트 프론트매터 타입 (MDX 파일에서 사용)
 */
export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  category: Category;
  tags: string[];
  coverImage?: string;
  author?: string;
  draft?: boolean;
  featured?: boolean;
};
