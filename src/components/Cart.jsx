import React from 'react';
import CartCard from './CartCard';
import propTypes from 'prop-types';
function Cart(props) {
  console.log('cart props', props);
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
    <div>
      <div className="flex">{renderItems()}</div>
      <div>Total price: {getSumOfItems()}</div>
    </div>
  );
}

Cart.propTypes = {
  items: propTypes.array,
  amountChangeHandler: propTypes.func,
  deleteItem: propTypes.func,
  price: propTypes.number,
};

export default Cart;
