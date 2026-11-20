import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge, Card } from '@/components/ui';
import { EndMark, HairlineRule } from '@/components/editorial';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Audits • 민들레 정원',
  description:
    '세 건의 결함 진단 기록. 재현, 수정, 검증 게이트까지 공개된 엔지니어링 감사 아카이브.',
};

const GATES = [
  {
    no: '01',
    name: 'Reproduction',
    rule: 'A failing test first. No reproduction, no work.',
  },
  {
    no: '02',
    name: 'Scope',
    rule: 'A diff size limit decided up front. Exceed it, report before continuing.',
  },
  {
    no: '03',
    name: 'Cross-review',
    rule: 'A second pass reads the diff. On upstream work, that pass is the maintainer.',
  },
  {
    no: '04',
    name: 'Merge',
    rule: 'CI and tests green, or the work is not done.',
  },
  {
    no: '05',
    name: 'Record',
    rule: 'Every change is logged, including the ones deliberately not made.',
  },
];

const AUDITS = [
  {
    no: '01',
    className: 'Concurrency',
    title: 'Parallel npm version corrupts workspace manifests',
    line: 'Two layers were broken: the command reified the whole project, and config loading read every workspace manifest before the command existed.',
    status: 'Open PRs · review public',
    tone: 'info' as const,
    href: 'https://github.com/mindulle/engineering-audits/blob/main/audits/0001-npm-workspace-version-race.md',
  },
  {
    no: '02',
    className: 'Environment parity',
    title: 'Local dev sends a different object shape than production',
    line: 'A missing property on the local runtime shim meant handlers took a different branch locally than in production. Nothing threw. Tests were green.',
    status: 'Merged · APPROVED',
    tone: 'success' as const,
    href: 'https://github.com/mindulle/engineering-audits/blob/main/audits/0002-miniflare-email-parity.md',
  },
  {
    no: '03',
    className: 'UI state lifecycle',
    title: 'Form fields that unmount silently discard input',
    line: 'A permission check implemented as conditional mounting. The user’s selection was destroyed with the component, and the submit payload changed shape.',
    status: 'Merged · APPROVED',
    tone: 'success' as const,
    href: 'https://github.com/mindulle/engineering-audits/blob/main/audits/0003-mattermost-form-unmount.md',
  },
];

const SYSTEMS = [
  {
    no: '01',
    name: 'Design system pipeline',
    line: 'W3C design tokens → CSS variables → Figma variables, synchronised in one direction. Page hierarchy, component sections and naming enforced by spec.',
    href: 'https://design.sonagi.space',
    label: 'design.sonagi.space',
  },
  {
    no: '02',
    name: 'Agent gates',
    line: 'The workflow these audits came from: scoped agent runs, a diff size limit, cross-review, CI before handoff, and a ledger of every change.',
    href: 'https://github.com/mindulle/engineering-audits',
    label: 'engineering-audits',
  },
];

const ELSEWHERE = [
  {
    no: '01',
    name: 'Showreel',
    line: '3D cinematic portfolio, winter into spring.',
    href: 'https://sonagi.space',
    label: 'sonagi.space',
  },
  {
    no: '02',
    name: 'Writing',
    line: 'Design system notes, handoff essays, and the garden archive.',
    href: '/notes',
    label: '/notes',
    internal: true,
  },
  {
    no: '03',
    name: 'About',
    line: 'Who writes this, and why the garden.',
    href: '/about',
    label: '/about',
    internal: true,
  },
];

