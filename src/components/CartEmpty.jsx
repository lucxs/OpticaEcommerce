import React from "react";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="cartEmpty">
      <Alert
        className="cartEmpty__alert"
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Carrito vacio!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Por favor vuelva a la sección del catalogo y asegurese de añadir al
          carrito el producto deseado para finalizar la transacción
        </AlertDescription>

        <Button className="cartEmpty__boton" colorScheme="blue">
          <Link to="/marca">Catalogo </Link>
        </Button>
      </Alert>
    </div>
  );
};

export default CartEmpty;
