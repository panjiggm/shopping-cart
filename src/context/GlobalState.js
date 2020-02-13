import React, { useState } from "react";
import ShopContext from "./shop-context";

const GlobalState = props => {
  const products = [
    { id: "p1", title: "Gaming Keyboard", price: 2000000 },
    { id: "p2", title: "Shirohige Action Figure", price: 5000000 },
    { id: "p3", title: "Call of Duty: Black Ops", price: 700000 },
    { id: "p4", title: "Samsung S20 Ultra", price: 18000000 }
  ];

  const [cart, setCart] = useState([]);

  const addProductToCart = product => {
    console.log("Adding product", product);
    console.log(cart);
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === product.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };

      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }

    setTimeout(() => setCart(updatedCart), 700);
  };

  const removeProductFromCart = productId => {
    console.log("Removing product", productId);
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productId
    );

    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;

    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }

    setTimeout(() => setCart(updatedCart), 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
