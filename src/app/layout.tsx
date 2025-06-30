import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import ClientThemeWrapper from '@/components/layout/ClientThemeWrapper';
import PageWrapper from '@/components/layout/PageWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SHEMA | Portfolio',
  description: 'Full Stack Developer Portfolio showcasing React, Next.js, and Java expertise',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 min-h-screen`}>
        <ClientThemeWrapper>
          <PageWrapper>
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
          </PageWrapper>
        </ClientThemeWrapper>
      </body>
    </html>
  );
}
