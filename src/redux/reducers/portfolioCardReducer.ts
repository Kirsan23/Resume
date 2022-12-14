const defaultState = { blocked: null };

const blockedCard = (index: number) => {
  if (index === 0 || !(index % 2)) return index + 1;
  return index - 1;
};

export const portfolioCardReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case false:
      return {
        ...state,
        blocked: null,
      };

    case true:
      return {
        ...state,
        blocked: blockedCard(action.index),
      };
    default:
      return state;
  }
};
