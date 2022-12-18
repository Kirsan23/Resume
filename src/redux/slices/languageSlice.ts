import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store';

export type Languages = 'ua' | 'eng'
interface LanguagesState {
  language: Languages
};

const languages: {ua: Languages, eng: Languages} = {
  ua: 'ua',
  eng: 'eng'
}

const userLocale = (): any => {
  const lang: string =
    navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;

  return (lang === 'ru-RU' || lang === 'uk') ? languages.ua : languages.eng;
};

const localStorageLanguage = localStorage.getItem('language') as Languages || userLocale();

const initialState: LanguagesState = {
  language: localStorageLanguage
}

const setLanguageInLocalStorage = (language: Languages): void => localStorage.setItem('language', language);

export const languagesSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    ua: state => {
      setLanguageInLocalStorage(languages.ua);
      state.language = languages.ua;
    },
    eng: state => {
      setLanguageInLocalStorage(languages.eng);
      state.language = languages.eng;
    }
  }
})

export const { ua, eng } = languagesSlice.actions
export const selectLanguage = (state: RootState) => state.languages.language
export default languagesSlice.reducer
