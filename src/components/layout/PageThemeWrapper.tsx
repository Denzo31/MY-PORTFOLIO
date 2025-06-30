'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/lib/ThemeContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PageThemeWrapper({ children }: { children: React.ReactNode }) {
  // Track if component is mounted to prevent hydration mismatch
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        {isMounted && <Navbar />}
        <main className="flex-grow">
          {isMounted ? children : <div className="h-screen" />}
        </main>
        {isMounted && <Footer />}
      </div>
    </ThemeProvider>
  );
} 