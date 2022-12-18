import { configureStore } from '@reduxjs/toolkit';
import languagesReducer from './slices/languageSlice'
import portfolioCardReducer from './slices/portfolioCardSlice';

export const store = configureStore({
  reducer: {
    languages: languagesReducer,
    portfolioCards: portfolioCardReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch