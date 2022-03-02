import React from 'react';
import propTypes from 'prop-types';

function CartCard(props) {
  return (
    <div className="w-24 flex flex-wrap">
      <div className="flex w-24 flex-wrap items-center">
        <div
          className="w-24 cursor-pointer"
          onClick={() => props.deleteItem(props)}
        >
          Remove Item
        </div>
        <img className="w-24" src={props.img} alt="" />
      </div>

      <div>${props.price}</div>
      <input
        className="w-10 bg-transparent mx-2"
        type="number"
        value={props.amount}
        onChange={(e) => props.amountChangeHandler(props, e)}
      />
    </div>
  );
}
CartCard.propTypes = {
  img: propTypes.string,
  amount: propTypes.oneOfType([propTypes.string, propTypes.number]),
  amountChangeHandler: propTypes.func,
  deleteItem: propTypes.func,
  price: propTypes.number,
};
export default CartCard;
