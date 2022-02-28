import React from 'react';
import propTypes from 'prop-types';
function Card(props) {
  return (
    <div className="">
      <img className="w-24" src={props.img} alt="" />
      <div>${props.price}</div>
      <button onClick={() => props.addToCartHandler(props)}>Add to Cart</button>
    </div>
  );
}

export default Card;

Card.propTypes = {
  img: propTypes.string,
  addToCartHandler: propTypes.func,
  price: propTypes.number,
};
