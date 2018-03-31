import { createSelector } from 'reselect';

export const isLoading = (state) => state.userCards.loadingData;

export const getErrorMessage = (state) => state.userCards.errorMessage;

export const getCardsData = (state) => state.userCards.cardsData;

export const getEditCardId = (state) => state.userCards.editModeCardId;

export const getEditingCard = createSelector(
  getCardsData,
  getEditCardId,
  (cards, id) => {
    if (cards) {
      return cards.find(item => item.id === id);
    } else return null;
  }
);
