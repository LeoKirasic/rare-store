import React from 'react';
import propTypes from 'prop-types';

function CartCard(props) {
  return (
    <div className="w-24">
      <img src={props.img} alt="" />
      <div>Amount: {props.amount}</div>
    </div>
  );
}
CartCard.propTypes = {
  img: propTypes.string,
  amount: propTypes.number,
};
export default CartCard;
