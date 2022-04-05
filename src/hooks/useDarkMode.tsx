import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

declare global {
  interface Window {
    __theme: any;
    __setPreferredTheme: any;
    __onThemeChange: any;
  }
}

export const useDarkMode = () => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    if (theme !== null) {
      dispatch({ type: 'CHANGETHEME', value: theme });
    }
  }, [theme]);

  return { theme, toggleTheme };
};
