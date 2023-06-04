import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Button } from "@chakra-ui/react";
import CartEmpty from "./CartEmpty";
import CardCartTotalInfo from "./CardCartTotalInfo";
import SendOrder from "./SendOrder";
import { Grid, GridItem } from "@chakra-ui/react";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext); //Viene del useContext que recibe el CartContext

  //Removing Items

  const RemoveItem = (id) => {
    const cartFiltered = cart.filter((dat) => dat.id !== id);
    console.log(cartFiltered);
    setCart(cartFiltered);
  };

  //Total de la compra usando UseState

  const [TOTAL, SetTOTAL] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce(
      (TOTAL, product) => TOTAL + product.price * product.quantity,
      0
    );

    SetTOTAL(newTotal);
  }, [cart]);

  return (
    <Grid
      templateAreas={`
                                              "prod total"
                                              " prod total"
                                              "form form"`}
      gridTemplateRows={"auto auto auto"}
      gridTemplateColumns={"2fr 1fr"}
      h="200px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      {cart.length >= 1 ? (
        <>
          <GridItem area={"prod"}>
            {cart.map((prod) => (
              <div
                boxshadow="dark-lg"
                p="6"
                rounded="md"
                bg="white"
                key={prod.id}
                className="cartCard"
              >
                <img src={prod.img} alt="img" className="cartImg" />
                <p>{prod.name}</p>
                <p>{prod.description}</p>
                <p>
                  c/u <span>$</span>
                  {prod.price}
                </p>
                <p>
                  <span>$</span>
                  {prod.price * prod.quantity}
                </p>
                <p>Cantidad: {prod.quantity}</p>
                <Button size="md" onClick={() => RemoveItem(prod.id)}>
                  <span className="material-symbols-outlined">delete </span>
                </Button>
              </div>
            ))}
          </GridItem>

          <GridItem pl="2" area={"total"}>
            <CardCartTotalInfo total={TOTAL} />
          </GridItem>

          <GridItem pl="2" area={"form"}>
            <SendOrder cart={cart} TOTAL={TOTAL} />
          </GridItem>
        </>
      ) : (
        <CartEmpty />
      )}
    </Grid>
  );
};

export default Cart;
