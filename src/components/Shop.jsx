import React from 'react';
import Card from './Card';
function Shop() {
  const items = [
    { title: 'Black Crewneck', img: require('../assets/black-crewneck.png') },
    { title: 'Black Hoodie', img: require('../assets/black-hoodie.png') },
    { title: 'Black Shirt', img: require('../assets/black-shirt.png') },
  ];
  function renderItems() {
    const listItems = items.map((item) => (
      <Card key={item.title} title={item.title} img={item.img} />
    ));
    return listItems;
  }
  return <div className="flex">{renderItems()}</div>;
}

export default Shop;
