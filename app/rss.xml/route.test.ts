import { describe, it, expect } from 'vitest';
import { GET } from './route';

describe('RSS Feed API Route', () => {
  it('returns valid RSS 2.0 XML with published notes', async () => {
    const response = await GET();

    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toContain('application/xml');

    const xml = await response.text();

    expect(xml).toContain('version="2.0"');
    expect(xml).toContain(
      '<title><![CDATA[소나기 블로그 & 디지털 정원]]></title>'
    );
    expect(xml).toContain('https://blog.sonagi.space/rss.xml');
    expect(xml).toContain('The Gardener');
  });
});
