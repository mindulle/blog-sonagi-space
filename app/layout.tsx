import type { Metadata } from 'next';
import {
  Cormorant_Garamond,
  JetBrains_Mono,
  Noto_Serif_KR,
} from 'next/font/google';
import './globals.css';

const cormorantGaramond = Cormorant_Garamond({
  variable: '--sng-font-cinematic',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--sng-font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const notoSerifKR = Noto_Serif_KR({
  variable: '--sng-font-serif-kr',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://blog.sonagi.space'
  ),
  title: {
    default: '민들레 정원 • Mindulle Garden',
    template: '%s | 민들레 정원',
  },
  description:
    '민들레 디자인 시스템(MDS)과 함께 가꾸는 메이커의 열린 사유(Thinking in Public)이자 담백한 신문지(Broadsheet) 에디토리얼 지면입니다.',
  keywords: [
    '민들레정원',
    '디지털가든',
    'Next.js',
    '소나기',
    '개발',
    '디자인시스템',
    'MDS',
    '포트폴리오',
  ],
  authors: [{ name: 'Sonagi Developer', url: 'https://blog.sonagi.space' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://blog.sonagi.space',
    siteName: '민들레 정원 • Mindulle Garden',
    title: '민들레 정원 • Mindulle Garden',
    description:
      '민들레 디자인 시스템(MDS)과 함께 가꾸는 메이커의 열린 사유이자 담백한 신문지 에디토리얼 지면입니다.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '민들레 정원 대표 이미지',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '민들레 정원 • Mindulle Garden',
    description:
      '민들레 디자인 시스템(MDS)과 함께 가꾸는 메이커의 열린 사유이자 담백한 신문지 에디토리얼 지면입니다.',
    images: ['/og-image.png'],
  },
};

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Toaster } from 'sonner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${cormorantGaramond.variable} ${jetbrainsMono.variable} ${notoSerifKR.variable} antialiased`}
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
        <Toaster position="top-center" />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
