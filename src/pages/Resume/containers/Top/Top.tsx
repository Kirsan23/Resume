import React, { useContext, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext, LanguageToggle, ThemeSwitcher, ThemesIndicator } from '../../../../components';
import './Top.scss';

export const Top = () => {
  const CONTACTS: any = useRef([
    { name: 'Phone', icon: 'icon-phone', href: 'tel: +380958654034' },
    {
      name: 'LinkedIn',
      icon: 'icon-linkedin',
      href: 'https://www.linkedin.com/in/kyrylo-berehovyi-3a260412b/',
    },
    { name: 'Mail', icon: 'icon-mail', href: 'mailto: beregovi.k@gamil.com' },
    {
      name: 'Telegram',
      icon: 'icon-telegram',
      href: 'https://t.me/Kirill_Beregovoi',
    },
    {
      name: 'GitHub',
      icon: 'icon-github path1',
      href: 'https://github.com/Kirsan23',
    },
  ]).current;
  const PERSON: any = useRef({
    eng: {
      name: 'KYRYLO BEREHOVYI',
      position: 'Front-End Developer',
    },
    ua: { name: 'КИРИЛО БЕРЕГОВИЙ', position: 'Front-End Розробник' },
  }).current;

  const language = useSelector((state: any) => state.languages.language);
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`top ${theme}-mode`}>
      <div className='wrapper'>
        <LanguageToggle />
        <ThemeSwitcher />
        <h1 className='name'>{PERSON[language].name}</h1>
        <h3 className='position'>{PERSON[language].position}</h3>
        {/* <ThemesIndicator theme={theme} /> */}
        <div className='contacts'>
          {CONTACTS.map(({ name, icon, href }: { name: string, icon: string, href: string }) => (
            <a key={name} href={href}>
              <span className={`${icon} icons`} />
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
