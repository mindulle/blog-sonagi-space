import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "highlight.js/styles/tokyo-night-dark.css"; // 코드 하이라이팅 테마

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "소나기 블로그",
    template: "%s | 소나기 블로그",
  },
  description: "Next.js와 소나기 디자인 시스템으로 만든 개인 블로그",
  keywords: ["블로그", "Next.js", "소나기", "개발", "디자인"],
  authors: [{ name: "Sonagi Developer" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://blog.sonagi.space",
    siteName: "소나기 블로그",
    title: "소나기 블로그",
    description: "Next.js와 소나기 디자인 시스템으로 만든 개인 블로그",
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
