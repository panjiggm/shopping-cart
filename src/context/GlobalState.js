import React, { useReducer } from "react";
import ShopContext from "./shop-context";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";

const GlobalState = props => {
  const products = [
    { id: "p1", title: "Gaming Keyboard", price: 2000000 },
    { id: "p2", title: "Shirohige Action Figure", price: 5000000 },
    { id: "p3", title: "Call of Duty: Black Ops", price: 700000 },
    { id: "p4", title: "Samsung S20 Ultra", price: 18000000 }
  ];

  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product });
    }, 700);
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      dispatch({
        type: REMOVE_PRODUCT,
        productId
      });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
