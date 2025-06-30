'use client';

// Helper for common styles for light/dark modes as inline styles
// Used as backup when Tailwind classes aren't loading properly

export const lightMode = {
  background: '#ffffff', 
  foreground: '#171717',
  primary: '#4f46e5', // indigo-600
  primaryHover: '#4338ca', // indigo-700
  gray100: '#f3f4f6',
  gray800: '#1f2937',
  gray900: '#111827',
};

export const darkMode = {
  background: '#0a0a0a',
  foreground: '#ededed',
  primary: '#6366f1', // indigo-400
  primaryHover: '#818cf8', // indigo-300
  gray100: '#1f2937',
  gray800: '#f3f4f6',
  gray900: '#f9fafb',
};

export const getStylesByTheme = (isDarkMode: boolean) => {
  return isDarkMode ? darkMode : lightMode;
};

// Common component styles
export const commonStyles = {
  container: (isDarkMode: boolean) => ({
    backgroundColor: isDarkMode ? darkMode.background : lightMode.background,
    color: isDarkMode ? darkMode.foreground : lightMode.foreground,
  }),
  card: (isDarkMode: boolean) => ({
    backgroundColor: isDarkMode ? darkMode.gray100 : lightMode.gray100, 
    color: isDarkMode ? darkMode.foreground : lightMode.foreground,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  }),
  button: {
    primary: (isDarkMode: boolean) => ({
      backgroundColor: isDarkMode ? darkMode.primary : lightMode.primary,
      color: '#ffffff',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.375rem',
      fontWeight: 500,
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
    }),
    secondary: (isDarkMode: boolean) => ({
      backgroundColor: 'transparent',
      color: isDarkMode ? darkMode.primary : lightMode.primary,
      padding: '0.75rem 1.5rem',
      borderRadius: '0.375rem',
      fontWeight: 500,
      border: `1px solid ${isDarkMode ? darkMode.primary : lightMode.primary}`,
      transition: 'all 0.3s ease',
    }),
  }
}; 