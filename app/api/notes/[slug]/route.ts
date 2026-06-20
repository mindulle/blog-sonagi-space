import { type NextRequest, NextResponse } from 'next/server';
import { getNoteBySlug } from '@/lib/notes';

interface Params {
  params: Promise<{ slug: string }>;
}

export async function GET(_req: NextRequest, { params }: Params) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({
    slug: note.slug,
    title: note.title,
    excerpt: note.excerpt,
    tags: note.tags,
    // content는 hover preview에선 불필요하므로 제외
  });
}
