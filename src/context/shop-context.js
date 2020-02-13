import React from "react";

export default React.createContext({
  products: [
    { id: "p1", title: "Gaming Keyboard", price: 2000000 },
    { id: "p2", title: "Shirohige Action Figure", price: 5000000 },
    { id: "p3", title: "Call of Duty: Black Ops", price: 700000 },
    { id: "p4", title: "Samsung S20 Ultra", price: 18000000 }
  ],
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {}
});
