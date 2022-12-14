import { combineReducers } from 'redux';
import { portfolioCardReducer, languageReducer } from './reducers/index';


export const rootReducer = combineReducers({
  languages: languageReducer,
  portfolioCardsState: portfolioCardReducer,
});
