import React from 'react';
import propTypes from 'prop-types';
function Card(props) {
  return (
    <div className="flex flex-wrap flex-col m-2">
      <img className="w-32" src={props.img} alt="" />
      <div>${props.price}</div>
      <button className="w-fit" onClick={() => props.addToCartHandler(props)}>
        Add to Cart
      </button>
    </div>
  );
}

export default Card;

Card.propTypes = {
  img: propTypes.string,
  addToCartHandler: propTypes.func,
  price: propTypes.number,
};
