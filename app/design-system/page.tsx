import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Design System | Sonagi',
  description: '소나기 디자인 시스템 토큰 시각화 가이드',
};

// Colors to display
const semanticColors = [
  { name: 'Brand Primary', var: '--color-brand-primary' },
  { name: 'Brand Hover', var: '--color-brand-primary-hover' },
  { name: 'Brand Dark', var: '--color-brand-primary-dark' },
  { name: 'Logo (Cyan)', var: '--color-brand-logo' },
];

const backgroundColors = [
  { name: 'Base', var: '--color-bg-base' },
  { name: 'Surface', var: '--color-bg-surface' },
  { name: 'Elevated', var: '--color-bg-elevated' },
  { name: 'Overlay', var: '--color-bg-overlay' },
];

const textColors = [
  { name: 'Primary', var: '--color-text-primary' },
  { name: 'Secondary', var: '--color-text-secondary' },
  { name: 'Muted', var: '--color-text-muted' },
  { name: 'Disabled', var: '--color-text-disabled' },
];

const stateColors = [
  { name: 'Success', var: '--color-state-success' },
  { name: 'Warning', var: '--color-state-warning' },
  { name: 'Error', var: '--color-state-error' },
  { name: 'Info', var: '--color-state-info' },
];

function ColorSwatch({ name, cssVar }: { name: string; cssVar: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-24 w-full rounded-lg border border-[var(--color-border-subtle)] shadow-sm"
        style={{ backgroundColor: `var(${cssVar})` }}
        aria-label={name}
      />
      <div>
        <div className="font-medium text-sm text-[var(--color-text-primary)]">{name}</div>
        <div className="text-xs text-[var(--color-text-muted)] font-mono">{cssVar}</div>
      </div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          Design System
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          소나기 프로젝트의 시맨틱 토큰(Semantic Tokens) 시각화 가이드입니다. 
          라이트/다크 모드에 따라 색상이 자동으로 변환됩니다.
        </p>
      </div>

      <div className="space-y-16">
        {/* Colors Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-[var(--color-border-subtle)] text-[var(--color-text-primary)]">
            Colors
          </h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-medium mb-4 text-[var(--color-text-secondary)]">Brand</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {semanticColors.map((color) => (
                  <ColorSwatch key={color.var} name={color.name} cssVar={color.var} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 text-[var(--color-text-secondary)]">Backgrounds</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {backgroundColors.map((color) => (
                  <ColorSwatch key={color.var} name={color.name} cssVar={color.var} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 text-[var(--color-text-secondary)]">Text</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {textColors.map((color) => (
                  <ColorSwatch key={color.var} name={color.name} cssVar={color.var} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 text-[var(--color-text-secondary)]">States</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stateColors.map((color) => (
                  <ColorSwatch key={color.var} name={color.name} cssVar={color.var} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-[var(--color-border-subtle)] text-[var(--color-text-primary)]">
            Typography
          </h2>
          <Card className="p-6">
            <div className="space-y-8">
              <div>
                <div className="text-[var(--color-text-muted)] text-sm mb-2 font-mono">--font-size-4xl (36px)</div>
                <div className="text-4xl font-bold text-[var(--color-text-primary)]">
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
              <div>
                <div className="text-[var(--color-text-muted)] text-sm mb-2 font-mono">--font-size-2xl (24px)</div>
                <div className="text-2xl font-semibold text-[var(--color-text-primary)]">
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
              <div>
                <div className="text-[var(--color-text-muted)] text-sm mb-2 font-mono">--font-size-lg (18px)</div>
                <div className="text-lg text-[var(--color-text-secondary)]">
                  The quick brown fox jumps over the lazy dog. 
                  동해물과 백두산이 마르고 닳도록.
                </div>
              </div>
              <div>
                <div className="text-[var(--color-text-muted)] text-sm mb-2 font-mono">--font-size-base (16px)</div>
                <div className="text-base text-[var(--color-text-secondary)]">
                  The quick brown fox jumps over the lazy dog. 
                  동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.
                </div>
              </div>
              <div>
                <div className="text-[var(--color-text-muted)] text-sm mb-2 font-mono">--font-size-sm (14px)</div>
                <div className="text-sm text-[var(--color-text-muted)]">
                  The quick brown fox jumps over the lazy dog. 
                  동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세.
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Components UI Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-[var(--color-border-subtle)] text-[var(--color-text-primary)]">
            UI Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4 text-[var(--color-text-primary)]">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-4 py-2 rounded-lg font-medium transition-colors" 
                        style={{ backgroundColor: 'var(--color-brand-primary)', color: 'var(--color-text-inverse)' }}>
                  Primary Button
                </button>
                <button className="px-4 py-2 rounded-lg font-medium transition-colors" 
                        style={{ backgroundColor: 'var(--color-bg-overlay)', color: 'var(--color-text-primary)' }}>
                  Secondary Button
                </button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-medium mb-4 text-[var(--color-text-primary)]">Cards & Shadows</h3>
              <div className="p-4 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-elevated)]"
                   style={{ boxShadow: 'var(--shadow-md)' }}>
                <h4 className="font-semibold text-[var(--color-text-primary)]">Elevated Card</h4>
                <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                  이 카드는 --shadow-md 토큰과 --color-bg-elevated 토큰을 사용합니다.
                </p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
