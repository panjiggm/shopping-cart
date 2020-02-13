import React, { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";
import ShopContext from "../context/shop-context";

import "./Product.css";

function Product() {
  return (
    <ShopContext.Consumer>
      {context => (
        <Fragment>
          <MainNavigation
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
          <main className="products">
            <ul>
              {context.products.map(product => (
                <li key={product.id}>
                  <div>
                    <strong>{product.title}</strong> - Rp. {product.price}
                  </div>
                  <div>
                    <button onClick={() => context.addProductToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </Fragment>
      )}
    </ShopContext.Consumer>
  );
}

export default Product;
