import React from 'react';
import { Top, Bottom, Additional } from './containers';
import { useContext } from 'react';
import { ThemeContext, THEMES, Overlay } from '../../components';
import './Resume.scss';

export const Resume = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`resume ${theme}-mode`}>
      {theme === THEMES[2] && <Overlay />}
      <Top />
      <Additional />
      <Bottom />
    </div>
  );
};
