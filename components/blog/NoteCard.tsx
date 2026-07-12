'use client';

interface Note {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
}

export function NoteCard({ note }: { note: Note }) {
  return (
    <a
      href={`/notes/${note.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <article
        style={{
          padding: 'var(--space-5)',
          border: '2px solid var(--sng-color-border)',
          borderRadius: 'var(--sng-radius-md)',
          transition: 'border-color 0.15s, transform 0.15s',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor =
            'var(--sng-color-brand-primary)';
          (e.currentTarget as HTMLElement).style.transform =
            'translate(-2px, -2px)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor =
            'var(--sng-color-border)';
          (e.currentTarget as HTMLElement).style.transform = 'none';
        }}
      >
        <h2
          style={{
            fontSize: 'var(--text-lg)',
            fontWeight: '600',
            color: 'var(--sng-color-text-primary)',
            marginBottom: 'var(--space-2)',
          }}
        >
          {note.title}
        </h2>
        {note.excerpt && (
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--sng-color-text-secondary)',
              lineHeight: '1.6',
              marginBottom: 'var(--space-3)',
            }}
          >
            {note.excerpt}
          </p>
        )}
        {note.tags.length > 0 && (
          <div
            style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}
          >
            {note.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 'var(--text-xs)',
                  padding: '2px 8px',
                  border: '1px solid var(--sng-color-border)',
                  borderRadius: 'var(--sng-radius-sm)',
                  color: 'var(--sng-color-text-secondary)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </a>
  );
}
