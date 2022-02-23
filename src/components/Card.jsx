import React from 'react';
import propTypes from 'prop-types';
function Card(props) {
  return <img className=" w-32" src={props.img} alt="" />;
}

export default Card;

Card.propTypes = {
  img: propTypes.string,
};
