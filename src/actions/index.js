import { fetchCards } from 'utils/cardsData';

export const Actions = {
  EDIT_CARD: 'EDIT_CARD',
  UPDATE_CARD: 'UPDATE_CARD',
  SHOW_CARDS_LOADING: 'SHOW_CARDS_LOADING',
  SHOW_ERROR: 'SHOW_ERROR',
  CARDS_LOADED: 'CARDS_LOADED',
  CANCEL_EDIT: 'CANCEL_EDIT'

};

const _setCardLoading = (show) => ({
  type   : Actions.SHOW_CARDS_LOADING,
  payload: show
});

const _cardsLoaded = (data) => ({
  type   : Actions.CARDS_LOADED,
  payload: data
});

const _showError = (message) => ({
  type   : Actions.SHOW_ERROR,
  payload: message
});

export const _doCardUpdate = (cardId, cardData) => ({
  type   : Actions.UPDATE_CARD,
  payload: { cardId, cardData }
});

export const cancelEdit = () => ({
  type   : Actions.CANCEL_EDIT
});

export const editCard = (cardId) => ({
  type   : Actions.EDIT_CARD,
  payload: cardId
});

export const updateCard = (cardId, newData) => (dispatch, getState) => {
  // TODO: does dispatch return promise?
  dispatch(_doCardUpdate(cardId, newData));
  dispatch(cancelEdit());
};

export const loadCardsData = () => (dispatch, getState) => {
  dispatch(_setCardLoading(true));
  // TODO: GET URL FROM OPTIONS
  fetchCards()
    .then(rawData => dispatch(_cardsLoaded(JSON.parse(rawData))))
    .catch(err => dispatch(_showError(err.message)))
    .then(() => dispatch(_setCardLoading(false)));
};
