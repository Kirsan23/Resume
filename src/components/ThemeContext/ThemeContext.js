import { createContext, useState, useCallback, useEffect } from 'react';

export const ThemeContext = createContext(localStorage.getItem('theme'));
// export const THEMES = {
//   light: 'light',
//   dark: 'dark',
//   veryDark: 'veryDark',
// };
export const THEMES = ['light', 'dark', 'relevant_for_Ukraine'];
const setThemeInLocalStorage = (theme) => {
  localStorage.setItem('theme', theme);
};

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || THEMES[0]);
  const { children } = props;
  const switchTheme = useCallback((theme) => {
    setTheme((prevState) => (prevState !== theme ? theme : prevState));
  }, []);

  useEffect(() => {
    setThemeInLocalStorage(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};