'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/lib/ThemeContext';

export default function HomeContent() {
  const [isMounted, setIsMounted] = useState(false);
  const theme = useTheme();
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Show loading state while client-side rendering is happening
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <p className="p-10 text-center">Loading...</p>
      </div>
    );
  }

  const { isDarkMode } = theme;
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold p-10 text-center">
        Hello from HomeContent - {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </h1>
      <div className="flex justify-center my-8">
        <button 
          onClick={() => console.log('Theme is:', isDarkMode ? 'Dark' : 'Light')}
          className="px-4 py-2 bg-indigo-600 dark:bg-indigo-400 text-white rounded-md"
        >
          Current Theme: {isDarkMode ? 'Dark' : 'Light'}
        </button>
      </div>
    </div>
  );
} 
