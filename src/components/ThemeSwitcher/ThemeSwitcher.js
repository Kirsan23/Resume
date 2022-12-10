import { useContext, useState } from 'react';
import { ThemeContext, THEMES } from '../ThemeContext';
import { clickHandler } from '../../utils/clickHandler';
import './ThemeSwitcher.scss';

export const ThemeSwitcher = () => {
  const { switchTheme, theme } = useContext(ThemeContext);
  const [prevTheme, setPrevTheme] = useState(theme);

  const changeTheme = (selectedTheme) => {
    setPrevTheme(theme);
    switchTheme(selectedTheme);
  };

  return (
    <div className='theme_toggle'>
      <div className='buttons_wrapper'>
        <div className={`switcher ${prevTheme}_to_${theme}`} />
        {THEMES.map((themeName) => (
          <button
            key={themeName}
            className={`${themeName}_button`}
            onClick={() =>
              clickHandler(changeTheme, themeName === theme, themeName)
            }
          ></button>
        ))}
      </div>
    </div>
  );
};
