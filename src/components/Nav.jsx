import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav className="">
      <ul className="flex justify-center">
        <Link to="/shop">
          <li className="mx-2 text-lg">Shop</li>
        </Link>
        <Link className="text-lg" to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
