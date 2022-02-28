import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Cart from './components/Cart';
import uniqid from 'uniqid';
import { useState } from 'react';
function App() {
  const [items, setItems] = useState([
    {
      id: uniqid(),
      title: 'Black Crewneck',
      img: require('./assets/black-crewneck.png'),
      amount: 1,
    },
    {
      id: uniqid(),
      title: 'Black Hoodie',
      img: require('./assets/black-hoodie.png'),
      amount: 1,
    },
    {
      id: uniqid(),
      title: 'Black Shirt',
      img: require('./assets/black-shirt.png'),
      amount: 1,
    },
  ]);
  const [cartItems, setCartItems] = useState([]);
  function addToCartHandler(item) {
    const found = cartItems.findIndex(
      (element) => element.title === item.title
    );
    if (found === -1) {
      const updatedItems = [...cartItems, item];

      setCartItems(updatedItems);
    } else {
      const updatedItems = JSON.parse(JSON.stringify(cartItems));
      console.log('updated items', updatedItems);
      updatedItems[found].amount++;

      setCartItems(updatedItems);
    }

    console.log(cartItems);
  }

  return (
    <Router>
      <div className="flex flex-col flex-wrap content-center">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop items={items} addToCartHandler={addToCartHandler} />}
          />
          <Route path="/cart" element={<Cart items={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
