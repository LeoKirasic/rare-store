import React from 'react';
import Card from './Card';
import uniqid from 'uniqid';
function Shop() {
  const items = [
    {
      id: uniqid(),
      title: 'Black Crewneck',
      img: require('../assets/black-crewneck.png'),
    },
    {
      id: uniqid(),
      title: 'Black Hoodie',
      img: require('../assets/black-hoodie.png'),
    },
    {
      id: uniqid(),
      title: 'Black Shirt',
      img: require('../assets/black-shirt.png'),
    },
  ];
  function renderItems() {
    const listItems = items.map((item) => (
      <Card id={item.id} key={item.title} title={item.title} img={item.img} />
    ));
    return listItems;
  }
  return <div className="flex">{renderItems()}</div>;
}

export default Shop;
