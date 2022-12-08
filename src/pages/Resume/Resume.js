import { Top } from './containers/Top';
import { Bottom } from './containers/Bottom';
import { Additional } from './containers/Additional';
import { useContext } from 'react';
import { ThemeContext } from '../../components/ThemeContext';
import { THEMES } from '../../components/ThemeContext';
import './Resume.scss';

import { Overlay } from '../../components/Overlay';

export const Resume = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`resume ${theme}-mode`}>
      {theme === THEMES.veryDark && <Overlay />}
      <Top />
      <Additional />
      <Bottom />
    </section>
  );
};
