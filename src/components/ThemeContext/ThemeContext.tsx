import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  theme: localStorage.getItem('theme'),
  switchTheme: (theme: string) => {}
});

export const THEMES = ['light', 'dark', 'blackout'] as const;

const setThemeInLocalStorage = (theme: string): void =>
  localStorage.setItem('theme', theme);

export const ThemeProvider = (props: any) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || THEMES[0]
  );
  const { children }: { children: JSX.Element } = props;

  const switchTheme = (theme: string): void => {
    setTheme((prevTheme: string) => (prevTheme !== theme ? theme : prevTheme));
  };

  useEffect(() => {
    setThemeInLocalStorage(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
