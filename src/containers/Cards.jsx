import { connect } from 'react-redux';

import { editCard, updateCard, loadCardsData, cancelEdit } from 'actions';
import { isLoading, getErrorMessage, getCardsData, getEditCardId } from 'selectors';
import Cards from 'components/cards/Cards';

const mapDispatchToProps = {
  editCard,
  updateCard,
  loadCardsData,
  cancelEdit
};

const mapStateToProps = (state) => ({
  isLoading: isLoading(state),
  errorMessage: getErrorMessage(state),
  cardsData: getCardsData(state),
  editCardId: getEditCardId(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
