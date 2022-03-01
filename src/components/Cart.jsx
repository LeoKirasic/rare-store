import React from 'react';
import CartCard from './CartCard';
import propTypes from 'prop-types';
function Cart(props) {
  function renderItems() {
    const listItems = props.items.map((item) => (
      <CartCard
        id={item.id}
        key={item.title}
        title={item.title}
        img={item.img}
        amount={item.amount}
        amountChangeHandler={props.amountChangeHandler}
        deleteItem={props.deleteItem}
        price={item.price}
      />
    ));
    return listItems;
  }
  function getSumOfItems() {
    let total = 0;
    for (let i = 0; i < props.items.length; i++) {
      total += props.items[i].price * props.items[i].amount;
    }
    return total;
  }
  return (
    <div className="flex flex-col items-center">
      <div className="text-xl">Total price: {getSumOfItems()}</div>
      <div className="flex gap-4">{renderItems()}</div>
      <button onClick={props.deleteAllItems}>CHECK OUT</button>
    </div>
  );
}

Cart.propTypes = {
  items: propTypes.array,
  amountChangeHandler: propTypes.func,
  deleteItem: propTypes.func,
  price: propTypes.number,
  deleteAllItems: propTypes.func,
};

export default Cart;
