import React, { createContext, useState, useCallback, useEffect } from 'react';

export const ThemeContext = createContext({theme: localStorage.getItem('theme'), switchTheme: (theme: string): void => {}});

export const LoginContext = createContext({ loggedIn: false, setLoggedIn: (loggedIn: false) => { } })

export const THEMES: string[] = ['light', 'dark', 'blackout'];
const setThemeInLocalStorage = (theme: string): void => {
  localStorage.setItem('theme', theme);
};

export const ThemeProvider = (props: any) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || THEMES[0]
  );
  const { children } = props;
  // const switchTheme = useCallback((theme: string): void => {
  //   setTheme((prevState: any) => (prevState !== theme ? theme : prevState));
  // }, []);

  const switchTheme = (theme: string) => {
    setTheme((prevTheme: string) => (prevTheme !== theme ? theme : prevTheme))
  }

  useEffect(() => {
    setThemeInLocalStorage(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
