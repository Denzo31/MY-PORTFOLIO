'use client';

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@/lib/ThemeContext';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with no SSR
const Navbar = dynamic(() => import('@/components/layout/Navbar'), { 
  ssr: false,
  loading: () => <div className="h-16 bg-white dark:bg-gray-900"></div>
});

const Footer = dynamic(() => import('@/components/layout/Footer'), { 
  ssr: false,
  loading: () => <div className="h-16 bg-white dark:bg-gray-900"></div>
});

export default function ClientThemeWrapper({ children }: { children: React.ReactNode }) {
  // Track if component is mounted to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  // Set mounted state after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply inline styles as a fallback in case Tailwind classes aren't loading
  const wrapperStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100" style={wrapperStyle}>
        <Suspense fallback={<div className="h-16 bg-white dark:bg-gray-900" style={{ height: '4rem' }}></div>}>
          <Navbar />
        </Suspense>
        <main className="flex-grow">
          {/* Always render children, but apply styles only after mounted */}
          <div className={mounted ? "" : "invisible"}>
            {children}
          </div>
        </main>
        <Suspense fallback={<div className="h-16 bg-white dark:bg-gray-900" style={{ height: '4rem' }}></div>}>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
} 