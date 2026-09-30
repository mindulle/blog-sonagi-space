import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    passWithNoTests: true,
    exclude: ['**/node_modules/**', '**/dist/**', '**/tests/e2e/**'],
    alias: {
      '@': path.resolve(__dirname, './'),
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/**',
        '.next/**',
        '*.config.{js,ts,mjs,cjs}',
        'app/layout.tsx', // 레이아웃, 메타데이터 등 테스트가 불필요한 파일 제외
        'types/**',
      ],
      // [기업급 설정] 커버리지 강제 규칙: 70% 밑으로 떨어지면 빌드 실패 (일단 주석 처리 후 점진적 도입 가능)
      // thresholds: {
      //   lines: 70,
      //   functions: 70,
      //   branches: 70,
      //   statements: 70,
      // },
    },
  },
});
