import { useCallback, useEffect, useState } from 'react';

declare global {
  interface Window {
    __theme: any;
    __setPreferredTheme: any;
    __onThemeChange: any;
  }
}

export const useDarkMode = () => {
  const [theme, setTheme] = useState(null);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(nextTheme);
    window.__setPreferredTheme(nextTheme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'object') {
      setTheme(window.__theme);
    }

    window.__onThemeChange = (newTheme: string) => {
      setTheme(newTheme);
    };
  }, []);

  return { theme, toggleTheme };
};
