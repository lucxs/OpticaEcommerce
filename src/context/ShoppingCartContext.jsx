import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const ShoppingCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Tomando la cantidad de productos para el cartWidget
  const [prodQuant, setProdQuant] = useState(cart.length);

  useEffect(() => {
    {
      cart.length >= 1 ? setProdQuant(cart.length) : setProdQuant(0);
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, prodQuant }}>
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartContextProvider;