export default function ProjectsPage() {
  return (
    <main
      className="relative overflow-hidden py-8 sm:py-12 px-4 sm:px-6 select-text"
      style={{ maxWidth: '1080px', margin: '0 auto' }}
    >
      <header className="mb-10 sm:mb-14">
        <div
          className="flex flex-wrap items-center justify-between gap-2 py-2.5 mb-8 border-y font-mono text-xs tracking-[0.22em] uppercase"
          style={{
            borderColor: 'var(--color-border-subtle)',
            color: 'var(--color-text-secondary)',
          }}
        >
          <span>Engineering Audit Archive</span>
          <span style={{ color: 'var(--color-brand-primary)' }}>
            TOTAL {AUDITS.length} AUDITS
          </span>
        </div>

        <h1
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ color: 'var(--color-text-primary)' }}
        >
          감사는 기록으로 남는다
        </h1>
        <p
          className="font-mono text-xs tracking-[0.18em] uppercase mb-6"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Three defects · reproduced, fixed, verified
        </p>
        <p
          className="text-base sm:text-lg leading-relaxed max-w-2xl"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          결함을 찾는 일보다 중요한 건, 찾은 결함을 검증 가능한 형태로 남기는 일입니다.
          아래 세 건은 모두 재현 절차와 수정 diff, 통과 기록을 함께 공개합니다. 증거 원본은{' '}
          <a
            href="https://github.com/mindulle/engineering-audits"
            className="underline underline-offset-4"
            style={{ color: 'var(--color-brand-primary)' }}
            target="_blank"
            rel="noreferrer"
          >
            engineering-audits
          </a>
          에 있습니다.
        </p>
      </header>

      <HairlineRule thick />

      {/* 게이트 */}
      <section className="mt-10 sm:mt-12 mb-12 sm:mb-16">
        <h2
          className="font-mono text-xs tracking-[0.22em] uppercase mb-6"
          style={{ color: 'var(--color-text-muted)' }}
        >
          The gate — 무엇을 통과해야 공개하는가
        </h2>
        <div className="grid gap-0">
          {GATES.map((gate) => (
            <div
              key={gate.no}
              className="grid grid-cols-[3rem_1fr] sm:grid-cols-[3rem_10rem_1fr] items-baseline gap-x-4 gap-y-1 py-3 border-b"
              style={{ borderColor: 'var(--color-border-subtle)' }}
            >
              <span
                className="font-mono text-xs"
                style={{ color: 'var(--color-brand-primary)' }}
              >
                {gate.no}
              </span>
              <span
                className="font-medium text-sm"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {gate.name}
              </span>
              <span
                className="text-sm leading-relaxed col-span-2 sm:col-span-1"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {gate.rule}
              </span>
            </div>
          ))}
        </div>
        <p
          className="mt-5 text-sm italic leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          The agent writes; the gates decide. Nothing reaches a client without a
          failing test that now passes.
        </p>
      </section>

      {/* 감사 3건 */}
      <section className="mb-12 sm:mb-16">
        <h2
          className="font-mono text-xs tracking-[0.22em] uppercase mb-6"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Audits — 서로 다른 세 가지 결함 클래스
        </h2>
        <div className="grid gap-4">
          {AUDITS.map((audit) => (
            <a
              key={audit.no}
              href={audit.href}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <Card elevation="raised" clickable>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-xs"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {audit.no}
                    </span>
                    <Badge variant="label" color="info">
                      {audit.className}
                    </Badge>
                  </div>
                  <Badge variant="pill" color={audit.tone}>
                    {audit.status}
                  </Badge>
                </div>
                <h3
                  className="text-lg font-semibold leading-snug mt-1"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {audit.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {audit.line}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wide"
                  style={{ color: 'var(--color-brand-primary)' }}
                >
                  Read the audit
                  <ArrowUpRight size={13} aria-hidden />
                </span>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* 시스템 */}
      <section className="mb-12 sm:mb-16">
        <h2
          className="font-mono text-xs tracking-[0.22em] uppercase mb-6"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Systems — 같은 방식으로 만든 것들
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {SYSTEMS.map((system) => (
            <a
              key={system.no}
              href={system.href}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <Card elevation="flat" clickable>
                <span
                  className="font-mono text-xs"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {system.no}
                </span>
                <h3
                  className="text-base font-semibold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {system.name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {system.line}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 font-mono text-xs"
                  style={{ color: 'var(--color-brand-primary)' }}
                >
                  {system.label}
                  <ArrowUpRight size={13} aria-hidden />
                </span>
              </Card>
            </a>
          ))}
        </div>
      </section>

      <HairlineRule />

      {/* 그 밖 */}
      <section className="mt-8">
        <h2
          className="font-mono text-xs tracking-[0.22em] uppercase mb-6"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Elsewhere
        </h2>
        <ul className="grid gap-0">
          {ELSEWHERE.map((item) => (
            <li
              key={item.no}
              className="grid grid-cols-[3rem_1fr_auto] items-baseline gap-x-4 py-3 border-b"
              style={{ borderColor: 'var(--color-border-subtle)' }}
            >
              <span
                className="font-mono text-xs"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {item.no}
              </span>
              <span>
                <span
                  className="font-medium text-sm"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {item.name}
                </span>
                <span
                  className="ml-2 text-sm"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {item.line}
                </span>
              </span>
              {item.internal ? (
                <Link
                  href={item.href}
                  className="font-mono text-xs underline underline-offset-4"
                  style={{ color: 'var(--color-brand-primary)' }}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs underline underline-offset-4"
                  style={{ color: 'var(--color-brand-primary)' }}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12 flex justify-center">
        <EndMark />
      </div>
    </main>
  );
}
