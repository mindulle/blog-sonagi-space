import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: '소나기 블로그',
    template: '%s | 소나기 블로그',
  },
  description:
    '소나기 블로그는 최신 웹 개발 기술, UI/UX 디자인, 그리고 소나기 디자인 시스템을 활용한 프로젝트 사례를 공유하는 기술 블로그 및 포트폴리오 사이트입니다.',
  keywords: [
    '블로그',
    'Next.js',
    '소나기',
    '개발',
    '디자인',
    '프론트엔드',
    '포트폴리오',
  ],
  authors: [{ name: 'Sonagi Developer' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.sonagi.space',
    siteName: '소나기 블로그',
    title: '소나기 블로그',
    description:
      '웹 개발과 디자인 시스템, 그리고 기술적인 통찰력을 공유하는 소나기 블로그입니다.',
  },
};

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
