import React, { Fragment, useContext } from "react";
import MainNavigation from "../components/MainNavigation";
import ShopContext from "../context/shop-context";

import "./Cart.css";

function Cart() {
  const shop = useContext(ShopContext);
  return (
    <Fragment>
      <MainNavigation
        cartItemNumber={shop.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="cart">
        {shop.cart.length <= 0 && <p>No item in the Cart!</p>}
        <ul>
          {shop.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - Rp. {cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button onClick={() => shop.removeProductFromCart(cartItem.id)}>
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </Fragment>
  );
}

export default Cart;
