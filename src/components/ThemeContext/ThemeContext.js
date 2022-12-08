import { createContext, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext(localStorage.getItem('theme'));
export const THEMES = {
  light: 'light',
  dark: 'dark',
  veryDark: 'veryDark',
};
const setThemeInLocalStorage = (theme) => {
  localStorage.setItem('theme', theme);
};

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || THEMES.light);
  const { children } = props;
  const toggleTheme = useCallback((theme) => {
    setTheme((prevState) => (prevState !== theme ? theme : prevState));
  }, []);

  useEffect(() => {
    setThemeInLocalStorage(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContext.PropTypes = {
  theme: PropTypes.oneOf(['light', 'dark', 'veryDark']),
};
