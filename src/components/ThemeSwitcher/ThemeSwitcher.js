import { useContext, useState } from 'react';
import { ThemeContext, THEMES } from '../ThemeContext';
import { ThemesIndicator } from '../ThemesIndicator';
import './ThemeSwitcher.scss';

export const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [prevTheme, setPrevTheme] = useState(theme);

  const handleClick = (selectedTheme) => {
    if (selectedTheme === theme) return;

    setPrevTheme(theme);
    toggleTheme(selectedTheme);
  };

  return (
    <div className='theme_switcher'>
      <ThemesIndicator theme={theme} />
      <div className='buttons-wrapper'>
        <div className={`switcher ${prevTheme}_to_${theme}`} />
        <button
          className={`button light_btn`}
          onClick={() => handleClick(THEMES.light)}
        ></button>
        <button
          className={`button dark_btn`}
          onClick={() => handleClick(THEMES.dark)}
        ></button>
        <button
          className='button veryDark_btn'
          onClick={() => handleClick(THEMES.veryDark)}
        ></button>
      </div>
    </div>
  );
};
