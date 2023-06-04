import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContext";
const CartWidget = () => {
  //Tommando de context la cantidad y dinamizar el cartWidget
  const { prodQuant } = useContext(CartContext);

  return (
    <div>
      <Button colorScheme="gray" className="cartBtn">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span className="cartBtn__Number">{prodQuant}</span>
      </Button>
    </div>
  );
};

export default CartWidget;
