import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/mdx';
import { searchPosts } from '@/lib/search';
import { SearchBar } from '@/components/blog/SearchBar';
import { SearchResults } from '@/components/blog/SearchResults';
import { Container } from '@/components/ui/Container';

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const { q: query = '' } = await searchParams;

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

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query = '' } = await searchParams;

  return (
    <Container className="py-12">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-4xl font-bold mb-8"
          style={{ color: 'var(--sng-color-text-primary)' }}
        >
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
                    className="p-6 border rounded-lg animate-pulse"
                    style={{ borderColor: 'var(--sng-color-border-default)' }}
                  >
                    <div
                      className="h-6 rounded w-3/4 mb-3"
                      style={{
                        backgroundColor: 'var(--sng-color-border-default)',
                      }}
                    ></div>
                    <div
                      className="h-4 rounded w-full mb-2"
                      style={{
                        backgroundColor: 'var(--sng-color-border-default)',
                      }}
                    ></div>
                    <div
                      className="h-4 rounded w-2/3"
                      style={{
                        backgroundColor: 'var(--sng-color-border-default)',
                      }}
                    ></div>
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
            <p
              className="text-lg"
              style={{ color: 'var(--sng-color-text-secondary)' }}
            >
              Enter a search query to find posts
            </p>
          </div>
        )}
      </div>
    </Container>
  );
}
