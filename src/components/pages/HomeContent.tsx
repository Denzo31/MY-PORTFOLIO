'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/lib/ThemeContext';

export default function HomeContent() {
  // Safe access to theme with client-side only rendering
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <p className="p-10 text-center">Loading...</p>
      </div>
    );
  }
  
  // Only access theme after component is mounted
  const { isDarkMode } = useTheme();
  
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
