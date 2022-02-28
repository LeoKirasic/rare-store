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
      />
    ));
    return listItems;
  }

  return <div className="flex">{renderItems()}</div>;
}

Cart.propTypes = {
  items: propTypes.array,
};

export default Cart;
