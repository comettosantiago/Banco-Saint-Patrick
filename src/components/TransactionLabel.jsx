import React from 'react';
import PropTypes from 'prop-types';

const TransactionLabel = ( { order, user, amount }) => {
  return (
    <>
      <div className='trxLabelBox'>
        <p> { order } </p>
        <p> { user } </p>
        <p>$ {amount} </p>
      </div>
    </>
  );
};

TransactionLabel.propTypes = {
  order: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
};

TransactionLabel.defaultProps = {
  order: 0,
  user: 'The user name is missing',
  amount: 0
}

export default TransactionLabel;
