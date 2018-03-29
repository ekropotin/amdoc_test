export const Actions = {
  EDIT_CARD: 'EDIT_CARD',
  UPDATE_CARD: 'UPDATE_CARD',
  SHOW_CARDS_LOADING: 'SHOW_CARDS_LOADING',
  SHOW_ERROR: 'SHOW_ERROR',
  CARDS_LOADED: 'CARDS_LOADED'

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

export const startCardEdit = (cardId) => ({
  type   : Actions.EDIT_CARD,
  payload: cardId
});

export const updateCard = (cardId, cardData) => ({
  type   : Actions.EDIT_CARD,
  payload: { cardId, cardData }
});

export const loadCardsData = () => (dispatch, getState) => {
  dispatch(_setCardLoading(true));
  // TODO: GET URL FROM OPTIONS
  fetch('/data/cards.json')
    .then(rawData => dispatch(_cardsLoaded(JSON.parse(rawData))))
    .catch(err => dispatch(_showError(err.message)))
    .then(() => dispatch(_setCardLoading(false)));
};
