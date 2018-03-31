import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

export const Card = (props) => {
  const { data } = props;

  return (
    <div className='c-usercard'>
      <div className='c-usercard__header' >
        <span>{data.name}</span>
      </div>
      <div className='c-usercard__content'>
        <span>{data.email}</span>
        <span>{data.address.city}</span>
        <span>{data.phone}</span>
        <span>{data.website}</span>
        <span>{data.company.name}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired
};

export default Card;
