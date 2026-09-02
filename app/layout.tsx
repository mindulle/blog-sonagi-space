import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--sng-font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--sng-font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://blog.sonagi.space'
  ),
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
  authors: [{ name: 'Sonagi Developer', url: 'https://blog.sonagi.space' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.sonagi.space',
    siteName: '소나기 블로그',
    title: '소나기 블로그',
    description:
      '웹 개발과 디자인 시스템, 그리고 기술적인 통찰력을 공유하는 소나기 블로그입니다.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '소나기 블로그 대표 이미지',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '소나기 블로그',
    description:
      '웹 개발과 디자인 시스템, 그리고 기술적인 통찰력을 공유하는 소나기 블로그입니다.',
    images: ['/og-image.png'],
  },
};

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
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
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
