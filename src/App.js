import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

import GlobalState from "./context/GlobalState";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <GlobalState>
      <Router>
        <Switch>
          <Route path="/" component={Product} exact />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </GlobalState>
  );
}

export default App;
