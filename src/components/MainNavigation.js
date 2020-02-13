import React from "react";
import { NavLink } from "react-router-dom";

import "./MainNavigation.css";

export default function MainNavigation({ cartItemNumber }) {
  return (
    <header className="main-nav">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart {cartItemNumber}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
