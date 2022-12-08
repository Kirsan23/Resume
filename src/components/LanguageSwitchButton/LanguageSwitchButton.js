import { useDispatch, useSelector } from 'react-redux';
import {
  switchedToEng,
  switchedToUa,
} from '../../redux/actions/languageSwitcher';
import './LanguageSwitchButton.scss';

export const LanguageSwitchButton = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.languages.language);

  const switchToEng = () => {
    return dispatch(switchedToEng());
  };
  const switchToUa = () => {
    return dispatch(switchedToUa());
  };

  return (
    <div className='language_switcher'>
      <button
        className={language === 'ua' ? 'disabled' : 'enabled'}
        onClick={() => switchToEng()}
      >
        ENG
      </button>
      <button
        className={language === 'eng' ? 'disabled' : 'enabled'}
        onClick={() => switchToUa()}
      >
        UA
      </button>
    </div>
  );
};
