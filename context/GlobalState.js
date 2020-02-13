import React, { useState } from "react";
import ShopContext from "./shop-context";

const GlobalState = props => {
  const [products, setProducts] = useState([
    { id: "p1", title: "Gaming Keyboard", price: 2000000 },
    { id: "p2", title: "Shirohige Action Figure", price: 5000000 },
    { id: "p3", title: "Call of Duty: Black Ops", price: 700000 },
    { id: "p4", title: "Samsung S20 Ultra", price: 18000000 }
  ]);

  const [cart, setCart] = useState([]);

  const addProductToCart = product => {
    console.log(product);
  };

  const removeProductFromCart = productId => {
    console.log(productId);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        addProductToCart,
        removeProductFromCart
      }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
