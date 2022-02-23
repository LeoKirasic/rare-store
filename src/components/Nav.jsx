import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav className="">
      <ul className="flex">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
