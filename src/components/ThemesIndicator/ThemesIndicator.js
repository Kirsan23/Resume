import { useRef } from 'react';
import './ThemesIndicator.scss';

export const ThemesIndicator = (props) => {
  const { theme } = props;
  const THEMES_ICONS = useRef([
    { name: 'sun', icon: 'icon-sun1' },
    { name: 'sun_void', icon: 'icon-sun' },
    { name: 'moon', icon: 'icon-moon' },
    { name: 'cloud', icon: 'icon-cloud' },
  ]).current;

  return (
    <div className='themes_indicators'>
      {THEMES_ICONS.map(({ name, icon }) => (
        <span key={name} className={`${icon} ${theme}`} />
      ))}
    </div>
  );
};
