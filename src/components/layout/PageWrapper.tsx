'use client';

import { useEffect, useState } from 'react';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="min-h-screen bg-gray-50 dark:bg-gray-900" />;
  }

  return <>{children}</>;
} 