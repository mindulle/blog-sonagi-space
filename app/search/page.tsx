import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/mdx';
import { searchPosts } from '@/lib/search';
import { SearchBar } from '@/components/blog/SearchBar';
import { SearchResults } from '@/components/blog/SearchResults';
import { Container } from '@/components/ui/Container';

type SearchPageProps = {
  searchParams: { q?: string };
};

export function generateMetadata({ searchParams }: SearchPageProps): Metadata {
  const query = searchParams.q || '';
  
  return {
    title: query ? `Search results for "${query}"` : 'Search',
    description: query
      ? `Search results for "${query}" in the blog`
      : 'Search for blog posts, tutorials, and articles',
  };
}

function SearchContent({ query }: { query: string }) {
  const allPosts = getAllPosts();
  const results = query ? searchPosts(query, allPosts) : [];

  return <SearchResults results={results} query={query} />;
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';

  return (
    <Container className="py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
          Search
        </h1>

        <SearchBar className="mb-12" />

        {query && (
          <Suspense
            fallback={
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="p-6 border border-neutral-200 dark:border-neutral-700 rounded-lg animate-pulse"
                  >
                    <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-full mb-2"></div>
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            }
          >
            <SearchContent query={query} />
          </Suspense>
        )}

        {!query && (
          <div className="text-center py-12">
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Enter a search query to find posts
            </p>
          </div>
        )}
      </div>
    </Container>
  );
}
