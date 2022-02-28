import React from 'react';
import Card from './Card';
import propTypes from 'prop-types';
function Shop(props) {
  function renderItems() {
    const listItems = props.items.map((item) => (
      <Card
        id={item.id}
        key={item.title}
        title={item.title}
        img={item.img}
        addToCartHandler={props.addToCartHandler}
        amount={item.amount}
        price={item.price}
      />
    ));
    return listItems;
  }
  return <div className="flex">{renderItems()}</div>;
}

Shop.propTypes = {
  items: propTypes.array,
  addToCartHandler: propTypes.func,
  amount: propTypes.number,
};

export default Shop;
