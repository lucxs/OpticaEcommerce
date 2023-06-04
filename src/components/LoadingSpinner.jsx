import React from "react";
import { Spinner } from "@chakra-ui/react";

//Spinner para la carga de los prods
const LoadingSpinner = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  );
};

export default LoadingSpinner;
