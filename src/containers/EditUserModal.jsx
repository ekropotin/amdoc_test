import { connect } from 'react-redux';

import { updateCard, cancelEdit } from 'actions';
import { getEditingCard } from 'selectors';
import Modal from 'components/editUserModal/EditUserModal';

const mapDispatchToProps = {
  cancelEdit,
  updateCard
};

const mapStateToProps = (state) => ({
  data: getEditingCard(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
