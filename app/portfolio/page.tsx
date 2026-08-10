import { Metadata } from 'next';
import Link from 'next/link';
// import { Button, Badge, Card, AIBadge } from '@sonagi/ui';
// (실제 프로젝트 적용 시 @sonagi/ui 연동 완료 후 주석 해제)

export const metadata: Metadata = {
  title: 'Portfolio | Sonagi Space',
  description: 'Full-Stack Developer & AI Automation Expert',
};

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Mindulle (Lumi-Fairy)</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Full-Stack Engineer & AI Automation Expert
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="https://github.com/mindulle"
            target="_blank"
            className="sng-btn sng-btn--primary"
          >
            GitHub
          </Link>
          <Link href="/blog" className="sng-btn sng-btn--outline">
            Read My Digital Garden
          </Link>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 border-b pb-2">
          Core Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="sng-card p-6 border rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">🤖 Sonagi Bots (ChatOps)</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              A microservice-based Discord ecosystem managing CI/CD, n8n
              automations, and infrastructure observability.
            </p>
            <div className="flex gap-2">
              <span className="sng-badge sng-badge--info">TypeScript</span>
              <span className="sng-badge sng-badge--warning">Docker</span>
              <span className="sng-badge sng-badge--success">n8n</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="sng-card p-6 border rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">📚 LLM-Wiki (RAG)</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Automated knowledge management pipeline integrating Obsidian, Anki
              Flashcards, and PostgreSQL+Ollama.
            </p>
            <div className="flex gap-2">
              <span className="sng-badge sng-badge--info">Next.js</span>
              <span className="sng-ai-badge">✨ AI Generated</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="sng-card p-6 border rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">🎨 Sonagi Design System</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Enterprise-grade UI component library and design tokens built for
              cross-platform scalability.
            </p>
            <div className="flex gap-2">
              <span className="sng-badge sng-badge--info">React</span>
              <span className="sng-badge sng-badge--warning">Tailwind</span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="sng-card p-6 border rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">💼 The Desk Analyst</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Programmatic SEO and highly-converted automated affiliate
              marketing platform.
            </p>
            <div className="flex gap-2">
              <span className="sng-badge sng-badge--info">Next.js</span>
              <span className="sng-badge sng-badge--success">SEO</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 border-b pb-2">
          Skills & Expertise
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <strong>Frontend:</strong> React, Next.js, Tailwind CSS, TypeScript
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Python, PostgreSQL, REST/GraphQL
            APIs
          </li>
          <li>
            <strong>DevOps/Infra:</strong> Docker, Kubernetes (K3s), GitHub
            Actions, Cloudflare
          </li>
          <li>
            <strong>AI/Automation:</strong> n8n, Puppeteer/Playwright, RAG
            Architecture, Ollama
          </li>
        </ul>
      </section>
    </div>
  );
}
