import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

import Card from 'components/card/Card';
import EditUserModal from 'containers/EditUserModal';

import './Cards.scss';

export class Cards extends Component {
  componentDidMount () {
    if (!this.props.cardsData && !this.props.isLoading) {
      this.props.loadCardsData();
    }
  }

  onEdit = (e) => {
    this.props.editCard(Number.parseInt(e.currentTarget.id));
  };

  render () {
    const ErrorNotification = this.props.errorMessage ? (
      <Alert bsStyle='danger'>
        <p>{this.props.errorMessage}</p>
      </Alert>
    ) : null;

    const CardsCollection = this.props.cardsData ? (
      <div className='c-cardsCollection'>
        {this.props.cardsData.map((item, index) =>
          <div id={item.id} key={item.id} onDoubleClick={this.onEdit}>
            <Card data={item} />
          </div>
        )}
      </div>
    ) : null;

    const Modal = this.props.editCardId ? <EditUserModal /> : null;

    if (this.props.isLoading) {
      return (<div>Loading data...</div>);
    }

    return (
      <div>
        {ErrorNotification}
        {Modal}
        {CardsCollection}
      </div>
    );
  }
}

Cards.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  cardsData: PropTypes.array,
  editCardId: PropTypes.number,

  editCard: PropTypes.func.isRequired,
  loadCardsData: PropTypes.func.isRequired
};

export default Cards;
