import { Actions } from 'actions';
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [Actions.SHOW_CARDS_LOADING]: (state, action) => ({ ...state, loadingData: action.payload }),

  [Actions.SHOW_ERROR]: (state, action) => ({ ...state, errorMessage: action.payload }),

  [Actions.CARDS_LOADED]: (state, action) => ({ ...state, cardsData: action.payload }),

  [Actions.EDIT_CARD]: (state, action) => ({ ...state, editModeCardId: action.payload }),

  [Actions.CANCEL_EDIT]: (state, action) => ({ ...state, editModeCardId: null }),

  [Actions.UPDATE_CARD]: (state, action) => {
    const { cardsData } = state;
    const cardIndex = cardsData.findIndex(card => (card.id === action.payload.cardId));
    const newData = cardsData.slice();
    newData[cardIndex] = action.payload.cardData;
    return { ...state, editModeCardId: null, cardsData: newData };
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const defaultState = {
  cardsData: null,
  editModeCardId: null,
  loadingData: false,
  errorMessage: null
};

export default function (state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
