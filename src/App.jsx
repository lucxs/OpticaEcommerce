import {HashRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Welcome from "./components/Welcome";
import ShoppingCartContextProvider from "./context/ShoppingCartContext";

const App = () => {
  return (
    <Router>
    <ShoppingCartContextProvider>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route
            exact
            path="/marca"
            element={<ItemListContainer greeting="Bienvenidos a Mirage" />}
          />
          <Route
            exact
            path="/marca/:marca"
            element={<ItemListContainer greeting="Bienvenidos a Mirage" />}
          />
          <Route exact path="item/:id" element={<ItemDetailContainer />} />

          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </ShoppingCartContextProvider>
    </Router>
  );
};

export default React.memo(App);
