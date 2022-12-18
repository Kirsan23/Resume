import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';

interface BlockedCard {
  blocked: number | null
}

const initialState: BlockedCard = {
  blocked: null,
}

const blockedCard = (index: number): number => {
  if (index === 0 || !(index % 2)) return index + 1;
  return index - 1;
};

export const portfolioCardSlice = createSlice({
  name: 'cardState',
  initialState,
  reducers: {
    blocked: (state, action: PayloadAction<number>) => {
      state.blocked = blockedCard(action.payload);
    },
    unblocked: state => {
      state.blocked = null
    },
  },
})

export const { blocked, unblocked } = portfolioCardSlice.actions
export const selectPortfolioCard = (state: RootState) => state.portfolioCards.blocked
export default portfolioCardSlice.reducer