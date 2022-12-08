const userLocale = () => {
  const lang =
    navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;

  return lang === 'ru-RU' || lang === 'uk' ? 'ua' : 'eng';
};
const localStorageLanguage = localStorage.getItem('language') || userLocale();
const defaultLanguage = {
  language: localStorageLanguage,
};
const setLanguageInLocalStorage = (language) => {
  localStorage.setItem('language', language);
};

export const languageReducer = (state = defaultLanguage, action) => {

  switch (action.type) {
    case 'eng':
      setLanguageInLocalStorage('eng');
      return {
        ...state,
        language: 'eng',
      };
    case 'ua':
      setLanguageInLocalStorage('ua');
      return {
        ...state,
        language: 'ua',
      };
    default:
      return state;
  }
};
