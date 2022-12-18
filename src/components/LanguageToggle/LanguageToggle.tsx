import React from 'react';
import { clickHandler } from '../../utils';
import './LanguageToggle.scss';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ua, eng } from '../../redux/slices/languageSlice';

export const LanguageToggle = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const language = useAppSelector(
    (state) => state.languages.language
  );

  const switchToEng = () => {
    return dispatch(eng());
  };
  const switchToUa = () => {
    return dispatch(ua());
  };

  return (
    <div className='language_toggle'>
      <button
        className={language === 'ua' ? 'disabled' : 'enabled'}
        onClick={() => clickHandler(switchToEng)}
      >
        ENG
      </button>
      <button
        className={language === 'eng' ? 'disabled' : 'enabled'}
        onClick={() => clickHandler(switchToUa)}
      >
        UA
      </button>
    </div>
  );
};
