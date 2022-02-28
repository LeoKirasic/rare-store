import React from 'react';
import propTypes from 'prop-types';

function CartCard(props) {
  return (
    <div className="w-24 flex flex-wrap">
      <img className=" w-10" src={props.img} alt="" />
      <div>${props.price}</div>
      <input
        className=" w-10"
        type="number"
        value={props.amount}
        onChange={(e) => props.amountChangeHandler(props, e)}
      />
    </div>
  );
}
CartCard.propTypes = {
  img: propTypes.string,
  amount: propTypes.number,
};
export default CartCard;
