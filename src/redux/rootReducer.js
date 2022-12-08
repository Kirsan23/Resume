import { combineReducers } from 'redux';
import { languageReducer } from './reducers/languageReducer';
import { portfolioCardReducer } from './reducers/PortfolioCardReducer'


export const rootReducer = combineReducers({
  languages: languageReducer,
  portfolioCardsState: portfolioCardReducer,
});
