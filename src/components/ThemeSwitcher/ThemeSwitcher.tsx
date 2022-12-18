import React, { useContext, useState } from 'react';
import { ThemeContext, THEMES } from '../../components';
import { clickHandler } from '../../utils';
import './ThemeSwitcher.scss';

export const ThemeSwitcher = (): JSX.Element => {
  const { switchTheme, theme } = useContext(ThemeContext);
  const [prevTheme, setPrevTheme] = useState(theme);

  const changeTheme = (selectedTheme: string) => {
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
