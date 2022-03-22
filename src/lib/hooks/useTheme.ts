import { useState } from 'react';

function useTheme() {
  let isBrowserDarkMode = null;
  if (typeof window !== 'undefined')
    isBrowserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let initTheme = isBrowserDarkMode ? 'dark' : 'light';

  let localSettingTheme = null;
  if (typeof localStorage !== 'undefined') localSettingTheme = localStorage.getItem('theme');
  if (localSettingTheme) initTheme = localSettingTheme;

  const [theme, setTheme] = useState(initTheme);

  function setMode(mode: string) {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  }

  function toggleTheme() {
    setMode(theme === 'light' ? 'dark' : 'light');
  }

  return [theme, toggleTheme] as const;
}

export default useTheme;
